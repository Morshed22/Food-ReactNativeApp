import React from 'react';
import {View,StyleSheet, Text} from 'react-native';

const IndexScreen = ()=>{
    return (
        <View>
        <Text style = {styles.textStyle}>Index Screen</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default IndexScreen;