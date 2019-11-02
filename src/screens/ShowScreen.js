import React,{ useContext}from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    const {state} =  useContext(Context)
    const blodPost = state.find(
        blogPost=> blogPost.id === navigation.getParam('id')
    );
    return (
        <View style = {styles.backgroundStyle}>
            <Text>{blodPost.title}</Text>
            <Text>{blodPost.content}</Text>
        </View>
    )
};
ShowScreen.navigationOptions = () => {
    return {
        headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
            <EvilIcons name="pencil" size={35}/>
        </TouchableOpacity>
    };
}
const styles = StyleSheet.create({});

export default ShowScreen;