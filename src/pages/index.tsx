import React, {FunctionComponent} from 'react';
import GlobalStyle from '../components/common/GlobalStyle';
import CategoryList from '../components/main/CategoryList';
import Introduction from '../components/main/Introduction';
import Footer from '../components/common/Footer';
import styled from '@emotion/styled';
import PostList from '../components/main/PostList';

const CATEGORY_LIST = {
   All: 5,
   Web: 3,
   Mobile: 2,
};

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
      <CategoryList selectedCategory='Web' categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer/>
    </Container>
    
    );
};

export default IndexPage;