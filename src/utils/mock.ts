import  { Product } from './types';
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import p6 from '../../public/p6.jpg'




export const products: Product[]=[{
    id: 1,
    name: 'Product 1',
    price: 50,
    category: 'Female',
    image: p1    
},
{
        id: 2,
        name: 'Product 2',
        price: 80,
        category: 'Kid',
        image: p6 
},
{
    id: 3,
    name: 'Product 3',
    price: 110,
    category:'Female',
    image: p5
},
{
    id: 4,
    name: 'Product 4',
    price: 150,
    category:'Male',
    image: p4
},
{
    id: 5,
    name: 'Product 5',
    price: 90,
    category:'Male',
    image: p2
},   
{
    id: 6,
    name: 'Product 6',
    price: 200,
    category:'Kid',
    image: p3
}, 
];