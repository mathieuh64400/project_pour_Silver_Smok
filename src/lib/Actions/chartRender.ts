import { Chart } from "chart.js/auto";

export const chartRender= (node:any, options:any)=>{
    console.log('Action');
    console.log(node);
    console.log(options);
    
    const _chart = new Chart(node,options);
    return {
        update(updatedoptions:any) {
            _chart.data = updatedoptions.data
            _chart.update()
        },
        destroy(){
            console.log("Destroy function is called:")
            _chart.destroy()
        }
    }
    
}