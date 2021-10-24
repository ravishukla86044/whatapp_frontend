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
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import noChat from "../../Assets/noChat.jpg";
import noChatLight from "../../Assets/noChatLight.jpg";
import axios from "axios";
import { setCurrentChatMessages } from "../../Redux/action";

function RightBox() {
  const { currentChatRoom, user, currentChatMessages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [text, setText] = useState();

  const [mem, setMem] = useState([]);

  useEffect(() => {
    extractMembers();
    //console.log(mem, members);
  }, [currentChatRoom]);

  const extractMembers = () => {
    let a = [];
    for (var i = 0; i < currentChatRoom?.members?.length; i++) {
      if (currentChatRoom?.members[i]?._id !== user?._id) a.push(currentChatRoom?.members[i]);
    }

    setMem(a);
  };

  const handelSentMessage = (e) => {
    if (text == "") return;
    e.preventDefault();
    let payload = {
      text: text,
      senderId: user._id,
      chatroomId: currentChatRoom._id,
    };
    let a = [...currentChatMessages, payload];
    dispatch(setCurrentChatMessages(a));
    try {
      axios.post("http://localhost:3001/messages", payload).then((res) => {
        console.log(res);
        setText("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Right>
      {!currentChatRoom ? (
        <div className="noChat">
          <img src={noChatLight} alt="" />
        </div>
      ) : (
        <>
          <div className="rightHeader">
            <Avatar></Avatar>
            <div className="rightHeader_name">
              <h3>{mem[0]?.name}</h3>
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
            {currentChatMessages?.map((a) => (
              <Message message={a} />
            ))}
          </div>
          <div className="inputFooter">
            <InsertEmoticonOutlinedIcon />
            <AttachFileOutlinedIcon />
            <form style={{ padding: 0 }} className="inputText" onSubmit={handelSentMessage}>
              <input
                className="inputText"
                style={{ width: "95%" }}
                type="text"
                placeholder="Send a message"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </form>
            <MicOutlinedIcon />
          </div>
        </>
      )}
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

  .noChat {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export { RightBox };
