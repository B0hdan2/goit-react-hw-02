const ClickCounter = ({ value, onUpdate, offUpdate }) => {
	return(<>
    <button disabled={ value === 5}  onClick={onUpdate}>Current: +{value}</button>
    <button disabled={ value === 0} onClick={offUpdate}>Current: -{value}</button>
    </>) 
};
export default ClickCounter