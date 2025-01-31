<script lang="ts">
    import Filtre from "$lib/components/Filtre.svelte";
    import Titre from "$lib/components/Titre.svelte";
    import Voyage from "$lib/components/Voyage/Voyage.svelte";

let statutV :'ADMIN'| 'CLIENT' =$state('CLIENT');
let titreVoyageAdmin;
let value=1;
let dataChildformSearch:any;
function handleincrement(e:any){

    dataChildformSearch=e.detail.count;



}


</script>
<Titre titredePartie="Nos Circuits, Nos séjours" />
<!--<div style="width:25%;">
    
      <Filtre on:increment={handleincrement}/>
 
 
 </div>-->
<div class="rep">
    
    
    <div>
        
        <Voyage status={statutV} VoyageTitre={titreVoyageAdmin} donneFiltre={ dataChildformSearch} />
    </div>


</div>
<style>
    .rep{
    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
       
    }
    .rep >div {
        width: 50%;
       
        height: 100%;
    
    }
   div > p{
    color: white;
    text-decoration: underline;
   }

</style>