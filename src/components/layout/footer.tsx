import React from "react";
import Image from "next/image";

const Footer = () => {
  const contents = [
    { key: "대표", value: "임형준" },
    { key: "전화", value: "010-5602-0025" },
    { key: "이메일", value: "space0025@naver.com" },
    { key: "주소", value: "서울특별시 강남구 개포로38길 18 화인빌딩 2층" },
  ];

  return (
    <footer className="border-t-[1px] border-solid border-gray-200 px-8 py-5 text-xs text-slate-800 xl:px-36">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={100}
        height={50}
        className="-mx-1 mb-2 h-auto w-auto"
      />
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
          <p>Copyright ©{new Date().getFullYear()} 공간제작소 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
