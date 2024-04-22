import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CurriculumStructure {
    @PrimaryGeneratedColumn()
    id: string

    @Column('simple-json')
    corriculum_structure: string
    
}


const x = {
    "curriculumName": "หลักสูตรทันตแพทยศาสตรบัณฑิต",
    "totalCredit": "231",
    "geEduCourse": {
        "requiredEduCourse": {
            "totalCredit": "24",
            "subjGroup01": {
                "name": "ศาสตร์พระราชาและประโยชน์เพื่อนมนุษย์",
                "totalCredit": "4",
                "groups": null
            },
            "subjGroup02": {
                "name": "ความเป็นพลเมืองและชีวิตที่สันติ",
                "totalCredit": "5",
                "groups": null
            },
            "subjGroup03": {
                "name": "การเป็นผู้ประกอบการ",
                "totalCredit": "1",
                "groups": null
            },
            "subjGroup04": {
                "name": "การอยู่อย่างรู้เท่าทันและการรู้ดิจิทัล",
                "totalCredit": "4",
                "groups": [
                    {
                        "name": "การอยู่อย่างรู้เท่าทัน",
                        "totalCredit": "2"
                    },
                    {
                        "name": "การรู้ดิจิทัล",
                        "totalCredit": "2"
                    }
                ]
            },
            "subjGroup05": {
                "name": "การคิดเชิงระบบ การคิดเชิงตรรกะและตัวเลข",
                "totalCredit": "4",
                "groups": [
                    {
                        "name": "การคิดเชิงระบบ",
                        "totalCredit": "2"
                    },
                    {
                        "name": "การคิดเชิงตรรกะและตัวเลข",
                        "totalCredit": "2"
                    }
                ]
            },
            "subjGroup06": {
                "name": "ภาษาและการสื่อสาร",
                "totalCredit": "4",
                "gropus": null
            },
            "subjGroup07": {
                "name": "สุนทรียศาสตร์และกีฬา",
                "totalCredit": "2",
                "groups": null
            },
        },
        "elecEduCourse": {
            "totalCredit": "6",
            "groups": [
                {
                    "name": "รายวิชาคณะทันตแพทยศาสตร์",
                    "totalCredit": "3"
                },
                {
                    "name": "รายวิชาคณะศิลปศาสตร์",
                    "totalCredit": "3"
                }
            ]
        }
    },
    "concentrationCourse": {
        "totalCredit": "195",
        "groups": [
            {
                "name": "กลุ่มพื้นฐานวิชาชีพ",
                "totalCredit": "39"
            },
            {
                "name": "กลุ่มวิชาชีพ",
                "totalCredit": "156"
            }
        ]
    },
    "freeElecCourse": {
        "totalCredit": 6,
        "groups": null
    }
}