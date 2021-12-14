import React, { useState } from 'react';

export const SettingContext = React.createContext();

export default function Settings(props) {
    const [list, setList] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [displayComplete, setDisplayComplete] = useState(true);

    const displayCompleteFun = () => {
        setDisplayComplete(!displayComplete);
    }
    const state = {
        list: list,
        setList: setList,
        displayComplete: displayComplete,
        itemsPerPage: itemsPerPage,
        sortType: "",
        setItemsPerPage: setItemsPerPage,
        setDisplayComplete: setDisplayComplete,
        displayCompleteFun: displayCompleteFun
    };
    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider >
    )
}
