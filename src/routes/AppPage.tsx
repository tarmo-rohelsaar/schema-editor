import { FlowChart } from "~/components/flow-chart/FlowChart";
import type { FChartStore } from "~/components/flow-chart/FlowChartContext";
import type { FChartEdge, FChartNode } from "~/components/flow-chart/types";

const nodes: FChartNode[] = [
  {
    id: "node1",
    position: { x: 100, y: 100 },
    dimension: { width: 200, height: 100 },
    data: {},
    handles: [],
    selected: false,
    disabled: false,
  },
  {
    id: "node2",
    position: { x: 800, y: 400 },
    dimension: { width: 200, height: 200 },
    data: {},
    handles: [],
    selected: false,
    disabled: false,
  },
  {
    id: "node3",
    position: { x: 1200, y: 10 },
    dimension: { width: 200, height: 300 },
    data: {},
    handles: [],
    selected: false,
    disabled: false,
  },
  {
    id: "node4",
    position: { x: 700, y: 100 },
    dimension: { width: 200, height: 200 },
    data: {},
    handles: [],
    selected: false,
    disabled: false,
  },
];

const edges: FChartEdge[] = [
  {
    id: "edge1",
    marks: [],
    selected: false,
    disabled: false,
    nodeFrom: nodes[0],
    nodeTo: nodes[1],
  },
  {
    id: "edge2",
    marks: [],
    selected: false,
    disabled: false,
    nodeFrom: nodes[1],
    nodeTo: nodes[2],
  },
  /*{
    id: "edge_1:0_3:0",
    marks: [],
    selected: false,
    disabled: false,
    nodeFrom: nodes[0],
    nodeTo: nodes[2],
  },
  {
    id: "edge_2:0_3:1",
    marks: [],
    selected: false,
    disabled: false,
    nodeFrom: nodes[1],
    nodeTo: nodes[3],
  },*/
];

export const initialState: FChartStore = {
  nodes,
  edges,
  refs: new Map(),
  selectedObjects: new Set(),
};

export function AppPage() {
  return <FlowChart data={initialState} />;
}
