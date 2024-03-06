import React from 'react'

import Women from './Women'

export default function Womens() {
  const data =[{image : 'women1.jpg',name : 'WOMEN'},{image : 'women2.jpg',name : 'WOMEN'},{image : 'women3.jpg',name : 'WOMEN'},{image : 'women4.jpg',name : 'WOMEN'},{image : 'women5.jpg',name : 'WOMEN'},{image : 'women6.jpg',name : 'WOMEN'},{image : 'women7.jpg',name : 'WOMEN'},{image : 'women8.jpg',name : 'WOMEN'}]
  return (
    <div className= ' w-full m-auto   px-20'>
      <h1 className=' text-center font-bold text-3xl '>Clouths <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Women</span></h1>
       <div className=' grid place-content-center md:m-auto pb-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2'>
       {
          data.map(
            data=><div className=' pb-5 md:p-0'><Women data={data} /></div>
          )
        }
       </div>
       <div className=' w-full text-center'>
        <button className=' mt-8 text-white bg-orange-900 px-3 rounded-lg font-medium text-xl '>See More</button>
        </div>
    </div>
  )
}
