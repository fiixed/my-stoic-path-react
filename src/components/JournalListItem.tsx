import { FC } from 'react';
import moment from 'moment';
import { GoTrash } from 'react-icons/go';
import { GrEdit } from 'react-icons/gr';
import ExpandablePanel from './ExpandablePanel';

interface Props {
  timestamp: Date;
  description: string;
  onEditClick?(): void;
  onDeleteClick?(): void;
}

const JournalListItem: FC<Props> = ({
  timestamp,
  description,
  onEditClick,
  onDeleteClick,
}) => {
  const formattedTimestamp = moment(timestamp).format('MM-DD-YYYY  hh:mm:ss a');

  const header = (
    <>
     
        <button onClick={onDeleteClick}>
          <GoTrash />
        </button>
        <button onClick={onEditClick}>
          <GrEdit />
        </button>
        {/* {error && <div>Error deleting user.</div>} */}
        {formattedTimestamp}
    
    </>
  );

  return (
    // <div className="bg-white shadow-md rounded p-5">
    //   <p className="font-semibold mb-4 text-gray-700 text-lg">
    //     {formattedTimestamp}
    //   </p>
    //   <p className=" mb-4 text-gray-500 text-lg">{description}</p>
    //   <div className="space-x-4">

    //     <AppButton onClick={onEditClick} title="Edit" type="normal" />
    //     <AppButton onClick={onDeleteClick} title="Delete" type="danger" />
    //   </div>
    // </div>
    <ExpandablePanel header={header}>{description}</ExpandablePanel>
  );
};

export default JournalListItem;
