import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton, RootRef } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { ChatRoomItem } from "./ChatRoomItem";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatRooms } from "../../Redux/action";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

function LeftBox() {
  const dispatch = useDispatch();
  const { chatRoom, user } = useSelector((state) => state.auth);
  const [userSearch, setUserSearch] = useState();
  const [selectedUser, setSelectedUser] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const friendIdRef = useRef();

  async function getAllUser() {
    let { data } = await axios.get("https://herokuwhatsapp86044.herokuapp.com/users");
    //console.log(data, "this is data");
    setAllUser(data.user);
  }

  useEffect(() => {
    dispatch(getChatRooms(user._id));
    getAllUser();
  }, []);

  const handleSearchUser = (e) => {
    //console.log(allUser);
    setUserSearch(e.target.value);
    let newallUser = allUser.filter((a) => a.name.includes(userSearch) && a._id !== user._id);
    setSelectedUser(newallUser);
  };
  const handelAddchatroom = async () => {
    //console.log(chatroom);
    for (var i = 0; i < chatRoom.length; i++) {
      let mem = chatRoom[i]?.members;

      for (var j = 0; j < mem.length; j++) {
        if (mem[j]?._id === user._id) {
          alert("Friend alreday in the list");
          setUserSearch("");
          return;
        }
      }
    }
    if (!friendIdRef.current) {
      return;
    }
    let body = {
      members: [user._id, friendIdRef.current],
    };
    try {
      axios.post("https://herokuwhatsapp86044.herokuapp.com/chatrooms", body).then((res) => {
        dispatch(getChatRooms(user._id));
        setUserSearch("");
      });

      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
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
          <input
            type="text"
            placeholder="Search or Start a new chat"
            value={userSearch}
            onChange={handleSearchUser}
          />
          <AddIcon className="plusButton" onClick={handelAddchatroom} />
          {selectedUser.length > 0 && userSearch !== "" && (
            <div className="hidden">
              {selectedUser.map((a) => {
                return (
                  <div
                    onClick={() => {
                      setUserSearch(a.name);
                      setSelectedUser([]);
                      friendIdRef.current = a._id;
                    }}
                    className="hiddenUser"
                  >
                    {a.email}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="chatroom">
        {chatRoom?.map((a) => (
          <ChatRoomItem key={a._id} id={a._id} members={a.members} data={a} />
        ))}
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
    position: relative;
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

  .plusButton {
    margin-left: auto;
    cursor: pointer;
  }

  .hidden {
    position: absolute;
    top: 42px;
    border: #ccc;
    border-radius: 12px;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    z-index: 70;
    background-color: #ededed;
    width: 100%;
    height: 100vh;
  }
  .hiddenUser {
    border-bottom: 1px solid #edeff1;
    margin: 5px 0px;
    cursor: pointer;
    height: 45px;
    padding: 10px 20px;
  }
  .hiddenUser:hover {
    background: rgba(82 75 75 / 10%);
  }
`;

export { LeftBox };
