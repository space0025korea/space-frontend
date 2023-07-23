"use client";
import Layout from "components/layout";
import React from "react";

const Contact = () => {
  // const [inputData, setInputData] = useState({
  //   name: "",
  //   phone: "",
  //   callTime: "",
  // });

  const submit = (e: any) => {
    alert("전송완료");
  };

  return (
    <Layout title="문의">
      <form
        onSubmit={submit}
        method="post"
        action={process.env.NEXT_PUBLIC_SUBMIT_URL}
        target="frAttachFiles"
      >
        <div>
          <label htmlFor="name">고객명</label>
          <input
            type="text"
            name="고객명"
            // value={inputData.name}
            // onChange={(e) => setInputData((prev) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="phone">연락처</label>
          <input
            type="tel"
            name="연락처"
            // value={inputData.phone}
            // onChange={(e) => setInputData((prev) => ({ ...prev, phone: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="">통화가능시간</label>
          <input
            type="text"
            name="통화 가능시간"
            // value={inputData.callTime}
            // onChange={(e) => setInputData((prev) => ({ ...prev, callTime: e.target.value }))}
          />
        </div>
        <button type="submit">메일보내기</button>
      </form>

      <iframe name="frAttachFiles" className="invisible"></iframe>
    </Layout>
  );
};

export default Contact;
