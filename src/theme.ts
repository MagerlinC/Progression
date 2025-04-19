type SizeObject = {
  small: string;
  medium: string;
  large: string;
};

export type ProgressionTheme = {
  spacing: SizeObject;
  borderRadius: SizeObject;
};

export const defaultTheme: ProgressionTheme = {
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  borderRadius: {
    small: "6px",
    medium: "8px",
    large: "16px",
  },
};
