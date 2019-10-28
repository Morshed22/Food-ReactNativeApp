import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)
    return (
        <View>
            <Text style={styles.textStyle}>Index Screen</Text>
            <FlatList
                data={blogPosts}
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