import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpots } from '../../store/spots'
import './home.css'
import { NavLink } from 'react-router-dom';

export default function Spots() {
    const dispatch = useDispatch()
    const spots = useSelector(state => state.spots)

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const allSpots = Object.values(spots).map((el, i) => (
        <NavLink className='spot-navlink' to={`/spots/${el?.id}`}>
            <div className='home-spots' style={{ backgroundImage: `url(${el?.image})` }}>
                <div key={i} className='display'>
                    <div>{el?.name}</div>
                    <div>${el?.price}</div>
                    <div>{el?.city}</div>
                    <div>{el?.state}</div>
                </div>
            </div>
        </NavLink>
    ));
    return (
        <div>
            <div className='grid-container'>
                {allSpots}
            </div>
        </div>
    )
}
