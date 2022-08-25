import { variants, colors } from ".";
import type { Variant } from ".";

// const getButtonStateStyle = (
//   state: string,
//   variant: Variant,
//   number: number
// ) => {
//   let style = `${state}:bg-${colors[variant]}-${number}`;
//   if (state === "disabled") {
//     style += ` ${state}:hover:bg-${colors[variant]}-${number} ${state}:hover:cursor-not-allowed`;
//   }
//   return style;
// };

const BASE_STYLE = {
  btn: "py-1 px-3 b-1 b-transparent rounded cursor-pointer",
};

const buttonShortcuts = variants.reduce((p, variant) => {
  return {
    ...p,
    [`btn-${variant}`]: `c-white bg-${colors[variant]}`,
  };
}, BASE_STYLE);

export default buttonShortcuts;
