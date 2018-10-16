import { Record, L, declare, Union } from "./Types.js";
import { value as value$$3, some } from "./Option.js";
import { iterate as iterate$$1, empty as empty$$1, toIterator, map as map$$1, unfold, getEnumerator, fold as fold$$1 } from "./Seq.js";
import { compare, structuralHash, isDisposable } from "./Util.js";
import { join, toText, printf } from "./String.js";
export const MapTree$00602 = declare(function MapTree$00602(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function MapTreeModule$$$sizeAux(acc, m) {
  MapTreeModule$$$sizeAux: while (true) {
    switch (m.tag) {
      case 1:
        {
          return acc + 1 | 0;
        }

      case 2:
        {
          const r = m.fields[3];
          const l = m.fields[2];
          acc = MapTreeModule$$$sizeAux(acc + 1, l);
          m = r;
          continue MapTreeModule$$$sizeAux;
        }

      default:
        {
          return acc | 0;
        }
    }
  }
}
export function MapTreeModule$$$size(x) {
  return MapTreeModule$$$sizeAux(0, x);
}
export function MapTreeModule$$$empty() {
  return new MapTree$00602(0, "MapEmpty");
}
export function MapTreeModule$$$height(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return 1;
      }

    case 2:
      {
        const h = _arg1.fields[4] | 0;
        return h | 0;
      }

    default:
      {
        return 0;
      }
  }
}
export function MapTreeModule$$$isEmpty(m$$1) {
  if (m$$1.tag === 0) {
    return true;
  } else {
    return false;
  }
}
export function MapTreeModule$$$mk(l$$1, k, v, r$$1) {
  const matchValue = [l$$1, r$$1];
  var $target$$3;

  if (matchValue[0].tag === 0) {
    if (matchValue[1].tag === 0) {
      $target$$3 = 0;
    } else {
      $target$$3 = 1;
    }
  } else {
    $target$$3 = 1;
  }

  switch ($target$$3) {
    case 0:
      {
        return new MapTree$00602(1, "MapOne", k, v);
      }

    case 1:
      {
        const hl = MapTreeModule$$$height(l$$1) | 0;
        const hr = MapTreeModule$$$height(r$$1) | 0;
        const m$$2 = (hl < hr ? hr : hl) | 0;
        return new MapTree$00602(2, "MapNode", k, v, l$$1, r$$1, m$$2 + 1);
      }
  }
}
export function MapTreeModule$$$rebalance(t1, k$$1, v$$1, t2) {
  const t1h = MapTreeModule$$$height(t1) | 0;
  const t2h = MapTreeModule$$$height(t2) | 0;

  if (t2h > t1h + 2) {
    if (t2.tag === 2) {
      const t2v = t2.fields[1];
      const t2r = t2.fields[3];
      const t2l = t2.fields[2];
      const t2k = t2.fields[0];

      if (MapTreeModule$$$height(t2l) > t1h + 1) {
        if (t2l.tag === 2) {
          const t2lv = t2l.fields[1];
          const t2lr = t2l.fields[3];
          const t2ll = t2l.fields[2];
          const t2lk = t2l.fields[0];
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2ll), t2lk, t2lv, MapTreeModule$$$mk(t2lr, t2k, t2v, t2r));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2l), t2k, t2v, t2r);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + 2) {
    if (t1.tag === 2) {
      const t1v = t1.fields[1];
      const t1r = t1.fields[3];
      const t1l = t1.fields[2];
      const t1k = t1.fields[0];

      if (MapTreeModule$$$height(t1r) > t2h + 1) {
        if (t1r.tag === 2) {
          const t1rv = t1r.fields[1];
          const t1rr = t1r.fields[3];
          const t1rl = t1r.fields[2];
          const t1rk = t1r.fields[0];
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1l, t1k, t1v, t1rl), t1rk, t1rv, MapTreeModule$$$mk(t1rr, k$$1, v$$1, t2));
        } else {
          throw new Error("re  balance");
        }
      } else {
        return MapTreeModule$$$mk(t1l, t1k, t1v, MapTreeModule$$$mk(t1r, k$$1, v$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return MapTreeModule$$$mk(t1, k$$1, v$$1, t2);
  }
}
export function MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3) {
  switch (m$$3.tag) {
    case 1:
      {
        const k2 = m$$3.fields[0];
        const c = comparer.Compare(k$$2, k2) | 0;

        if (c < 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, new MapTree$00602(0, "MapEmpty"), m$$3, 2);
        } else if (c === 0) {
          return new MapTree$00602(1, "MapOne", k$$2, v$$2);
        } else {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3, new MapTree$00602(0, "MapEmpty"), 2);
        }
      }

    case 2:
      {
        const v2 = m$$3.fields[1];
        const r$$2 = m$$3.fields[3];
        const l$$2 = m$$3.fields[2];
        const k2$$1 = m$$3.fields[0];
        const h$$1 = m$$3.fields[4] | 0;
        const c$$1 = comparer.Compare(k$$2, k2$$1) | 0;

        if (c$$1 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$add(comparer, k$$2, v$$2, l$$2), k2$$1, v2, r$$2);
        } else if (c$$1 === 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, l$$2, r$$2, h$$1);
        } else {
          return MapTreeModule$$$rebalance(l$$2, k2$$1, v2, MapTreeModule$$$add(comparer, k$$2, v$$2, r$$2));
        }
      }

    default:
      {
        return new MapTree$00602(1, "MapOne", k$$2, v$$2);
      }
  }
}
export function MapTreeModule$$$find(comparer$$1, k$$3, m$$4) {
  MapTreeModule$$$find: while (true) {
    switch (m$$4.tag) {
      case 1:
        {
          const v2$$1 = m$$4.fields[1];
          const k2$$2 = m$$4.fields[0];
          const c$$2 = comparer$$1.Compare(k$$3, k2$$2) | 0;

          if (c$$2 === 0) {
            return v2$$1;
          } else {
            throw new Error("key not found");
          }
        }

      case 2:
        {
          const v2$$2 = m$$4.fields[1];
          const r$$3 = m$$4.fields[3];
          const l$$3 = m$$4.fields[2];
          const k2$$3 = m$$4.fields[0];
          const c$$3 = comparer$$1.Compare(k$$3, k2$$3) | 0;

          if (c$$3 < 0) {
            comparer$$1 = comparer$$1;
            k$$3 = k$$3;
            m$$4 = l$$3;
            continue MapTreeModule$$$find;
          } else if (c$$3 === 0) {
            return v2$$2;
          } else {
            comparer$$1 = comparer$$1;
            k$$3 = k$$3;
            m$$4 = r$$3;
            continue MapTreeModule$$$find;
          }
        }

      default:
        {
          throw new Error("key not found");
        }
    }
  }
}
export function MapTreeModule$$$tryFind(comparer$$2, k$$4, m$$5) {
  MapTreeModule$$$tryFind: while (true) {
    switch (m$$5.tag) {
      case 1:
        {
          const v2$$3 = m$$5.fields[1];
          const k2$$4 = m$$5.fields[0];
          const c$$4 = comparer$$2.Compare(k$$4, k2$$4) | 0;

          if (c$$4 === 0) {
            return some(v2$$3);
          } else {
            return null;
          }
        }

      case 2:
        {
          const v2$$4 = m$$5.fields[1];
          const r$$4 = m$$5.fields[3];
          const l$$4 = m$$5.fields[2];
          const k2$$5 = m$$5.fields[0];
          const c$$5 = comparer$$2.Compare(k$$4, k2$$5) | 0;

          if (c$$5 < 0) {
            comparer$$2 = comparer$$2;
            k$$4 = k$$4;
            m$$5 = l$$4;
            continue MapTreeModule$$$tryFind;
          } else if (c$$5 === 0) {
            return some(v2$$4);
          } else {
            comparer$$2 = comparer$$2;
            k$$4 = k$$4;
            m$$5 = r$$4;
            continue MapTreeModule$$$tryFind;
          }
        }

      default:
        {
          return null;
        }
    }
  }
}
export function MapTreeModule$$$partition1(comparer$$3, f, k$$5, v$$3, acc1, acc2) {
  if (f(k$$5, v$$3)) {
    return [MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc1), acc2];
  } else {
    return [acc1, MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc2)];
  }
}
export function MapTreeModule$$$partitionAux($arg$$10, $arg$$11, $arg$$12, $arg$$13, $arg$$14) {
  MapTreeModule$$$partitionAux: while (true) {
    const comparer$$4 = $arg$$10,
          f$$1 = $arg$$11,
          s = $arg$$12,
          acc_0 = $arg$$13,
          acc_1 = $arg$$14;
    const acc$$1 = [acc_0, acc_1];

    switch (s.tag) {
      case 1:
        {
          const v$$4 = s.fields[1];
          const k$$6 = s.fields[0];
          return MapTreeModule$$$partition1(comparer$$4, f$$1, k$$6, v$$4, acc$$1[0], acc$$1[1]);
        }

      case 2:
        {
          const v$$5 = s.fields[1];
          const r$$5 = s.fields[3];
          const l$$5 = s.fields[2];
          const k$$7 = s.fields[0];
          const acc$$2 = MapTreeModule$$$partitionAux(comparer$$4, f$$1, r$$5, acc$$1[0], acc$$1[1]);
          const acc$$3 = MapTreeModule$$$partition1(comparer$$4, f$$1, k$$7, v$$5, acc$$2[0], acc$$2[1]);
          $arg$$10 = comparer$$4;
          $arg$$11 = f$$1;
          $arg$$12 = l$$5;
          $arg$$13 = acc$$3[0];
          $arg$$14 = acc$$3[1];
          continue MapTreeModule$$$partitionAux;
        }

      default:
        {
          return acc$$1;
        }
    }
  }
}
export function MapTreeModule$$$partition(comparer$$5, f$$2, s$$1) {
  return MapTreeModule$$$partitionAux(comparer$$5, f$$2, s$$1, MapTreeModule$$$empty(), MapTreeModule$$$empty());
}
export function MapTreeModule$$$filter1(comparer$$6, f$$3, k$$8, v$$6, acc$$4) {
  if (f$$3(k$$8, v$$6)) {
    return MapTreeModule$$$add(comparer$$6, k$$8, v$$6, acc$$4);
  } else {
    return acc$$4;
  }
}
export function MapTreeModule$$$filterAux($arg$$23, $arg$$24, $arg$$25, $arg$$26) {
  MapTreeModule$$$filterAux: while (true) {
    const comparer$$7 = $arg$$23,
          f$$4 = $arg$$24,
          s$$2 = $arg$$25,
          acc$$5 = $arg$$26;

    switch (s$$2.tag) {
      case 1:
        {
          const v$$7 = s$$2.fields[1];
          const k$$9 = s$$2.fields[0];
          return MapTreeModule$$$filter1(comparer$$7, f$$4, k$$9, v$$7, acc$$5);
        }

      case 2:
        {
          const v$$8 = s$$2.fields[1];
          const r$$6 = s$$2.fields[3];
          const l$$6 = s$$2.fields[2];
          const k$$10 = s$$2.fields[0];
          const acc$$6 = MapTreeModule$$$filterAux(comparer$$7, f$$4, l$$6, acc$$5);
          const acc$$7 = MapTreeModule$$$filter1(comparer$$7, f$$4, k$$10, v$$8, acc$$6);
          $arg$$23 = comparer$$7;
          $arg$$24 = f$$4;
          $arg$$25 = r$$6;
          $arg$$26 = acc$$7;
          continue MapTreeModule$$$filterAux;
        }

      default:
        {
          return acc$$5;
        }
    }
  }
}
export function MapTreeModule$$$filter(comparer$$8, f$$5, s$$3) {
  return MapTreeModule$$$filterAux(comparer$$8, f$$5, s$$3, MapTreeModule$$$empty());
}
export function MapTreeModule$$$spliceOutSuccessor(m$$6) {
  switch (m$$6.tag) {
    case 1:
      {
        const v2$$5 = m$$6.fields[1];
        const k2$$6 = m$$6.fields[0];
        return [k2$$6, v2$$5, new MapTree$00602(0, "MapEmpty")];
      }

    case 2:
      {
        const v2$$6 = m$$6.fields[1];
        const r$$7 = m$$6.fields[3];
        const l$$7 = m$$6.fields[2];
        const k2$$7 = m$$6.fields[0];

        if (l$$7.tag === 0) {
          return [k2$$7, v2$$6, r$$7];
        } else {
          const patternInput = MapTreeModule$$$spliceOutSuccessor(l$$7);
          return [patternInput[0], patternInput[1], MapTreeModule$$$mk(patternInput[2], k2$$7, v2$$6, r$$7)];
        }
      }

    default:
      {
        throw new Error("internal error: Map.spliceOutSuccessor");
      }
  }
}
export function MapTreeModule$$$remove(comparer$$9, k$$11, m$$7) {
  switch (m$$7.tag) {
    case 1:
      {
        const k2$$8 = m$$7.fields[0];
        const c$$6 = comparer$$9.Compare(k$$11, k2$$8) | 0;

        if (c$$6 === 0) {
          return new MapTree$00602(0, "MapEmpty");
        } else {
          return m$$7;
        }
      }

    case 2:
      {
        const v2$$7 = m$$7.fields[1];
        const r$$8 = m$$7.fields[3];
        const l$$8 = m$$7.fields[2];
        const k2$$9 = m$$7.fields[0];
        const c$$7 = comparer$$9.Compare(k$$11, k2$$9) | 0;

        if (c$$7 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$remove(comparer$$9, k$$11, l$$8), k2$$9, v2$$7, r$$8);
        } else if (c$$7 === 0) {
          const matchValue$$1 = [l$$8, r$$8];

          if (matchValue$$1[0].tag === 0) {
            return r$$8;
          } else if (matchValue$$1[1].tag === 0) {
            return l$$8;
          } else {
            const patternInput$$1 = MapTreeModule$$$spliceOutSuccessor(r$$8);
            return MapTreeModule$$$mk(l$$8, patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]);
          }
        } else {
          return MapTreeModule$$$rebalance(l$$8, k2$$9, v2$$7, MapTreeModule$$$remove(comparer$$9, k$$11, r$$8));
        }
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
export function MapTreeModule$$$mem(comparer$$10, k$$12, m$$8) {
  MapTreeModule$$$mem: while (true) {
    switch (m$$8.tag) {
      case 1:
        {
          const k2$$10 = m$$8.fields[0];
          return comparer$$10.Compare(k$$12, k2$$10) === 0;
        }

      case 2:
        {
          const r$$9 = m$$8.fields[3];
          const l$$9 = m$$8.fields[2];
          const k2$$11 = m$$8.fields[0];
          const c$$8 = comparer$$10.Compare(k$$12, k2$$11) | 0;

          if (c$$8 < 0) {
            comparer$$10 = comparer$$10;
            k$$12 = k$$12;
            m$$8 = l$$9;
            continue MapTreeModule$$$mem;
          } else if (c$$8 === 0) {
            return true;
          } else {
            comparer$$10 = comparer$$10;
            k$$12 = k$$12;
            m$$8 = r$$9;
            continue MapTreeModule$$$mem;
          }
        }

      default:
        {
          return false;
        }
    }
  }
}
export function MapTreeModule$$$iter(f$$6, m$$9) {
  switch (m$$9.tag) {
    case 1:
      {
        const v2$$8 = m$$9.fields[1];
        const k2$$12 = m$$9.fields[0];
        f$$6(k2$$12, v2$$8);
        break;
      }

    case 2:
      {
        const v2$$9 = m$$9.fields[1];
        const r$$10 = m$$9.fields[3];
        const l$$10 = m$$9.fields[2];
        const k2$$13 = m$$9.fields[0];
        MapTreeModule$$$iter(f$$6, l$$10);
        f$$6(k2$$13, v2$$9);
        MapTreeModule$$$iter(f$$6, r$$10);
        break;
      }

    default:
      {}
  }
}
export function MapTreeModule$$$tryPick($arg$$32, $arg$$33) {
  MapTreeModule$$$tryPick: while (true) {
    const f$$7 = $arg$$32,
          m$$10 = $arg$$33;

    switch (m$$10.tag) {
      case 1:
        {
          const v2$$10 = m$$10.fields[1];
          const k2$$14 = m$$10.fields[0];
          return f$$7(k2$$14, v2$$10);
        }

      case 2:
        {
          const v2$$11 = m$$10.fields[1];
          const r$$11 = m$$10.fields[3];
          const l$$11 = m$$10.fields[2];
          const k2$$15 = m$$10.fields[0];
          const matchValue$$2 = MapTreeModule$$$tryPick(f$$7, l$$11);

          if (matchValue$$2 == null) {
            const matchValue$$3 = f$$7(k2$$15, v2$$11);

            if (matchValue$$3 == null) {
              $arg$$32 = f$$7;
              $arg$$33 = r$$11;
              continue MapTreeModule$$$tryPick;
            } else {
              const res$$1 = matchValue$$3;
              return res$$1;
            }
          } else {
            const res = matchValue$$2;
            return res;
          }
        }

      default:
        {
          return null;
        }
    }
  }
}
export function MapTreeModule$$$exists($arg$$34, $arg$$35) {
  MapTreeModule$$$exists: while (true) {
    const f$$8 = $arg$$34,
          m$$11 = $arg$$35;

    switch (m$$11.tag) {
      case 1:
        {
          const v2$$12 = m$$11.fields[1];
          const k2$$16 = m$$11.fields[0];
          return f$$8(k2$$16, v2$$12);
        }

      case 2:
        {
          const v2$$13 = m$$11.fields[1];
          const r$$12 = m$$11.fields[3];
          const l$$12 = m$$11.fields[2];
          const k2$$17 = m$$11.fields[0];

          if (MapTreeModule$$$exists(f$$8, l$$12) ? true : f$$8(k2$$17, v2$$13)) {
            return true;
          } else {
            $arg$$34 = f$$8;
            $arg$$35 = r$$12;
            continue MapTreeModule$$$exists;
          }
        }

      default:
        {
          return false;
        }
    }
  }
}
export function MapTreeModule$$$forall($arg$$36, $arg$$37) {
  MapTreeModule$$$forall: while (true) {
    const f$$9 = $arg$$36,
          m$$12 = $arg$$37;

    switch (m$$12.tag) {
      case 1:
        {
          const v2$$14 = m$$12.fields[1];
          const k2$$18 = m$$12.fields[0];
          return f$$9(k2$$18, v2$$14);
        }

      case 2:
        {
          const v2$$15 = m$$12.fields[1];
          const r$$13 = m$$12.fields[3];
          const l$$13 = m$$12.fields[2];
          const k2$$19 = m$$12.fields[0];

          if (MapTreeModule$$$forall(f$$9, l$$13) ? f$$9(k2$$19, v2$$15) : false) {
            $arg$$36 = f$$9;
            $arg$$37 = r$$13;
            continue MapTreeModule$$$forall;
          } else {
            return false;
          }
        }

      default:
        {
          return true;
        }
    }
  }
}
export function MapTreeModule$$$map(f$$10, m$$13) {
  switch (m$$13.tag) {
    case 1:
      {
        const v$$9 = m$$13.fields[1];
        const k$$13 = m$$13.fields[0];
        return new MapTree$00602(1, "MapOne", k$$13, f$$10(v$$9));
      }

    case 2:
      {
        const v$$10 = m$$13.fields[1];
        const r$$14 = m$$13.fields[3];
        const l$$14 = m$$13.fields[2];
        const k$$14 = m$$13.fields[0];
        const h$$2 = m$$13.fields[4] | 0;
        const l2 = MapTreeModule$$$map(f$$10, l$$14);
        const v2$$16 = f$$10(v$$10);
        const r2 = MapTreeModule$$$map(f$$10, r$$14);
        return new MapTree$00602(2, "MapNode", k$$14, v2$$16, l2, r2, h$$2);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
export function MapTreeModule$$$mapi(f$$11, m$$14) {
  switch (m$$14.tag) {
    case 1:
      {
        const v$$11 = m$$14.fields[1];
        const k$$15 = m$$14.fields[0];
        return new MapTree$00602(1, "MapOne", k$$15, f$$11(k$$15, v$$11));
      }

    case 2:
      {
        const v$$12 = m$$14.fields[1];
        const r$$15 = m$$14.fields[3];
        const l$$15 = m$$14.fields[2];
        const k$$16 = m$$14.fields[0];
        const h$$3 = m$$14.fields[4] | 0;
        const l2$$1 = MapTreeModule$$$mapi(f$$11, l$$15);
        const v2$$17 = f$$11(k$$16, v$$12);
        const r2$$1 = MapTreeModule$$$mapi(f$$11, r$$15);
        return new MapTree$00602(2, "MapNode", k$$16, v2$$17, l2$$1, r2$$1, h$$3);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
export function MapTreeModule$$$foldBack($arg$$42, $arg$$43, $arg$$44) {
  MapTreeModule$$$foldBack: while (true) {
    const f$$12 = $arg$$42,
          m$$15 = $arg$$43,
          x$$1 = $arg$$44;

    switch (m$$15.tag) {
      case 1:
        {
          const v$$13 = m$$15.fields[1];
          const k$$17 = m$$15.fields[0];
          return f$$12(k$$17, v$$13, x$$1);
        }

      case 2:
        {
          const v$$14 = m$$15.fields[1];
          const r$$16 = m$$15.fields[3];
          const l$$16 = m$$15.fields[2];
          const k$$18 = m$$15.fields[0];
          const x$$2 = MapTreeModule$$$foldBack(f$$12, r$$16, x$$1);
          const x$$3 = f$$12(k$$18, v$$14, x$$2);
          $arg$$42 = f$$12;
          $arg$$43 = l$$16;
          $arg$$44 = x$$3;
          continue MapTreeModule$$$foldBack;
        }

      default:
        {
          return x$$1;
        }
    }
  }
}
export function MapTreeModule$$$fold($arg$$45, $arg$$46, $arg$$47) {
  MapTreeModule$$$fold: while (true) {
    const f$$13 = $arg$$45,
          x$$4 = $arg$$46,
          m$$16 = $arg$$47;

    switch (m$$16.tag) {
      case 1:
        {
          const v$$15 = m$$16.fields[1];
          const k$$19 = m$$16.fields[0];
          return f$$13(x$$4, k$$19, v$$15);
        }

      case 2:
        {
          const v$$16 = m$$16.fields[1];
          const r$$17 = m$$16.fields[3];
          const l$$17 = m$$16.fields[2];
          const k$$20 = m$$16.fields[0];
          const x$$5 = MapTreeModule$$$fold(f$$13, x$$4, l$$17);
          const x$$6 = f$$13(x$$5, k$$20, v$$16);
          $arg$$45 = f$$13;
          $arg$$46 = x$$6;
          $arg$$47 = r$$17;
          continue MapTreeModule$$$fold;
        }

      default:
        {
          return x$$4;
        }
    }
  }
}
export function MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17, x$$7) {
  switch (m$$17.tag) {
    case 1:
      {
        const v$$17 = m$$17.fields[1];
        const k$$21 = m$$17.fields[0];
        const cLoKey = comparer$$11.Compare(lo, k$$21) | 0;
        const cKeyHi = comparer$$11.Compare(k$$21, hi) | 0;
        const x$$8 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f$$14(k$$21, v$$17, x$$7) : x$$7;
        return x$$8;
      }

    case 2:
      {
        const v$$18 = m$$17.fields[1];
        const r$$18 = m$$17.fields[3];
        const l$$18 = m$$17.fields[2];
        const k$$22 = m$$17.fields[0];
        const cLoKey$$1 = comparer$$11.Compare(lo, k$$22) | 0;
        const cKeyHi$$1 = comparer$$11.Compare(k$$22, hi) | 0;
        const x$$9 = cLoKey$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, l$$18, x$$7) : x$$7;
        const x$$10 = (cLoKey$$1 <= 0 ? cKeyHi$$1 <= 0 : false) ? f$$14(k$$22, v$$18, x$$9) : x$$9;
        const x$$11 = cKeyHi$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, r$$18, x$$10) : x$$10;
        return x$$11;
      }

    default:
      {
        return x$$7;
      }
  }
}
export function MapTreeModule$$$foldSection(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12) {
  if (comparer$$12.Compare(lo$$1, hi$$1) === 1) {
    return x$$12;
  } else {
    return MapTreeModule$$$foldFromTo(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12);
  }
}
export function MapTreeModule$$$loop(m$$19, acc$$8) {
  MapTreeModule$$$loop: while (true) {
    switch (m$$19.tag) {
      case 1:
        {
          const v$$19 = m$$19.fields[1];
          const k$$23 = m$$19.fields[0];
          return L([k$$23, v$$19], acc$$8);
        }

      case 2:
        {
          const v$$20 = m$$19.fields[1];
          const r$$19 = m$$19.fields[3];
          const l$$19 = m$$19.fields[2];
          const k$$24 = m$$19.fields[0];
          m$$19 = l$$19;
          acc$$8 = L([k$$24, v$$20], MapTreeModule$$$loop(r$$19, acc$$8));
          continue MapTreeModule$$$loop;
        }

      default:
        {
          return acc$$8;
        }
    }
  }
}
export function MapTreeModule$$$toList(m$$20) {
  return MapTreeModule$$$loop(m$$20, L());
}
export function MapTreeModule$$$ofList(comparer$$13, l$$20) {
  return fold$$1(function (acc$$9, tupledArg) {
    return MapTreeModule$$$add(comparer$$13, tupledArg[0], tupledArg[1], acc$$9);
  }, MapTreeModule$$$empty(), l$$20);
}
export function MapTreeModule$$$mkFromEnumerator(comparer$$14, acc$$10, e) {
  MapTreeModule$$$mkFromEnumerator: while (true) {
    if (e.MoveNext()) {
      const patternInput$$2 = e.Current;
      const $var$$60 = comparer$$14;
      acc$$10 = MapTreeModule$$$add(comparer$$14, patternInput$$2[0], patternInput$$2[1], acc$$10);
      e = e;
      comparer$$14 = $var$$60;
      continue MapTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$10;
    }
  }
}
export function MapTreeModule$$$ofArray(comparer$$15, arr) {
  let res$$2 = MapTreeModule$$$empty();

  for (let i = 0; i <= arr.length - 1; i++) {
    const patternInput$$3 = arr[i];
    res$$2 = MapTreeModule$$$add(comparer$$15, patternInput$$3[0], patternInput$$3[1], res$$2);
  }

  return res$$2;
}
export function MapTreeModule$$$ofSeq(comparer$$16, c$$9) {
  const ie = getEnumerator(c$$9);

  try {
    return MapTreeModule$$$mkFromEnumerator(comparer$$16, MapTreeModule$$$empty(), ie);
  } finally {
    if (isDisposable(ie)) {
      ie.Dispose();
    }
  }
}
export function MapTreeModule$$$copyToArray(s$$4, arr$$1, i$$1) {
  let j = i$$1 | 0;
  MapTreeModule$$$iter(function f$$16(x$$15, y$$2) {
    arr$$1[j] = [x$$15, y$$2];
    j = j + 1;
  }, s$$4);
}
export const MapTreeModule$002EMapIterator$00602 = declare(function MapTreeModule$002EMapIterator$00602(arg1, arg2) {
  this.stack = arg1;
  this.started = arg2;
}, Record);
export function MapTreeModule$$$collapseLHS(stack) {
  MapTreeModule$$$collapseLHS: while (true) {
    if (stack.tail != null) {
      if (stack.head.tag === 1) {
        return stack;
      } else if (stack.head.tag === 2) {
        stack = L(stack.head.fields[2], L(new MapTree$00602(1, "MapOne", stack.head.fields[0], stack.head.fields[1]), L(stack.head.fields[3], stack.tail)));
        continue MapTreeModule$$$collapseLHS;
      } else {
        stack = stack.tail;
        continue MapTreeModule$$$collapseLHS;
      }
    } else {
      return L();
    }
  }
}
export function MapTreeModule$$$mkIterator(s$$5) {
  return new MapTreeModule$002EMapIterator$00602(MapTreeModule$$$collapseLHS(L(s$$5, L())), false);
}
export function MapTreeModule$$$notStarted() {
  throw new Error("enumeration not started");
}
export function MapTreeModule$$$alreadyFinished() {
  throw new Error("enumeration already finished");
}
export function MapTreeModule$$$current(i$$2) {
  if (i$$2.started) {
    const matchValue$$4 = i$$2.stack;

    if (matchValue$$4.tail == null) {
      return MapTreeModule$$$alreadyFinished();
    } else if (matchValue$$4.head.tag === 1) {
      return [matchValue$$4.head.fields[0], matchValue$$4.head.fields[1]];
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
  } else {
    return MapTreeModule$$$notStarted();
  }
}
export function MapTreeModule$$$moveNext(i$$3) {
  if (i$$3.started) {
    const matchValue$$5 = i$$3.stack;

    if (matchValue$$5.tail == null) {
      return false;
    } else if (matchValue$$5.head.tag === 1) {
      i$$3.stack = MapTreeModule$$$collapseLHS(matchValue$$5.tail);
      return !(i$$3.stack.tail == null);
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
    }
  } else {
    i$$3.started = true;
    return !(i$$3.stack.tail == null);
  }
}
export const MapTreeModule$002EmkIEnumerator$0027$00602 = declare(function MapTreeModule$002EmkIEnumerator$0027$00602(s$$6) {
  const $this$$1 = this;
  $this$$1.s = s$$6;
  $this$$1.i = MapTreeModule$$$mkIterator($this$$1.s);
});
export function MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$6) {
  return this != null ? MapTreeModule$002EmkIEnumerator$0027$00602.call(this, s$$6) : new MapTreeModule$002EmkIEnumerator$0027$00602(s$$6);
}
Object.defineProperty(MapTreeModule$002EmkIEnumerator$0027$00602.prototype, "Current", {
  "get": function () {
    const __ = this;
    return MapTreeModule$$$current(__.i);
  }
});

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.MoveNext = function () {
  const __$$1 = this;
  return MapTreeModule$$$moveNext(__$$1.i);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Reset = function () {
  const __$$2 = this;
  __$$2.i = MapTreeModule$$$mkIterator(__$$2.s);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Dispose = function () {};

export function MapTreeModule$$$mkIEnumerator(s$$7) {
  return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$7);
}
export function MapTreeModule$$$toSeq(s$$8) {
  const en = MapTreeModule$$$mkIEnumerator(s$$8);
  return unfold(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return null;
    }
  }, en);
}
export const FSharpMap = declare(function FSharpMap(comparer$$17, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$17;
  $this$$2.tree = tree;
});
export function FSharpMap$$$$002Ector$$58ADD115(comparer$$17, tree) {
  return this != null ? FSharpMap.call(this, comparer$$17, tree) : new FSharpMap(comparer$$17, tree);
}
export function FSharpMap$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
export function FSharpMap$$get_Tree(__$$5) {
  return __$$5.tree;
}
export function FSharpMap$$Add$$5BDDA1(__$$6, k$$28, v$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$6.comparer, MapTreeModule$$$add(__$$6.comparer, k$$28, v$$24, __$$6.tree));
}
export function FSharpMap$$get_IsEmpty(__$$7) {
  return MapTreeModule$$$isEmpty(__$$7.tree);
}
export function FSharpMap$$get_Item$$2B595(__$$8, k$$29) {
  return MapTreeModule$$$find(__$$8.comparer, k$$29, __$$8.tree);
}
export function FSharpMap$$TryGetValue$$5BDDA1(__$$9, k$$30, defValue) {
  const matchValue$$6 = MapTreeModule$$$tryFind(__$$9.comparer, k$$30, __$$9.tree);

  if (matchValue$$6 == null) {
    return [false, defValue];
  } else {
    const v$$25 = value$$3(matchValue$$6);
    return [true, v$$25];
  }
}
export function FSharpMap$$TryPick$$72321DD7(__$$10, f$$17) {
  return MapTreeModule$$$tryPick(f$$17, __$$10.tree);
}
export function FSharpMap$$Exists$$Z395DDC35(__$$11, f$$18) {
  return MapTreeModule$$$exists(f$$18, __$$11.tree);
}
export function FSharpMap$$Filter$$Z395DDC35(__$$12, f$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$12.comparer, MapTreeModule$$$filter(__$$12.comparer, f$$19, __$$12.tree));
}
export function FSharpMap$$ForAll$$Z395DDC35(__$$13, f$$20) {
  return MapTreeModule$$$forall(f$$20, __$$13.tree);
}
export function FSharpMap$$Fold(__$$14, f$$21, acc$$11) {
  return MapTreeModule$$$foldBack(f$$21, __$$14.tree, acc$$11);
}
export function FSharpMap$$FoldSection(__$$15, lo$$2, hi$$2, f$$22, acc$$12) {
  return MapTreeModule$$$foldSection(__$$15.comparer, lo$$2, hi$$2, f$$22, __$$15.tree, acc$$12);
}
export function FSharpMap$$Iterate$$1DCFB91D(__$$16, f$$23) {
  MapTreeModule$$$iter(f$$23, __$$16.tree);
}
export function FSharpMap$$MapRange$$6DC7247(__$$17, f$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$17.comparer, MapTreeModule$$$map(f$$24, __$$17.tree));
}
export function FSharpMap$$Map$$Z6F6B671C(__$$18, f$$25) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$18.comparer, MapTreeModule$$$mapi(f$$25, __$$18.tree));
}
export function FSharpMap$$Partition$$Z395DDC35(__$$19, f$$26) {
  const patternInput$$4 = MapTreeModule$$$partition(__$$19.comparer, f$$26, __$$19.tree);
  return [FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[0]), FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[1])];
}
export function FSharpMap$$get_Count(__$$20) {
  return MapTreeModule$$$size(__$$20.tree);
}
export function FSharpMap$$ContainsKey$$2B595(__$$21, k$$31) {
  return MapTreeModule$$$mem(__$$21.comparer, k$$31, __$$21.tree);
}
export function FSharpMap$$Remove$$2B595(__$$22, k$$32) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$22.comparer, MapTreeModule$$$remove(__$$22.comparer, k$$32, __$$22.tree));
}
export function FSharpMap$$TryFind$$2B595(__$$23, k$$33) {
  return MapTreeModule$$$tryFind(__$$23.comparer, k$$33, __$$23.tree);
}
export function FSharpMap$$ToList(__$$24) {
  return MapTreeModule$$$toList(__$$24.tree);
}

FSharpMap.prototype.toString = function () {
  const this$ = this;
  return "map [" + join("; ", ...map$$1(function mapping(kv) {
    return toText(printf("(%A, %A)"))(kv[0])(kv[1]);
  }, this$)) + "]";
};

FSharpMap.prototype.GetHashCode = function () {
  const this$$$1 = this;

  const combineHash = function combineHash(x$$16, y$$3) {
    return (x$$16 << 1) + y$$3 + 631;
  };

  let res$$3 = 0;
  const e$$1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    const activePatternResult2465 = e$$1.Current;
    res$$3 = combineHash(res$$3, structuralHash(activePatternResult2465[0]));
    res$$3 = combineHash(res$$3, structuralHash(activePatternResult2465[1]));
  }

  return Math.abs(res$$3) | 0;
};

FSharpMap.prototype.Equals = function (that) {
  const this$$$2 = this;
  return this$$$2.CompareTo(that) === 0;
};

FSharpMap.prototype[Symbol.iterator] = function () {
  const __$$25 = this;
  return toIterator(MapTreeModule$$$mkIEnumerator(__$$25.tree));
};

FSharpMap.prototype.CompareTo = function (obj) {
  const m$$22 = this;
  const m2 = obj;
  let res$$4 = 0;
  let finished = false;
  const e1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(m$$22));

  try {
    const e2 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(m2));

    try {
      while (!finished ? res$$4 === 0 : false) {
        const matchValue$$7 = [e1.MoveNext(), e2.MoveNext()];

        if (matchValue$$7[0]) {
          if (matchValue$$7[1]) {
            const kvp1 = e1.Current;
            const kvp2 = e2.Current;
            const c$$10 = m$$22.comparer.Compare(kvp1[0], kvp2[0]) | 0;
            res$$4 = c$$10 !== 0 ? c$$10 : compare(kvp1[1], kvp2[1]);
          } else {
            res$$4 = 1;
          }
        } else if (matchValue$$7[1]) {
          res$$4 = -1;
        } else {
          finished = true;
        }
      }

      return res$$4 | 0;
    } finally {
      if (isDisposable(e2)) {
        e2.Dispose();
      }
    }
  } finally {
    if (isDisposable(e1)) {
      e1.Dispose();
    }
  }
};

export function isEmpty(m$$23) {
  return FSharpMap$$get_IsEmpty(m$$23);
}
export function add(k$$34, v$$26, m$$24) {
  return FSharpMap$$Add$$5BDDA1(m$$24, k$$34, v$$26);
}
export function find(k$$35, m$$25) {
  return FSharpMap$$get_Item$$2B595(m$$25, k$$35);
}
export function tryFind(k$$36, m$$26) {
  return FSharpMap$$TryFind$$2B595(m$$26, k$$36);
}
export function remove(k$$37, m$$27) {
  return FSharpMap$$Remove$$2B595(m$$27, k$$37);
}
export function containsKey(k$$38, m$$28) {
  return FSharpMap$$ContainsKey$$2B595(m$$28, k$$38);
}
export function iterate(f$$27, m$$29) {
  FSharpMap$$Iterate$$1DCFB91D(m$$29, f$$27);
}
export function tryPick(f$$28, m$$30) {
  return FSharpMap$$TryPick$$72321DD7(m$$30, f$$28);
}
export function pick(f$$29, m$$31) {
  const matchValue$$8 = tryPick(f$$29, m$$31);

  if (matchValue$$8 != null) {
    const res$$5 = value$$3(matchValue$$8);
    return res$$5;
  } else {
    throw new Error("key not found");
  }
}
export function exists(f$$30, m$$32) {
  return FSharpMap$$Exists$$Z395DDC35(m$$32, f$$30);
}
export function filter(f$$31, m$$33) {
  return FSharpMap$$Filter$$Z395DDC35(m$$33, f$$31);
}
export function partition(f$$32, m$$34) {
  return FSharpMap$$Partition$$Z395DDC35(m$$34, f$$32);
}
export function forAll(f$$33, m$$35) {
  return FSharpMap$$ForAll$$Z395DDC35(m$$35, f$$33);
}
export function mapRange(f$$34, m$$36) {
  return FSharpMap$$MapRange$$6DC7247(m$$36, f$$34);
}
export function map(f$$35, m$$37) {
  return FSharpMap$$Map$$Z6F6B671C(m$$37, f$$35);
}
export function fold(f$$36, z, m$$38) {
  return MapTreeModule$$$fold(f$$36, z, FSharpMap$$get_Tree(m$$38));
}
export function foldBack(f$$37, m$$39, z$$1) {
  return MapTreeModule$$$foldBack(f$$37, FSharpMap$$get_Tree(m$$39), z$$1);
}
export function toSeq(m$$40) {
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(m$$40));
}
export function findKey(f$$38, m$$41) {
  const _arg1$$1 = MapTreeModule$$$tryPick(function f$$39(k$$39, v$$27) {
    if (f$$38(k$$39, v$$27)) {
      return some(k$$39);
    } else {
      return null;
    }
  }, FSharpMap$$get_Tree(m$$41));

  if (_arg1$$1 == null) {
    throw new Error("Key not found");
  } else {
    const k$$40 = value$$3(_arg1$$1);
    return k$$40;
  }
}
export function tryFindKey(f$$40, m$$43) {
  return MapTreeModule$$$tryPick(function f$$41(k$$41, v$$28) {
    if (f$$40(k$$41, v$$28)) {
      return some(k$$41);
    } else {
      return null;
    }
  }, FSharpMap$$get_Tree(m$$43));
}
export function ofList(l$$22, comparer$$18) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$18, MapTreeModule$$$ofList(comparer$$18, l$$22));
}
export function ofSeq(l$$23, comparer$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$19, MapTreeModule$$$ofSeq(comparer$$19, l$$23));
}
export function ofArray(array, comparer$$20) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$20, MapTreeModule$$$ofArray(comparer$$20, array));
}
export function toList(m$$45) {
  return FSharpMap$$ToList(m$$45);
}
export function toArray(m$$46) {
  const res$$6 = new Array(FSharpMap$$get_Count(m$$46));
  MapTreeModule$$$copyToArray(FSharpMap$$get_Tree(m$$46), res$$6, 0);
  return res$$6;
}
export function empty(comparer$$21) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$21, new MapTree$00602(0, "MapEmpty"));
}

function createMutablePrivate(comparer$$22, tree$0027) {
  let tree$$1 = tree$0027;
  return {
    get size() {
      return MapTreeModule$$$size(tree$$1);
    },

    clear() {
      tree$$1 = new MapTree$00602(0, "MapEmpty");
    },

    delete(x$$18) {
      if (MapTreeModule$$$mem(comparer$$22, x$$18, tree$$1)) {
        tree$$1 = MapTreeModule$$$remove(comparer$$22, x$$18, tree$$1);
        return true;
      } else {
        return false;
      }
    },

    entries() {
      return MapTreeModule$$$toSeq(tree$$1);
    },

    get(k$$42) {
      return MapTreeModule$$$find(comparer$$22, k$$42, tree$$1);
    },

    has(x$$19) {
      return MapTreeModule$$$mem(comparer$$22, x$$19, tree$$1);
    },

    keys() {
      return map$$1(function mapping$$1(kv$$1) {
        return kv$$1[0];
      }, MapTreeModule$$$toSeq(tree$$1));
    },

    set(k$$43, v$$29) {
      const this$$$3 = this;
      tree$$1 = MapTreeModule$$$add(comparer$$22, k$$43, v$$29, tree$$1);
      return this$$$3;
    },

    values() {
      return map$$1(function mapping$$2(kv$$2) {
        return kv$$2[1];
      }, MapTreeModule$$$toSeq(tree$$1));
    },

    [Symbol.iterator]() {
      return toIterator(MapTreeModule$$$mkIEnumerator(tree$$1));
    },

    GetEnumerator() {
      return MapTreeModule$$$mkIEnumerator(tree$$1);
    }

  };
}

export function createMutable(source$$3, comparer$$23) {
  return createMutablePrivate(comparer$$23, MapTreeModule$$$ofSeq(comparer$$23, source$$3));
}
export function groupBy(projection, xs, comparer$$24) {
  const dict = createMutable(empty$$1(), comparer$$24);
  iterate$$1(function (v$$30) {
    const key = projection(v$$30);

    if (dict.has(key)) {
      dict.get(key).push(v$$30);
    } else {
      dict.set(key, Array.from([v$$30]));
    }
  }, xs);
  return map$$1(function mapping$$3(kv$$3) {
    return [kv$$3[0], kv$$3[1]];
  }, dict);
}
export function countBy(projection$$1, xs$$1, comparer$$25) {
  const dict$$1 = createMutable(empty$$1(), comparer$$25);
  iterate$$1(function (value$$1) {
    const key$$1 = projection$$1(value$$1);
    dict$$1.has(key$$1) ? dict$$1.set(key$$1, dict$$1.get(key$$1) + 1) : dict$$1.set(key$$1, 1);
  }, xs$$1);
  return map$$1(function mapping$$4(kv$$4) {
    return [kv$$4[0], kv$$4[1]];
  }, dict$$1);
}