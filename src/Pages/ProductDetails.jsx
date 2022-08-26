import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css'
const ProductDetails = () => {

    const [data,setData] = useState({});
    const param = useParams();
    const navigate = useNavigate()
     
      useEffect(()=>{
        fetch(`http://localhost:8080/data/${param.detail_id}`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        })
      },[param])
  return (
    <div>
        <div style={{ width: "100%", height: "100px" }}> </div>
        <div className='Details_main'>
             <div className='Details_up_div'>
                   <div className='Details_img_div'>
                        <img src={data.image} alt='404'/>
                   </div>
                   <div className='Details_price_div'>
                        <div>
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
                        </div>
                        <div className='price_and_details'>
                            <p>From</p>
                            <p style={{fontSize:"20px", fontWeight:"bold"}}>₹{data.price}<span style={{fontSize:"15px", fontWeight:"normal"}}>/Night</span></p>
                            <Button mt='30px' bg='yellow.500' w='85%'>Book Now</Button>
                            <Button mt='30px'  w='85%' onClick={()=>{
                                navigate('/')
                            }}>Send Message</Button>
                            <br />
                            <br />
                            <i style={{color:"green"}}>This property has <br /> payment protection</i>
                        </div>
                   </div>
             </div>
             <div className='Details_down_div'>
                  <h4>{data.title}</h4>
                   <p>
                   100 year old palatial Bungalow popularly known as ‘Kudai Veedu’ (Umbrella house) overlooking the pride of South India, Meenakshi temple.

This heritage house of the temple city has retained its antique value by maintaining the front structure while modernizing the rooms of the house.

It is perfect for those to experience culture by walking around the lanes which housed the original city 1500 years ago. These lanes hold the vibrant culture of the people living in them.

Senior citizens please note that the house is in third floor without lift. Only steps. Public and Paid parking available within a block, No parking within the premises. We have a door bell switch at the right side of the 5th staircase while entering the building.
                   </p>
             </div>
        </div>
    </div>
  )
}

export default ProductDetails