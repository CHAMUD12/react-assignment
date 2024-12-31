export function Modal(props) {
    return (
        <div>
            {props.type === 'customer' ? (
                <>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input"
                        onChange={(e) => props.setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="input"
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="input"
                        onChange={(e) => props.setPhone(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Item Code"
                        className="input"
                        onChange={(e) => props.setItem_code(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input"
                        onChange={(e) => props.setCategory(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Unit Price"
                        className="input"
                        onChange={(e) => props.setUnit_price(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Quantity"
                        className="input"
                        onChange={(e) => props.setQty(e.target.value)}
                    />
                </>
            )}
            <button onClick={props.handleSubmit} className="btn-primary">
                {props.children}
            </button>
        </div>
    );
}
