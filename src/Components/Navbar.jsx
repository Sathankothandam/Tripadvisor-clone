import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar_main_container'>
            <div className='Navbar_logo_div'>
                 <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="brand_logo" />
            </div>
            <div className='Navbar_routes_div'>
                <div>
                <i class="fa-solid fa-pen"></i><h4>Review</h4>
                </div>
                <div>
                
                   <i class="fa-regular fa-heart"></i>
                   <h4>Trip</h4>
                </div>
                <div className='signin_div'>
                    <h4>Sign in</h4>
                </div>
                <div>
                <i class="fa-solid fa-cart-arrow-down"></i><h4>Baskets</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar