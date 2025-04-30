import { useState, useEffect } from "react";

export function useCartItem(productId: number){
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")

    if(cartItems){
        const parsedCartItems = JSON.parse(cartItems)

        if(parsedCartItems.some((item: any) => item.id === productId)){
            setIsAdded(true)
        }
    }
    }, [productId])

    const addProductToCart = (product: any) => {
        const cartItems = localStorage.getItem("cartItems")
        const updatedCartItems = cartItems ? JSON.parse(cartItems) : []
        updatedCartItems.push(product)
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
        setIsAdded(true)
    }

    return { isAdded, addProductToCart}
}