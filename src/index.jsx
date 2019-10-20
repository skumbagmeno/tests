class Test extends React.Component {
    constructor() {
        super();
        this.aaa = "ASD";
        this.state = {
            asd: 'asdasdasd'
        }
    }
    click () {
        console.log("Clicked " + this.aaa);
    }
    render () {
        return (
            <h1>Working</h1>
        )
    }
}

class Test2 extends Test {
    constructor() {
        super();
    }
    click2 () {
        console.log("Clicked 2 " + this.aaa, this.state);
    }
    render () {
        return <h2 onClick={this.click2.bind(this)}>WOOOOOORKING</h2>
    }
}

ReactDOM.render(<Test2 />, document.getElementById('react'));