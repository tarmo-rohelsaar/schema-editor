import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import type { FChartEdge, FChartNode } from "~/components/flow-chart/types";

export type FChartStore = {
  nodes: FChartNode[];
  edges: FChartEdge[];
  refs: Map<FChartNode | FChartEdge, Element>;
  selectedObjects: Set<FChartNode | FChartEdge>;
};

export const createContextValue = (data: FChartStore) => {
  const [store, setStore] = createStore<FChartStore>(data);

  const actions = {
    setNodeSelected: (node: FChartNode, state: boolean) => {
      setStore("nodes", store.nodes.indexOf(node), "selected", state);
      setStore("selectedObjects", (x) => {
        state ? x.add(node) : x.delete(node);
        return x;
      });
    },

    setEdgeSelected: (edge: FChartEdge, state: boolean) => {
      setStore("edges", store.edges.indexOf(edge), "selected", state);
      setStore("selectedObjects", (x) => {
        state ? x.add(edge) : x.delete(edge);
        return x;
      });
    },

    setSelectedRef: (obj: FChartEdge | FChartNode, ref: Element) => {
      setStore("refs", (x) => x.set(obj, ref));
    },

    removeSelectedRef: (obj: FChartEdge | FChartNode) => {
      setStore("refs", (x) => {
        x.delete(obj);
        return x;
      });
    },
  };

  return { store, actions };
};

export const FlowChartContext = createContext<ReturnType<typeof createContextValue>>();
