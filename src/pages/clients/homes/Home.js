import React, { useState } from 'react'
// import { navigateTo } from '../../utils/navigates/navigate'
import ImageBanner1 from '../../../assets/images/product-banner/img-product-1.png'
import ImageBanner2 from '../../../assets/images/product-banner/img-product-2.png'
import ImageBanner3 from '../../../assets/images/product-banner/img-product-3.png'
import ImageBanner5 from '../../../assets/images/product-banner/img-product-7.png'
import ImageBanner6 from '../../../assets/images/product-banner/img-product-8.png'
import ImageBanner7 from '../../../assets/images/product-banner/img-product-9.png'
import { useEffect } from 'react'

const Home = ({setCurrentPath}) => {
  const [listImage] = useState([ImageBanner1,ImageBanner2,ImageBanner3,ImageBanner5,ImageBanner6,ImageBanner7]);
  const [active, setActive] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      if (active < listImage?.length-1) {
        setActive(active + 1);
      }else {
        setActive(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [active, listImage?.length]);

  return (
    <div className='relative flex flex-col  items-center justify-start h-screen'>
      <button className='absolute left-44 top-8 ring-2 ring-gray-800 hover:bg-white p-2 rounded' onClick={() => {
        if (active < 1 ) {
          setActive(listImage?.length - active -1);
        }else {
          setActive(active -1);
        }
      }}>Back</button>
        <div className='w-[80%] h-[500px] object-cover bg-gray-300 flex justify-center'>
            <img className='h-[400px] w-auto' src={listImage[active]} alt="" />
        </div>
      <button  className='absolute right-44 top-8 ring-2 ring-gray-800 hover:bg-white p-2 rounded' onClick={() => {
        if (active === listImage?.length-1 ) {
          setActive(0);
        }else {
          setActive(active + 1);
        }
      }}>Next</button>
    </div>
  )
}

export default Home