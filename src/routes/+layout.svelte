<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import {auth, db} from '../lib/firebase/firebase.client';
    import { getDoc, doc, setDoc } from "firebase/firestore";
   import { authHandlers} from "../stores/authStore";
   import type { User } from 'firebase/auth';


     import 'iconify-icon';

    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { authStore } from "../stores/authStore";
    const nonAuthRoutes=['/', '/product','/Administration']
    let todoModel:any[]=[{id:1,Etat: "",Pos: "",Titre: "",actif:true, description: "",pays: "",prix:0,region: "",sous_region: "",sous_titre: "",ville1:"",ville2:"",ville3:"",ville4:"",ville5:""}]
  
  
    onMount(()=>{
        const unsubscribe= auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname; 
            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = "/";
                return;
            }

            if (user && currentPath === "/") {
                window.location.href = "/Home";
                return;
            }

            if (!user) {
                return;
            }

          

            let dataToSetToStore;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                console.log("Creating User");
                
                
                const userRef = doc(db, "users", user.uid);
                console.log(userRef);
                dataToSetToStore = {
                    email: user.email,
                    todos: todoModel,
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                console.log("Fetching User");
                const userData = docSnap.data();
                dataToSetToStore = userData;
                console.log(userData);
                
            }

            authStore.update((curr) =>{
                return{
                    ...curr,
                    user,
                    data:dataToSetToStore,
                    isLoading:false
                };
               
            });


            
        })
        return unsubscribe;
    })
   





    let {children}= $props();
   
    let LinksA:any[]=[];
   

    LinksA= [{ href: '/Home', text: 'Accueil' },{ href: '/Administration', text: 'Adminstration' },{ href: '/Voyage', text: 'Voyage' },{href: '/Panier', text: 'Panier' }];
   

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.user;
	});
 
    
 
    
   
    let valueFooter:any="Fake-Travel-Agency ";

 
   

</script>

<div>
<NavBar >
    {#each LinksA as Link}
      
        {@render navLink(Link)}
    {/each}

    <button on:click={authHandlers.logout}>
       <i class="fa-solid fa-right-from-bracket" />
        <p class="linkspe">Logout</p></button
    >

</NavBar>
</div>

<div class="repartition">
    {@render children()}
</div>
<Footer data={valueFooter}/>
    




{#snippet navLink({href, text}:{href:string, text:string})}
    <a {href}>{text}</a>
{/snippet}

{#snippet Footerlink({text}:{text:string}) }
    
<div class="footer">
    <p>{text}</p>
</div>
{/snippet}



 <!-- <slot />-->
  <style>
    a, .linkspe {font-size: 1.5em;
        color: whitesmoke;
 /* -webkit-text-fill-color: black; 
  -webkit-text-stroke: 0.5px white;*/
    }
.repartition{
    width: 100%;
    padding: 5%;
}
   
   
  </style>