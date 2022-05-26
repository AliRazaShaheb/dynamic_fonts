const text = document.getElementById("text");

const fsize = (str) => {
  let fs = "";
  if (str.includes("rem")) {
    fs = str.split("rem")[0] * 16;
  }
  return `clamp(calc(${str} - 50%), 2vh, ${str})`;
};

fsize("5rem");

export const dynaFontSize = (size, varyVal = "100%") => {
  const minSize = `${size} - ${varyVal}`;
  const minWidth = `100vw - ${varyVal}`;
  console.log(minSize);
  console.log(minWidth);

  // return `clamp(calc(${size}/2), calc((${size}/2)/16 + 100vw), ${size})`
  // calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
  // return `calc(${minSize} + (${size} - ${minSize}) * ((100vw - ${minWidth}) / (100vw - ${minWidth}))`;
  return `clamp(calc(${size}/2), 1vw, ${size})`;
};

text.style.fontSize = `clamp(1rem,5vw,3rem )`;
