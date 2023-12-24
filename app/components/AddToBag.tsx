'use client';
import React from 'react';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name: string;
    price: number;
    description: string;
    image: any;
    currency: string;
    price_id: string;
}

export default function AddToBag({
    name,
    price,
    description,
    image,
    currency,
    price_id,
}: ProductCart) {
    const {addItem, handleCartClick} = useShoppingCart();

    const product = {
        name : name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id
    }
    return (
        <Button
        onClick={() => {
            addItem(product),
            handleCartClick();
        }}
        >
            Add To Cart
        </Button>
    );
}

