import { useState } from 'react';
import styled from 'styled-components';

const SApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: lightGray;
`;

function App() {
  return <SApp className="App">hello, world</SApp>;
}

export default App;
