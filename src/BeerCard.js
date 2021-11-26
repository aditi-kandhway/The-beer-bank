import {Div} from './components-styling/Div.js';
import {FaRegStar} from 'react-icons/fa';
import  react, {useState,useEffect} from 'react';
import { DetailsPopup } from './DetailsPopup.js';
export function BeerCard(props)
{
    const [showPopup, setShowPopup]=useState(false);
    console.log(showPopup);
    function showDetails(val)
    {
        console.log("hiii");
        setShowPopup(val);
        console.log(showPopup);
    }
   return <div>
       <DetailsPopup showPopup={showPopup} onDivchange={showDetails}/>
   <Div onClick={()=>{
       showDetails(true)
   }}>
                <div>
                    <FaRegStar className="fav"/>
                </div>
                <div className="imgdiv">
                    <img src={props.temp.image_url} alt=''/>
                </div>
                <div className="name">
                    <div>
                        {props.temp.name}
                    </div>
                </div>
                <div className="tagline">
                    <div>
                        {props.temp.tagline}
                    </div>
                </div>
            </Div>
        </div>
}