import { events, position, useDraggable } from "@neodrag/solid";
import { BsStopCircleFill } from "solid-icons/bs";
import { type Component, useContext } from "solid-js";
import { FlowChartContext } from "~/components/flow-chart/FlowChartContext";
import type { FChartNode } from "~/components/flow-chart/types";
import "./FlowNode.css";

export const FlowNode: Component<{ node: FChartNode }> = (props) => {
  const context = useContext(FlowChartContext);
  //const [draggableRef, setDraggableRef] = createSignal<HTMLElement | null>(null);

  if (!context) {
    throw new Error("can't find FlowChartContext");
  }

  return (
    <div
      class="flow-node"
      classList={{ "flow-node__selected": props.node.selected }}
      onClick={(event) => {
        event.stopImmediatePropagation();
        context.actions.setNodeSelected(props.node, true);
      }}
      ref={(ref) => {
        //setDraggableRef(ref);
        useDraggable(
          () => ref,
          [
            position({ default: props.node.position }),
            events({
              onDragStart: ({ offset }) => console.log("start", offset.x, offset.y),
              onDrag: ({ offset }) => console.log("drag", offset.x, offset.y),
              onDragEnd: ({ offset }) => console.log("end", offset.x, offset.y),
            }),
          ],
        );

        context.actions.setSelectedRef(props.node, ref);

        return () => context.actions.removeSelectedRef(props.node);

        /*clickOutside(ref, () => {
          if (props.node.selected) {
            console.log("clickOutside", props.node);
            context.actions.setNodeSelected(props.node, false);
          }
        });*/
      }}
      style={{
        translate: `${props.node.position.x}px ${props.node.position.y}px`,
        width: `${props.node.dimension.width}px`,
        height: `${props.node.dimension.height}px`,
      }}
    >
      <BsStopCircleFill class="flow-node--delete" />

      <span class="flow-node--label">props.label {props.node.id}</span>

      <div class="flow-node--content">props.content</div>

      <div class="flow-node--input-list">
        <div class="flow-node--input"></div>
        <div class="flow-node--input"></div>
      </div>
    </div>
  );
};
