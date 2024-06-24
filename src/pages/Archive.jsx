
import TaskCard from '../components/tasks/TaskCard';
import { useGetArchiveTasksQuery } from '../redux/features/tasks/tasksapi';

const Archive = () => {

  const { data: archiveTasks } = useGetArchiveTasksQuery(undefined, { pollingInterval: 30000, refetchOnMountOrArgChange: true, refetchOnReconnect: true });


  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl font-semibold mb-10">Archive board</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item._id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
