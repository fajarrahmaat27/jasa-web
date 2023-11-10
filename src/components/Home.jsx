import React from 'react'
import banner from '../assets/banner.png'
import Banner from '../shared/Banner'

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <Banner banner ={banner} heading="Buat Website Anda" subheading="Buat website UMKM anda diketahui oleh semua orang" btn1={'Get Started'} btn2={'Discount'}/>
    </div>
  )
}

export default Home