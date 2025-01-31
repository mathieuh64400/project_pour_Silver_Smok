<script lang='ts'>

export let Zone:string
export let Pays:string;
export let SubZone:string

</script>
<div class="rep">

<p>{Zone} >  </p>
<p>{SubZone}  ></p>
<p> {Pays}  </p>
</div>
<style>
    p{
    color: grey ;
    opacity:0.75;
    background-color: transparent;

}
    .rep{
        display:flex;
        flex-direction: row;
        align-items: left;
        justify-content: start;
        background-color: transparent;
    }
</style>