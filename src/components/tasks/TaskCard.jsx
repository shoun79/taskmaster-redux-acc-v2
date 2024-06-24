import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteTaskMutation, useUpdateTasksMutation } from '../../redux/features/tasks/tasksapi';



const TaskCard = ({ task }) => {
  const [updateTasks, { data: updateData, error: updateError }] = useUpdateTasksMutation();
  const [deleteTask, { data, error }] = useDeleteTaskMutation();
  console.log({ data, error });

  let updatedStatus;

  if (task.status === 'pending') {
    updatedStatus = 'running';
  } else if (task.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3 ${task.priority === 'high' ? 'text-red-500' : ' '
          } ${task.priority === 'medium' ? 'text-yellow-500' : ' '} ${task.priority === 'low' ? 'text-green-500' : ' '
          }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button
            onClick={() =>

              deleteTask({ id: task._id })
            }
            title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>

              updateTasks({ id: task._id, data: { status: updatedStatus } })
            }
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div >
  );
};

export default TaskCard;
