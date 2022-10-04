import {Button,Input,Select} from 'antd'; 
import { useState,useCallback, useTransition } from 'react';

const { Option } = Select;

const calculator001=()=>{

    const [dollar,setDollar] = useState(''); 
    const [percent,setPercent] = useState(''); 
    const [check,setCheck] = useState('up');


    const onChangeDollar=useCallback((e)=>{
        const pattern = /[^0-9]/g; 
        const blank_pattern = /^\s+|\s+&/g;
        let value=e.target.value; 
    
        if((value.replace(pattern,'')==='' || value.replace(blank_pattern,'')==='') && value.length>0){

            return alert('You can only enter numbers.'); 
        
        }else{
            setDollar(value); 

        }



    },[dollar]); 

    const onChangePercent=useCallback((e)=>{
        const pattern = /[^0-9]/g; 
        const blank_pattern = /^\s+|\s+&/g;
        let value=e.target.value; 
    
        if((value.replace(pattern,'')==='' || value.replace(blank_pattern,'')==='') && value.length>0){
            
            return alert('You can only enter numbers.'); 
        
        }else{
            setPercent(value); 

        }

    },[percent])


    const onClickCalculate=()=>{

    }

    return (
        <div>
            <div style={{width:'100%',textAlign:"center"}}>
                <font style={{fontFamily:'Roboto',fontSize:'3vh'}}>Find the rate of increase and decrease</font>
            </div>
            <div style={{width:'100%',height:'200px',border:'1px solid'}}>

            </div>
            <div style={{width:'100%',textAlign:"center"}}>
            <font style={{fontFamily:'Roboto',fontSize:'3vh'}}>
            Bacon is $
                        <Input placeholder='A'    
                                size='large'   
                                value={dollar}         
                                onChange={onChangeDollar}
                               style={{width:'100px',marginBottom:'1%',textAlign:'center'}}  
                       />
            , but it's <Select defaultValue={check} size='large'>
                            <Option value="up">up</Option>
                            <Option value="down">down</Option>
                       </Select>       
                       &nbsp;<Input placeholder='B'
                              size='large'
                              value={percent}
                              onChange={onChangePercent}
                              style={{width:'70px',marginBottom:'1%',textAlign:'center'}}  
                       />
            percent.
            </font>
              
            </div>

            <div style={{width:'100%',textAlign:"center"}}>
            <font style={{fontFamily:'Roboto',fontSize:'3vh'}}>What is the price of bacon?</font>
              
            </div>
            <div style={{width:'100%',textAlign:"center"}}>
                <Button type='primary' style={{fontFamily:'Roboto'}} onClick={onClickCalculate}>Calculate</Button>
            </div>
        </div>   
    )
}
export default calculator001; 