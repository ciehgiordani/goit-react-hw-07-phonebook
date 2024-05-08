import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  // Using the selectContacts selector to retrieve a list of contacts from the Redux repository
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Running asynchronous Thunk action fetchContacts when mounting a component
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // If there are contacts, the filtering component is shown
        <Filter />
      ) : (
        // If there are no contacts, a message about no contacts is displayed

        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // If there are contacts, the contact list component is shown
        <ContactList />
      )}
    </Container>
  );
};

export default App;
