import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ThreeColumnLayout from "../../Layout/ThreeColumnLayout";
import SelectedBagForm from "./SelectedBagForm";

function SelectedBagPage({ bags }) {
  let { id } = useParams();
  const [selectedBag, setSelectedBag] = useState({});

  useEffect(() => {
    let selected = bags.find((bag) => {
      console.log(bag, " ", id);
      if (bag.bagtag == id) return bag;
    });
    console.log(selected);
    setSelectedBag(selected);
  }, [bags, id]);

  return (
    <ThreeColumnLayout>
      <h1>Task#: {id}</h1>
      <SelectedBagForm selectedBag={selectedBag} />
    </ThreeColumnLayout>
  );
}

export default SelectedBagPage;
