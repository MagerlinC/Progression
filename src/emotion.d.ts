import "@emotion/react";
import { ProgressionTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ProgressionTheme {}
}
