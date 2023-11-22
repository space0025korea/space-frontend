import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta
          name="keyword"
          content="인테리어 디자인, 인테리어, 공간제작소, 서울인테리어, 송파인테리어, 강남인테리어"
        />
        <meta
          name="description"
          content="고품격 인테리어를 합리적으로 연구하고 적용합니다.
"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecreation.kr" />
        <meta property="og:title" content="공간제작소 | The Creation" />
        <meta property="og:image" content="https://thecreation.kr/images/logo/preview.png" />
        <meta
          property="og:description"
          content="고품격 인테리어를 합리적으로 연구하고 적용합니다.
"
        />
        <meta property="og:site_name" content="공간제작소 | The Creation" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
