const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get('chpt_id');
  shownvChpt(id);



async function shownvChpt(id){
  try {
   const cont_api_url = 
  "https://creatordesk.otamyanmar.com/lightnovel/readnvcontent.php?chpt_id="+id;
  
  

   const response4 = await  fetch(cont_api_url);
    
  
  // Storing data in form of JSON 
  var data = await response4.json();

   
 
  let chp = `
  <img class="backbtn" src="/rback.png" onclick="history.back()">  
  `;
  for (let r of data.cont) { 
 
    if (r.nvcon_type=="pic"){
     chp += `<img src="${r.nvcon_body}" class="cont">`; 
 }
 if (r.nvcon_type=="text") {
  chp += `<pre class="nvpara">${html_entity_decode(r.nvcon_body)}</pre>`; 
 } if (r.nvcon_type=="title") {
  chp += `<div class="nvtt"><h1 class="nvtitle">${r.nvcon_body}</h1></div>`; 
 }

  }   


  document.getElementById("lightnovelchpt").innerHTML = chp; 
}
catch(err) {
  console.log(err);
 pop("content တွေမထည့်ရသေးပါ")
}
   
}