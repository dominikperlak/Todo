export const Item = (props) => (
    <div>
      <li key={props.id}>
                {props.value}
                <button
                  className="delete-button"
                  onClick={() => null}
                >
                  ❌
                </button>
         </li>
    </div>
)