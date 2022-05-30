import Book from "./Book";

const Books = ({ booksList }) => {
  return (
    <div className="lg:flex lg:flex-wrap justify-center">
      {booksList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          plot={book.plot}
          link={book.link}
          imageName={book.imageName}
        />
      ))}
    </div>
  );
};

export default Books;
