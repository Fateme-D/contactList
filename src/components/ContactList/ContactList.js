import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./ContactList.css";

const ContactList = ({ contacts , onDelete }) => {
    return (
        <section className="listWrapper">
            <div className="contactListContent">
                <div className="listHeader">
                    <h>Contacts</h>
                    <Link to="/add">
                        <button>Add</button>
                    </Link>
                </div>
                {contacts.map(contact => {
                    // const { name, email, id } = contact;
                    return <Contact contact={contact} onDelete={onDelete} />
                })}
            </div>
        </section>
    );
}
export default ContactList;