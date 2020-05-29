import React, { Component } from 'react';
import Axios from 'axios';
import { Chart } from "react-google-charts";
import moment from 'moment';

class CurrencySparklineChart extends Component{

    constructor(){
        super();
        this.state={
            currency:[],
            chartData:[],
            dataLoadingStatus:'loading',
            
        }
    }

    async componentDidMount(){
        const currencyData= (await Axios.get('/currencyspark')).data;
        console.log(currencyData)
        //console.log(Object.keys(currencyData[0]))
        const chartData=[['Timestamps','Prices']];
        for (let i = 0; i < currencyData.length; i ++) {
          if(currencyData[i].currency === this.props.match.params.id) {
            for (let j = 0; j < 31; j ++) {
              chartData.push([moment(currencyData[i].timestamps[j]).format("MM-DD-YYYY"), Number(currencyData[i].prices[j])])
            } 
           // console.log(moment(currencyData[i].timestamps[j]).format("MM-DD-YYYY"))
          }
        }
        this.setState({currency:currencyData.currency,dataLoadingStatus: 'ready',chartData:chartData})
    }

    render(){
        const {currency,dataLoadingStatus,chartData} = this.state;
        console.log(currency,chartData)
        console.log(this.props.match.params.id)
        const currencyId=this.props.match.params.id;
        return(
            dataLoadingStatus === 'ready' ? (
                <Chart
                width={'800px'}
                height={'500px'}
                  chartType="LineChart"
                  data={chartData}
                  options={{
                    title: `Currency Sparkline for ${currencyId}`,
                    hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
                    vAxis: { title: 'Prices' ,minValue: 0},
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                  }} 
                  
                  rootProps={{ 'data-testid': '1' }}
                />
              ) : (
                <div>Fetching data from API</div>
              )
            
        )
    }
}

export default CurrencySparklineChart;