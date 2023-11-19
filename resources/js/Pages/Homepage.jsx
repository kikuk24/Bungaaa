import Footer from "@/Components/Footer"
import CardBlog from "@/Components/Home/CardBlog"
import CardProduct from "@/Components/Home/CardProduct"
import Carousel from "@/Components/Home/Carousel"
import Navbar from "@/Components/Navbar"
import Topbar from "@/Components/Topbar"
import { Head } from "@inertiajs/react"

export default function Homepage(props) {
  console.log(props)
  return (
      <main className="bg-white">
          <Head >
        <title>{props.title}</title>
              <meta name="description" content="Your page description" />
          </Head>
          <Topbar category={props.category} />
          <Navbar />
          <Carousel />
      <CardProduct products={props.products}
      category={props.category}/>
          <CardBlog />
          <Footer />
      </main>
  );
}
