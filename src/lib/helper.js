import results from "../img/icons/results2.png";
import routine from "../img/icons/routine.png";
import teacher from "../img/icons/male.png";
import atd from "../img/icons/attendance.png";
import science from "../img/Flaticons/science/microscope.png";
import Commerce from "../img/Flaticons/commerce/strategy.png";
import arts from "../img/Flaticons/arts/swatches.png";
import courseScience from "../img/pages/science.png";
import courseChemistry from "../img/pages/chemistry.png";
import courseBiology from "../img/pages/bacteria.png";
import courseMath from "../img/pages/math.png";
import courseIct from "../img/pages/telecommunication.png";
import courseBangla from "../img/pages/books.png";
import courseEnglish from "../img/pages/english.png";
import physicsLab from "../img/pages/physics-lab.jpg";
import chemistryLab from "../img/pages/chemistry.webp";
import biologyLab from "../img/pages/biology-lab.webp";
import ictLab from "../img/pages/ict-lab.jpg";
import avatar from "../img/avatar.png";

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

export const hscSubjects = [
    {
        name: "Science",
        image: science,
        cls: "science",
    },
    {
        name: "Commerce",
        image: Commerce,
        cls: "commerce",
    },
    {
        name: "Arts",
        image: arts,
        cls: "arts",
    },
];

export const degreeSubjects = [
    {
        name: "BACHELOR OF ARTS",
        image: science,
        cls: "science",
    },
    {
        name: "BACHELOR OF SOCIAL SCIENCE",
        image: Commerce,
        cls: "commerce",
    },
    {
        name: "BACHELOR OF SCIENCE",
        image: arts,
        cls: "arts",
    },
    {
        name: "BACHELOR OF BUSINESS STUDIES",
        image: science,
        cls: "science",
    },
];

export const courseSubject = [
    {
        name: "PHYSICS",
        image: courseScience,
    },
    {
        name: "CHEMISTRY",
        image: courseChemistry,
    },
    {
        name: "BIOLOGY",
        image: courseBiology,
    },
    {
        name: "HIGHER MATH",
        image: courseMath,
    },
    {
        name: "ICT",
        image: courseIct,
    },
    {
        name: "BENGALI",
        image: courseBangla,
    },
    {
        name: "ENGLISH",
        image: courseEnglish,
    },
];

export const labLists = [
    {
        name: "Physics Lab",
        image: physicsLab,
        color: "green",
    },
    {
        name: "Chemistry Lab",
        image: chemistryLab,
        color: "yellow-back",
    },
    {
        name: "Zoology Lab",
        image: biologyLab,
        color: "maroon-back",
    },
    {
        name: "Botany Lab",
        image: biologyLab,
        color: "green",
    },
    {
        name: "Math Lab",
        image: biologyLab,
        color: "yellow-back",
    },
    {
        name: "ICT Lab",
        image: ictLab,
        color: "maroon-back",
    },
];

export const teacherCardList = [
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },

    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Ahsan Shakil",
        image: avatar,
        details: "Bsc engg in EEE",
        course: "React js",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
    {
        name: "Golam Rafeed",
        image: avatar,
        details: "Bsc engg in CSE",
        course: "Java",
    },
];

export const scienceIconLists = [
    { speed: -7, icon: "fa-divide" },
    { speed: 4, icon: "fa-equals" },
    { speed: 3, icon: "fa-square-root-variable" },
    { speed: -6, icon: "fa-percent" },
    { speed: 8, icon: "fa-laptop" },
    { speed: -2, icon: "fa-user-doctor" },
    { speed: 4, icon: "fa-wheelchair-move" },
    { speed: -9, icon: "fa-atom" },
    { speed: 11, icon: "fa-flask-vial" },
    { speed: -8, icon: "fa-microscope" },
    { speed: -5, icon: "fa-frog" },
    { speed: 2, icon: "fa-rocket" },
];

export const commerceIconLists = [
    { speed: -7, icon: "fa-cash-register" },
    { speed: 4, icon: "fa-at" },
    { speed: 3, icon: "fa-sack-dollar" },
    { speed: -6, icon: "fa-briefcase-blank" },
    { speed: 8, icon: "fa-laptop" },
    { speed: -2, icon: "fa-receipt" },
    { speed: 4, icon: "fa-calendar-lines-pen" },
    { speed: -9, icon: "fa-bullhorn" },
    { speed: 11, icon: "fa-users" },
    { speed: -8, icon: "fa-building-shield" },
    { speed: -5, icon: "fa-7" },
    { speed: 2, icon: "fa-buysellads" },
];

export const artsIconLists = [
    { speed: -7, icon: "fa-artstation" },
    { speed: 4, icon: "fa-earth-americas" },
    { speed: 3, icon: "fa-flag" },
    { speed: -6, icon: "fa-person-skiing-nordic" },
    { speed: 8, icon: "fa-chart-pie" },
    { speed: -2, icon: "fa-arrow-up-right-dots" },
    { speed: 4, icon: "fa-compass" },
    { speed: -9, icon: "fa-quote-left" },
    { speed: 11, icon: "fa-scale-balanced" },
    { speed: -8, icon: "fa-section" },
    { speed: -5, icon: "fa-gavel" },
    { speed: 2, icon: "fa-arrows-spin" },
];
