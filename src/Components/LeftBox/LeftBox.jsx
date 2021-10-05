import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { ChatRoomItem } from "./ChatRoomItem";

function LeftBox() {
  return (
    <Left>
      <div className="leftBox_Header">
        <Avatar>d</Avatar>
        <div className="headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="leftSearch">
        <div className="leftSearch_Con">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or Start a new chat" />
        </div>
      </div>
      <div className="chatroom">
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
      </div>
    </Left>
  );
}

const Left = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  .leftBox_Header {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid lightgrey;
  }
  .headerRight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
  }
  .headerRight .MuiSvgIcon-root {
    font-size: 21px !important;
  }
  .leftSearch {
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 40px;
    padding: 10px;
  }
  .leftSearch_Con {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
  }
  .leftSearch_Con .MuiSvgIcon-root {
    color: grey;
    padding: 10px;
  }
  .leftSearch_Con input {
    border: none;
    margin-left: 10px;
    outline-width: 0px;
  }
  .chatroom {
    flex: 1;
    overflow: auto;
    background-color: white;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-track {
      background: hsla(0, 0%, 100%, 0.1);
    }
  }
`;
export { LeftBox };
