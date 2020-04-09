import React from 'react'
import { View, Text } from 'react-native'
import {useSelector} from 'react-redux'
const Lists = () => {
    const todos = useSelector(state => state.todos)
    return (
        <View  style={{flex : 1}}>
            {todos.map((todo , key ) => {
                return(
                <Text key={Math.random()} >{todo.value}</Text>
                )
            } )}
            <Text>jjjj</Text>
        </View>
    )
}

export default Lists
