import React, { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import List from "./List.js";
import Stats from "./Stats.js";
// const InitialItems = [
//   { id: 1, description: "passport", quantity: 1, packed: true },
//   { id: 2, description: "shoe shine", quantity: 2, packed: false },
//   { id: 3, description: "visa", quantity: 1, packed: false },
//   { id: 4, description: "shoe shine", quantity: 2, packed: false },
//   { id: 5, description: "shoe shine", quantity: 2, packed: false },
//   { id: 6, description: "shoe shine", quantity: 2, packed: false },
// ];
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
