import { Item } from './Item';

export const List = ({ items, deleteItem, changeItem }) => (
    <ul>
        {items.map((item) => {
        return (
            <div>
            <Item id={item.id} value={item.content} deleteItem={deleteItem} changeItem={changeItem} />
            </div>
        );
        })}
  </ul>
);