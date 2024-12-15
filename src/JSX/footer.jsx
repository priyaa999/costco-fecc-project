import '/src/CSS/footer.css'

function FooterOfApp(){


    return (
        <>

            <footer>
                <div className='footer' >
                    <div className='footer-1'>
                        <h2>Customer Service</h2>
                        <h2>Find a Warehouse</h2>
                        <h2>Get Email Offers</h2>
                    </div>
                    <div className='footer-2'>

                        <img src="question-mark.png" alt="" />
                        <p> Get Help</p>
                        <div className='inp-btn'>
                            <input className='inp-1' type="text" placeholder='City,State or Zip' />
                            <button className='btn-1' type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " width="20" height="20" fill="#0f6ab3">
                                    <path d="m10 2a8 8 0 0 1 6.32 12.9l4.39 4.38-1.42 1.42-4.38-4.39A8 8 0 1 1 11 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
                                </svg>
                            </button>
                            <input className='inp-2' type="text" placeholder='Enter your email' />
                            <button className='btn-2'>Go</button>

                        </div>
                    </div>
                    <div className='horizontal-line'>
                        <hr />
                    </div>
                    <div className='footer-3'>
                        <div className='footer-content'>
                            <div className='footer-column'>
                                <h3>About Us</h3>
                                <ul>
                                    <li><a href="#">Get To Know Costco</a></li>
                                    <li><a href="#">Charitable Contributions</a></li>
                                    <li><a href="#">Company Information</a></li>
                                    <li><a href="#">Sustainability Commitment</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Kirkland Signature</a></li>
                                    <li><a href="#">Logo and Media Requests</a></li>
                                    <li><a href="#">The Costco Connection</a></li>
                                    <li><a href="#">Quick & Easy Recipe Videos</a></li>
                                    <li><a href="#">Costco Blog</a></li>
                                    <li><a href="#">Employee Site</a></li>
                                </ul>
                            </div>
                            <div className='footer-column'>
                                <h3>Membership</h3>
                                <ul>
                                    <li><a href="#">Membership Information</a></li>
                                    <li><a href="#">Join Now</a></li>
                                    <li><a href="#">Member Privileges</a></li>
                                    <li><a href="#">Executive Membership Terms</a></li>
                                    <li><a href="#">Sign In or Register</a></li>
                                    <li><a href="#">Credit Card</a></li>
                                    <h3 className='venders'>Vendors & Suppliers</h3>
                                    <li><a href="#">Vendor Inquiries</a></li>
                                    <li><a href="#">Supply Chain Disclosure</a></li>
                                    <li><a href="#">Ethics Hotline for Suppliers</a></li>
                                    <li><a href="#">Supplier Inclusion</a></li>
                                    <li><a href="#">Explore Our Brands</a></li>
                                </ul>

                            </div>
                            <div className='footer-column'>
                                <h3>Customer Service</h3>
                                <ul>
                                    <li><a href="#">Costco Customer Service</a></li>
                                    <li><a href="#">Costco Shop Card Balance</a></li>
                                    <li><a href="#">Order By Item Number</a></li>
                                    <li><a href="#">Concierge Tech Support & Warranty</a></li>
                                    <li><a href="#">Volume Sales: Export & Domestic</a></li>
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Preventing Fraud</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Rebates</a></li>
                                    <li><a href="#">Recalls & Product Notices</a></li>
                                    <li><a href="#">Returns and Exchanges</a></li>
                                    <li><a href="#">Returns Policy</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Locations & Services</a></li>
                                </ul>

                            </div>

                            <div class="footer-column">
                                <h3>Locations & Services</h3>
                                <ul>
                                    <li><a href="#">Find a Warehouse</a></li>
                                    <li><a href="#">Locations Coming Soon</a></li>
                                    <li><a href="#">Hours and Holiday Closures</a></li>
                                    <li><a href="#">Gasoline</a></li>
                                    <li><a href="#">Hearing Aid Center</a></li>
                                    <li><a href="#">Optical</a></li>
                                    <li><a href="#">Special Events</a></li>
                                    <li><a href="#">CostcoGrocery</a></li>
                                    <li><a href="#">Grocery by Instacart</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='horizontal-line'>
                            <hr />
                        </div>
                    </div>
                    <div className='footer-4'>
                        <div className='end-footer-content' >
                            <ul>
                                <li><a href=""> Site Map </a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li> <a href="">Your Privacy Rights</a></li>
                                <li> <a href="">CA Notice</a></li>
                                <li> <a href="">Cookie Settings</a></li>
                                <li> <a href="">Your Privacy Choices</a></li>
                                <li> <a href="">Consumer Health Data</a></li>
                                <li> <a href="">Feedback</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-5'>
                        <div className='social-media-logo'>
                            <img className='fb' src="facebook.png" alt="" />
                            <img className='pt' src="pintrest.png" alt="" />
                            <img className='insta' src="instagram.png" alt="" />
                            <img className='co' src="costco-logo.png" alt="" />
                        </div>
                    </div>
                    <div className='footer-6'>
                        <div className='copy-right'>
                            <p> &copy; 1998-2024 Costco Wholesale Corporation.All
                                rights reserved. <br /> Last Update: 12/14/2024,5:52:25 PM,v146
                            </p>

                        </div>
                    </div>
                </div >
            </footer >

        </>


    )

}


export default FooterOfApp;





