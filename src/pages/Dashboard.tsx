import {useContext} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";
import "./Dashboard.css"

export function Dashboard() {

    const [customers, dispatch] = useContext(CustomerContext);
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

            {/* main section */}
            <div className="grid grid-cols-2">
                {/* left  */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1 text-custom-color">
                        Customers
                    </h1>
                    <table className="table-auto border border-gray-200 w-full">
                        <thead>
                        <tr>
                            <td className="custom-table-td">Name</td>
                            <td className="custom-table-td">Email</td>
                            <td className="custom-table-td">Phone</td>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer: Customer) => (
                            <tr>
                                <td className="custom-table-td">{customer.name}</td>
                                <td className="custom-table-td text-gray-600">
                                    {customer.email}
                                </td>
                                <td className="custom-table-td">{customer.phone}</td>
                            </tr>
                            // <div key={customer.email}>
                            //   {customer.name + " " + customer.email + " " + customer.phone}
                            // </div>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* right */}
                <div className="p-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Item</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {customers.map((customer: Customer) => (
                            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                                <h2 className="text-lg font-semibold text-blue-600">
                                    {customer.name}
                                </h2>
                                <p className="text-gray-600">{customer.email}</p>
                                <p className="text-gray-600">{customer.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}