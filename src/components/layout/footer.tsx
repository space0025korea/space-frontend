import React from "react";

const Footer = () => {
  //  TODO: 푸터 내용 확인 필요
  const contents = [
    { key: "대표", value: "이현석" },
    { key: "전화", value: "010-6297-9911" },
    { key: "이메일", value: "329space@naver.com" },
    { key: "주소", value: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ" },
  ];

  return (
    <footer className="border-t-[1px] border-solid border-gray-200 px-10 py-5 text-sm text-slate-800">
      <h1 className="text-base font-bold">329Design</h1>
      <div className="flex flex-wrap justify-between gap-y-2">
        <div>
          {contents.map((el) =>
            el.key !== "주소" ? (
              <span key={el.key} className={"block md:inline"}>
                <strong>{el.key}&nbsp;</strong>
                <span>{el.value}&nbsp;</span>
              </span>
            ) : (
              <p key={el.key}>
                <strong>{el.key}&nbsp;</strong>
                <span>{el.value}&nbsp;</span>
              </p>
            )
          )}
        </div>
        <div>
          <p>Copyright ©{new Date().getFullYear()} 329Design All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
