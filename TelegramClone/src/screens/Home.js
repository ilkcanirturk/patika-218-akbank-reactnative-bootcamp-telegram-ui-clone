import { View } from 'react-native'
import React from 'react';
import LoginPage from './LoginPage';


//Shows Login page on start
const Home = () => {
  return (
    <View>
      <View>
        <LoginPage name='LoginPage' component={LoginPage} />
      </View>
    </View>
  )
}

export default Home