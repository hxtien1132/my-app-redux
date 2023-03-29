import { useEffect } from "react";
import  useLocalStorage from "./useLocalStorage";
import  useMedia from "./useMedia";

// Usage
// function App() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   return (
//     <div>
//       <div className="navbar">
//         <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
//       </div>
//       <Content />
//     </div>
//   );
// }
// Hook
 function useDarkMode() {

  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");

  // const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState !== "undefined" ? enabledState : false; // element
  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = "dark";
      //  const element = window.document.body; //toàn bộ boddy
      const element = window.document.documentElement;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );
  // Return enabled state and setter
  return [enabled, setEnabledState];
}
// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
export default useDarkMode;