

const Tabs = ({activeTab, setActiveTab}) => {
  return (
    <div className="mb-4">
      <button
        className={`secondary-btn ${
          activeTab === false ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={() => setActiveTab(false)}
      >
        Todo
      </button>
      <button
        className={`secondary-btn ${
          activeTab === true ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={() => setActiveTab(true)}
      >
        completed
      </button>
    </div>
  );
};

export default Tabs;
