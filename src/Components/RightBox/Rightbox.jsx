import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Message } from "./Message";

function RightBox() {
  return (
    <Right>
      <div className="rightHeader">
        <Avatar></Avatar>
        <div className="rightHeader_name">
          <h3>Name</h3>
          <p>Last seen ....</p>
        </div>
        <div className="rightHeader_icons">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="messagesDiv">
        <Message />
        <Message />
      </div>
    </Right>
  );
}

const Right = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;

  .rightHeader {
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }
  .rightHeader_name {
    flex: 1;
    padding-left: 20px;
  }
  .rightHeader_name h3 {
    margin-bottom: 3px;
    font-weight: 500;
  }
  .rightHeader_name p {
    color: gray;
  }
  .rightHeader_icons {
  }

  .messagesDiv {
  }
`;
export { RightBox };
