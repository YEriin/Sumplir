import BoardItem from "./BoardItem";

const ColumnBoard = () => {
    return (
        <div className="columnBoardContainer">
            <div className={"columnBoardHead"}>
        <span className="item">
          <slot/>
        </span>
                <div className="item">
                    <button>+</button>
                    <button>...</button>
                </div>
            </div>
            <div className="columnBoardItemList">
                {/* {#each data as { v }, i}
      <BoardItem content={`${v}`} />
    {/each} */}
            </div>
        </div>
    );
};

export default ColumnBoard;
