import { RecoilRoot } from 'recoil';
import GlobalStyle from '../config/GlobalStyle';


export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
