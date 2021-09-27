import { createEffect, onCleanup } from 'solid-js';

function useWindowEvent(event, callback) {
  createEffect(() => {
    window.addEventListener(event, callback, false);
    onCleanup(() => {
      window.removeEventListener(event, callback, false);
    });
  });
}

export { useWindowEvent as u };
