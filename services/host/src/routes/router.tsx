import RootLayout from "@/layouts/root";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';

const shopRoutesArray = shopRoutes.routes;
const adminRoutesArray = adminRoutes.routes;


function convertRoutesToJSX(routes) {
    return routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
            {route.children && convertRoutesToJSX(route.children)}
        </Route>
    ));
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {convertRoutesToJSX(shopRoutes.routes)}
            {convertRoutesToJSX(adminRoutes.routes)}
        </Route>
    )
);

console.log(router)
