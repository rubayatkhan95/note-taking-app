import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import { addToDo } from '../../features/todoList/ToDoListSlice';

const InputBox = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch()
    const handleIconPress = () => {
        if(text.length>0){
            dispatch(addToDo(text))
        }

        navigation.goBack();
    };

    return (
        <TextInput
            label=""
            right={<TextInput.Icon icon="camera" onPress={handleIconPress} />}
            onChangeText={setText}
        />
    );
};

const AddNewToDo = ({ navigation, route }) => {
    const todoList = useSelector((state) => state.todo.listOfTodo)
    console.warn("add new")


    return (
        <View style={styles.container}>
            <InputBox navigation={navigation} />
        </View>
    )

}

export default AddNewToDo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
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

});