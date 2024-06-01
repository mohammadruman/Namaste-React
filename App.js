//Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. It is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.
//Hot Module Reloding  (HMR) is a feature to update the application without full page reload. It is like a live reload. It is a Webpack feature that updates the application when the code changes without refreshing the browser.
//File watcher Alogorithm c++
//Parcel uses a file watcher algorithm to detect changes in the file system. When a file is changed, it will be recompiled and the browser will be refreshed. This is a very efficient way to update the application without full page reload.
//Minify the code
//Cleaning the code
// Development and production build
//image Optimization
//catching while development
//compression
//zero configuration
//Transitive dependencies are the dependencies of the package that your package depends on. For example, if your package depends on package A, and package A depends on package B, then package B is a transitive dependency of your package.


import React from "react";
import ReactDOM from "react-dom/client";

  const heading = React.createElement("h1",{
        id:"title",
        style:{
            color:"red"
        }
    },"Namaste Ruman");
     const heading2 = React.createElement("h1", {
            id: "title",
            style: {
                color: "red"
            }
        }, "Heading 2");

        const container = React.createElement("div",{
            id:"container",   
        },[heading,heading2]);
    const root =  ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
