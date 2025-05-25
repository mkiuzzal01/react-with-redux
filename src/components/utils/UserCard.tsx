import type { IUser } from "../../redux/types";

const UserCard = (user: IUser) => {
  return (
    <div className="m-2 p-4 border-2 border-amber-700">
      <div>
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};

export default UserCard;
