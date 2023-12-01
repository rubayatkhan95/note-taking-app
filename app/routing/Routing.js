import React, { Component } from 'react';
import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import { Router, Scene, Stack, Drawer, Actions, ActionConst, Tabs, Lightbox } from 'react-native-router-flux';
import NoteList from '../views/notes/NotesList';
import NotesAddNew from '../views/notes/NotesAddNew';
var BackPressed;

export default class Routing extends Component {
    constructor() {
        super()
        this.state = {
            drawerLockMode: 'unlocked'
        }
    }



    componentDidMount() {
        Actions.drawerClose();
        BackPressed = DeviceEventEmitter.addListener('BackPressed', function (event) {
            //this.handleBackButtonClick()
        }.bind(this));
    }

    componentWillUnmount() {
        if (typeof BackPressed !== "undifined") {
            BackPressed.remove();
        }
    }



    lockDrawer = () => {
        this.setState({
            drawerLockMode: 'locked-closed'
        })
    }

    unlockDrawer = () => {
        this.setState({
            drawerLockMode: 'unlocked'
        })
    }

    static navigationOptions = {
        drawerLockMode: 'locked-closed',
    }

    render() {
        return (
            <Router uriPrefix={'notes'}>
                <Scene key="root">
                    <Scene
                        key="NoteList"
                        initial
                        component={NoteList}
                        hideNavBar={true}
                    />
                    <Scene key="NotesAddNew"
                        component={NotesAddNew}
                        hideNavBar={true}
                    />

                    <Drawer
                        hideNavBar
                        key="ScreenRoute"
                        drawerWidth={'83.33%'}

                    >
                        <Scene hideNavBar={true}
                            gesturesEnabled={false} >
                            <Scene
                                key="NoteList"
                                component={NoteList}
                                initial
                            />
                        </Scene>
                    </Drawer>
                </Scene>
            </Router>
        );
    }
}
