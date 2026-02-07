import BestSeller from "../components/BestSeller/BestSeller"
import Carousel from "../components/Carousel/Carousel"
import Category from "../components/Category/Category"
import CustomerTestimonials from "../components/Testimonials/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs/WhyChoseUs"


const Home = () => {
  return (
    <div>
      <Carousel />
      <BestSeller />
      <Category />
      <WhyChooseUs />
      <CustomerTestimonials />
    </div>
  )
}

export default Home
