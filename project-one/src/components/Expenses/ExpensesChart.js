import React, { useState } from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    return (
        <div>
            <Chart chartExpenses={props.itemInfo}/>
        </div>
    )
}

export default ExpensesChart;