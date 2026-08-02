/*bookmarks=title,url
button link,
delete button,



addbook()
search()
empty()


*/

import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");

  function deleteB(id) {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  }
  function addBookmark() {
    const newBookmark = { id: Date.now(), title: title, url: url };
    setBookmarks([...bookmarks, newBookmark]);
  }

  const filteredBookmarks = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <form>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            addBookmark();
          }}
        >
          {" "}
          Add
        </button>
      </form>

      {filteredBookmarks.length < 1
        ? "No Bookmarks yet"
        : filteredBookmarks.map((b) => (
            <div key={b.id}>
              <p>{b.title}</p>
              <a href={b.url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
              <button
                type="button"
                onClick={() => {
                  deleteB(b.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
    </div>
  );
}
