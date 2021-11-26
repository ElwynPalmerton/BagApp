import BagDisplay from "./BagDisplay";
import ThreeColumnLayout from "../Layout/ThreeColumnLayout";

function BagDisplayPage({ bags }) {
  return (
    <ThreeColumnLayout>
      <BagDisplay bags={bags} />
    </ThreeColumnLayout>
  );
}

export default BagDisplayPage;
