import { Union, declare, Record } from "../fable-library.2.2.0-beta-010/Types.js";
import { union, lambda, unit, bool, obj, type, string, record, float64 } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
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
  return union("Fable.Recharts.Props.Chart", [], Props$002EChart, () => [["SyncId", [string]], ["Layout", [string]], ["Width", [float64]], ["Height", [float64]], ["Data", [type("System.Array")]], ["Margin", [Props$002EMargin$reflection()]], ["BarCategoryGap", [obj]], ["BarGap", [obj]], ["BarSize", [float64]], ["MaxBarSize", [float64]], ["StackOffset", [string]], ["BaseValue", [string]], ["baseValue", [float64]], ["ReverseStackOrder", [bool]], ["Cx", [obj]], ["Cy", [obj]], ["StartAngle", [float64]], ["EndAngle", [float64]], ["InnerRadius", [obj]], ["OuterRadius", [obj]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Fable.Import.React.MouseEvent"), unit)]]]);
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
  return union("Fable.Recharts.Props.Legend", [], Props$002ELegend, () => [["Width", [float64]], ["Height", [float64]], ["Layout", [string]], ["Align", [string]], ["VerticalAlign", [string]], ["IconSize", [float64]], ["IconType", [string]], ["PayLoad", [type("System.Array")]], ["ChartWidth", [float64]], ["ChartHeight", [float64]], ["Margin", [Props$002EMargin$reflection()]], ["Content", [obj]], ["WrapperStyle", [obj]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Fable.Import.React.MouseEvent"), unit)]]]);
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
  return union("Fable.Recharts.Props.Cartesian", [], Props$002ECartesian, () => [["Type", [obj]], ["Data", [type("System.Array")]], ["DataKey", [obj]], ["LegendType", [string]], ["Label", [obj]], ["Stroke", [string]], ["StrokeWidth", [string]], ["Layout", [string]], ["BaseLine", [obj]], ["Unit", [string]], ["Name", [string]], ["Id", [string]], ["StackId", [obj]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]], ["Dot", [obj]], ["ActiveDot", [obj]], ["Points", [type("System.Array")]], ["ConnectNulls", [bool]], ["BarSize", [float64]], ["MaxBarSize", [float64]], ["MinPointSize", [float64]], ["Background", [obj]], ["Shape", [obj]], ["Line", [obj]], ["LineType", [string]], ["Hide", [bool]], ["Width", [float64]], ["Height", [float64]], ["XAxisId", [obj]], ["YAxisId", [obj]], ["ZAxisId", [obj]], ["Range", [type("System.Array")]], ["AxisLine", [obj]], ["Orientation", [string]], ["AllowDecimals", [bool]], ["AllowDataOverflow", [bool]], ["AllowDuplicatedCategory", [bool]], ["MinTickGap", [float64]], ["TickCount", [float64]], ["TickSize", [float64]], ["TickLine", [obj]], ["TickMargin", [float64]], ["TickFormatter", [obj]], ["Ticks", [type("System.Array")]], ["Tick", [obj]], ["Domain", [type("System.Array")]], ["Interval", [obj]], ["Padding", [obj]], ["Mirror", [bool]], ["Reversed", [bool]], ["Scale", [string]], ["X", [float64]], ["Y", [float64]], ["X1", [obj]], ["X2", [obj]], ["Y1", [obj]], ["Y2", [obj]], ["TravellerWidth", [float64]], ["StartIndex", [float64]], ["EndIndex", [float64]], ["ViewBox", [Props$002EViewBox$reflection()]], ["Horizontal", [bool]], ["Vertical", [bool]], ["HorizontalPoints", [type("System.Array")]], ["VerticalPoints", [type("System.Array")]], ["XAxis", [obj]], ["YAxis", [obj]], ["AlwaysShow", [bool]], ["IsFront", [bool]], ["Direction", [string]], ["OnChange", [lambda(unit, unit)]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Fable.Import.React.MouseEvent"), unit)]]]);
}
export function Props$002ECartesian$$$Custom$$433E080(key$$9, value$$9) {
  return [key$$9, value$$9];
}
export const Props$002EPolar = declare(function Fable_Recharts_Props_Polar(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Props$002EPolar$reflection() {
  return union("Fable.Recharts.Props.Polar", [], Props$002EPolar, () => [["Cx", [obj]], ["Cy", [obj]], ["InnerRadius", [obj]], ["OuterRadius", [obj]], ["StartAngle", [float64]], ["EndAngle", [float64]], ["MinAngle", [float64]], ["PaddingAngle", [float64]], ["NameKey", [string]], ["ActiveInex", [type("System.Array")]], ["ActiveShape", [obj]], ["PolarAngles", [type("System.Array")]], ["PolarRadius", [type("System.Array")]], ["GridType", [string]], ["Angle", [float64]], ["Type", [obj]], ["Data", [type("System.Array")]], ["DataKey", [obj]], ["LegendType", [string]], ["Label", [obj]], ["LabelLine", [obj]], ["IsAnimationActive", [bool]], ["AnimationBegin", [float64]], ["AnimationDuration", [float64]], ["AnimationEasing", [string]], ["Dot", [obj]], ["Points", [type("System.Array")]], ["Background", [obj]], ["Shape", [obj]], ["AxisLine", [obj]], ["Orientation", [string]], ["AllowDuplicatedCategory", [bool]], ["TickCount", [float64]], ["TickLine", [obj]], ["TickFormatter", [obj]], ["Ticks", [type("System.Array")]], ["Tick", [obj]], ["Domain", [type("System.Array")]], ["Scale", [string]], ["OnClick", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseDown", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Fable.Import.React.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Fable.Import.React.MouseEvent"), unit)]]]);
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
export function ofImport(importMember, _importPath, props, children) {
  return createElement(Recharts[importMember], props, ...children);
}
export function lineChart(props$$1, children$$1) {
  return createElement(Recharts.LineChart, createObj(props$$1, 1), ...children$$1);
}
export function barChart(props$$3, children$$3) {
  return createElement(Recharts.BarChart, createObj(props$$3, 1), ...children$$3);
}
export function areaChart(props$$5, children$$5) {
  return createElement(Recharts.AreaChart, createObj(props$$5, 1), ...children$$5);
}
export function composedChart(props$$7, children$$7) {
  return createElement(Recharts.ComposedChart, createObj(props$$7, 1), ...children$$7);
}
export function pieChart(props$$9, children$$9) {
  return createElement(Recharts.PieChart, createObj(props$$9, 1), ...children$$9);
}
export function radarChart(props$$11, children$$11) {
  return createElement(Recharts.RadarChart, createObj(props$$11, 1), ...children$$11);
}
export function radialBarChart(props$$13, children$$13) {
  return createElement(Recharts.RadialBarChart, createObj(props$$13, 1), ...children$$13);
}
export function scatterChart(props$$15, children$$15) {
  return createElement(Recharts.ScatterChart, createObj(props$$15, 1), ...children$$15);
}
export function treemap(props$$17, children$$17) {
  return createElement(Recharts.Treemap, createObj(props$$17, 1), ...children$$17);
}
export function responsiveContainer(props$$19, children$$19) {
  return createElement(Recharts.ResponsiveContainer, createObj(props$$19, 1), ...children$$19);
}
export function legend(props$$21, children$$21) {
  return createElement(Recharts.Legend, createObj(props$$21, 1), ...children$$21);
}
export function tooltip(props$$23, children$$23) {
  return createElement(Recharts.Tooltip, createObj(props$$23, 1), ...children$$23);
}
export function cell(props$$25, children$$25) {
  return createElement(Recharts.Cell, createObj(props$$25, 1), ...children$$25);
}
export function text(props$$27, children$$27) {
  return createElement(Recharts.Text, createObj(props$$27, 1), ...children$$27);
}
export function label(props$$29, children$$29) {
  return createElement(Recharts.Label, createObj(props$$29, 1), ...children$$29);
}
export function labelList(props$$31, children$$31) {
  return createElement(Recharts.LabelList, createObj(props$$31, 1), ...children$$31);
}
export function area(props$$33, children$$33) {
  return createElement(Recharts.Area, createObj(props$$33, 1), ...children$$33);
}
export function bar(props$$35, children$$35) {
  return createElement(Recharts.Bar, createObj(props$$35, 1), ...children$$35);
}
export function line(props$$37, children$$37) {
  return createElement(Recharts.Line, createObj(props$$37, 1), ...children$$37);
}
export function scatter(props$$39, children$$39) {
  return createElement(Recharts.Scatter, createObj(props$$39, 1), ...children$$39);
}
export function xaxis(props$$41, children$$41) {
  return createElement(Recharts.XAxis, createObj(props$$41, 1), ...children$$41);
}
export function yaxis(props$$43, children$$43) {
  return createElement(Recharts.YAxis, createObj(props$$43, 1), ...children$$43);
}
export function zaxis(props$$45, children$$45) {
  return createElement(Recharts.ZAxis, createObj(props$$45, 1), ...children$$45);
}
export function brush(props$$47, children$$47) {
  return createElement(Recharts.Brush, createObj(props$$47, 1), ...children$$47);
}
export function cartesianAxis(props$$49, children$$49) {
  return createElement(Recharts.CartesianAxis, createObj(props$$49, 1), ...children$$49);
}
export function cartesianGrid(props$$51, children$$51) {
  return createElement(Recharts.CartesianGrid, createObj(props$$51, 1), ...children$$51);
}
export function referenceLine(props$$53, children$$53) {
  return createElement(Recharts.ReferenceLine, createObj(props$$53, 1), ...children$$53);
}
export function referenceDot(props$$55, children$$55) {
  return createElement(Recharts.ReferenceDot, createObj(props$$55, 1), ...children$$55);
}
export function referenceArea(props$$57, children$$57) {
  return createElement(Recharts.ReferenceArea, createObj(props$$57, 1), ...children$$57);
}
export function errorBar(props$$59, children$$59) {
  return createElement(Recharts.ErrorBar, createObj(props$$59, 1), ...children$$59);
}
export function pie(props$$61, children$$61) {
  return createElement(Recharts.Pie, createObj(props$$61, 1), ...children$$61);
}
export function radar(props$$63, children$$63) {
  return createElement(Recharts.Radar, createObj(props$$63, 1), ...children$$63);
}
export function radialBar(props$$65, children$$65) {
  return createElement(Recharts.RadialBar, createObj(props$$65, 1), ...children$$65);
}
export function polarAngleAxis(props$$67, children$$67) {
  return createElement(Recharts.PolarAngleAxis, createObj(props$$67, 1), ...children$$67);
}
export function polarGrid(props$$69, children$$69) {
  return createElement(Recharts.PolarGrid, createObj(props$$69, 1), ...children$$69);
}
export function polarRadiusAxis(props$$71, children$$71) {
  return createElement(Recharts.PolarRadiusAxis, createObj(props$$71, 1), ...children$$71);
}
export function cross(props$$73) {
  return createElement(Recharts.Cross, createObj(props$$73, 1), ...[]);
}
export function curve(props$$75) {
  return createElement(Recharts.Curve, createObj(props$$75, 1), ...[]);
}
export function dot(props$$77) {
  return createElement(Recharts.Dot, createObj(props$$77, 1), ...[]);
}
export function polygon(props$$79) {
  return createElement(Recharts.Polygon, createObj(props$$79, 1), ...[]);
}
export function rectangle(props$$81) {
  return createElement(Recharts.Rectangle, createObj(props$$81, 1), ...[]);
}
export function sector(props$$83) {
  return createElement(Recharts.Sector, createObj(props$$83, 1), ...[]);
}
