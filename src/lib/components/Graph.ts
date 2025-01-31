

 export let titre:any[]=[{titre1:"Zone la plus visitée"},{titre2:"Pays le plus visitée"},{titre3:"Periode la plus Fréquentée"}];
 export let labels3 :string[]=['January','February', 'March', 'April', 'May']
 export let labels2 :string[]=['Mexique','Italie', 'Gréce', 'Turquie', 'Japon']
 export let labels1 :string[]=['EU','AfN', 'AMS', 'AS-E', 'M-O']


let titreBase:string="Zone la plus visitée"




export const BarData = {
    type: 'bar',
    data: {
        labels: labels1,
        datasets: [{
            label: titreBase,
            data: [55,20,30,10,85],
            backgroundColor:[
                'rgba(255, 255, 255, 1)'
            ]
        },],
    },
    options: {
        maintainAspectRatio: false,
    },
   }