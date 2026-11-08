/* eslint-disable no-unused-vars */

import { createPhotos } from './photo-generator.js';
import { renderThumbnails } from './thumbnails.js';
import './upload-form.js';

const photos = createPhotos();

renderThumbnails(photos);

window.photos = photos;
