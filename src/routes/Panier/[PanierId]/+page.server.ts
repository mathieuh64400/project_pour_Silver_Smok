import type { PageServerLoad } from "./$types";
/*
export const load :PageServerLoad =async (event:any) => {
     console.log(event);
     const {panierId}= event.params;
     console.log(panierId)};*/
     export const load: PageServerLoad=async(event:any)=>{
        console.log(event);
        const {panierId}= event.params;
     }