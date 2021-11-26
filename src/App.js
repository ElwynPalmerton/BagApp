import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBagPage from './components/AddBagPage';
import {Routes, Route, Link} from 'react-router-dom';

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
      <Route path="/" element={<AddBagPage
      addBag={addBag}
      handleFormChange={handleFormChange}
      formFields={formFields}
      setFormFields={setFormFields}
      bags={bags}
    />}></Route>
    </Routes>
    {/* // <AddBagPage */}
    {/* //   addBag={addBag}
    //   handleFormChange={handleFormChange}
    //   formFields={formFields}
    //   setFormFields={setFormFields}
    //   bags={bags}
    // /> */}
    
    </div>

  );
}

export default App;
