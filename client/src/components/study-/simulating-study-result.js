import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Alert, Button, Dropdown, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { SimulatingStudyModal } from "./simulating-study-modal";

export default function SimulatingStudyResult({
  studentEnrolls,
  studentGrades,
  courses,
  categories,
}) {
  const [dropdownList, setDropdownList] = useState([
    {
      eduTerm: 1,
      eduYear: 2563,
      isSim: false,
    },
    {
      eduTerm: 2,
      eduYear: 2563,
      isSim: false,
    },
    {
      eduTerm: 1,
      eduYear: 2564,
      isSim: false,
    },
  ]);

  const [filterEnrollments, setFilterEnrollments] = useState({
    eduTerm: 1,
    eduYear: 2563,
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  const getNextEdutermAndEduYear = (currentEduTerm, currentEduYear) => {
    return {
      eduTerm: currentEduTerm != 3 ? currentEduTerm + 1 : 1,
      eduYear: currentEduTerm != 3 ? currentEduYear : currentEduYear + 1,
    };
  };

  return (
    <>
      <div className=" grid grid-cols-2 mb-3">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white">
            จำลองผลการเรียน
          </h5>
        </div>
        <div className=" flex justify-end ">
          <div className=" flex flex-row items-center gap-3">
            <p className=" border-red-900">ภาคการศึกษา</p>
            <Dropdown
              color="light"
              label={`${filterEnrollments.eduTerm}/${filterEnrollments.eduYear}`}
            >
              {/* enrolled */}
              {dropdownList.map((item) => (
                <Dropdown.Item
                  color="dark"
                  className={
                    item.eduTerm == filterEnrollments.eduTerm &&
                    item.eduYear == filterEnrollments.eduYear
                      ? " bg-gray-100"
                      : ""
                  }
                  onClick={() =>
                    setFilterEnrollments({
                      eduTerm: item.eduTerm,
                      eduYear: item.eduYear,
                    })
                  }
                >
                  {item.eduTerm}/{item.eduYear}
                </Dropdown.Item>
              ))}

              {/* simulating */}
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() =>
                  setFilterEnrollments({
                    eduTerm: getNextEdutermAndEduYear(
                      dropdownList[dropdownList.length - 1].eduTerm,
                      dropdownList[dropdownList.length - 1].eduYear
                    ).eduTerm,
                    eduYear: getNextEdutermAndEduYear(
                      dropdownList[dropdownList.length - 1].eduTerm,
                      dropdownList[dropdownList.length - 1].eduYear
                    ).eduYear,
                  })
                }
              >
                <div>
                  <p className=" font-semibold">(จำลองเทอมต่อไป)</p>
                  <p>
                    {
                      getNextEdutermAndEduYear(
                        dropdownList[dropdownList.length - 1].eduTerm,
                        dropdownList[dropdownList.length - 1].eduYear
                      ).eduTerm
                    }
                    /
                    {
                      getNextEdutermAndEduYear(
                        dropdownList[dropdownList.length - 1].eduTerm,
                        dropdownList[dropdownList.length - 1].eduYear
                      ).eduYear
                    }
                  </p>
                </div>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      {studentEnrolls && studentGrades && (
        <>
          {studentEnrolls.filter(
            (item) =>
              item.eduTerm == filterEnrollments.eduTerm &&
              item.eduYear == filterEnrollments.eduYear
          ).length ? (
            <>
              <Table>
                <Table.Head>
                  <Table.HeadCell>รหัสวิชา</Table.HeadCell>
                  <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
                  <Table.HeadCell>หน่วยกิต</Table.HeadCell>
                  <Table.HeadCell>ระดับขั้น</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {studentEnrolls
                    .filter(
                      (item) =>
                        item.eduTerm == filterEnrollments.eduTerm &&
                        item.eduYear == filterEnrollments.eduYear
                    )
                    .map((item) => (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{item.subjectCode}</Table.Cell>
                        <Table.Cell>{item.subjectNameThai}</Table.Cell>
                        <Table.Cell>{item.registCredit}</Table.Cell>
                        <Table.Cell>
                          {
                            studentGrades.find(
                              (x) => x.subjectCode == item.subjectCode
                            )?.grade
                          }
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </>
          ) : (
            <>
              <Alert className=" mb-3" color="info" icon={HiInformationCircle}>
                <span></span>ไม่พบข้อมูลการลงทะเบียนของท่าน
              </Alert>
              <Table>
                <Table.Head>
                  <Table.HeadCell>รหัสวิชา</Table.HeadCell>
                  <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
                  <Table.HeadCell>หน่วยกิต</Table.HeadCell>
                  <Table.HeadCell>ระดับขั้น</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell colSpan={4}>
                      <Button
                        style={{ width: "100%" }}
                        onClick={() => setIsOpenModal(true)}
                      >
                        เพิ่มรายวิชา+
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <SimulatingStudyModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                courses={courses}
                categories={categories}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
