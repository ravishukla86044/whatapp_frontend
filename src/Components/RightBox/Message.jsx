import styled from "styled-components";

function Message() {
  return (
    <Mess>
      <div className="reciever">
        <p>
          <span className="senderName">Another</span>
          this is the message
          <span className="timeStamp">12 min ago</span>
        </p>
      </div>
    </Mess>
  );
}

const Mess = styled.div`
  font-size: 16px;

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
    background: green;
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
