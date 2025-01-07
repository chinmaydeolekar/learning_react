import React from "react";
import "./ExpenseLists.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    let displayItems = props.items;
    if (!displayItems.length) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    if (displayItems.length === 1) {
        return (
            <ul className="expenses-list">
                {displayItems.map((item) => {
                    return (
                        <ExpenseItem 
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            price={item.price}
                        />
                    );
                })}

                {displayItems.length === 1 && (
                    <h2 className="expenses-list__fallback">Only one expense here. Please add more</h2>
                )}
            </ul>
        )
    }

    if (displayItems.length > 1) {
        return (
            <ul className="expenses-list">
                {displayItems.map((item) => {
                    return (
                        <ExpenseItem 
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            price={item.price}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default ExpenseList