import { Modal } from "flowbite-react";

export function SimulatingStudyCartModal({
  isCartModalOpen,
  setIsCartModalOpen,
  selectedCourses,
}) {
  return (
    <>
      <Modal
        dismissible
        onClose={() => setIsCartModalOpen(false)}
        show={isCartModalOpen}
      >
        <Modal.Header>วิชาที่เลือก</Modal.Header>
        <Modal.Body>
          {selectedCourses?.map((item) => (
            <p>{item.courseCode}</p>
          ))}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
