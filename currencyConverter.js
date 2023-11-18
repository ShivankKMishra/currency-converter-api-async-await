import axios from "axios";
const getExchangeRate= async (fromCurrency,toCurrency)=>{
    const response = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ba1958a561d842a5aa744994042e8b7f');
    const rate = response.data.rates;
    const euro = 1/rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    console.log( exchangeRate); 
}

getExchangeRate('USD','INR')
