import React from "react";

class GrandChild extends React.Component {
    constructor(props) {
        super(props);
        console.log("      GrandChild - Constructor", this.props.id, this.props.isClicked);
    }

    componentWillMount() {
        console.log("      GrandChild - Component will mount", this.props.id, this.props.isClicked);
    }

    componentDidMount() {
        console.log("      GrandChild - Component did mount", this.props.id, this.props.isClicked);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("      GrandChild - Component will receive props", this.props, nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("      GrandChild - Should component update", this.props, nextProps);
        return this.props !== nextProps;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("      GrandChild - Component Will update", nextProps, nextState);
    }
    
    componentDidUpdate(){
        console.log("      GrandChild - Component did update");

    }

    render() {
        console.log("      GrandChild - render", this.props.id, this.props.isClicked);
        return(
            <div>
                <h3 onClick = {this.props.click}>Grand Child ({this.props.isClicked})</h3>
                <button onClick = {this.props.clickOne}>To 100</button>
            </div>
        )
    }
}

export default GrandChild;