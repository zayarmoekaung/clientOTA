const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('chpt_id');
  showChpt(id);





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
  <img class="backbtn" src="/rback.png" onclick="history.back()">  
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