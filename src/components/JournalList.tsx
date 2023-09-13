import { useSelector, useDispatch } from 'react-redux';
import { useFetchEntriesQuery, useRemoveEntryMutation } from '../store';
import { editEntry } from '../store';
import JournalListItem from './JournalListItem';
import Skeleton from './Skeleton';

const JournalList = () => {
  const { data, error, isLoading } = useFetchEntriesQuery(null);
  const [removeEntry, results] = useRemoveEntryMutation();
  console.log(data, error, isLoading);
  const dispatch = useDispatch();
  const filteredEntries = useSelector(({ entries: { data, searchTerm } }) => {
    return data.filter((entry) =>
      entry.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleEntryDelete = (entry) => {
    removeEntry(entry.id);
  };

  const handleEntryEdit = (entry) => {
    dispatch(editEntry(entry));
  };

  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div> Error loading albums.</div>;
  } else {
    content = data.entries
      .map((entry) => {
        return (
          <JournalListItem
            onEditClick={() => handleEntryEdit(entry)}
            onDeleteClick={() => handleEntryDelete(entry)}
            key={entry.id}
            timestamp={entry.timestamp}
            description={entry.description}
          />
        );
      })
      .reverse();
  }

  return <div>{content}</div>;
};

export default JournalList;
