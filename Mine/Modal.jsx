import { createMemo, Show, splitProps } from "solid-js";
import { useWindowEvent } from "../Hooks";
export default function Modal(props) {
    let ref;
    /*const handleClick = () => {
      props.onClose();
    };*/
    const [local, others] = splitProps(props, ["show", "className", "innerClassName"]);
    let className = createMemo(() => "fixed inset-0 z-10 overflow-y-auto " + local.className);
    let innerClassName = createMemo(() => "inline-block w-full max-w-md sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl " +
        local.innerClassName);
    useWindowEvent("mousedown", event => {
        let target = event.target;
        if (ref?.contains(target))
            return;
        props.onClose(false);
    });
    // let className = "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl "
    return (<Show when={props.show()}>
      {s => {
            return (<div className={className()} {...others}>
            <div className="min-h-screen px-4 text-center">
              {/* This element is to trick the browser into centering the modal contents. */}

              <span className="inline-block h-screen align-middle" aria-hidden="true">
                &#8203;
              </span>
              <div class={innerClassName()} ref={ref}>
                {/* content goes here*/}
                {/*   <Title />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <TwButton onClick={handleClick}>Got it, thanks!</TwButton>
                </div>*/}
                {props.children}
              </div>
            </div>
          </div>);
        }}
    </Show>);
}
