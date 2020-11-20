const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  showArt(id);



async function showArt(id){
  try {
   const cont_api_url = 
  "http://localhost/api/article/readone.php?art_id="+id;
  const cover_api_url = 
  "http://localhost/api/article/readinfo.php?art_id="+id;
  
  

   const response4 = await  fetch(cont_api_url);
   const response5 = await  fetch(cover_api_url);
    
  
  // Storing data in form of JSON 
  var data = await response4.json();
  var data2 = await response5.json();

   
 
  let chp = `
  <div class="singel">
  <img src="${data2.art_thumb}" class="mgcover"> 
<div class="blur">
<h3 class="title">${data2.art_title}</h3>

</div>  
</div>
  <img class="backbtn" src="/rback.png" onclick="history.back()">  
  `;
  for (let r of data.cont) { 
 
    if (r.arcon_type=="pic"){
     chp += `<img src="${r.arcon_body}" class="cont">`; 
 }
 if (r.arcon_type=="text") {
  chp += `<pre class="nvpara">${html_entity_decode(r.arcon_body)}</pre>`;  
 } if (r.arcon_type=="title") {
  chp += `<div class="nvtt"><h1 class="nvtitle">${r.arcon_body}</h1></div>`; 
 }

  }   


  document.getElementById("article").innerHTML = chp; 
  } 
  catch(err){
pop("Content ရှာမတွေ့ပါ")
  }
}
