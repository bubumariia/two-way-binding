import React from "react";

class Binding extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
        
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <input type="text" value={this.state.value} onChange = {(event) =>this.setState({inputValue:event.target.value})}/>
                    <h1>{this.state.inputValue}</h1>
                </div>

            </React.Fragment>
        )
    }
}
export default Binding