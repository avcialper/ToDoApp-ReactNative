import React, { useState, useEffect } from "react"
import { View, Text, FlatList, Alert } from "react-native"
import TaskCard from "./components/TaskCard"
import AddToDo from "./components/AddToDo"
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./App.styles"
import data from "./data.json"

const App = () => {

  // States
  const [taskList, setTaskList] = useState(data)
  const [sumCompleted, setSumCompleted] = useState(data.filter(item => item.isDone))

  // Add new task to list
  function addNewTask(taskName) {
    if (taskName !== "") {
      const uId = Date.now()
      setTaskList(taskList.concat({ id: uId, title: taskName, isDone: false }))
    } else {
      Alert.alert('Warning!', 'Please give a name the task..')
    }
  }

  // Find completed tasks
  function filterDone(list){
    const filteredList = list.filter(task => task.isDone)
    setSumCompleted(filteredList)
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
          <Text style={styles.zeroTask}>You have not a task.</Text>
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