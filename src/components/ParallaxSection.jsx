import { getResponsiveImageData } from '../utils/imageConfig.js';

export const ParallaxSection = ({img, children}) => {
    // For background images, use the largest WebP if available for best quality/size ratio
    const getOptimalBackground = () => {
        const responsiveData = getResponsiveImageData(img);

        if (responsiveData && responsiveData.srcset.webp) {
            // Extract the largest WebP image from srcset
            const webpSources = responsiveData.srcset.webp.split(',');
            const largestWebp = webpSources[webpSources.length - 1]?.trim().split(' ')[0];
            return largestWebp || img;
        }

        return img;
    };

    return(
        <section className="text-center bg-cover max-w-full section bg-no-repeat bg-center content-center min-h-fit md:h-auto md:min-h-[500px] md:bg-fixed" style={{backgroundImage: `url(${getOptimalBackground()})`}} aria-label="Parallax section">
            <div className="bg-opacity-75 py-10 px-6 my-4 md:p-12 mx-4 md:mx-12 md:my-16 h-fit rounded-lg  bg-black  text-shadow">
                {children}
            </div>
      </section>
    )
}

export default ParallaxSection;