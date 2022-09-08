import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getSingleCoin, HistoricalChart } from "../Api/api";
import Chart from "chart.js/auto";
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Flash from 'react-reveal/Flash'
import Fade from 'react-reveal/Fade';
const CryptoChart = () => {
    const [chartData, setchartData] = useState([]);
    const [coinData, setChartData] = useState([]);
    const [expand, setExpand] = useState(false)
    const [loading, setloading] = useState(true)
    const {id} = useParams()
    console.log(id);
    const [days, setdays] = useState(1);
    const fetchHistoricData = async () => {
        const res = await fetch(HistoricalChart(id, 1, "pkr"));
        const data = await res.json();
        setchartData(data.prices);
    };
    const fetchCoinData = async () => {

        const res = await fetch(getSingleCoin(id));
        const data = await res.json();
        setChartData(data);
        console.log(data)
        setloading(false)
    };

    
    //   console.log(coinData.description);

    useEffect(() => {
        const unSub = (
            fetchHistoricData(),
            fetchCoinData()
   
        )
            return unSub;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container">
            {!loading && (
                <>
                <Fade bottom>
               <div className="img_container">
               <img src={coinData.image.large} alt={coinData.id} className="displayImg" />
               </div>
                <h1 className="CoinName">{coinData.id}</h1>
                <p className="symbol">Symbol : <span className="sym">{coinData.symbol}</span></p>
               
                </Fade>
                
             
                {expand?(
                    <>
                    <Flash>
                    <ExpandLessIcon onClick = {()=>setExpand(false)} className="expandIcon"/>
                    </Flash>
                    <p className="desc">{parse(coinData.description.en)}</p>
                    </>
                ):
                <Flash> <ExpandMoreIcon className="expandIcon" onClick = {()=>setExpand(true)}/></Flash>
                }

                </>
            )}
            <Line
            className="chart"
                data={{
                    labels: chartData.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                            date.getHours() > 12
                                ? `${
                                      date.getHours() - 12
                                  }:${date.getMinutes()} PM`
                                : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                        {
                            data: chartData.map((coin) => coin[1]),
                            label: `Price in pkr `,

                            borderColor: "#5B39DB",
                            lineTension: 0,
                            borderWidth: 2,
                            fill: true,
                            backgroundColor: "rgba(38,29,85,0.3)",
                            pointBorderWidth: 2,
                        },
                    ],
                }}
                options={{
                    elements: {
                        point: {
                            radius: 1,
                        },
                    },


                    animation: {
                        duration: 3000,
                        easing: "easeInOutBounce",
                    },
                }}
            />
        </div>
    );
};

export default CryptoChart;
