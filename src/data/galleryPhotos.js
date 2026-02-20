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
import digital18 from '../assets/gallery/digital/A pasture in Mutriku.JPEG'
import digital19 from '../assets/gallery/digital/A sneakpeak of the flysch at high tide.JPEG'
import digital20 from '../assets/gallery/digital/Descending the mountain.JPEG'
import digital21 from '../assets/gallery/digital/Going up to the sheep pasture.JPEG'
import digital22 from '../assets/gallery/digital/Moments before family dinner with other pilgrims.JPEG'
import digital23 from '../assets/gallery/digital/On the way to Deba.JPEG'
import digital24 from '../assets/gallery/digital/Panorama on the Camino.JPEG'
import digital25 from '../assets/gallery/digital/Pitstop at a vineyard.JPEG'
import digital26 from '../assets/gallery/digital/Scaling the cliff for a better view of the beach.JPEG'
import digital27 from '../assets/gallery/digital/Some cow friends.JPEG'
import digital28 from '../assets/gallery/digital/The flysch.JPEG'
import digital29 from '../assets/gallery/digital/The fog beyond the trees.JPEG'
import digital30 from '../assets/gallery/digital/Through the tunnels between beaches.JPEG'
import digital31 from '../assets/gallery/digital/After a dip in the river.JPEG'
import digital32 from '../assets/gallery/digital/Backpacking through Madrid.JPEG'
import digital33 from '../assets/gallery/digital/Cherry blossoms.JPEG'
import digital34 from '../assets/gallery/digital/Kenilworth Aquatic Gardens.JPEG'
import digital35 from '../assets/gallery/digital/Lazy Sunday.JPEG'
import digital36 from '../assets/gallery/digital/Letchworth State Park.JPEG'
import digital37 from '../assets/gallery/digital/Looking at the lotus.JPEG'
import digital38 from '../assets/gallery/digital/On a dock in Pasaia.JPEG'
import digital39 from '../assets/gallery/digital/On Red Creek.JPEG'
import digital40 from '../assets/gallery/digital/Outer Banks.JPEG'
import digital41 from '../assets/gallery/digital/Sunset at Dolly Sods.JPEG'
import digital42 from '../assets/gallery/digital/Swimming in San Sebastian.JPEG'

export const gallerySections = [
  {
    title: 'Digital (Fujifilm XT1)',
    images: [
      { src: digital16, name: 'Tiled fountain in the garden of Monserrate Palace', alt: 'Tiled fountain in the garden of Monserrate Palace', caption: '' },
      { src: digital01, name: 'A forest overlook', alt: 'A forest overlook', caption: '' },
      { src: digital03, name: 'Church ruin in the garden of Monserrate Palace', alt: 'Church ruin in the garden of Monserrate Palace', caption: '' },
      { src: digital14, name: 'Ponta da Piedade in Lagos, Portugal', alt: 'Ponta da Piedade in Lagos, Portugal', caption: '' },
      { src: digital15, name: 'Sunset in Lisbon', alt: 'Sunset in Lisbon', caption: '' },
      { src: digital05, name: 'Dusk after eating at Sabor do Nepal', alt: 'Dusk after eating at Sabor do Nepal', caption: '' },
      { src: digital02, name: 'A vineyard beyond Zumaia', alt: 'A vineyard beyond Zumaia', caption: '' },
      
      { src: digital09, name: 'Looking over Zarautz at dusk', alt: 'Looking over Zarautz at dusk', caption: '' },
      { src: digital04, name: 'Donkeys on the Camino', alt: 'Donkeys on the Camino', caption: '' },
      { src: digital30, name: 'Through the tunnels between beaches', alt: 'Through the tunnels between beaches', caption: '' },
      { src: digital07, name: 'In the church ruins', alt: 'In the church ruins', caption: '' },
      { src: digital13, name: 'Overlooking the Basque Coast Geopark', alt: 'Overlooking the Basque Coast Geopark', caption: '' },
      { src: digital18, name: 'A pasture in Mutriku', alt: 'A pasture in Mutriku', caption: '' },
      { src: digital20, name: 'Descending the mountain', alt: 'Descending the mountain', caption: '' },
      { src: digital29, name: 'The fog beyond the trees', alt: 'The fog beyond the trees', caption: '' },
      { src: digital27, name: 'Some cow friends', alt: 'Some cow friends', caption: '' },
      
      { src: digital19, name: 'A sneakpeak of the flysch at high tide', alt: 'A sneakpeak of the flysch at high tide', caption: '' },
      { src: digital23, name: 'On the way to Deba', alt: 'On the way to Deba', caption: '' },
      
      
      { src: digital26, name: 'Scaling the cliff for a better view of the beach', alt: 'Scaling the cliff for a better view of the beach', caption: '' },
      { src: digital22, name: 'Moments before family dinner with other pilgrims', alt: 'Moments before family dinner with other pilgrims', caption: '' },
      { src: digital28, name: 'The flysch', alt: 'The flysch', caption: '' },
      { src: digital39, name: 'On Red Creek', alt: 'On Red Creek', caption: '' },
      { src: digital40, name: 'Outer Banks', alt: 'Outer Banks', caption: '' },
      { src: digital41, name: 'Sunset at Dolly Sods', alt: 'Sunset at Dolly Sods', caption: '' },
      { src: digital42, name: 'Swimming in San Sebastian', alt: 'Swimming in San Sebastian', caption: '' },
            
      { src: digital06, name: 'In Black Water Falls State Park', alt: 'In Black Water Falls State Park', caption: '' },
      { src: digital10, name: 'Off the Red Creek in Dolly Sods', alt: 'Off the Red Creek in Dolly Sods', caption: '' },
      { src: digital08, name: 'Kite flying at sunset at Assateague Island', alt: 'Kite flying at sunset at Assateague Island', caption: '' },
      { src: digital31, name: 'After a dip in the river', alt: 'After a dip in the river', caption: '' },
      { src: digital32, name: 'Backpacking through Madrid', alt: 'Backpacking through Madrid', caption: '' },
      { src: digital33, name: 'Cherry blossoms', alt: 'Cherry blossoms', caption: '' },
      { src: digital34, name: 'Kenilworth Aquatic Gardens', alt: 'Kenilworth Aquatic Gardens', caption: '' },
      { src: digital35, name: 'Lazy Sunday', alt: 'Lazy Sunday', caption: '' },
      { src: digital36, name: 'Letchworth State Park', alt: 'Letchworth State Park', caption: '' },
      { src: digital37, name: 'Looking at the lotus', alt: 'Looking at the lotus', caption: '' },
      { src: digital38, name: 'On a dock in Pasaia', alt: 'On a dock in Pasaia', caption: '' },
      
     
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
