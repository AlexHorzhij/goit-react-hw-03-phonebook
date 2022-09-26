import PropTypes from 'prop-types';
import { Item, Button, List} from './ContactList.styled';


export function ContactList({ contacts, removeContact }) {
    return (<List>{contacts.map(contact => <Item key={contact.id}>{contact.name}: {contact.number}
        <Button id={contact.id} onClick={removeContact}>Delete</Button></Item>)}</List>)
    }
    
ContactList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
}