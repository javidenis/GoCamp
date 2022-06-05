import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import SpotCard from '../SpotCard'
import { loadReviews } from '../../store/reviews'

export default function Spots() {
    const dispatch = useDispatch()
    const spots = useSelector(state => state.spots)
    const allSpots = Object.values(spots)
   
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
