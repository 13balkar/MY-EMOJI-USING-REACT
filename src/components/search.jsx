import React from "react";
import Entry from "./Entry";
function CreateEntry(em){
    return <Entry name={em.slug} />;
}

class Dict extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch("https://emoji-api.com/categories?access_key=171678295c5b133d9eb7e4ef22e7d67ced3c31e3")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
    
    return  <dl className="dictionary">
       {items.map(CreateEntry)}
    </dl> ;
}
}


function Search(){
    const [colors, change3] = React.useState("black");
    const [flag, change4] = React.useState(false);
    const [head,change5]= React.useState("Show");
    function handle(event){
    change4(!flag);
    head==="Show" ? change5("Hide"):change5("Show");
    console.log("hi");
    event.preventDefault();
    }
    function change1() {
    change3("white");
    }
    function change2() {
    change3("black");
    }
    return (
        <div className="container">
            <form onSubmit={handle} action="">
            <button type="submit" style={{ backgroundColor: colors }} onMouseOver={change1} onMouseOut={change2} onClick={handle}>
            {head}  Emoji Catagories
            </button>
            </form>
            {flag===false ?  "":<Dict/>}
        </div>
        
);}
export default Search;
