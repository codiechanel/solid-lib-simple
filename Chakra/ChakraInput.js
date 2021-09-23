import { createContext, useContext, mergeProps, splitProps, untrack } from 'solid-js';
import { isServer, ssr, ssrSpread, spread } from 'solid-js/web';

let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,a=/\/\*[^]*?\*\/|\s\s+|\n/g,o=(e,t)=>{let r,l="",a="",n="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?o(s,c):c+"{"+o(s,"k"==c[1]?"":t)+"}":o(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=o.p?o.p(c,s):c+":"+s+";");}return n[0]?(r=t?t+"{"+n+"}":n,l+r+a):l+a},n={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=n[p]||(n[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return "go"+r})(p));if(!n[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);n[u]=o(i?{["@keyframes "+u]:t}:t,r?"":"."+u);}return ((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e);})(n[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):e;}return e+l+(null==n?"":n)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}p.bind({g:1});p.bind({k:1});

const ThemeContext = createContext();
function styled(tag) {
  let _ctx = this || {};
  return (...args) => {
    const Styled = props => {
      const theme = useContext(ThemeContext);
      const withTheme = mergeProps(props, { theme });
      const clone = mergeProps(withTheme, {
        get className() {
          const pClassName = withTheme.className,
            append = "className" in withTheme && /^go[0-9]+/.test(pClassName);
          // Call `css` with the append flag and pass the props
          let className = p.apply(
            { target: _ctx.target, o: append, p: withTheme, g: _ctx.g },
            args
          );
          return [pClassName, className].filter(Boolean).join(" ");
        }
      });
      const [local, newProps] = splitProps(clone, ["as"]);
      const createTag = local.as || tag;
      let el;
      if (typeof createTag === "function") {
        el = createTag(newProps);
      } else if (isServer) {
        const [local, others] = splitProps(newProps, ["children"]);
        el = ssr(
          [`<${createTag} `, ">", `</${createTag}>`],
          ssrSpread(others),
          local.children || ""
        );
      } else {
        el = document.createElement(createTag);
        spread(el, newProps);
      }
      return el;
    };
    Styled.className = props => {
      return untrack(() => {
        return p.apply({ target: _ctx.target, p: props, g: _ctx.g }, args);
      });
    };
    return Styled;
  };
}

const ChakraInput = styled("input")`
  width: 100%;
  min-width: 0;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-normal);
  font-size: var(--chakra-fontSizes-md);
  padding-inline-start: var(--chakra-space-4);
  padding-inline-end: var(--chakra-space-4);
  height: var(--chakra-sizes-10);
  border-radius: var(--chakra-radii-md);
  border-style: solid;
  border-width: 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-color: inherit;
  background: inherit;

  &:focus,
  &[data-focus] {
    z-index: 1;
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49, 130, 206) 0px 0px 0px 1px;
  }

  &:hover,
  &[data-hover] {
    border-color: var(--chakra-colors-gray-300);
  }
`;

export { ChakraInput as default };
