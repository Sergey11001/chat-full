import React, {useEffect, useState} from 'react';
import {Dialogs as BaseDialogs} from "../components";
import {connect} from "react-redux";
import {dialogsActions} from "../redux/actions";

const Dialogs = ({fetchDialogs, items, userId, setCurrentDialog}) => {
    const [searchValue, setSearchValue] = useState('')
    const [filtered, setFiltered] = useState([])
    const onSearch = (value) => {
        setFiltered(
            items.filter((item) => item.user.fullName.toLowerCase().indexOf(value.toLowerCase())>=0)
        )
        setSearchValue(value)
    }

    useEffect(() => {
        if(!items.length){
            fetchDialogs()
        }
        else{
            setFiltered(items)
        }
    },[items])
    return (
        <BaseDialogs items={filtered} userId={userId} onSearch={onSearch} searchValue={searchValue} onSelectDialog={setCurrentDialog}/>
    );
};

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs)