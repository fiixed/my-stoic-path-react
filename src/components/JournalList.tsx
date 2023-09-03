import { useSelector, useDispatch } from 'react-redux';
import { editEntry,removeEntry } from '../store';
import JournalListItem from './JournalListItem';

const JournalList = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => {
    return state.entries.data.filter((entry) =>
      entry.description.toLowerCase().includes(state.entries.searchTerm.toLowerCase())
    );
  });
 
  const handleEntryDelete = (entry) => {
    dispatch(removeEntry(entry.id));
   
  };

  const handleEntryEdit = (entry) => { 
    dispatch(editEntry(entry));
  };
  const renderedEntries = entries.map((entry) => {
    return (
      <JournalListItem
        onEditClick={() => handleEntryEdit(entry)}
        onDeleteClick={() => handleEntryDelete(entry)}
        key={entry.id}
        timestamp={entry.timestamp}
        description={entry.description}
      />
    );
  }).reverse();

  return <div>{renderedEntries}</div>;
};

export default JournalList;
