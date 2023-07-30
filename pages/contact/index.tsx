import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { PhotoIcon } from "@heroicons/react/24/solid";

import Layout from "components/layout";

// TODO: 로딩스피너 적용!!!

type FormFieldType = {
  category: string;
  question: {
    key: string;
    label: string;
    inputType: "text" | "textarea" | "file";
    required?: boolean;
  }[];
};

export type InputDataType = {
  [key: string]: string | string[];
  request: string;
  concept: string;
  rating: string;
  budget: string;
  movingDate: string;
  constructionDate: string;
  area: string;
  buildingAddr: string;
  buildingType: string;
  family: string;
  callTime: string;
  phone: string;
  name: string;
  imgFile: string[];
};

export const formField: FormFieldType[] = [
  {
    category: "고객 정보",
    question: [
      { key: "name", label: "고객명", inputType: "text", required: true },
      { key: "phone", label: "연락처", inputType: "text", required: true },
      { key: "callTime", label: "통화 가능 시간", inputType: "text" },
      { key: "family", label: "가족 구성", inputType: "text" },
    ],
  },
  {
    category: "공사 내용",
    question: [
      {
        key: "buildingType",
        label: "건물 유형 (아파트/빌라/사무실/상가)",
        inputType: "text",
      },
      {
        key: "buildingAddr",
        label: "건물 주소 (타입/아파트 명)",
        inputType: "text",
      },
      { key: "area", label: "분양 평수", inputType: "text" },
      { key: "constructionDate", label: "공사 가능 날짜", inputType: "text" },
      { key: "movingDate", label: "입주 예정일", inputType: "text" },
      { key: "budget", label: "공사 예산 (대략적인 금액)", inputType: "text" },
      { key: "rating", label: "공사 등급 (고급/중급/실용)", inputType: "text" },
      {
        key: "concept",
        label: "공사 내용 및 컨셉 (최대한 자세하게)",
        inputType: "textarea",
      },
      { key: "request", label: "공사 시 특별 요청 사항", inputType: "textarea" },
    ],
  },
  {
    category: "첨부파일",
    question: [{ key: "imgFile", label: "첨부파일", inputType: "file" }],
  },
];

const Contact = () => {
  const [inputData, setInputData] = useState<InputDataType>({
    name: "",
    phone: "",
    callTime: "",
    family: "",
    buildingType: "",
    buildingAddr: "",
    area: "",
    constructionDate: "",
    movingDate: "",
    budget: "",
    rating: "",
    concept: "",
    request: "",
    imgFile: [""],
  });
  const [fileName, setFileName] = useState<string[]>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const MAX_FILES = 5;
    const MAX_FILE_SIZE_MB = 1;
    const fileNameArray = [];

    if (!fileList) return;
    // 파일 갯수 확인
    if (fileList.length > MAX_FILES) {
      alert(`파일은 최대 ${MAX_FILES}개까지 첨부할 수 있습니다.`);
      e.target.value = "";
      return;
    }

    // 파일 사이즈 확인
    for (let i = 0; i < fileList.length; i++) {
      const fileSizeMB = fileList[i].size / (1024 * 1024 * 5);
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        alert(`${fileList[i].name}의 용량이 5MB 이상입니다.`);
        e.target.value = "";
        return;
      } else {
        fileNameArray.push(fileList[i].name);
      }
    }

    setFileName(fileNameArray);
    return uploadImage(fileList);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const uploadImage = async (files: FileList) => {
    const formData = new FormData();

    const tempArr: string[] = [];
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "hdg45mhf");

      await axios
        .post("/cloudinary/image/upload", formData)
        .then((res) => tempArr.push(res.data.secure_url));
    }
    setInputData({ ...inputData, imgFile: tempArr });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("/api/send", inputData)
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Layout title="문의">
      <form onSubmit={submit} method="post" action={process.env.NEXT_PUBLIC_SUBMIT_URL}>
        <div className="space-y-12">
          {formField.map(({ category, question }, index) => (
            <div
              key={category}
              className="grid grid-cols-1 gap-x-8 gap-y-8 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <h2 className="text-lg font-semibold leading-7 text-gray-900">{`${
                index + 1
              }. ${category}`}</h2>
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 md:col-span-2">
                {question.map(({ key, label, inputType, required }) => (
                  <div key={key} className="sm:col-span-4">
                    {inputType === "file" ? (
                      <div className="col-span-full">
                        <label
                          htmlFor={key}
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          * 파일 갯수 제한: 최대 5개
                          <br />* 파일 용량 제한: 최대 5mb
                        </label>
                        <label
                          htmlFor={key}
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 shadow-sm focus-within:outline-none"
                        >
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 shadow-sm">
                            <div className="text-center">
                              <PhotoIcon
                                className="mx-auto h-12 w-12 text-gray-300"
                                aria-hidden="true"
                              />
                              <div className="mt-4 flex leading-6 text-gray-600">
                                <input
                                  id={key}
                                  name={key}
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  className="sr-only"
                                  required={required}
                                  onChange={onChangeFile}
                                />
                              </div>
                              {fileName ? (
                                <div className="text-sm font-normal">
                                  {fileName.map((name, index) => (
                                    <li key={index}>{name}</li>
                                  ))}
                                </div>
                              ) : (
                                <span className="font-normal">파일을 첨부 해주세요.</span>
                              )}
                            </div>
                          </div>
                        </label>
                      </div>
                    ) : inputType === "textarea" ? (
                      <div className="col-span-full">
                        <label htmlFor={key} className="block font-medium leading-6 text-gray-900">
                          {label}
                        </label>
                        <div className="mt-2">
                          <textarea
                            id={key}
                            name={key}
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-gray-300 sm:text-sm sm:leading-6"
                            required={required}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="sm:col-span-4">
                        <label htmlFor={key} className="block font-medium leading-6 text-gray-900">
                          {label}
                        </label>
                        <div className="mt-2">
                          <div className="flex sm:max-w-md">
                            <input
                              type="text"
                              name={key}
                              id={key}
                              className="block flex-1 rounded-md border-solid border-gray-300 bg-transparent py-1.5 pl-3 text-gray-900  shadow-sm focus:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
                              required={required}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md px-3 py-2 font-semibold text-black ring-1 ring-inset ring-gray-300 "
          >
            메일 보내기
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
