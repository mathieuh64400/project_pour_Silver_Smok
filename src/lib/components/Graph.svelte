<script lang="ts">
import {chartRender} from '../Actions/chartRender';
import {BarData ,titre, labels1, labels2, labels3}  from './Graph';
    import Titre from './Titre.svelte';
    export let dataTitre;
    

console.log(chartRender);




function SearchBy(d:number){
    console.log(titre[0].titre1, labels1);
    if(d===0){  BarData.data.datasets[0].label=titre[0].titre1;
                BarData.data.labels= labels1 ;
        }
    if(d===1){  BarData.data.datasets[0].label=titre[1].titre2
        BarData.data.labels= labels2 ;
    }
    if (d===2) {BarData.data.datasets[0].label=titre[2].titre3,
        BarData.data.labels= labels3 ;
    }

   
}


</script>
<Titre  titredePartie={dataTitre}/>
<div class="data">
<canvas use:chartRender={BarData}></canvas>
</div>
<div class="repartition">
    <button class="first" onclick={()=>SearchBy(0)}>Continent</button>
    <button class="second" onclick={()=>SearchBy(1)}>Pays</button>
    <button class="third" onclick={()=>SearchBy(2)}>Periode</button>
    
 </div>

<style> 
.data{
height: 75%;}
.repartition{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
  
    padding:5px;
}
.first, .second,.third {
    background-color: white;
    font-size: 1em;
    margin:1px;
}
button {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
 
  font-size: 8px;
  font-weight: 500;
  height: 2rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
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