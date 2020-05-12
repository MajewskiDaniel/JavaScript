pageTimer = () => {
  let counter = 0;
  counterFunction = () => {
    counter++;
    document.body.textContent = `you are ${counter}s on this page`;
  };
  return counterFunction;
};
pageTimer();
window.setInterval(counterFunction, 1000);
