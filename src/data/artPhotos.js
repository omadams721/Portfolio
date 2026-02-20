/**
 * Art project photos: gouache, oil pastels, and watercolor.
 * Edit name/caption for labels. No shotDate = no date sorting (order is by array).
 */

import gouache1 from '../assets/art/gouache/bird_with_fruit.jpg'
import gouache2 from '../assets/art/gouache/donkeys on the camino.jpg'
import gouache3 from '../assets/art/gouache/on the camino to deba.jpg'
import gouache4 from '../assets/art/gouache/pine forest off of redcreek.jpg'
import oil1 from '../assets/art/oil pastels/a bluejay.jpg'
import oil2 from '../assets/art/oil pastels/church ruin in monserrate palace.jpg'
import oil3 from '../assets/art/oil pastels/descent from halfdome.jpg'
import oil4 from '../assets/art/oil pastels/on the camino to getaria.jpg'
import oil5 from '../assets/art/oil pastels/tuolumne meadows.jpg'
import watercolor1 from '../assets/art/watercolor/on the bank of redcreek.jpg'
import watercolor2 from '../assets/art/watercolor/preparing for the lunar newyear.jpg'
import watercolor3 from '../assets/art/watercolor/the view from my apartment.jpg'
import watercolor4 from '../assets/art/watercolor/The walk home after work at the Ahwahnee.jpg'

export const artGallerySections = [
  {
    title: 'Oil pastels',
    images: [
      { src: oil3, name: 'Descent from Half Dome', alt: 'Descent from Half Dome', caption: '' },
      { src: oil4, name: 'On the camino to Getaria', alt: 'On the camino to Getaria', caption: '' },
      { src: oil5, name: 'Tuolumne Meadows', alt: 'Tuolumne Meadows', caption: '' },
      { src: oil1, name: 'A bluejay', alt: 'A bluejay', caption: '' },
      { src: oil2, name: 'Church ruin in Monserrate Palace', alt: 'Church ruin in Monserrate Palace', caption: '' },
    ],
  },
  {
    title: 'Watercolor',
    images: [
      { src: watercolor1, name: 'On the bank of Red Creek', alt: 'On the bank of Red Creek', caption: '' },
      { src: watercolor4, name: 'The walk home after work at the Ahwahnee', alt: 'The walk home after work at the Ahwahnee', caption: '' },
      { src: watercolor2, name: 'Preparing for the Lunar New Year', alt: 'Preparing for the Lunar New Year', caption: '' },
      { src: watercolor3, name: 'The view from my apartment', alt: 'The view from my apartment', caption: '' },
      
    ],
  },
  {
    title: 'Gouache',
    images: [
      { src: gouache2, name: 'Donkeys on the Camino', alt: 'Donkeys on the Camino', caption: '' },
      { src: gouache3, name: 'On the camino to Deba', alt: 'On the camino to Deba', caption: '' },
      { src: gouache4, name: 'Pine forest off of Red Creek', alt: 'Pine forest off of Red Creek', caption: '' },
    ],
  },
]

/** Flat list of all art images (for projects that only support a single gallery). */
export function getArtGalleryFlat() {
  return artGallerySections.flatMap((section) =>
    section.images.map((img) => ({ ...img, category: section.title }))
  )
}
