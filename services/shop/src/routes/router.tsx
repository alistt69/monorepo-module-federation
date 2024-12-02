import RootLayout from "@/layouts/root";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Suspense } from "react";
import { Shop } from "@/pages/shop";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import UserCard from "@packages/shared/src/components/userCard";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={shopRoutes.main} element={<RootLayout />}>
            <Route path={shopRoutes.main} element={<Suspense fallback={'Loading...'}><Shop /></Suspense>} />
            <Route path={shopRoutes.second} element={<Suspense fallback={'Loading...'}><UserCard username={'alistt69'} /></Suspense>} />
        </Route>
    )
);

export default router;
