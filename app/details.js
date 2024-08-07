import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NavBar2 from './components/NavBar2'

export default function details() {
    return (
        <SafeAreaView className='flex-1 items-center justify-start bg-teal-50'>
            <NavBar2 />
            <Text className='h-full'>details</Text>
        </SafeAreaView>
    )
}