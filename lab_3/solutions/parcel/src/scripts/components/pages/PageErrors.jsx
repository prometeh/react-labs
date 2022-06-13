const PageErrors = ({ errors }) => {
  return (
    <div>
      {errors.filter(Boolean).length > 0 && (
        <div className="text-amber-400 bg-slate-700 m-5 p-3 rounded">
          <p>There was a problem fetching the data:</p>
          {errors.map((e) => (
            <p> {e} </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageErrors;
