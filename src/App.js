import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBagPage from "./components/AddBagPage";
import { Routes, Route } from "react-router-dom";
import BagDisplayPage from "./components/BagDisplayPage";
import Home from "./components/Home";
import Login from "./components/LoginPage";
import { useNavigate } from "react-router-dom";
import mockData from "./components/mockData";

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

  function selectBag(id) {
    setBags(
      bags.map((bag) =>
        bag.bagId === id ? { ...bag, currentTask: true } : bag
      )
    );
  }

  function handleSubmitLogin(newUser) {
    setUser(newUser);
    setLoggedIn(true);
    console.log(newUser);
    console.log(user);
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login handleSubmitLogin={handleSubmitLogin} />}
        ></Route>
        <Route
          path="bags"
          element={<BagDisplayPage selectBag={selectBag} bags={bags} />}
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
