import s from '../Form/Form.module.css';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.input}>
      Find contact by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
export default Filter;
