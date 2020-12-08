import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../../UI/Loading';

const PickupBook = () => {
    const dispatch = useDispatch();
    const {availbyid} = useSelector(state => state);



    if(!availbyid.currentAvail.data){
        return <Loading />
    }
    return(
        <div></div>
    )
};

export default PickupBook;