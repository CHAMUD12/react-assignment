import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../components/Modal";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";

export function Add() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);
    const [items, item_dispatch] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [item_code, setItemCode] = useState("");
    const [category, setCategory] = useState("");
    const[unit_price, setUnit_price] = useState("");
    const[qty, setQty] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const newItem = new Item(item_code,category,unit_price,qty);
        item_dispatch({type:'ADD_ITEM', payload:newItem});
        navigate('/');
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h2></header>
                <br/>

                <Modal type="customer" handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Add
                    Customer</Modal>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h2></header>
                <br/>

                <Modal
                    type="item"
                    handleSubmit={handleItemSubmit}
                    setItem_code={setItemCode}
                    setCategory={setCategory}
                    setUnit_price={setUnit_price}
                    setQty={setQty}
                >
                    Add Item
                </Modal>
            </div>
        </>
    );
}