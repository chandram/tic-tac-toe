let doc = document.getElementById("board");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.style.display = "none";

console.log(doc.children[0].children);
let children = doc.children[0].children;
let arr = [], arridx = [];
for (let i = 0; i < children.length; i++){
  // console.log(children[i].children);
  // if (arr.length == 0 ) arr = children[i].children
  // else {
  //   console.log(arr);
    let children1 = children[i].children;
    // arr = arr.concat(children[i].children);
    for (let k = 0; k < children1.length; k++) {
      let idx = i+"_"+k;
      children1[k].setAttribute("id", idx);
      // console.log("k-> ", k);
      arr.push(children1[k]);
      arridx[idx] = "";
    }

  // }
}

let correctArr = [
  ["0_0","0_1","0_2"],
  ["1_0","1_1","1_2"],
  ["2_0","2_1","2_2"],

  ["0_0","1_0","2_0"],
  ["0_1","1_1","2_1"],
  ["0_2","1_2","2_2"],

  ["0_0","1_1","2_2"],
  ["0_2","1_1","2_0"]
];

console.log(arr);
console.log(arridx);
// let val = ["x","o"];
let cur = "X";

doc.addEventListener("click", eventListener);

// reset array and add eventListener again : start the game
button.addEventListener("click", function () {
  // reset "td" innerText to  ""
  arr.map((v) => { v.innerText = ""});
  // reset "td"->id->map{} to ""
  for (let key in arridx) arridx[key] = "";
  doc.addEventListener("click", eventListener);
  button.style.display = "none";
  result.innerText = "";
});

function eventListener(e) {
  console.log(e.target);
  if(e.target && e.target.nodeName == "TD") {
    if (e.target.innerText == "") {
      e.target.innerText = cur;
      arridx[e.target.id] = cur;
      /* #TODO implement game draw
      if (!isGameOver() && isDraw()) {
        result.innerText = "Game drawn!";
        doc.removeEventListener("click", eventListener);
        button.style.display = "inline-block";
      } */
      isGameOver();
      cur = (cur == "X" ? "O" : "X");
      console.log(arridx);
    }
  }
}

function isDraw() {
  /* #TODO work on game draw
  let isDrawn = false;
  for(let key in arridx) {
    console.log("isDrawn--> ", arridx[key], (arridx[key] !== ""));
    isDrawn = (arridx[key] !== "");
  }
  console.log("is Drawn ", isDrawn);
  return isDrawn; */
}

function isGameOver() {
  for (let i = 0; i < correctArr.length; i++) {
    let a = arridx[correctArr[i][0]];
    let b = arridx[correctArr[i][1]];
    let c = arridx[correctArr[i][2]];
    console.log(a, b, c);
    if (a !== "" && (a == b) && (b == c)) {
      result.innerText = "Game over "+b+ " Won!";
      button.style.display = "inline-block";
      doc.removeEventListener("click", eventListener);
      return true ;
    }
  }

}
