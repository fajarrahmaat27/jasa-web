import React from 'react'
import banner from '../assets/banner.png'
import Banner from '../shared/Banner'

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <Banner banner ={banner} heading="Make Your Own Website" subheading="A good example of a paragraph contain a topic sentece, details and a conclusion. There are many different kinds of animasl that live in Indonesia" btn1={'Get Started'} btn2={'Discount'}/>
    </div>
  )
}

export default Home