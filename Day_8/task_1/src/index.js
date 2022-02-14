import "./styles.css";

let num = Math.floor(10 * Math.random());
let no = new Promise(function (resolve, reject) {
  if (num > 7) {
    resolve("No is accepted");
  } else {
    reject("No is rejected");
  }
});
no.then(function promSuccess(noAcceptance) {
  console.log(noAcceptance);
})
  .catch(function err(noAcceptance) {
    console.log(noAcceptance);
  })
  .finally(() => {
    console.log("Finally method executed");
  });
console.log("The random no is:", num);
console.log("the result no is:", no);
