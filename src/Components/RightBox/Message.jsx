import styled from "styled-components";

function Message() {
  return (
    <Mess>
      <p>
        <span className="senderName">Another</span>
        this is the message
        <span className="timeStamp">12 min ago</span>
      </p>
    </Mess>
  );
}

const Mess = styled.div``;

export { Message };
