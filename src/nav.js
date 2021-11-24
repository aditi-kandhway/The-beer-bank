import {Link} from 'react-router-dom';

export function Nav()
{
    return <div>
        <div>
            <Link to="/"><li> Home </li> </Link>
            <Link to="/favourites"><li>Favourites</li></Link>
        </div>
        <div>
            <div>The Beer Bank</div>
        </div>
        <div>
            <div>Find Your Favourite beer here</div>
        </div>
    </div>
}
export default Nav;