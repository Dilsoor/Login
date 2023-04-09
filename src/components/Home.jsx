import React from "react";

function Home() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p> Welcome {localStorage.getItem("name")}</p>
      <button onClick={logout} className="logout">
        Log out
      </button>
      <button onClick={deleteAccount} className="delete">
        Delete
      </button>
    </div>
  );
}

export default Home;
