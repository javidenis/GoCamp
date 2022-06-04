import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import SpotCard from '../SpotCard'

export default function Spots() {
    const spots = useSelector(state => state.spots)
    const allSpots = Object.values(spots)
    useEffect(() => {
        console.log(allSpots, 'please work')
    }, [])
    return (
        <div>
            <div className='grid-container'>
                {allSpots.map((spot, i) => (
                    < SpotCard key={i} spot={spot} />
                ))}
            </div>
        </div>
    )
}
