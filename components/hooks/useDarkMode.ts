import { useEffect } from 'react';
import usePrefersDarkModeHook from './usePrefersDarkModeHook';
import useSafeLocalStorageHook from './useSafeLocalStorageHook';

const useDarkModeHook = () => {
  const [isEnabled, setIsEnabled] = useSafeLocalStorageHook('dark-mode', undefined);
  const prefersDarkMode = usePrefersDarkModeHook();

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setIsEnabled];
};
export default useDarkModeHook;
