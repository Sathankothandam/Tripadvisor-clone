import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../Styles/Product.css'
import getValue from '../Components/api'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const [data , setData] = useState([])
  const [page, setPage] = useState(1)
  const [sort , setSort] = useState("DESC")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

      useEffect(()=>{
       handleData(page,sort)
      },[page,sort])
  
      function handleData(page,sort){
        setLoading(true);
          getValue({
              page: page,
              limit: 8,
              sort: "price",
              order: sort
             })
             .then((res)=> {
          setData(res.data)
          setLoading(false)})
             .then(err=> {
              console.log(err)
              setLoading(false)
             })
      }
      console.log(data)
  
  return (
    <div>
      <div style={{ width: "100%", height: "100px" }}> </div>
      <div>{loading && <h3 style={{ fontSize: "2rem" }}>Loading...</h3>}</div>
      <div className='Product_main'>
        <div className='Product_left_banner'>
           <img src="https://s3.envato.com/files/306928834/JPG/300x600.jpg" alt="" />
        </div>
        <div className='Product_right'>
           <div className='Sorting_div'>
                 <div>
                   <Button onClick={()=>{
                     setSort(sort==="ASC" ? "DESC" : "ASC")
                   }}>Sort Price: {sort==="ASC" ? "Low To High" : "High To Low"}</Button>
                 </div>
                 <div>
                 <Button disabled={page===1} onClick={()=>{
                  setPage(page - 1)
                 }}>Prev</Button>
                 <Button>{page}</Button>
                 <Button disabled={page===3} onClick={()=>{
                  setPage(page + 1)
                 }}>Next</Button>   
                 </div>
           </div>
               {data.map((items)=>{
                return (
                  <div className='Product_appending_div'>
                  <div className='Appending_main_div'>
                     <div className='Product_image_div' onClick={()=>{
                              navigate(`/products/${items.id}`)
                             }}>
                          <img src={items.image} alt="product_img" />
                     </div>
                     <div className='Product_details_div'>
                       <div className='Product_title_div'>
                           <h3>{items.title}</h3>
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
                               <h5>₹{items.price}</h5>
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
                             <Button mt='30px' bg='yellow.300' onClick={()=>{
                              navigate(`/products/${items.id}`)
                             }}>View Details</Button>
                           </div>
                       </div>
                     </div>
                  </div>
            </div>
                )
               })}
        </div>
      </div>
    </div>
  )
}

export default Products