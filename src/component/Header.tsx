import { Heading } from "@chakra-ui/layout";
import { useAppDispatch } from "../app/hooks";
import { editTask } from "../features/task/taskSlice";
import { initialState } from "../features/task/taskSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <Heading
      textAlign="center"
      color="orange.300"
      cursor="pointer"
      onClick={() => dispatch(editTask(initialState.editedTask))}
    >
      TodoApp
    </Heading>
  );
};

export default Header;
