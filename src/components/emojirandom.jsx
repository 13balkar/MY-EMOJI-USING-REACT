import React from "react";
import Entry from "./Entry";
function CreateEntry(em){
    return <Entry emoji={em.character}name={em.unicodeName} meaning={em.codePoint} />;
}
var link="";
class Dict extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(link)
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
    console.log(items);   
    if(items!==null) {
        return  <dl className="dictionary">
        {items.map(CreateEntry)}
     </dl> ;
    }
    else {
        return ;
    }
}
}

function SearchRandom(){
    const [colors, change3] = React.useState("black");
    const [flag, change4] = React.useState(false);
    const [head,change5]= React.useState("Get");
    const [v, changev] = React.useState("Hello");
    function handle(event){
    change4(!flag);
    if(head==="Get"){
        change5("Hide");
    }else{
        change5("Get");
        changev("");
    }
    console.log(v);
   
    link="https://emoji-api.com/emojis?search="+v+"&access_key=171678295c5b133d9eb7e4ef22e7d67ced3c31e3";
    event.preventDefault();
    }
    function inp(event) {
        changev(event.target.value);
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
            {flag===true ? `${""}`:<input id="abc"  onChange={inp} type="text"  placeholder="Enter Data" />}
            <button type="submit" style={{ backgroundColor: colors }} onMouseOver={change1} onMouseOut={change2} onClick={handle}>
            {head}  Emoji By Random Name
            </button>
            </form>
            {flag===false ?  "": <Dict/>}
        </div>
        
);}
export default SearchRandom;
