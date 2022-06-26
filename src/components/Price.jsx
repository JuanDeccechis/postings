import React from 'react'

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            expenses: 0,
        }
    }

    componentDidMount() {
        const { priceCurrency, priceAmount, expensesCurrency, expensesAmount } = this.props;
        let formattedPrice = this.formatMoney(priceCurrency, priceAmount, 0, "", ".");
        let formattedExpenses = null;
        if (expensesAmount) {
            formattedExpenses = this.formatMoney(expensesCurrency, expensesAmount, 0, "", ".");
        }
        this.setState({ price: formattedPrice, expenses: formattedExpenses });
    }

    formatMoney = (currency, amount, decimalCount = 2, decimalSeparator = ".", thousandsSeparator = ",") => {
        const thousandsMoney = Math.floor(amount / Math.pow(10, (3 + decimalCount)));
        const rest = amount % Math.pow(10, (3 + decimalCount));
        let restMoney = rest.toString();
        while (restMoney.length < 3) {
            restMoney = "0" + restMoney;
        }
        let symbol = null;
        switch (currency) {
            case "USD":
                symbol = "US";
                break;
            case "ARS":
                symbol = "$";
                break;
            default:
                symbol = "$";
                break;
        }
        if (decimalCount) {
            const decimal = amount % Math.pow(10, (decimalCount));
            return `${symbol}${thousandsMoney}${thousandsSeparator}${restMoney}${decimalSeparator}${decimal}`;
        } else {
            const decimal = amount % Math.pow(10, (decimalCount));
            return `${symbol}${thousandsMoney}${thousandsSeparator}${restMoney}`;
        }
    }

    render() {
        const { price, expenses } = this.state;
        return (
            <div>
                {price}
                {expenses}
            </div>
        )
    }
}

export default Price;