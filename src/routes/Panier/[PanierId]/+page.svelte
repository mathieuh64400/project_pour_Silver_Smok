<script lang="ts">

    import SousTitre from "$lib/components/SousTitre.svelte";
import Titre from "$lib/components/Titre.svelte";
import { authStore } from "../../../stores/authStore";

let todoLists;

let url = ``;
console.log( "the url from"+ window.location.href);
let res=window.location.href.replace('http://localhost:5173/Panier/','')
console.log( typeof res);
let newres= parseInt(res);
console.log(newres, typeof newres);



    

let nbre:any=0;
let travel;
let prix
let titre:any;
authStore.subscribe((curr) => {
    todoLists = curr.data.todos;
        length= curr.data.todos.length;
       

        
   travel= todoLists.filter((todo:any)=> todo.id===newres); 
 titre =travel[0].titre;
 prix =travel[0].prix;



})


 




</script>

<Titre titredePartie="Selection de votre projet de Voyage"/>
<hr>
<br>
<Titre titredePartie="{titre}"/>

<label for="nbrePersonne">nombre de personne participantes:</label>
<input type="number" id="prix" name="prix" placeholder="nombre de participant"  bind:value={nbre}>



<p>soit un total de  {nbre * prix } euros</p> 





