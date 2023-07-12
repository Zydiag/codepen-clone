import { Box, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../context/dataProvider';

const Container = styled(Box)`
  height: 50vh;
`;

const Result = () => {
  const [src, setSrc] = useState('');

  const { html, css, javascript } = useContext(DataContext);
  const srcCode = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${javascript}</script>
  </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, css, javascript]);
  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        sandbox="allow-scripts"
        srcDoc={src}
        title="output"
        // eslint-disable-next-line react/no-unknown-property
        frameborder="0"
      ></iframe>
    </Container>
  );
};
export default Result;
