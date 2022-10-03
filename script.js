

 setInterval(() => {  
  d = new Date();
  hl = d.getHours();
  ml = d.getMinutes();
  sl = d.getSeconds();
  hr = 30*hl + ml/2;
  mr = 6*ml;
  sr = 6*sl;

  HrLine.style.transform = `rotateZ(${hr}deg)`;
  MntLine.style.transform = `rotateZ(${mr}deg)`;
  SecLine.style.transform = `rotateZ(${sr}deg)`;
 },1000);