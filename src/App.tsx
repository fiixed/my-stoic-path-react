const App = () => {
  return (
    <div className="w-[500px] mx-auto bg-gray-200">
      <h1 className="font-semibold text-2xl text-blue-400">Journal</h1>
      <div>
        <label className="">TimeStamp</label>
      </div>
      <div>
        <textarea placeholder="Entry" className=""></textarea>
      </div>
    </div>
  );
};

export default App;
