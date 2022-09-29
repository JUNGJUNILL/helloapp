import React from 'react';

import  '../CSS/antdMobile.css';
import AppLayout from '../components/AppLayout'; 
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';


const init = ({ Component, pageProps }) => (
    <div>
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    </div>

  );


  export function reportWebVitals(metric) {
    //console.log('metric===>' , metric);
  }

  
export default wrapper.withRedux(init);