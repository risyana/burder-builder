import React from "react";
import GrandChild from "./GrandChild";

class Child extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = { isClicked: 100 }
        console.log("   Child - Constructor");
    }

    componentWillMount() {
        console.log("   Child - Component will mount");
    }

    componentDidMount() {
        console.log("   Child - Component did mount");
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log("   Child - Component will receive props", this.state, nextState);
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("   Child - Should component update", this.state, nextState);
    //     return this.state.isClicked !== nextState.isClicked;
    // } 
    
    componentWillUpdate(nextProps, nextState){
        console.log("   Child - Component will receive props", nextProps, nextState);
    }
    
    componentDidUpdate() {
        console.log("   Child - Component did update");
    }

    clickHanlder = () => {
        this.setState({ isClicked: -1 * this.state.isClicked });
    }
    
    clickHanlderOne = () => {
        console.log("clickHanlderOne");
        this.setState({ isClicked: 100 });
    }

    render() {
        console.log("   Child - render");
/*         return (
            <div>
                <h2>Child</h2>
                <GrandChild 
                    id={1} 
                    isClicked={this.state.isClicked} 
                    click={this.clickHanlder.bind(this)}
                    clickOne={this.clickHanlderOne.bind(this)} />
            </div>
        ) */

        return (
            [
                <GrandChild
                    id={1}
                    key = {1}
                    isClicked={this.state.isClicked}
                    click={this.clickHanlder.bind(this)}
                    clickOne={this.clickHanlderOne.bind(this)} />,
                <GrandChild
                    id={2}
                    key = {2}
                    isClicked={this.state.isClicked}
                    click={this.clickHanlder.bind(this)}
                    clickOne={this.clickHanlderOne.bind(this)} />,
                <GrandChild
                    id={3}
                    key = {3}
                    isClicked={this.state.isClicked}
                    click={this.clickHanlder.bind(this)}
                    clickOne={this.clickHanlderOne.bind(this)} />
            ]
        )
        
    }
}

export default Child;