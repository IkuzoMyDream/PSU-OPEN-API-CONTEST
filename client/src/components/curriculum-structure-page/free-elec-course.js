import { Accordion } from "flowbite-react";

export default function FreeElecCourse({
  freeElecCourse,
  studentFreeElecEnroll,
}) {
  return (
    <>
      <p className=" text-2xl">
        หมวดวิชาเลือกเสรี ({studentFreeElecEnroll?.registCreditAmount} /{" "}
        {freeElecCourse?.totalCredit})
      </p>
      <div className=" indent-8 my-3"></div>
      <div className=" indent-8">
        <p>{freeElecCourse?.desc}</p>
      </div>
    </>
  );
}
