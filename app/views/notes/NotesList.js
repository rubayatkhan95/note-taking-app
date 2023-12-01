import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList, RefreshControl, Text, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
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

    renderListHeader = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ color: "black", fontSize: 24, textAlign: "center" }}>Notes</Text>
            </View>
        )
    }

    onPressAddButton = () => {
        Actions.NotesAddNew()
        // let item = {
        //     title: "new",
        //     content: "new"
        // }
        // this.state.noteList.push(item)
        // this.setState({ refresh: true })

    }

    renderListFooter = () => {
        return (
            <View style={{ backgroundColor: "pink" }}>
                <TouchableOpacity
                    style={{
                        height: 50, width: 50,
                        borderRadius: 35,
                        backgroundColor: "blue",
                        alignSelf: "flex-end",
                        marginTop: 10,
                        marginRight: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => {
                        this.onPressAddButton()
                    }}
                >
                    <Text style={{ fontSize: 28, color: "white" }}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderItem = () => {
        return (
            <View style={{ backgroundColor: "white", borderWidth: 1, borderColor: "grey" }}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "black", fontSize: 14, textAlign: "center", margin: 2 }}>title</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 20, marginRight: 20, alignItems: "center" }}>
                    <Text style={{ color: "black" }}>Content</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: "white", marginTop: 3 }}>
                <FlatList
                    data={global.noteList}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderListHeader}
                    ListHeaderComponentStyle={{ margin: 10 }}
                    ListFooterComponent={this.renderListFooter}
                >
                </FlatList>

            </View>


        )
    }
}