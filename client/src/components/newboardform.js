function NewBoardForm({
  toggleAddBoardForm,
  handleBoardName,
  setBoardName,
  setBoardDescription,
  boardDescription,
  setBoardDueDate,
  boardDueDate,
  handleBoardCompleted,
  boardCompleted,
  boardName,
}) {
  return (
    <div
      onClick={(e) => {
        toggleAddBoardForm();
      }}
      className="crud-form"
      id="add-board-form"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <i
          onClick={() => {
            toggleAddBoardForm();
          }}
          id="form-close-icon"
          className="material-icons"
        >
          close
        </i>
        <h3 className="dash-form-title">Add Project</h3>
        <div className="dash-form-group">
          <input
            onChange={(e) => {
              setBoardName(e.target.value);
            }}
            id="board-name-input"
            type="text"
            placeholder="..."
            value={boardName}
          />
          <label className="dash-form-label">Title</label>
        </div>

        <div className="dash-form-group">
          <input
            onChange={(e) => {
              setBoardDescription(e.target.value);
            }}
            id="board-name-input"
            type="text"
            placeholder="..."
            value={boardDescription}
          />
          <label className="dash-form-label">Description</label>
        </div>

        <div className="dash-form-group">
          <input
            onChange={(e) => {
                setBoardDueDate(e.target.value);
            }}
            id="board-name-input"
            type="date"
            placeholder="..."
            value={boardDueDate}
          />
          <label className="dash-form-label">Description</label>
        </div>

        <div className="dash-form-group">
          <label className="dash-label-normal">Completed</label>
            <select onChange={(e)=>{handleBoardCompleted(e.target.value)}}>
              <option>Not yet</option>
              <option>Yes</option>
            </select>
          </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleBoardName({
                name: boardName,
                description: boardDescription,
                due_date: boardDueDate,
                completed: boardCompleted
            });
          }}
          className="dash-form-button"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewBoardForm;
