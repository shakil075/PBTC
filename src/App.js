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

const App = () => {
    const [show, setShow] = useState("home");

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/student-dashboard"
                    element={
                        <Dashboard
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
                            lists={teacherList}
                            children={<TeacherPannel />}
                        />
                    }
                />
                <Route
                    path="/admin-dashboard"
                    element={<Dashboard children={<AdminPannel />} />}
                />
            </Routes>
        </Layout>
    );
};
export default App;
