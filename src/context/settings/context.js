import React, { useState } from 'react';

export const SettingContext = React.createContext();

export default function Settings(props) {
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const state = {
        display: false,
        itemsPerPage: itemsPerPage,
        sortType: "",
        setItemsPerPage: setItemsPerPage,
    };

    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider >
    )
}
