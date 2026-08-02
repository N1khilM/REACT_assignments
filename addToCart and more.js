async function removeCartItem(itemID) {
  const res = await fetch(`https://api.example.com/cart/${itemID}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}

async function getCartSummary() {
  const res = await fetch("https://api.example.com/cart");
  const { items, total } = await res.json();
  return { items, total };
}

async function getUserOrders(userId) {
  const res = await fetch(`https://api.example.com/users/${userId}/orders`);
  const { orders } = await res.json();
  console.log(orders.length);
}

async function checkout(cartId, paymentMethod) {
  const res = await fetch(`https://api.example.com/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartId, paymentMethod }),
  });
  const data = await res.json({ orderId, status });
  return data;
}

async function addToCart(cart, product) {
  const existing = cart.find((p) => p.id === product.id);

  if (existing) {
    cart = cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
}

async function addToCart(cart, product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    cart = cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
  return cart;
}

async function removeFromCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}
function increaseQty(cart, id) {
  return cart.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
}

function decreaseQty(cart, id) {
  return cart
    .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
    .filter((p) => p.qty > 0);
}

async function addToCart(cart, product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    cart = cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
  return cart;
}

function addToCart(cart, product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    cart = cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
  return cart;
}

function removeCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}

function removeCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}

function increaseQty(cart, id) {
  return cart.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
}

function decreaseQty(cart, id) {
  return cart
    .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
    .filter((p) => p.qty > 0);
}

// all parts
function addToCart(cart, product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    cart = cart.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
  return cart;
}

function removeFromCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}

function increaseQty(cart, id) {
  return cart.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
}

function decreaseQty(cart, id) {
  return cart
    .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
    .filter((p) => p.qty > 0);
}

// REACT STUFF

function NameInput() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  return (
    <form>
      <input value={email} onChange={handleChange} />
    </form>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          <p>{`${u.name}-${u.age}`}</p>
        </div>
      ))}
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <p>{`${p.name}-${p.price}`}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  // count state goes here
  const [count, setCount] = useState(0);
  // increment function goes here
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Display count={count} />
      <Button onClick={handleClick} />
    </div>
  );
}

// useEffect example and tests
import { useEffect, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("https://api.example.com/products");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return <div>{products.length} products loaded</div>;
}

// tests
import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function loadUser() {
      const res = await fetch("https://api.example.com/user");
      const data = await res.json();
      setUser(data);
    }
    loadUser();
  }, []);
  return (
    <>
      <div>{user ? user.name : "Loading..."}</div>
    </>
  );
}

function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch("https://api.example.com/products/1");
      const data = await res.json();
      setProduct(data);
    }
    loadProduct();
  }, []);

  return <>{product ? `${product.name}-Rs${product.price}` : "Loading"}</>;
}

function addToWishlist(wishlist, item) {
  const existing = wishlist.find((w) => w.id === item.id);
  if (existing) {
    return wishlist.filter((w) => w.id !== item.id);
  } else {
    return [...wishlist, item];
  }
}

function removeFromWishlist(wishlist, id) {
  const removed = wishlist.filter((w) => w.id !== id);
  console.log(`${removed.length} items`);
  return removed;
}

function removeFromWishlist(wishlist, id) {
  const removed = wishlist.filter((w) => w.id !== id);
  console.log(`${removed.length} items`);
  return removed;
}

<p>{`${wishlist.length} items saved`}</p>;

function Wishlist({ wishlist, onRemove }) {
  return (
    <>
      <p>{`${wishlist.length} items saved`}</p>
      {wishlist.map((w) => (
        <div key={w.id}>
          <p> {w.name}</p>
          <p> {w.price}</p>
          <button onClick={() => onRemove(w.id)}>remove wishlist</button>
        </div>
      ))}
    </>
  );
}

// imports and exports
export function add() {}
export function subtract() {}
// above two functions are saved in mathUtils.js

import { add } from "./mathUtils";
import { Notes } from "@mui/icons-material";

// learning to think smallest components for projects lol
function addNote() {
  const newNote = { id: Date.now(), title: title, body: body };
  setNotes([...notes, newNote]);
  setTitle("");
  setBody("");
}

function deleteNote(id) {
  setNotes(notes.filter((n) => n.id !== id));
}

// start Edit
const [editingId, setEditingId] = useState(null);
function startEdit(id) {
  const note = notes.find((n) => n.id === id);
  setTitle(note.title);
  setBody(note.body);
  setEditingId(id);
}

function saveNote() {
  if (editingId) {
    setNotes(
      notes.map((n) =>
        n.id === editingId ? { ...n, title: title, body: body } : n,
      ),
    );
  } else {
    const newNote = { id: Date.now(), title: title, body: body };
    setNotes([...notes, newNote]);
  }
  setTitle("");
  setBody("");
  setEditingId(null);
}

const [search, setSearch] = useState("");
const filteredNotes = notes.filter((n) =>
  n.title.toLowerCase().includes(search.toLowerCase()),
);

return (
  <>
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
    {filteredNotes.map((f) => (
      <div key={f.id}>
        <p>{f.title}</p>
        <p>{f.body}</p>
      </div>
    ))}
  </>
);

{
  wishlist.map((w) => (
    <div key={w.id}>
      <p> {w.name}</p>
      <p> {w.price}</p>
      <button onClick={() => onRemove(w.id)}>remove wishlist</button>
    </div>
  ));
}

{
  something.something((s) => (
    <div key={s.id}>
      <somethings>lalalala</somethings>
    </div>
  ));
}

{
  employees.map((e) => (
    <div key={e.empId}>
      <p>{e.fullName}</p>
      <p>{e.department}</p>
    </div>
  ));
}

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [products, setProducts] = useState([]);

useEffect(() => {
  async function loadProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://api.example.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }
  loadProducts();
}, []);

return (
  <div>
    {loading
      ? "still loading please wait..."
      : error
        ? "something went wrong"
        : products.length === 0
          ? "No products found"
          : products.map((p) => (
              <div key={p.id}>
                <p>{p.name}</p>
              </div>
            ))}
  </div>
);
