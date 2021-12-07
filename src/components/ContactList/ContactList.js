import "./ContactList.css";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContactsService";
import deleteContact from "../../services/deleteContactService";

const ContactList = (props) => {
    const [contacts, setContacts] = useState(null);
    const [allContacts, setAllContacts] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchContacts = async () =>{
          const {data} =  await getContacts();
          setContacts(data);
          setAllContacts(data);
        };
        try {
          fetchContacts();
        } catch (error) {}
    
    }, []);

    const deleteContactHandler = async (id) => {
        try {
          await deleteContact(id);
          const filteredContacts = contacts.filter((c) => c.id !== id );
          setContacts(filteredContacts);
        } catch (error) {
          console.log("error...")
        }
    };

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        const search = e.target.value;
       if(search !== ""){
        const filteredContacts = allContacts.filter((c) => {
            return Object.values(c)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        setContacts(filteredContacts);
       }else{
           setContacts(allContacts)
       }
    };

    return (
        <section className="listWrapper">
            <div className="contactListContent">
                <div className="listHeader">
                    <h>Contacts</h>
                    <Link to="/add">
                        <button>Add</button>
                    </Link>
                </div>
                <div>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={searchHandler}
                        className="searchBox"
                        placeholder="search ..."
                    />
                </div>
                {contacts ? contacts.map(contact => {
                    // const { name, email, id } = contact;
                    return <Contact contact={contact} onDelete={deleteContactHandler} />
                }) : (<p> loading... </p>) }
            </div>
        </section>
    );
}
export default ContactList;