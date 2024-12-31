import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";

export function Delete() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);
    const[items, item_dispatch] = useContext(ItemContext);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const [item_code, setItemCode] = useState("");
    const [category, setCategory] = useState("");
    const[unit_price, setUnit_price] = useState("");
    const[qty, setQty] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name,email,phone);
        dispatch({type:'DELETE_CUSTOMER',payload:deleteCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const deleteItem = new Item(item_code,category,unit_price,qty);
        item_dispatch({type:'DELETE_ITEM', payload:deleteItem});
        navigate('/');
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h2></header>
                <br/>
                <Modal type="customer" handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Delete
                    Customer</Modal>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Item</h2></header>
                <br/>
                <Modal
                    type="item"
                    handleSubmit={handleItemSubmit}
                    setItem_code={setItemCode}
                    setCategory={setCategory}
                    setUnit_price={setUnit_price}
                    setQty={setQty}
                >
                    Delete Item
                </Modal>
            </div>
        </>
    );
}