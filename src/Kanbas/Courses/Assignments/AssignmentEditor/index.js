import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment as updateAssignmentAction, selectAssignment } from "../assignmentsReducer";
import { createAssignment, updateAssignment } from "../client";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const navigate = useNavigate();

    const handleAddAssignment = (assignment) => {
        createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };

    const handleUpdateAssignment = async (assignment) => {
        const updatedAssignment = await updateAssignment(assignment);
        dispatch(updateAssignmentAction(updatedAssignment));
    };

    const handleSave = () => {
        if (assignmentId === "new") {
            const newAssignment = {
                ...assignment,
                _id: new Date().getTime().toString(),
            };
            handleAddAssignment(newAssignment);
        } else {
            handleUpdateAssignment(assignment);
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const aFrom = assignment.availableFromDate;
    const aUntil = assignment.availableUntilDate;

    return (
        <div style={{ paddingTop: "40px", width: "100%" }}>
            <span className="float-end">
                <span className="fa-stack fa-xs mb-2 me-2">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{ color: "green" }}/>
                    <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: "white" }}/>
                </span>
                <span style={{ color: "green" }}>Published</span>
                <button className="btn home-btn mx-2" style={{
                    backgroundColor: "white",
                    marginRight: "4px",
                    border: "1px solid whitesmoke",
                }}>
                    <FontAwesomeIcon icon={faEllipsisVertical}/>{" "}
                </button>
            </span>

            <hr className="assignmentHR"/>
            <span className="bold">Assignment Name</span>
            <input value={assignment.title} className="form-control mb-3 mt-1" onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}/>
            <span className="bold">Assignment Description</span>
            <input value={assignment.description} className="form-control mb-2 mt-1" onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}/>

            <div className="row mt-4">
                <div className="col-3 text-end">
                    <span className="mb-5 edit-col1">Points</span>
                    <span className="edit-col1 mt-4">Assign</span>
                </div>

                <div className="col text-start me-3">
                    <span className="mb-5 mb-xl-4 edit-col2">
                        <input className="form-control" type="number" value={assignment.points} onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}/>
                    </span>

                    <ul className="list-group edit-lg mt-5 mt-xl-4">
                        <li className="list-group-item edit-lgi">
                            <div className="form-group ms-1">
                                <div className="form-group">
                                    <label htmlFor="autocomplete-input">
                                        <b>Assign To</b>
                                    </label>
                                    <input type="text" className="form-control" id="autocomplete-input" placeholder="Everyone"/>
                                </div>
                            </div>
                        </li>

                        <label htmlFor="due-date" className="ms-4 mt-2">
                            <b>Due</b>
                        </label>

                        <input onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))} className="ms-4" type="date" id="due-date" value={assignment.availableUntilDate}/>
                        <div className="container m-0 mb-4">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="avail-date" className="mt-3 me-2">
                                        <b>Available from</b>
                                    </label>
                                    <input onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))} type="date" id="avail-date" value={aFrom}/>
                                </div>

                                <div className="col">
                                    <label htmlFor="until-date" className="mt-3 me-2">
                                        <b>Until</b>
                                    </label>
                                    <input onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))} type="date" id="until-date" value={aUntil}/>
                                </div>
                            </div>
                        </div>

                        <li className="list-group-item edit-lgi text-center" style={{ backgroundColor: "gray" }}>
                            <FontAwesomeIcon icon={faPlus} className="me-2"/>
                            <i className="fa fa-plus fa-sm" aria-hidden="true" style={{ fontWeight: 200 }}></i>
                            Add
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="mt-4"/>
            <div className="float-end me-3">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger me-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
            <hr className="assignmentHR"/>
        </div>
    );
}

export default AssignmentEditor;
