import { View, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({masterProducts}) {
   
    return (
        <View className='flex-1 w-full px-4 py-2'>
            <ScrollView>
                {masterProducts.map((product, index) => (
                    <ProductCard
                        key={product?.id}
                        data={product}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
