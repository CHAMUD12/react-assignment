import {Item} from "../models/Item.ts";

export const initialState: Item[] = [];

export function ItemReducer(state: Item [], action: { type: string, payload: Item }) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            return state.map((item: Item) =>
                item.item_code === action.payload.item_code ?
                    {
                        ...item,
                        category: action.payload.category,
                        unit_price: action.payload.unit_price,
                        qty: action.payload.qty
                    }
                    : item
            );
        case 'DELETE_ITEM':
            return state.slice(0, -1);

    }
}