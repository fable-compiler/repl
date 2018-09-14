import { drawOps } from "../Canvas.js";

function onAnimationFrame(tick) {
  var last = -1;
  var disposed = false;

  function loop(ts) {
    if (!disposed) {
      tick(ts, last);
      last = ts;
      requestAnimationFrame(loop);
    }
  }

  requestAnimationFrame(loop);
  return {
    dispose() {
      dispose = true;
    }

  };
}

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.ctx = null;
    this.disposable = null;
  }

  componentDidMount() {
    this.updateCanvas();
    this.disposable = onAnimationFrame((timestamp, lastTimestamp) => {
      this.props.onTick(timestamp, lastTimestamp);
    });
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    drawOps(this.refs.canvas.getContext('2d'), this.props.drawOps);
  }

  componentWillUnmount() {
    if (this.disposable) {
      this.disposable.dispose();
    }
  }

  render() {
    return React.createElement("canvas", {
      width: this.props.width,
      onMouseMove: this.props.onMouseMove,
      height: this.props.height,
      style: this.props.style,
      ref: "canvas"
    });
  }
}
