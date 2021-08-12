import { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Results({ data ,loading}) {
  let [color, setColor] = useState('#ffffff');

  return (
    <section>
      <ClipLoader color={color} loading={loading} css={override} size={150} />
      {!loading && <JSONPretty id="json-pretty" data={data}></JSONPretty>}
    </section>
  );
}

export default Results;
