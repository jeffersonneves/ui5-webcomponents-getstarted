import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { Home } from "./Home";
import { Detail } from "./Detail";

import "@ui5/webcomponents-icons/dist/icons/add.js";

import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

export function GetStarted() {

    const history = useHistory();
    const handleLogoClick = () => {
        history.push("./");
    };

    return <>
        <ShellBar primaryTitle="My App" logo={"reactLogo.png"} onLogoClick={handleLogoClick} profile={"profilePictureExample.png"}>
            <ShellBarItem icon="add" text="Add" />
        </ShellBar>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/detail" component={Detail} />
            <Redirect from="/" to="/home" />
        </Switch>
    </>;
}