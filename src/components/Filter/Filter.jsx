import PropTypes from 'prop-types';
import { Label, Input } from '../Form/FormStyle.styled';

export function Filter({ filter, setFilter }) {
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          type="text"
        />
      </Label>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
