type widget_props = {
  title: string;
  theme: "slate" | "ecru" | "blue" | "carmine" | "purple";
  value1: number;
  value1label?: string;
  value2?: number;
  value2label?: string;
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
