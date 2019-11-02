import React,{ useContext}from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import {Context} from "../context/BlogContext";

const ShowScreen = ({navigation}) => {
    const {state} =  useContext(Context)
    const blodPost = state.find(
        blogPost=> blogPost.id === navigation.getParam('id')
    );
    return (
        <View style = {styles.backgroundStyle}>
            <Text>{blodPost.title}</Text>
        </View>
    )
};
const styles = StyleSheet.create({

});

export default ShowScreen;