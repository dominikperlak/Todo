import { Item } from './Item';

export const List = ({ items, deleteItem }) => (
    <ul>
        {items.map((item) => {
        return (
            <div>
            <Item id={item.id} value={item.value} deleteItem={deleteItem} />
            </div>
        );
        })}
  </ul>
);