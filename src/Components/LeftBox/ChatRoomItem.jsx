import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentChatAll } from "../../Redux/action";

function ChatRoomItem({ members = [], data }) {
  const { user, currentChatRoom } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mem, setMem] = useState([]);

  useEffect(() => {
    extractMembers();
    //console.log(mem, members);
  }, []);

  const extractMembers = () => {
    let a = [];
    for (var i = 0; i < members.length; i++) {
      if (members[i]?._id !== user?._id) a.push(members[i]);
    }
    setMem(a);
  };

  const handelCurrentChat = () => {
    dispatch(setCurrentChatAll(data));
  };

  return (
    <All onClick={handelCurrentChat}>
      <Avatar>{mem[0]?.name?.charAt(0)}</Avatar>
      <div className="members">
        <h3>{mem[0]?.name}</h3>
        {/* <p>last message</p> */}
      </div>
    </All>
  );
}

const All = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
  .members {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .members h3 {
    margin-bottom: 5px;
  }
  & h2 {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;
export { ChatRoomItem };
