import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {


    const { dispatch,remaining  } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {


        

        
    
        setNewBudget(event.target.value);
        if(newBudget >= 20000) {
            alert("The value cannot exceed remaining funds " + "£"+remaining );
            return;
        }


        

        if(newBudget <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending ");
            return;
        }






    }
    return (
<div className='alert alert-secondary'>
<span>Budget: €  </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;




