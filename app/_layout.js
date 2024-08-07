import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
            </Stack>
        </Provider>
    )
}