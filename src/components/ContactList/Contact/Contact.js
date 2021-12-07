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
            <div>
                <Link to={`/edit/${id}`}>
                    <button className="editBtn">Edit</button>
                </Link>
                <button onClick={() => onDelete(id)} className="deleteBtn">Delete</button>
            </div>
        </div>
    );
}
  
export default Contact;