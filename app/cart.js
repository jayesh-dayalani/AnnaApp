import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar2 from './components/NavBar2'
import { useSelector } from 'react-redux'
import ProductCardCart from './components/ProductCartCard'
import ProductCartList from './components/ProductCartList'

export default function cart() {
    const data = useSelector(state => state.cartSlice.cart)
    useEffect(() => {

    }, [])
    return (
        <SafeAreaView className='flex-1 items-center justify-start bg-teal-50'>
            <NavBar2 />
            <ProductCartList data={data} />
            <Text className='h-full'>cart</Text>
        </SafeAreaView>
    )
}