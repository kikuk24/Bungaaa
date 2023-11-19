import Footer from '@/Components/Footer'
import CardBlog from '@/Components/Home/CardBlog'
import Navbar from '@/Components/Navbar'
import Topbar from '@/Components/Topbar'
import React from 'react'

const Artikel = (props) => {
  console.log(props)
  return (
    <>
      <main className='bg-white'>
        <Topbar />
        <Navbar/>
        <CardBlog />
      </main>
      <Footer></Footer>
    </>
  )
}

export default Artikel