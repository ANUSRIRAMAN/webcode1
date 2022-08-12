var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","CityorName")
input.setAttribute("placeholder","ex:india or anyothercountryname")
var button=document.createElement("button")
button.innerHTML="cheers!!";
button.addEventListener("click",foo);

div.append(input,button)
document.body.append(div)

var brewery_details = document.createElement("section");
brewery_details.setAttribute("class" , "brewery_details");
async function foo(){
    try{
let res = document.getElementById("CityorName").value;

let url=`https://api.openbrewerydb.org/breweries/search?query={${res}}`
let result=await fetch(url);
let result1=await result.json();
console.log(result1)
for(i=0;i<result1.length;i++){

console.log(`${result1[i].name}`);
console.log(`${result1[i].brewery_type}`);
console.log(`${result1[i].address_2}`);
console.log(`${result1[i].website_url}">${result1[i].website_url}`);
console.log(`${result1[i].phone}`);
var shop = document.createElement("div");
shop.setAttribute("class" ,"shop")
shop.innerHTML=` <div class="col">
<div class ="box">
<div class="name"><b>Name          :</b>${result1[i].name}</div><br>
<div class="type"><b>Type          :</b>${result1[i].brewery_type}</div><br>
<div class="address"><b>Address    :</b>${result1[i].address_2}</div><br>
<div class="website"><b>website    :</b><a href="${result1[i].website_url}">${result1[i].website_url}<a></div><br>
<div class="phone"><b>Phone No     :</b>${result1[i].phone}</div><br>
</div>
</div>
`;
brewery_details.append(shop);
}
document.body.append(brewery_details);
    }
catch(error){
    console.log("Enter valid country")
}
}
foo()