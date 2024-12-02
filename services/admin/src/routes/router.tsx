import RootLayout from "@/layouts/root";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Suspense } from "react";
import { About } from "@/pages/about";
import { adminRoutes } from "@packages/shared/src/routes/admin";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={adminRoutes.root} element={<RootLayout />}>
            <Route path={adminRoutes.about} element={<Suspense fallback={'Loading...'}><About /></Suspense>} />
        </Route>
    )
);

export default router;
