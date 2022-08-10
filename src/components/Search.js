import React from 'react'

function Search() {
  return (
    <div className='p-3 relative'>
        <div className='absolute left-1/2 -translate-x-1/2 translate-y-10 md:-translate-y-[70px]'>
            <form>
                <input className='w-[90vw] md:w-72 drop-shadow-md px-5 py-5 h-8 rounded-full' placeholder='Cari Barang..?'></input>
            </form>
        </div>
    </div>
  )
}

export default Search