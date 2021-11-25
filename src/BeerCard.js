import {Div} from './components-styling/Div.js';
import {FaRegStar} from 'react-icons/fa';
export function BeerCard(props)
{
    console.log(props.temp);
    function addtofavorites(id){
        console.log(id);
    }
   return <Div>
            <div>
                <FaRegStar className="fav" onClick={()=>addtofavorites(props.temp.id)}/>
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
}