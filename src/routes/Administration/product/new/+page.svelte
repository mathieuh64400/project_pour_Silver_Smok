<script lang="ts">
    import Titre from "$lib/components/Titre.svelte";
    import {  authStore } from "../../../../stores/authStore";
    import { getDoc, doc, setDoc } from "firebase/firestore";
    import{db, storage} from '../../../../lib/firebase/firebase.client';
    
    import { goto } from "$app/navigation";

    import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
    let uploadedImage: string;

    let actif1=false;
  /*  let formState=$state({
Titre:"",
soustitre:"",
prix:0,
pays:"",
Etat:"",
Pos:"",
actif:true,
description:"",
region:"",
sous_region:"",
ville1:"",
ville2:"",
ville3:"",
ville4:"",
ville5:"",
Rythme:1,
culture:1,
Histoire:1,
sportif:1

})
*/

let titre="";
let soustitre="";
let prix=0
let pays:"";
let Etat:"";
let Pos:"";
let actif:true;
let description:"";
let region:"";
let sous_region:"";
let ville1:"";
let ville2:"";
let ville3:"";
let ville4:"";
let ville5:"";
let Rythme:1;
let culture:1;
let Histoire:1;
let sportif:1;   
let ZoneGeo=""
let guestPhoto: File | undefined;

    let  todoList:any="";
    let currTodo = "";
let listLength:number;
    authStore.subscribe((curr) => {
        todoList = curr.data.todos;
        console.log(todoList);
        listLength=todoList.length;
        console.log(listLength);
        
    });


    function handleFileInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			guestPhoto = inputElement.files[0];
		}
	}






/*
function add(n:number):void {

      
       
    console.log(formState);
   

    if (!currTodo) {
        console.log("error:"+ currTodo);
        
        }
    todoList = [...todoList, formState];
    currTodo = "";

    saveTodos();
}

async function saveTodos() {
    console.log($authStore.user.uid);
    try {

        const userRef = doc(db, "users", $authStore.user.uid);
       
       
        await setDoc(
            userRef,
            {
                todos:todoList
            },
            {merge:true}
        )
        
    } catch (error) {
        console.log("il y a une erreur lors de la sauvegarde de type "+ error);

    }

    goto('/Administration');
   
}
*/
async function add() {
    if (titre === undefined || description === undefined )
			return alert('Fields cannot be empty');
		
		const todoList = [{

          titre:titre,
 soustitre:soustitre,
 prix:prix,
 pays:pays,
 Etat:Etat,
 Pos:Pos,
 actif:true,
 description:description,
 region:region,
 sous_region:sous_region,
 ville1:ville1,
 ville2:ville2,
 ville3:ville3,
 ville4:ville4,
 ville5:ville5,
 Rythme:Rythme,
 culture:culture,
 Histoire:Histoire,
 sportif:sportif,
 zoneGeo:ZoneGeo
 //guestPhoto: await uploadGuestPhoto()
}];

try {

const userRef = doc(db, "users", $authStore.user.uid);


await setDoc(
    userRef,
    {
        todos:todoList
    },
    {merge:true}
)

} catch (error) {
console.log("il y a une erreur lors de la sauvegarde de type "+ error);

}





}



async function uploadGuestPhoto() {
		if (!guestPhoto) {
			return null;
		}

		try {
			const storageRef = ref(storage, 'guest_photos/' + guestPhoto.name);
			await uploadBytes(storageRef, guestPhoto);
			const downloadURL = await getDownloadURL(storageRef);
			return downloadURL;
		} catch (error) {
			console.log(`An error occurred while uploading the guest photo ${error}`);
			return null;
		}
    }	




</script>
<Titre titredePartie="Ajout d'un nouveau Voyage"/>
<p> Actuellement il ya {listLength} Voyage</p>
<br>


    <form  enctype="multipart/form-data" >
        <label for="Titre"> Titre du séjour (Originalité + nom de Zones Géographique )</label>
      <input type="text" id="titre" name="titre" placeholder="titre du séjour " bind:value={titre}>
  
      <label for="lname">Sous-Titre du séjour</label>
      <input type="text" id="soustitre" name="soustitre" placeholder="sous-titre du sejour" bind:value={soustitre}>

      <label for="lname">Prix du séjour</label>
      <input type="number" id="prix" name="prix" placeholder="prix du sejour"  bind:value={prix}>
  
      <label for="country">Pays</label>
      <input type="text" id="pays" name="pays" placeholder="pays  du sejour" bind:value={pays}>

      <label for="Actif">Actif</label>
      <input type="checkbox" id="actif" name="actif" bind:checked={actif1}><br>

      <label for="Etat">Etat (Classique,Nouveté,etc..)</label>
      <input type="number" id="Etat" name="Etat" placeholder="Etat du sejour" min=0 max=2 bind:value={Etat}>

      <label for="Position">Position </label>
      <input type="number" id="Etat" name="Etat" placeholder="position Pour le sejour" min=0 max=2 bind:value={Pos}>

      <label for="description">Description du séjour:</label>
      <textarea bind:value={description}>Some text...</textarea>

      <label for="Titre"> Region</label>
      <input type="text" id="region" name="region" placeholder="region du séjour " bind:value={region}>

      <label for="Titre">Sous-Region</label>
      <input type="text" id="sous-region" name="sous-region" placeholder=" Sous_region du séjour " bind:value={sous_region}>

      <label for="Titre">Ville 1 Visitée</label>
      <input type="text" id="ville1" name="ville1" placeholder=" ville du jour1 " bind:value={ville1}>

      <label for="Titre">Ville 2 Visitée</label>
      <input type="text" id="ville2" name="ville2" placeholder=" ville du jour2  "  bind:value={ville2}> 

      <label for="Titre">Ville 3 Visitée</label>
      <input type="text" id="ville3" name="ville2" placeholder=" ville du jour3  "  bind:value={ville3}>

      <label for="Titre">Ville 4 Visitée</label>
      <input type="text" id="ville4" name="ville54" placeholder=" Sville du jour4  "  bind:value={ville4}>

      <label for="Titre">Ville 5 Visitée</label>
      <input type="text" id="ville5" name="ville5" placeholder=" ville du jour5 " bind:value={ville5}>

      <label for="Titre">Nom de la Zone Geographique excacte (ex: Sicile, Mexique, Pouilles, Catalogne)</label>
      <input type="text" id="ville5" name="ZoneGeo" placeholder="ZoneGeo" bind:value={ZoneGeo}>

      <label for="lname">Rythme</label>
      <input type="number" id="Rythme" name="rythme" placeholder="Rythme du sejour"  bind:value={Rythme}>

      <label for="lname">Histoire</label>
      <input type="number" id="Histoire" name="Histoire" placeholder="Histoire"  bind:value={Histoire}>

      <label for="lname">Culture</label>
      <input type="number" id="culture" name="culture" placeholder="culture"  bind:value={culture}>

      <label for="lname">Sportif</label>
      <input type="number" id="sportif" name="sportif" placeholder="sportif"  bind:value={sportif}>

     <!-- <div class="flex flex-col flex-1">
        <label for="file_input">Upload Guest Photo</label>
        <input
            id="file_input"
            type="file"
            on:change={handleFileInputChange}
            class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
        />-->
    

<!--
      <label for="images">
        <span>Choisir une image du lieu</span>
      <input type="file" id="images" name="Image"  on:change={handleFileInputChange}  />
    </label>
-->

      <button type="submit" on:click={add}>Add</button>
     <!-- <input type="submit" value="Submit">-->
    </form>
  







  


<style>
    form{
        padding-bottom: 5%;
    }
input[type=text], input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color:white;
  
}

label{
    color:white;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

input[type=file] {
  display: none;
}

button, label span {
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

button:hover, label span:hover  {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}
@media (min-width: 768px) {
 button {
    padding: 0 2.6rem;
  }
}
</style>