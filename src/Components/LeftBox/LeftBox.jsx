import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
      <div className="leftSearch"></div>
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
  }
`;
export { LeftBox };
