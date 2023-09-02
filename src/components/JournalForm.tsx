import { useDispatch, useSelector } from 'react-redux';
import { changeDescription, addEntry} from '../store';

import AppButton from './AppButton';

const JournalForm = () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => {
    return state.form.description;
  });
  const handleDescriptionChange = (event) => {
    dispatch(changeDescription(event.target.value))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEntry({description}));

  }
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Journal</h1>
        <div>
          <textarea
            placeholder="Entry"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="text-right">
          <AppButton title="Submit" type="regular" />
        </div>
      </form>
    </div>
  );
};

export default JournalForm;
