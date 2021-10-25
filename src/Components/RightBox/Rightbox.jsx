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
import { useState, useEffect, useRef } from "react";
import noChat from "../../Assets/noChat.jpg";
import noChatLight from "../../Assets/noChatLight.jpg";
import axios from "axios";
import { setCurrentChatMessages } from "../../Redux/action";
import { io } from "socket.io-client";
import Picker from "emoji-picker-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function RightBox() {
  const { currentChatRoom, user, currentChatMessages } = useSelector((state) => state.auth);
  const [currentChatRoomMembers, setCurrentChatRoomMembers] = useState();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [hideEmoji, setHide] = useState(false);
  const [text, setText] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);

    setText((pre) => {
      return pre + emojiObject.emoji;
    });
    console.log(text);
    setHide(false);
  };
  const handelHideEmoji = () => {
    console.log(hideEmoji);
    setHide((pre) => !pre);
  };

  const dispatch = useDispatch();

  const socket = useRef();
  const [mem, setMem] = useState([]);
  const [arrivedM, setArrivedM] = useState();
  const [userSocketId, setUsersocketId] = useState();
  const scrollRef = useRef();

  useEffect(() => {
    extractMembers();
    //console.log(mem, members);
  }, [currentChatRoom]);

  useEffect(() => {
    socket.current = io("https://herokuwhatsapp86044.herokuapp.com");
    socket.current.on("welcome", (data) => {
      // console.log(data);
    });
    socket.current.emit("addedUser", user._id);

    socket.current.on("getMessage", (data) => {
      setArrivedM({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        chatroomId: data.chatroomId,
      });
    });

    socket.current.on("getUsers", (users) => {
      //console.log("users", users);
      setUsersocketId(users);
    });
  }, [user]);

  useEffect(() => {
    if (arrivedM && currentChatRoom._id === arrivedM.chatroomId) {
      let a = [...currentChatMessages, arrivedM];
      dispatch(setCurrentChatMessages(a));
    }

    console.log(currentChatRoom, arrivedM);
  }, [arrivedM]);

  const extractMembers = () => {
    let a = [];
    let all = [];
    for (var i = 0; i < currentChatRoom?.members?.length; i++) {
      if (currentChatRoom?.members[i]?._id !== user?._id) a.push(currentChatRoom?.members[i]);
      all.push(currentChatRoom?.members[i]?._id);
    }
    setCurrentChatRoomMembers(all);
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
    const receiverId = currentChatRoom.members.find((mem) => mem._id !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      text: text,
      receiverId,
      chatroomId: currentChatRoom._id,
    });

    // let a = [...currentChatMessages, payload];
    // dispatch(setCurrentChatMessages(a));
    try {
      axios.post("https://herokuwhatsapp86044.herokuapp.com/messages", payload).then((res) => {
        console.log(res);
        setText("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChatMessages]);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handelSpeech = () => {
    SpeechRecognition.startListening();
  };

  useEffect(() => {
    setText(transcript);
  }, [transcript]);
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
            {currentChatMessages?.map((a) => (
              <div ref={scrollRef}>
                <Message message={a} key={a._id} />
              </div>
            ))}
          </div>
          <div className="inputFooter">
            <InsertEmoticonOutlinedIcon className="emojiDiv" onClick={handelHideEmoji} />
            {hideEmoji && <Picker onEmojiClick={onEmojiClick} />}

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
            <MicOutlinedIcon style={{ cursor: "pointer" }} onClick={handelSpeech} />
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

  .emojiDiv {
    position: relative;
    cursor: pointer;
  }
  .emoji-picker-react {
    position: absolute;
    top: -345px;
    z-index: 10;
    left: 10px;
  }
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
    z-index: 1;
    padding: 30px;

    overflow: auto;
    /* background: rgb(229, 221, 213) url(${whatsappLight}); */
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

  .inputFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;
    position: relative;
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
