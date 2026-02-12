import { useState } from 'react'
import './Gallery.css'

function formatShotDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate + 'T12:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/** Label shown under the photo: name, then caption, then alt, then date. */
function getPhotoLabel(image) {
  return image.name || image.caption || image.alt || (image.shotDate ? formatShotDate(image.shotDate) : '') || ''
}

function Gallery({ images, sortByDate = true }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return null
  }

  // Sort by shot date (newest first) when items have shotDate
  const sortedImages = sortByDate && images.some((img) => img.shotDate)
    ? [...images].sort((a, b) => (b.shotDate > a.shotDate ? 1 : -1))
    : images

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowRight' && selectedImage) {
      const currentIndex = sortedImages.findIndex(img => img.src === selectedImage.src)
      const nextIndex = (currentIndex + 1) % sortedImages.length
      setSelectedImage(sortedImages[nextIndex])
    } else if (e.key === 'ArrowLeft' && selectedImage) {
      const currentIndex = sortedImages.findIndex(img => img.src === selectedImage.src)
      const prevIndex = (currentIndex - 1 + sortedImages.length) % sortedImages.length
      setSelectedImage(sortedImages[prevIndex])
    }
  }

  return (
    <>
      <div className="gallery">
        <h3 className="gallery-title">Gallery</h3>
        <div className="gallery-grid">
          {sortedImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
              {getPhotoLabel(image) && (
                <span className="gallery-item-label">{getPhotoLabel(image)}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="gallery-modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="gallery-modal-close"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            ×
          </button>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt || 'Gallery image'}
              className="gallery-modal-image"
            />
            {getPhotoLabel(selectedImage) && (
              <p className="gallery-modal-caption">
                {getPhotoLabel(selectedImage)}
                {selectedImage.shotDate ? ` · ${formatShotDate(selectedImage.shotDate)}` : ''}
              </p>
            )}
            {sortedImages.length > 1 && (
              <div className="gallery-modal-nav">
                <button 
                  className="gallery-nav-button prev"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = sortedImages.findIndex(img => img.src === selectedImage.src)
                    const prevIndex = (currentIndex - 1 + sortedImages.length) % sortedImages.length
                    setSelectedImage(sortedImages[prevIndex])
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <span className="gallery-image-counter">
                  {sortedImages.findIndex(img => img.src === selectedImage.src) + 1} / {sortedImages.length}
                </span>
                <button 
                  className="gallery-nav-button next"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = sortedImages.findIndex(img => img.src === selectedImage.src)
                    const nextIndex = (currentIndex + 1) % sortedImages.length
                    setSelectedImage(sortedImages[nextIndex])
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
