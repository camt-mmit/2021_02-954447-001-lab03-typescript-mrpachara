document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll<HTMLInputElement>(
    '.cmp-inputs-container input[type="number"]'
  );
  inputs.forEach((elem) => {
    elem.addEventListener('change', () => {
      let total = 0;
      inputs.forEach((elem) => (total += elem.valueAsNumber));
      const outputElem =
        document.querySelector<HTMLOutputElement>('output.cmp-result');
      if (outputElem) {
        outputElem.value = total.toString();
      }
    });
  });
});
