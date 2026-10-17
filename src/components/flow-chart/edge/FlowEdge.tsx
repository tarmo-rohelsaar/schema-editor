import { type Component, useContext } from "solid-js";
import { FlowChartContext } from "~/components/flow-chart/FlowChartContext";
import type { FChartEdge, FChartPosition } from "~/components/flow-chart/types";
import "./FlowEdge.css";

const getPath = (a: FChartPosition, b: FChartPosition) => {
  return `M ${a.x} ${a.y} C ${a.x + (b.x - a.x) / 2} ${a.y}, ${b.x - (b.x - a.x) / 2} ${b.y}, ${b.x} ${b.y}`;
};

const _getTransform = (a: FChartPosition, b: FChartPosition) => {
  return `translate(${a.x + (b.x - a.x) / 2 - 10}, ${a.y + (b.y - a.y) / 2 - 10})`;
};

export const FlowEdge: Component<{ edge: FChartEdge }> = (props) => {
  const context = useContext(FlowChartContext);

  if (!context) {
    throw new Error("can't find FlowChartContext");
  }

  return (
    <>
      <path
        class="flow-edge"
        classList={{ "flow-edge__selected": props.edge.selected }}
        d={getPath(
          {
            x: props.edge.nodeFrom.position.x + props.edge.nodeFrom.dimension.width,
            y: props.edge.nodeFrom.position.y + props.edge.nodeFrom.dimension.height / 2,
          },
          {
            x: props.edge.nodeTo.position.x,
            y: props.edge.nodeTo.position.y + props.edge.nodeTo.dimension.height / 2,
          },
        )}
        onClick={(event) => {
          event.stopImmediatePropagation();
          context.actions.setEdgeSelected(props.edge, true);
        }}
        ref={(ref) => {
          context.actions.setSelectedRef(props.edge, ref);

          return () => context.actions.removeSelectedRef(props.edge);
          /*clickOutside(ref, () => {
            if (props.edge.selected) {
              console.log("clickOutside", props.edge);

              context.actions.setEdgeSelected(props.edge, false);
            }
          });*/
        }}
        style={{ "anchor-name": `--anchor-${props.edge.id}` }}
      />
      {/*<g class="flow-edge__delete" style={{ "position-anchor": `--anchor-${props.edge.id}` }}>
        <CircleX />
      </g>*/}
    </>
  );
};
