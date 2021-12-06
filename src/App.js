import { useState , useEffect} from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import {Switch, Route} from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    //setContacts([...contacts, {id: Math.random() * 100, name:contact.name, email:contact.email} ]);
    setContacts([...contacts, {id: Math.random() * 100, ...contact} ]);
    
  }

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id );
    setContacts(filteredContacts)

  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if(savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route 
          path="/add" 
          render={(props) => <AddContact addContactHandler={addContactHandler} {...props} />} />
        <Route 
          path="/" 
          render={(props) => <ContactList contacts={contacts} onDelete={deleteContactHandler} {...props} />} />
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </div>
  );
}

export default App;
