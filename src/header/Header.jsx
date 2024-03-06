import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
    const [open , setOpen] = useState(false)
  return (
    <div className=' bg-white shadow-xl fixed w-full z-50 '>
        <div className='  w-[90%] mx-auto flex items-center justify-between'>
            <div className='   lg:flex lg:items-center lg:justify-between lg:w-[80%]'>
                <img className=' h-20' src="./image/logo.png" alt="" />
                <div className={` transition-all ease-in duration-500 absolute left-0 px-10  bg-white  w-full  lg:static flex flex-col-reverse lg:flex-row lg:flex lg:items-center lg:justify-between ${open ? 'left-[-1000px]':'left-0'}`}>
                <ul className=' h-screen lg:h-0  lg:flex lg:items-center'>
                    <li className=' lg:mx-3 text-center font-extralight ml-4 my-2 lg:my-0 text-xl'>Home</li>
                    <li className=' lg:mx-3 text-center font-extralight ml-4 my-3 lg:my-0  text-xl'>Men</li>
                    <li className=' lg:mx-3 text-center font-extralight ml-4 my-3 lg:my-0  text-xl'>Women</li>
                    <li className=' lg:mx-3 text-center font-extralight ml-4 my-3 lg:my-0  text-xl'>Kid's</li>
                    <li className=' lg:mx-3 text-center font-extralight ml-4 my-2 lg:my-0  text-xl'>Accessoir</li>
                </ul>
                <div className=' relative 
                 mx-3 border-solid border-2 border-black rounded-full px-4 '>
                    <input type="text" name="" id=""  className=' outline-none' />
                    <SearchIcon className=' absolute lg:static right-3'/>
                </div>
                </div>
            </div>
            <div className=''>
               
                <ul className=' flex items-center '>
                    <li className=' mx-4 relative'>
                        <FavoriteIcon/>
                        <span className=' absolute text-white w-4 h-4 flex place-content-center items-center bg-blue-500 rounded-full top-[-5px] left-4  text-sm'>2</span>
                    </li>
                    <li className=' relative'>
                        <ShoppingCartIcon/>
                        <span className=' absolute text-white w-4 h-4 flex place-content-center items-center bg-blue-500 rounded-full top-[-5px] left-3 text-sm'>2</span>
                    </li>
                    <li className=' mx-4 lg:hidden'>
                        {open ? <MenuIcon  onClick={()=>setOpen(false)} /> : <CloseIcon onClick={()=>setOpen(true)} />}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
