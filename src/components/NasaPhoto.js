import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=1t6WkesmV2Yf0sUXsvHaTNUn65mxBmDWRJnHzy6P` 
            )

            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <>
        <NavBar />
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="photo" />
            ) : (
                <iframe
                title="space-video"
                src="photoData.url"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
        </>
    )
}