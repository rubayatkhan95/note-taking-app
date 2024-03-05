import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import { addToDo } from '../../features/todoList/ToDoListSlice';

const InputBox = ({ navigation, onPressDone }) => {
    const [text, setText] = React.useState('');
    const todoList = useSelector((state) => state.todo.listOfTodo)
    const dispatch = useDispatch()
    const handleIconPress = () => {
        if (text.length > 0) {
            let newToDo = {
                id: todoList.length + 1,
                details: text,
                isActive: true
            }
            dispatch(addToDo(newToDo))
        }
        onPressDone()
        // if(typeof isGoBack!== "undefined" &&  !isGoBack){
        //     navigation.goBack();
        // }

    };

    return (
        <TextInput
            label=""
            mode="outlined"
            // outlineColor="transparent"
            style={{height:80}}
            right={<TextInput.Icon icon="plus" onPress={handleIconPress} />}
            onChangeText={setText}
        />
    );
};

const AddNewToDo = ({ navigation, route, onPressDone }) => {
    return (
        <View style={styles.container}>
            <InputBox navigation={navigation} onPressDone={onPressDone} />
        </View>
    )

}

export default AddNewToDo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'lightgrey',
        padding: 5,
    },
    item: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        color: 'black',
        borderBottomColor: 'black',
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    input: {
        borderWidth: 0, // Remove the border
        height: 60, // Increase the height
    },

});