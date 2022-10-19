import wrapper from '../../store/configureStore';
import { useState,useCallback,createRef,useEffect, useTransition } from 'react';
import Head from "next/head";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
//https://velog.io/@ksh4820/react-chartjs-2-%EA%B7%B8%EB%9E%98%ED%94%84
//https://react-chartjs-2.js.org/
//https://github.com/reactchartjs/react-chartjs-2
//https://www.chartjs.org/docs/latest/samples/bar/vertical.html
//https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/bar/vertical?from-embed=&file=/App.tsx:446-450
const calculator004 = ({
    SEOKEYWORD001,
    SEOKEYWORD002,
    SEOKEYWORD003,
    SEOKEYWORD004,
    SEOKEYWORD005,
    SEOKEYWORD006,
    SEOKEYWORD007,
    SEOKEYWORD008,
    SEOKEYWORD009,
    SEOKEYWORD010,
    SEOKEYWORD011,
    SEOKEYWORD012,
    SEOKEYWORD013,
    SEOKEYWORD014,
    SEOKEYWORD015,
    SEOKEYWORD016,
    SEOKEYWORD017})=>{


        const options = {
            responsive: true,
            plugins: {
                legend: {
                display:false,
                //position: 'bottom',
                },

                title: {
                display: true,
                text: 'finding the proportion of things',
                fontSize:100,
                },

                scale :{
                    fontSize: 50,
                }
            },
        };

        const [label,setLabel] = useState(['#1', '#2', '#3', '#4', '#5']);
        const [datas,setDatas] = useState([10,20,5,5,10]);
        //const [sum,setSum]=useState(0);  

        let rankColor = ["#11b288", "#207ac7", "#207ac7", "#207ac7", "#d6d6d6", "#d6d6d6", "#d6d6d6", "#d6d6d6"]
        //let hello=[10,20,5,5,10]; 
        let sum=0; 
       // let sumdata=0; 
        datas.map((v)=>{
            let value = parseInt(v); 
            sum+=value; 
        });

        const data = {
            
            labels:  label.map((v,i)=>{
                let ratio = (datas[i]/sum)*100
                return v+ '\n'+ratio.toFixed(2)+'%';
            }),
            datasets: [
                {
                  backgroundColor: rankColor,
                  borderColor: rankColor,
                 
                  hoverBackgroundColor: rankColor,
                  hoverBorderColor: rankColor,
                  data: datas,

                }
              ]

        }

        const test = () =>{
            setLabel([...label,'hello']);  
            setDatas([...datas,Math.floor(Math.random() * 80)]); 
        }
        const focusDollar= createRef(); 
        const [num1,setNum1] =useState(0);  
        
        const test2 =(e)=>{
            let num = e.target.value; 
            setNum1(num); 
            datas[0]=e.target.value?e.target.value:0; 
            const copy1 = [...datas]; 
            setDatas([...copy1]);
            
        }

        const hello = () =>{
            focusDollar.current.focus();
            
        }

        return(
        <div>
            <div>{sum}</div>
            <input type="button" value="test" onClick={hello} />
            <input type="number" ref={focusDollar} value={num1} onChange={test2}/>
            <input type="button" value="show ratio" onClick={test} />
            <Bar options={options} data={data} />
        </div>
    )

}




export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const SEOKEYWORD001='Online calculator';
    const SEOKEYWORD002='Google calculator';
    const SEOKEYWORD003='Online calculator';
    const SEOKEYWORD004='Math calculator';
    const SEOKEYWORD005='Scientific calculator online';
    const SEOKEYWORD006='Percentage calculator';
    const SEOKEYWORD007='Calculus calculator';
    const SEOKEYWORD008='Root calculator';
    const SEOKEYWORD009='ratio';
    const SEOKEYWORD010='rate';
    const SEOKEYWORD011='Simple calculator';
    const SEOKEYWORD012='Unit rate';
    const SEOKEYWORD013='Calculator online';
    const SEOKEYWORD014='Interest rate calculator';
    const SEOKEYWORD015='Ratio calculator';
    const SEOKEYWORD016='Proportion ratio';
    const SEOKEYWORD017='Ratio of a to b';

    return{
        props: {SEOKEYWORD001,
                SEOKEYWORD002,
                SEOKEYWORD003,
                SEOKEYWORD004,
                SEOKEYWORD005,
                SEOKEYWORD006,
                SEOKEYWORD007,
                SEOKEYWORD008,
                SEOKEYWORD009,
                SEOKEYWORD010,
                SEOKEYWORD011,
                SEOKEYWORD012,
                SEOKEYWORD013,
                SEOKEYWORD014,
                SEOKEYWORD015,
                SEOKEYWORD016,
                SEOKEYWORD017,
        }, // will be passed to the page component as props
    }

});


export default calculator004; 