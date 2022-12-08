export const Item = ({id, value, deleteItem}) => (
  <div>
    <li key={id}>
              {value}
              <button
                className="delete-button"
                onClick={() => deleteItem(id)}
              >
                ❌
              </button>
       </li>
  </div>
)