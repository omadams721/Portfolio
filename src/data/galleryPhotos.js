/**
 * Gallery photos: set name (or caption/alt) for the label, and shotDate (YYYY-MM-DD) for sorting.
 * Photos are sorted by shotDate (newest first). Label shown = name || caption || alt || date.
 */

import img00 from '../assets/gallery/A forest overlook.JPEG'
import img01 from '../assets/gallery/A vineyard beyond Zumaia.JPEG'
import img02 from '../assets/gallery/Church ruin in the garden of Monserrate Palace .JPEG'
import img03 from '../assets/gallery/Donkeys on the Camino.JPEG'
import img04 from '../assets/gallery/In Black Water Falls State Park.JPEG'
import img05 from '../assets/gallery/Kite flying at sunset at Assateague Island.JPEG'
import img06 from '../assets/gallery/Looking over Zarautz at dusk.JPEG'
import img07 from '../assets/gallery/Off the Red Creek in Dolly Sods.JPEG'
import img08 from '../assets/gallery/On the camino to Izar Bide.JPEG'
import img09 from '../assets/gallery/On the pier to La Concha beach in San Sebastian.JPEG'
import img10 from '../assets/gallery/Overlooking the Basque Coast Geopark.JPEG'
import img11 from '../assets/gallery/Ponta da Piedade in Lagos, Portugal.JPEG'
import img12 from '../assets/gallery/Tiled fountain in the garden of Monserrate Palace.JPEG'

export const galleryPhotos = [
  { src: img00, shotDate: '2024-06-15', name: 'A forest overlook', alt: 'A forest overlook', caption: '' },
  { src: img01, shotDate: '2024-06-01', name: 'A vineyard beyond Zumaia', alt: 'A vineyard beyond Zumaia', caption: '' },
  { src: img02, shotDate: '2024-05-25', name: 'Church ruin in the garden of Monserrate Palace', alt: 'Church ruin in the garden of Monserrate Palace', caption: '' },
  { src: img03, shotDate: '2024-04-15', name: 'Donkeys on the Camino', alt: 'Donkeys on the Camino', caption: '' },
  { src: img04, shotDate: '2023-06-01', name: 'In Black Water Falls State Park', alt: 'In Black Water Falls State Park', caption: '' },
  { src: img05, shotDate: '2023-08-10', name: 'Kite flying at sunset at Assateague Island', alt: 'Kite flying at sunset at Assateague Island', caption: '' },
  { src: img06, shotDate: '2024-05-01', name: 'Looking over Zarautz at dusk', alt: 'Looking over Zarautz at dusk', caption: '' },
  { src: img07, shotDate: '2023-08-15', name: 'Off the Red Creek in Dolly Sods', alt: 'Off the Red Creek in Dolly Sods', caption: '' },
  { src: img08, shotDate: '2024-04-01', name: 'On the camino to Izar Bide', alt: 'On the camino to Izar Bide', caption: '' },
  { src: img09, shotDate: '2024-05-15', name: 'On the pier to La Concha beach in San Sebastian', alt: 'On the pier to La Concha beach in San Sebastian', caption: '' },
  { src: img10, shotDate: '2024-05-20', name: 'Overlooking the Basque Coast Geopark', alt: 'Overlooking the Basque Coast Geopark', caption: '' },
  { src: img11, shotDate: '2024-03-01', name: 'Ponta da Piedade in Lagos, Portugal', alt: 'Ponta da Piedade in Lagos, Portugal', caption: '' },
  { src: img12, shotDate: '2024-05-22', name: 'Tiled fountain in the garden of Monserrate Palace', alt: 'Tiled fountain in the garden of Monserrate Palace', caption: '' },
]

/** Returns gallery photos sorted by shot date (newest first). */
export function getGallerySortedByDate() {
  return [...galleryPhotos].sort((a, b) => (b.shotDate > a.shotDate ? 1 : -1))
}

/** Format shot date for display (e.g. "June 14, 2024"). */
export function formatShotDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate + 'T12:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
