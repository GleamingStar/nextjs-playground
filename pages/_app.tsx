import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import GlobalStyle from '../config/GlobalStyle';

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #b6ffce;
`;

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <GlobalStyle />
        <MainWrapper>
          <NavigationBar />
          <Component {...pageProps} />
        </MainWrapper>
      </SessionProvider>
    </RecoilRoot>
  );
}
