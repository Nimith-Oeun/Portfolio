import React from 'react'
import ProfileImage from './components/ProFileImg'
import SideFooter from './components/SideFooter'
import Menu from './components/Menu'

export default function SideBard() {
  return (
    <>
        <div className='w-full'>
            <div>
                <ProfileImage />
            </div>
            <div className='my-5'>
                <Menu/>
            </div>
            <div>
                <SideFooter />  
            </div>
            
        </div>
    </>
  )
}
