const App = () => {
  return (
    <div className="container">
      <h1>Journal</h1>
      <div>
        <label className="label">TimeStamp</label>
      </div>
      <div>
        <textarea placeholder="Entry" className="textarea"></textarea>
      </div>
    </div>
  );
};

export default App;
