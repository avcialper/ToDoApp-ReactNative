import React, { useState, useEffect } from "react"
import { View, Text, FlatList, Alert } from "react-native"
import TaskCard from "./components/TaskCard"
import AddToDo from "./components/AddToDo"
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./App.styles"

const App = () => {

  // States
  const [taskList, setTaskList] = useState([{ id: 1, title: 'Learn React Native!!', isDone: true }])
  const [sumCompleted, setSumCompleted] = useState(taskList.filter(item => item.isDone))

  // Add new task to list
  function addNewTask(taskName) {
    if (taskName !== "") {
      const uId = Date.now()
      setTaskList(taskList.concat({ id: uId, title: taskName, isDone: false }))
    } else {
      Alert.alert('Warning!', 'Please name the task..')
    }
  }

  // Find completed tasks
  function filterDone(){
    const list = taskList.filter(task => task.isDone)
    setSumCompleted(list)
  }

  // Render tasks card
  const renderTasks = ({ item }) =>
    <TaskCard
      task={item}
      setTaskList={setTaskList}
      taskList={taskList}
      filterDone={filterDone}
    />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          style={styles.icon}
          name='tasks'
        />
        <Text style={styles.title}>ToDo List</Text>
        <Text style={styles.sumTask}>{sumCompleted.length}/{taskList.length}</Text>
      </View>
      {
        taskList.length === 0 && <View style={styles.emptyContainer}>
          <Text style={styles.zeroTask}>You have not a task. Come on let's go start work!!</Text>
          </View>
      }
      {
        taskList.length > 0 && <FlatList
          style={styles.body}
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={renderTasks}
        />
      }

      <AddToDo addNewTask={addNewTask} />
    </View>
  )
}

export default App