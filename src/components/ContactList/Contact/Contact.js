import { Link } from "react-router-dom";
import "../ContactList.css";

const Contact = ({contact , onDelete }) => {
    const {name, email, id } = contact;
    return (
        <div key={id} className="contactList">
            <Link to={{ pathname:`user/${id}` , state:{contact:contact} }} > 
                <div className="items">
                    <p>name: {name}</p>
                    <p>name: {email}</p>
                </div>
            </Link>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}
  
export default Contact;