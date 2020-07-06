import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { MaterialIcons } from '@expo/vector-icons'; 

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate("Detail", {id:item.id})}>
              <View style={style.row}>
                <Text style={style.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                  <MaterialIcons name="delete" style={style.icon} color="black" />  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
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