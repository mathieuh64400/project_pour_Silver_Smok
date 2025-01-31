<script lang="ts">
   

   import { authHandlers,authStore} from "../../stores/authStore";

let usersCurr:any;
   
let nom:string="mhedot@neuf.fr";


authStore.subscribe((curr) => {
        usersCurr = curr.data.email;
    });
    
 
    

</script>

<div>   
    Bienvenue {usersCurr} <br>sur la site Fake_Travel_Agency<br>
    Ceci est un faux site de E-commerce de Voyage. Il sert a faire une demonstration de compétences  sur une technologie precise.<br>
    Bonne navigation!!


</div>
<style>
    div{
        color: white;
        font-size: 50px;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>

