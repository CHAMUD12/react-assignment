import './App.css'
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {RootLayout} from "./components/RootLayout.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/add', element : <AddCustomer/>},
                { path : '/delete', element : <DeleteCustomer/>},
                { path : '/update', element : <UpdateCustomer/>}
            ]
        },
    ])

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes} />
            </CustomerProvider>
        </>
    );
}

export default App
