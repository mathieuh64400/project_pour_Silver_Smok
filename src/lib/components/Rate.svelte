<script lang="ts"> 
export let level:number;
let tabs:any[]=[];

for (let index = 0; index < level; index++) {
    tabs.push({id:index, active:true})

    
}
console.log(tabs);

</script>
<div>
{#each tabs as tab }
 
        <p class={tab.active? 'colored':'uncolored'}></p>
   
{/each}
</div>
<style>
div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: left;

    }
  
.colored{    
  width  : 1em;
  height : 1em;
  background-color:  #673FD7 ;
  border:#673FD7 3px solid;
  margin-left: 5px;
}
.uncolored{
    width  : 1em;
  height : 1em;
  background-color:  grey ;
  opacity:0.5;
  margin-left: 5px;
}
        
    
</style>