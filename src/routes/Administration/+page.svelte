<script lang="ts">
    import Graph from "$lib/components/Graph.svelte";
    import Titre from "$lib/components/Titre.svelte";
    import Voyage from "$lib/components/Voyage/Voyage.svelte";




    let {titredePartie, dataTitre, status, VoyageTitre}:{titredePartie:string, dataTitre:string, status:string, VoyageTitre:string}=$props();
    let statutV :'ADMIN'| 'CLIENT' =$state('ADMIN');
   let  titreVoyageAdmin:string =' Liste des Voyages'



</script>
<Titre titredePartie="Administration du site"></Titre>
<div class="wrapper">
    <div class="one">
      <Graph dataTitre="Statistique de l'année en cours"/>
    </div>
    <div class="one"><Voyage status={statutV} VoyageTitre={titreVoyageAdmin}/></div>
</div>
<!--
<div class="wrapper">

    <div class="one">Trois</div>
    <div class="one">Quatre</div>
</div>-->
    
  
  
  <style>
 .wrapper{display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 20px;
height: 23em;
}
.one{
     width: 40%;
     height: 100%;
     border:3px solid white;
     padding: 10px;
     margin:5px;
     overflow:hidden;
     color :white;
}

  </style>