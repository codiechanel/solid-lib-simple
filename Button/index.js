import { template } from 'solid-js/web';

const _tmpl$ = template(`<div>Cool</div>`, 2);

function Cool() {
  return _tmpl$.cloneNode(true);
}

export { Cool as default };
