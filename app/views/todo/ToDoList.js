import * as React from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-ico-material-design';
import { FAB, useTheme } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import toDoListStyles from './Styles';
import Modal from "react-native-modal";
import ModalBottomSheet from '../../components/modal/ModalBottomSheet';
import AddNewToDo from './AddNewToDo';
import { updateToDo } from '../../features/todoList/ToDoListSlice';

const ItemForRender = ({ item, styles, index }) => {
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(!item.isActive);
    const handlePress = () => {
        const updatedSelected = !selected; // Toggle the selected state first
        setSelected(updatedSelected); // Update the local state to reflect the selection change
        if (updatedSelected == true) {
        }
        // setTimeout(() => {
        //     dispatch(updateToDo({
        //         ...item,
        //         isActive: updatedSelected, // Pass the updated isActive value
        //     }));
        // }, 1000);


    };
    return (
        <TouchableOpacity onPress={handlePress} style={[styles.item, selected && styles.selectedItem]}>
            <Checkbox
                status={selected ? 'checked' : 'unchecked'}
                onPress={handlePress}
            />
            <Text style={[styles.text, selected && styles.selectedText]}>{item.details}</Text>
        </TouchableOpacity>
    );
};

const FloatingAddButton = ({ navigation, styles, onPress }) => (
    <FAB
        icon={() => <Icon name="add-plus-button" color={"white"} style={{ marginLeft: 3, marginTop: 1, }} />}
        style={styles.fab}
        onPress={onPress}
    />
);



const ToDoList = ({ navigation, route }) => {
    const todoList = useSelector((state) => state.todo.listOfTodo)
    // const listOfDoneToDo =  useSelector((state) => state.todo.listOfDoneToDo)
    const styles = toDoListStyles()
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPressDone = () => {
        toggleModal()
    }
    return (
        <View style={styles.container}>
            {/* <FlatList
                data={todoList}
                renderItem={({ item }) => <ItemForRender item={item} styles={styles} />}
                keyExtractor={(item, index) => String(index)}
            /> */}
            <SectionList
                sections={[
                    {
                        title: 'To-Dos',
                        //data: todoList
                        data: todoList.filter((item) => item.isActive == true),
                    },
                    // {
                    //     title: 'Done',
                    //     data: todoList.filter((item) => item.isActive == false),
                    //     //data: listOfDoneToDo
                    // },
                ]}
                renderItem={({ item, index }) => <ItemForRender item={item} index={index} styles={styles} />}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => String(index)}
            />
            <FloatingAddButton navigation={navigation} styles={styles} onPress={toggleModal} />
            <ModalBottomSheet
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                onPressDone={onPressDone}
                modalContent={<AddNewToDo onPressDone={onPressDone} />}
            />
        </View>
    )

}

export default ToDoList;

