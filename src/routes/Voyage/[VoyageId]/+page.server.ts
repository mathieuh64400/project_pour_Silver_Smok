
import type { PageServerLoad } from "./$types";
/*
export const load :PageServerLoad =async (event:any) => {
     console.log(event);
     const {VoyageId}= event.params;
     console.log(VoyageId);
 const response= await  fetch(`https://jsonplaceholder.typicode.com/posts/${VoyageId}`)
     
     const responseBody= await response.json();
     console.log(responseBody);

     return {
        id: responseBody.id,
        TextTitre : responseBody.title,
         body : responseBody.body
    };
    
  
}*/