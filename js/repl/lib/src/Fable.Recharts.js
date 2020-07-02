import { Union, declare, Record } from "../../fable-library/Types.js";
import { union_type, lambda_type, unit_type, bool_type, obj_type, class_type, string_type, record_type, float64_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
export const Props$002EPoint2 = declare(function Fable_Recharts_Props_Point2(x, y) {
  this.x = x;
  this.y = y;
}, Record);
export function Props$002EPoint2$reflection() {
  return record_type("Fable.Recharts.Props.Point2", [], Props$002EPoint2, () => [["x", float64_type], ["y", float64_type]]);
}
export const Props$002EPoint3 = declare(function Fable_Recharts_Props_Point3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}, Record);
export function Props$002EPoint3$reflection() {
  return record_type("Fable.Recharts.Props.Point3", [], Props$002EPoint3, () => [["x", float64_type], ["y", float64_type], ["z", float64_type]]);
}
export const Props$002ELinePoint = declare(function Fable_Recharts_Props_LinePoint(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
}, Record);
export function Props$002ELinePoint$reflection() {
  return record_type("Fable.Recharts.Props.LinePoint", [], Props$002ELinePoint, () => [["x", float64_type], ["y", float64_type], ["value", float64_type]]);
}
export const Props$002EScatterPoint = declare(function Fable_Recharts_Props_ScatterPoint(cx, cy, r, payload) {
  this.cx = cx;
  this.cy = cy;
  this.r = r;
  this.payload = payload;
}, Record);
export function Props$002EScatterPoint$reflection() {
  return record_type("Fable.Recharts.Props.ScatterPoint", [], Props$002EScatterPoint, () => [["cx", float64_type], ["cy", float64_type], ["r", float64_type], ["payload", Props$002EPoint3$reflection()]]);
}
export const Props$002EMargin = declare(function Fable_Recharts_Props_Margin(top, bottom, right, left) {
  this.top = top;
  this.bottom = bottom;
  this.right = right;
  this.left = left;
}, Record);
export function Props$002EMargin$reflection() {
  return record_type("Fable.Recharts.Props.Margin", [], Props$002EMargin, () => [["top", float64_type], ["bottom", float64_type], ["right", float64_type], ["left", float64_type]]);
}
export const Props$002EViewBox = declare(function Fable_Recharts_Props_ViewBox(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}, Record);
export function Props$002EViewBox$reflection() {
  return record_type("Fable.Recharts.Props.ViewBox", [], Props$002EViewBox, () => [["x", float64_type], ["y", float64_type], ["width", float64_type], ["height", float64_type]]);
}
export const Props$002EChart = declare(function Fable_Recharts_Props_Chart(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002EChart$reflection() {
  return union_type("Fable.Recharts.Props.Chart", [], Props$002EChart, () => [["SyncId", [["Item", string_type]]], ["Layout", [["Item", string_type]]], ["Width", [["Item", float64_type]]], ["Height", [["Item", float64_type]]], ["Data", [["Item", class_type("System.Array")]]], ["Margin", [["Item", Props$002EMargin$reflection()]]], ["BarCategoryGap", [["Item", obj_type]]], ["BarGap", [["Item", obj_type]]], ["BarSize", [["Item", float64_type]]], ["MaxBarSize", [["Item", float64_type]]], ["StackOffset", [["Item", string_type]]], ["BaseValue", [["Item", string_type]]], ["baseValue", [["Item", float64_type]]], ["ReverseStackOrder", [["Item", bool_type]]], ["Cx", [["Item", obj_type]]], ["Cy", [["Item", obj_type]]], ["StartAngle", [["Item", float64_type]]], ["EndAngle", [["Item", float64_type]]], ["InnerRadius", [["Item", obj_type]]], ["OuterRadius", [["Item", obj_type]]], ["OnClick", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseDown", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseUp", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseMove", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOver", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseEnter", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseLeave", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]]]);
}
export function Props$002EChart$$$Custom$$433E080(key, value) {
  return [key, value];
}
export const Props$002ETreemap = declare(function Fable_Recharts_Props_Treemap(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ETreemap$reflection() {
  return union_type("Fable.Recharts.Props.Treemap", [], Props$002ETreemap, () => [["Width", [["Item", float64_type]]], ["Height", [["Item", float64_type]]], ["Data", [["Item", class_type("System.Array")]]], ["DataKey", [["Item", obj_type]]], ["AspectRatio", [["Item", float64_type]]], ["IsAnimationActive", [["Item", bool_type]]], ["AnimationBegin", [["Item", float64_type]]], ["AnimationDuration", [["Item", float64_type]]], ["AnimationEasing", [["Item", string_type]]]]);
}
export function Props$002ETreemap$$$Custom$$433E080(key$$1, value$$1) {
  return [key$$1, value$$1];
}
export const Props$002EResponsive = declare(function Fable_Recharts_Props_Responsive(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002EResponsive$reflection() {
  return union_type("Fable.Recharts.Props.Responsive", [], Props$002EResponsive, () => [["Aspect", [["Item", float64_type]]], ["Width", [["Item", obj_type]]], ["Height", [["Item", obj_type]]], ["MinWidth", [["Item", float64_type]]], ["MinHeight", [["Item", float64_type]]], ["Debounce", [["Item", float64_type]]]]);
}
export function Props$002EResponsive$$$Custom$$433E080(key$$2, value$$2) {
  return [key$$2, value$$2];
}
export const Props$002ELegend = declare(function Fable_Recharts_Props_Legend(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ELegend$reflection() {
  return union_type("Fable.Recharts.Props.Legend", [], Props$002ELegend, () => [["Width", [["Item", float64_type]]], ["Height", [["Item", float64_type]]], ["Layout", [["Item", string_type]]], ["Align", [["Item", string_type]]], ["VerticalAlign", [["Item", string_type]]], ["IconSize", [["Item", float64_type]]], ["IconType", [["Item", string_type]]], ["PayLoad", [["Item", class_type("System.Array")]]], ["ChartWidth", [["Item", float64_type]]], ["ChartHeight", [["Item", float64_type]]], ["Margin", [["Item", Props$002EMargin$reflection()]]], ["Content", [["Item", obj_type]]], ["WrapperStyle", [["Item", obj_type]]], ["OnClick", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseDown", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseUp", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseMove", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOver", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseEnter", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseLeave", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]]]);
}
export function Props$002ELegend$$$Custom$$433E080(key$$3, value$$3) {
  return [key$$3, value$$3];
}
export const Props$002ETooltip = declare(function Fable_Recharts_Props_Tooltip(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ETooltip$reflection() {
  return union_type("Fable.Recharts.Props.Tooltip", [], Props$002ETooltip, () => [["Separator", [["Item", string_type]]], ["Offset", [["Item", float64_type]]], ["ItemStyle", [["Item", obj_type]]], ["WrapperStyle", [["Item", obj_type]]], ["LabelStyle", [["Item", obj_type]]], ["Cursor", [["Item", obj_type]]], ["ViewBox", [["Item", Props$002EViewBox$reflection()]]], ["Active", [["Item", bool_type]]], ["Coordinate", [["Item", Props$002EPoint2$reflection()]]], ["Payload", [["Item", class_type("System.Array")]]], ["Label", [["Item", obj_type]]], ["Content", [["Item", obj_type]]], ["Formatter", [["Item", obj_type]]], ["LabelFormatter", [["Item", obj_type]]], ["ItemSorter", [["Item", obj_type]]], ["IsAnimationActive", [["Item", bool_type]]], ["AnimationBegin", [["Item", float64_type]]], ["AnimationDuration", [["Item", float64_type]]], ["AnimationEasing", [["Item", string_type]]]]);
}
export function Props$002ETooltip$$$Custom$$433E080(key$$4, value$$4) {
  return [key$$4, value$$4];
}
export const Props$002ECell = declare(function Fable_Recharts_Props_Cell(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ECell$reflection() {
  return union_type("Fable.Recharts.Props.Cell", [], Props$002ECell, () => [["Fill", [["Item", string_type]]], ["Stroke", [["Item", string_type]]]]);
}
export function Props$002ECell$$$Custom$$433E080(key$$5, value$$5) {
  return [key$$5, value$$5];
}
export const Props$002EText = declare(function Fable_Recharts_Props_Text(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002EText$reflection() {
  return union_type("Fable.Recharts.Props.Text", [], Props$002EText, () => [["ScaleToFit", [["Item", bool_type]]], ["Angle", [["Item", float64_type]]], ["Width", [["Item", float64_type]]], ["TextAnchor", [["Item", string_type]]], ["VerticalAnchor", [["Item", string_type]]]]);
}
export function Props$002EText$$$Custom$$433E080(key$$6, value$$6) {
  return [key$$6, value$$6];
}
export const Props$002ELabel = declare(function Fable_Recharts_Props_Label(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ELabel$reflection() {
  return union_type("Fable.Recharts.Props.Label", [], Props$002ELabel, () => [["ViewBox", [["Item", Props$002EViewBox$reflection()]]], ["Formatter", [["Item", lambda_type(obj_type, obj_type)]]], ["Value", [["Item", obj_type]]], ["Position", [["Item", string_type]]], ["Offset", [["Item", float64_type]]], ["Children", [["Item", obj_type]]], ["Content", [["Item", obj_type]]], ["Id", [["Item", string_type]]]]);
}
export function Props$002ELabel$$$Custom$$433E080(key$$7, value$$7) {
  return [key$$7, value$$7];
}
export const Props$002ELabelList = declare(function Fable_Recharts_Props_LabelList(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ELabelList$reflection() {
  return union_type("Fable.Recharts.Props.LabelList", [], Props$002ELabelList, () => [["DataKey", [["Item", obj_type]]], ["ValueAccessor", [["Item", obj_type]]], ["Content", [["Item", obj_type]]], ["Position", [["Item", string_type]]], ["Offset", [["Item", float64_type]]], ["Formatter", [["Item", lambda_type(obj_type, obj_type)]]], ["Data", [["Item", float64_type]]], ["ClockWise", [["Item", string_type]]], ["Id", [["Item", string_type]]]]);
}
export function Props$002ELabelList$$$Custom$$433E080(key$$8, value$$8) {
  return [key$$8, value$$8];
}
export const Props$002ECartesian = declare(function Fable_Recharts_Props_Cartesian(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002ECartesian$reflection() {
  return union_type("Fable.Recharts.Props.Cartesian", [], Props$002ECartesian, () => [["Type", [["Item", obj_type]]], ["Data", [["Item", class_type("System.Array")]]], ["DataKey", [["Item", obj_type]]], ["LegendType", [["Item", string_type]]], ["Label", [["Item", obj_type]]], ["Stroke", [["Item", string_type]]], ["StrokeWidth", [["Item", string_type]]], ["Layout", [["Item", string_type]]], ["BaseLine", [["Item", obj_type]]], ["Unit", [["Item", string_type]]], ["Name", [["Item", string_type]]], ["Id", [["Item", string_type]]], ["StackId", [["Item", obj_type]]], ["IsAnimationActive", [["Item", bool_type]]], ["AnimationBegin", [["Item", float64_type]]], ["AnimationDuration", [["Item", float64_type]]], ["AnimationEasing", [["Item", string_type]]], ["Dot", [["Item", obj_type]]], ["ActiveDot", [["Item", obj_type]]], ["Points", [["Item", class_type("System.Array")]]], ["ConnectNulls", [["Item", bool_type]]], ["BarSize", [["Item", float64_type]]], ["MaxBarSize", [["Item", float64_type]]], ["MinPointSize", [["Item", float64_type]]], ["Background", [["Item", obj_type]]], ["Shape", [["Item", obj_type]]], ["Line", [["Item", obj_type]]], ["LineType", [["Item", string_type]]], ["Hide", [["Item", bool_type]]], ["Width", [["Item", float64_type]]], ["Height", [["Item", float64_type]]], ["XAxisId", [["Item", obj_type]]], ["YAxisId", [["Item", obj_type]]], ["ZAxisId", [["Item", obj_type]]], ["Range", [["Item", class_type("System.Array")]]], ["AxisLine", [["Item", obj_type]]], ["Orientation", [["Item", string_type]]], ["AllowDecimals", [["Item", bool_type]]], ["AllowDataOverflow", [["Item", bool_type]]], ["AllowDuplicatedCategory", [["Item", bool_type]]], ["MinTickGap", [["Item", float64_type]]], ["TickCount", [["Item", float64_type]]], ["TickSize", [["Item", float64_type]]], ["TickLine", [["Item", obj_type]]], ["TickMargin", [["Item", float64_type]]], ["TickFormatter", [["Item", obj_type]]], ["Ticks", [["Item", class_type("System.Array")]]], ["Tick", [["Item", obj_type]]], ["Domain", [["Item", class_type("System.Array")]]], ["Interval", [["Item", obj_type]]], ["Padding", [["Item", obj_type]]], ["Mirror", [["Item", bool_type]]], ["Reversed", [["Item", bool_type]]], ["Scale", [["Item", string_type]]], ["X", [["Item", float64_type]]], ["Y", [["Item", float64_type]]], ["X1", [["Item", obj_type]]], ["X2", [["Item", obj_type]]], ["Y1", [["Item", obj_type]]], ["Y2", [["Item", obj_type]]], ["TravellerWidth", [["Item", float64_type]]], ["StartIndex", [["Item", float64_type]]], ["EndIndex", [["Item", float64_type]]], ["ViewBox", [["Item", Props$002EViewBox$reflection()]]], ["Horizontal", [["Item", bool_type]]], ["Vertical", [["Item", bool_type]]], ["HorizontalPoints", [["Item", class_type("System.Array")]]], ["VerticalPoints", [["Item", class_type("System.Array")]]], ["XAxis", [["Item", obj_type]]], ["YAxis", [["Item", obj_type]]], ["AlwaysShow", [["Item", bool_type]]], ["IsFront", [["Item", bool_type]]], ["Direction", [["Item", string_type]]], ["OnChange", [["Item", lambda_type(unit_type, unit_type)]]], ["OnClick", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseDown", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseUp", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOver", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOut", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseEnter", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseMove", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseLeave", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]]]);
}
export function Props$002ECartesian$$$Custom$$433E080(key$$9, value$$9) {
  return [key$$9, value$$9];
}
export const Props$002EPolar = declare(function Fable_Recharts_Props_Polar(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Props$002EPolar$reflection() {
  return union_type("Fable.Recharts.Props.Polar", [], Props$002EPolar, () => [["Cx", [["Item", obj_type]]], ["Cy", [["Item", obj_type]]], ["InnerRadius", [["Item", obj_type]]], ["OuterRadius", [["Item", obj_type]]], ["StartAngle", [["Item", float64_type]]], ["EndAngle", [["Item", float64_type]]], ["MinAngle", [["Item", float64_type]]], ["PaddingAngle", [["Item", float64_type]]], ["NameKey", [["Item", string_type]]], ["ActiveInex", [["Item", class_type("System.Array")]]], ["ActiveShape", [["Item", obj_type]]], ["PolarAngles", [["Item", class_type("System.Array")]]], ["PolarRadius", [["Item", class_type("System.Array")]]], ["GridType", [["Item", string_type]]], ["Angle", [["Item", float64_type]]], ["Type", [["Item", obj_type]]], ["Data", [["Item", class_type("System.Array")]]], ["DataKey", [["Item", obj_type]]], ["LegendType", [["Item", string_type]]], ["Label", [["Item", obj_type]]], ["LabelLine", [["Item", obj_type]]], ["IsAnimationActive", [["Item", bool_type]]], ["AnimationBegin", [["Item", float64_type]]], ["AnimationDuration", [["Item", float64_type]]], ["AnimationEasing", [["Item", string_type]]], ["Dot", [["Item", obj_type]]], ["Points", [["Item", class_type("System.Array")]]], ["Background", [["Item", obj_type]]], ["Shape", [["Item", obj_type]]], ["AxisLine", [["Item", obj_type]]], ["Orientation", [["Item", string_type]]], ["AllowDuplicatedCategory", [["Item", bool_type]]], ["TickCount", [["Item", float64_type]]], ["TickLine", [["Item", obj_type]]], ["TickFormatter", [["Item", obj_type]]], ["Ticks", [["Item", class_type("System.Array")]]], ["Tick", [["Item", obj_type]]], ["Domain", [["Item", class_type("System.Array")]]], ["Scale", [["Item", string_type]]], ["OnClick", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseDown", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseUp", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOver", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseOut", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseEnter", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseMove", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]], ["OnMouseLeave", [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]]]]);
}
export function Props$002EPolar$$$Custom$$433E080(key$$10, value$$10) {
  return [key$$10, value$$10];
}
export const Props$002EShape = declare(function Fable_Recharts_Props_Shape() {});
export function Props$002EShape$reflection() {
  return class_type("Fable.Recharts.Props.Shape", undefined, Props$002EShape);
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
