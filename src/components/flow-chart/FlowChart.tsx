import { type Component, For } from "solid-js";
import { FlowEdge } from "~/components/flow-chart/edge/FlowEdge";
import { createContextValue, type FChartStore, FlowChartContext } from "~/components/flow-chart/FlowChartContext";
import { FlowNode } from "~/components/flow-chart/node/FlowNode";
import "./FlowChart.css";

export const FlowChart: Component<{ data: FChartStore }> = (props) => {
  const contextValue = createContextValue(props.data);

  return (
    <FlowChartContext.Provider value={contextValue}>
      <div
        class="flow"
        ref={(ref) => {
          const handleClick = (e: MouseEvent) => {
            contextValue.store.selectedObjects.forEach((obj) => {
              const el = contextValue.store.refs.get(obj);
              if (el && !el.contains(e.target as unknown as Node)) {
                console.log("remove");
                if (obj) {
                  /* TODO contextValue.actions.setNodeSelected(obj, false);*/
                } else {
                  //contextValue.actions.setEdgeSelected(obj, false);
                }
              } else {
                console.log("--ON--", el);
              }
            });
          };
          ref.addEventListener("click", handleClick, { capture: true });
          return () => ref.addEventListener("click", handleClick);
        }}
      >
        <For each={contextValue.store.nodes}>{(node) => <FlowNode node={node} />}</For>
        <svg class="flow__edge-list">
          <For each={contextValue.store.edges}>{(edge) => <FlowEdge edge={edge} />}</For>
        </svg>
      </div>
    </FlowChartContext.Provider>
  );
};
