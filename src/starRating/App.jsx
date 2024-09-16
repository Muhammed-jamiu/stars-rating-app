// App.js
import React from "react";
import StarRating from "./StarRating";

const App = () => {
  const handleRatingChange = (newRating) => {
    console.log("New Rating:", newRating);
  };

  return (
    <div className="App">
      <h1>Rate this Component</h1>
      <StarRating initialRating={1} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default App;
