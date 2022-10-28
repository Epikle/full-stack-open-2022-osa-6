import { connect } from 'react-redux';

import { setFilter } from '../reducers/filterReducer';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filter} />
    </div>
  );
};

const mapStateProps = (state) => {
  return { filter: state.filter };
};

const mapDispatchToProps = {
  setFilter,
};

const ConnectedFilter = connect(mapStateProps, mapDispatchToProps)(Filter);

export default ConnectedFilter;
