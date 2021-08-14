
function History({ history, handleApiCall }) {
  
  return (
    <div className="history">
      <h2>history</h2>
      <ul>
        {history &&
          history.map((item, idx) => {
            if(idx % 2 === 0){
              return (
                <li key={idx}>
                  <p>{item.method}</p> {item.url}
                  <button onClick={() => handleApiCall(item)}> show result</button>
                </li>
              );
            }
            return ''
          })}
      </ul>
    </div>
  );
}

export default History;