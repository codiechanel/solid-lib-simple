import { render } from "solid-js/web";
import { createEffect, createSignal } from "solid-js";
import Great from "../src/Great";
import { TwButton } from "../src/Tailwind";
import "../src/Chakra/chakra.css";
import Input from "../src/Chakra/ChakraInput";
import useDebounce from "../src/Hooks/useDebounce";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const [value, setValue] = createSignal();
  const [color, setColor] = createSignal("bg-red-200");

  let debounced = useDebounce(value, 1000);

  createEffect(() => {
    console.log(debounced());
  });

  return (
    <div class="bg-gray-600 min-h-screen p-8 ">
      <button
        type="button"
        onClick={() => {
          setColor("bg-blue-400");
        }}
      >
        color
      </button>
      <Input
        onInput={({ target: { value } }: any) => {
          // console.log(value);
          setValue(value);
        }}
      />
      <div class={color()}>hmmm</div>
      <TwButton className={color()}>nice ww one</TwButton>
    </div>
  );
}

render(() => <Counter />, document.getElementById("app"));
