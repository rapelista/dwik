function getInputan() {
    let nama = document.getElementById("nama").value;
    let role = document.getElementById("role").value;
    let avail = document.getElementById("avail").value;
    let usia = document.getElementById("usia").value;
    let lokasi = document.getElementById("lokasi").value;
    let pengalaman = document.getElementById("pengalaman").value;
    let email = document.getElementById("email").value;
    return [nama, role, avail, usia, lokasi, pengalaman, email]
 }

 function renderToTable(data) {
    document.getElementById("nama_").innerHTML = data[0];
    document.getElementById("role_").innerHTML = data[1];
    document.getElementById("avail_").innerHTML = data[2];
    document.getElementById("usia_").innerHTML = data[3];
    document.getElementById("lokasi_").innerHTML = data[4];
    document.getElementById("pengalaman_").innerHTML = data[5];
    document.getElementById("email_").innerHTML = data[6];
 }

 function clearData() {
    document.getElementById("nama").value = "";
    document.getElementById("role").value = "";
    document.getElementById("avail").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("lokasi").value = "";
    document.getElementById("pengalaman").value = "";
    document.getElementById("email").value = "";
 }

function showHideForm() {
    const form = document.getElementById("form")
    form.classList.toggle("hide")
}

const btn = document.getElementById("submit")
btn.addEventListener("click", e=> {
    e.preventDefault()
    const inputan = getInputan()
    renderToTable(inputan)
    clearData()
})