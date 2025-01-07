import { AddUserMoal } from "@/components/module/user/AddUserMoal";
import UserCard from "@/components/module/user/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

function User() {
  const users = useAppSelector(selectUser);

  return (
    <>
      <AddUserMoal />
      <div>
        {users?.map((item) => {
          return <UserCard key={item?.id} user={item} />;
        })}
      </div>
    </>
  );
}

export default User;
