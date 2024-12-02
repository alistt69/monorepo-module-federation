import React from "react";
import { NavLink } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const ShopPage = () => {
    return (
        <h1>
            Shop Pageaaa
            <div>
                <NavLink to={shopRoutes.second}>
                    go second
                </NavLink>
            </div>
        </h1>
    )
}

export default ShopPage;