export type FChartPosition = {
  x: number;
  y: number;
};

export type FChartDimension = {
  width: number;
  height: number;
};

export type FChartNode = {
  id: string;
  position: FChartPosition;
  dimension: FChartDimension;
  data: Record<string, unknown>;
  handles: FChartHandle[];
  selected: boolean;
  disabled: boolean;
};

export type FChartHandle = {
  id: string;
};

export type FChartEdge = {
  id: string;
  marks: FChartChartMark[];
  selected: boolean;
  disabled: boolean;
  nodeFrom: FChartNode;
  nodeTo: FChartNode;
};

export type FChartChartMark = {
  id: string;
};
