import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return (
        <>
            <Navigation></Navigation>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}