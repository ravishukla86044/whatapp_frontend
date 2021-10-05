import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function ChatRoomItem() {
  return (
    <All>
      <Avatar></Avatar>
      <div className="members">
        <h3>room name</h3>
        <p>last message</p>
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
  }
  & h2 {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;
export { ChatRoomItem };
