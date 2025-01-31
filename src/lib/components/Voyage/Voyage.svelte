<script lang="ts">
    import { goto } from "$app/navigation";
    import Card from "../Card.svelte";
    import Titre from "../Titre.svelte";
    import {  authStore } from "../../../stores/authStore";
    import { getDoc, doc, setDoc } from "firebase/firestore";




export let status;
export let VoyageTitre;
export let donneFiltre;
console.log('hey data du filte'+donneFiltre);


let todoLists:any[]=[];
let length=0;
let travels:any[]=[];
   


/*
onMount( async ()=>{
  const ref=collection(db, 'tasks');
  const snapshot = await getDocs(ref);
  console.log(snapshot);
  travels=snapshot.docs.map((doc)=>({id: doc.id, ...doc.data}))
  console.log(travels);
})
*/








let newdata=[];
authStore.subscribe((curr) => {
        todoLists = curr.data.todos;

        newdata=todoLists;
        length= curr.data.todos.length;
        console.log(todoLists,length);

        for (let i = 0; i < length; i++) {
         Object.defineProperty(todoLists[i],"id",{value:i+1,writable:true});
          
        }

    travels=todoLists ;
          console.log("eeeee"+todoLists);
          
        
    }
  );



  function removeTodo(index:any) {
    
    console.log(index);
    let i= index-1;
 console.log(i);
 console.log(todoLists.splice(i,1));
 
let newTodoList=todoLists.splice(i,1);
todoLists = newTodoList;
console.log(todoLists);
    
    console.log( 'data'+newTodoList);


   // saveTodos();


    goto('/Home');


    
        /*
     todoList = newTodoList;
        console.log(todoList);
        goto('/Administration');
      */
   
    }

 



type VoyageTableProps={
id:number,
titre: string,
subtitle:string,
actif:Boolean,
Etat:number,
Pays:string,
Pos:number,
prix:number,
description:string,
zoneGeo:string
}


 function add(){
  goto('/Administration/product/new');
 }

    
    

    



</script>


{#if status==='ADMIN'}
<Titre  titredePartie={VoyageTitre}/>
<table>
<thead>
    <tr>
      <th scope="col">titre</th>
      <th scope="col">Actif</th>
      <th scope="col">Etat</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody> 
    {#each travels as travel} 
         {@render VoyageTableProps(travel)}
    {/each}
  </tbody>
</table>
<div class="rep">
<button onclick={()=>add()}>Ajout d'un Voyage</button>
</div>

{:else }
{#each travels as travel, index} 
    {@render VoyageTableProps(travel)}
{/each}
{/if}
{#snippet VoyageTableProps({id,zoneGeo, titre, subtitle, actif, Etat,Pays,Pos,prix,description}: VoyageTableProps) }
{#if status==='ADMIN'}
<tr class="contentTab">
    <td>{titre}</td>
   
    <td>{actif}</td>
    <td>{Etat==2 ?'Terminé':(Etat==1?'En Cours':'En Attente')}</td>
    <td class="rep"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>
        
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" onclick={()=>removeTodo(id)}/></svg> 
       
    </td>
  </tr>
{/if}
{#if status!='ADMIN'}

<Card  cardId={id} zoneGeoImg={zoneGeo} CardContent={titre} cardPays={Pays} cardPos={Pos} cardPrix={prix} cardDes={description}/>

{/if}

{/snippet}
<style>
    table{
       margin-top: 5%;
        padding:5%;
        width: 100%;
    }
  thead{border-bottom: 3px solid white;}
   td{
    text-align: center;
   }
   table tbody{
  overflow-y: auto;
}

    .rep{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    button {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
 
  font-size: 1.0em;
  font-weight: 500;
  width:100%;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 20px;
}

button:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
 button {
    padding: 0 2.6rem;
  }
}



</style>