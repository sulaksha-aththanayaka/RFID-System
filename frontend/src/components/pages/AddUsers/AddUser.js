import './AddUser.css';
import Slidebar from '../../Slidebar/Sidebar';
// import AddForm from '../../AddForm/AddForm';
import AddKeyForm from '../../AddKeyForm/AddKeyForm';

function AddUser() {
  return (
    <div className="AddUser">
      <div className="AddUserGlass">
        <Slidebar />
        <AddKeyForm/>
        {/* <AddForm /> */}

        {/* <Updates /> */}
      </div>
    </div>
  );
}

export default AddUser;
