export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your list✈</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = (packedItems / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You are all set for the trip!⛱"
          : `You have ${numItems} items on your list👜, and you have completed
          ${packedItems}(${percentagePacked}%)`}
      </em>
    </footer>
  );
}
