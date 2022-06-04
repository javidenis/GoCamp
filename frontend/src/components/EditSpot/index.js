import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { editSpot } from '../../store/spots';

export default function EditSpot() {
    const history = useHistory()
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams()
    const userId = sessionUser.id

    useEffect((errors = []) => {
        if (city.length < 1) errors.push("City name is required");
        if (state.length < 1) errors.push("State name is required");
        if (image.length < 1) errors.push("Image name is required");
        if (!price) errors.push("Need to stay a price");
        if (description.length < 1) errors.push("Description name is required");
        setErrors(errors);
    }, [name, city, state, image, price, description]);

    if (sessionUser?.id == undefined) return (
        <Redirect to="/" />
    );
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            city,
            state,
            image,
            price,
            description,
            userId
        }
        const spot = await dispatch(editSpot(payload, id))
        console.log(spot,'id--------')
        history.push(`/spots/${spot.id}`)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='create-form'>
                <ul className='errors-list'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='create-tab'>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                    <input type="text" placeholder="Image Url" value={image} onChange={(e) => setImage(e.target.value)} />
                    <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <textarea className='description' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button className='submit-btn'
                        disabled={!!errors.length}
                    >Send</button>
                </div>
            </form >
        </div >
    )
}