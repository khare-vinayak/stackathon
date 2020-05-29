const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use('/dist',express.static(path.join(__dirname,'dist')))
app.use(express.json())

app.get('/',(req,res,next)=>{
    console.log(path.join(__dirname,'index.html'));
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/currencyticker/:interval',async (req,res,next)=>{
    const interval=req.params.interval
    console.log('currency ticker',interval)
    const API=`https://api.nomics.com/v1/currencies/ticker?key=e60bc12d0ada31ff818bd8225c188282&ids=BTC,ETH,XRP,LTC,USDT,BSV,BNB,BCH?interval=${interval}`
    const prices= ( await axios.get(`${API}`)).data
    res.send(prices)

})
/* app.get('/dailyprices/:symbol',async (req,res,next)=>{
    const symbol=req.params.symbol;
    const API=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=PMXRPHDDPCNNU7RQ`

    const prices= ( await axios.get(`${API}`)).data
    res.send(prices)

}) */

app.get('/currencyspark',async (req,res,next)=>{
  /*   const interval=req.params.interval
    console.log(interval)
    const startdate=new Date()
    const enddate = moment().subtract(1, 'days').calendar();
    console.log(startdate,enddate)
    if( interval === 1){

    }
 */
    const API=`https://api.nomics.com/v1/currencies/sparkline?key=e60bc12d0ada31ff818bd8225c188282&ids=BTC,ETH,XRP,LTC,USDT,BSV,BNB,BCH&start=2020-04-25T00%3A00%3A00Z&end=2020-05-26T00%3A00%3A00Z`

    const prices= ( await axios.get(`${API}`)).data
    res.send(prices)

})

https://api.nomics.com/v1/currencies/sparkline?key=e60bc12d0ada31ff818bd8225c188282&ids=BTC,ETH,XRP&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z
//
app.listen(3000,()=>console.log('Listening on port 3000'));