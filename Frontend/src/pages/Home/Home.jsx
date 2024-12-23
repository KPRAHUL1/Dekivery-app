import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Appdowload from '../../components/AppDownload/AppDownload';
const Home=()=>{
  const [category,setCategory]=useState("All");
    return(
        <>
        <div>
          <Header/>
          <ExploreMenu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category} />
          <Appdowload/>
        </div>
        </>
    )
}
export default Home;