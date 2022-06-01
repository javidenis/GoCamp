import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpots } from '../../store/spots'
import Spot from '../Spot'

export default function Spots() {
    const dispatch = useDispatch()
    const spots = useSelector(state => state.spots)
    const allSpots = Object.values(spots)
    console.log(allSpots, '-----------------------')
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const currentSpot = Object.values(spots).map((el) => (
        <li key={el?.state}>{el?.city}</li>
      ));
    
    return (
        <div>
            {/* {allSpots.forEach(spot => (
                <Spot key={spot} state={spot?.state} city={spot?.city} />
            ))} */}
            <ul>
                {currentSpot}
            </ul>
        </div>
    )
}
