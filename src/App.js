import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./css/app.css";
import Dashboard from "./pages/Dashboard";
import TeacherPannel from "./components/teacher/TeacherPannel";
import AdminPannel from "./components/admin/AdminPannel";
import StudentPannel from "./components/student/StudentPannel";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { studentList, teacherList } from "./lib/helper";
import BanggobondhuConrenr from "./pages/BanggobondhuConrenr";
import Hsc from "./components/hsc/Hsc";

const App = () => {
    const [show, setShow] = useState("home");

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hsc" element={<Hsc />} />
                <Route
                    path="/student-dashboard"
                    element={
                        <Dashboard
                            ui="student_pannel"
                            pannel="Student Pannel"
                            lists={studentList}
                            setShow={setShow}
                            children={<StudentPannel show={show} />}
                        />
                    }
                />
                <Route
                    path="/teacher-dashboard"
                    element={
                        <Dashboard
                            ui="teacher_pannel"
                            pannel="Teacher Pannel"
                            lists={teacherList}
                            setShow={setShow}
                            children={<TeacherPannel show={show} />}
                        />
                    }
                />
                <Route
                    path="/admin-dashboard"
                    element={
                        <Dashboard
                            ui="admin_pannel"
                            children={<AdminPannel />}
                        />
                    }
                />

                <Route
                    path="/bongobondhu-corner"
                    element={<BanggobondhuConrenr />}
                />
            </Routes>
        </Layout>
    );
};
export default App;
