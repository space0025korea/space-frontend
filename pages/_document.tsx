import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        {/* TODO: keyword, desc 수정 */}
        <meta name="keyword" content="인테리어 디자인,인테리어,329Design,329디자인" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://329design.co.kr" />
        <meta property="og:title" content="329Design" />
        <meta property="og:image" content="https://329design.co.kr/images/logo/preview.png" />
        <meta property="og:description" content="329Design" />
        <meta property="og:site_name" content="329Design" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
