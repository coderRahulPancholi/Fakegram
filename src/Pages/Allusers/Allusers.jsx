import React, { useState } from "react";
import ALLuserWrapper from "./allusercss";
import { useDispatch, useSelector } from "react-redux";
import { loadalluser } from "../../Actions/user";
import UserCard from "../../Commponents/UserCard/UserCard";
import Loading from "../../Commponents/Loader/Loading";

function Allusers() {
  const dispacth = useDispatch();

  const { allusers, searching } = useSelector((s) => s.mainreducer);

  const [username, setUsername] = useState("");

  const search = () => {
    console.log(username);

    if (username !== "") {
      dispacth(loadalluser(username));
    }

    console.log(allusers);
  };

  return (
    <ALLuserWrapper className="dfc  ">
      <div className="searchinput">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
          onKeyUp={search}
        />
      </div>
      <div className="subcontainer dfc">
        {searching && <Loading />}
        {!searching && allusers && allusers.length === 0 && (
          <h6>No Users Found</h6>
        )}
        {!searching &&
          allusers &&
          allusers.map((e) => {
            return (
              <UserCard
                name={e.name.toUpperCase()}
                followers={e.followers.length}
                following={e.following.length}
                posts={e.posts.length}
                username={e.username}
                id={e._id}
                key={e._id}
                profileImage={e.profileUrl}
              />
            );
          })}
      </div>
    </ALLuserWrapper>
  );
}

export default Allusers;
