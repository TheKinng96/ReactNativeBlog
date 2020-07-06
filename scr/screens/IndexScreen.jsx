import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { MaterialIcons } from '@expo/vector-icons'; 

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return <View style={style.row}>
            <Text style={style.title}>{item.title}</Text>
            <MaterialIcons name="delete" style={style.icon} color="black" />
          </View>
        }}
      /> 
    </View>
  )
}

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal:10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen;