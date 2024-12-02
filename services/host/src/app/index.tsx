import React from "react";
import { Link, NavLink } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";


export const App: React.FC = () => {

    return (
        <div data-testid={"App.DataTestId"}>
            <h1>page</h1>
            <Link to={adminRoutes.about}>
                about
            </Link>
            <br/>
            <Link to={shopRoutes.main}>
                shop
            </Link>
            <br/>
            <Link to={`${shopRoutes.main}/${shopRoutes.second}`}>
                blabla
            </Link>
        </div>
    );
};
