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

    const allSpots = Object.values(spots).map((el) => (
        <NavLink className='spot-navlink' to={`/spots/${el?.id}`}>
            <div className='home-spots' style={{ backgroundImage: `url(${el?.image})` }}>
                <div className='display'>
                    <div key={el?.name}>{el?.name}</div>
                    <div key={el?.price}>${el?.price}</div>
                    <div key={el?.city}>{el?.city}</div>
                    <div key={el?.state}>{el?.state}</div>
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
