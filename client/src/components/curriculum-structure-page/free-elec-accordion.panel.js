import { Accordion } from "flowbite-react";

export default function FreeElecAccordionPanel({ freeElecCourse }) {
  console.log(freeElecCourse);
  return (
    <>
      <Accordion.Title>เสรี</Accordion.Title>
      <Accordion.Content>
        <p>{freeElecCourse?.desc}</p>
      </Accordion.Content>
    </>
  );
}
