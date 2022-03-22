import PropTypes from 'prop-types';
import { Label, Input} from "../Form/FormStyle.styled"
import { nanoid } from 'nanoid'

export function Filter({ filter, setFilter }) {
const inputId = nanoid();

   return (<>
      <Label htmlFor={inputId}>Find contacts by name</Label>
      <Input
         value={filter}
         onChange={(e) => setFilter(e.target.value)}
         id={inputId}
         type="text" />
   </>);
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};