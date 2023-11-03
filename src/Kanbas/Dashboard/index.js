import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardDB from "../Images/card_darkblue.png";
import cardLB from "../Images/card_lightblue.png";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
    const imageMap = {
        darkblue: cardDB,
        lightblue: cardLB,
    };

    return (
        <div className="col dash-col">
            <h1 className="dash-header">
                Dashboard <hr style={{ marginTop: "4px" }} />
            </h1>

            <h3 className="dash-subheader">
                Published Courses ({courses.length}) <hr style={{ marginTop: "2px" }} />
            </h3>

            <div className="container me-3 my-3">
                <h5>Add Course</h5>
                <input value={course.name} className="form-control mt-2" type={"text"} onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
                <input value={course.abbreviation} className="form-control mt-2" type={"text"} onChange={(e) => setCourse({ ...course, abbreviation: e.target.value })}/>
                <input value={course.number} maxLength={5} className="form-control mt-2" onChange={(e) => setCourse({ ...course, number: e.target.value })}/>
                <input value={course.numberLong} maxLength={6} className="form-control mt-2" onChange={(e) => setCourse({ ...course, numberLong: e.target.value })}/>
                <select value={course.color} className="form-control mt-2" onChange={(e) => setCourse({ ...course, color: e.target.value })}>
                    <option value="darkblue">Dark Blue</option>
                    <option value="lightblue">Light Blue</option>
                </select>

                <div className="container my-2">
                    <div className="row">
                        <div className="col-1">
                            <label htmlFor="startDate">Start Date: </label>
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="date" id="startDate" onChange={(e) => setCourse({ ...course, startDate: e.target.value })}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <label htmlFor="endDate">End Date: </label>
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="date" id="endDate" onChange={(e) => setCourse({ ...course, endDate: e.target.value })}/>
                        </div>
                    </div>
                </div>

                <button className="btn btn-success m-3" onClick={addNewCourse}>
                    Add Couse
                </button>
                <button className="btn btn-info me-2 " onClick={updateCourse}>
                    Update
                </button>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-xxl-4" style={{ marginLeft: "20px", width: "100%" }}>
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div class="col dash-card mb-3">
                            <div className="card">
                                <img src={imageMap[course.color]} className="card-img-top" alt="Course card"/>
                                <div className="card-body">
                                    <h6 className="card-title">
                                        <a style={{ color: course.color }} href="#" className="card-link">
                                            {course.abbreviation} {course.number} {course.name}
                                        </a>
                                    </h6>

                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <h6 className="card-text subtext1">
                                            {course.abbreviation}.{course.number}.{course["numberLong"]}
                                            <p className="subtext2">
                                                {course["numberLong"]} Fall 2023 Semester Full Term
                                            </p>
                                            <div class="d-flex justify-content-center align-items-center">
                                                <button className="btn btn-info me-2 " onClick={(event) => { event.preventDefault(); setCourse(course); }}>
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger " onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                                                    Delete
                                                </button>
                                            </div>
                                        </h6>
                                    </a>

                                    <FontAwesomeIcon icon={faFileLines} className="fa-regular fa-md" style={{ color: "grey", left: "5px", bottom: "5px", position: "relative" }} prefix="far"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;