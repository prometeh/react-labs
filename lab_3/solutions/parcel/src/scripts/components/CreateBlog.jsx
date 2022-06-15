const CreateBlog = ({
  handleSubmit,
  handleTitleChange,
  handleBodyChange,
  visible,
}) => {
  return (
    <div>
      {visible && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between w-11/12 mt-5 mx-auto pb-5"
        >
          <label
            className="py-3 px-1 text-amber-400 bg-slate-500"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            className="min-h-[40] text-3xl pl-2"
            name="title"
            type="text"
            id="title"
            onChange={handleTitleChange}
          />
          <label
            className="py-3 px-1 mt-5 text-amber-400 bg-slate-500"
            htmlFor="body"
          >
            Body:
          </label>
          <textarea
            required
            className="min-h-[50] pl-1 text-lg"
            onChange={handleBodyChange}
            cols="30"
            id="body"
            name="body"
            rows="5"
          ></textarea>
          <button className="mt-10 bg-amber-300 text-gray-700 text-xl p-2 hover:bg-amber-500 hover:text-gray-900">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBlog;
