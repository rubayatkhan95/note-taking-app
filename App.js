
import React, { Component } from 'react';
import { View } from "react-native";
import NoteList from './app/views/notes/NotesList';
import NotesAddNew from './app/views/notes/NotesAddNew';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Routing from './app/routing/Routing';
global.noteList = [
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

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updatingLocation: false,
			modalUpdateNeededVisibility: false
		};

	}

	async componentDidMount() {

	}


	render() {
		try {
			return (
				// <View style={{ flex: 1, backgroundColor: "pink" }}>
				// 	{/* <NoteList/> */}
				// 	<NotesAddNew />
				// </View>
				// <Router>
				// 	<Stack key="root">
				// 		<Scene  key="NoteList" component={NoteList}  initial></Scene>
				// 		{/* <Scene key="NoteList" component={NoteList} title="Note List"  initial/>
				// 		<Scene key="NotesAddNew" component={NotesAddNew} title="NotesAddNew" /> */}
				// 	</Stack>
				// </Router>
				<Routing/>
			)
		} catch (error) {

		}

	}
}


// git init
// git add .
// git commit -m "Add existing project files to Git"
// git remote add origin https://github.com/cameronmcnz/example-website.git
// git push -u -f origin master