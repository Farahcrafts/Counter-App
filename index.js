const decreasebtn = document.getElementById("Decreasebtn");
const increasebtn = document.getElementById("Increasebtn");
const resetbtn = document.getElementById("Resetbtn");
const countlabel = document.getElementById("CountLabel");
count = 0;

increasebtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
decreasebtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};
resetbtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
