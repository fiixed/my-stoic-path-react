import AppButton from './components/AppButton';
import JournalEntry from './components/JournalEntry';

const App = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-6 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Journal</h1>
        <div>
          <textarea
            placeholder="Entry"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
          ></textarea>
        </div>
        <div className="text-right">
          <AppButton
            title="Submit"
            type="regular"
            onClick={() => console.log('Submit clicked')}
          />
        </div>
      </div>

      {/* Journal Entry Items */}
      <JournalEntry timestamp="test" />
    </div>
  );
};

export default App;
