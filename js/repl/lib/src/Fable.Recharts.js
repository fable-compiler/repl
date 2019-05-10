import { Union, declare, Record } from "../fable-library.2.3.7/Types.js";
import { union, lambda, unit, bool, obj, type, string, record, float64 } from "../fable-library.2.3.7/Reflection.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const Props$002EPoint2 = declare(function Fable_Recharts_Props_Point2(arg1, arg2) {
  this.x = arg1;
  this.y = arg2;
}, Record);
export function Props$002EPoint2$reflection() {
  return record("Fable.Recharts.Props.Point2", [], Props$002EPoint2, () => [["x", float64], ["y", float64]]);
}
export const Props$002EPoint3 = declare(function Fable_Recharts_Props_Point3(arg1, arg2, arg3) {
  this.x = arg1;
  this.y = arg2;
  this.z = arg3;
}, Record);
export function Props$002EPoint3$reflection() {
  return record("Fable.Recharts.Props.Point3", [], Props$002EPoint3, () => [["x", float64], ["y", float64], ["z", float64]]);
}
export const Props$002ELinePoint = declare(function Fable_Recharts_Props_LinePoint(arg1, arg2, arg3) {
  this.x = arg1;
  this.y = arg2;
  this.value = arg3;
}, Record);
export function Props$002ELinePoint$reflection() {
  return record("Fable.Recharts.Props.LinePoint", [], Props$002ELinePoint, () => [["x", float64], ["y", float64], ["value", float64]]);
}
export const Props$002EScatterPoint = declare(function Fable_Recharts_Props_ScatterPoint(arg1, arg2, arg3, arg4) {
  this.cx = arg1;
  this.cy = arg2;
  this.r = arg3;
  this.payload = arg4;
}, Record);
export function Props$002EScatterPoint$reflection() {
  return record("Fable.Recharts.Props.ScatterPoint", [], Props$002EScatterPoint, () => [["cx", float64], ["cy", float64], ["r", float64], ["payload", Props$002EPoint3$reflection()]]);
}
export const Props$002EMargin = declare(function Fable_Recharts_Props_Margin(arg1, arg2, arg3, arg4) {
  this.top = arg1;
  this.bottom = arg2;
  this.right = arg3;
  this.left = arg4;
}, Record);
export function Props$002EMargin$reflection() {
  return record("Fable.Recharts.Props.Margin", [], Props$002EMargin, () => [["top", float64], ["bottom", float64], ["right", float64], ["left", float64]]);
}
export const Props$002EViewBox = declare(function Fable_Recharts_Props_ViewBox(arg1, arg2, arg3, arg4) {
  this.x = arg1;
  this.y = arg2;
  this.width = arg3;
  this.height = arg4;
}, Record);
export function Props$002EViewBox$reflection() {
  return record("Fable.Recharts.Props.ViewBox", [], Props$002EViewBox, () => [["x", float64], ["y", float64], ["width", float64], ["height", float64]]);
}
export const Props$002EChart = declare(function Fable_Recharts_Props_Chart(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EChart$reflection() {
  return union("Fable.Recharts.Props.Chart", [], Props$002EChart, () => [["SyncId", [string]], ["Layout", [string]], ["Width", [float64]], ["Height", [float64]], ["Data", [type("System.Array")]], ["Margin", [Props$002EMargin$reflection()]], ["BarCategoryGap", [obj]], ["BarGap", [obj]], ["BarSize", [float64]], ["MaxBarSize", [float64]], ["StackOffset", [string]], ["BaseValue", [string]], ["baseValue", [float64]], ["ReverseStackOrder", [bool]], ["Cx", [obj]], ["Cy", [obj]], ["StartAngle", [float64]], ["EndAngle", [float64]], ["InnerRadius", [obj]], ["OuterRadius", [obj]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Browser.Types.MouseEvent"), unit)]]]);
}
export function Props$002EChart$$$Custom$$433E080(key, value) {
  return [key, value];
}
export const Props$002ETreemap = declare(function Fable_Recharts_Props_Treemap(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ETreemap$reflection() {
  return union("Fable.Recharts.Props.Treemap", [], Props$002ETreemap, () => [["Width", [float64]], ["Height", [float64]], ["Data", [type("System.Array")]], ["DataKey", [obj]], ["AspectRatio", [float64]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]]]);
}
export function Props$002ETreemap$$$Custom$$433E080(key$$1, value$$1) {
  return [key$$1, value$$1];
}
export const Props$002EResponsive = declare(function Fable_Recharts_Props_Responsive(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EResponsive$reflection() {
  return union("Fable.Recharts.Props.Responsive", [], Props$002EResponsive, () => [["Aspect", [float64]], ["Width", [obj]], ["Height", [obj]], ["MinWidth", [float64]], ["MinHeight", [float64]], ["Debounce", [float64]]]);
}
export function Props$002EResponsive$$$Custom$$433E080(key$$2, value$$2) {
  return [key$$2, value$$2];
}
export const Props$002ELegend = declare(function Fable_Recharts_Props_Legend(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ELegend$reflection() {
  return union("Fable.Recharts.Props.Legend", [], Props$002ELegend, () => [["Width", [float64]], ["Height", [float64]], ["Layout", [string]], ["Align", [string]], ["VerticalAlign", [string]], ["IconSize", [float64]], ["IconType", [string]], ["PayLoad", [type("System.Array")]], ["ChartWidth", [float64]], ["ChartHeight", [float64]], ["Margin", [Props$002EMargin$reflection()]], ["Content", [obj]], ["WrapperStyle", [obj]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Browser.Types.MouseEvent"), unit)]]]);
}
export function Props$002ELegend$$$Custom$$433E080(key$$3, value$$3) {
  return [key$$3, value$$3];
}
export const Props$002ETooltip = declare(function Fable_Recharts_Props_Tooltip(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ETooltip$reflection() {
  return union("Fable.Recharts.Props.Tooltip", [], Props$002ETooltip, () => [["Separator", [string]], ["Offset", [float64]], ["ItemStyle", [obj]], ["WrapperStyle", [obj]], ["LabelStyle", [obj]], ["Cursor", [obj]], ["ViewBox", [Props$002EViewBox$reflection()]], ["Active", [bool]], ["Coordinate", [Props$002EPoint2$reflection()]], ["Payload", [type("System.Array")]], ["Label", [obj]], ["Content", [obj]], ["Formatter", [obj]], ["LabelFormatter", [obj]], ["ItemSorter", [obj]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]]]);
}
export function Props$002ETooltip$$$Custom$$433E080(key$$4, value$$4) {
  return [key$$4, value$$4];
}
export const Props$002ECell = declare(function Fable_Recharts_Props_Cell(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ECell$reflection() {
  return union("Fable.Recharts.Props.Cell", [], Props$002ECell, () => [["Fill", [string]], ["Stroke", [string]]]);
}
export function Props$002ECell$$$Custom$$433E080(key$$5, value$$5) {
  return [key$$5, value$$5];
}
export const Props$002EText = declare(function Fable_Recharts_Props_Text(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EText$reflection() {
  return union("Fable.Recharts.Props.Text", [], Props$002EText, () => [["ScaleToFit", [bool]], ["Angle", [float64]], ["Width", [float64]], ["TextAnchor", [string]], ["VerticalAnchor", [string]]]);
}
export function Props$002EText$$$Custom$$433E080(key$$6, value$$6) {
  return [key$$6, value$$6];
}
export const Props$002ELabel = declare(function Fable_Recharts_Props_Label(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ELabel$reflection() {
  return union("Fable.Recharts.Props.Label", [], Props$002ELabel, () => [["ViewBox", [Props$002EViewBox$reflection()]], ["Formatter", [lambda(obj, obj)]], ["Value", [obj]], ["Position", [string]], ["Offset", [float64]], ["Children", [obj]], ["Content", [obj]], ["Id", [string]]]);
}
export function Props$002ELabel$$$Custom$$433E080(key$$7, value$$7) {
  return [key$$7, value$$7];
}
export const Props$002ELabelList = declare(function Fable_Recharts_Props_LabelList(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ELabelList$reflection() {
  return union("Fable.Recharts.Props.LabelList", [], Props$002ELabelList, () => [["DataKey", [obj]], ["ValueAccessor", [obj]], ["Content", [obj]], ["Position", [string]], ["Offset", [float64]], ["Formatter", [lambda(obj, obj)]], ["Data", [float64]], ["ClockWise", [string]], ["Id", [string]]]);
}
export function Props$002ELabelList$$$Custom$$433E080(key$$8, value$$8) {
  return [key$$8, value$$8];
}
export const Props$002ECartesian = declare(function Fable_Recharts_Props_Cartesian(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002ECartesian$reflection() {
  return union("Fable.Recharts.Props.Cartesian", [], Props$002ECartesian, () => [["Type", [obj]], ["Data", [type("System.Array")]], ["DataKey", [obj]], ["LegendType", [string]], ["Label", [obj]], ["Stroke", [string]], ["StrokeWidth", [string]], ["Layout", [string]], ["BaseLine", [obj]], ["Unit", [string]], ["Name", [string]], ["Id", [string]], ["StackId", [obj]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]], ["Dot", [obj]], ["ActiveDot", [obj]], ["Points", [type("System.Array")]], ["ConnectNulls", [bool]], ["BarSize", [float64]], ["MaxBarSize", [float64]], ["MinPointSize", [float64]], ["Background", [obj]], ["Shape", [obj]], ["Line", [obj]], ["LineType", [string]], ["Hide", [bool]], ["Width", [float64]], ["Height", [float64]], ["XAxisId", [obj]], ["YAxisId", [obj]], ["ZAxisId", [obj]], ["Range", [type("System.Array")]], ["AxisLine", [obj]], ["Orientation", [string]], ["AllowDecimals", [bool]], ["AllowDataOverflow", [bool]], ["AllowDuplicatedCategory", [bool]], ["MinTickGap", [float64]], ["TickCount", [float64]], ["TickSize", [float64]], ["TickLine", [obj]], ["TickMargin", [float64]], ["TickFormatter", [obj]], ["Ticks", [type("System.Array")]], ["Tick", [obj]], ["Domain", [type("System.Array")]], ["Interval", [obj]], ["Padding", [obj]], ["Mirror", [bool]], ["Reversed", [bool]], ["Scale", [string]], ["X", [float64]], ["Y", [float64]], ["X1", [obj]], ["X2", [obj]], ["Y1", [obj]], ["Y2", [obj]], ["TravellerWidth", [float64]], ["StartIndex", [float64]], ["EndIndex", [float64]], ["ViewBox", [Props$002EViewBox$reflection()]], ["Horizontal", [bool]], ["Vertical", [bool]], ["HorizontalPoints", [type("System.Array")]], ["VerticalPoints", [type("System.Array")]], ["XAxis", [obj]], ["YAxis", [obj]], ["AlwaysShow", [bool]], ["IsFront", [bool]], ["Direction", [string]], ["OnChange", [lambda(unit, unit)]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Browser.Types.MouseEvent"), unit)]]]);
}
export function Props$002ECartesian$$$Custom$$433E080(key$$9, value$$9) {
  return [key$$9, value$$9];
}
export const Props$002EPolar = declare(function Fable_Recharts_Props_Polar(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EPolar$reflection() {
  return union("Fable.Recharts.Props.Polar", [], Props$002EPolar, () => [["Cx", [obj]], ["Cy", [obj]], ["InnerRadius", [obj]], ["OuterRadius", [obj]], ["StartAngle", [float64]], ["EndAngle", [float64]], ["MinAngle", [float64]], ["PaddingAngle", [float64]], ["NameKey", [string]], ["ActiveInex", [type("System.Array")]], ["ActiveShape", [obj]], ["PolarAngles", [type("System.Array")]], ["PolarRadius", [type("System.Array")]], ["GridType", [string]], ["Angle", [float64]], ["Type", [obj]], ["Data", [type("System.Array")]], ["DataKey", [obj]], ["LegendType", [string]], ["Label", [obj]], ["LabelLine", [obj]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]], ["Dot", [obj]], ["Points", [type("System.Array")]], ["Background", [obj]], ["Shape", [obj]], ["AxisLine", [obj]], ["Orientation", [string]], ["AllowDuplicatedCategory", [bool]], ["TickCount", [float64]], ["TickLine", [obj]], ["TickFormatter", [obj]], ["Ticks", [type("System.Array")]], ["Tick", [obj]], ["Domain", [type("System.Array")]], ["Scale", [string]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Browser.Types.MouseEvent"), unit)]]]);
}
export function Props$002EPolar$$$Custom$$433E080(key$$10, value$$10) {
  return [key$$10, value$$10];
}
export const Props$002EShape = declare(function Fable_Recharts_Props_Shape() {});
export function Props$002EShape$reflection() {
  return type("Fable.Recharts.Props.Shape");
}
export function Props$002EShape$$$Custom$$433E080(key$$11, value$$11) {
  return [key$$11, value$$11];
}
export function lineChart(props, children) {
  return React.createElement(Recharts.LineChart, createObj(props, 1), ...children);
}
export function barChart(props$$2, children$$2) {
  return React.createElement(Recharts.BarChart, createObj(props$$2, 1), ...children$$2);
}
export function areaChart(props$$4, children$$4) {
  return React.createElement(Recharts.AreaChart, createObj(props$$4, 1), ...children$$4);
}
export function composedChart(props$$6, children$$6) {
  return React.createElement(Recharts.ComposedChart, createObj(props$$6, 1), ...children$$6);
}
export function pieChart(props$$8, children$$8) {
  return React.createElement(Recharts.PieChart, createObj(props$$8, 1), ...children$$8);
}
export function radarChart(props$$10, children$$10) {
  return React.createElement(Recharts.RadarChart, createObj(props$$10, 1), ...children$$10);
}
export function radialBarChart(props$$12, children$$12) {
  return React.createElement(Recharts.RadialBarChart, createObj(props$$12, 1), ...children$$12);
}
export function scatterChart(props$$14, children$$14) {
  return React.createElement(Recharts.ScatterChart, createObj(props$$14, 1), ...children$$14);
}
export function treemap(props$$16, children$$16) {
  return React.createElement(Recharts.Treemap, createObj(props$$16, 1), ...children$$16);
}
export function responsiveContainer(props$$18, children$$18) {
  return React.createElement(Recharts.ResponsiveContainer, createObj(props$$18, 1), ...children$$18);
}
export function legend(props$$20, children$$20) {
  return React.createElement(Recharts.Legend, createObj(props$$20, 1), ...children$$20);
}
export function tooltip(props$$22, children$$22) {
  return React.createElement(Recharts.Tooltip, createObj(props$$22, 1), ...children$$22);
}
export function cell(props$$24, children$$24) {
  return React.createElement(Recharts.Cell, createObj(props$$24, 1), ...children$$24);
}
export function text(props$$26, children$$26) {
  return React.createElement(Recharts.Text, createObj(props$$26, 1), ...children$$26);
}
export function label(props$$28, children$$28) {
  return React.createElement(Recharts.Label, createObj(props$$28, 1), ...children$$28);
}
export function labelList(props$$30, children$$30) {
  return React.createElement(Recharts.LabelList, createObj(props$$30, 1), ...children$$30);
}
export function area(props$$32, children$$32) {
  return React.createElement(Recharts.Area, createObj(props$$32, 1), ...children$$32);
}
export function bar(props$$34, children$$34) {
  return React.createElement(Recharts.Bar, createObj(props$$34, 1), ...children$$34);
}
export function line(props$$36, children$$36) {
  return React.createElement(Recharts.Line, createObj(props$$36, 1), ...children$$36);
}
export function scatter(props$$38, children$$38) {
  return React.createElement(Recharts.Scatter, createObj(props$$38, 1), ...children$$38);
}
export function xaxis(props$$40, children$$40) {
  return React.createElement(Recharts.XAxis, createObj(props$$40, 1), ...children$$40);
}
export function yaxis(props$$42, children$$42) {
  return React.createElement(Recharts.YAxis, createObj(props$$42, 1), ...children$$42);
}
export function zaxis(props$$44, children$$44) {
  return React.createElement(Recharts.ZAxis, createObj(props$$44, 1), ...children$$44);
}
export function brush(props$$46, children$$46) {
  return React.createElement(Recharts.Brush, createObj(props$$46, 1), ...children$$46);
}
export function cartesianAxis(props$$48, children$$48) {
  return React.createElement(Recharts.CartesianAxis, createObj(props$$48, 1), ...children$$48);
}
export function cartesianGrid(props$$50, children$$50) {
  return React.createElement(Recharts.CartesianGrid, createObj(props$$50, 1), ...children$$50);
}
export function referenceLine(props$$52, children$$52) {
  return React.createElement(Recharts.ReferenceLine, createObj(props$$52, 1), ...children$$52);
}
export function referenceDot(props$$54, children$$54) {
  return React.createElement(Recharts.ReferenceDot, createObj(props$$54, 1), ...children$$54);
}
export function referenceArea(props$$56, children$$56) {
  return React.createElement(Recharts.ReferenceArea, createObj(props$$56, 1), ...children$$56);
}
export function errorBar(props$$58, children$$58) {
  return React.createElement(Recharts.ErrorBar, createObj(props$$58, 1), ...children$$58);
}
export function pie(props$$60, children$$60) {
  return React.createElement(Recharts.Pie, createObj(props$$60, 1), ...children$$60);
}
export function radar(props$$62, children$$62) {
  return React.createElement(Recharts.Radar, createObj(props$$62, 1), ...children$$62);
}
export function radialBar(props$$64, children$$64) {
  return React.createElement(Recharts.RadialBar, createObj(props$$64, 1), ...children$$64);
}
export function polarAngleAxis(props$$66, children$$66) {
  return React.createElement(Recharts.PolarAngleAxis, createObj(props$$66, 1), ...children$$66);
}
export function polarGrid(props$$68, children$$68) {
  return React.createElement(Recharts.PolarGrid, createObj(props$$68, 1), ...children$$68);
}
export function polarRadiusAxis(props$$70, children$$70) {
  return React.createElement(Recharts.PolarRadiusAxis, createObj(props$$70, 1), ...children$$70);
}
export function cross(props$$72) {
  return React.createElement(Recharts.Cross, createObj(props$$72, 1), ...[]);
}
export function curve(props$$74) {
  return React.createElement(Recharts.Curve, createObj(props$$74, 1), ...[]);
}
export function dot(props$$76) {
  return React.createElement(Recharts.Dot, createObj(props$$76, 1), ...[]);
}
export function polygon(props$$78) {
  return React.createElement(Recharts.Polygon, createObj(props$$78, 1), ...[]);
}
export function rectangle(props$$80) {
  return React.createElement(Recharts.Rectangle, createObj(props$$80, 1), ...[]);
}
export function sector(props$$82) {
  return React.createElement(Recharts.Sector, createObj(props$$82, 1), ...[]);
}
