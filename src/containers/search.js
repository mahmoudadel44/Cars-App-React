import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCars} from '../actions'
import {bindActionCreators} from 'redux'
class search extends Component {
constructor(props){
    super(props)
    this.state={
        keywords:''
    }
}
handleChange=(event)=>{
    this.setState({keywords:event.target.value})
}

searchCars=(event)=>{
event.preventDefault()
this.props.getCars(this.state.keywords)
this.refs.reset.value ='';
}
componentDidMount(){
    // console.log(this.state)
}
    render() {
        return (
            <div>
         <div className="main-search" style={{display:'block'}}>
         <div className="header">
         <div className="carIcon"><i className="fa fa-car fa-3x"></i></div>
             <h1>Cars Project</h1>
             <div className="carIcon"><i className="fa fa-car fa-3x"></i></div>
           </div>
            <form onSubmit={this.searchCars}>
                <i className="fa fa-search fa-2x" style={{margin:'10px', color:'#FFF'}}></i>
                <input style={{fontSize:'18px'}}  ref="reset"
                type="text" value={this.state.keyword} onChange={this.handleChange} placeholder="Search ...."/>
                </form>
                </div> 
                </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars},dispatch)
}


export default connect (null,mapDispatchToProps)(search)
