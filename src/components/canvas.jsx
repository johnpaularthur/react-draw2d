import React    from 'react';
//import Graph    from './graph.jsx';

export default class Canvas extends React.Component{
  constructor(props) {
    super(props);
    //this.state = { data: randomDataSet() };
    
  }

  componentDidMount(){
      this.renderCanvas("canvassvg");
  }

  renderCanvas(canvasId) {
    var canvas = new draw2d.Canvas(canvasId);

    canvas.add( new draw2d.shape.basic.Oval(),100,100);
    canvas.add( new draw2d.shape.basic.Rectangle(),120,150);

    canvas.add( new draw2d.shape.node.Start(), 80,80);
    canvas.add( new draw2d.shape.node.Start(), 50,50);

    canvas.add( new draw2d.shape.node.End(), 150,150);
    canvas.add( new draw2d.shape.node.End(), 350,250);

  }

  randomizeData() {
    //this.setState({ data: randomDataSet() });
  }

  render() {
    return <div>    
      <div id="canvassvg" style={{height:1500,width:1500}}></div>
    </div>
  }
}