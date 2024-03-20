import React, {useMemo} from 'react';
import { Image, TextInput } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

function counterInitialize() {
    console.warn("run")
    return 1
}

const UserProfile = ({ navigation, route }) => {
    // const [counter , setCounter] = React.useState(()=>{
    //     counterInitialize()
    // })

    const [resourceType, setResourceType] = React.useState('posts')
    const [items, setItems] = React.useState([])

    const [ number, setNumber] = React.useState(0)
    const [dark, setDark] = React.useState(true)
    const doubleNumber = useMemo(()=>{
       return slowFunction(number)
    }, [number])


    const themeStyle = useMemo(()=>{
        return {
            height:60,
        backgroundColor : dark ? 'pink' : 'red',
        color: dark ? 'white' : 'black',
        }
     }, [dark])


    React.useEffect(() => {
        console.warn("theme change")
        // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then(response => response.json())
        //     .then(json => setItems(json))

        // return ()=>{
        //     //clean up code while unmounting , like remove handlers
        //     console.log("removed")
        // }
    }, [resourceType, themeStyle])

    function pressedType(newType) {
        setResourceType(newType)
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={{ width: 80, height: 80, alignSelf: "center", borderRadius: 40, margin: 20 }} />
            {/* Passing params to nested navigators */}
            <TouchableOpacity style={{ height: 40, backgroundColor: "blue" }} onPress={() => pressedType('posts')} accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "white" }}>
                    Post
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, backgroundColor: "blue" }} onPress={() => pressedType('users')} accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "white" }}>
                    User
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, backgroundColor: "blue" }} onPress={() => pressedType('comments')} accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "white" }}>
                    Comment
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[{ height: 40, backgroundColor : "grey"}]} onPress={()=> setDark(prevDark=> !prevDark)} accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "white" }}>
                    Change Theme
                </Text>
            </TouchableOpacity>

            <Text style={themeStyle}>{doubleNumber}</Text>

            <TextInput style={{borderWidth:1, borderColor:"black", color:"black"}} onChangeText={(text)=> setNumber(text)}></TextInput>

            <Text style={{ color: "white", padding: 10 }}>
                {resourceType}
            </Text>

        </View>
    );


}

function slowFunction (num){
    console.warn('here')
    for(let i = 0 ; i< 100000000000;i++){
        return num*2
    }
}


export default UserProfile;

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
});