import './PhotoCard.css';

const PhotoCard = ({ id, img, title, description }) => {
  return (
    <article key={id} className="photoCard w-full md:w-1/3 h-full" style={{ aspectRatio: "3/4" }} role="region" aria-label={title}>
      <div className='photoCard-inner relative w-full h-full'>
        <div className='photoCard-front absolute w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${img})` }}>
          <div className='grid h-full bg-black bg-opacity-15 place-items-center'>
            <div className="stain max-w-80">
              <h2 className="px-12 text-shadow">{title}</h2>
            </div>
          </div>
        </div>
        <div className='photoCard-back absolute inset-0 grid w-full h-full place-items-center bg-gold text-center'>
          <p className="text-4xl md:text-5xl px-8">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default PhotoCard;