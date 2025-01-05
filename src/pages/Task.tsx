import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

function Task() {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <>
      <AddTaskModal />
      <div>
        {tasks?.map((item) => {
          return <TaskCard key={item?.id} task={item} />;
        })}
      </div>
    </>
  );
}

export default Task;
