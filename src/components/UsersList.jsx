import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  console.log(state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return <div>UsersList</div>;
}

export default UsersList;
