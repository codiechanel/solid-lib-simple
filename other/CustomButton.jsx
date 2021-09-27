import { children, createEffect, createMemo, splitProps } from "solid-js";

export default function CustomButton(props) {
  // console.log("typeof", typeof props.className);

  createEffect(() => {
    console.log("aaa", props.className);
  });

  const c = children(() => props.children);

  const [local, others] = splitProps(props, ["className", "type"]);

  console.log("className", typeof local.className);

  // const { className, ...others } = props;

  // const [local, others] = [props

  // let type = local.type ? local.type : "button";

  let newClassName = createMemo(() => "bg-blue-900 " + local.className);

  return (
    <button class={newClassName()} {...others}>
      {props.children}
    </button>
  );
}
