import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses, budget } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(""); // Zustand für die ausgewählte Währung


    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    const getCurrencySymbol = () => {
        switch (selectedCurrency) {
            case "Dollar":
                return "$";
            case "Pound":
                return "£";
            case "Euro":
                return "€";
            case "Ruppee":
                return "₹";
            default:
                return "";
        }
    };

    return (

        
        <div>
        <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setSelectedCurrency(event.target.value)}
        >
            <option defaultValue>Currency...</option>
            <option value="Dollar" name="finance">
                $ Dollar
            </option>
            <option value="Pound" name="hr">
                £ Pound
            </option>
            <option value="Euro" name="it">
                € Euro
            </option>
            <option value="Ruppee" name="admin">
                ₹ Ruppee
            </option>
        </select>

    </div>


    );
};
export default Currency;
