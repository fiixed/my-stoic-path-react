import { FC } from 'react';
import moment from 'moment';
import AppButton from './AppButton';

interface Props {
  timestamp: Date;
  description: string;
}

const JournalEntry: FC<Props> = ({ timestamp, description }) => {
  const formattedTimestamp = moment(timestamp).format('MM-DD-YYYY  hh:mm:ss a');

  return (
    <div className="bg-white shadow-md rounded p-5">
      <p className="font-semibold mb-4 text-gray-700 text-lg">
        {formattedTimestamp}
      </p>
      <p className=" mb-4 text-gray-500 text-lg">{description}</p>
      <div className="space-x-4">
        <AppButton title="View" type="regular" />
        <AppButton title="Edit" type="normal" />
        <AppButton title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default JournalEntry;
