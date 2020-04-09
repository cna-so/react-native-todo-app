import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { AddTask } from '../redux/todoRedux/todoActions';

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const { screen, TextInputStyle } = styles;

  const changedValue = (value) => {
    console.log(value)
    setValue(value.nativeEvent.text);
  };

  const addTaskHandler = () => {
    Keyboard.dismiss;

    if (String(value).trim() === "") {
      Alert.alert("not valid", "input is not valid");
      return;
    }

    dispatch(AddTask(value));
  };

  return (
    <View style={screen}>
      <TextInput
        value={value}
        placeholder="pease write the task"
        style={TextInputStyle}
        onChange={changedValue}
      />
      <Button color="black" title="Add Task" onPress={addTaskHandler} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },
  TextInputStyle: {
    width: "40%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
});
