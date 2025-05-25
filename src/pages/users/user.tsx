import AddUserModal from "../../components/utils/AddUserModal";
import UserCard from "../../components/utils/UserCard";
import { addUser, selectUsers } from "../../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    dispatch(addUser(data));
  };
  return (
    <div>
      <div className="flex justify-between ">
        <div>All users</div>
        <AddUserModal onSubmit={onSubmit} />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default User;
