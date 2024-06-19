import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyImage from '../assets/image/img1.jpg'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    {/* <View style={{paddingHorizontal:16}}> 인라인 형태로 쓸때 중괄호 하나더 추가 */}
        <Image source={MyImage} style={{width:'100%'}} />
      <Button title='go Profile' 
      onPress={()=>navigation.navigate('Profile')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:16
    }
})