import React from "react";
import { Graph } from "react-d3-graph";
import styled from "styled-components";

const Styles = styled.div`
.graph {
  display: flex;
  justify-content: center;
}
`;

export default function Blog() {
  const data = {
    nodes: [
      { id: "Explainers", size: 100 },
      { id: "Attachment in Culture", size: 100 }, 
      { id: "The Local Maximum of Victimhood", size: 100 }, 
      { id: "The Problem of J-Curves", size: 200 },
      { id: "Is a Whale a Fish?", size: 300 },
      { id: "Top-Down Learning", size: 300 },
      { id: "Distortion Debt", size: 100 },
      { id: "The Universal Trade", size: 300 },
      { id: "The Three Month Rule", size: 100 },
      { id: "The Death of Expertise?", size: 300 },
      { id: "Faceting Reality", size: 100 },
      { id: "Behavior Loops and Dojos", size: 100 },
      { id: "The Future of Learning", size: 400 }, 
      { id: "Fat Tails", size: 100 }, 
    ],
    links: [
      { source: "Attachment in Culture", target: "The Local Maximum of Victimhood" },
      { source: "The Death of Expertise?", target: "The Problem of J-Curves" },
      { source: "Top-Down Learning", target: "The Death of Expertise?" },
      { source: "The Future of Learning", target: "Top-Down Learning" },
      { source: "The Future of Learning", target: "Behavior Loops and Dojos" },
      { source: "The Future of Learning", target: "The Three Month Rule" },
      { source: "Explainers", target: "Is a Whale a Fish?" },
      { source: "Explainers", target: "Distortion Debt" },
      { source: "Explainers", target: "Faceting Reality" },
      { source: "Explainers", target: "The Universal Trade" },
      { source: "Explainers", target: "Fat Tails" },
    ],
  };

  // the graph configuration
  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: "#7851a9",
      highlightStrokeColor: "#7851a9",
    },
    link: {
      highlightColor: "#888888",
    },
    width: window.innerWidth/1.01,
    height: window.innerHeight/1.75
  };

  const onClickNode = function(nodeId) {
    if (nodeId === "Attachment in Culture"){window.location.href = "https://savsidorov.substack.com/p/attachment-in-culture-and-a-path"}
    if (nodeId === "The Local Maximum of Victimhood"){window.location.href = "https://savsidorov.substack.com/p/the-local-maximum-of-victimhood"}
    if (nodeId === "The Problem of J-Curves"){window.location.href = "https://savsidorov.substack.com/p/the-problem-of-j-curves"}
    if (nodeId === "Is a Whale a Fish?"){window.location.href = "https://savsidorov.substack.com/p/is-a-whale-a-fish"}
    if (nodeId === "Top-Down Learning"){window.location.href = "https://savsidorov.substack.com/p/top-down-learning"}
    if (nodeId === "Distortion Debt"){window.location.href = "https://savsidorov.substack.com/p/distortion-debt"}
    if (nodeId === "Fat Tails"){window.location.href = "https://savsidorov.substack.com/p/explainer-fat-tails"}
    if (nodeId === "The Universal Trade"){window.location.href = "https://savsidorov.substack.com/p/explainer-the-universal-trade"}
    if (nodeId === "The Three Month Rule"){window.location.href = "https://savsidorov.substack.com/p/the-three-month-rule"}
    if (nodeId === "The Death of Expertise?"){window.location.href = "https://savsidorov.substack.com/p/the-death-of-expertise"}
    if (nodeId === "Faceting Reality"){window.location.href = "https://savsidorov.substack.com/p/faceting-reality"}
    if (nodeId === "Behavior Loops and Dojos"){window.location.href = "https://savsidorov.substack.com/p/behavior-loops-and-dojos"}
    if (nodeId === "The Future of Learning"){window.location.href = "https://savsidorov.substack.com/p/the-future-of-learning"}
  };
  
	return (
    <Styles>
      <div className="graph">
        <Graph
          id="graph-id" // id is mandatory
          data={data}
          config={config}
          onClickNode={onClickNode}
        />
      </div>
    </Styles>
	);
}

/* Unused graph shadow css

  .graph > * > *{
    box-shadow: 2px 2px 10px 4px #888888;
  }

*/