import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Navbars/Header";
import Menu from "./components/Navbars/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBagPage from "./components/AddBag/AddBagPage";
import { Routes, Route } from "react-router-dom";
import BagDisplayPage from "./components/ShowBags/BagDisplayPage";
import { useNavigate } from "react-router-dom";
import mockData from "./components/mockData";
import MuiLoginPage from "./components/LoginPage/MuiLoginPage";
import SelectedBagPage from "./components/SelectedBagPage/SelectedBagPage";
import { usePosition } from "./components/Utils/usePosition";

function App() {
  let navigate = useNavigate();
  const { position, error } = usePosition();
  // const [position, setPosition] = useState({ longitude: 0, latitude: 0 });

  const [bags, setBags] = useState(mockData);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({
    name: "",
    deviceId: "",
  });

  function addBag(formFields) {
    const newBag = {
      ...formFields,
      currentTask: false,
      completed: false,
    };
    setBags([...bags, newBag]);
  }

  useEffect(() => {
    console.log();
  });

  function pickupBag(id) {
    setBags(
      bags.map((bag) => (bag.id === id ? { ...bag, currentTask: true } : bag))
    );
  }

  function deliverBag(id) {
    console.log("delivering bag#: ", id);
    setBags(
      bags.map((bag) =>
        bag.id === id ? { ...bag, currentTask: false, completed: true } : bag
      )
    );
  }

  function handleSubmitLogin(newUser, initialBags) {
    setUser(newUser);
    setLoggedIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
    setUser({
      name: "",
      deviceId: "",
    });
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <Header user={user} loggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <Menu
        user={user}
        position={position}
        loggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <div>
        <Routes>
          <Route
            path="login"
            element={<MuiLoginPage handleSubmitLogin={handleSubmitLogin} />}
          ></Route>
          <Route
            path="bags"
            element={
              <BagDisplayPage
                initializeBags={setBags}
                pickupBag={pickupBag}
                deliverBag={deliverBag}
                bags={bags}
              />
            }
          ></Route>
          <Route
            path="/addbag"
            element={<AddBagPage addBag={addBag} bags={bags} />}
          ></Route>
          <Route
            path="/selectedbag/:id"
            element={<SelectedBagPage bags={bags} />}
          ></Route>
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
