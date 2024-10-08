import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";
import React from "react";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  });

  return userData.loading ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData &&
        userData.users &&
        userData.users.map((user) => <p> {user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);