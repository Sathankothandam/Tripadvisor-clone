import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import '../Styles/Product.css'
const Products = () => {
  return (
    <div>
      <div className='Product_main'>
        <div className='Product_left_banner'>
           <img src="https://s3.envato.com/files/306928834/JPG/300x600.jpg" alt="" />
        </div>
        <div className='Product_right'>
           <div className='Sorting_div'>

           </div>
           <div className='Product_appending_div'>
                 <div className='Appending_main_div'>
                    <div className='Product_image_div'>
                         <img src="https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/0e/ae/92/cb.jpg" alt="product_img" />
                    </div>
                    <div className='Product_details_div'>
                      <div className='Product_title_div'>
                          <h3>City View Temple crozy</h3>
                      </div>
                      <div className='Price_details_main_div'>
                          <div className='price_div'>
                              <h4>Holiday Rental House</h4>
                              <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                              <i class="fa-solid fa-bed"></i>
                                <p>1 bed room</p>
                              </div >
                              <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                              <i class="fa-solid fa-shower"></i>
                                <p>1 bath room</p>
                              </div>
                              <h5>₹1256</h5>
                          </div>
                          <div className='calender_div'>
                            <Flex mt='20px'>
                              <FormLabel ml='5px'>from</FormLabel>
                            <Input
                           placeholder="checkin"
                           size="small"
                           type="datetime-local" />
                           <FormLabel ml='5px'>to</FormLabel>
                          <Input
                           placeholder="checkin"
                           size="small"
                           type="datetime-local"/>
                            </Flex>
                            <Button mt='30px' bg='yellow.300'>View Details</Button>
                          </div>
                      </div>
                    </div>
                 </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Products