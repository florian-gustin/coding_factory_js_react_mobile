import * as React from "react";

let User = React.createContext();

let initialState = {
  searchedText: "Avengers",
  myFavorites: [],
};

let reducer = (state, action) => {
  console.log("je rentre dans le reducer")
  switch (action.type) {
    case "reset":
      return initialState;
    case "updateSearchedText":
      return { ...state, searchedText: action.payload };
    case "updateMyFavorites":
      return { ...state, myFavorites: action.payload };
  }
};

function UserProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };


  // [B]
  return (
    <User.Provider value={value}>{props.children}</User.Provider>
  );
}

let UserConsumer = User.Consumer;

// [C]
export { User, UserProvider, UserConsumer };
