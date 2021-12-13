import * as ET from './element-type.js';
import { create as createInputSum } from './input-sum.js';

function generateContainer(parentContainer: ET.Container) {
  const sectionContainers = parentContainer.querySelectorAll<ET.Container>(
    '.cmp-sections-container .cmp-section-container'
  );
  sectionContainers.forEach((sectionContainer, i) => {
    const sectionNo =
      sectionContainer.querySelector<ET.Number>('.cmp-section-no');
    if (sectionNo) {
      sectionNo.textContent = (i + 1).toString();
    }

    const deleteCmd = sectionContainer.querySelector<ET.Command>(
      '.cmd-delete-section'
    );
    if (deleteCmd) {
      deleteCmd.disabled = false;
    }
  });

  if (sectionContainers.length === 1) {
    const deleteCmd = parentContainer.querySelector<ET.Command>(
      '.cmp-sections-container .cmd-delete-section'
    );
    if (deleteCmd) {
      deleteCmd.disabled = true;
    }
  }
}

function add(parentContainer: ET.Container) {
  const tmpSection = document.querySelector<ET.Template>(
    'template#tmp-section'
  );

  if (tmpSection) {
    const fragment = tmpSection.content.cloneNode(true) as ET.TemplateContent;

    const container = fragment.querySelector<ET.Container>(
      '.cmp-section-container'
    );
    if (container) {
      createInputSum(container);

      const sectionsContainer = parentContainer.querySelector<ET.Container>(
        '.cmp-sections-container'
      );
      if (sectionsContainer) {
        sectionsContainer.append(fragment);
      }
    }

    generateContainer(parentContainer);
  }
}

function remove(container: ET.Container, parentContainer: ET.Container) {
  container.remove();

  generateContainer(parentContainer);
}

export function create(parentContainer: ET.Container) {
  parentContainer.addEventListener('click', (ev) => {
    const elem = ev.target as ET.Command;

    if (elem.matches('.cmd-add-section')) {
      add(parentContainer);
    } else if (elem.matches('.cmd-delete-section')) {
      const container = elem.closest<ET.Container>('.cmp-section-container');
      if (container) {
        remove(container, parentContainer);
      }
    }
  });

  add(parentContainer);
}
