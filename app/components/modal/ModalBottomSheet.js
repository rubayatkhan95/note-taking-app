import React from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import AddNewToDo from "../../views/todo/AddNewToDo";
import { Icon, IconButton, useTheme } from "react-native-paper";

function ModalBottomSheet({ isModalVisible, toggleModal, modalContent, onPressDone }) {
    const theme = useTheme()
    return (
        <Modal
            isVisible={isModalVisible}
            style={{
                justifyContent: "flex-end",
                margin: 0,
            }}
            swipeDirection={['down']} // Enable swiping down to close the modal
            onSwipeComplete={toggleModal} // Close the modal when swiping down
            animationIn="slideInUp" // Animation when modal opens
            animationOut="slideOutDown" // Animation when modal closes
            backdropOpacity={0.38}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            onBackdropPress={toggleModal}
            onBackButtonPress={toggleModal}
        >
            <View style={{ backgroundColor: "white", padding: 10, minHeight: '27%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={toggleModal} style={{ padding: 10, justifyContent: "center" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: theme.colors.primary }}>Create New To-Do</Text>
                    </TouchableOpacity>
                    <IconButton
                        icon="close" // Cross icon
                        color="black"
                        onPress={toggleModal}
                    />
                </View>
                {modalContent}
            </View>
        </Modal>
    );
}

export default ModalBottomSheet;
