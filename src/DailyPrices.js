import React, { Component } from 'react';
import Axios from 'axios';
import { Chart } from "react-google-charts";
import moment from 'moment';

class DailyPrices extends Component{

    constructor(){
        super();
        this.state={
            chartData:[],
            dataLoadingStatus:'loading',
            
        }
    }

    async componentDidMount(){
        const currencyData= (await Axios.get('/dailyprices/?')).data;
        console.log(currencyData[0]['1d'].price_change)
        /* console.log(Object.keys(currencyData[0]['1d']))
        //const chartData=[['Currency','Price','High','Volume_change_pct']];
        const chartData=[['Currency','Volume_change_pct']];
         for (let i = 0; i < currencyData.length; i ++) {
           // chartData.push([ currencyData[i].currency,  Number(currencyData[i].price),Number(currencyData[i].high),Number(currencyData[i]['1d'].volume_change_pct)])
            chartData.push([ currencyData[i].currency, Number(currencyData[i]['1d'].volume_change_pct)])
            
         //   console.log(moment(currencyData[i].timestamps[j]).format("MM-DD-YYYY"))
        } */ 
        this.setState({dataLoadingStatus: 'ready',chartData:chartData})
    }

    render(){
        const {dataLoadingStatus,chartData} = this.state;
        console.log(chartData)
        return(
            dataLoadingStatus === 'ready' ? (
                <Chart
                width={'500px'}
                height={'500px'}
                  chartType="ComboChart"
                  data={chartData}
                  options={{
                    title: 'Currency',
                    vAxis: { title: 'Prices' },
                hAxis: { title: 'Currency' },
                
                    seriesType: 'bars',
                  //  series: { 5: { type: 'line' } },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              ) : (
                <div>Fetching data from API</div>
              )
            
        )
    }
}

export default ExampleChartAPI;