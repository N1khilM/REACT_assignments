import { useState } from "react";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  function addItem() {
    if (!name || !category || price <= 0) {
      setError("Please fill in all fields with valid values.");
      return;
    }
    setError("");

    const newItem = {
      id: Date.now(),
      name: name,
      category: category,
      quantity: 0,
      price: price,
    };
    setItems([...items, newItem]);
    setName("");
    setCategory("");
    setPrice(0);
  }

  function removeItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  const filteredItems =
    search === "" ? items : items.filter((item) => item.category === search);

  const totalValue = filteredItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function increase(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function decrease(id) {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  return (
    <>
      {error && <p>{error}</p>}
      {items.length === 0 && <p>No items in inventory.</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <select value={search} onChange={(e) => setSearch(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Groceries">Groceries</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Groceries">Groceries</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>
      {filteredItems.length === 0 && <p>No items found</p>}
      {filteredItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>
            Quantity: {item.quantity}{" "}
            {item.quantity === 0 && <span> Out of Stock</span>}
          </p>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <p>Price: ${item.price.toFixed(2)}</p>

          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total Value: ${totalValue.toFixed(2)}</h2>
    </>
  );
}
