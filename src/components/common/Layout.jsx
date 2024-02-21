import {Header} from './Header'
import PropTypes from "prop-types"

export const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main style={{minHeight: "80vh"}}>{children}</main>
        <h2>footer</h2>
    </div>
  )
}



Layout.propTypes = {
    children: PropTypes.node.isRequired,
};