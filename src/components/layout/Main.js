import React from 'react';
import '../../styles/app.scss';
import { GlobalStyles } from 'twin.macro';
import { Header } from './';
import { StyledWrapper } from './styles';
import { Helmet } from "react-helmet";
import Footer from './Footer';

export default function MainLayout({ children, values }) {
  return (
<>
    <Helmet>
    <script type="text/javascript" src="https://zc1.maillist-manage.in/js/optin.min.js" onload="setupSF('sf3z309ede4c966159ae701453b9582b185861c7d702a2905ab3a24e7ba0ebe74661','ZCFORMVIEW',false)"></script>
    
  </Helmet>
    <StyledWrapper>
      <GlobalStyles />
      <Header values={values} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </StyledWrapper>
    </>
  );
}
