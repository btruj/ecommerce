import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { instagramPosts } from "../../assets/data/data";

const filterDiscoverItems = [
    {
        id: 1,
        title: "Filter & Discover",
        icon: <IoIosColorFilter size={70}/>,
        description: "Lorem Ipsum is simplyh dummy text of the printing and typesetting.",
    },
    {
        id: 2,
        title: "Add To Cart",
        icon: <IoBagRemoveOutline size={70}/>,
        description: "Lorem Ipsum is simplyh dummy text of the printing and typesetting.",
    },
    {
        id: 3,
        title: "Fast Shipping",
        icon: <MdOutlineLocalShipping size={70}/>,
        description: "Lorem Ipsum is simplyh dummy text of the printing and typesetting.",
    },
    {
        id: 4,
        title: "Enjoy The Product",
        icon: <FiBox size={70}/>,
        description: "Lorem Ipsum is simplyh dummy text of the printing and typesetting.",
    },
]


export const InstagramPost = () => {
  return (
    <>
    <section className="post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
            <>
            <div className="h-72 lg:h-80 overflow-hidden">
                <img 
                src={post.image} 
                alt="" 
                className="w-full h-full object-cover transition-transform ease-in-out hover:-rotate-12 hover:scale-125"
                />
            </div>
            </>
        ))}

    </section>
    </>
  )
}
