import Document, { Html, Head, Main, NextScript } from "next/document";

export default class DocumentComponent extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            httpEquiv="Content-Security-Poicy"
            content="default-src 'self' vitals.vercel-insights.com; img-src https://*; child-src 'none'; script-src: vitals.vercel-insights.com"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
