function SecondParagraph() {
  return (
    <p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <label htmlFor=""></label>
      {" | "}
      <a
        className="App-link"
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "red",
        }}
      >
        Vite Docs
      </a>
    </p>
  );
}

export default SecondParagraph;
