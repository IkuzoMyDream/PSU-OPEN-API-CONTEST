import { Accordion } from "flowbite-react";

export default function GeAccordionPanel({ geEduCourse }) {
  return (
    <>
      <Accordion.Title>ทั่วไป</Accordion.Title>
      <Accordion.Content>
        <Accordion collapseAll alwaysOpen>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 1</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup01?.courseCodes?.map((course) => (
                <p>{course}</p>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 2</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup02?.courseCodes?.map((course) => (
                <p>{course}</p>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 3</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup03?.courseCodes?.map((course) => (
                <p>{course}</p>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 4</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup04?.courseCodes
                ? geEduCourse?.subjGroup04?.courseCodes?.map((course) => (
                    <p>{course}</p>
                  ))
                : geEduCourse?.subjGroup04?.groups.map((item) => (
                    <>
                      <p>{item.name}</p>
                      {item?.courseCodes?.map((course) => (
                        <ul>
                          <li className=" indent-12">{course}</li>
                        </ul>
                      ))}
                    </>
                  ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 5</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup04?.courseCodes
                ? geEduCourse?.subjGroup05?.courseCodes?.map((course) => (
                    <p>{course}</p>
                  ))
                : geEduCourse?.subjGroup05?.groups.map((item) => (
                    <>
                      <p>{item.name}</p>
                      {item?.courseCodes?.map((course) => (
                        <ul>
                          <li className=" indent-12">{course}</li>
                        </ul>
                      ))}
                    </>
                  ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 6</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup06?.desc}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>สาระ ที่ 7</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.subjGroup06?.desc}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>วิชาเลือก</Accordion.Title>
            <Accordion.Content>
              {geEduCourse?.elecEduCourse?.courseCodes
                ? geEduCourse?.elecEduCourse?.courseCodes?.map((course) => (
                    <p>{course}</p>
                  ))
                : geEduCourse?.elecEduCourse?.groups.map((item) => (
                    <>
                      <p>{item.name}</p>
                      {item?.courseCodes?.map((course) => (
                        <ul>
                          <li className=" indent-12">{course}</li>
                        </ul>
                      ))}
                    </>
                  ))}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Accordion.Content>
    </>
  );
}
