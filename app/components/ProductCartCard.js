import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementMyQuantity, decrementMyQuantity } from '../../redux/cartSlice';

export default function ProductCardCart({ data }) {
    const dispatch = useDispatch();

    // Function to handle incrementing the quantity
    const incrementItemQuantity = () => {
        dispatch(incrementMyQuantity({ id: data.id }));
    };

    // Function to handle decrementing the quantity
    const decrementItemQuantity = () => {
        dispatch(decrementMyQuantity({ id: data.id }));
    };

    return (
        <View className='w-full bg-teal-100 p-3 rounded-xl mt-2 flex-row items-center'>
            {/* Left side with product image */}
            <View className='w-1/4'>
                <Image
                    source={{ uri: data.image ?? 'default-image-url' }}
                    className='w-full h-24 rounded-lg'
                    resizeMode='cover'
                />
            </View>

            {/* Center with product details */}
            <View className='w-1/2 px-2'>
                <Text className='text-lg font-bold'>{data?.name ?? 'No Name Available'}</Text>
                <Text className='text-lg font-bold mt-1'>Rs. {data?.price ?? 'N/A'} /-</Text>
            </View>

            {/* Right side with quantity control */}
            <View className='w-1/4 flex-row items-center justify-end'>
                <TouchableOpacity className='bg-teal-500 py-1 px-3 rounded-lg' onPress={decrementItemQuantity}>
                    <Text className='text-white text-center text-xl font-extrabold'>-</Text>
                </TouchableOpacity>
                <Text className='mx-3 text-xl font-extrabold'>{data?.quantity ?? 0}</Text>
                <TouchableOpacity className='bg-teal-500 py-1 px-3 rounded-lg' onPress={incrementItemQuantity}>
                    <Text className='text-white text-center text-xl font-extrabold'>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
