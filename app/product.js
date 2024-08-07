import { View, SafeAreaView, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import ProductList from './components/ProductList';
import { useSelector } from 'react-redux';
import { supabase } from '../supabase';

export default function Product() {
    const cart = useSelector(state => state.cartSlice.cart);
    const [masterProducts, setMasterProducts] = useState([]);

    const fetchDawamaster = async () => {
        try {
            const { data, error } = await supabase.from('master_products').select('*');
            if (error) throw error;
            setMasterProducts(data);
        } catch (error) {
            Alert.alert('Error fetching products', error.message);
        }
    };

    useEffect(() => {
        fetchDawamaster();
    }, []); // Run once when the component mounts

    useEffect(() => {
        console.log('cart: ', cart);
    }, [cart]); // Run only when the cart changes

    return (
        <SafeAreaView className='flex-1 items-center justify-start bg-teal-50 pt-10'>
            <NavBar />
            <SearchBox />
            <ProductList masterProducts={masterProducts} />
        </SafeAreaView>
    );
}
