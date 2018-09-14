import { L, Record, declare, Union } from "../fable-core/Types.js";
import { iterate } from "../fable-core/Seq.js";
import { append } from "../fable-core/List.js";
import react_canvas$002Ejs from "./js/react_canvas.js";
import { ofList } from "../fable-core/Array.js";
import { createObj } from "../fable-core/Util.js";
export const DrawOp = declare(function DrawOp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function drawOps(ctx, ops) {
  iterate(function (op) {
    switch (op.tag) {
      case 12:
        {
          ctx.stroke();
          break;
        }

      case 11:
        {
          const ops$$1 = op.fields[0];
          drawOps(ctx, ops$$1);
          break;
        }

      case 0:
        {
          const opts$$1 = op.fields[0];
          ctx.lineTo(opts$$1[0], opts$$1[1]);
          break;
        }

      case 1:
        {
          const opts$$2 = op.fields[0];
          ctx.moveTo(opts$$2[0], opts$$2[1]);
          break;
        }

      case 2:
        {
          ctx.beginPath();
          break;
        }

      case 3:
        {
          const opts$$3 = op.fields[0];
          ctx.scale(opts$$3[0], opts$$3[1]);
          break;
        }

      case 4:
        {
          const opts$$4 = op.fields[0];
          ctx.rotate(opts$$4);
          break;
        }

      case 5:
        {
          ctx.save();
          break;
        }

      case 6:
        {
          const opts$$5 = op.fields[0];
          ctx.translate(opts$$5[0], opts$$5[1]);
          break;
        }

      case 7:
        {
          ctx.restore();
          break;
        }

      case 8:
        {
          ctx.fill();
          break;
        }

      case 10:
        {
          const opts$$6 = op.fields[0];
          ctx.fillStyle = opts$$6;
          break;
        }

      case 13:
        {
          const opts$$7 = op.fields[0];
          ctx.clearRect(opts$$7[0], opts$$7[1], opts$$7[2], opts$$7[3]);
          break;
        }

      default:
        {
          const opts = op.fields[0];
          ctx.rect(opts[0], opts[1], opts[2], opts[3]);
        }
    }
  }, ops);
}
const Props = declare(function Props(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Size = declare(function Size(arg1, arg2) {
  this.Width = arg1;
  this.Height = arg2;
}, Record);
export const CanvasBuilder = declare(function CanvasBuilder(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.Size = arg1;
  this.DrawOps = arg2;
  this.IsPlaying = arg3;
  this.OnTick = arg4;
  this.OnMouseMove = arg5;
  this.Style = arg6;
}, Record);
export function initialize(size) {
  return new CanvasBuilder(size, L(), true, function OnTick(value) {
    value;
  }, function (value$$1) {
    value$$1;
  }, L());
}
export function draw(drawOp, builder) {
  return new CanvasBuilder(builder.Size, append(builder.DrawOps, L(drawOp, L())), builder.IsPlaying, builder.OnTick, builder.OnMouseMove, builder.Style);
}
export function playing(value$$2, builder$$1) {
  return new CanvasBuilder(builder$$1.Size, builder$$1.DrawOps, value$$2, builder$$1.OnTick, builder$$1.OnMouseMove, builder$$1.Style);
}
export function onTick(callback, builder$$2) {
  return new CanvasBuilder(builder$$2.Size, builder$$2.DrawOps, builder$$2.IsPlaying, callback, builder$$2.OnMouseMove, builder$$2.Style);
}
export function onMouseMove(callback$$1, builder$$3) {
  return new CanvasBuilder(builder$$3.Size, builder$$3.DrawOps, builder$$3.IsPlaying, builder$$3.OnTick, callback$$1, builder$$3.Style);
}
export function withStyle(style, builder$$4) {
  return new CanvasBuilder(builder$$4.Size, builder$$4.DrawOps, builder$$4.IsPlaying, builder$$4.OnTick, builder$$4.OnMouseMove, style);
}
export function render(builder$$5) {
  return React.createElement(react_canvas$002Ejs, {
    width: builder$$5.Size.Width,
    height: builder$$5.Size.Height,
    drawOps: ofList(builder$$5.DrawOps, Array),
    onTick: builder$$5.OnTick,
    isPlaying: builder$$5.IsPlaying,
    onMouseMove: builder$$5.OnMouseMove,
    style: createObj(builder$$5.Style, 1)
  }, ...[]);
}
