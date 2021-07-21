import { Box } from "@chakra-ui/layout";
import { VFC } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { selectTasks } from "./taskSlice";

const TaskList: VFC = () => {
  const tasks = useSelector(selectTasks);
  return (
    <Box bg="white" mt={5} maxH={500} overflowY="scroll">
      {tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </Box>
  );
};

export default TaskList;
