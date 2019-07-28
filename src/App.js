const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Lux"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "German Shepherd")
  ]);
};

const App = () => {
  return React.createElement("div", { id: "important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
