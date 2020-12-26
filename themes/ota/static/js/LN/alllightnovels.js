const api_url   = "http://creatordesk.otamyanmar.com/lightnovel/read.php"; 
const search      = "http://creatordesk.otamyanmar.com/lightnovel/search.php";


const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('search');
  if (key !== null) {getapi3(search+'?s='+key); document.getElementById("labl").innerHTML=key}else{getapi3(api_url);}
  






async function getapi3(url) { 
   try {
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  show4(data); 
  } 
  catch(err){
pop("Lightnovel ရှာမတွေ့ပါ")
  }
} 
// Calling that async function 
getapi3(nv_api_url); 

// Function to hide the loader 
function hideloader() { 
  document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show4(data) { 
  let lightnovel=``;
  
  
  // Loop to access all rows 
  for (let r of data.records) { 
    lightnovel += `

    <div class="mg" onclick="location.href='/lightnovel/?lnv_id=${r.lightnovel_id}'">
      <img class="mgthumb" src="${r.lightnovel_cover}" >
      <h3>${r.lightnovel_title}</h3>
      

    </div>

`; 

  } 

   document.getElementById("lightnovel").innerHTML = lightnovel; 

}  