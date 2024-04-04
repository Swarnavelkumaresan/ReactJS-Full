import React from "react";
import ReactDOM from "react-dom/client";

// JSX 

const Heading = () => (
    <h1 className="head" tabIndex={1}>
        S K
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Heading />
        <h1 className="head">
            React Functional Components
        </h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);