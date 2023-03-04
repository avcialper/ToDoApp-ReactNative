import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"
import styles from "./AddToDo.styles"

const AddToDo = ({addNewTask}) => {

    // Input state
    const [text, setText] = useState("")

    // Add new task to list
    function newTaskName(){
        addNewTask(text)
        setText("")
        Keyboard.dismiss()
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Add new task...'
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={newTaskName}
            >
                <Text style={styles.buttonTitle}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddToDo