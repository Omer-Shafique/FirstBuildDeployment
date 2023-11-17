import React from 'react';

const HomeSectionCard = ({ product }) => {
  // Check if product is undefined before accessing its properties
  if (!product) {
    return null; // or you can render a placeholder or handle it in another way
  }

  return (
    <div className='cursor-pointer flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[14rem] mx-3'>
      <div className='h-[13rem] w-[15rem] flex items-center justify-center'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.image}
          alt=""
        />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.brand} {product.title}</p>
        <p className='mt-2 text-sm text-gray-500'>{product.price}</p>
        {/* Add other information as needed */}
      </div>
    </div>
  );
};

export default HomeSectionCard;
