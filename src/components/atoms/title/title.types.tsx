export enum FontSize {
  "text-small",
  "text-medium",
}

type FontSizes = keyof typeof FontSize;

export interface Props {
  text: string;
  fontSize: FontSizes;
}
