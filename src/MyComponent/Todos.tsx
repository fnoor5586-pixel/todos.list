type Todo = {
  sno: number;
  title: string;
  desc: string;
};

type TodosProps = {
  todos: Todo[];
  onDelete: (sno: number) => void;
};

const Todos = ({ todos, onDelete }: TodosProps) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>

      {todos.length === 0 ? (
        <p className="text-center">No Todos to display</p>
      ) : (
        todos.map((todo) => (
          <div className="card my-3" key={todo.sno}>
            <div className="card-body">
              <h5>{todo.title}</h5>
              <p>{todo.desc}</p>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(todo.sno)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;

