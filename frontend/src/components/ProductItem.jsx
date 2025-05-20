// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import {Link} from 'react-router-dom'

// const ProductItem = ({id,image,name,price}) => {
    
//     const {currency} = useContext(ShopContext);

//   return (
//     <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//       <div className=' overflow-hidden'>
//         <img className='w-full h-48 object-cover aspect-square rounded-lg ease-in-out' src={image[0]} alt="" />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className=' text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   )
// }

// export default ProductItem















import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className='text-gray-700 cursor-pointer block group'
      to={`/product/${id}`}
    >
      <div className='w-full aspect-[4/5] overflow-hidden rounded-lg shadow-sm'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm font-medium truncate'>{name}</p>
      <p className='text-sm font-semibold'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
