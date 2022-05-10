import React from "react";
import Entry from "./Entry";
function CreateEntry(em){
    return <Entry emoji={em.character}name={em.unicodeName} meaning={em.slug} />;
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
        
    
    return  <dl className="dictionary">
       {items.map(CreateEntry)}
    </dl> ;
}
}

var validlist=["smileys-emotion","people-body","animals-nature","food-drink","travel-places","activities","objects","symbols","flags"];
function Searchbycat(){
    const [colors, change3] = React.useState("black");
    const [flag, change4] = React.useState(false);
    const [flag2, change6] = React.useState(false); 
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
   
    var vv=validlist.find( (x)=> x===v);
    
    if(vv!=undefined){
        link="https://emoji-api.com/categories/"+v+"?access_key=171678295c5b133d9eb7e4ef22e7d67ced3c31e3";
        change6(true);
    }else{ change6(false);}
    event.preventDefault();
    }
    function inp(event) {
        // console.log(event.target.value);
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
            {flag===true ? `${""}`:<input id="abc"  onChange={inp} type="text"  placeholder="Enter Any Catagory" />}
            <button type="submit" style={{ backgroundColor: colors }} onMouseOver={change1} onMouseOut={change2} onClick={handle}>
            {head}  Emoji By Catagory
            </button>
            </form>
            {flag===false ?  "": flag2===true ? <Dict/>:"Enter Valid Catagory" }
        </div>
        
);}
export default Searchbycat;
