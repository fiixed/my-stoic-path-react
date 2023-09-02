// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AppButton from './components/AppButton';
// import JournalList from './components/JournalList';

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

const App = () => {
  // const [entries, setEntries] = useState<
  //   { id: string; timestamp: Date; description: string }[]
  // >([]);
  // const [entry, setEntry] = useState('');
  // const [selectedId, setSelectedId] = useState('');

  // useEffect(() => {
  //   const fetchEntries = async () => {
  //     const { data } = await axios('http://localhost:8000/journal');

  //     setEntries(data.entries.reverse());
  //   };
  //   fetchEntries();
  // }, []);

  return (
    <>
      <JournalForm />
      <JournalList />
    </>
  );
    // <div className="max-w-3xl mx-auto space-y-6">
    //   <form
    //     onSubmit={async (evt) => {
    //       evt.preventDefault();
    //       if (selectedId) {
    //         const { data } = await axios.patch(
    //           `http://localhost:8000/journal/${selectedId}`,
    //           {
    //             description: entry,
    //           }
    //         );
    //         const updatedEntries = entries.map((entry) => {
    //           if (entry.id === selectedId) {
    //             entry.description = data.entry.description;
    //             entry.timestamp = data.entry.timestamp;
    //           }
    //           return entry;
    //         });
    //         setEntries([...updatedEntries]);
    //         setEntry('');
    //         return;
    //       }
    //       const { data } = await axios.post(
    //         'http://localhost:8000/journal/create',
    //         {
    //           description: entry,
    //         }
    //       );
    //       setEntries([data.entry, ...entries]);
    //       setEntry('');
    //     }}
    //     className="space-y-6 bg-white shadow-md rounded p-5"
    //   >
    //     <h1 className="font-semibold text-2xl text-center">Journal</h1>
    //     <div>
    //       <textarea
    //         placeholder="Entry"
    //         className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
    //         value={entry}
    //         onChange={(evt) => {
    //           setEntry(evt.target.value);
    //         }}
    //       ></textarea>
    //     </div>
    //     <div className="text-right">
    //       <AppButton title="Submit" type="regular" />
    //     </div>
    //   </form>

    
    // </div>
  
};

export default App;
