import { Union, declare, Record } from "../../fable-core/Types.js";
export const Props$002EPoint2 = declare(function Props$002EPoint2(arg1, arg2) {
  this.x = arg1;
  this.y = arg2;
}, Record);
export const Props$002EPoint3 = declare(function Props$002EPoint3(arg1, arg2, arg3) {
  this.x = arg1;
  this.y = arg2;
  this.z = arg3;
}, Record);
export const Props$002ELinePoint = declare(function Props$002ELinePoint(arg1, arg2, arg3) {
  this.x = arg1;
  this.y = arg2;
  this.value = arg3;
}, Record);
export const Props$002EScatterPoint = declare(function Props$002EScatterPoint(arg1, arg2, arg3, arg4) {
  this.cx = arg1;
  this.cy = arg2;
  this.r = arg3;
  this.payload = arg4;
}, Record);
export const Props$002EMargin = declare(function Props$002EMargin(arg1, arg2, arg3, arg4) {
  this.top = arg1;
  this.bottom = arg2;
  this.right = arg3;
  this.left = arg4;
}, Record);
export const Props$002EViewBox = declare(function Props$002EViewBox(arg1, arg2, arg3, arg4) {
  this.x = arg1;
  this.y = arg2;
  this.width = arg3;
  this.height = arg4;
}, Record);
export const Props$002EChart = declare(function Props$002EChart(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ETreemap = declare(function Props$002ETreemap(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EResponsive = declare(function Props$002EResponsive(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ELegend = declare(function Props$002ELegend(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ETooltip = declare(function Props$002ETooltip(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ECell = declare(function Props$002ECell(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EText = declare(function Props$002EText(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ELabel = declare(function Props$002ELabel(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ELabelList = declare(function Props$002ELabelList(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ECartesian = declare(function Props$002ECartesian(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EPolar = declare(function Props$002EPolar(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EShape = declare(function Props$002EShape() {});
