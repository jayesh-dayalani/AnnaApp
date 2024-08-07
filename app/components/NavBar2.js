import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function NavBar2() {
    const router = useRouter()
    return (
        <View className='w-full flex-row items-center justify-between px-4 py-2'>
            <Pressable className='flex-row' onPress={() => router.replace('product')}>
                <Entypo name="chevron-left" size={32} color="black" />
            </Pressable>
            <Pressable className='flex-row space-x-2 items-end'>
                <Image source={{ uri: 'https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc' }} height={40} width={40} className='rounded-full' />
            </Pressable>
        </View>
    )
}