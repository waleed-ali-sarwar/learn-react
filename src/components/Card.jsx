import '../components/Card.css'
// learning props concepts in Reactjs
function Card(props) {
    return (
    <div className="w-card">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button onClick={props.action}>{props.btnTxt}</button>
    </div>
    );
}
export default Card;