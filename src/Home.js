import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component{
    constructor(){
        super();
        this.state={
            currencyData:[]
        }
        this.showData=this.showData.bind();
    }
    async componentDidMount(){
        console.log(this.props)
        
        let interval=this.props.match.params.interval;
        if(interval===undefined){
            interval='1h'
        }
        const currencyData= (await Axios.get(`/currencyticker/${interval}`)).data;
        this.setState({currencyData})
    }
    showData(){
       const {currencyData}= this.state;
        
    }
    render(){
        const {currencyData} = this.state;
        console.log(currencyData)
        return(
                <div>
                   <table>
                     <tbody>
                         <tr>
                            <th>Currency</th>
                           
                            <th>Price</th>
                            <th>Market Cap</th>
                        </tr>
                    {currencyData ?currencyData.map(currency=>{
                        return(
                            <tr>
                                <td><Link to={`/currency/${currency.id}`} >{currency.currency} </Link></td>
                               {/*  <th><img src={currency.logo_url} /></th> */}
                                <td>{currency.price}</td>
                                <td>{currency.market_cap}</td>
                            </tr>
                        )
                    }):''}
                    </tbody>
                    </table>
                </div>
            )
     
    }
}

export default Home;

     /*
            "currency": "BTC",
"id": "BTC",
"price": "8451.36516421",
"price_date": "2019-06-14T00:00:00Z",
"price_timestamp": "2019-06-14T12:35:00Z",
"symbol": "BTC",
"circulating_supply": "17758462",
"max_supply": "21000000",
"name": "Bitcoin",
"logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
"market_cap": "150083247116.70",
"rank": "1",
"high": "19404.81116899",
"high_timestamp": "2017-12-16",
            */