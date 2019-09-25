import { Union, declare, Record } from "../fable-library.2.4.2/Types.js";
import { union, lambda, unit, bool, obj, type, string, record, float64 } from "../fable-library.2.4.2/Reflection.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
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
export function ReplInternalHelpers$$$ofImport(importMember, _importPath, props, children) {
  return React.createElement(Recharts[importMember], props, ...children);
}
export function lineChart(props$$1, children$$1) {
  const props$$2 = createObj(props$$1, 1);
  const children$$2 = children$$1;
  return React.createElement(Recharts.LineChart, props$$2, ...children$$2);
}
export function barChart(props$$3, children$$3) {
  const props$$4 = createObj(props$$3, 1);
  const children$$4 = children$$3;
  return React.createElement(Recharts.BarChart, props$$4, ...children$$4);
}
export function areaChart(props$$5, children$$5) {
  const props$$6 = createObj(props$$5, 1);
  const children$$6 = children$$5;
  return React.createElement(Recharts.AreaChart, props$$6, ...children$$6);
}
export function composedChart(props$$7, children$$7) {
  const props$$8 = createObj(props$$7, 1);
  const children$$8 = children$$7;
  return React.createElement(Recharts.ComposedChart, props$$8, ...children$$8);
}
export function pieChart(props$$9, children$$9) {
  const props$$10 = createObj(props$$9, 1);
  const children$$10 = children$$9;
  return React.createElement(Recharts.PieChart, props$$10, ...children$$10);
}
export function radarChart(props$$11, children$$11) {
  const props$$12 = createObj(props$$11, 1);
  const children$$12 = children$$11;
  return React.createElement(Recharts.RadarChart, props$$12, ...children$$12);
}
export function radialBarChart(props$$13, children$$13) {
  const props$$14 = createObj(props$$13, 1);
  const children$$14 = children$$13;
  return React.createElement(Recharts.RadialBarChart, props$$14, ...children$$14);
}
export function scatterChart(props$$15, children$$15) {
  const props$$16 = createObj(props$$15, 1);
  const children$$16 = children$$15;
  return React.createElement(Recharts.ScatterChart, props$$16, ...children$$16);
}
export function treemap(props$$17, children$$17) {
  const props$$18 = createObj(props$$17, 1);
  const children$$18 = children$$17;
  return React.createElement(Recharts.Treemap, props$$18, ...children$$18);
}
export function responsiveContainer(props$$19, children$$19) {
  const props$$20 = createObj(props$$19, 1);
  const children$$20 = children$$19;
  return React.createElement(Recharts.ResponsiveContainer, props$$20, ...children$$20);
}
export function legend(props$$21, children$$21) {
  const props$$22 = createObj(props$$21, 1);
  const children$$22 = children$$21;
  return React.createElement(Recharts.Legend, props$$22, ...children$$22);
}
export function tooltip(props$$23, children$$23) {
  const props$$24 = createObj(props$$23, 1);
  const children$$24 = children$$23;
  return React.createElement(Recharts.Tooltip, props$$24, ...children$$24);
}
export function cell(props$$25, children$$25) {
  const props$$26 = createObj(props$$25, 1);
  const children$$26 = children$$25;
  return React.createElement(Recharts.Cell, props$$26, ...children$$26);
}
export function text(props$$27, children$$27) {
  const props$$28 = createObj(props$$27, 1);
  const children$$28 = children$$27;
  return React.createElement(Recharts.Text, props$$28, ...children$$28);
}
export function label(props$$29, children$$29) {
  const props$$30 = createObj(props$$29, 1);
  const children$$30 = children$$29;
  return React.createElement(Recharts.Label, props$$30, ...children$$30);
}
export function labelList(props$$31, children$$31) {
  const props$$32 = createObj(props$$31, 1);
  const children$$32 = children$$31;
  return React.createElement(Recharts.LabelList, props$$32, ...children$$32);
}
export function area(props$$33, children$$33) {
  const props$$34 = createObj(props$$33, 1);
  const children$$34 = children$$33;
  return React.createElement(Recharts.Area, props$$34, ...children$$34);
}
export function bar(props$$35, children$$35) {
  const props$$36 = createObj(props$$35, 1);
  const children$$36 = children$$35;
  return React.createElement(Recharts.Bar, props$$36, ...children$$36);
}
export function line(props$$37, children$$37) {
  const props$$38 = createObj(props$$37, 1);
  const children$$38 = children$$37;
  return React.createElement(Recharts.Line, props$$38, ...children$$38);
}
export function scatter(props$$39, children$$39) {
  const props$$40 = createObj(props$$39, 1);
  const children$$40 = children$$39;
  return React.createElement(Recharts.Scatter, props$$40, ...children$$40);
}
export function xaxis(props$$41, children$$41) {
  const props$$42 = createObj(props$$41, 1);
  const children$$42 = children$$41;
  return React.createElement(Recharts.XAxis, props$$42, ...children$$42);
}
export function yaxis(props$$43, children$$43) {
  const props$$44 = createObj(props$$43, 1);
  const children$$44 = children$$43;
  return React.createElement(Recharts.YAxis, props$$44, ...children$$44);
}
export function zaxis(props$$45, children$$45) {
  const props$$46 = createObj(props$$45, 1);
  const children$$46 = children$$45;
  return React.createElement(Recharts.ZAxis, props$$46, ...children$$46);
}
export function brush(props$$47, children$$47) {
  const props$$48 = createObj(props$$47, 1);
  const children$$48 = children$$47;
  return React.createElement(Recharts.Brush, props$$48, ...children$$48);
}
export function cartesianAxis(props$$49, children$$49) {
  const props$$50 = createObj(props$$49, 1);
  const children$$50 = children$$49;
  return React.createElement(Recharts.CartesianAxis, props$$50, ...children$$50);
}
export function cartesianGrid(props$$51, children$$51) {
  const props$$52 = createObj(props$$51, 1);
  const children$$52 = children$$51;
  return React.createElement(Recharts.CartesianGrid, props$$52, ...children$$52);
}
export function referenceLine(props$$53, children$$53) {
  const props$$54 = createObj(props$$53, 1);
  const children$$54 = children$$53;
  return React.createElement(Recharts.ReferenceLine, props$$54, ...children$$54);
}
export function referenceDot(props$$55, children$$55) {
  const props$$56 = createObj(props$$55, 1);
  const children$$56 = children$$55;
  return React.createElement(Recharts.ReferenceDot, props$$56, ...children$$56);
}
export function referenceArea(props$$57, children$$57) {
  const props$$58 = createObj(props$$57, 1);
  const children$$58 = children$$57;
  return React.createElement(Recharts.ReferenceArea, props$$58, ...children$$58);
}
export function errorBar(props$$59, children$$59) {
  const props$$60 = createObj(props$$59, 1);
  const children$$60 = children$$59;
  return React.createElement(Recharts.ErrorBar, props$$60, ...children$$60);
}
export function pie(props$$61, children$$61) {
  const props$$62 = createObj(props$$61, 1);
  const children$$62 = children$$61;
  return React.createElement(Recharts.Pie, props$$62, ...children$$62);
}
export function radar(props$$63, children$$63) {
  const props$$64 = createObj(props$$63, 1);
  const children$$64 = children$$63;
  return React.createElement(Recharts.Radar, props$$64, ...children$$64);
}
export function radialBar(props$$65, children$$65) {
  const props$$66 = createObj(props$$65, 1);
  const children$$66 = children$$65;
  return React.createElement(Recharts.RadialBar, props$$66, ...children$$66);
}
export function polarAngleAxis(props$$67, children$$67) {
  const props$$68 = createObj(props$$67, 1);
  const children$$68 = children$$67;
  return React.createElement(Recharts.PolarAngleAxis, props$$68, ...children$$68);
}
export function polarGrid(props$$69, children$$69) {
  const props$$70 = createObj(props$$69, 1);
  const children$$70 = children$$69;
  return React.createElement(Recharts.PolarGrid, props$$70, ...children$$70);
}
export function polarRadiusAxis(props$$71, children$$71) {
  const props$$72 = createObj(props$$71, 1);
  const children$$72 = children$$71;
  return React.createElement(Recharts.PolarRadiusAxis, props$$72, ...children$$72);
}
export function cross(props$$73) {
  const props$$74 = createObj(props$$73, 1);
  const children$$73 = [];
  return React.createElement(Recharts.Cross, props$$74, ...children$$73);
}
export function curve(props$$75) {
  const props$$76 = createObj(props$$75, 1);
  const children$$74 = [];
  return React.createElement(Recharts.Curve, props$$76, ...children$$74);
}
export function dot(props$$77) {
  const props$$78 = createObj(props$$77, 1);
  const children$$75 = [];
  return React.createElement(Recharts.Dot, props$$78, ...children$$75);
}
export function polygon(props$$79) {
  const props$$80 = createObj(props$$79, 1);
  const children$$76 = [];
  return React.createElement(Recharts.Polygon, props$$80, ...children$$76);
}
export function rectangle(props$$81) {
  const props$$82 = createObj(props$$81, 1);
  const children$$77 = [];
  return React.createElement(Recharts.Rectangle, props$$82, ...children$$77);
}
export function sector(props$$83) {
  const props$$84 = createObj(props$$83, 1);
  const children$$78 = [];
  return React.createElement(Recharts.Sector, props$$84, ...children$$78);
}
