const books = [
  { title: "Python Crash Course", image: "images/python-book.jpg" },
  { title: "Django for APIs", image: "images/django-book.jpg" },
  { title: "Head First Java", image: "images/java-headfirst.jpg" },
  { title: "C++ Primer", image: "images/cpp-primer.jpg" },
  { title: "Python Tricks", image: "images/python-tricks.jpg" },
  { title: "You Don't Know JS", image: "images/js-you-dont-know.jpg" },
  { title: "HTML & CSS", image: "images/html-css-book.jpg" },
  { title: "SQL for Beginners", image: "images/sql-for-beginners.jpg" },
];

const bookList = document.getElementById("book-list");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <button onclick="alert('Added to cart: ${book.title}')">🛒 Add to Cart</button>
    `;
    bookList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});

displayBooks(books);
