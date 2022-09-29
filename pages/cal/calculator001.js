import {Button} from 'antd'; 

const calculator001=()=>{

    return (
        <div>
            <div style={{width:'100%',textAlign:"center"}}>
                <font style={{fontFamily:'jua',fontSize:'3vh'}}>Find the rate of increase and decrease</font>
            </div>
            <div style={{width:'100%',height:'200px',border:'1px solid'}}>

            </div>
            <div style={{width:'100%',textAlign:"center"}}>
            <font style={{fontFamily:'jua',fontSize:'3vh'}}> 베이컨이 5달러인데 10% 올랐어</font>
              
            </div>

            <div style={{width:'100%',textAlign:"center"}}>
            <font style={{fontFamily:'jua',fontSize:'3vh'}}> 베이컨의 가격은?</font>
              
            </div>
            <div style={{width:'100%',textAlign:"center"}}>
                <Button >계산하기</Button>
            </div>
        </div>   
    )
}
export default calculator001; 