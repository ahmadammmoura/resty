import { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Results({data}){
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  if(data){
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }
  
    return (
      <section>
        <p>hello</p>
        { loading && <ClipLoader color={color} loading={loading} css={override} size={150} />}
        
       {!data && <JSONPretty id="json-pretty" data={data}></JSONPretty>}
      </section>
    );
  
}

export default Results;
