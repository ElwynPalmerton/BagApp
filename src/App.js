import './App.css';
import {useState} from 'react';
import AddBagForm from './components/AddBagForm';
import Header from './components/Header';
import BagDisplay from './components/BagDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBagPage from './components/AddBagPage';

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
    <AddBagPage
      addBag={addBag}
      handleFormChange={handleFormChange}
      formFields={formFields}
      setFormFields={setFormFields}
      bags={bags}
    />
    
    </div>

  );
}

export default App;
