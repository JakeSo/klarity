import React, { useEffect, useRef } from 'react';
import './ImageUnblur.css';

const ImageUnblur = ({ src, alt }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio === 1) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Stop observing once the image is in view
                }
            });
        }, { threshold : 1.0});

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="image-container">
            <img ref={imageRef} src={src} alt={alt} className="blur-image" />
        </div>
    );
};

export default ImageUnblur;
