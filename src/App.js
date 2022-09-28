import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { atomText } from './atom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

function App() {  
  return (
      <Container>
      </Container>
  );
}

export default App;
