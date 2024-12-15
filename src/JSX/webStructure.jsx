import { useEffect, useState } from 'react';
import '/src/CSS/webStruture.css'




function LayoutOfPage() {
    const [active, setActive] = useState(false)
    const [dropdown, setDropdown] = useState([])
    useEffect(() => {
        setDropdown([
            { ch: "Select Country/Region:" },
            { us: "United States" },
            { cs: "Canada" },
            { uk: "United Kingdom" },
            { mx: "Mexico" },
            { sk: "South Korea" },
            { ta: "Taiwan" },
            { ja: "Japan" },
            { au: "Australia" },
            { ic: "Iceland" },
            { fr: "France" },
            { sp: "Spain" },
            { nz: "New Zealand" },
            { sw: "Sweden" },
        ])
    }, [])
    const handleDropdown = () => {
        setActive(!active);
    }

    const [shopmenu, setShopmenu] = useState([])
    const [visible, setVisible] = useState(false)
    const handleShopMenu = () => {
        if (visible) {
            setVisible(false);
            setShopmenu([]);
        } else {
            setVisible(true);
            setShopmenu([
                { ap: "Appliances " },
                { by: "Baby" },
                { bu: "Beauty" },
                { op: "Office Products" },
                { cp: "Computers" },
                { cd: "Costco Direct" },
                { cn: "Costco Next" },
                { el: "Electronics" },
                { fg: "Floral & Gift Baskets" },
                { fn: "Furniture" },
                { gt: "Gift Cards & Tickets" }
            ])
        }
    }
    return (
        <>
            <div className="top-header">
                <a href="">Applebee's Grill & Bar Two Restaurant $50 eGift Cards $74.99 After $5 OFF</a>
            </div>

            <div id='header'>
                <nav className='a-elements'>
                    <a href="">Costco Next</a>
                    <a href="">While Supplies Last</a>
                    <a className='a' href="">Online-Only</a>
                    <a className='a' href="">Treasure Hunt</a>
                    <a href="">What's New</a>
                    <a className='a' href="">Member Favourites</a>
                    <a href="">Get Email Offers</a>
                    <a href="">Customer Service</a>

                    <div className='drop-down'>
                        <button onClick={handleDropdown}>US</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path filerule="evenodd" d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>

                    </div>
                    <div className={`country ${active ? 'active-class' : ''}`}>
                        {
                            dropdown.map((e, i) => {
                                return (
                                    <h2 key={i}>{Object.values(e)}</h2>
                                )
                            })
                        }
                    </div>
                </nav>
            </div>


            <div id='main'>
                <div className='logo'>
                    <img src="src\costco.png" alt="" />
                </div>
                <div className='search'>
                    <input type="text" placeholder='The search field was empty. Please enter a search term.' />
                    <button type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " width="20" height="20" fill="currentColor">
                            <path d="m10 2a8 8 0 0 1 6.32 12.9l4.39 4.38-1.42 1.42-4.38-4.39A8 8 0 1 1 11 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
                        </svg>
                    </button>
                </div>

                <div id='sign-up'>
                    <div className='s-o'>
                        <a className='form-toggle-link'>
                            Sign In / Register</a>  &nbsp; | &nbsp;
                        <a href="">Orders & Returns</a>   &nbsp; | &nbsp;
                    </div>
                    <img src="src\JSX\cart.png" alt="" />
                    <div className='cart-c' >
                        <a className='cart' href="">Cart</a>
                    </div>
                </div>
            </div>

            <nav id='main-section'>
                <button onClick={handleShopMenu} className='shop-btn'>
                    <svg className='svg' width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="4" x2="95" y2="4" stroke="white" strokeWidth="1" />
                        <line x1="5" y1="10" x2="95" y2="10" stroke="white" strokeWidth="1" />
                        <line x1="5" y1="16" x2="95" y2="16" stroke="white" strokeWidth="1" />
                    </svg>
                    <span>Shop</span>
                </button>
                <div>
                    <div className={`appliance ${visible ? 'visible-class' : ''}`}>
                        {shopmenu.map((e, i) => {
                            const value = Object.values(e)[0]
                            return i === 0 ? (
                                <h4 key={i}>{value}</h4>
                            ) : (
                                <p key={i}>{value}</p>
                            )
                        })}
                    </div>

                </div>
                <nav>
                    <ul className='main-section-items'>
                        <li>Grocery</li>
                        <li>Same Day</li>
                        <li>Deals</li>
                        <li>Business  Delivery</li>
                        <li>Optical</li>
                        <li>Pharmacy</li>
                        <li>Services</li>
                        <li>Photo</li>
                        <li>Travel</li>
                        <li>Membership</li>
                        <li>Locations</li>
                    </ul>
                </nav>
            </nav >


            <div id='top-middle-content' >
                <div className='location-time'>
                    <div className='same-ps'>
                        <p className='my-w same'>My Warehouse</p>
                        <p className='d-l same' >Delivery Location</p>
                    </div>
                    <img src="src\location.png" alt="" />
                    <button className='set'>Seattle</button>
                    <p className='close-open'>Closed: Open 10:00 AM Thursday</p>
                </div>

                {/* <div id='parent-1'>
                <div className='small-box'>
                    <img src="src\box.png" alt="" />
                    <button>98101</button>
                </div>
                     </div> */}

                <div id='parent'>
                    <div className='li-bg'>
                        <a href="">Lists </a> &nbsp; | &nbsp;
                        <a href="">Buy Again</a>
                    </div>
                </div>
            </div>

        </>

    )



}

export default LayoutOfPage;