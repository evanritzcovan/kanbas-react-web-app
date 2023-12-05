import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as service from "./service";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        numberLong: "New Number Long",
        abbreviation: "New Abbreviation",
        color: "darkblue",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const init = async () => {
        const courses = await service.fetchCourses();
        setCourses(courses);
    };

    useEffect(() => {
        init();
    }, []);

    const addNewCourse = async () => {
        try {
            const newCourse = await service.addNewCourse(course);
            setCourses([newCourse, ...courses]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCourse = async (course) => {
        try {
            await service.deleteCourse(course);
            setCourses(courses.filter((c) => c._id !== course._id));
        } catch (error) {
            console.log(error);
        }
    };

    const updateCourse = async (course) => {
        try {
            const updatedCourse = await service.updateCourse(course);
            setCourses(
                courses.map((c) => {
                    return c._id === updatedCourse._id ? updatedCourse : c;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>
                <div style={{ width: "100%" }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="signin"/>}/>
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />
                        }/>
                        <Route path="Account" element={<Account/>}/>
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                        <Route path="/signin" element={<Signin/>}/>{" "}
                        <Route path="/signup" element={<Signup/>}/>{" "}
                        <Route path="/users" element={<UserTable/>}/>
                        <Route path="/Account/:id" element={<Account/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;
