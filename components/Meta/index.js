import Head from 'next/head';
import { HORIZONTAL_MARGIN } from '../../constants';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        font-family: 'HelveticaNeue-Light';
        padding: ${HORIZONTAL_MARGIN};
        margin: 0px;
      }
    `}</style>
  </div>
);