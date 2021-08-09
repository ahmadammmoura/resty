import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function Results({data}){
  
    return (
      <section>
       <JSONPretty id="json-pretty" data={data}></JSONPretty>
      </section>
    );
  
}

export default Results;
