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
 
   
  chp += `<pre class="nvpara">${r.nvcon_body}</pre>`; 
 

  }   


  document.getElementById("lightnovelchpt").innerHTML = chp; 
}
catch(err) {
  console.log(err);
 pop("content တွေမထည့်ရသေးပါ")
}
   
}