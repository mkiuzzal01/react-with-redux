import { Trash2 } from "lucide-react";
import type { IUser } from "../../redux/types";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../redux/hook";
import { deleteUser } from "../../redux/features/users/userSlice";

const UserCard = (user: IUser) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center m-2 p-4 border-2 border-amber-700">
      <div>
        <h1>{user.name}</h1>
      </div>
      <div>
        <Button onClick={() => dispatch(deleteUser(user.id))} variant="link">
          <Trash2 color="red" />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
