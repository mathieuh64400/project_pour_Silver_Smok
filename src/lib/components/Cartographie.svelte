<script lang="ts">
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';

    export let data:any[];
    
    export let CityArray:string[];
 

	let marker: Marker;
/*
	if (marker) {
		marker.openPopup();
        marker.$on
	// }*/
   
</script>

<div style="width:100%; height:100%;">
	<Map
		options={{
			center: data[0],
			zoom: 5
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
       
        {#if data.length===5}
        <Marker latLng={data[0]} bind:instance={marker}>
			<Popup
				options={{
					content: CityArray[0]
				}}
			></Popup>
		</Marker>
        <Marker latLng={data[1]} bind:instance={marker}>
			<Popup
				options={{
					content: CityArray[1]
				}}
			></Popup>
		</Marker>
        <Marker latLng={data[2]} bind:instance={marker}>
			<Popup
				options={{
					content: CityArray[2]
				}}
			></Popup>
		</Marker>
        <Marker latLng={data[3]} bind:instance={marker}>
			<Popup
				options={{
					content: CityArray[3]
				}}
			></Popup>
		</Marker>
        <Marker latLng={data[4]} bind:instance={marker}>
			<Popup
				options={{
					content: CityArray[4]
				}}
			></Popup>
		</Marker>
       {/if}
     
		
	</Map>
</div>
<style>
   .leaflet-popup-content{
        background-color: transparent;
    }
</style>