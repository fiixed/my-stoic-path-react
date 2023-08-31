import { FC } from 'react';
import moment from 'moment';
import AppButton from './AppButton';

interface Props {
  timestamp: Date;
}

const JournalEntry: FC<Props> = ({ timestamp }) => {
  const newDate = moment(timestamp).format('MM-DD-YYYY  hh:mm:ss a');

  return (
    <div className="bg-white shadow-md rounded p-5">
      <p className="font-semibold mb-4 text-gray-700 text-lg">{newDate}</p>
      <div className="space-x-4">
        <AppButton title="View" type="regular" />
        <AppButton title="Edit" type="normal" />
        <AppButton title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default JournalEntry;
