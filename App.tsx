import React from 'react'
import {   PositionScreen } from './src/screens'
import { SafeAreaView } from 'react-native'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <PositionScreen/>
    </SafeAreaView>
  )
}

