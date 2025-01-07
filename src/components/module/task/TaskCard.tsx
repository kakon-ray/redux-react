import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleted } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";

const TaskCard: React.FC<{ task: ITask }> = ({ task }) => {


  const dispatch = useAppDispatch();

  const handleSubmit = (id:string) => {
    dispatch(toggleCompleted(id));
  };

  const handleDelete = (id:string) => {
    dispatch(deleteTask(id));
  }


  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md m-4">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{task?.title}</h3>
        <p className="mt-2 text-gray-600">{task?.description}</p>
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>
              Due: <strong className="text-gray-700">{task?.dueDate}</strong>
            </span>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                task?.priority === "High" && "bg-red-100 text-red-700",
                task?.priority === "Low" && "bg-green-100 text-green-700"
              )}
            >
              Priority
            </span>

          </div>


          <div className="mt-4 flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
              {task?.isCompleted == true ? "Incomplete" : "Uncompleted"}
            </span>

            <input
              type="checkbox"
              onClick={()=>handleSubmit(task?.id)}
              id="example-checkbox"
              checked={task?.isCompleted === true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            
            <Button onClick={()=>handleDelete(task?.id)}>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
