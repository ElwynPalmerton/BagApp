import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Navbars/Header";
import Menu from "./components/Navbars/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBagPage from "./components/AddBag/AddBagPage";
import { Routes, Route } from "react-router-dom";
import BagDisplayPage from "./components/ShowBags/BagDisplayPage";
import Login from "./components/LoginPage/LoginPage";
import { useNavigate } from "react-router-dom";
import mockData from "./components/mockData";
import MuiLoginPage from "./components/LoginPage/MuiLoginPage";

function App() {
  let navigate = useNavigate();

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
    // console.log(bags);
  }, [bags]);

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
      <Menu user={user} loggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route
          path="login"
          element={<Login handleSubmitLogin={handleSubmitLogin} />}
        ></Route> */}
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
      </Routes>
    </div>
  );
}

export default App;
