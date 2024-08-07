import { View, Text, Pressable, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar2 from './components/NavBar2';
import { useSelector, useDispatch } from 'react-redux';
import ProductCartList from './components/ProductCartList';
import { supabase } from '../supabase';
import { cleanMyCart } from '../redux/cartSlice';

export default function Cart() {
    const data = useSelector(state => state.cartSlice.cart);
    const userEmail = useSelector(state => state.authSlice.email);
    const dispatch = useDispatch();

    useEffect(() => {
        // Any necessary effect here
    }, []);

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-GB'); // Format: day/month/year
        const time = now.toLocaleTimeString('en-GB', { hour12: false }); // Format: HH:MM:SS
        return { date, time };
    };

    const placeOrder = async () => {
        try {
            // Fetch the code from master_users table based on userEmail
            const { data: user, error: userError } = await supabase
                .from('master_users')
                .select('code')
                .eq('email', userEmail)
                .single();

            if (userError) {
                console.error('Error fetching user code:', userError);
                Alert.alert('Error', 'Unable to fetch user details. Please try again.');
                return;
            }

            const userCode = user.code;

            // Get current date and time
            const { date, time } = getCurrentDateTime();

            // Create an order object with the product names as keys and their quantities as values
            const order = {
                code: userCode,
                date: date,
                time: time
            };
            data.forEach(item => {
                order[item.name] = item.quantity;
            });

            // Insert the order into the "anna_orders" table
            const { data: newOrder, error: orderError } = await supabase
                .from('anna_orders')
                .insert([order]);

            if (orderError) {
                console.error('Error inserting order:', orderError);
                Alert.alert('Error', 'Unable to place order. Please try again.');
            } else {
                console.log('Order placed successfully:', newOrder);
                // Clear the cart in Redux
                dispatch(cleanMyCart());
                Alert.alert('Success', 'Order placed successfully!');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        }
    };

    return (
        <SafeAreaView className='flex-1 items-center justify-start bg-teal-50'>
            <NavBar2 />
            <View className='flex-1'>
                <ProductCartList data={data} />
            </View>
            {data.length > 0 && (
                <Pressable onPress={placeOrder} className='m-2 w-full'>
                    <Text className="bg-green-600 m-4 p-3 rounded-xl text-center text-white font-bold text-lg">Place Order</Text>
                </Pressable>
            )}
        </SafeAreaView>
    );
}
