import {useEffect,useState} from "react";
import axios from 'axios';
import {BeerCard} from './BeerCard.js';
import {ContainerDiv} from './components-styling/componentDiv.js'
import './App.css';
export function Home()
{
    const [eachBeer,setBeer]=useState([]);
    const getBeer=async()=>{
        const res=await axios.get('https://api.punkapi.com/v2/beers');
        // console.log(res.data);
        setBeer(res.data);
    }
    // console.log(eachBeer);
    useEffect(()=>{
        getBeer();
    },[]);
    const temp=[];
    return (
    <ContainerDiv>
            {
            eachBeer && eachBeer.map(beer=>(
                    temp.push(beer),
                    <BeerCard temp={beer}/>
            ))
            }
    </ContainerDiv>
    )
}

export default Home;