import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function RightBox() {
  return (
    <Right>
      <div className="rightHeader">
        <Avatar></Avatar>
        <div className="rightHeader_options">
          <h3>Name</h3>
          <p>Last seen</p>
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
    </Right>
  );
}

const Right = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;

  .rightHeader_options {
  }
  .rightHeader_icons {
  }
`;
export { RightBox };
