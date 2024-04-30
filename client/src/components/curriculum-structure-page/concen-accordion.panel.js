import { Accordion } from "flowbite-react";

export default function ConcenAccordionPanel({ concentrationCourse }) {
  return (
    <>
      <Accordion.Title>ชีพ</Accordion.Title>
      <Accordion.Content>
        <Accordion collapseAll alwaysOpen>
          <Accordion.Panel>
            <Accordion.Title>พื้นฐานชีพ</Accordion.Title>
            <Accordion.Content>
              {concentrationCourse?.basicConcen?.courseCodes?.map((course) => (
                <p>{course}</p>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>ชีพเฉยๆ</Accordion.Title>
            <Accordion.Content>
              {concentrationCourse?.advanceConcen?.courseCodes?.map(
                (course) => (
                  <p>{course}</p>
                )
              )}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Accordion.Content>
    </>
  );
}
