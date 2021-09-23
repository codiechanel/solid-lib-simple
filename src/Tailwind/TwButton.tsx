import { children, splitProps } from "solid-js";

export default function TwButton(props) {
  const c: any = children(() => props.children);

  const [local, others] = splitProps(props, ["className", "type"]);

  let type = local.type ? local.type : "button";
  let className =
    "text-blue-900 bg-blue-100 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 " +
    local.className;

  return (
    <button type={type} class={className} {...others}>
      {c()}
    </button>
  );
}
