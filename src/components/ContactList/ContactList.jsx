import { useDispatch, useSelector } from 'react-redux'; // to access the page
import { useEffect } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations'; // operations
import { Button, Item, List, Text, Spinner } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // pull out from the page
  const isLoading = useSelector(selectIsLoading); // pull out from the page
  const error = useSelector(selectError); // pull out from the page
  const dispatch = useDispatch(); // for action dispatch

  useEffect(() => {
    dispatch(fetchContacts()); // let's dispatch the action
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // let's dispatch the action
  };

  return (
    <>
      {isLoading && <Spinner />}

      {/* if there are no contacts and no download and no error */}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}

      {/* if an error occurred */}
      {error && <Text>{error}</Text>}
      <List>

        {/* We go through the array of contacts and render them */}
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <GrContactInfo size={20} />
            <Text>
              {name}: {phone}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};


