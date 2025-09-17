type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
};

export const ItemList = <T,>({
  items,
  renderItem,
  keyExtractor,
}: ItemListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <div key={keyExtractor(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
};
