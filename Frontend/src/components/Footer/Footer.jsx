import { assets } from '../../assets/frontend_assets/assets';
import './Footer.css'

const Footer =()=>{
    return(
        <>
        <div className="footer" id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus ullam magni enim ipsa dolor illo ratione aperiam.
                     Similique necessitatibus laborum deleniti assumenda maxime nulla aliquam reprehenderit modi deserunt saepe.</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
            </div>
            <div className='footer-content-center'>
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                 </ul>
            </div>
         </div>
         <hr />
         <p className="footer-copywrite">
            Copyright 2024@ Tomato.com - all right Reserved
         </p>
        </div>
        </>
    )
}
export default Footer;