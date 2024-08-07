import { View, ScrollView, Alert } from 'react-native';
import React from 'react';
import ProductCardCart from './ProductCartCard';

export default function ProductCartList({ data }) {
    return (
        <View className='w-full px-4 py-2'>
            <ScrollView>
                {data.map((item, index) => (
                    <ProductCardCart data={item} key={index} />
                ))}
            </ScrollView>
        </View>
    );
}
