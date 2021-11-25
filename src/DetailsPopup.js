import './details.css';
import {FaTimes} from 'react-icons/fa';
import {Details} from './components-styling/DetailsDiv.js';
let temp=false;
export function DetailsPopup()
{
    function hideDiv()
    {
        temp=true;
        console.log("hidediv");
        if(temp)
        {
            return <Details display="none"/>
        }
    }
    if(temp)
    {
        return <Details display="none"/>
    }
    return  <div>
    <Details display="flex">
        <div>
            <FaTimes className="delete" onClick={()=>{
                temp=true}}/>
        </div>
        <div className="adddetails">
           <div className="detailImage">
              <img src="https://images.punkapi.com/v2/2.png" alt=''/>
           </div>
           <div>
              <div className="name">Trashy Blonde</div>
              <div className="tagline">You Know You Shouldn't</div>
              <div className="ibu">
                  <div>IBU: </div>
                  <div>ABV: </div>
                  <div>EBC: </div>
              </div>
              <div className="description">
                  "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
              </div>
              <div>
                  Best Served with:
                  
              </div>
           </div>
        </div>
        <div>
          "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        </div>
    </Details>
    </div>
}