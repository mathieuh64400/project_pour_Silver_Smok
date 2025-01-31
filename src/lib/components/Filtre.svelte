<script lang="ts">
    import { createEventDispatcher } from 'svelte';
let visiblity = $state(true);
function toogle() {
        visiblity =!visiblity;
    }

    let formState= $state({
        prix:0
    })
    console.log(formState);
    let count=0;

    const dispatch = createEventDispatcher();
    function send(){
        count=formState.prix;
        
        dispatch('increment',{count});
    }
</script>


<form >
    
    <div style="display:flex; flex-direction:row; align-items: center; ">
    <button onclick={toogle}>+</button>
    <p> Filtrer</p>
</div>
{#if visiblity===true}

<p> Prix</p>
  <label for="prix">Prix du séjour</label><div>{formState.prix}Euros</div>
  <input type="range" id="prix" name="prix" placeholder="prix du sejour" bind:value={formState.prix} min="500" max="5500" step="100">
  <button onclick={send}> Valider  ce prix {formState.prix} Euros</button>



{/if}

 <!-- <input type="submit" value="Submit">-->
</form>



<style>
    div{color:white;}
    form{
        padding-bottom: 5%;
    }


label{
    color:white;
}
p{color:white;
text-decoration: underline;
margin-bottom: 5px;
margin-left: 5px;
margin-top: 1px;

font-weight: bold;}

button{background-color: transparent; color:white; }

/*
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

button:hover  {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}
@media (min-width: 768px) {
 button {
    padding: 0 2.6rem;
  }
}*/
</style>