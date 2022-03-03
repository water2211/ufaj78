
function setData() {
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("lineid", document.getElementById("lineid").value);
}
function setData2() {
  localStorage.setItem("phone", document.getElementById("phone2").value);
  localStorage.setItem("name", document.getElementById("name2").value);
  localStorage.setItem("lineid", document.getElementById("lineid2").value);
}

function setHTML() {
  document.getElementById("phone").innerHTML = localStorage.getItem("phone");

  document.getElementById("name").innerHTML = localStorage.getItem("name");

  document.getElementById("lineid").innerHTML = localStorage.getItem("lineid");
}
