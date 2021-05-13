import React, {FunctionComponent} from 'react';
import GlobalStyle from '../components/common/GlobalStyle';
import Introduction from '../components/main/Introduction';
import Footer from '../components/common/Footer';
import styled from '@emotion/styled';


const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
`
const IndexPage: FunctionComponent = function() {
    return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer/>
    </Container>
    
    );
};

export default IndexPage;