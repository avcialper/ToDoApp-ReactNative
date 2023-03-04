import React, { useState } from "react"
import { View, Text, Alert } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./TaskCard.styles"

const TaskCard = ({ task, setTaskList, taskList, filterDone }) => {

    // Icon state
    const [taskState, setTaskState] = useState(task.isDone)

    // The values change after pressing the icon
    const changeState = () => {
        const list = taskList.map(item => {
            if (item.id === task.id) {
                item.isDone = !item.isDone;
            }
            return item;
        });
        setTaskList(list);
        setTaskState(!taskState)
        filterDone(list)
    }

    // For warning before deletion
    const onLongPress = () => {
        Alert.alert('Are you sure?',`"${task.title}" will be deleted!`, [
            {text: 'Yes', onPress: () => deleteTask(task)},
            {text: 'No'}
        ])
    }

    // to delete a task
    const deleteTask = (task) => {
        const list = taskList.filter(item => item.id !== task.id)
        setTaskList(list)
        filterDone(list)
    }

    return (
        <View style={[styles.container, (taskState ? styles.green : styles.red)]}>
            <Text style={styles.title} onLongPress={onLongPress}>{task.title}</Text>
            <Icon
                name={taskState ? 'check' : 'remove'}
                color={taskState ? 'green' : 'red'}
                style={styles.icon}
                onPress={changeState}
            />
        </View>
    )
}

export default TaskCard