import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { Caption, Title } from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  
  const { title, images, price, description, discount, rating, color } = 
  product;

  use

if(!product) {
  return <div>Product Not Found</div>
}

  return (
    <>
      <section className="container mt-32 slideproduct">
        <div 
        className="flex justify-between flex-col lg:flex-row"
        key={productId}>
          <div className="images lg:w-1/2">
            <div>
              {images.map((image, index) => (
              <img 
              src={image.image} 
              key={index}
              className="w-full h-full"
              />
              ))}
            </div>
          </div>
          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-600">SALE {discount}% OFF</button>
              <Title className="my-2" level={2}>{title}</Title>
              <div className="flex items-center gap-2 -mt-5 mb-5">
                <div className="flex items-center gap-1">
                  {RenderRatingStars(rating)}
                </div>
                <p>{product.rating} Review</p>
              </div>
              <p className="text-[15px]">{description}</p>
              <br />
              <div>
                <Caption>Colors</Caption>
                <div className="flex items-center gap-3 mt-5">
                  {color.map((colorOption, index) => (
                    <div key={index} className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${}`}></div>  
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}


