import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBagPage from './components/AddBagPage';
import {Routes, Route} from 'react-router-dom';
import BagDisplayPage from './components/BagDisplayPage';
import Home from './components/Home';

function App() {

  const [bags, setBags] = useState([]);

  const [formFields, setFormFields] = useState({
    bagId: "",
    source: "",
    location: "",
    destination: "",
  });

  function handleFormChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    // console.log("name", name, "value", value);

    setFormFields({
      ...formFields,
      [name]: value,
    });

    // console.log(formFields);
  }

  function addBag(){
    setBags([...bags, formFields]);
  }

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        {/* <Route path="/login" element={<Login/>}>
        </Route> */}
        <Route path="bags" element={<BagDisplayPage bags={bags}/>}>
        </Route>
        <Route path="/addbag" element={<AddBagPage
          addBag={addBag}
          handleFormChange={handleFormChange}
          formFields={formFields}
          setFormFields={setFormFields}
          bags={bags}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;
