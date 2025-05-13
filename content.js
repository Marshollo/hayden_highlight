function checkText() {
  const numbersToFind = [
    '14960',
    '3063',
    '3077',
    '25069',
    '14996',
    '16838',
    '10272'
  ];

  const xpath = '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[2]';
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const element = result.singleNodeValue;

  if (element) {
    const text = element.innerText || '';

    const match = numbersToFind.some(number => text.includes(number));

    if (match) {
      element.style.backgroundColor = 'red';
      console.log('Znaleziono dopasowaną liczbę!');
    } else {
      element.style.backgroundColor = ''; // Reset
    }
  }
}

const observer = new MutationObserver(() => {
  checkText();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
