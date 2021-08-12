import React from 'react';
import { useState,useEffect } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({})
  const [loading, setLoading] = useState(false);

  async function callApi(requestParams){
    // mock output
    try {
      const raw = await fetch(requestParams.url);
      const data = await raw.json();
      
      setdata(data)
      setrequestParams(requestParams)
      
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)    
    } catch (error) {
      
      setdata(null)
    }

  }

  useEffect(() => {
    callApi(requestParams)
  }, [requestParams])


    
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading} />
        <Footer />
      </>
    );
  
}

export default App;
