import './Card.css';

function Card(props) {
    let classes = "card" + " " + props.className;
    // console.log(props, "props___________");
    // console.log(classes, "classes+++++++++++++++++++==")
    return <div className={classes}>{props.children}</div>;
}

export default Card;