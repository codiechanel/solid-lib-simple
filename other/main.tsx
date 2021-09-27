import { render } from "solid-js/web";
import { createEffect, createSignal } from "solid-js";

// import { TwButton as CustomButton } from "../src/Tailwind";
import "../src/Chakra/chakra.css";
import CustomButton from "../other/CustomButton";
import Input from "../src/Chakra/ChakraInput";
import ChakraTextArea from "../src/Chakra/ChakraTextArea";
import useDebounce from "../src/Hooks/useDebounce";

function App() {
  const [color, setColor] = createSignal("bg-red-200");

  function returnColor() {
    return color();
  }

  return (
    <div class="bg-gray-600 min-h-screen p-8 ">
      <ChakraTextArea />
      <CustomButton
        className={color()}
        onClick={() => {
          setColor("bg-blue-400");
        }}
      >
        Change Color
      </CustomButton>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));
