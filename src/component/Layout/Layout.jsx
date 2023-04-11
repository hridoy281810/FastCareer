import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const ProductContext = createContext([])
export const CartContext = createContext([])

const Layout = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <ProductContext.Provider value={products}>
                <CartContext.Provider value={[cart, setCart]}>
                    <Header></Header>
                    <div className='min-h-[calc(100vh-592px)]'><Outlet></Outlet></div>
                    <Footer></Footer>
                </CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
};

export default Layout;