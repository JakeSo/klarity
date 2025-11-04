// Configuration for responsive images
// Maps original image names to their responsive variants

export const imageConfig = {
  'restaurant_1.jpg': {
    fallback: '/src/assets/restaurant_1.jpg',
    srcset: {
      webp: '',
      jpg: ''
    },
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  },
  'restaurant_3.jpg': {
    fallback: '/src/assets/restaurant_3.jpg',
    srcset: {
      webp: '/images/restaurant_3-640w.webp 640w',
      jpg: '/images/restaurant_3-640w.jpg 640w'
    },
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  },
  'kitchen-1.jpg': {
    fallback: '/src/assets/kitchen-1.jpg',
    srcset: {
      webp: '/images/kitchen-1-640w.webp 640w, /images/kitchen-1-1024w.webp 1024w',
      jpg: '/images/kitchen-1-640w.jpg 640w, /images/kitchen-1-1024w.jpg 1024w'
    },
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1920px'
  },
  'kitchen-3.jpg': {
    fallback: '/src/assets/kitchen-3.jpg',
    srcset: {
      webp: '/images/kitchen-3-640w.webp 640w, /images/kitchen-3-1024w.webp 1024w',
      jpg: '/images/kitchen-3-640w.jpg 640w, /images/kitchen-3-1024w.jpg 1024w'
    },
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1920px'
  },
  'photoCard1.jpg': {
    fallback: '/src/assets/photoCard1.jpg',
    srcset: {
      webp: '/images/photoCard1-640w.webp 640w',
      jpg: '/images/photoCard1-640w.jpg 640w'
    },
    sizes: '(max-width: 640px) 100vw, 33vw'
  },
  'photoCard2.jpg': {
    fallback: '/src/assets/photoCard2.jpg',
    srcset: {
      webp: '/images/photoCard2-640w.webp 640w',
      jpg: '/images/photoCard2-640w.jpg 640w'
    },
    sizes: '(max-width: 640px) 100vw, 33vw'
  },
  'photoCard3.jpg': {
    fallback: '/src/assets/photoCard3.jpg',
    srcset: {
      webp: '/images/photoCard3-640w.webp 640w, /images/photoCard3-1024w.webp 1024w',
      jpg: '/images/photoCard3-640w.jpg 640w, /images/photoCard3-1024w.jpg 1024w'
    },
    sizes: '(max-width: 640px) 100vw, 33vw'
  },
  // Accolade logos
  'Charlotte-Business-Journal.jpg': {
    fallback: '/src/assets/Accolades/Charlotte-Business-Journal.jpg',
    srcset: {
      webp: '',
      jpg: ''
    },
    sizes: '180px'
  },
  'entrepreneur-magazine.jpg': {
    fallback: '/src/assets/Accolades/entrepreneur-magazine.jpg',
    srcset: {
      webp: '/images/entrepreneur-magazine-640w.webp 640w',
      jpg: '/images/entrepreneur-magazine-640w.jpg 640w'
    },
    sizes: '180px'
  },
  'Forbes_logo.png': {
    fallback: '/src/assets/Accolades/Forbes_logo.png',
    srcset: {
      webp: '/images/Forbes_logo-640w.webp 640w',
      png: '/images/Forbes_logo-640w.png 640w'
    },
    sizes: '180px'
  },
  'Nations-rest-news.jpg': {
    fallback: '/src/assets/Accolades/Nations-rest-news.jpg',
    srcset: {
      webp: '/images/Nations-rest-news-640w.webp 640w',
      jpg: '/images/Nations-rest-news-640w.jpg 640w'
    },
    sizes: '180px'
  },
  'the-charlotte-observer.png': {
    fallback: '/src/assets/Accolades/the-charlotte-observer.png',
    srcset: {
      webp: '/images/the-charlotte-observer-640w.webp 640w',
      png: '/images/the-charlotte-observer-640w.png 640w'
    },
    sizes: '180px'
  },
  'wall-street-journal.png': {
    fallback: '/src/assets/Accolades/wall-street-journal.png',
    srcset: {
      webp: '/images/wall-street-journal-640w.webp 640w',
      png: '/images/wall-street-journal-640w.png 640w'
    },
    sizes: '180px'
  },
  'top-food-franchise.png': {
    fallback: '/src/assets/Accolades/top-food-franchise.png',
    srcset: {
      webp: '',
      png: ''
    },
    sizes: '180px'
  },
  'inc-5000.png': {
    fallback: '/src/assets/Accolades/inc-5000.png',
    srcset: {
      webp: '/images/inc-5000-640w.webp 640w',
      png: '/images/inc-5000-640w.png 640w'
    },
    sizes: '180px'
  },
};

/**
 * Get responsive image data for a given image source
 * @param {string} src - Original image path
 * @returns {object|null} - Image configuration or null if not found
 */
export function getResponsiveImageData(src) {
  if (!src) return null;

  // Extract filename from src
  const filename = src.split('/').pop();

  return imageConfig[filename] || null;
}
