import React from 'react'
import Logo from '../logo-koprasi.png'
import Search from './Search'
import Headline from './Headline'

function Header() {

  return (
    <div className='fixed w-full z-20'>
        <div className='bg-gradient-to-t from-gray-100 to-gray-100 flex drop-shadow-lg  items-center w-full h-20 text-black'>
            <img src={Logo} className='w-10 mx-5' alt='logo-koperasi'/>
            <div className=''>
                <h1 className='font-bold text-lg'>Toko - AYEM</h1>
                <p className='text-sm'>Pesan & Antar Barang</p>
            </div>
        </div>
        <div>
          <Headline/>
          <Search/>
        </div>
    </div>
  )
}

export default Header