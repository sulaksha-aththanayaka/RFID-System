import './AddKey.css';
import Slidebar from '../../Slidebar/Sidebar';
import AddKeyForm from '../../AddKeyForm/AddKeyForm';

function AddKey() {
  return (
    <div className="AddKey">
      <div className="AddKeyGlass">
        <Slidebar />

        <AddKeyForm />

        {/* <Updates /> */}
      </div>
    </div>
  );
}

export default AddKey;
