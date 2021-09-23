import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import Great from '../src/Great'

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      <Great/>
      nice
      {count()}
    </button>
  );
}

render(() => <Counter />, document.getElementById("app"));
