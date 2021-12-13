import * as ET from './element-type.js';
import { create } from './section-input.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector<ET.Container>(
    '.cmp-main-container'
  );

  if (mainContainer) {
    create(mainContainer);
  }
});
