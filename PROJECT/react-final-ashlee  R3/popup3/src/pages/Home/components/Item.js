import png from "../components/user.png";

const Item = ({ id, note, descrip, date, img, deleteData, submittingStatus }) => {

  function deleteItem() {
    submittingStatus.current = true
    deleteData(function(prev) {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>PROJECT:{note}</p>
        <p>DESCRIPTION:{descrip}</p>
        <p>DUE DATE:{date}</p>
        <div>
          <img src={png} alt="abc"></img>
          <img src={png} alt="abc"></img>
          <img src={png} alt="abc"></img>
        </div>
      </div>
      <button onClick={deleteItem} className="remove">DELETE</button>
    </div>
  );
};

export default Item;
