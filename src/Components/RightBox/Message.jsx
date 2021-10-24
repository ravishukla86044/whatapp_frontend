import styled from "styled-components";
import Timestamp from "react-timestamp";
import { useSelector } from "react-redux";

function Message({ message }) {
  //console.log(message);

  const { user } = useSelector((state) => state.auth);
  return (
    <Mess>
      <div className={message.senderId == user._id ? "myMessage" : "reciever"}>
        <p>
          <span className="senderName"></span>
          {message.text}
          <span className="timeStamp">
            <Timestamp relative date={message.createdAt} autoUpdate />
          </span>
        </p>
      </div>
    </Mess>
  );
}

const Mess = styled.div`
  font-size: 16px;
  position: relative;

  margin-bottom: 30px;

  .reciever {
    position: relative;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background: #ffffffff;
  }

  .myMessage {
    position: relative;
    margin-left: auto;
    background: #dcf8c6;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
  }

  .timeStamp {
    margin-left: 10px;
    font-size: xx-small;
  }
  .senderName {
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
  }
`;

export { Message };
