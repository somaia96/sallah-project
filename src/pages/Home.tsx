import Best from "../components/Home/Best"
import BestSale from "../components/Home/BestSale"
import Categories from "../components/Home/Categories"
import Features from "../components/Home/Features"
import Slider from "../components/Home/Slider"
import Special from "../components/Home/Special"
import Ads from "../components/Home/Ads"
import Offers from "../components/Home/Offers"
import New from "../components/Home/New"
import More from "../components/Home/More"
import Sale from "../components/Home/Sale"
import Featured from "../components/Home/Featured"
import Vision from "../components/Home/Vision"
import Client from "../components/Home/Client"
import Articles from "../components/Home/Articles"
import Brands from "../components/Home/Brands"

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="container">
        <Features />
        <Best />
        <Special />
      </div>
      <BestSale />
      <div className="container">
        <Categories />
        <Ads />
        <Offers />
      </div>
      <New />
      <div className="container">
        <More />
      </div>
      <Sale />
      <div className="container">
        <Featured />
      </div>
      <Vision />
      <div className="container">
        <Client />
        <Articles />
        <Brands />
      </div>
    </div>
  )
}

export default Home
