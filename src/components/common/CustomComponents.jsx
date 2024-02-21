import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeNavLink = ({href, className, children}) => {
    const linkStyles = 
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none" 
    return (
        <NavLink
         to={href} 
         className={({isActive}) => 
         isActive 
         ? `${className} ${linkStyles} text-primary-green` 
         : `${className} ${linkStyles}`}>
        {children}
        </NavLink>
    )
}

const CustomeLink = ({className, children}) => {
    const linkStyles = 
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";
    return (
        <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>
)};

const Badges = ({ children, color}) => {
     
    return (
       <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center `}>
        {children}
        </div>
    );
};

export {CustomeNavLink, CustomeLink, Badges };

CustomeNavLink.propTypes = {
    href: PropTypes.isRequired,
    className: PropTypes,
    children: PropTypes.node.isRequired,
};

CustomeLink.propTypes = {
    className: PropTypes,
    children: PropTypes.node.isRequired,
};

Badges.propTypes = {
    children: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
    
};