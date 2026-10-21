/* eslint-disable no-unused-vars */

import { createPhotos } from './photo-generator.js';
import { renderThumbnails } from './thumbnails.js';

const photos = createPhotos();

renderThumbnails(photos);

window.photos = photos;
