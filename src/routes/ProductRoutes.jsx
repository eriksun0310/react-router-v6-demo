import React from 'react'
import ProductLayout from '../pages/ProductLayout'
import Products from '../pages/Products'
import Product from '../pages/Product'
import Features from '../pages/Features'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const ProductRoutes = [
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/products',
        element:<ProductLayout/>,
        children:[
            { path:"", element:<Products/> },
            { path:":id", element:<Product/> },
            { path:"features", element:<Features/> },
        ]
    },
    {
        path:'*',
        element:<NotFound/>,
    },
    
]

export default ProductRoutes