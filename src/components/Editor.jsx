/* eslint-disable react/prop-types */
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import './init';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import './style.css';
import { useState } from 'react';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  gap: 5px;
  align-items: center;
`;

const TitleBar = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 900px;
`;
const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    // console.log(onChange)
    onChange(value);
  };

  const [open, setOpen] = useState(true);

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <TitleBar>
        <Heading>
          <Box
            style={{
              backgroundColor: color,
              display: 'flex',
              height: 20,
              width: 20,
              placeContent: 'center',
              paddingBottom: '3',
              flexWrap: 'wrap',
              borderRadius: '5px',
              color: 'black',
              // fontWeight: 900,
            }}
            component="span"
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"

          style={{ cursor: 'pointer', alignSelf: 'center' }}
          onClick={() => setOpen(!open)}
        />
      </TitleBar>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineNumbers: true,
          theme: 'material',
        }}
      />
    </Container>
  );
};
export default Editor;
