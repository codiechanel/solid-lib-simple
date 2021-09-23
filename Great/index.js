import { template } from 'solid-js/web';

const _tmpl$ = template(`<div>Great coolness</div>`, 2);

function Great() {
  return _tmpl$.cloneNode(true);
}

export { Great as default };
