const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('chpt_id');
  showChpt(id);
  showNext(id);





async function showChpt(id){
  try {
   const cont_api_url = 
  "https://creatordesk.otamyanmar.com/manga/read_mgcontent.php?chpt_id="+id;
  


   const response4 = await  fetch(cont_api_url);
    
  
  // Storing data in form of JSON 
  var data = await response4.json();

   
  if (response4) { 
   
  } 
  let chp = `
   
  `;
  for (let r of data.cont) { 
    chp += `

   
      <img src="${r.url}" class="cont">
         

`; 

  }   
   
   
  document.getElementById("mgchpt").innerHTML = chp; 
}
catch(err) {
 pop("Manga ရဲ့ content တွေမထည့်ရသေးပါ")
}
   
}
async function showNext(id){
  try {
   const Next_url = 
  "https://creatordesk.otamyanmar.com/manga/getnext.php?ch_id="+id;
  


   const responsen = await  fetch(Next_url);
    
  
  // Storing data in form of JSON 
  var datan = await responsen.json();

   
  if (responsen) { 
  
  } 
  let next = `
<img class="backbtn" src="/back.png" onclick="location.href='/manga/?manga_id=${datan.manga_id}'">
  `;
  if (datan.chpt_id !=undefined ) {
  next += `

 <h1>Next Chapter</h1>  
  <div class="chp" onclick="location.href='/mangachpt/?chpt_id=${datan.chpt_id}'">
      <img src="${datan.chpt_thumb}" class="thumb">
      <h3 class="chpsum">${datan.chpt_sum}</h3>
    </div>
    <hr>
  `;
 

  }
document.getElementById("next").innerHTML = next; 
}
catch(err) {
console.log(err);
}
   
}