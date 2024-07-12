import './PhotoCard.css';

const PhotoCard = ({ id, img, title, description }) => {
  return (
    <div key={id} className="photoCard w-full md:w-1/3 h-full" style={{aspectRatio: "3/4"}}>
      <div className='photoCard-inner relative w-full h-full'>
        <div className='photoCard-front absolute w-full h-full bg-no-repeat bg-cover' style={{backgroundImage: `url(${img})`}}>
        {/* <img
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-75"
        /> */}
        <div className='flex justify-center h-full bg-black bg-opacity-20'>
          <div className="stain max-w-80">
            <h2 className="px-12 drop-shadow" >{title}</h2>
          </div>
        </div>
        </div>
        <div className='photoCard-back absolute inset-0 flex w-full h-full justify-center items-center bg-gold text-center'>
          <p className=" text-2xl px-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;