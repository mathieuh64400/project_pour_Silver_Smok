<script lang="ts">
    import { goto } from '$app/navigation';
    import Cartographie from '$lib/components/Cartographie.svelte';
    import City from '$lib/components/City.svelte';
    import Rate from '$lib/components/Rate.svelte';
import Regions from '$lib/components/Regions.svelte';
    import SousTitre from '$lib/components/SousTitre.svelte';

    import Titre from '$lib/components/Titre.svelte';
    import { authStore } from "../../../stores/authStore";
    import { onMount } from 'svelte';
/*
import img from "../../../../src/lib/assets/img"*/

    let todoList:any[]=[];
let length=0;
let travel:any;

let url = ``;
console.log( "the url from"+ window.location.href);
let res=window.location.href.replace('http://localhost:5173/Voyage/','')
console.log( typeof res);
let newres= parseInt(res);




let cities:any[]=[]



//[{id:1,city:"Delhi"}, {id:2,city:"Agra"}, {id:3,city:"Bijapur"}, {id:4,city:"Patna"}, {id:5,city:"lucknow"}];
let coordonates:any[]=[
    [28.644800 , 77.216721],
    [27.176670, 78.008072],
    [16.827545,75.725327], 
    [26.850000,80.949997],
    [25.612677,	85.158875]
 ]
let citArray:string[]=[];
 
let Zone:string="";
let pays:string="";
let sousR:string="";

 let tarif=0;




let {data}=$props();
    
    $inspect(data);

authStore.subscribe((curr) => {
        todoList = curr.data.todos;
        length= curr.data.todos.length;
        console.log(todoList,length);

        for (let i = 0; i < length; i++) {
         Object.defineProperty(todoList[i],"id",{value:i+1,writable:true});
          
        }
   travel= todoList.filter(todo=> todo.id===newres
   );
   console.log( "res" +travel);
   
  
   tarif=travel[0].prix;
   cities=[{id:1,city:travel[0].ville1}, {id:2,city:travel[0].ville2}, {id:3,city:travel[0].ville3}, {id:4,city:travel[0].ville4}, {id:5,city:travel[0].ville5}]
   citArray=[travel[0].ville1,travel[0].ville2,travel[0].ville3,travel[0].ville4,travel[0].ville5];
        
   Zone=travel[0].region;
   pays=travel[0].pays;
   sousR=travel[0].sous_region;
   console.log( "Rythme"+travel[0].Rythme);
   


        



    });
  
function go(){
    goto('#top');
 }
 
 function selectvoyage(id:any){
    
    console.log(id);
  
    goto('/Panier/'+id);




 }



</script>
<!--
<div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas enim, neque obcaecati ipsam optio assumenda architecto magnam veritatis? Eligendi veritatis et facere nesciunt cumque. Nisi maiores nobis culpa pariatur?</div>
-->
<hr>
<Titre titredePartie={travel[0].titre}/>
<SousTitre subTitle={travel[0].soustitre}/>
<hr>
<div class="rep1" id="top"> 
 <a href="/Voyage"> retour  </a>
 <p>|</p>
 <a href="/Home"> Accueil</a></div>
 <Regions Zone={Zone} SubZone={sousR} Pays={pays} />
 
 <button onclick="{()=>selectvoyage(travel[0].id)}" id="top">  je selectionne ce voyage au tarif de TARIF :  {tarif} euros/personnes </button>
 <SousTitre subTitle="Condition du Séjour"/> <!--<img src="{'../../../lib/assets/img/'+travel[0].zoneGeo+'.jpg'}" alt="mon image">-->
<div class="rep2">
<div style="height: 20em;width:50%;" class="cadre2" >   <img src="{'../../../../src/lib/assets/img/'+travel[0].zoneGeo+'.jpg'}" alt="mon image" class="img"></div>
<div class="rep3">
    <ul class="back">
        <li>De 3 à 26 participants
            Accessible à partir de 10 ans
            Départs garantis </li>
        <li>Hôtels 3* et charme ou 4* et charme selon option choisie</li>
        <li>Guides locaux francophones</li>
    </ul>
    <div class="divspec">
        <p  class="rep4 padding"> <span> Rythme </span> <span> <Rate level={travel[0].Rythme}/> </span> </p>
        <p  class="rep4 padding"> <span>Culture</span>  <span> <Rate level={travel[0].culture}/> </span> </p>
        <p  class="rep4 padding"> <span>Histoire </span> <span> <Rate level={travel[0].Histoire}/> </span>  </p>
       <p  class="rep4 padding"> <span> Sportif</span>  <span> <Rate level={travel[0].sportif}/> </span> </p> 
    </div>

</div>
</div>
<SousTitre subTitle="Lieux de Visite" />
<div class="rep4">
    <div  class="cadreCarto">
    <!--  <Cartographie data={coordonates} CityArray={citArray}/>-->
    </div>
    
        <ul style="margin-left:10%;" class="ul">
            {#each cities  as  cityN}
            <li class="rep4" > <span>Jour {cityN.id}:</span><span> <City city={cityN.city}/></span>
             </li>
            {/each}
           
        </ul>
       
       
  
</div>
<button onclick="{()=>go()}">Découvrir les tarifs</button>




<style>
    .cadre2{ height: 20em;width:50%;} 
  .ul{margin-left:10%;}  
    .cadreCarto{
        height: 25em;width:50%;     background-color: red;
    }
    .padding{
        padding :2%;
    }
    .divspec{
        height: 20em;width:100%;  background-color: transparent; margin-top:5px;
    }
.rep1{ 
    display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
         width: 10%;
        margin-top: 2%;
        background-color: transparent;
        color: white;

}
.rep2{
    display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
         width: 100%;
        margin-top: 2%;
        background-color: transparent;
        color: white;
       
}
.back{
    background-color: white;
    width: 100%;
    height: 100%;
    
}
.rep3{
    display:flex;
    flex-direction: column;
    padding:5%;
    margin-top: 2%;
}
.rep4{
    display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
         width: 100%;
        margin-top: 2%;
        background-color: transparent;
        color: white
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

.img{width:75%;}
</style>



