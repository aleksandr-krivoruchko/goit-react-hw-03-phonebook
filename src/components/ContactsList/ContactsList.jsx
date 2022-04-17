import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export function ContactsList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(item => (
        <Contact
          key={item.number}
          number={item.number}
          name={item.name}
          id={item.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      deleteContact: PropTypes.func.isRequired,
    })
  ),
};
