import { useContext } from 'react';
import Editor from './Editor';

import { Box, styled } from '@mui/material';
import { DataContext } from '../context/dataProvider';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`;

const Code = () => {
  const {html, setHtml, css, setCss, javascript, setJavascript} = useContext(DataContext);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF3c41" value={html} onChange={setHtml} />
      <Editor heading="CSS" icon="*" color="#0Ebeff" value={css} onChange={setCss} />
      <Editor heading="JavaScript" icon="()" color="#fcd000" value={javascript} onChange={setJavascript} />
    </Container>
  );
};
export default Code;
