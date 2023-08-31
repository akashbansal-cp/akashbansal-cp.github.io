import { useEffect, useState } from "react";
import Result from "./Result";
import Search from "./Search";

const App = () => {
  const [status, setStatus] = useState("🔴");
  const [itemList, setItemList] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [playlistUrl, setPlaylistUrl] = useState("");
  useEffect(() => {
    loadClient = () => {
      gapi.client.setApiKey("AIzaSyD8vh9w-Uw-1JgNPgNRx8ykCYDn_FeUBuU");
      return gapi.client
        .load("https://kgsearch.googleapis.com/$discovery/rest?version=v1")
        .then(
          () => {
            console.log("GAPI client loaded for API");
            setStatus("🟢");
          },
          (err) => {
            console.error("Error loading GAPI client for API", err);
          }
        );
    };
    loadClient();
  }, []);
  return (
    <div className="app">
      <div style={{ padding: "10px 20px" }}>gapi Status : {status} </div>
      {playlistUrl === "" ? null : (
        <div style={{ padding: "10px 20px" }}>URL : {playlistUrl} </div>
      )}
      <div>
        {Object.entries(selectedItems).map((e) => (
          <img
            src={
              e[1] === undefined
                ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                : e[1]
            }
            key={e[0]}
            style={{ width: "70px", margin: "5px" }}
            onClick={() => {
              temp = { ...selectedItems };
              delete temp[e[0]];
              setSelectedItems(temp);
            }}
          />
        ))}
        <button
          onClick={() => {
            var l = "RDAT";
            l+=document.getElementById('s1').value;
            l+=document.getElementById('s2').value;
            l+='a';
            Object.entries(selectedItems).map((e, ind) => {
              if (ind !== 0) l += "I";
              l += e[0];
            });
            l += "E";
            setPlaylistUrl("https://music.youtube.com/playlist?list=" + l);
          }}
        >
          Generate
        </button>
      </div>
      <Search setItemList={setItemList} />
      <div className="result-area">
        {itemList === null
          ? null
          : itemList.map((e, ind) => (
              <Result
                key={e.result["@id"]}
                {...e}
                selectedItmes={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            ))}
      </div>
    </div>
  );
};

export default App;
