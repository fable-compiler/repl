import { drawOps } from "../Canvas.js";

var sun = new Image();
var moon = new Image();
var earth = new Image();

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
}
init();

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

  updateCanvas2() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);
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
      ref: "canvas" //: el => this.ctx = el != null ? el.getContext("2d") : null
    });
  }

}
