import React, { useEffect, useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import Axios from 'axios'
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import CopyRight from '../Components/CopyRight';

function Home() {

    const [fetchData, setFetchData] = useState([]);

    useEffect(()=>{
        getData()
        console.log("ff",fetchData.data)
    },[])

    const getData = async()=>{
        const post = {
            sId:5,
            uuId:0
          }
       const  result = await Axios.post("http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid",{post})
        setFetchData(result.data)
    }
    


    return (
        <div className="">
            <NavigationBar />
            <Section fetchData={fetchData.data}/>
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Home