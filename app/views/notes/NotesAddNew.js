import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList, RefreshControl, Text, Button, TouchableOpacity, TextInput, ToastAndroid, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class NotesAddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            title: "",
            content: "",
            noteList: [
                {
                    title: "title 1",
                    content: "content 1"
                },
                {
                    title: "title 2",
                    content: "content 2"
                },
                {
                    title: "title 3",
                    content: "content 3"
                }
            ]
        }
    }

    onPressAddButton = () => {

        const { title, content } = this.state;
        if (title.length > 0 && content.length > 0) {
            let item = {
                title: title,
                content: content
            }
            global.noteList.push(item)
            setTimeout(() => {
                Actions.NoteList()
            }, 500);
            console.warn(global.noteList)
        } else {
            if (title.length == 0 && content.length == 0) {
                Alert.alert("Please Enter Title & Content")
            } else if (title.length == 0) {
                Alert.alert("Please Enter Title ")
            } else if (content.length == 0) {
                Alert.alert("Please Enter Content ")
            } else {
                Alert.alert("Please Enter Text ")
            }


        }

    }


    onChangeTitle = (text) => {
        this.setState({ title: text })
    }
    onChangeContent = (text) => {
        this.setState({ content: text })
    }

    onChangeTitle

    render() {
        return (
            <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
                <TextInput
                    onChangeText={(text) => this.onChangeTitle(text)}
                    placeholder='Enter Title'
                    placeholderTextColor={"grey"}
                    style={{ borderColor: "grey", borderWidth: 1, textDecorationColor: "black", color: "black", backgroundColor: "white", marginBottom: 10 }}
                >
                </TextInput>
                <TextInput
                    onChangeText={(text) => this.onChangeContent(text)}
                    placeholder='Enter Content'
                    placeholderTextColor={"grey"}
                    multiline={true}
                    style={{ borderColor: "grey", borderWidth: 1, textDecorationColor: "black", color: "black", backgroundColor: "white" }}
                >
                </TextInput>
                <View style={{ height: 10, backgroundColor: "pink" }}></View>
                <TouchableOpacity>

                </TouchableOpacity>
                <Button title='Button' onPress={this.onPressAddButton}></Button>
            </View>


        )
    }
}