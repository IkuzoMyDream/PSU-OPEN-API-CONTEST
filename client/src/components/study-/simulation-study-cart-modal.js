import { DeleteOutline } from "@mui/icons-material";
import { Button, Modal, Table } from "flowbite-react";
import { useEffect, useState } from "react";

export function SimulatingStudyCartModal({
  isCartModalOpen,
  setIsCartModalOpen,
  selectedModalSimCourses,
  setSelectedModalSimCourses,
}) {
  const [selectedCoursesToDelete, setSelectedCoursesToDelete] = useState([]);

  useEffect(() => {
    // console.log(selectedCoursesToDelete);
  }, [selectedCoursesToDelete]);

  useEffect(() => {
    if (!isCartModalOpen) {
      setSelectedCoursesToDelete([]);
    }
  }, [isCartModalOpen]);

  return (
    <>
      <Modal
        dismissible
        onClose={() => setIsCartModalOpen(false)}
        show={isCartModalOpen}
        className=" font-noto_sans_thai"
      >
        <Modal.Header>
          <h3 className=" font-bold">วิชาที่เลือก</h3>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>รหัสวิชา</Table.HeadCell>
              <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
              <Table.HeadCell>หน่วยกิต</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {selectedModalSimCourses?.map((item) => (
                <Table.Row>
                  <Table.Cell>
                    <input
                      value={true}
                      type="checkbox"
                      onChange={(e) =>
                        setSelectedCoursesToDelete((prevState) =>
                          [...prevState].includes(item)
                            ? [...prevState].filter((x) => x != item)
                            : [...prevState, item]
                        )
                      }
                    />
                  </Table.Cell>
                  <Table.Cell>{item.courseCode}</Table.Cell>
                  <Table.Cell>{item.courseNameEng}</Table.Cell>
                  <Table.Cell>{item.credit}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ width: "100%" }}>
            <Button
              outline
              disabled={!selectedCoursesToDelete.length}
              color="failure"
              style={{ width: "100%" }}
              className=" flex justify-center items-center"
              onClick={() => {
                setSelectedModalSimCourses((prevState) =>
                  [...prevState].filter(
                    (item) => !selectedCoursesToDelete.includes(item)
                  )
                );
                setSelectedCoursesToDelete([]);
                setIsCartModalOpen(false);
              }}
            >
              <DeleteOutline style={{ fontSize: "20px" }} color="inherit" />
              <p className=" ml-2 items-center justify-center">
                นำออก {selectedCoursesToDelete.length} รายการ
              </p>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
