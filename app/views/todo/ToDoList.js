import * as React from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-ico-material-design';
import { FAB, Modal, useTheme } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import toDoListStyles from './Styles';

const ItemForRender = ({ item , styles}) => {
    const [selected, setSelected] = React.useState(false);
    const handlePress = () => {
        setSelected(!selected);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.item, selected && styles.selectedItem]}>
        <Checkbox
            status={selected ? 'checked' : 'unchecked'}
            onPress={handlePress}
        />
        <Text style={[styles.text, selected && styles.selectedText]}>{item}</Text>
    </TouchableOpacity>
    );
};

const FloatingAddButton = ({ navigation, styles }) => (
    <FAB
        icon={() => <Icon name="add-plus-button" style={{ marginLeft: 3, marginTop: 1 }} />}
        style={styles.fab}
        onPress={() => {
            navigation.navigate({
                name: 'AddNewToDo',
            });
        }}
    />
);

const ToDoList = ({ navigation, route }) => {
    const todoList = useSelector((state) => state.todo.listOfTodo)
    const styles = toDoListStyles()
    return (
        <View style={styles.container}>
            <FlatList
                data={todoList}
                renderItem={({ item }) => <ItemForRender item={item}  styles={styles}/>}
                keyExtractor={(item, index) => String(index)}
            />
            <FloatingAddButton navigation={navigation} styles={styles}/>
        </View>
    )

}

export default ToDoList;

