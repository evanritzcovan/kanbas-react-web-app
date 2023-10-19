import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport, faShareFromSquare, faBullseye, faChartSimple, faBullhorn, faBell, fa1, faCircle, faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import "../Modules/index.css";

function Status() {
    return (
        <div className="mt-3">
            <h3 className="text-center mt-5">Course Status</h3>
            <div style={{ marginBottom: "10px" }}>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    <FontAwesomeIcon icon={faFileImport}/> Import Existing Content
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    <FontAwesomeIcon icon={faShareFromSquare}/> Import From Commons
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    {" "}
                    <FontAwesomeIcon icon={faBullseye}/> Choose Home Page
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    {" "}
                    <FontAwesomeIcon icon={faChartSimple}/> View Course Stream
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    {" "}
                    <FontAwesomeIcon icon={faBullhorn}/> New Announcements
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    {" "}
                    <FontAwesomeIcon icon={faChartSimple}/> New Analytics
                </button>
                <button className="btn home-status-btn text-start" style={{ backgroundColor: "whitesmoke", border: "1px solid lightgray" }}>
                    {" "}
                    <FontAwesomeIcon icon={faBell}/> View Course Notifications
                </button>
            </div>
            <h5 className="mb-0 mt-3">To Do</h5>
            <hr/>
            <div className="row align-items-start" style={{ marginBottom: "25px" }}>
                <div className="col-2" style={{ marginRight: "15px" }}>
                    <span className="fa-stack">
                        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{ width: "100%", color: "maroon", textAlign: "center" }}/>
                        <FontAwesomeIcon icon={fa1} className="fa-stack-1x" style={{ color: "white" }}/>
                    </span>
                </div>
                <div className="col">
                    <span style={{ color: "maroon" }}> Grade A1 - ENV + HTML</span>
                    <br/>
                    <span style={{ color: "lightgray" }}>100 points • Sep 18 at 11:59pm</span>
                </div>
                <div className="col-1">
                    <i className="fa-solid fa-x fa-xs" style={{ color: "gray" }}></i>
                </div>
            </div>

            <div className="container" style={{ width: "100%", padding: "0px" }}>
                <h5 style={{ marginBottom: "10px" }}>Coming Up</h5>
                <span style={{ float: "right", color: "maroon", fontSize: "15px" }}>
                    <a href="#" className="status-link">
                        <FontAwesomeIcon icon={faCalendarXmark}/> View Calendar
                    </a>
                </span>
                <br/>
                <hr/>
                <ul style={{ listStyle: "none" }}>
                <li>
                    <FontAwesomeIcon icon={faCalendarXmark} className="me-3"/>
                    <a href="#" className="status-link">
                        {" "}
                        Lecture
                    </a>
                    {" "}
                    <br/>
                    <span className="status-text">
                        CS4550.12631.202410
                        <br/>
                        Sep 7 at 11:45am
                    </span>
                </li>

                <li>
                    <FontAwesomeIcon icon={faCalendarXmark} className="me-3"/>
                    <a href="#" className="status-link">
                        CS 4550 Lecture
                    </a>
                    {" "}
                    <br/>
                    <span className="status-text">
                        CS4550.12631.202410
                        <br/>
                        Sep 11 at 11:45am
                    </span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarXmark} className="me-3"/>
                    <a href="#" className="status-link">
                        CS 5610 Lecture
                    </a>
                    {" "}
                    <br/>
                    <span className="status-text">
                        CS5610 06 SP23
                        <br/>
                        Sep 11 at 6pm
                    </span>
                </li>
                <li>
                    <a href="#" className="status-link" style={{ fontSize: "10px" }}>
                    12 more in the next week ...
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Status;
