import React, { Component } from 'react';

class Counter extends Component { 
    state = {
         count:this.props.counter.count, 
    //     // tags: ['tags1','tags2','tags3']
     };
    //   constructor() {
    //       super();
    //     this.handleIncrement =  this.handleIncrement.bind(this);
        
    //    }

    handleIncrement = () => {
        // console.log(product)
        // this.state.count++;
        this.setState({ count: this.state.count + 1 });
      
        
    };
    
    DecreaseItem = () => {
        this.setState({ count: this.state.count - 1 });
      }
    kisat
    render() { 
        
        return ( 
        <div>
             
            <span className={this.getBadgeClasses()}>{this.formacount()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            >
                Increment
            </button> 
            <button
            onClick={() => this.props.onDecreaseItem(this.props.counter)}
            >
                Increment -1</button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)}>
               Delete 
               </button>
            
 
        </div> 
      );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

   formacount(){
       const { value } = this.props.counter;
       
       return value === 0 ? 'Zero' : value;
   }
}
 
export default Counter;