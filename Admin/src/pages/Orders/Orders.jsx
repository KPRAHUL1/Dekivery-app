import { useState } from 'react';
import {toast} from "react-toastify"
import './Orders.css'
import { useEffect } from 'react';
import axios from 'axios'
import { assets } from '../../../../Frontend/src/assets/frontend_assets/assets';
const Orders =({url})=>{
    const [Orders,setOrders]=useState([]);
    const fetchAllOrders = async () => {
        const response =await axios.get(url+"/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data)
            console.log(response.data.data);
            
        }else{
          toast.error("error")
        }
    }
    const statusHandler = async (event,orderId) => {
       const response =await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
       })
       if (response.data.success) {
        await fetchAllOrders();
       }
        
    }
    useEffect(()=>{
fetchAllOrders();
    },[])
    return(
        <>
<div className="order add">
    <h3>Order Page</h3>
    <div className="order-list">
        {Orders.map((order,index)=>(
            <div key={index} className="order-item">
                 <img src={assets.parcel_icon} alt="" />
                 <div>
                    <p className='order-item-food'>
                        {order.items.map((item,index)=>{
                            if (index===order.items.length-1) {
                                return item.name+"x"+item.quantity
                            }else{
                                return item.name+"x"+item.quantity+","
                            }
                        })}
                    </p>
                    <p className='order-item-name'>{order.address.firstname+" "+order.address.lastname}</p>
                    <div className="order-item-address">
                        <p>{order.address.street+","}</p>
                        <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
                    </div>
                    <p className="order-item-phone">
                        {order.address.phone}
                    </p>
                 </div>
                 <p>Items:{order.items.length}</p>
                 <p>${order.amount}</p>
                 <select onChange={(event)=>statusHandler(event,order._id)}  value={order.status}name="" id="">
                    <option value="Food Proccessing">Food Processing</option>
                    <option value="Out for delivery">Out for Delivery</option>
                    <option value="Deliverd">Deliverd</option>
                 </select>
            </div>
        ))}
    </div>
</div>
        </>
    )
}
export default Orders;