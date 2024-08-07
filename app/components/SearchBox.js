import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
export default function SearchBox() {
    return (
        <View className='w-full flex-row items-center justify-center px-4 py-2'>
            <View className='bg-white w-full rounded-lg flex-row items-center pl-3'>
                <Feather name="search" size={24} color="gray" />
                <TextInput placeholder='Search ...' className='flex-1 p-2' />
            </View>
        </View>
    )
}