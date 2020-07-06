import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={style.label} >Enter Title:</Text>
      <TextInput style={style.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={style.label} >Enter Content:</Text>
      <TextInput style={style.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button 
        title="Add Blog Post"
        onPress={()=> {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          });
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
})

export default EditScreen;