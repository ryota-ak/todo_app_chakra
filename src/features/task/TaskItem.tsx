import { IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteTask, editTask, initialState, updateTask } from "./taskSlice";
import { Task } from "./types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = memo(({ task }) => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    dispatch(deleteTask(task));
    dispatch(editTask(initialState.editedTask));
    onClose();
  };

  return (
    <>
      <Box p={2} borderBottom="1px" borderColor="gray.200" h={12}>
        <Flex>
          <Checkbox
            mr={4}
            pb={2}
            colorScheme="red"
            checked={task.completed}
            onChange={() => {
              dispatch(updateTask({ ...task, completed: !task.completed }));
            }}
          />
          <Box pt={1} textDecoration={task.completed ? "line-through" : "none"}>
            {task.title}
          </Box>
          <Spacer />
          <IconButton
            aria-label="Search database"
            colorScheme="linkedin"
            variant="outline"
            mr={2}
            size="sm"
            icon={<EditIcon />}
            onClick={() => dispatch(editTask(task))}
          />
          <IconButton
            aria-label="Search database"
            colorScheme="red"
            variant="outline"
            size="sm"
            icon={<DeleteIcon />}
            onClick={onOpen}
          />
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody textAlign="center" mt={2} fontWeight="bold">
            Do you delete task really?
          </ModalBody>

          <ModalFooter>
            <Button mr={3} colorScheme="red" onClick={handleDelete}>
              Yes
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default TaskItem;
