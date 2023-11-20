import ModuleList from "./ModuleList";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCircle, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

function Modules() {
    return (
        <div style={{ paddingTop: "40px", width: "100%" }}>
        <div style={{ float: "right", display: "inline" }}>
            <button className="btn home-btn"
            style={{ backgroundColor: "white", marginRight: "4px", border: "1px solid whitesmoke" }}>
            Collapse All
            </button>
            <button className="btn home-btn"
            style={{ backgroundColor: "white", marginRight: "4px", border: "1px solid whitesmoke" }}>
            View Progress
            </button>
            <div className="dropdown home-dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{ backgroundColor: "white", border: "none", color: "black", marginRight: "4px" }}>
                    <span className="fa-stack">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{ color: "green" }}/>
                    <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: "white" }}/>
                    </span>
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            <span className="fa-stack text-center icon-span"></span>
                            Publish All
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Publish All modules and items
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Publish modules only
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Unpublish All
                        </a>
                    </li>
                </ul>
            </div>
            <button className="btn module-btn"
                style={{ color: "white", backgroundColor: "#cf3036", marginRight: "4px", border: "1px solid whitesmoke" }}>
                <FontAwesomeIcon icon={faPlus}/> Module
            </button>
            <button className="btn home-btn"
                style={{ backgroundColor: "white", marginRight: "4px", border: "1px solid whitesmoke" }}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>{" "}
            </button>
        </div>
        <hr className="modulesHR"/>
        <ModuleList/>
        </div>
    );
}

export default Modules;
