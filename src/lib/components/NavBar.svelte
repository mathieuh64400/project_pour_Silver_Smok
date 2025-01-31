<script lang="ts">
    import type {Snippet} from "svelte";
    type NavType={children: Snippet}
    let {children}:NavType=$props()
</script>
<nav >
    {@render children()}
</nav>


<style>
    nav{
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content:space-around;
background-color: transparent;
border-bottom: 2px solid rgba(237, 231, 225, 0.5);
padding: 5px;

    }
</style>