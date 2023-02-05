import {createRoot} from "react-dom/client";
import Button from "./Button.js"


function App() {
    function handleButtonClick() {
        console.log("Button clicked");
    }

    // here we provide you with sample usages of the Button component
    // feel free to add your own
     return (<div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Button>Normal</Button>
        <Button outline>Outline</Button>
        <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
    </div>);
}

createRoot(document.querySelector("#react-root")).render(<App />);