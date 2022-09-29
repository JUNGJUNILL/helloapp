import {Row,Col} from  'antd'; 
import {HomeOutlined } from '@ant-design/icons'
import Router from 'next/router'; 


const AppLayOut = ({children}) =>{

    return(

        <Row>

        <Col xs={24} md={6}>
        </Col>
                <Col  xs={24} md={12}>
                        <ul className="navul">
                            <li className="navli"><HomeOutlined /></li>     
                        </ul>
                    
                        {children}
                    
                        <div className="footerSub"></div>
                
                        <div className="footer">
                        <font style={{fontFamily:'jua',fontSize:'2.5vh',opacity:'0.5'}}>문의 : 개발자 이메일 devjji1207@gmail.com</font>
                        <br/>
                        <font style={{fontFamily:'jua',fontSize:'2.0vh',opacity:'0.5'}}>도매,도소매,제조,채소,과실,농산물,가공,수산물,가공식품,식품,소매,무역,축산물,슈퍼마켓,육류,식료품,전자상거래,주류,식자재 중개,식품 B2B 사이트,식자재마트 리스트,식자재마트 현황,식자재마트,식자재마트 추천,식품 업체 정보,식자재 유통업체 리스트,식자재마트 리스트,식품 업체 리스트,삼성웰스토리,웰스토리,아워홈,신세계,신세계푸드,cj,cj프레시웨이,프레시웨이,쿠팡,마켓컬리,새벽배송,현대,현대그린푸드,이마트</font>
                        </div>
                </Col>
    <Col xs={24} md={6}>
    </Col>

    </Row> 
    ); 

}

export default AppLayOut; 
