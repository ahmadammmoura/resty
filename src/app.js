import React from 'react';
import { useState,useEffect,useReducer } from 'react';
import './app.scss';


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const initialState = {
  requests: [],
};

let history;

function historyReduser(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'addSearch':
      const requests = [...state.requests, payload];
      history = requests;
      return { requests };
    default:
      return state;
  }
}

function addSearch(requestParams, data) {
  return {
    type: 'addSearch',
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      result: data,
    },
  };
}


function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({})
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(historyReduser, initialState);



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
      dispatch(addSearch(requestParams, data));
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
        <History handleApiCall={callApi} history={history} />
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading} />
        <Footer />
      </>
    );
  
}

export default App;
