import "./ContactList.css";
const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            {contacts.map(contact => {
                const { name, email, id } = contact;
                return(
                    <div key={id} className="contactList">
                        <div className="items">
                            <p>name: {name}</p>
                            <p>name: {email}</p>
                        </div>
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </div>
                );
            })}
        </>
    );
}
export default ContactList;