import { useState , useEffect} from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import {Switch, Route} from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import getContacts from './services/getContactsService';
import deleteContact from './services/deleteContactService';
import addContact from './services/addContactService';
import EditContact from './components/EditContact/EditContact';
import updateContact from './services/updateContact';

function App() {
  const [contacts, setContacts] = useState([]);


  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
    //setContacts([...contacts, {id: Math.random() * 100, name:contact.name, email:contact.email} ]);
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id );
      setContacts(filteredContacts)
    } catch (error) {
      console.log("error...")
    }
  };

  const editContactHandler = async (contact, id) => {
    try {
      await updateContact(id, contact);
      const {data} = await getContacts();
      setContacts(data);
    } catch (error) {}
  };

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if(savedContacts) setContacts(savedContacts);
    //use local database:
    const fetchContacts = async () =>{
      const {data} =  await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}

  }, []);
  

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);


  return (
    <div className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" 
          render={(props) => <EditContact editContactHandler={editContactHandler} {...props} />} />
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
