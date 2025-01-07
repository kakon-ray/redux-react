import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";

const UserCard: React.FC<{ user: IUser }> = ({ user }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md m-4">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{user?.name}</h3>
        <div className="mt-4">
          <div className="mt-4 flex items-center gap-3 text-center">
            <Button className="mx-auto" onClick={() => handleDelete(user?.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
