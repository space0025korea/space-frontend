import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        {/* TODO:  desc 수정 */}
        <meta
          name="keyword"
          content="인테리어 디자인, 인테리어, 329design, 329디자인, 송파인테리어, 강남인테리어"
        />
        <meta name="description" content="329Design" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://329design.co.kr" />
        <meta property="og:title" content="329디자인 | 329Design" />
        <meta property="og:image" content="https://329design.co.kr/images/logo/preview.png" />
        <meta property="og:description" content="329Design" />
        <meta property="og:site_name" content="329디자인 | 329Design" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="naver-site-verification" content="a503038f047e43414cd7480296ef2a397381003d" />
        <meta
          name="google-site-verification"
          content="9L4pCPdg-SVewotr4vo_iishXAFU9GssbVI4ic3MmCI"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
