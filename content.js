function checkText() {
  const container = document.querySelector('.container-fluid');

  if (container) {
    const secondLevelElements = container.querySelectorAll('[class*="sc-"]');
    
    secondLevelElements.forEach((secondLevelElement) => {
      const targetElement = secondLevelElement.querySelector('[class*="sc-"]');

      if (targetElement) {
        const text = targetElement.innerText || '';

        if (text.includes('Jamaica')) {
          targetElement.style.backgroundColor = 'red';
          console.log('Znaleziono tekst zawierający "Schenectady"!');
        } else {
          targetElement.style.backgroundColor = ''; // Reset
        }
      }
    });
  }
}

const observer = new MutationObserver(() => {
  checkText();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});