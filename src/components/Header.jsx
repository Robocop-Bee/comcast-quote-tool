import './../assets/style/header.css'

import logo from './../assets/images/xfinity.png'

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
     );
}
 
export default Header;