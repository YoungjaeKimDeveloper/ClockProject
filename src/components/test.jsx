import React from "react";
function App() {
  const filePicker = React.useRef();
  const handleFile = () => {
    filePicker.current.click();
  };

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          useRef={filePicker}
        />
        <button onClick={handleFile}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
