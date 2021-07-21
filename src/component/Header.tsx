import { Heading } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { editTask } from "../features/task/taskSlice";
import { initialState } from "../features/task/taskSlice";

const Header = () => {
  const dispatch = useDispatch();

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
