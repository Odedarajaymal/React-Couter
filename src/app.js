import React from 'react';
import ReactDOM from 'react-dom';
import '../public/css/style.scss';

class Couter extends React.Component {
    state ={
        couter:0
    }
    
    render(){
         const plus = ()=>{
             this.setState((preSet) =>({
                 couter:preSet.couter + 1
             }))
         }
         const sub = ()=>{
            this.setState((preSet) =>({
                couter:preSet.couter - 1
            }))
        }
        const reset = ()=>{
            this.setState((preSet) =>({
                couter:preSet.couter = 0
            }))
        }
        return(
            <div>
            <div className ='col-lg-12'>
              <h1>React Couter</h1>
            </div>
            <div className = 'col'>
        <h1>{this.state.couter}</h1>
            </div>
            <div className = 'col-md-12'>
                <button className ='btn btn-secondary ' onClick={plus}>Add</button>
                <button className ='btn btn btn-danger ' onClick={sub}>Sub</button>
                <button className ='btn btn btn-info ' onClick={reset}>Reset</button>
            </div>
           
            </div>
            
        )
    }
}





ReactDOM.render(<Couter/>,document.getElementById('app'))
