'use client';
import React from 'react';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';

export default function CheckoutNow({
    name,
    price,
    description,
    image,
    currency,
    price_id,
}: ProductCart) {
    const { checkoutSingleItem } = useShoppingCart();

    function buyNow(priceId: string) {
        checkoutSingleItem(priceId);  
    }

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
            buyNow(product.price_id);
        }}
        >
            Add To Cart
        </Button>
    );
}

