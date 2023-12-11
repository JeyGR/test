const btn = document.querySelector(".btn");
const check = /\d/;
const alpha = /^[a-zA-Z]+$/;
btn.addEventListener("click", function () {
  const nameit = document.querySelector(".in1").value;
  const sal = document.querySelector(".salin").value;
  const ed = document.querySelector(".eid").value;
  const des = document.querySelector(".desig").value;
  if (check.test(nameit)) {
    document.querySelector(".at1").innerHTML = "Name can't contain Number";
  } else {
    document.querySelector(".at1").innerHTML = "";
  }
  if (alpha.test(sal)) {
    document.querySelector(".at2").innerHTML = "Salary can't contain Alphabet";
  } else {
    document.querySelector(".at2").innerHTML = "";
  }
  if (check.test(des)) {
    document.querySelector(".at4").innerHTML =
      "Designation can't contain Number";
  } else {
    document.querySelector(".at4").innerHTML = "";
  }
});
