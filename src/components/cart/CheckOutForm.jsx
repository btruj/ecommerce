import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckOut from "react-stripe-checkout"


export const CheckOutForm = ({total, handlePaymentSuccess}) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
     handlePaymentSuccess();
     dispatch(clearCart())
  }

  return (
    <>
                        <StripeCheckOut
                    token={handleToken}
                    stripeKey=""
                    amount={total * 100} //stripe amount will be in cents so multiply by 100
                    name="Gorkcoder Food Store"
                    email="gorkcoder@gmail.com"
                    description="Payment test using Stripe checkout"
                    > 
                        <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
                          Pay ${total?.toFixed(2)}
                          </button>
                        </StripeCheckOut>
    </>
  )
}
