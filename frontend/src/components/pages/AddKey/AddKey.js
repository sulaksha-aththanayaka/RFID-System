import './AddKey.css';
import Slidebar from '../../Slidebar/Sidebar';
// import AddKeyForm from '../../AddKeyForm/AddKeyForm';
import AddForm from "../../AddForm/AddForm";

function AddKey() {
  return (
    <div className="AddKey">
      <div className="AddKeyGlass">
        <Slidebar />

        <AddForm />

        {/* <Updates /> */}
      </div>
    </div>
  );
}

export default AddKey;
