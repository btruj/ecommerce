
import { Title, Caption } from "../../components/common/CustomComponents";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import { ShippingInfo, Product, Hero, Banner, ProductSlide, Testimonials, InstagramPost  } from "../../router";



export const Home = () => {
  return (
  <>
  <Hero />
  <Product />
  <ShippingInfo />
  <Banner />
  <ProductSlide/>
  <Testimonials/>

  <div className="container my-16 slideproduct">
    <Title level={3}>Recent Product</Title>
    <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART</Caption>
    <br />
    <ProductSlideCard />
    <InstagramPost />
  </div>
  </>
)};
