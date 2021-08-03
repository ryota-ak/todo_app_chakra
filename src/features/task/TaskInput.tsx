import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import React, { VFC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTask, editTask, selectEditedTask, updateTask } from "./taskSlice";

const TaskInput: VFC = () => {
  const dispatch = useAppDispatch();
  const editedTask = useAppSelector(selectEditedTask);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editTask({ ...editedTask, title: e.target.value }));
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && !isDisabled) {
      e.preventDefault();
      editedTask.id === 0 ? dispatch(addClicked) : dispatch(updateClicked);
    }
  };

  const isDisabled = editedTask.title.length === 0;

  const addClicked = () => {
    dispatch(addTask(editedTask.title));
  };

  const updateClicked = () => {
    dispatch(updateTask(editedTask));
  };

  return (
    <Box mt={5} textAlign="center">
      <Flex>
        <Input
          mr={5}
          bg="white"
          placeholder="task"
          type="text"
          value={editedTask.title}
          onChange={handleInputChange}
          onKeyPress={handleOnKeyPress}
        />
        {editedTask.id === 0 ? (
          <Button
            type="submit"
            colorScheme="yellow"
            variant="solid"
            cursor="pointer"
            leftIcon={<AddIcon />}
            disabled={isDisabled}
            onClick={addClicked}
          >
            ADD
          </Button>
        ) : (
          <Button
            type="submit"
            colorScheme="yellow"
            variant="solid"
            cursor="pointer"
            disabled={isDisabled}
            onClick={updateClicked}
          >
            UPDATE
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default TaskInput;
