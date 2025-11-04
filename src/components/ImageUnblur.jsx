import React, { useLayoutEffect, useRef } from 'react';
import './ImageUnblur.css';
import { getResponsiveImageData } from '../utils/imageConfig.js';

const ImageUnblur = ({ src, alt }) => {
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.8) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
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

    // Get responsive image data if available
    const responsiveData = getResponsiveImageData(src);

    if (responsiveData && (responsiveData.srcset.webp || responsiveData.srcset.jpg)) {
        return (
            <div className="image-container">
                <picture>
                    {responsiveData.srcset.webp && (
                        <source
                            type="image/webp"
                            srcSet={responsiveData.srcset.webp}
                            sizes={responsiveData.sizes}
                        />
                    )}
                    {responsiveData.srcset.jpg && (
                        <source
                            type="image/jpeg"
                            srcSet={responsiveData.srcset.jpg}
                            sizes={responsiveData.sizes}
                        />
                    )}
                    <img
                        ref={imageRef}
                        src={responsiveData.fallback || src}
                        alt={alt || "Klarity Restaurant Advisors image"}
                        className="blur-image"
                        loading='lazy'
                    />
                </picture>
            </div>
        );
    }

    // Fallback to simple img tag
    return (
        <div className="image-container">
            <img ref={imageRef} src={src} alt={alt || "Klarity Restaurant Advisors image"} className="blur-image" loading='lazy' />
        </div>
    );
};

export default ImageUnblur;
