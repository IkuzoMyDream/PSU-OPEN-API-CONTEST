import { Dropdown, Table } from "flowbite-react";
import { useState } from "react";

export default function SimulatingStudyResult() {
  const [filterEnrollment, setFilterEnrollment] = useState({
    eduTerm: 1,
    eduYear: 2566,
  });

  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white">
            จำลองผลการเรียน
          </h5>
        </div>
        <div className=" flex justify-end">
          ภาคการศึกษา
          <Dropdown
            color="light"
            label={`${filterEnrollment.eduTerm}/${filterEnrollment.eduYear}`}
          >
            <Dropdown.Item onClick={() => setFilterEnrollment(`2/2566`)}>2/2566</Dropdown.Item>
            <Dropdown.Item>3/2566</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>รหัสวิชา</Table.HeadCell>
          <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
          <Table.HeadCell>หน่วยกิต</Table.HeadCell>
          <Table.HeadCell>ระดับขั้น</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>200-xxx</Table.Cell>
            <Table.Cell>FUNDA MATHEMATICS FOR ENGINEER</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>A</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
