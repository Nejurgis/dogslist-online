import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
    const images = props.images;
    return (
        <div className='dog-breed-images'>
            <h1>Dogs Breed Images</h1>
            <h2>{props.name}</h2>
            This page will show images of the {props.name} breed
            <br/>
            <br/>
            <Link to="/">Go back to the index</Link>
            <div>
                { images && images.map(url => <img src={url} alt='Dog' />)}
                { !images && 'Loading...'}

            </div>
        </div>
    )
}