import BestSeller from "../components/BestSeller/BestSeller"
import Carousel from "../components/Carousel/Carousel"
import Category from "../components/Category/Category"
import WhyChooseUs from "../components/WhyChooseUs/WhyChoseUs"


const Home = () => {
  return (
    <div>
     <Carousel />
     <Category />
     <BestSeller />
     <WhyChooseUs />
    </div>
  )
}

export default Home
