// modal component
function Modal(props) {

    return(

        <React.Fragment>
            <button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target={"#myModal" + props.name}>Open { props.name } </button>

            <div id={"myModal" + props.name} className="modal fade" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{ props.name }</h4>
                    </div>
                    <div className="modal-body">
                        <p>Hello { props.name } </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

// list group component
function List(props) {

    return(

        <ul className="list-group">

            {props.data.map((item, index) => {
                return <li 
                className = "list-group-item" 
                key = { index } 
                id = { index } 
                name = { item } 
                value = { item } 
                onClick = { props.handle } 
                ><Modal name = { item } /></li>
            })}

        </ul>
    );
}

class App extends React.Component {

    data = ['cat', 'dog', 'beaver', 'hippo', 'snake', 'wolf'];

    constructor(props) {

        super(props);

        this.state = {

        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        // this.state({
        //     [event.target.name]: event.target.value 
        // });

        alert(event.target.getAttribute('value'));

        event.preventDefault();
    }
    render() {

        return(
            
            <div>
                <List data = { this.data } />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));