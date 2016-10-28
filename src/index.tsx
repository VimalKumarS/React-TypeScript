// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
///<reference path="../typings/tsd.d.ts"/>
import * as React from "react";
import * as ReactDOM  from "react-dom";
import {Link } from "react-router";

export  class IndexPage extends React.Component<any, any> {
    render() {
        return <h1>Hello</h1>
    }
}



ReactDOM.render(
    <IndexPage compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);