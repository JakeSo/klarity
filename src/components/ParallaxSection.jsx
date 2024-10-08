

export const ParallaxSection = ({img, children}) => {


    return(
        <div className="text-center bg-cover max-w-full section bg-no-repeat bg-center content-center min-h-fit md:h-auto md:min-h-[500px] md:bg-fixed" style={{backgroundImage: `url(${img})`}}>
            <div className="bg-opacity-55 py-10 px-6 my-4 md:p-12 mx-4 md:mx-12 md:my-16 h-fit rounded-lg  bg-black  text-shadow">
                {children}
            </div>
      </div>
    )
} 

export default ParallaxSection;