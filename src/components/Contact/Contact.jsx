import PropTypes from 'prop-types';
import { ContactStyle, ButtonStyle } from "./ContactStyle.styled";

export function Contact({ number, name, id, deleteContact}) {

   return (
      <ContactStyle id={id}>
      <ButtonStyle type='button' onClick={() => deleteContact(id)}>X</ButtonStyle>
         <p>{`${name}: ${number}`}</p>
      </ContactStyle>
   );
}

Contact.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};