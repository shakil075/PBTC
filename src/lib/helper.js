import results from "../img/icons/results2.png";
import routine from "../img/icons/routine.png";
import teacher from "../img/icons/male.png";
import atd from "../img/icons/attendance.png";

export const studentList = [
    { name: "Results", icon: results },
    { name: "Routine", icon: routine },
    { name: "Teacher", icon: teacher },
];
export const teacherList = [
    { name: "Attendance", icon: atd },
    { name: "Result", icon: results },
    { name: "Routine", icon: routine },
];

export const events = [
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Football Tournament",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
];

export const courses = [
    { subject: "Bangla 1st Paper", teacher: "Mannan bhuiyan" },
    { subject: "English 1st Paper", teacher: "Peter Parker" },
    { subject: "Math", teacher: "Dexpo" },
    { subject: "Physics", teacher: "Tariqul Nasir" },
    { subject: "Higher Math", teacher: "Red Bull" },
    { subject: "Chemistry", teacher: "Newton" },
    { subject: "Agriculture", teacher: "Sakib Al Hasan" },
    { subject: "Socialogy", teacher: "Mushfikur Rahim" },
];

export const attendance = [
    { subject: "Bangla 1st Paper", present: true },
    { subject: "English 1st Paper", present: true },
    { subject: "Math", present: true },
    { subject: "Physics", present: false },
    { subject: "Higher Math", present: true },
    { subject: "Chemistry", present: false },
    { subject: "Agriculture", present: true },
    { subject: "Socialogy", present: false },
];

export const mark = [
    { heading: "Bangla 1st Paper", percent: "60" },
    { heading: "Bangla 1st Paper", percent: "70" },
    { heading: "Bangla 1st Paper", percent: "67" },
    { heading: "Bangla 1st Paper", percent: "90" },
    { heading: "Bangla 1st Paper", percent: "80" },
    { heading: "Bangla 1st Paper", percent: "33" },
];

export const tcourses = [
    { subject: "Bangla 1st Paper", degree: "HSC 1st year" },
    { subject: "English 1st Paper", degree: "HSC 1st year" },
    { subject: "Math", degree: "HSC 2nd year" },
    { subject: "Physics", degree: "HSC 1st year" },
    { subject: "Higher Math", degree: "HSC 1st year" },
    { subject: "Chemistry", degree: "HSC 2nd year" },
    { subject: "Agriculture", degree: "HSC 1st year" },
    { subject: "Socialogy", degree: "HSC 2nd year" },
];

export const hsc = [];

export const hscCourses = [
    { course_id: "687127871", course_name: "Bangla 1st" },
    { course_id: "456717871", course_name: "Bangla 2nd" },
    { course_id: "287627871", course_name: "English 1st" },
    { course_id: "385127891", course_name: "Physics 1st" },
    { course_id: "887377874", course_name: "Chemistry 1st" },
    { course_id: "580127870", course_name: "Biology 1st" },
];

export const degreeCourses = [
    { course_id: "68127871", course_name: "Machine 1" },
    { course_id: "45717871", course_name: "Machine 2" },
    { course_id: "28627871", course_name: "Power 1" },
    { course_id: "38127891", course_name: "Power 2" },
    { course_id: "88777874", course_name: "Signal System" },
    { course_id: "58017870", course_name: "Communication" },
];

export const allStudents = [
    { student_id: "68127871", student_name: "Ahsan", course_id: "28627871" },
    { student_id: "45717871", student_name: "Shakil", course_id: "28627871" },
    { student_id: "28627871", student_name: "Rakib", course_id: "28627871" },
    { student_id: "38127891", student_name: "Golam", course_id: "58017870" },
    { student_id: "88777874", student_name: "Rafeed", course_id: "28627871" },
    { student_id: "58017870", student_name: "Aumit", course_id: "58017870" },
    { student_id: "687127871", student_name: "Ahashan", course_id: "58017870" },
    { student_id: "456717871", student_name: "Kowshik", course_id: "28627871" },
    { student_id: "287627871", student_name: "Sufiyan", course_id: "58017870" },
    { student_id: "385127891", student_name: "Sourov", course_id: "28627871" },
    { student_id: "887377874", student_name: "Faisal", course_id: "58017870" },
    { student_id: "580127870", student_name: "Nazmul", course_id: "58017870" },
];
