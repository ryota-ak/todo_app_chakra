import { Box, Flex } from "@chakra-ui/layout";
import { VFC } from "react";
import Header from "./component/Header";
import TaskInput from "./features/task/TaskInput";
import TaskList from "./features/task/TaskList";

const App: VFC = () => {
  return (
    <>
      <Box bg="gray.100" w="100vw" h="100vh">
        <Box w={800} mx="auto" py={10}>
          <Flex direction="column">
            <Header />
            <TaskInput />
            <TaskList />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default App;
