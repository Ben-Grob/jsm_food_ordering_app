import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function auth_layout() {
  return (
    <SafeAreaView>
      <Text>Auth_layout</Text>
      <Slot />
    </SafeAreaView>
  )
}