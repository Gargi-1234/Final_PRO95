import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleAddTask = () => {
    if (task.length > 0) {
      setTasksList([...tasksList, { id: tasksList.length, task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasksList.filter((item) => item.id !== taskId);
    setTasksList(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{item.task}</Text>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Icon name="delete" type="material" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/addBg.png')}
        style={styles.imageBackgroundStyle}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={tasksList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  imageBackgroundStyle: {
    resizeMode: 'cover',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#92D3B3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 18,
  },
  list: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CAEBDA',
    padding: 15,
    margin: 20,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TodoList;
