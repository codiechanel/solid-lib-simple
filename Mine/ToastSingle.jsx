import "./Toast.css";
import { HiSolidBell } from "solid-icons/hi";
import { createSignal, Show } from "solid-js";
let [toastMsg, setToastMsg] = createSignal({ msg: null });
export function showToastSingle(toastItem) {
    setToastMsg({ msg: toastItem });
}
export default function ToastSingle() {
    return (<Show when={toastMsg().msg}>
      {(item) => {
            setTimeout(() => {
                setToastMsg({ msg: null });
            }, 1000);
            return (<div className={`notification-container top-right`}>
            <div className="notification toast top-right bg-red-700">
              <button onClick={() => { }}>X</button>
              <div className="notification-image">
                <HiSolidBell class="w-6 h-6"/>
                {/*<img src={warning} alt="" />*/}
              </div>
              <div>
                <p className="notification-title">{item.title}</p>
                <p className="notification-message">{item.description}</p>
              </div>
            </div>
          </div>);
        }}
    </Show>);
}
