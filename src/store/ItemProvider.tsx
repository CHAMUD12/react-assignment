import {createContext, useReducer} from "react";
import {ItemReducer, initialState} from "../reducers/ItemReducer";

export const ItemContext  = createContext();

export function ItemProvider({children}) {

    const [items, item_dispatch] = useReducer(ItemReducer, initialState);

    return (
        <ItemContext.Provider value={[items, item_dispatch]}>
            {children}
        </ItemContext.Provider>
    );
}