import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

function Task() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <>
      <AddTaskModal />
      <Tabs defaultValue="account" className="w-[800px] mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() => dispatch(updateFilter("all"))}
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            onClick={() => dispatch(updateFilter("low"))}
            value="low"
          >
            Low
          </TabsTrigger>
          <TabsTrigger
            onClick={() => dispatch(updateFilter("medium"))}
            value="medium"
          >
            Medium
          </TabsTrigger>
          <TabsTrigger
            onClick={() => dispatch(updateFilter("heigh"))}
            value="heigh"
          >
            Heigh
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div>
        {tasks?.map((item) => {
          return <TaskCard key={item?.id} task={item} />;
        })}
      </div>
    </>
  );
}

export default Task;
