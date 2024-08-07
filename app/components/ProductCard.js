import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToMyCart } from '../../redux/cartSlice';

export default function ProductCard({ data }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state?.cartSlice?.cart || []);

    // Check if the item is already in the cart
    const itemInCart = cart.find(item => item?.id === data?.id);

    // Function to handle adding the item to the cart
    const addItemToRedux = () => {
        dispatch(addToMyCart(data));
    };

    return (
        <View className='w-full bg-teal-100 p-3 rounded-xl mt-2 flex-row'>
            {/* Left side with product details */}
            <View className='w-1/2 pr-2'>
                <Text className='text-xl font-bold'>{data?.name ?? 'No Name Available'}</Text>
                <Text numberOfLines={6}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta obcaecati velit ipsum, accusantium ex recusandae deleniti dicta repellendus temporibus.
                </Text>
                <Text className='text-lg font-bold mt-1 text-green-600'>Measure. /{data?.qty ?? 'N/A'}</Text>
            </View>

            {/* Right side with product image and add to cart button */}
            <View className='w-1/2 flex items-center justify-between'>
                <Image
                    source={{ uri: data?.image ?? 'default-image-url' }}
                    className='w-full flex-1 rounded-t-lg bg-white'
                    resizeMode='contain'
                />
                <TouchableOpacity
                    className={`bg-teal-500 py-2 px-4 rounded-b-lg w-full ${itemInCart ? 'bg-blue-500' : ''}`}
                    onPress={addItemToRedux}
                    disabled={!!itemInCart}
                >
                    <Text className='text-white text-center'>
                        {itemInCart ? 'View in Bag' : 'Add to Bag'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
