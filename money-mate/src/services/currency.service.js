import axios from 'axios';

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const getExchangeRates = async (baseCurrency) => {
    try {
        const response = await axios.get(`${API_URL}${baseCurrency}`);
        return response.data.rates;
    } catch (error) {
        throw new Error('Error fetching exchange rates: ' + error.message);
    }
};

export const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
    if (!rates || !rates[toCurrency]) {
        throw new Error('Invalid currency or rates not available');
    }
    const convertedAmount = (amount * rates[toCurrency]) / rates[fromCurrency];
    return parseFloat(convertedAmount.toFixed(2));
};

export const formatCurrency = (amount, currencyCode) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
};