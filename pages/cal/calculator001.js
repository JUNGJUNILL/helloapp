import {Button,Input,Select} from 'antd'; 
import { useState,useCallback,createRef,useEffect } from 'react';
import FadeIn from 'react-fade-in';
import wrapper from '../../store/configureStore';


const { Option } = Select;

const calculator001=()=>{

    const [dollar,setDollar] = useState(''); 
    const [percent,setPercent] = useState(''); 
    const [check,setCheck] = useState('up');
    const [result,setResult] =useState(0); 
    const [showFolmula,setShowFolmula] = useState(false);
    const focusDollar= createRef(); 


    useEffect(()=>{
        focusDollar.current.focus(); 

    },[])

    const onChangeDollar =useCallback((e) =>{
        setDollar(e.target.value); 

        const intDollar = e.target.value?parseInt(e.target.value):0; 
        const intPercent= percent?parseInt(percent):0; 
        let resultValue=0; 

        if(check==='up'){
            resultValue=intDollar*((100)+intPercent)/100; 
            setResult(resultValue);
        }else{
            resultValue=intDollar*((100)-intPercent)/100; 
            setResult(resultValue);
        }

    },[dollar])


    const onChangePercent=useCallback((e)=>{
        setPercent(e.target.value); 

        const intDollar = dollar?parseInt(dollar):0; 
        const intPercent= e.target.value?parseInt(e.target.value):0; 
        let resultValue=0; 

        if(check==='up'){
            resultValue=intDollar*((100)+intPercent)/100; 
            setResult(resultValue);
        }else{
            resultValue=intDollar*((100)-intPercent)/100; 
            setResult(resultValue);
        }

    },[dollar,percent])

    const onChangeCondition = useCallback((value)=>{
        const intDollar = dollar?parseInt(dollar):0; 
        const intPercent= percent?parseInt(percent):0; 
        let resultValue=0; 
  
        if(value==='up'){
            resultValue=intDollar*((100)+intPercent)/100; 
            setResult(resultValue);
        }else{
            resultValue=intDollar*((100)-intPercent)/100; 
            setResult(resultValue);
        }
        setCheck(value); 
      
        
    },[check,dollar,percent,check,result])


    const onClickShowformula=useCallback(()=>{
        setShowFolmula(true)

    },[showFolmula])

    return (
        <div>  
            <div style={{width:'100%',textAlign:"center",marginTop:'5%'}}>
                <font style={{fontFamily:'Roboto-BlackItalic',fontSize:'4vh'}}>Find the rate of increase and decrease</font>
            </div>

            <div style={{width:'100%',marginTop:'5%',verticalAlign:'middle',opacity:'0.5'}} >
                <img src='../bacon.webp' />
            </div>
      
            <div style={{width:'100%',textAlign:"center",marginTop:'3%'}}>
                <font style={{fontFamily:'Roboto-BlackItalic',fontSize:'5vh'}} >${result}</font>        
            </div>
       
            <div style={{width:'100%',textAlign:"center",marginTop:'3%'}}>
                <font style={{fontFamily:'Roboto-Medium',fontSize:'3vh'}}>
                Bacon is $
                            <Input  
                                    ref={focusDollar}
                                    placeholder='A'
                                    type='number'    
                                    size='large'   
                                    value={dollar}        
                                    onChange={onChangeDollar} 
                                    style={{width:'100px',marginBottom:'1%',textAlign:'center'}}  
                        />
                , but it's <Select defaultValue={check} size='large' onChange={onChangeCondition}>
                                <Option value="up">up</Option>
                                <Option value="down">down</Option>
                        </Select>       
                        &nbsp;<Input placeholder='B'
                                        type='number'   
                                        size='large'
                                        value={percent}
                                        onChange={onChangePercent}
                                        style={{width:'70px',marginBottom:'1%',textAlign:'center'}}  
                        />
                percent.
                </font>
            </div>


            

            <div style={{width:'100%',textAlign:"center"}}>
                <font style={{fontFamily:'Roboto-Medium',fontSize:'3vh'}}>What is the price of bacon?</font>      
            </div>

            <div style={{width:'100%',textAlign:"center"}}>
                <Button type='primary' style={{fontFamily:'Roboto-Medium'}} onClick={onClickShowformula}>show formula</Button>
            </div>
            <FadeIn delay={100} visible={showFolmula}>
            <div style={{fontFamily:'Roboto-BlackItalic',fontSize:'3vh',textAlign:"center"}} >
                {`${dollar} * ((100)${check==='up'?'+':'-'}${percent}) / 100` }
            </div>
            </FadeIn>
        </div>   
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    const hello='pzqmlaonejf'; 


    return{
        props: {hello}, // will be passed to the page component as props
    }

});

export default calculator001; 