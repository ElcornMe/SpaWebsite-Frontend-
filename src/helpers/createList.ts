function ArrayToList(arr: [any]) {
   arr.reverse()
   let listHTML = "<ul>";
   for(let i = 0; i < arr.length; i++) {
      listHTML += "<span>" + arr[i].name + "</span>" + "<li>" + arr[i].comment + "</li>";
   }
   listHTML += "</ul>";
   return listHTML;
} 

export default ArrayToList;