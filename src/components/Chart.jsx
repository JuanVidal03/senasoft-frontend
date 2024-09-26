import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { getMakeProfitMonth } from "../services/alquileresPendientes";
import { chartData } from "../utils/ChartData";


ChartJS.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
});


const Chart = () => {

    const [chartLine, setChartLine] = useState([]);
    const [valores, setValores] = useState()
    const [labels, setLabels] = useState()
    // obteniendo los valores de la grafica
    useEffect(() => {
        const getMakeProfitMonthService = async() => {
            try {
                
                const response = await getMakeProfitMonth();
                console.log(response.data);
                const labelMap = response.data.map((item) => item.mes)
                const totalGanancia = response.data.map((item)=> item.totalGanancias)
                console.log(totalGanancia)
                setChartLine({label:labelMap, data:totalGanancia});

            } catch (error) {
                console.log(error);
            }
        }
        getMakeProfitMonthService();

    }, []);


   const data=  chartData(chartLine);

    const options = {}

    return <Line
        data={data}
        options={options}
    />;

}

export default Chart;