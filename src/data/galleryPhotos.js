/**
 * Gallery photos organized by camera type: 35mm film (Canon AE-1) and digital (Fujifilm XT1).
 * Photos are sorted by shotDate (newest first). Label shown = name || caption || alt || date.
 */

// Film photos (35mm, Canon AE-1)
import film01 from '../assets/gallery/film/Bonnie.jpg'
import film02 from '../assets/gallery/film/Clouds Rest in Yosemite.JPG'
import film03 from '../assets/gallery/film/Hoh rainforest.jpg'
import film04 from '../assets/gallery/film/Hueco Tanks, Texas.jpg'
import film05 from '../assets/gallery/film/In Shenandoah.jpg'
import film06 from '../assets/gallery/film/Ithaca, NY.jpg'
import film07 from '../assets/gallery/film/National Botanical Gardens.jpg'
import film08 from '../assets/gallery/film/On the beach at Olympic NP.jpg'
import film09 from '../assets/gallery/film/Sunrise from Cadillac Mountain.JPG'
import film10 from '../assets/gallery/film/Sunset from Clouds Rest in Yosemite.JPG'
import film11 from '../assets/gallery/film/Sunset from Smith Island, MD.jpg'
import film12 from '../assets/gallery/film/Sunset in Acadia NP.JPG'
import film13 from '../assets/gallery/film/View of half dome.JPG'
import film14 from '../assets/gallery/film/Walking the canal in Georgetown.jpg'
import film15 from '../assets/gallery/film/White Sands, New Mexico.jpg'

// Digital photos (Fujifilm XT1)
import digital01 from '../assets/gallery/digital/A forest overlook.JPEG'
import digital02 from '../assets/gallery/digital/A vineyard beyond Zumaia.JPEG'
import digital03 from '../assets/gallery/digital/Church ruin in the garden of Monserrate Palace .JPEG'
import digital04 from '../assets/gallery/digital/Donkeys on the Camino.JPEG'
import digital05 from '../assets/gallery/digital/Dusk after eating at Sabor de Nepal.JPEG'
import digital06 from '../assets/gallery/digital/In Black Water Falls State Park.JPEG'
import digital07 from '../assets/gallery/digital/In the church ruins.JPEG'
import digital08 from '../assets/gallery/digital/Kite flying at sunset at Assateague Island.JPEG'
import digital09 from '../assets/gallery/digital/Looking over Zarautz at dusk.JPEG'
import digital10 from '../assets/gallery/digital/Off the Red Creek in Dolly Sods.JPEG'
import digital11 from '../assets/gallery/digital/On the camino to Izar Bide.JPEG'
import digital12 from '../assets/gallery/digital/On the pier to La Concha beach in San Sebastian.JPEG'
import digital13 from '../assets/gallery/digital/Overlooking the Basque Coast Geopark.JPEG'
import digital14 from '../assets/gallery/digital/Ponta da Piedade in Lagos, Portugal.JPEG'
import digital15 from '../assets/gallery/digital/Sunset in Lisbon.JPEG'
import digital16 from '../assets/gallery/digital/Tiled fountain in the garden of Monserrate Palace.JPEG'
import digital17 from '../assets/gallery/digital/Two birds.JPEG'

export const gallerySections = [
  {
    title: 'Digital (Fujifilm XT1)',
    images: [
      { src: digital01, name: 'A forest overlook', alt: 'A forest overlook', caption: '' },
      { src: digital02, name: 'A vineyard beyond Zumaia', alt: 'A vineyard beyond Zumaia', caption: '' },
      { src: digital03, name: 'Church ruin in the garden of Monserrate Palace', alt: 'Church ruin in the garden of Monserrate Palace', caption: '' },
      { src: digital04, name: 'Donkeys on the Camino', alt: 'Donkeys on the Camino', caption: '' },
      { src: digital05, name: 'Dusk after eating at Sabor de Nepal', alt: 'Dusk after eating at Sabor de Nepal', caption: '' },
      { src: digital06, name: 'In Black Water Falls State Park', alt: 'In Black Water Falls State Park', caption: '' },
      { src: digital07, name: 'In the church ruins', alt: 'In the church ruins', caption: '' },
      { src: digital08, name: 'Kite flying at sunset at Assateague Island', alt: 'Kite flying at sunset at Assateague Island', caption: '' },
      { src: digital09, name: 'Looking over Zarautz at dusk', alt: 'Looking over Zarautz at dusk', caption: '' },
      { src: digital10, name: 'Off the Red Creek in Dolly Sods', alt: 'Off the Red Creek in Dolly Sods', caption: '' },
      { src: digital11, name: 'On the camino to Izar Bide', alt: 'On the camino to Izar Bide', caption: '' },
      { src: digital12, name: 'On the pier to La Concha beach in San Sebastian', alt: 'On the pier to La Concha beach in San Sebastian', caption: '' },
      { src: digital13, name: 'Overlooking the Basque Coast Geopark', alt: 'Overlooking the Basque Coast Geopark', caption: '' },
      { src: digital14, name: 'Ponta da Piedade in Lagos, Portugal', alt: 'Ponta da Piedade in Lagos, Portugal', caption: '' },
      { src: digital15, name: 'Sunset in Lisbon', alt: 'Sunset in Lisbon', caption: '' },
      { src: digital16, name: 'Tiled fountain in the garden of Monserrate Palace', alt: 'Tiled fountain in the garden of Monserrate Palace', caption: '' },
      { src: digital17, name: 'Two birds', alt: 'Two birds', caption: '' },
    ],
  },
  {
    title: 'Film (35mm, Canon AE-1)',
    images: [
      { src: film01, name: 'Bonnie', alt: 'Bonnie', caption: '' },
      { src: film02, name: 'Clouds Rest in Yosemite', alt: 'Clouds Rest in Yosemite', caption: '' },
      { src: film03, name: 'Hoh rainforest', alt: 'Hoh rainforest', caption: '' },
      { src: film04, name: 'Hueco Tanks, Texas', alt: 'Hueco Tanks, Texas', caption: '' },
      { src: film05, name: 'In Shenandoah', alt: 'In Shenandoah', caption: '' },
      { src: film06, name: 'Ithaca, NY', alt: 'Ithaca, NY', caption: '' },
      { src: film07, name: 'National Botanical Gardens', alt: 'National Botanical Gardens', caption: '' },
      { src: film08, name: 'On the beach at Olympic NP', alt: 'On the beach at Olympic NP', caption: '' },
      { src: film09, name: 'Sunrise from Cadillac Mountain', alt: 'Sunrise from Cadillac Mountain', caption: '' },
      { src: film10, name: 'Sunset from Clouds Rest in Yosemite', alt: 'Sunset from Clouds Rest in Yosemite', caption: '' },
      { src: film11, name: 'Sunset from Smith Island, MD', alt: 'Sunset from Smith Island, MD', caption: '' },
      { src: film12, name: 'Sunset in Acadia NP', alt: 'Sunset in Acadia NP', caption: '' },
      { src: film13, name: 'View of half dome', alt: 'View of half dome', caption: '' },
      { src: film14, name: 'Walking the canal in Georgetown', alt: 'Walking the canal in Georgetown', caption: '' },
      { src: film15, name: 'White Sands, New Mexico', alt: 'White Sands, New Mexico', caption: '' },
    ],
  },
]

/** Flat list of all gallery images (for projects that only support a single gallery). */
export function getGalleryFlat() {
  return gallerySections.flatMap((section) =>
    section.images.map((img) => ({ ...img, category: section.title }))
  )
}

export const galleryPhotos = getGalleryFlat()
