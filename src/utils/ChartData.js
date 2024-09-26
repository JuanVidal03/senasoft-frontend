export const chartData = (arr) => {

    const chartStructure = {
        labels: arr.label,
        datasets:[
            {
                label: "Steps",
                data: arr.data,
                borderColor: "rgb(75, 192, 192)"
            }
        ]
    }

    return chartStructure;
    
}