const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;
function init(e) {
  const key = e.key;
  if(key === codes[index]){
    index++;
    if(key === codes.length){
      alert('HURRAY');
      index = 0;

    }
  } else{
    index = 0;
  }
}
