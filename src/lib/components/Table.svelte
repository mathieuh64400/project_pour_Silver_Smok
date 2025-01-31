<script lang="ts">
    import type {Snippet} from "svelte";
    type TableType={children: Snippet}
    let {children}:TableType=$props()
  
</script>
<table >
    {@render children()}
</table>
<style>

</style>