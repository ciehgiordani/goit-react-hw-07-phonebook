import { useDispatch, useSelector } from 'react-redux'; // we get access to the page
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid'; // generates unique ids
import { toast } from 'react-toastify'; // message package
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch(); // for action dispatch
  const contacts = useSelector(selectContacts); // we get access to the page

  const handleSubmit = event => {
    event.preventDefault(); // cancel the standard behavior of the browser

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // Check for duplicates
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    // If the contact already exists, we display a message
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); // let's dispatch the action
    event.currentTarget.reset(); // clean the form
  };

  return (
    <Form onSubmit={handleSubmit}> {/* we send data from the form */}
      <Label htmlFor={nanoid()}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Label>
      <Label htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

