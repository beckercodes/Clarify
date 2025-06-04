import React, { useEffect, useRef } from 'react';
import Layout from '../layout/Layout';
import * as d3 from 'd3';

const NetworkVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Mock data for network visualization
  const networkData = {
    nodes: [
      { id: "1", name: "John Doe", company: "Acme Corp", group: 1 },
      { id: "2", name: "Sarah Anderson", company: "Goldman Sachs", group: 2 },
      { id: "3", name: "Michael Johnson", company: "Microsoft", group: 3 },
      { id: "4", name: "Emily Williams", company: "JP Morgan", group: 2 },
      { id: "5", name: "Robert Brown", company: "Apple", group: 3 },
      { id: "6", name: "Jennifer Davis", company: "Google", group: 3 },
      { id: "7", name: "William Miller", company: "Amazon", group: 3 },
      { id: "8", name: "Elizabeth Wilson", company: "Facebook", group: 3 },
      { id: "9", name: "David Moore", company: "Netflix", group: 4 },
      { id: "10", name: "Patricia Taylor", company: "Uber", group: 4 },
      { id: "11", name: "James Anderson", company: "Goldman Sachs", group: 2 },
      { id: "12", name: "Linda Thomas", company: "Bank of America", group: 2 },
    ],
    links: [
      { source: "1", target: "2", value: 5 },
      { source: "1", target: "3", value: 8 },
      { source: "1", target: "4", value: 6 },
      { source: "1", target: "5", value: 4 },
      { source: "2", target: "4", value: 7 },
      { source: "2", target: "11", value: 9 },
      { source: "2", target: "12", value: 5 },
      { source: "3", target: "5", value: 6 },
      { source: "3", target: "6", value: 4 },
      { source: "3", target: "7", value: 3 },
      { source: "4", target: "12", value: 7 },
      { source: "5", target: "6", value: 8 },
      { source: "5", target: "8", value: 5 },
      { source: "6", target: "7", value: 9 },
      { source: "6", target: "8", value: 7 },
      { source: "7", target: "8", value: 6 },
      { source: "9", target: "10", value: 4 },
      { source: "9", target: "5", value: 3 },
      { source: "10", target: "9", value: 5 },
    ]
  };

  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear any existing visualization
    d3.select(svgRef.current).selectAll("*").remove();
    
    const width = 800;
    const height = 600;
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");
    
    // Create a force simulation
    const simulation = d3.forceSimulation(networkData.nodes as any)
      .force("link", d3.forceLink(networkData.links as any).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(50));
    
    // Create links
    const link = svg.append("g")
      .selectAll("line")
      .data(networkData.links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d: any) => Math.sqrt(d.value));
    
    // Create nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(networkData.nodes)
      .join("g")
      .call(drag(simulation) as any);
    
    // Add circles to nodes
    node.append("circle")
      .attr("r", 20)
      .attr("fill", (d: any) => {
        const colors = ["#4361ee", "#4895ef", "#4caf50", "#ff9800"];
        return colors[d.group - 1];
      });
    
    // Add text labels to nodes
    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .text((d: any) => d.name.split(" ").map((n: string) => n[0]).join(""));
    
    // Add tooltips
    node.append("title")
      .text((d: any) => `${d.name}\n${d.company}`);
    
    // Update positions on each tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });
    
    // Drag functionality
    function drag(simulation: any) {
      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      
      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }
      
      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }
  }, []);

  return (
    <Layout activePage="network">
      <div className="header">
        <h1 className="page-title">Network Visualization</h1>
        
        <div className="network-controls">
          <div className="search-bar">
            <div className="search-icon"></div>
            <input type="text" className="search-input" placeholder="Search connections..." />
          </div>
          
          <div className="filter-dropdown">
            <button className="filter-btn">
              <div className="filter-icon"></div>
              Filter
            </button>
          </div>
        </div>
      </div>
      
      <div className="network-container">
        <div className="network-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">View Options</h3>
            <div className="view-options">
              <div className="option-item">
                <input type="radio" id="view-all" name="view" checked />
                <label htmlFor="view-all">All Connections</label>
              </div>
              <div className="option-item">
                <input type="radio" id="view-direct" name="view" />
                <label htmlFor="view-direct">Direct Connections</label>
              </div>
              <div className="option-item">
                <input type="radio" id="view-second" name="view" />
                <label htmlFor="view-second">Second Degree</label>
              </div>
            </div>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Group By</h3>
            <div className="group-options">
              <div className="option-item">
                <input type="radio" id="group-none" name="group" />
                <label htmlFor="group-none">None</label>
              </div>
              <div className="option-item">
                <input type="radio" id="group-company" name="group" checked />
                <label htmlFor="group-company">Company</label>
              </div>
              <div className="option-item">
                <input type="radio" id="group-industry" name="group" />
                <label htmlFor="group-industry">Industry</label>
              </div>
              <div className="option-item">
                <input type="radio" id="group-location" name="group" />
                <label htmlFor="group-location">Location</label>
              </div>
            </div>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: "#4361ee" }}></div>
                <div className="legend-label">Finance</div>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: "#4895ef" }}></div>
                <div className="legend-label">Technology</div>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: "#4caf50" }}></div>
                <div className="legend-label">Healthcare</div>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: "#ff9800" }}></div>
                <div className="legend-label">Other</div>
              </div>
            </div>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Selected Contact</h3>
            <div className="selected-contact">
              <div className="contact-avatar">SA</div>
              <div className="contact-info">
                <div className="contact-name">Sarah Anderson</div>
                <div className="contact-title">VP of Finance</div>
                <div className="contact-company">Goldman Sachs</div>
              </div>
              <a href="/contact/2" className="view-profile-btn">View Profile</a>
            </div>
          </div>
        </div>
        
        <div className="network-visualization">
          <svg ref={svgRef}></svg>
        </div>
      </div>
    </Layout>
  );
};

export default NetworkVisualization;
