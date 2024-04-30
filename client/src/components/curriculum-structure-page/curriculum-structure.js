import { Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import ConcenAccordionPanel from "./concen-accordion.panel";
import GeAccordionPanel from "./ge-accordion.panel";
import FreeElecAccordionPanel from "./free-elec-accordion.panel";

export default function CorriculumStructure({ curriculumStructure }) {
  //   console.log(curriculumStructure);

  const [geEduCourse, setGeEduCourse] = useState(null);
  const [concentrationCourse, setConcentrationCourse] = useState(null);
  const [freeElecCourse, setFreeElecCourse] = useState(null);

  useEffect(() => {
    setGeEduCourse({
      ...curriculumStructure?.geEduCourse?.requiredEduCourse,
      elecEduCourse: curriculumStructure?.geEduCourse?.elecEduCourse,
    });
    setConcentrationCourse({
      basicConcen: curriculumStructure?.concentrationCourse.groups[0],
      advanceConcen: curriculumStructure?.concentrationCourse.groups[1],
    });
    setFreeElecCourse({
      ...curriculumStructure?.freeElecCourse,
    });
  }, [curriculumStructure]);

  useEffect(() => {
    // console.log(geEduCourse);
  }, [geEduCourse, concentrationCourse, freeElecCourse]);

  return (
    <>
      <div>
        <Accordion alwaysOpen>
          <Accordion.Panel>
            <GeAccordionPanel geEduCourse={geEduCourse} />
          </Accordion.Panel>

          <Accordion.Panel>
            <ConcenAccordionPanel concentrationCourse={concentrationCourse} />
          </Accordion.Panel>

          <Accordion.Panel>
            <FreeElecAccordionPanel freeElecCourse={freeElecCourse} />
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}
