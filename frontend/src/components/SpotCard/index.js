import { NavLink } from "react-router-dom"
import './SpotCard.css'

export default function SpotCard({ spot }) {
    console.log(spot?.id)
    return (
        <div className="spot-container">
            <NavLink className='spot-navlink' to={`/spots/${spot?.id}`}>
                <div className='home-spots' style={{ backgroundImage: `url(${spot?.image})` }}>
                </div >
            </NavLink>
            <div className='display'>
                <div className="display-text">
                    <div>{spot?.name}</div>
                    <div>${spot?.price}</div>
                    <div>{spot?.city}</div>
                    <div>{spot?.state}</div>
                </div>
            </div>
        </div>
    )
}
