import { useState, useEffect } from 'react';
import axios from 'axios';
import AppButton from './components/AppButton';
import JournalEntry from './components/JournalEntry';

const App = () => {
  const [entries, setEntries] = useState<{ id: string; timestamp: Date }[]>([]);
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const fetchEntries = async () => {
      const { data } = await axios('http://localhost:8000/journal');
      setEntries(data.entries);
    };
    fetchEntries();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          const { data } = await axios.post(
            'http://localhost:8000/journal/create',
            {
              description: entry,
            }
          );
          setEntries([data.entry, ...entries]);
          setEntry('');
        }}
        className="space-y-6 bg-white shadow-md rounded p-5"
      >
        <h1 className="font-semibold text-2xl text-center">Journal</h1>
        <div>
          <textarea
            placeholder="Entry"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            value={entry}
            onChange={(evt) => {
              setEntry(evt.target.value);
            }}
          ></textarea>
        </div>
        <div className="text-right">
          <AppButton title="Submit" type="regular" />
        </div>
      </form>

      {/* Journal Entry Items */}
      {entries.map((entry) => {
        return <JournalEntry key={entry.id} timestamp={entry.timestamp} />;
      })}
    </div>
  );
};

export default App;
