import './Navbar.css';
import {assets} from '../../assets/admin_assets/assets'
 const Navbar=()=>{
    return(
        <>
        <div className="navbar">
            <img className='logo' src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
        </>
    )
 }
 export default Navbar;