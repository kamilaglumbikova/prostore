import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'
import Image from 'next/image';
import React from 'react'

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  console.log(latestProducts)
  return (
    <>
      <div className='flex-center'>
        <Image
          src='/images/banner.jpg'
          width={2048}
          height={855}
          alt='banner'
          priority={true} />
      </div>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </>
  )
}

export default Homepage