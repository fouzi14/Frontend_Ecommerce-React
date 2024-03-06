import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div className=' z-50 opacity-100 bg-gray-200 shadow-2xl w-full mt-8 py-5 flex justify-center '>
        <div >
                <FacebookIcon className=' mr-5 text-blue-600'/>
                <InstagramIcon className='mr-5 text-orange-600'/>
                <TwitterIcon className='mr-5 text-blue-800'/>
                <LinkedInIcon className=' text-blue-400'/>
        </div>
    </div>
  )
}
