import { InputDataType, formField } from "pages/contact";

const XSScheck = (untrustedString: string) => {
  let replaced;
  replaced = untrustedString.replaceAll("&", "&amp;");
  // eslint-disable-next-line quotes
  replaced = untrustedString.replaceAll('"', "&quot;");
  replaced = untrustedString.replaceAll("'", "&apos;");
  replaced = untrustedString.replaceAll("<", "&lt;");
  replaced = untrustedString.replaceAll(">", "&gt;");
  replaced = untrustedString.replaceAll("\r", "<br>");
  replaced = untrustedString.replaceAll("\n", "<p>");
  return replaced;
};

export const generateEmail = (inputData: InputDataType) => {
  let emailContents = "";

  formField.forEach(({ question }) => {
    question.forEach(({ key, label }) => {
      if (key !== "imgFile") {
        XSScheck(inputData[key] as string);
        emailContents += `<div><strong>${label}</strong>: ${XSScheck(
          inputData[key] as string
        )}</div>`;
      } else {
        if (inputData.imgFile[0]?.name !== "") {
          emailContents += "<strong>첨부파일</strong>:";
          inputData.imgFile.map(
            ({ src }) =>
              (emailContents += `
            <img src=${XSScheck(src)} key=${XSScheck(src)} />`)
          );
        }
      }
    });
  });

  return emailContents;
};
