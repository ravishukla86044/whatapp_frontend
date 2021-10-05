import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function LeftBox() {
  return (
    <Left>
      <div className="leftBox_Header">
        <div className="headerRight">
          <Avatar>d</Avatar>
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
    </Left>
  );
}

const Left = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;

  .headerRight {
    display: flex;
    align-items: center;
  }
`;
export { LeftBox };
