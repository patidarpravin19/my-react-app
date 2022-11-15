import TodoItem from "./TodoItem"

export default function Todos(props) {

    return (
        <div className="container">
            {
                props.data && props.data.length > 0 ?
                    <div>
                        <h4>My Todos List</h4>
                        {
                            props.data.map((item) => {
                                return (
                                        <TodoItem key={item.id} item={item} onDelete={props.onDelete} />
                                )
                            })
                        }
                    </div>
                    : <div>No data found or passed from parent</div>
            }

        </div>
    )
}