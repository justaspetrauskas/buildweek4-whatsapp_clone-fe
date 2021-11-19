import React from "react";
import { Row, Col } from "react-bootstrap";

function Chat({ chat }) {
  console.log(Chat);
  return (
    <>
      <Row className="user-row align-items-center justify-content-center">
        <Col className="col-4 justify-content-center">
          <div className="chat-user">
            {chat.members.map((member, index) => (
              <img src={member.avatar} alt="" />
            ))}
          </div>
        </Col>
        <Col className="col-8">
          {chat.members.map((member, index) => (
            <p className="mb-0 mt-1 text-white">{member.username}</p>
          ))}

          <p className="mb-1 text-muted">{chat.history[0].text}</p>
        </Col>
      </Row>
    </>
  );
}

export default Chat;
