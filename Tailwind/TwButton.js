import { template, setAttribute, spread, insert } from 'solid-js/web';
import { children, splitProps } from 'solid-js';

const _tmpl$ = template(`<button></button>`, 2);
function TwButton(props) {
  const c = children(() => props.children);
  const [local, others] = splitProps(props, ["className", "type"]);
  let type = local.type ? local.type : "button";
  let className = "text-blue-900 bg-blue-100 inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 " + local.className;
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    setAttribute(_el$, "type", type);

    _el$.className = className;

    spread(_el$, others, false, true);

    insert(_el$, c);

    return _el$;
  })();
}

export { TwButton as default };
