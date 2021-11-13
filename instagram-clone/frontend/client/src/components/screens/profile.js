import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "18px 0px",
          borderBottom: "2px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px,", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div style={{ marginLeft: "40px" }}>
          <h4>Tanush Khoiwal</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>400 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      <div className="gallary">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default Profile;
