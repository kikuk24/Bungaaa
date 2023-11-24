import Footer from '@/Components/Footer'
import CardProduct from '@/Components/Home/CardProduct'
import Navbar from '@/Components/Navbar'
import Topbar from '@/Components/Topbar'
import React from 'react'

const Products = (props) => {
  console.log(props)
  return (
      <main className="bg-page">
          {/* <Topbar category={props.category} /> */}
          <Navbar />
          <CardProduct products={props.products} category={props.category} />
          <Footer />
      </main>
  );
}

export default Products