import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const buttonStyle = {
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        marginRight: '5px', // Optional: Abstand zwischen den Buttons
    };

    const plusButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'rgb(51, 204, 51)',
        color: 'white',
    };

    const minusButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'rgb(204, 0, 0)',
        color: 'white',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>€{props.cost}</td>
            <td>
                <button style={plusButtonStyle} onClick={event => increaseAllocation(props.name)}>
                    +
                </button>
            </td>
            <td>
                <button style={minusButtonStyle} onClick={event => decreaseAllocation(props.name)}>
                    -
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;


