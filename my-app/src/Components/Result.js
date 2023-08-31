const Result = (props) => {
  return (
    <div className="result">
      <div style={{ display: "flex" }}>
        {props.result.image === undefined ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            className="result-image"
          />
        ) : (
          <img src={props.result.image.contentUrl} className="result-image" />
        )}
        <div>{props.result.name}</div>
      </div>
      <button
      style={{borderRadius:"40%"}}
        onClick={() => {
          temp_dict = { ...props.selectedItmes };
          temp_dict[
            props.result["@id"].split("/")[
              props.result["@id"].split("/").length - 1
            ]
          ] = props?.result?.image?.contentUrl;
          props.setSelectedItems(temp_dict);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Result;
