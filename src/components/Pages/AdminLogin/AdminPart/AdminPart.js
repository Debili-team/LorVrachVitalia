import classes from "./AdminPart.module.scss"
import React from "react";
import AuthenticatedComponent from "../../../../AuthenticatedComponent";

import axios from "axios";

import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";


const AdminPart = () => {
    let ip = require("ip");
    let string = "IP: " + ip.address()


    return (
        <>
            <div className={classes.Menu}>
                <div className={classes.ButtonWrapper}>
                    <NavLink to="/admin/Pages/Questions" className={classes.Button}>Вопросы</NavLink>
                    <NavLink to="/admin/Pages/Posts" className={classes.Button}>Посты</NavLink>
                    <NavLink to="/admin/Pages/Contacts" className={classes.Button}>Контакты</NavLink>
                </div>
            </div>
            <Switch>
                <Route path="/admin/Pages/Questions" >

                </Route>
                <Route path="/admin/Pages/Posts" >

                </Route>
                <Route path = "/admin/Pages/Contacts">

                </Route>
               {/*<AuthenticatedComponent>*/}
                <Route path = "/admin/Pages">
                    <p className={classes.Title}>Добро пожаловать Кот Вячеслав Федоровичь</p>
                    <p className={classes.IP}>{string}</p>
                </Route>
               {/*</AuthenticatedComponent>*/}
            </Switch>
        </>
    );
};

export default AdminPart;