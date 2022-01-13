// Main div
var mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-div");
document.body.append(mainDiv);
// image
var image = document.createElement("img");
image.setAttribute("src", "india-flag.png");
image.setAttribute("alt", "India Flag");
mainDiv.appendChild(image);

//country name
var countryName = document.createElement("p");
countryName.setAttribute("class", "namev");
countryName.innerText = "INDIA"
mainDiv.appendChild(countryName)

// additonal details
var details = {
    Population: "1,400,000,000",
    Region: "Delhi",
    Capital: "New Delhi"
};
// aditional div
var anotherdiv = document.createElement("div");
anotherdiv.setAttribute("class", "anotherdiv");
mainDiv.appendChild(anotherdiv);

// itearation
for (const [key, value] of Object.entries(details)) {
    // console.log(`${key} ${value}`);
    var det = document.createElement("p");
    det.innerHTML = `<Strong>${key}</strong> :   ${value}`;
    det.setAttribute("class", "details");
    anotherdiv.appendChild(det);
}