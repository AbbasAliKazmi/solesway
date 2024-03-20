import  { Product } from '../utils/types';
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import p6 from '../../public/p6.jpg'




export const products: Product[]=[{
    id: 1,
    name: 'Product 1',
    tagline: "Dress",
    price: 50,
    category: 'female',
    image: p1    
},
{
        id: 2,
        name: 'Product 2',
        tagline: "Dress",
        price: 80,
        category: 'female',
        image: p2 
},
{
    id: 3,
    name: 'Product 3',
    tagline: "Dress",
    price: 110,
    category:'male',
    image: p3
},
{
    id: 4,
    name: 'Product 4',
    tagline: "Dress",
    price: 150,
    category:'kids',
    image: p4
},
{
    id: 5,
    name: 'Product 5',
    tagline: "Dress",
    price: 90,
    category:'male',
    image: p5
},   
{
    id: 6,
    name: 'Product 6',
    tagline: "Dress",
    price: 200,
    category:'male',
    image: p6
}, 
];