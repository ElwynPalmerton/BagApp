import './App.css';
import {useState} from 'react';
import AddBagForm from './components/AddBagForm';
import Header from './components/Header';
import BagDisplay from './components/BagDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  function handleSubmitBagForm(){
    // e.preventdefault();
    setBags([...bags, formFields]);
    // console.log("Hello from App");
    // console.log(formFields);
    
    // console.log(bags);
  }

  return (
    <div>
      <Header/>
    <AddBagForm
      bagFormSubmit={handleSubmitBagForm}
      handleFormChange={handleFormChange}
      formFields={formFields}
      setFormFields={setFormFields}
    />
    <BagDisplay
      bags={bags}
    />
    </div>

  );
}

export default App;
