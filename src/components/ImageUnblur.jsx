import React, { useLayoutEffect, useRef } from 'react';
import './ImageUnblur.css';

const ImageUnblur = ({ src, alt }) => {
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.8) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Stop observing once the image is in view
                }
            });
        }, { threshold : 0.8});

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
