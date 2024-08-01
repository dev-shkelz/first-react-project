import L from "../../utils/L";
import "./AboutUs.css";

//Here I've used propagation on the button, because after finishing the code,
//I wanted to open the panel on click of the div. I left the functionality
//of the button as is.

const Panel = ({ title, children, isActive, onShow, index, isSubPanel }) => {
  return (
    <div
      //I added the functionality of the button to the div:
      onClick={() => onShow(index)}
      className={`panel ${isSubPanel ? "sub-panel" : ""} ${
        isActive ? "flex" : ""
      }`}
    >
      <h1>
        <L w={title} />
      </h1>
      {isActive ? (
        <>
          {/* On the paragraph too: */}
          <p>{children}</p>
          <button
            onClick={(evt) => {
              onShow(-1);
              evt.stopPropagation();
            }}
            className="panel-button"
          >
            ⌃
          </button>
        </>
      ) : (
        <button onClick={() => onShow(index)} className="panel-button">
          ⌄
        </button>
      )}
    </div>
  );
};

export default Panel;
