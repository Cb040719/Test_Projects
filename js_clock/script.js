const getTimeHours = () => {
  document.body.innerHTML = `
<h1>${
    new Date().getHours() +
    " : " +
    new Date().getMinutes() +
    " : " +
    new Date().getSeconds()
  }</h1>`;
};

setInterval(getTimeHours, 1000);
