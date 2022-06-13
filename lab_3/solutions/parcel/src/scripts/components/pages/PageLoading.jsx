const Loading = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <p className="text-amber-400 bg-slate-700 m-5 p-3 rounded flex items-center justify-between">
          Loading the data... &nbsp;
          <span className="text-4xl text-right">🕝</span>
        </p>
      )}
    </div>
  );
};

export default Loading;
