import { defaultTheme } from "@/theme";
import styled from "@emotion/styled";

export const Column = styled.div<{ alignItems?: string }>(
  ({ alignItems = "center" }) => ({
    display: "flex",
    flexDirection: "column",
    gap: defaultTheme.spacing.small,
    alignItems: alignItems,
    justifyContent: "center",
  }),
);

export const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: defaultTheme.spacing.small,
  alignItems: "center",
  justifyContent: "center",
});
