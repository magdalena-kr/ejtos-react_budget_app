import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (

        
        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Currency...</option>
                       
                <option value="Dollar" name="finance">$ Dollar</option>
                <option value="Pound" name="hr">£ Pound</option>
                <option value="Euro" name="it">€ Euro</option>
                <option value="Ruppee" name="admin">₹ Ruppee</option>
                  </select>


    );
};
export default Currency;
