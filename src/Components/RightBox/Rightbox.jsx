import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Message } from "./Message";
import whatsappDark from "../../Assets/whatsappDark.png";
import whatsappLight from "../../Assets/whatsappLight.png";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";

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
        <div className="background"></div>
        <Message />
        <Message />
      </div>
      <div className="inputFooter">
        <InsertEmoticonOutlinedIcon />
        <AttachFileOutlinedIcon />
        <input className="inputText" type="text" placeholder="Send a message" />
        <MicOutlinedIcon />
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
    flex: 1;
    position: relative;

    padding: 30px;
    overflow: auto;
    background-color: rgb(229, 221, 213);
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
  .background {
    position: absolute;
    opacity: 0.1;
    background-repeat: repeat;
    background-position: center;
    background: url(${whatsappLight});
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  .inputFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;
  }
  .inputText {
    flex: 1;
    border: none;
    outline-width: 0px;
    padding: 10px;
    border-radius: 10px;
  }
  .inputFooter .MuiSvgIcon-root {
    padding: 10px;
    color: grey;
  }
`;
export { RightBox };
