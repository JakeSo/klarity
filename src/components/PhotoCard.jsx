

const PhotoCard = ({id, img, title, description}) => {
    return(
        <div key={id} className="relative w-full md:w-1/3 overflow-hidden group">
                <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-300 opacity-75 group-focus:opacity-30 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h2 className="bg-opacity-50 transition-all ease-in-out circle-outline group-focus:border-gold group-hover:border-gold" >{title}</h2>
              <p className=" bg-opacity-50 px-4 py-2 mt-4 rounded-lg  opacity-0 transition-opacity duration-300 group-focus:opacity-100 group-hover:opacity-100">
                {description}
              </p>
            </div>
              </div>
    )
}

export default PhotoCard;