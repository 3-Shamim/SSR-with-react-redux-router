import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the best home component.</div>
      <button onClick={() => console.log("Hi there!")} className="btn">
        Press me!
      </button>
    </div>
  );
};

// export default Home;

// Export object from here because of multiple export
// simple clone in routes
export default { component: Home };
