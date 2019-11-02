import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, Button} from 'react-native';
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
    const {state, addBlogPost } = useContext(Context)
    return (
        <View>
            <Text style={styles.textStyle}>Index Screen</Text>
            <Button title = "Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem ={({item}) => {
                    return <Text style={styles.textStyle}>{item.title}</Text>
                }}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default IndexScreen;