import {Link} from 'react-router-dom';
import './nav.css';
export function Nav()
{
    return <div className="nav">
        <div className="lists">
            <Link to="/" style={{textDecoration:'none'}}><li> Home </li> </Link>
            <Link to="/favourites" style={{textDecoration:'none'}}><li>Favourites</li></Link>
        </div>
        <div className="nav-headings">
            <div className="heading">
                <div>The Beer Bank</div>
            </div>
            <div className="subheading">
                <div>Find Your Favourite beer here</div>
            </div>
            <div>
                  <input type="search" className="search" placeholder="search for beer name"/>
              </div>
        </div>
    </div>
}
export default Nav;