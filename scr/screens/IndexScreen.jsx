import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text> This is home screen </Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      /> 
    </View>
  )
}

const style = StyleSheet.create({})

export default IndexScreen;