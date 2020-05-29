//const {Component} = React;
//import { Chart } from "react-google-charts";

//const { HashRouter, Route, Switch, Link, Redirect } = ReactRouterDOM

//const API = 'https://api.nomics.com/v1/currencies/sparkline?key=e60bc12d0ada31ff818bd8225c188282&ids=BTC,ETH,XRP&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z';

/*class App extends Component{
    constructor(){
        super();
        this.state={
            prices:[],
        }
    }
    async componentDidMount(){
        const prices= (await axios.get('/prices')).data
          console.log(Object.entries(prices))
          const a=prices
          console.log(a[0].currency,a[0].prices,a[0].timestamps)
          this.setState({prices})
        
    }
    render(){
        const {prices}=this.state
        return ( 
            <div>
                <h1>Digital Currency DashBoard</h1>
                
              <hr />
              <ul>
              {
                prices.map((item,idx)=>{
                        return(
                           <li key={idx}> 
                                {item.currency}   {item.price} {item.timestamp}
                           </li>                          
                        )
                      })
              }
              </ul>             
            </div>
        ) 
      
    }
} */
const root = document.querySelector('#root');
ReactDOM.render(<App />,root);