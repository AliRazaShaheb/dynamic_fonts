const fsize = (str)=>{
  let fs = ''
  if(str.includes("rem")){
    fs = str.split("rem")[0] * 16
  }
  return `clamp(calc(${str} - 50%), 2vh, ${str})`
}

fsize("5rem")