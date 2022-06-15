import CreateBlog from "../components/CreateBlog";
import PageLoading from "../components/pages/PageLoading";
import PageErrors from "../components/pages/PageErrors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const newBlog = { userId: 11 };
  const [title, setTitle] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMissingData, setIsMissingData] = useState(false);
  const [submitError, setSubmitError] = useState(undefined);
  const visible = !isSubmitting && !submitError;

  const handleInput = (element) => {
    if (element.value.trim() === "") {
      if (!element.classList.contains("border-4")) {
        element.classList.add("border-4", "border-amber-800");
      }
    } else {
      element.classList.remove("border-4", "border-amber-800");
      setIsMissingData(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleInput(e.target);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    handleInput(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      setIsMissingData(true);
      return;
    }

    setIsMissingData(false);
    setIsSubmitting(true);

    newBlog.title = title.trim();
    newBlog.body = body.trim();

    fetch("http://localhost:3000/blogs/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then(() => {
        setIsSubmitting(false);
        navigate("/");
      })
      .catch((e) => {
        setSubmitError(e.message);
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <PageLoading isLoading={isSubmitting} />
      <CreateBlog
        handleTitleChange={handleTitleChange}
        handleBodyChange={handleBodyChange}
        handleSubmit={handleSubmit}
        visible={visible}
      />
      {isMissingData && (
        <p className="text-xl text-red-700 text-center pb-5">
          Please fill the required fields before submitting and try again!
        </p>
      )}
      <PageErrors errors={[submitError]} />
    </div>
  );
};

export default CreatePage;
