import { Item } from './Item';


export const List = ({ items }) => (
    <ul>
        {items.map((item) => {
        return (
            <div>
            <Item id={item.id} value={item.value} />
            </div>
        );
        })}
  </ul>
);