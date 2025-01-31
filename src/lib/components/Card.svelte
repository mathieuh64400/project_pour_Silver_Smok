<script lang="ts">
    import { goto } from "$app/navigation";

    import {  authStore } from "../../stores/authStore";
    import Tags from "./Tags.svelte";
    

export let CardContent:any;
export let cardPays:string;
export let cardDes:string;
export let cardPrix:number;
export let cardPos:number;
export let cardId:number;
export let zoneGeoImg:string;
console.log(cardId,zoneGeoImg);

let todoLists=[]
authStore.subscribe((curr:any) => {
    todoLists = curr.data.todos;})




function go(params:number) {
    console.log(params);
    goto('/Voyage/'+params);
    
}


</script>


<div class="card-container">
 <div class="card">
    <img src="{'./src/lib/assets/img/'+zoneGeoImg+'.jpg'}" alt="mon image">
    <div class="card-contend">
        <h3 > {CardContent}</h3>
        <p id="Pays">{cardPays}</p>
        <p> {cardDes.slice(0, 100)}...</p>
    </div>
    <div class="card-contend rep">
        <p class="rep">
          {#if  cardPos===0}
          <Tags Tagtext="Nouveauté"/>
             {/if} 
          {#if  cardPos===1}
          <Tags Tagtext="Classique"/>
          {/if} 
          {#if cardPos===2}
          <Tags Tagtext="Sportif"/>
         {/if}

        </p>
        <div>
        <p> {cardPrix} TTC/Pers </p>
        <p> Vol & repas Compris</p>
        </div>
        
        <button onclick="{()=>go(cardId)}">Découvrir</button>
    </div>
 </div>
</div>
<style>
   
.card-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 80%;
    margin:50px auto;
    background-color: #fff;
    

}
.card{
    background-color: #fff;
    box-shadow: 0px 4px 8px white;
}
.card img{
    width: 100%;
    height: 100px;
    object-fit: cover;
}
.card-contend{
    padding :20px;
    background-color: #fff;

}
.card-contend h3{
    font-size: 30px;
    margin-bottom: 10px;
    color: white;
    background-color: #fff;
}

.card-contend p{
   font-size: 18px; 
   line-height: 1.4;
   margin-bottom: 6px;
   background-color: #fff;
  
}
.card-contend #Pays{
    opacity:0.75;
    color: grey;
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
.rep{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.rep>div {
    background-color: rgb(134, 45, 45);
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (min-width: 768px) {
 button {
    padding: 0 2.6rem;
  }
}
@media screen and (max-width:768px){
    .card img{
        height: 150px;
    }
    .card-contend h3{
        font-size: 20px;
    }
    .card-content p{
        font-size: 15px;
    }


}
</style>