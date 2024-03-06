import React from 'react'

import Girl from './Girl'

export default function Girls() {
  const data =[{image : 'kid1.jpg',name : 'KID'},{image : 'kid2.jpg',name : 'KID'},{image : 'kid3.jpg',name : 'KID'},{image : 'kid4.jpg',name : 'KID'},{image : 'kid5.jpg',name : 'KID'},{image : 'kid6.jpg',name : 'KID'},{image : 'kid7.jpg',name : 'KID'},{image : 'kid8.jpg',name : 'KID'}]
  return (
    <div className= ' w-full m-auto p-20'>
      <h1 className=' text-center font-bold text-3xl '>Clouths <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Kid's</span></h1>
       <div className=' grid place-content-center md:m-auto pb-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2'>
       {
          data.map(
            data=><div className=' pb-5 md:p-0'><Girl data={data} /></div>
          )
        }
       </div>
       <div className=' w-full text-center'>
        <button className=' mt-8 text-white bg-orange-900 px-3 rounded-lg font-medium text-xl '>See More</button>
        </div>
    </div>
  )
}
