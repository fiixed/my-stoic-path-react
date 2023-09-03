import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const JournalSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.entries.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <input
        placeholder="Search"
        className="w-full border-b-2 border-gray-700 outline-none"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default JournalSearch;
