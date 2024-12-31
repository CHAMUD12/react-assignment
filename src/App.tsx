import './App.css'
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Add} from "./pages/Add.tsx";
import {Delete} from "./pages/Delete.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/add', element : <Add/>},
                { path : '/delete', element : <Delete/>},
                { path : '/update', element : <UpdateCustomer/>}
            ]
        },
    ])

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes} />
                </ItemProvider>
            </CustomerProvider>
        </>
    );
}

export default App
