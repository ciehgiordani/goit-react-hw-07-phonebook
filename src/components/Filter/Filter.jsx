import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux'; // access to the store
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch(); // for action dispatch
  const filter = useSelector(selectFilter); // pull out from the page

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))} // let's dispatch the action
      />
    </Label>
  );
};

