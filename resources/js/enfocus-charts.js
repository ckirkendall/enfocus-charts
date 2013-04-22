function e(a) {
  throw a;
}
var h = void 0, k = !0, n = null, p = !1;
function aa() {
  return function(a) {
    return a
  }
}
function ba() {
  return function() {
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var r, da = this;
function ea(a, b) {
  var c = a.split("."), d = da;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && t(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function u(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== h
}
function fa(a) {
  return"array" == u(a)
}
function ga(a) {
  return"string" == typeof a
}
function ha(a) {
  return"number" == typeof a
}
function ia(a) {
  return"function" == u(a)
}
function ja(a) {
  var b = typeof a;
  return"object" == b && a != n || "function" == b
}
function ka(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), na = 0;
function oa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function pa(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function qa(a, b, c) {
  qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
  return qa.apply(n, arguments)
}
function sa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ta = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.hb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ua(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function va(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function wa(a) {
  if(!xa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;"));
  return a
}
var ya = /&/g, za = /</g, Aa = />/g, Ca = /\"/g, xa = /[&<>\"]/;
function Da(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var Ea = 2147483648 * Math.random() | 0;
var Fa = Array.prototype, Ga = Fa.indexOf ? function(a, b, c) {
  return Fa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ga(a)) {
    return!ga(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ha = Fa.forEach ? function(a, b, c) {
  Fa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ga(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ia = Fa.map ? function(a, b, c) {
  return Fa.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = ga(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
};
function Ja(a, b) {
  var c = Ga(a, b);
  0 <= c && Fa.splice.call(a, c, 1)
}
function Ka(a, b, c) {
  return 2 >= arguments.length ? Fa.slice.call(a, b) : Fa.slice.call(a, b, c)
}
;function Ma(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Na() {
  var a = Oa, b;
  for(b in a) {
    return p
  }
  return k
}
var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Qa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Pa.length;g++) {
      c = Pa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Ra(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, l, m, s, w) {
    if("%" == m) {
      return"%"
    }
    var v = c.shift();
    "undefined" == typeof v && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = v;
    return Ra.Sa[m].apply(n, arguments)
  })
}
Ra.Sa = {};
Ra.Sa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
Ra.Sa.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = g + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
Ra.Sa.d = function(a, b, c, d, f, g, i, j) {
  return Ra.Sa.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
Ra.Sa.i = Ra.Sa.d;
Ra.Sa.u = Ra.Sa.d;
function Sa(a, b) {
  a != n && this.append.apply(this, arguments)
}
Sa.prototype.sb = "";
Sa.prototype.append = function(a, b, c) {
  this.sb += a;
  if(b != n) {
    for(var d = 1;d < arguments.length;d++) {
      this.sb += arguments[d]
    }
  }
  return this
};
Sa.prototype.clear = function() {
  this.sb = ""
};
Sa.prototype.toString = q("sb");
var Ta;
function A(a) {
  return a != n && a !== p
}
function Ua(a) {
  return A(a) ? p : k
}
function B(a, b) {
  return a[u(b == n ? n : b)] ? k : a._ ? k : p
}
function C(a, b) {
  return Error(["No protocol method ", a, " defined for type ", u(b), ": ", b].join(""))
}
var Va, Wa = n, Wa = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return Wa.c(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wa.c = function(a) {
  return Array(a)
};
Wa.b = function(a, b) {
  return Wa.c(b)
};
Va = Wa;
var Xa, Ya = n;
function Za(a) {
  return Ya.b(n, a)
}
function $a(a, b) {
  return ab.a ? ab.a(function(a, b) {
    a.push(b);
    return a
  }, [], b) : ab.call(n, function(a, b) {
    a.push(b);
    return a
  }, [], b)
}
Ya = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Za.call(this, a);
    case 2:
      return $a.call(this, 0, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ya.c = Za;
Ya.b = $a;
Xa = Ya;
var bb = {};
function cb(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  var c = cb[u(a == n ? n : a)];
  c ? b = c : (c = cb._) ? b = c : e(C("ICounted.-count", a));
  return b.call(n, a)
}
function db(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = db[u(a == n ? n : a)];
  c ? b = c : (c = db._) ? b = c : e(C("IEmptyableCollection.-empty", a));
  return b.call(n, a)
}
var eb = {};
function fb(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = fb[u(a == n ? n : a)];
  d ? c = d : (d = fb._) ? c = d : e(C("ICollection.-conj", a));
  return c.call(n, a, b)
}
var gb = {}, D, hb = n;
function ib(a, b) {
  if(a ? a.V : a) {
    return a.V(a, b)
  }
  var c;
  var d = D[u(a == n ? n : a)];
  d ? c = d : (d = D._) ? c = d : e(C("IIndexed.-nth", a));
  return c.call(n, a, b)
}
function jb(a, b, c) {
  if(a ? a.P : a) {
    return a.P(a, b, c)
  }
  var d;
  var f = D[u(a == n ? n : a)];
  f ? d = f : (f = D._) ? d = f : e(C("IIndexed.-nth", a));
  return d.call(n, a, b, c)
}
hb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ib.call(this, a, b);
    case 3:
      return jb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hb.b = ib;
hb.a = jb;
D = hb;
var kb = {}, lb = {};
function mb(a) {
  if(a ? a.ga : a) {
    return a.ga(a)
  }
  var b;
  var c = mb[u(a == n ? n : a)];
  c ? b = c : (c = mb._) ? b = c : e(C("ISeq.-first", a));
  return b.call(n, a)
}
function nb(a) {
  if(a ? a.ba : a) {
    return a.ba(a)
  }
  var b;
  var c = nb[u(a == n ? n : a)];
  c ? b = c : (c = nb._) ? b = c : e(C("ISeq.-rest", a));
  return b.call(n, a)
}
var ob = {};
function pb(a) {
  if(a ? a.Za : a) {
    return a.Za(a)
  }
  var b;
  var c = pb[u(a == n ? n : a)];
  c ? b = c : (c = pb._) ? b = c : e(C("INext.-next", a));
  return b.call(n, a)
}
var E, qb = n;
function rb(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var d = E[u(a == n ? n : a)];
  d ? c = d : (d = E._) ? c = d : e(C("ILookup.-lookup", a));
  return c.call(n, a, b)
}
function sb(a, b, c) {
  if(a ? a.Q : a) {
    return a.Q(a, b, c)
  }
  var d;
  var f = E[u(a == n ? n : a)];
  f ? d = f : (f = E._) ? d = f : e(C("ILookup.-lookup", a));
  return d.call(n, a, b, c)
}
qb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return rb.call(this, a, b);
    case 3:
      return sb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qb.b = rb;
qb.a = sb;
E = qb;
function tb(a, b, c) {
  if(a ? a.Ba : a) {
    return a.Ba(a, b, c)
  }
  var d;
  var f = tb[u(a == n ? n : a)];
  f ? d = f : (f = tb._) ? d = f : e(C("IAssociative.-assoc", a));
  return d.call(n, a, b, c)
}
var ub = {};
function vb(a, b) {
  if(a ? a.$b : a) {
    return a.$b(a, b)
  }
  var c;
  var d = vb[u(a == n ? n : a)];
  d ? c = d : (d = vb._) ? c = d : e(C("IMap.-dissoc", a));
  return c.call(n, a, b)
}
var wb = {};
function xb(a) {
  if(a ? a.ac : a) {
    return a.ac(a)
  }
  var b;
  var c = xb[u(a == n ? n : a)];
  c ? b = c : (c = xb._) ? b = c : e(C("IMapEntry.-key", a));
  return b.call(n, a)
}
function yb(a) {
  if(a ? a.bc : a) {
    return a.bc(a)
  }
  var b;
  var c = yb[u(a == n ? n : a)];
  c ? b = c : (c = yb._) ? b = c : e(C("IMapEntry.-val", a));
  return b.call(n, a)
}
function zb(a) {
  if(a ? a.tb : a) {
    return a.tb(a)
  }
  var b;
  var c = zb[u(a == n ? n : a)];
  c ? b = c : (c = zb._) ? b = c : e(C("IStack.-peek", a));
  return b.call(n, a)
}
var Ab = {};
function Bb(a) {
  if(a ? a.Yb : a) {
    return a.Yb(a)
  }
  var b;
  var c = Bb[u(a == n ? n : a)];
  c ? b = c : (c = Bb._) ? b = c : e(C("IDeref.-deref", a));
  return b.call(n, a)
}
var Cb = {};
function Db(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  var c = Db[u(a == n ? n : a)];
  c ? b = c : (c = Db._) ? b = c : e(C("IMeta.-meta", a));
  return b.call(n, a)
}
function Eb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = Eb[u(a == n ? n : a)];
  d ? c = d : (d = Eb._) ? c = d : e(C("IWithMeta.-with-meta", a));
  return c.call(n, a, b)
}
var Fb = {}, Gb, Hb = n;
function Ib(a, b) {
  if(a ? a.ib : a) {
    return a.ib(a, b)
  }
  var c;
  var d = Gb[u(a == n ? n : a)];
  d ? c = d : (d = Gb._) ? c = d : e(C("IReduce.-reduce", a));
  return c.call(n, a, b)
}
function Jb(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  var f = Gb[u(a == n ? n : a)];
  f ? d = f : (f = Gb._) ? d = f : e(C("IReduce.-reduce", a));
  return d.call(n, a, b, c)
}
Hb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ib.call(this, a, b);
    case 3:
      return Jb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hb.b = Ib;
Hb.a = Jb;
Gb = Hb;
function Kb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = Kb[u(a == n ? n : a)];
  d ? c = d : (d = Kb._) ? c = d : e(C("IEquiv.-equiv", a));
  return c.call(n, a, b)
}
function Lb(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = Lb[u(a == n ? n : a)];
  c ? b = c : (c = Lb._) ? b = c : e(C("IHash.-hash", a));
  return b.call(n, a)
}
var Mb = {};
function Nb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = Nb[u(a == n ? n : a)];
  c ? b = c : (c = Nb._) ? b = c : e(C("ISeqable.-seq", a));
  return b.call(n, a)
}
var Ob = {}, Pb = {};
function Qb(a) {
  if(a ? a.cc : a) {
    return a.cc(a)
  }
  var b;
  var c = Qb[u(a == n ? n : a)];
  c ? b = c : (c = Qb._) ? b = c : e(C("IReversible.-rseq", a));
  return b.call(n, a)
}
var Rb = {};
function Sb(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Sb[u(a == n ? n : a)];
  d ? c = d : (d = Sb._) ? c = d : e(C("IPrintable.-pr-seq", a));
  return c.call(n, a, b)
}
function Tb(a, b) {
  if(a ? a.Rd : a) {
    return a.Rd(0, b)
  }
  var c;
  var d = Tb[u(a == n ? n : a)];
  d ? c = d : (d = Tb._) ? c = d : e(C("IWriter.-write", a));
  return c.call(n, a, b)
}
function Ub(a) {
  if(a ? a.Be : a) {
    return n
  }
  var b;
  var c = Ub[u(a == n ? n : a)];
  c ? b = c : (c = Ub._) ? b = c : e(C("IWriter.-flush", a));
  return b.call(n, a)
}
var Vb = {};
function Wb(a, b, c) {
  if(a ? a.H : a) {
    return a.H(a, b, c)
  }
  var d;
  var f = Wb[u(a == n ? n : a)];
  f ? d = f : (f = Wb._) ? d = f : e(C("IPrintWithWriter.-pr-writer", a));
  return d.call(n, a, b, c)
}
function Xb(a, b, c) {
  if(a ? a.Qd : a) {
    return a.Qd(a, b, c)
  }
  var d;
  var f = Xb[u(a == n ? n : a)];
  f ? d = f : (f = Xb._) ? d = f : e(C("IWatchable.-notify-watches", a));
  return d.call(n, a, b, c)
}
var Yb = {};
function Zb(a) {
  if(a ? a.Zb : a) {
    return a.Zb(a)
  }
  var b;
  var c = Zb[u(a == n ? n : a)];
  c ? b = c : (c = Zb._) ? b = c : e(C("IEditableCollection.-as-transient", a));
  return b.call(n, a)
}
function $b(a, b) {
  if(a ? a.ec : a) {
    return a.ec(a, b)
  }
  var c;
  var d = $b[u(a == n ? n : a)];
  d ? c = d : (d = $b._) ? c = d : e(C("ITransientCollection.-conj!", a));
  return c.call(n, a, b)
}
function ac(a) {
  if(a ? a.Ac : a) {
    return a.Ac(a)
  }
  var b;
  var c = ac[u(a == n ? n : a)];
  c ? b = c : (c = ac._) ? b = c : e(C("ITransientCollection.-persistent!", a));
  return b.call(n, a)
}
function bc(a, b, c) {
  if(a ? a.zc : a) {
    return a.zc(a, b, c)
  }
  var d;
  var f = bc[u(a == n ? n : a)];
  f ? d = f : (f = bc._) ? d = f : e(C("ITransientAssociative.-assoc!", a));
  return d.call(n, a, b, c)
}
var cc = {};
function dc(a, b) {
  if(a ? a.Od : a) {
    return a.Od(a, b)
  }
  var c;
  var d = dc[u(a == n ? n : a)];
  d ? c = d : (d = dc._) ? c = d : e(C("IComparable.-compare", a));
  return c.call(n, a, b)
}
function ec(a) {
  if(a ? a.Md : a) {
    return a.Md()
  }
  var b;
  var c = ec[u(a == n ? n : a)];
  c ? b = c : (c = ec._) ? b = c : e(C("IChunk.-drop-first", a));
  return b.call(n, a)
}
var fc = {};
function gc(a) {
  if(a ? a.wc : a) {
    return a.wc(a)
  }
  var b;
  var c = gc[u(a == n ? n : a)];
  c ? b = c : (c = gc._) ? b = c : e(C("IChunkedSeq.-chunked-first", a));
  return b.call(n, a)
}
function hc(a) {
  if(a ? a.Xb : a) {
    return a.Xb(a)
  }
  var b;
  var c = hc[u(a == n ? n : a)];
  c ? b = c : (c = hc._) ? b = c : e(C("IChunkedSeq.-chunked-rest", a));
  return b.call(n, a)
}
function G(a) {
  if(a == n) {
    a = n
  }else {
    var b;
    b = a ? ((b = a.k & 32) ? b : a.sf) || (a.k ? 0 : B(kb, a)) : B(kb, a);
    a = b ? a : Nb(a)
  }
  return a
}
function H(a) {
  if(a == n) {
    return n
  }
  var b;
  b = a ? ((b = a.k & 64) ? b : a.yc) || (a.k ? 0 : B(lb, a)) : B(lb, a);
  if(b) {
    return mb(a)
  }
  a = G(a);
  return a == n ? n : mb(a)
}
function J(a) {
  if(a != n) {
    var b;
    b = a ? ((b = a.k & 64) ? b : a.yc) || (a.k ? 0 : B(lb, a)) : B(lb, a);
    if(b) {
      return nb(a)
    }
    a = G(a);
    return a != n ? nb(a) : ic
  }
  return ic
}
function K(a) {
  if(a == n) {
    a = n
  }else {
    var b;
    b = a ? ((b = a.k & 128) ? b : a.yf) || (a.k ? 0 : B(ob, a)) : B(ob, a);
    a = b ? pb(a) : G(J(a))
  }
  return a
}
var jc, kc = n;
function lc(a, b) {
  var c = a === b;
  return c ? c : Kb(a, b)
}
function mc(a, b, c) {
  for(;;) {
    if(A(kc.b(a, b))) {
      if(K(c)) {
        a = b, b = H(c), c = K(c)
      }else {
        return kc.b(b, H(c))
      }
    }else {
      return p
    }
  }
}
function nc(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return mc.call(this, a, b, d)
}
nc.n = 2;
nc.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return mc(b, c, a)
};
nc.e = mc;
kc = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return k;
    case 2:
      return lc.call(this, a, b);
    default:
      return nc.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kc.n = 2;
kc.j = nc.j;
kc.c = ca(k);
kc.b = lc;
kc.e = nc.e;
jc = kc;
function oc(a, b) {
  return b instanceof a
}
Lb["null"] = ca(0);
var pc = n, pc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return n;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
E["null"] = pc;
tb["null"] = function(a, b, c) {
  return M.b ? M.b(b, c) : M.call(n, b, c)
};
ob["null"] = k;
pb["null"] = ca(n);
Vb["null"] = k;
Wb["null"] = function(a, b) {
  return Tb(b, "nil")
};
eb["null"] = k;
fb["null"] = function(a, b) {
  return O.c ? O.c(b) : O.call(n, b)
};
Fb["null"] = k;
var qc = n, qc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.z ? b.z() : b.call(n);
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gb["null"] = qc;
Rb["null"] = k;
Sb["null"] = function() {
  return O.c ? O.c("nil") : O.call(n, "nil")
};
bb["null"] = k;
cb["null"] = ca(0);
zb["null"] = ca(n);
lb["null"] = k;
mb["null"] = ca(n);
nb["null"] = function() {
  return O.z ? O.z() : O.call(n)
};
Kb["null"] = function(a, b) {
  return b == n
};
Eb["null"] = ca(n);
Cb["null"] = k;
Db["null"] = ca(n);
gb["null"] = k;
var rc = n, rc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return n;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D["null"] = rc;
db["null"] = ca(n);
ub["null"] = k;
vb["null"] = ca(n);
Date.prototype.G = function(a, b) {
  var c = oc(Date, b);
  return c ? a.toString() === b.toString() : c
};
Lb.number = aa();
Kb.number = function(a, b) {
  return a === b
};
Lb["boolean"] = function(a) {
  return a === k ? 1 : 0
};
Eb["function"] = function(a, b) {
  return sc.b ? sc.b(function() {
    if(h === Ta) {
      Ta = {};
      Ta = function(a, b, c) {
        this.m = a;
        this.sa = b;
        this.jd = c;
        this.t = 0;
        this.k = 393217
      };
      Ta.kb = k;
      Ta.ub = function() {
        return O.c ? O.c("cljs.core/t3646") : O.call(n, "cljs.core/t3646")
      };
      Ta.vb = function(a, b) {
        return Tb(b, "cljs.core/t3646")
      };
      var c = function(a, b) {
        return P.b ? P.b(a.sa, b) : P.call(n, a.sa, b)
      }, d = function(a, b) {
        var a = this, d = n;
        t(b) && (d = L(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.n = 1;
      d.j = function(a) {
        var b = H(a), a = J(a);
        return c(b, a)
      };
      d.e = c;
      Ta.prototype.call = d;
      Ta.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      Ta.prototype.B = q("jd");
      Ta.prototype.D = function(a, b) {
        return new Ta(this.m, this.sa, b)
      }
    }
    return new Ta(b, a, n)
  }(), b) : sc.call(n, function() {
    if(h === Ta) {
      Ta = function(a, b, c) {
        this.m = a;
        this.sa = b;
        this.jd = c;
        this.t = 0;
        this.k = 393217
      };
      Ta.kb = k;
      Ta.ub = function() {
        return O.c ? O.c("cljs.core/t3646") : O.call(n, "cljs.core/t3646")
      };
      Ta.vb = function(a, b) {
        return Tb(b, "cljs.core/t3646")
      };
      var c = function(a, b) {
        return P.b ? P.b(a.sa, b) : P.call(n, a.sa, b)
      }, d = function(a, b) {
        var a = this, d = n;
        t(b) && (d = L(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.n = 1;
      d.j = function(a) {
        var b = H(a), a = J(a);
        return c(b, a)
      };
      d.e = c;
      Ta.prototype.call = d;
      Ta.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      Ta.prototype.B = q("jd");
      Ta.prototype.D = function(a, b) {
        return new Ta(this.m, this.sa, b)
      }
    }
    return new Ta(b, a, n)
  }(), b)
};
Cb["function"] = k;
Db["function"] = ca(n);
Lb._ = function(a) {
  return ka(a)
};
function tc(a) {
  return a + 1
}
function uc(a) {
  this.l = a;
  this.t = 0;
  this.k = 32768
}
uc.prototype.Yb = q("l");
var vc, wc = n;
function xc(a, b) {
  var c = cb(a);
  if(0 === c) {
    return b.z ? b.z() : b.call(n)
  }
  for(var d = D.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, D.b(a, f)) : b.call(n, d, D.b(a, f));
      if(oc(uc, d)) {
        return yc.c ? yc.c(d) : yc.call(n, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function zc(a, b, c) {
  for(var d = cb(a), f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, D.b(a, f)) : b.call(n, c, D.b(a, f));
      if(oc(uc, c)) {
        return yc.c ? yc.c(c) : yc.call(n, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Ac(a, b, c, d) {
  for(var f = cb(a);;) {
    if(d < f) {
      c = b.b ? b.b(c, D.b(a, d)) : b.call(n, c, D.b(a, d));
      if(oc(uc, c)) {
        return yc.c ? yc.c(c) : yc.call(n, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
wc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return xc.call(this, a, b);
    case 3:
      return zc.call(this, a, b, c);
    case 4:
      return Ac.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wc.b = xc;
wc.a = zc;
wc.q = Ac;
vc = wc;
var Fc, Gc = n;
function Hc(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.z ? b.z() : b.call(n)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, a[f]) : b.call(n, d, a[f]);
      if(oc(uc, d)) {
        return yc.c ? yc.c(d) : yc.call(n, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Ic(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, a[f]) : b.call(n, c, a[f]);
      if(oc(uc, c)) {
        return yc.c ? yc.c(c) : yc.call(n, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Jc(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.b ? b.b(c, a[d]) : b.call(n, c, a[d]);
      if(oc(uc, c)) {
        return yc.c ? yc.c(c) : yc.call(n, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Gc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Hc.call(this, a, b);
    case 3:
      return Ic.call(this, a, b, c);
    case 4:
      return Jc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gc.b = Hc;
Gc.a = Ic;
Gc.q = Jc;
Fc = Gc;
function Kc(a) {
  if(a) {
    var b = a.k & 2, a = (b ? b : a.xc) ? k : a.k ? p : B(bb, a)
  }else {
    a = B(bb, a)
  }
  return a
}
function Lc(a) {
  if(a) {
    var b = a.k & 16, a = (b ? b : a.Gb) ? k : a.k ? p : B(gb, a)
  }else {
    a = B(gb, a)
  }
  return a
}
function Mc(a, b) {
  this.U = a;
  this.r = b;
  this.t = 0;
  this.k = 166199550
}
r = Mc.prototype;
r.L = function(a) {
  return Nc.c ? Nc.c(a) : Nc.call(n, a)
};
r.Za = function() {
  return this.r + 1 < this.U.length ? new Mc(this.U, this.r + 1) : n
};
r.K = function(a, b) {
  return Q.b ? Q.b(b, a) : Q.call(n, b, a)
};
r.cc = function(a) {
  var b = a.F(a);
  return 0 < b ? new Oc(a, b - 1, n) : ic
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.ib = function(a, b) {
  return Kc(this.U) ? vc.q(this.U, b, this.U[this.r], this.r + 1) : vc.q(a, b, this.U[this.r], 0)
};
r.jb = function(a, b, c) {
  return Kc(this.U) ? vc.q(this.U, b, c, this.r) : vc.q(a, b, c, 0)
};
r.C = aa();
r.F = function() {
  return this.U.length - this.r
};
r.ga = function() {
  return this.U[this.r]
};
r.ba = function() {
  return this.r + 1 < this.U.length ? new Mc(this.U, this.r + 1) : O.z ? O.z() : O.call(n)
};
r.G = function(a, b) {
  return Pc.b ? Pc.b(a, b) : Pc.call(n, a, b)
};
r.V = function(a, b) {
  var c = b + this.r;
  return c < this.U.length ? this.U[c] : n
};
r.P = function(a, b, c) {
  a = b + this.r;
  return a < this.U.length ? this.U[a] : c
};
r.O = function() {
  return ic
};
var Qc, Rc = n;
function Sc(a) {
  return Rc.b(a, 0)
}
function Tc(a, b) {
  return b < a.length ? new Mc(a, b) : n
}
Rc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Sc.call(this, a);
    case 2:
      return Tc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rc.c = Sc;
Rc.b = Tc;
Qc = Rc;
var L, Uc = n;
function Vc(a) {
  return Qc.b(a, 0)
}
function Wc(a, b) {
  return Qc.b(a, b)
}
Uc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Vc.call(this, a);
    case 2:
      return Wc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uc.c = Vc;
Uc.b = Wc;
L = Uc;
Fb.array = k;
var Xc = n, Xc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return vc.b(a, b);
    case 3:
      return vc.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gb.array = Xc;
var Yc = n, Yc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return D.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
E.array = Yc;
gb.array = k;
var Zc = n, Zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : n;
    case 3:
      return b < a.length ? a[b] : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.array = Zc;
bb.array = k;
cb.array = function(a) {
  return a.length
};
Mb.array = k;
Nb.array = function(a) {
  return L.b(a, 0)
};
function Oc(a, b, c) {
  this.vc = a;
  this.r = b;
  this.m = c;
  this.t = 0;
  this.k = 31850574
}
r = Oc.prototype;
r.L = function(a) {
  return Nc.c ? Nc.c(a) : Nc.call(n, a)
};
r.K = function(a, b) {
  return Q.b ? Q.b(b, a) : Q.call(n, b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.F = function() {
  return this.r + 1
};
r.ga = function() {
  return D.b(this.vc, this.r)
};
r.ba = function() {
  return 0 < this.r ? new Oc(this.vc, this.r - 1, n) : ic
};
r.G = function(a, b) {
  return Pc.b ? Pc.b(a, b) : Pc.call(n, a, b)
};
r.D = function(a, b) {
  return new Oc(this.vc, this.r, b)
};
r.B = q("m");
r.O = function() {
  return sc.b ? sc.b(ic, this.m) : sc.call(n, ic, this.m)
};
function $c(a) {
  return H(K(a))
}
Kb._ = function(a, b) {
  return a === b
};
var ad, bd = n;
function cd(a, b, c) {
  for(;;) {
    if(A(c)) {
      a = bd.b(a, b), b = H(c), c = K(c)
    }else {
      return bd.b(a, b)
    }
  }
}
function dd(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return cd.call(this, a, b, d)
}
dd.n = 2;
dd.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return cd(b, c, a)
};
dd.e = cd;
bd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return fb(a, b);
    default:
      return dd.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
bd.n = 2;
bd.j = dd.j;
bd.b = function(a, b) {
  return fb(a, b)
};
bd.e = dd.e;
ad = bd;
function ed(a) {
  if(Kc(a)) {
    a = cb(a)
  }else {
    a: {
      for(var a = G(a), b = 0;;) {
        if(Kc(a)) {
          a = b + cb(a);
          break a
        }
        a = K(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var id, jd = n;
function kd(a, b) {
  for(;;) {
    a == n && e(Error("Index out of bounds"));
    if(0 === b) {
      if(G(a)) {
        return H(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Lc(a)) {
      return D.b(a, b)
    }
    if(G(a)) {
      var c = K(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function ld(a, b, c) {
  for(;;) {
    if(a == n) {
      return c
    }
    if(0 === b) {
      return G(a) ? H(a) : c
    }
    if(Lc(a)) {
      return D.a(a, b, c)
    }
    if(G(a)) {
      a = K(a), b -= 1
    }else {
      return c
    }
  }
}
jd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return kd.call(this, a, b);
    case 3:
      return ld.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jd.b = kd;
jd.a = ld;
id = jd;
var S, md = n;
function nd(a, b) {
  var c;
  a == n ? c = n : (c = a ? ((c = a.k & 16) ? c : a.Gb) || (a.k ? 0 : B(gb, a)) : B(gb, a), c = c ? D.b(a, Math.floor(b)) : id.b(a, Math.floor(b)));
  return c
}
function od(a, b, c) {
  if(a != n) {
    var d;
    d = a ? ((d = a.k & 16) ? d : a.Gb) || (a.k ? 0 : B(gb, a)) : B(gb, a);
    a = d ? D.a(a, Math.floor(b), c) : id.a(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
md = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return nd.call(this, a, b);
    case 3:
      return od.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
md.b = nd;
md.a = od;
S = md;
var pd, qd = n;
function rd(a, b, c, d) {
  for(;;) {
    if(a = qd.a(a, b, c), A(d)) {
      b = H(d), c = $c(d), d = K(K(d))
    }else {
      return a
    }
  }
}
function sd(a, b, c, d) {
  var f = n;
  t(d) && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return rd.call(this, a, b, c, f)
}
sd.n = 3;
sd.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), a = J(K(K(a)));
  return rd(b, c, d, a)
};
sd.e = rd;
qd = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return tb(a, b, c);
    default:
      return sd.e(a, b, c, L(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
qd.n = 3;
qd.j = sd.j;
qd.a = function(a, b, c) {
  return tb(a, b, c)
};
qd.e = sd.e;
pd = qd;
var td, ud = n;
function vd(a, b, c) {
  for(;;) {
    if(a = ud.b(a, b), A(c)) {
      b = H(c), c = K(c)
    }else {
      return a
    }
  }
}
function wd(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return vd.call(this, a, b, d)
}
wd.n = 2;
wd.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return vd(b, c, a)
};
wd.e = vd;
ud = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return vb(a, b);
    default:
      return wd.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ud.n = 2;
ud.j = wd.j;
ud.c = aa();
ud.b = function(a, b) {
  return vb(a, b)
};
ud.e = wd.e;
td = ud;
function sc(a, b) {
  return Eb(a, b)
}
function xd(a) {
  var b;
  b = a ? ((b = a.k & 131072) ? b : a.Pd) || (a.k ? 0 : B(Cb, a)) : B(Cb, a);
  return b ? Db(a) : n
}
var yd = {}, zd = 0, Ad, Bd = n;
function Cd(a) {
  return Bd.b(a, k)
}
function Dd(a, b) {
  var c;
  ((c = ga(a)) ? b : c) ? (255 < zd && (yd = {}, zd = 0), c = yd[a], c == n && (c = Da(a), yd[a] = c, zd += 1)) : c = Lb(a);
  return c
}
Bd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Cd.call(this, a);
    case 2:
      return Dd.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bd.c = Cd;
Bd.b = Dd;
Ad = Bd;
function Ed(a) {
  var b = a == n;
  return b ? b : Ua(G(a))
}
function Fd(a) {
  if(a == n) {
    a = p
  }else {
    if(a) {
      var b = a.k & 8, a = (b ? b : a.uf) ? k : a.k ? p : B(eb, a)
    }else {
      a = B(eb, a)
    }
  }
  return a
}
function Gd(a) {
  if(a) {
    var b = a.k & 16777216, a = (b ? b : a.Af) ? k : a.k ? p : B(Ob, a)
  }else {
    a = B(Ob, a)
  }
  return a
}
function Hd(a) {
  if(a) {
    var b = a.k & 16384, a = (b ? b : a.Bf) ? k : a.k ? p : B(Ab, a)
  }else {
    a = B(Ab, a)
  }
  return a
}
function Id(a) {
  if(a) {
    var b = a.t & 512, a = (b ? b : a.tf) ? k : a.t ? p : B(fc, a)
  }else {
    a = B(fc, a)
  }
  return a
}
function Jd(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Kd = {};
function T(a) {
  if(a == n) {
    a = p
  }else {
    if(a) {
      var b = a.k & 64, a = (b ? b : a.yc) ? k : a.k ? p : B(lb, a)
    }else {
      a = B(lb, a)
    }
  }
  return a
}
function Ld(a) {
  var b = ga(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Md(a) {
  var b = ga(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Nd(a) {
  var b = ga(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Od(a, b) {
  if(a === b) {
    return 0
  }
  if(a == n) {
    return-1
  }
  if(b == n) {
    return 1
  }
  if((a == n ? n : a.constructor) === (b == n ? n : b.constructor)) {
    var c;
    c = a ? ((c = a.t & 2048) ? c : a.ze) || (a.t ? 0 : B(cc, a)) : B(cc, a);
    return c ? dc(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Pd, Qd = n;
function Rd(a, b) {
  var c = ed(a), d = ed(b);
  return c < d ? -1 : c > d ? 1 : Qd.q(a, b, c, 0)
}
function Sd(a, b, c, d) {
  for(;;) {
    var f = Od(S.b(a, d), S.b(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
Qd = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Rd.call(this, a, b);
    case 4:
      return Sd.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qd.b = Rd;
Qd.q = Sd;
Pd = Qd;
var Td, Ud = n;
function Vd(a, b) {
  var c = G(b);
  return c ? ab.a ? ab.a(a, H(c), K(c)) : ab.call(n, a, H(c), K(c)) : a.z ? a.z() : a.call(n)
}
function Wd(a, b, c) {
  for(c = G(c);;) {
    if(c) {
      b = a.b ? a.b(b, H(c)) : a.call(n, b, H(c));
      if(oc(uc, b)) {
        return yc.c ? yc.c(b) : yc.call(n, b)
      }
      c = K(c)
    }else {
      return b
    }
  }
}
Ud = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Vd.call(this, a, b);
    case 3:
      return Wd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ud.b = Vd;
Ud.a = Wd;
Td = Ud;
var ab, Xd = n;
function Yd(a, b) {
  var c;
  c = b ? ((c = b.k & 524288) ? c : b.Ae) || (b.k ? 0 : B(Fb, b)) : B(Fb, b);
  return c ? Gb.b(b, a) : Td.b(a, b)
}
function Zd(a, b, c) {
  var d;
  d = c ? ((d = c.k & 524288) ? d : c.Ae) || (c.k ? 0 : B(Fb, c)) : B(Fb, c);
  return d ? Gb.a(c, a, b) : Td.a(a, b, c)
}
Xd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Yd.call(this, a, b);
    case 3:
      return Zd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xd.b = Yd;
Xd.a = Zd;
ab = Xd;
var $d, ae = n;
function be(a, b, c) {
  return ab.a(ae, a + b, c)
}
function ce(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return be.call(this, a, b, d)
}
ce.n = 2;
ce.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return be(b, c, a)
};
ce.e = be;
ae = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a + b;
    default:
      return ce.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ae.n = 2;
ae.j = ce.j;
ae.z = ca(0);
ae.c = aa();
ae.b = function(a, b) {
  return a + b
};
ae.e = ce.e;
$d = ae;
var de, ee = n;
function fe(a, b) {
  return a > b ? a : b
}
function ge(a, b, c) {
  return ab.a(ee, a > b ? a : b, c)
}
function he(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return ge.call(this, a, b, d)
}
he.n = 2;
he.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return ge(b, c, a)
};
he.e = ge;
ee = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return fe.call(this, a, b);
    default:
      return he.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.n = 2;
ee.j = he.j;
ee.c = aa();
ee.b = fe;
ee.e = he.e;
de = ee;
var ie, je = n;
function ke(a, b) {
  return a < b ? a : b
}
function le(a, b, c) {
  return ab.a(je, a < b ? a : b, c)
}
function me(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return le.call(this, a, b, d)
}
me.n = 2;
me.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return le(b, c, a)
};
me.e = le;
je = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return ke.call(this, a, b);
    default:
      return me.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
je.n = 2;
je.j = me.j;
je.c = aa();
je.b = ke;
je.e = me.e;
ie = je;
function ne(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var oe, pe = n;
function qe(a) {
  return a == n ? "" : a.toString()
}
function re(a, b) {
  return function(a, b) {
    for(;;) {
      if(A(b)) {
        var f = a.append(pe.c(H(b))), g = K(b), a = f, b = g
      }else {
        return pe.c(a)
      }
    }
  }.call(n, new Sa(pe.c(a)), b)
}
function se(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return re.call(this, a, c)
}
se.n = 1;
se.j = function(a) {
  var b = H(a), a = J(a);
  return re(b, a)
};
se.e = re;
pe = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return qe.call(this, a);
    default:
      return se.e(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pe.n = 1;
pe.j = se.j;
pe.z = ca("");
pe.c = qe;
pe.e = se.e;
oe = pe;
var U, te = n;
function ue(a) {
  return Nd(a) ? a.substring(2, a.length) : Md(a) ? oe.e(":", L([a.substring(2, a.length)], 0)) : a == n ? "" : a.toString()
}
function ve(a, b) {
  return function(a, b) {
    for(;;) {
      if(A(b)) {
        var f = a.append(te.c(H(b))), g = K(b), a = f, b = g
      }else {
        return oe.c(a)
      }
    }
  }.call(n, new Sa(te.c(a)), b)
}
function we(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return ve.call(this, a, c)
}
we.n = 1;
we.j = function(a) {
  var b = H(a), a = J(a);
  return ve(b, a)
};
we.e = ve;
te = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ue.call(this, a);
    default:
      return we.e(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
te.n = 1;
te.j = we.j;
te.z = ca("");
te.c = ue;
te.e = we.e;
U = te;
var xe, Be = n, Be = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Be.b = function(a, b) {
  return a.substring(b)
};
Be.a = function(a, b, c) {
  return a.substring(b, c)
};
xe = Be;
function Ce(a, b) {
  var c = V.b ? V.b(function(a) {
    var b = Md(a);
    return(b ? b : Nd(a)) ? "" + U(a) : a
  }, b) : V.call(n, function(a) {
    var b = Md(a);
    return(b ? b : Nd(a)) ? "" + U(a) : a
  }, b);
  return P.a ? P.a(Ra, a, c) : P.call(n, Ra, a, c)
}
function De(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return Ce.call(this, a, c)
}
De.n = 1;
De.j = function(a) {
  var b = H(a), a = J(a);
  return Ce(b, a)
};
De.e = Ce;
var Ee, Fe = n;
function Ge(a) {
  return Nd(a) ? a : Md(a) ? oe.e("\ufdd1", L(["'", xe.b(a, 2)], 0)) : oe.e("\ufdd1", L(["'", a], 0))
}
function He(a, b) {
  return Fe.c(oe.e(a, L(["/", b], 0)))
}
Fe = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ge.call(this, a);
    case 2:
      return He.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fe.c = Ge;
Fe.b = He;
Ee = Fe;
function Pc(a, b) {
  var c;
  if(Gd(b)) {
    a: {
      c = G(a);
      for(var d = G(b);;) {
        if(c == n) {
          c = d == n;
          break a
        }
        if(d != n && jc.b(H(c), H(d))) {
          c = K(c), d = K(d)
        }else {
          c = p;
          break a
        }
      }
      c = h
    }
  }else {
    c = n
  }
  return A(c) ? k : p
}
function Nc(a) {
  return ab.a(function(a, c) {
    var d = Ad.b(c, p);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Ad.b(H(a), p), K(a))
}
function Ie(a) {
  for(var b = 0, a = G(a);;) {
    if(a) {
      var c = H(a), b = (b + (Ad.c(Je.c ? Je.c(c) : Je.call(n, c)) ^ Ad.c(Ke.c ? Ke.c(c) : Ke.call(n, c)))) % 4503599627370496, a = K(a)
    }else {
      return b
    }
  }
}
function Le(a, b, c, d, f) {
  this.m = a;
  this.zb = b;
  this.Ua = c;
  this.count = d;
  this.o = f;
  this.t = 0;
  this.k = 65413358
}
r = Le.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.Za = function() {
  return 1 === this.count ? n : this.Ua
};
r.K = function(a, b) {
  return new Le(this.m, b, a, this.count + 1, n)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.F = q("count");
r.tb = q("zb");
r.ga = q("zb");
r.ba = function() {
  return 1 === this.count ? ic : this.Ua
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Le(b, this.zb, this.Ua, this.count, this.o)
};
r.B = q("m");
r.O = function() {
  return ic
};
function Me(a) {
  this.m = a;
  this.t = 0;
  this.k = 65413326
}
r = Me.prototype;
r.L = ca(0);
r.Za = ca(n);
r.K = function(a, b) {
  return new Le(this.m, b, n, 1, n)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = ca(n);
r.F = ca(0);
r.tb = ca(n);
r.ga = ca(n);
r.ba = function() {
  return ic
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Me(b)
};
r.B = q("m");
r.O = aa();
var ic = new Me(n);
function Ne(a) {
  var b;
  b = a ? ((b = a.k & 134217728) ? b : a.zf) || (a.k ? 0 : B(Pb, a)) : B(Pb, a);
  return b ? Qb(a) : ab.a(ad, ic, a)
}
var O, Oe = n;
function Pe(a) {
  return ad.b(ic, a)
}
function Qe(a, b) {
  return ad.b(Oe.c(b), a)
}
function Re(a, b, c) {
  return ad.b(Oe.b(b, c), a)
}
function Se(a, b, c, d) {
  return ad.b(ad.b(ad.b(ab.a(ad, ic, Ne(d)), c), b), a)
}
function Te(a, b, c, d) {
  var f = n;
  t(d) && (f = L(Array.prototype.slice.call(arguments, 3), 0));
  return Se.call(this, a, b, c, f)
}
Te.n = 3;
Te.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), a = J(K(K(a)));
  return Se(b, c, d, a)
};
Te.e = Se;
Oe = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return ic;
    case 1:
      return Pe.call(this, a);
    case 2:
      return Qe.call(this, a, b);
    case 3:
      return Re.call(this, a, b, c);
    default:
      return Te.e(a, b, c, L(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oe.n = 3;
Oe.j = Te.j;
Oe.z = function() {
  return ic
};
Oe.c = Pe;
Oe.b = Qe;
Oe.a = Re;
Oe.e = Te.e;
O = Oe;
function Ue(a, b, c, d) {
  this.m = a;
  this.zb = b;
  this.Ua = c;
  this.o = d;
  this.t = 0;
  this.k = 65405164
}
r = Ue.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.Za = function() {
  return this.Ua == n ? n : Nb(this.Ua)
};
r.K = function(a, b) {
  return new Ue(n, b, a, this.o)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.ga = q("zb");
r.ba = function() {
  return this.Ua == n ? ic : this.Ua
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Ue(b, this.zb, this.Ua, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
function Q(a, b) {
  var c = b == n;
  c || (c = b ? ((c = b.k & 64) ? c : b.yc) || (b.k ? 0 : B(lb, b)) : B(lb, b));
  return c ? new Ue(n, a, b, n) : new Ue(n, a, G(b), n)
}
Fb.string = k;
var Ve = n, Ve = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return vc.b(a, b);
    case 3:
      return vc.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gb.string = Ve;
var We = n, We = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.b(a, b);
    case 3:
      return D.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
E.string = We;
gb.string = k;
var Xe = n, Xe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < cb(a) ? a.charAt(b) : n;
    case 3:
      return b < cb(a) ? a.charAt(b) : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.string = Xe;
bb.string = k;
cb.string = function(a) {
  return a.length
};
Mb.string = k;
Nb.string = function(a) {
  return Qc.b(a, 0)
};
Lb.string = function(a) {
  return Da(a)
};
function W(a) {
  this.dd = a;
  this.t = 0;
  this.k = 1
}
var Ye = n, Ye = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == n) {
        d = n
      }else {
        var f = b.Xa;
        d = f == n ? E.a(b, d.dd, n) : f[d.dd]
      }
      return d;
    case 3:
      return b == n ? c : E.a(b, this.dd, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
W.prototype.call = Ye;
W.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Ze = n, Ze = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return E.a(b, this.toString(), n);
    case 3:
      return E.a(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Ze;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > ed(b) ? E.a(b[0], a, n) : E.a(b[0], a, b[1])
};
function $e(a) {
  var b = a.x;
  if(a.nd) {
    return b
  }
  a.x = b.z ? b.z() : b.call(n);
  a.nd = k;
  return a.x
}
function af(a, b, c, d) {
  this.m = a;
  this.nd = b;
  this.x = c;
  this.o = d;
  this.t = 0;
  this.k = 31850700
}
r = af.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.Za = function(a) {
  return Nb(a.ba(a))
};
r.K = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = function(a) {
  return G($e(a))
};
r.ga = function(a) {
  return H($e(a))
};
r.ba = function(a) {
  return J($e(a))
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new af(b, this.nd, this.x, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
function bf(a, b) {
  this.uc = a;
  this.end = b;
  this.t = 0;
  this.k = 2
}
bf.prototype.F = q("end");
bf.prototype.add = function(a) {
  this.uc[this.end] = a;
  return this.end += 1
};
bf.prototype.Ya = function() {
  var a = new cf(this.uc, 0, this.end);
  this.uc = n;
  return a
};
function cf(a, b, c) {
  this.g = a;
  this.N = b;
  this.end = c;
  this.t = 0;
  this.k = 524306
}
r = cf.prototype;
r.ib = function(a, b) {
  return Fc.q(this.g, b, this.g[this.N], this.N + 1)
};
r.jb = function(a, b, c) {
  return Fc.q(this.g, b, c, this.N)
};
r.Md = function() {
  this.N === this.end && e(Error("-drop-first of empty chunk"));
  return new cf(this.g, this.N + 1, this.end)
};
r.V = function(a, b) {
  return this.g[this.N + b]
};
r.P = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.N : a) ? this.g[this.N + b] : c
};
r.F = function() {
  return this.end - this.N
};
var df, ef = n;
function ff(a) {
  return ef.a(a, 0, a.length)
}
function gf(a, b) {
  return ef.a(a, b, a.length)
}
function hf(a, b, c) {
  return new cf(a, b, c)
}
ef = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return ff.call(this, a);
    case 2:
      return gf.call(this, a, b);
    case 3:
      return hf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.c = ff;
ef.b = gf;
ef.a = hf;
df = ef;
function jf(a, b, c, d) {
  this.Ya = a;
  this.gb = b;
  this.m = c;
  this.o = d;
  this.k = 31850604;
  this.t = 1536
}
r = jf.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.K = function(a, b) {
  return Q(b, a)
};
r.C = aa();
r.ga = function() {
  return D.b(this.Ya, 0)
};
r.ba = function() {
  return 1 < cb(this.Ya) ? new jf(ec(this.Ya), this.gb, this.m, n) : this.gb == n ? ic : this.gb
};
r.Nd = function() {
  return this.gb == n ? n : this.gb
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new jf(this.Ya, this.gb, b, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
r.wc = q("Ya");
r.Xb = function() {
  return this.gb == n ? ic : this.gb
};
function kf(a, b) {
  return 0 === cb(a) ? b : new jf(a, b, n, n)
}
function lf(a) {
  for(var b = [];;) {
    if(G(a)) {
      b.push(H(a)), a = K(a)
    }else {
      return b
    }
  }
}
function mf(a, b) {
  if(Kc(a)) {
    return ed(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? G(c) : g;
    if(A(g)) {
      c = K(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var of = function nf(b) {
  return b == n ? n : K(b) == n ? G(H(b)) : Q(H(b), nf(K(b)))
}, pf, qf = n;
function rf() {
  return new af(n, p, ca(n), n)
}
function sf(a) {
  return new af(n, p, function() {
    return a
  }, n)
}
function tf(a, b) {
  return new af(n, p, function() {
    var c = G(a);
    return c ? Id(c) ? kf(gc(c), qf.b(hc(c), b)) : Q(H(c), qf.b(J(c), b)) : b
  }, n)
}
function uf(a, b, c) {
  return function f(a, b) {
    return new af(n, p, function() {
      var c = G(a);
      return c ? Id(c) ? kf(gc(c), f(hc(c), b)) : Q(H(c), f(J(c), b)) : A(b) ? f(H(b), K(b)) : n
    }, n)
  }(qf.b(a, b), c)
}
function vf(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return uf.call(this, a, b, d)
}
vf.n = 2;
vf.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return uf(b, c, a)
};
vf.e = uf;
qf = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return rf.call(this);
    case 1:
      return sf.call(this, a);
    case 2:
      return tf.call(this, a, b);
    default:
      return vf.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
qf.n = 2;
qf.j = vf.j;
qf.z = rf;
qf.c = sf;
qf.b = tf;
qf.e = vf.e;
pf = qf;
var wf, xf = n;
function yf(a, b, c) {
  return Q(a, Q(b, c))
}
function zf(a, b, c, d) {
  return Q(a, Q(b, Q(c, d)))
}
function Cf(a, b, c, d, f) {
  return Q(a, Q(b, Q(c, Q(d, of(f)))))
}
function If(a, b, c, d, f) {
  var g = n;
  t(f) && (g = L(Array.prototype.slice.call(arguments, 4), 0));
  return Cf.call(this, a, b, c, d, g)
}
If.n = 4;
If.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), f = H(K(K(K(a)))), a = J(K(K(K(a))));
  return Cf(b, c, d, f, a)
};
If.e = Cf;
xf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return G(a);
    case 2:
      return Q(a, b);
    case 3:
      return yf.call(this, a, b, c);
    case 4:
      return zf.call(this, a, b, c, d);
    default:
      return If.e(a, b, c, d, L(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
xf.n = 4;
xf.j = If.j;
xf.c = function(a) {
  return G(a)
};
xf.b = function(a, b) {
  return Q(a, b)
};
xf.a = yf;
xf.q = zf;
xf.e = If.e;
wf = xf;
function Jf(a, b, c) {
  var d = G(c);
  if(0 === b) {
    return a.z ? a.z() : a.call(n)
  }
  var c = mb(d), f = nb(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(n, c)
  }
  var d = mb(f), g = nb(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(n, c, d)
  }
  var f = mb(g), i = nb(g);
  if(3 === b) {
    return a.a ? a.a(c, d, f) : a.a ? a.a(c, d, f) : a.call(n, c, d, f)
  }
  var g = mb(i), j = nb(i);
  if(4 === b) {
    return a.q ? a.q(c, d, f, g) : a.q ? a.q(c, d, f, g) : a.call(n, c, d, f, g)
  }
  i = mb(j);
  j = nb(j);
  if(5 === b) {
    return a.X ? a.X(c, d, f, g, i) : a.X ? a.X(c, d, f, g, i) : a.call(n, c, d, f, g, i)
  }
  var a = mb(j), l = nb(j);
  if(6 === b) {
    return a.la ? a.la(c, d, f, g, i, a) : a.la ? a.la(c, d, f, g, i, a) : a.call(n, c, d, f, g, i, a)
  }
  var j = mb(l), m = nb(l);
  if(7 === b) {
    return a.Pa ? a.Pa(c, d, f, g, i, a, j) : a.Pa ? a.Pa(c, d, f, g, i, a, j) : a.call(n, c, d, f, g, i, a, j)
  }
  var l = mb(m), s = nb(m);
  if(8 === b) {
    return a.Mc ? a.Mc(c, d, f, g, i, a, j, l) : a.Mc ? a.Mc(c, d, f, g, i, a, j, l) : a.call(n, c, d, f, g, i, a, j, l)
  }
  var m = mb(s), w = nb(s);
  if(9 === b) {
    return a.Nc ? a.Nc(c, d, f, g, i, a, j, l, m) : a.Nc ? a.Nc(c, d, f, g, i, a, j, l, m) : a.call(n, c, d, f, g, i, a, j, l, m)
  }
  var s = mb(w), v = nb(w);
  if(10 === b) {
    return a.Bc ? a.Bc(c, d, f, g, i, a, j, l, m, s) : a.Bc ? a.Bc(c, d, f, g, i, a, j, l, m, s) : a.call(n, c, d, f, g, i, a, j, l, m, s)
  }
  var w = mb(v), I = nb(v);
  if(11 === b) {
    return a.Cc ? a.Cc(c, d, f, g, i, a, j, l, m, s, w) : a.Cc ? a.Cc(c, d, f, g, i, a, j, l, m, s, w) : a.call(n, c, d, f, g, i, a, j, l, m, s, w)
  }
  var v = mb(I), z = nb(I);
  if(12 === b) {
    return a.Dc ? a.Dc(c, d, f, g, i, a, j, l, m, s, w, v) : a.Dc ? a.Dc(c, d, f, g, i, a, j, l, m, s, w, v) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v)
  }
  var I = mb(z), F = nb(z);
  if(13 === b) {
    return a.Ec ? a.Ec(c, d, f, g, i, a, j, l, m, s, w, v, I) : a.Ec ? a.Ec(c, d, f, g, i, a, j, l, m, s, w, v, I) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I)
  }
  var z = mb(F), x = nb(F);
  if(14 === b) {
    return a.Fc ? a.Fc(c, d, f, g, i, a, j, l, m, s, w, v, I, z) : a.Fc ? a.Fc(c, d, f, g, i, a, j, l, m, s, w, v, I, z) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z)
  }
  var F = mb(x), N = nb(x);
  if(15 === b) {
    return a.Gc ? a.Gc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F) : a.Gc ? a.Gc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F)
  }
  var x = mb(N), ra = nb(N);
  if(16 === b) {
    return a.Hc ? a.Hc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x) : a.Hc ? a.Hc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x)
  }
  var N = mb(ra), la = nb(ra);
  if(17 === b) {
    return a.Ic ? a.Ic(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N) : a.Ic ? a.Ic(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N)
  }
  var ra = mb(la), Ba = nb(la);
  if(18 === b) {
    return a.Jc ? a.Jc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra) : a.Jc ? a.Jc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra)
  }
  la = mb(Ba);
  Ba = nb(Ba);
  if(19 === b) {
    return a.Kc ? a.Kc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la) : a.Kc ? a.Kc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la)
  }
  var La = mb(Ba);
  nb(Ba);
  if(20 === b) {
    return a.Lc ? a.Lc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la, La) : a.Lc ? a.Lc(c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la, La) : a.call(n, c, d, f, g, i, a, j, l, m, s, w, v, I, z, F, x, N, ra, la, La)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var P, Kf = n;
function Lf(a, b) {
  var c = a.n;
  if(a.j) {
    var d = mf(b, c + 1);
    return d <= c ? Jf(a, d, b) : a.j(b)
  }
  return a.apply(a, lf(b))
}
function Mf(a, b, c) {
  b = wf.b(b, c);
  c = a.n;
  if(a.j) {
    var d = mf(b, c + 1);
    return d <= c ? Jf(a, d, b) : a.j(b)
  }
  return a.apply(a, lf(b))
}
function Nf(a, b, c, d) {
  b = wf.a(b, c, d);
  c = a.n;
  return a.j ? (d = mf(b, c + 1), d <= c ? Jf(a, d, b) : a.j(b)) : a.apply(a, lf(b))
}
function Of(a, b, c, d, f) {
  b = wf.q(b, c, d, f);
  c = a.n;
  return a.j ? (d = mf(b, c + 1), d <= c ? Jf(a, d, b) : a.j(b)) : a.apply(a, lf(b))
}
function Pf(a, b, c, d, f, g) {
  b = Q(b, Q(c, Q(d, Q(f, of(g)))));
  c = a.n;
  return a.j ? (d = mf(b, c + 1), d <= c ? Jf(a, d, b) : a.j(b)) : a.apply(a, lf(b))
}
function Qf(a, b, c, d, f, g) {
  var i = n;
  t(g) && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return Pf.call(this, a, b, c, d, f, i)
}
Qf.n = 5;
Qf.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), f = H(K(K(K(a)))), g = H(K(K(K(K(a))))), a = J(K(K(K(K(a)))));
  return Pf(b, c, d, f, g, a)
};
Qf.e = Pf;
Kf = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Lf.call(this, a, b);
    case 3:
      return Mf.call(this, a, b, c);
    case 4:
      return Nf.call(this, a, b, c, d);
    case 5:
      return Of.call(this, a, b, c, d, f);
    default:
      return Qf.e(a, b, c, d, f, L(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kf.n = 5;
Kf.j = Qf.j;
Kf.b = Lf;
Kf.a = Mf;
Kf.q = Nf;
Kf.X = Of;
Kf.e = Qf.e;
P = Kf;
var Rf, Sf = n;
function Tf(a, b) {
  return!jc.b(a, b)
}
function Uf(a, b, c) {
  return Ua(P.q(jc, a, b, c))
}
function Vf(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return Uf.call(this, a, b, d)
}
Vf.n = 2;
Vf.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return Uf(b, c, a)
};
Vf.e = Uf;
Sf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return p;
    case 2:
      return Tf.call(this, a, b);
    default:
      return Vf.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sf.n = 2;
Sf.j = Vf.j;
Sf.c = ca(p);
Sf.b = Tf;
Sf.e = Vf.e;
Rf = Sf;
function Wf(a, b) {
  for(;;) {
    if(G(b) == n) {
      return k
    }
    if(A(a.c ? a.c(H(b)) : a.call(n, H(b)))) {
      var c = a, d = K(b), a = c, b = d
    }else {
      return p
    }
  }
}
function Xf(a) {
  return a
}
var Yf, Zf = n;
function $f(a, b) {
  function c(a) {
    var b = n;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, b)
  }
  function d(c) {
    return P.a(a, b, c)
  }
  c.n = 0;
  c.j = function(a) {
    a = G(a);
    return d(a)
  };
  c.e = d;
  return c
}
function ag(a, b, c) {
  function d(a) {
    var b = n;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(d) {
    return P.q(a, b, c, d)
  }
  d.n = 0;
  d.j = function(a) {
    a = G(a);
    return f(a)
  };
  d.e = f;
  return d
}
function bg(a, b, c, d) {
  function f(a) {
    var b = n;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return g.call(this, b)
  }
  function g(f) {
    return P.X(a, b, c, d, f)
  }
  f.n = 0;
  f.j = function(a) {
    a = G(a);
    return g(a)
  };
  f.e = g;
  return f
}
function cg(a, b, c, d, f) {
  function g(a) {
    var b = n;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(g) {
    return P.X(a, b, c, d, pf.b(f, g))
  }
  g.n = 0;
  g.j = function(a) {
    a = G(a);
    return i(a)
  };
  g.e = i;
  return g
}
function dg(a, b, c, d, f) {
  var g = n;
  t(f) && (g = L(Array.prototype.slice.call(arguments, 4), 0));
  return cg.call(this, a, b, c, d, g)
}
dg.n = 4;
dg.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), f = H(K(K(K(a)))), a = J(K(K(K(a))));
  return cg(b, c, d, f, a)
};
dg.e = cg;
Zf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return $f.call(this, a, b);
    case 3:
      return ag.call(this, a, b, c);
    case 4:
      return bg.call(this, a, b, c, d);
    default:
      return dg.e(a, b, c, d, L(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zf.n = 4;
Zf.j = dg.j;
Zf.b = $f;
Zf.a = ag;
Zf.q = bg;
Zf.e = dg.e;
Yf = Zf;
var V, eg = n;
function fg(a, b) {
  return new af(n, p, function() {
    var c = G(b);
    if(c) {
      if(Id(c)) {
        for(var d = gc(c), f = ed(d), g = new bf(Va.c(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(D.b(d, i)) : a.call(n, D.b(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return kf(g.Ya(), eg.b(a, hc(c)))
      }
      return Q(a.c ? a.c(H(c)) : a.call(n, H(c)), eg.b(a, J(c)))
    }
    return n
  }, n)
}
function gg(a, b, c) {
  return new af(n, p, function() {
    var d = G(b), f = G(c);
    return(d ? f : d) ? Q(a.b ? a.b(H(d), H(f)) : a.call(n, H(d), H(f)), eg.a(a, J(d), J(f))) : n
  }, n)
}
function hg(a, b, c, d) {
  return new af(n, p, function() {
    var f = G(b), g = G(c), i = G(d);
    return(f ? g ? i : g : f) ? Q(a.a ? a.a(H(f), H(g), H(i)) : a.call(n, H(f), H(g), H(i)), eg.q(a, J(f), J(g), J(i))) : n
  }, n)
}
function ig(a, b, c, d, f) {
  return eg.b(function(b) {
    return P.b(a, b)
  }, function i(a) {
    return new af(n, p, function() {
      var b = eg.b(G, a);
      return Wf(Xf, b) ? Q(eg.b(H, b), i(eg.b(J, b))) : n
    }, n)
  }(ad.e(f, d, L([c, b], 0))))
}
function jg(a, b, c, d, f) {
  var g = n;
  t(f) && (g = L(Array.prototype.slice.call(arguments, 4), 0));
  return ig.call(this, a, b, c, d, g)
}
jg.n = 4;
jg.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), f = H(K(K(K(a)))), a = J(K(K(K(a))));
  return ig(b, c, d, f, a)
};
jg.e = ig;
eg = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return fg.call(this, a, b);
    case 3:
      return gg.call(this, a, b, c);
    case 4:
      return hg.call(this, a, b, c, d);
    default:
      return jg.e(a, b, c, d, L(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
eg.n = 4;
eg.j = jg.j;
eg.b = fg;
eg.a = gg;
eg.q = hg;
eg.e = jg.e;
V = eg;
var lg = function kg(b, c) {
  return new af(n, p, function() {
    if(0 < b) {
      var d = G(c);
      return d ? Q(H(d), kg(b - 1, J(d))) : n
    }
    return n
  }, n)
};
function mg(a, b) {
  return new af(n, p, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = G(d), f = 0 < c;
        if(A(f ? d : f)) {
          c -= 1, d = J(d)
        }else {
          c = d;
          break a
        }
      }
      c = h
    }
    return c
  }, n)
}
var ng, og = n;
function pg(a) {
  return new af(n, p, function() {
    return Q(a, og.c(a))
  }, n)
}
function qg(a, b) {
  return lg(a, og.c(b))
}
og = function(a, b) {
  switch(arguments.length) {
    case 1:
      return pg.call(this, a);
    case 2:
      return qg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
og.c = pg;
og.b = qg;
ng = og;
var rg, sg = n;
function tg(a, b) {
  return new af(n, p, function() {
    var c = G(a), d = G(b);
    return(c ? d : c) ? Q(H(c), Q(H(d), sg.b(J(c), J(d)))) : n
  }, n)
}
function ug(a, b, c) {
  return new af(n, p, function() {
    var d = V.b(G, ad.e(c, b, L([a], 0)));
    return Wf(Xf, d) ? pf.b(V.b(H, d), P.b(sg, V.b(J, d))) : n
  }, n)
}
function vg(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return ug.call(this, a, b, d)
}
vg.n = 2;
vg.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return ug(b, c, a)
};
vg.e = ug;
sg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return tg.call(this, a, b);
    default:
      return vg.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
sg.n = 2;
sg.j = vg.j;
sg.b = tg;
sg.e = vg.e;
rg = sg;
function wg(a, b) {
  return mg(1, rg.b(ng.c(a), b))
}
function xg(a) {
  return function c(a, f) {
    return new af(n, p, function() {
      var g = G(a);
      return g ? Q(H(g), c(J(g), f)) : G(f) ? c(H(f), J(f)) : n
    }, n)
  }(n, a)
}
var yg, zg = n;
function Ag(a, b) {
  return xg(V.b(a, b))
}
function Bg(a, b, c) {
  return xg(P.q(V, a, b, c))
}
function Cg(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return Bg.call(this, a, b, d)
}
Cg.n = 2;
Cg.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return Bg(b, c, a)
};
Cg.e = Bg;
zg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ag.call(this, a, b);
    default:
      return Cg.e(a, b, L(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zg.n = 2;
zg.j = Cg.j;
zg.b = Ag;
zg.e = Cg.e;
yg = zg;
var Eg = function Dg(b, c) {
  return new af(n, p, function() {
    var d = G(c);
    if(d) {
      if(Id(d)) {
        for(var f = gc(d), g = ed(f), i = new bf(Va.c(g), 0), j = 0;;) {
          if(j < g) {
            if(A(b.c ? b.c(D.b(f, j)) : b.call(n, D.b(f, j)))) {
              var l = D.b(f, j);
              i.add(l)
            }
            j += 1
          }else {
            break
          }
        }
        return kf(i.Ya(), Dg(b, hc(d)))
      }
      f = H(d);
      d = J(d);
      return A(b.c ? b.c(f) : b.call(n, f)) ? Q(f, Dg(b, d)) : Dg(b, d)
    }
    return n
  }, n)
};
function Fg(a) {
  return Eg(function(a) {
    return!Gd(a)
  }, J(function c(a) {
    return new af(n, p, function() {
      return Q(a, A(Gd.c ? Gd.c(a) : Gd.call(n, a)) ? yg.b(c, G.c ? G.c(a) : G.call(n, a)) : n)
    }, n)
  }(a)))
}
function Gg(a, b) {
  var c;
  c = a ? ((c = a.t & 4) ? c : a.vf) || (a.t ? 0 : B(Yb, a)) : B(Yb, a);
  c ? (c = ab.a($b, Zb(a), b), c = ac(c)) : c = ab.a(fb, a, b);
  return c
}
var Hg, Ig = n;
function Jg(a, b) {
  return Ig.a(a, a, b)
}
function Kg(a, b, c) {
  return new af(n, p, function() {
    var d = G(c);
    if(d) {
      var f = lg(a, d);
      return a === ed(f) ? Q(f, Ig.a(a, b, mg(b, d))) : n
    }
    return n
  }, n)
}
function Lg(a, b, c, d) {
  return new af(n, p, function() {
    var f = G(d);
    if(f) {
      var g = lg(a, f);
      return a === ed(g) ? Q(g, Ig.q(a, b, c, mg(b, f))) : O.c(lg(a, pf.b(g, c)))
    }
    return n
  }, n)
}
Ig = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Jg.call(this, a, b);
    case 3:
      return Kg.call(this, a, b, c);
    case 4:
      return Lg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ig.b = Jg;
Ig.a = Kg;
Ig.q = Lg;
Hg = Ig;
function Mg(a, b) {
  this.v = a;
  this.g = b
}
function Ng(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Og(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Mg(a, Va.c(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var Qg = function Pg(b, c, d, f) {
  var g = new Mg(d.v, d.g.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? g.g[i] = f : (d = d.g[i], b = d != n ? Pg(b, c - 5, d, f) : Og(n, c - 5, f), g.g[i] = b);
  return g
};
function Rg(a, b) {
  var c = 0 <= b;
  if(c ? b < a.h : c) {
    if(b >= Ng(a)) {
      return a.$
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([U("No item "), U(b), U(" in vector of length "), U(a.h)].join("")))
  }
}
var Tg = function Sg(b, c, d, f, g) {
  var i = new Mg(d.v, d.g.slice());
  if(0 === c) {
    i.g[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Sg(b, c - 5, d.g[j], f, g);
    i.g[j] = b
  }
  return i
};
function Ug(a, b, c, d, f, g) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.$ = f;
  this.o = g;
  this.t = 4;
  this.k = 167668511
}
r = Ug.prototype;
r.Zb = function() {
  return new Vg(this.h, this.shift, Wg.c ? Wg.c(this.root) : Wg.call(n, this.root), Xg.c ? Xg.c(this.$) : Xg.call(n, this.$))
};
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.W = function(a, b) {
  return a.P(a, b, n)
};
r.Q = function(a, b, c) {
  return a.P(a, b, c)
};
r.Ba = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.h : d) {
    return Ng(a) <= b ? (a = this.$.slice(), a[b & 31] = c, new Ug(this.m, this.h, this.shift, this.root, a, n)) : new Ug(this.m, this.h, this.shift, Tg(a, this.shift, this.root, b, c), this.$, n)
  }
  if(b === this.h) {
    return a.K(a, c)
  }
  e(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.h), U("]")].join("")))
};
var Yg = n, Yg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Ug.prototype;
r.call = Yg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  if(32 > this.h - Ng(a)) {
    var c = this.$.slice();
    c.push(b);
    return new Ug(this.m, this.h + 1, this.shift, this.root, c, n)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Mg(n, Va.c(32));
    d.g[0] = this.root;
    var f = Og(n, this.shift, new Mg(n, this.$));
    d.g[1] = f
  }else {
    d = Qg(a, this.shift, this.root, new Mg(n, this.$))
  }
  return new Ug(this.m, this.h + 1, c, d, [b], n)
};
r.cc = function(a) {
  return 0 < this.h ? new Oc(a, this.h - 1, n) : ic
};
r.ac = function(a) {
  return a.V(a, 0)
};
r.bc = function(a) {
  return a.V(a, 1)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.ib = function(a, b) {
  return vc.b(a, b)
};
r.jb = function(a, b, c) {
  return vc.a(a, b, c)
};
r.C = function(a) {
  return 0 === this.h ? n : Zg.a ? Zg.a(a, 0, 0) : Zg.call(n, a, 0, 0)
};
r.F = q("h");
r.tb = function(a) {
  return 0 < this.h ? a.V(a, this.h - 1) : n
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Ug(b, this.h, this.shift, this.root, this.$, this.o)
};
r.B = q("m");
r.V = function(a, b) {
  return Rg(a, b)[b & 31]
};
r.P = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.V(a, b) : c
};
r.O = function() {
  return Eb(dh, this.m)
};
var eh = new Mg(n, Va.c(32)), dh = new Ug(n, 0, 5, eh, [], 0);
function X(a) {
  var b = a.length;
  if(32 > b) {
    return new Ug(n, b, 5, eh, a, n)
  }
  for(var c = a.slice(0, 32), d = 32, f = Zb(new Ug(n, 32, 5, eh, c, n));;) {
    if(d < b) {
      c = d + 1, f = $b(f, a[d]), d = c
    }else {
      return ac(f)
    }
  }
}
function fh(a) {
  return ac(ab.a($b, Zb(dh), a))
}
function gh(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return fh(b)
}
gh.n = 0;
gh.j = function(a) {
  a = G(a);
  return fh(a)
};
gh.e = function(a) {
  return fh(a)
};
function hh(a, b, c, d, f, g) {
  this.pa = a;
  this.ma = b;
  this.r = c;
  this.N = d;
  this.m = f;
  this.o = g;
  this.k = 31719660;
  this.t = 1536
}
r = hh.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.Za = function(a) {
  return this.N + 1 < this.ma.length ? (a = Zg.q ? Zg.q(this.pa, this.ma, this.r, this.N + 1) : Zg.call(n, this.pa, this.ma, this.r, this.N + 1), a == n ? n : a) : a.Nd(a)
};
r.K = function(a, b) {
  return Q(b, a)
};
r.C = aa();
r.ga = function() {
  return this.ma[this.N]
};
r.ba = function(a) {
  return this.N + 1 < this.ma.length ? (a = Zg.q ? Zg.q(this.pa, this.ma, this.r, this.N + 1) : Zg.call(n, this.pa, this.ma, this.r, this.N + 1), a == n ? ic : a) : a.Xb(a)
};
r.Nd = function() {
  var a = this.ma.length, a = this.r + a < cb(this.pa) ? Zg.a ? Zg.a(this.pa, this.r + a, 0) : Zg.call(n, this.pa, this.r + a, 0) : n;
  return a == n ? n : a
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return Zg.X ? Zg.X(this.pa, this.ma, this.r, this.N, b) : Zg.call(n, this.pa, this.ma, this.r, this.N, b)
};
r.O = function() {
  return Eb(dh, this.m)
};
r.wc = function() {
  return df.b(this.ma, this.N)
};
r.Xb = function() {
  var a = this.ma.length, a = this.r + a < cb(this.pa) ? Zg.a ? Zg.a(this.pa, this.r + a, 0) : Zg.call(n, this.pa, this.r + a, 0) : n;
  return a == n ? ic : a
};
var Zg, ih = n;
function jh(a, b, c) {
  return ih.X(a, Rg(a, b), b, c, n)
}
function kh(a, b, c, d) {
  return ih.X(a, b, c, d, n)
}
function lh(a, b, c, d, f) {
  return new hh(a, b, c, d, f, n)
}
ih = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return jh.call(this, a, b, c);
    case 4:
      return kh.call(this, a, b, c, d);
    case 5:
      return lh.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ih.a = jh;
ih.q = kh;
ih.X = lh;
Zg = ih;
function Wg(a) {
  return new Mg({}, a.g.slice())
}
function Xg(a) {
  var b = Va.c(32);
  Jd(a, 0, b, 0, a.length);
  return b
}
var nh = function mh(b, c, d, f) {
  var d = b.root.v === d.v ? d : new Mg(b.root.v, d.g.slice()), g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[g], b = i != n ? mh(b, c - 5, i, f) : Og(b.root.v, c - 5, f)
  }
  d.g[g] = b;
  return d
};
function Vg(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.$ = d;
  this.k = 275;
  this.t = 88
}
var oh = n, oh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Vg.prototype;
r.call = oh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.W = function(a, b) {
  return a.P(a, b, n)
};
r.Q = function(a, b, c) {
  return a.P(a, b, c)
};
r.V = function(a, b) {
  if(this.root.v) {
    return Rg(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.P = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.V(a, b) : c
};
r.F = function() {
  if(this.root.v) {
    return this.h
  }
  e(Error("count after persistent!"))
};
r.zc = function(a, b, c) {
  var d;
  a: {
    if(a.root.v) {
      var f = 0 <= b;
      if(f ? b < a.h : f) {
        Ng(a) <= b ? a.$[b & 31] = c : (d = function i(d, f) {
          var m = a.root.v === f.v ? f : new Mg(a.root.v, f.g.slice());
          if(0 === d) {
            m.g[b & 31] = c
          }else {
            var s = b >>> d & 31, w = i(d - 5, m.g[s]);
            m.g[s] = w
          }
          return m
        }.call(n, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.ec(a, c);
        break a
      }
      e(Error([U("Index "), U(b), U(" out of bounds for TransientVector of length"), U(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.ec = function(a, b) {
  if(this.root.v) {
    if(32 > this.h - Ng(a)) {
      this.$[this.h & 31] = b
    }else {
      var c = new Mg(this.root.v, this.$), d = Va.c(32);
      d[0] = b;
      this.$ = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Va.c(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Og(this.root.v, this.shift, c);
        this.root = new Mg(this.root.v, d);
        this.shift = f
      }else {
        this.root = nh(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Ac = function(a) {
  if(this.root.v) {
    this.root.v = n;
    var a = this.h - Ng(a), b = Va.c(a);
    Jd(this.$, 0, b, 0, a);
    return new Ug(n, this.h, this.shift, this.root, b, n)
  }
  e(Error("persistent! called twice"))
};
function ph() {
  this.t = 0;
  this.k = 2097152
}
ph.prototype.G = ca(p);
var qh = new ph;
function rh(a, b) {
  var c;
  c = b == n ? 0 : b ? ((c = b.k & 1024) ? c : b.wf) || (b.k ? 0 : B(ub, b)) : B(ub, b);
  c = c ? ed(a) === ed(b) ? Wf(Xf, V.b(function(a) {
    return jc.b(E.a(b, H(a), qh), $c(a))
  }, a)) : n : n;
  return A(c) ? k : p
}
function sh(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return n
    }
  }
}
function th(a, b) {
  var c = Ad.c(a), d = Ad.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function uh(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.Xa, i = sc(vh, xd(a)), a = 0, i = Zb(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = bc(i, j, g[j])
    }else {
      return b = bc(i, b, c), ac(b)
    }
  }
}
function wh(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var g = b[f];
      c[g] = a[g];
      f += 1
    }else {
      break
    }
  }
  return c
}
function xh(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.Xa = c;
  this.Tb = d;
  this.o = f;
  this.t = 4;
  this.k = 16123663
}
r = xh.prototype;
r.Zb = function(a) {
  a = Gg(M.z ? M.z() : M.call(n), a);
  return Zb(a)
};
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Ie(a)
};
r.W = function(a, b) {
  return a.Q(a, b, n)
};
r.Q = function(a, b, c) {
  return((a = ga(b)) ? sh(b, this.keys) != n : a) ? this.Xa[b] : c
};
r.Ba = function(a, b, c) {
  if(ga(b)) {
    var d = this.Tb > yh;
    if(d ? d : this.keys.length >= yh) {
      return uh(a, b, c)
    }
    if(sh(b, this.keys) != n) {
      return a = wh(this.Xa, this.keys), a[b] = c, new xh(this.m, this.keys, a, this.Tb + 1, n)
    }
    a = wh(this.Xa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new xh(this.m, d, a, this.Tb + 1, n)
  }
  return uh(a, b, c)
};
r.Ld = function(a, b) {
  var c = ga(b);
  return(c ? sh(b, this.keys) != n : c) ? k : p
};
var zh = n, zh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = xh.prototype;
r.call = zh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return Hd(b) ? a.Ba(a, D.b(b, 0), D.b(b, 1)) : ab.a(fb, a, b)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = function() {
  var a = this;
  return 0 < a.keys.length ? V.b(function(b) {
    return gh.e(L([b, a.Xa[b]], 0))
  }, a.keys.sort(th)) : n
};
r.F = function() {
  return this.keys.length
};
r.G = function(a, b) {
  return rh(a, b)
};
r.D = function(a, b) {
  return new xh(b, this.keys, this.Xa, this.Tb, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(Ah, this.m)
};
r.$b = function(a, b) {
  var c = ga(b);
  if(c ? sh(b, this.keys) != n : c) {
    var c = this.keys.slice(), d = wh(this.Xa, this.keys);
    c.splice(sh(b, c), 1);
    delete d[b];
    return new xh(this.m, c, d, this.Tb + 1, n)
  }
  return a
};
var Ah = new xh(n, [], {}, 0, 0), yh = 32;
function Y(a, b) {
  return new xh(n, a, b, 0, n)
}
function Bh() {
  this.l = p
}
function Ch(a, b) {
  return ga(a) ? a === b : jc.b(a, b)
}
var Dh, Eh = n;
function Fh(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Gh(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Eh = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Fh.call(this, a, b, c);
    case 5:
      return Gh.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eh.a = Fh;
Eh.X = Gh;
Dh = Eh;
function Hh(a, b) {
  var c = Va.c(a.length - 2);
  Jd(a, 0, c, 0, 2 * b);
  Jd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Ih, Jh = n;
function Kh(a, b, c, d) {
  a = a.yb(b);
  a.g[c] = d;
  return a
}
function Lh(a, b, c, d, f, g) {
  a = a.yb(b);
  a.g[c] = d;
  a.g[f] = g;
  return a
}
Jh = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Kh.call(this, a, b, c, d);
    case 6:
      return Lh.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jh.q = Kh;
Jh.la = Lh;
Ih = Jh;
function Mh(a, b, c) {
  this.v = a;
  this.A = b;
  this.g = c
}
r = Mh.prototype;
r.ua = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = ne(this.A & i - 1);
  if(0 === (this.A & i)) {
    var l = ne(this.A);
    if(2 * l < this.g.length) {
      a = this.yb(a);
      b = a.g;
      g.l = k;
      a: {
        c = 2 * (l - j);
        g = 2 * j + (c - 1);
        for(l = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.A |= i;
      return a
    }
    if(16 <= l) {
      j = Va.c(32);
      j[c >>> b & 31] = Nh.ua(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.A >>> d & 1) && (j[d] = this.g[f] != n ? Nh.ua(a, b + 5, Ad.c(this.g[f]), this.g[f], this.g[f + 1], g) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Oh(a, l + 1, j)
    }
    b = Va.c(2 * (l + 4));
    Jd(this.g, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Jd(this.g, 2 * j, b, 2 * (j + 1), 2 * (l - j));
    g.l = k;
    a = this.yb(a);
    a.g = b;
    a.A |= i;
    return a
  }
  l = this.g[2 * j];
  i = this.g[2 * j + 1];
  if(l == n) {
    return l = i.ua(a, b + 5, c, d, f, g), l === i ? this : Ih.q(this, a, 2 * j + 1, l)
  }
  if(Ch(d, l)) {
    return f === i ? this : Ih.q(this, a, 2 * j + 1, f)
  }
  g.l = k;
  return Ih.la(this, a, 2 * j, n, 2 * j + 1, Ph.Pa ? Ph.Pa(a, b + 5, l, i, c, d, f) : Ph.call(n, a, b + 5, l, i, c, d, f))
};
r.Nb = function() {
  return Qh.c ? Qh.c(this.g) : Qh.call(n, this.g)
};
r.yb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = ne(this.A), c = Va.c(0 > b ? 4 : 2 * (b + 1));
  Jd(this.g, 0, c, 0, 2 * b);
  return new Mh(a, this.A, c)
};
r.Ob = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.A & d)) {
    return this
  }
  var f = ne(this.A & d - 1), g = this.g[2 * f], i = this.g[2 * f + 1];
  return g == n ? (a = i.Ob(a + 5, b, c), a === i ? this : a != n ? new Mh(n, this.A, Dh.a(this.g, 2 * f + 1, a)) : this.A === d ? n : new Mh(n, this.A ^ d, Hh(this.g, f))) : Ch(c, g) ? new Mh(n, this.A ^ d, Hh(this.g, f)) : this
};
r.ta = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = ne(this.A & g - 1);
  if(0 === (this.A & g)) {
    var j = ne(this.A);
    if(16 <= j) {
      i = Va.c(32);
      i[b >>> a & 31] = Nh.ta(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.A >>> c & 1) && (i[c] = this.g[d] != n ? Nh.ta(a + 5, Ad.c(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Oh(n, j + 1, i)
    }
    a = Va.c(2 * (j + 1));
    Jd(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Jd(this.g, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.l = k;
    return new Mh(n, this.A | g, a)
  }
  j = this.g[2 * i];
  g = this.g[2 * i + 1];
  if(j == n) {
    return j = g.ta(a + 5, b, c, d, f), j === g ? this : new Mh(n, this.A, Dh.a(this.g, 2 * i + 1, j))
  }
  if(Ch(c, j)) {
    return d === g ? this : new Mh(n, this.A, Dh.a(this.g, 2 * i + 1, d))
  }
  f.l = k;
  return new Mh(n, this.A, Dh.X(this.g, 2 * i, n, 2 * i + 1, Ph.la ? Ph.la(a + 5, j, g, b, c, d) : Ph.call(n, a + 5, j, g, b, c, d)))
};
r.fb = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.A & f)) {
    return d
  }
  var g = ne(this.A & f - 1), f = this.g[2 * g], g = this.g[2 * g + 1];
  return f == n ? g.fb(a + 5, b, c, d) : Ch(c, f) ? g : d
};
var Nh = new Mh(n, 0, Va.c(0));
function Oh(a, b, c) {
  this.v = a;
  this.h = b;
  this.g = c
}
r = Oh.prototype;
r.ua = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.g[i];
  if(j == n) {
    return a = Ih.q(this, a, i, Nh.ua(a, b + 5, c, d, f, g)), a.h += 1, a
  }
  b = j.ua(a, b + 5, c, d, f, g);
  return b === j ? this : Ih.q(this, a, i, b)
};
r.Nb = function() {
  return Rh.c ? Rh.c(this.g) : Rh.call(n, this.g)
};
r.yb = function(a) {
  return a === this.v ? this : new Oh(a, this.h, this.g.slice())
};
r.Ob = function(a, b, c) {
  var d = b >>> a & 31, f = this.g[d];
  if(f != n) {
    a = f.Ob(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == n) {
        if(8 >= this.h) {
          a: {
            for(var f = this.g, a = 2 * (this.h - 1), b = Va.c(a), c = 0, g = 1, i = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != n : j) {
                  b[g] = f[c], g += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new Mh(n, i, b);
                break a
              }
            }
            d = h
          }
        }else {
          d = new Oh(n, this.h - 1, Dh.a(this.g, d, a))
        }
      }else {
        d = new Oh(n, this.h, Dh.a(this.g, d, a))
      }
    }
    return d
  }
  return this
};
r.ta = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.g[g];
  if(i == n) {
    return new Oh(n, this.h + 1, Dh.a(this.g, g, Nh.ta(a + 5, b, c, d, f)))
  }
  a = i.ta(a + 5, b, c, d, f);
  return a === i ? this : new Oh(n, this.h, Dh.a(this.g, g, a))
};
r.fb = function(a, b, c, d) {
  var f = this.g[b >>> a & 31];
  return f != n ? f.fb(a + 5, b, c, d) : d
};
function Sh(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Ch(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Th(a, b, c, d) {
  this.v = a;
  this.Qa = b;
  this.h = c;
  this.g = d
}
r = Th.prototype;
r.ua = function(a, b, c, d, f, g) {
  if(c === this.Qa) {
    b = Sh(this.g, this.h, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.h) {
        return a = Ih.la(this, a, 2 * this.h, d, 2 * this.h + 1, f), g.l = k, a.h += 1, a
      }
      c = this.g.length;
      b = Va.c(c + 2);
      Jd(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.l = k;
      g = this.h + 1;
      a === this.v ? (this.g = b, this.h = g, a = this) : a = new Th(this.v, this.Qa, g, b);
      return a
    }
    return this.g[b + 1] === f ? this : Ih.q(this, a, b + 1, f)
  }
  return(new Mh(a, 1 << (this.Qa >>> b & 31), [n, this, n, n])).ua(a, b, c, d, f, g)
};
r.Nb = function() {
  return Qh.c ? Qh.c(this.g) : Qh.call(n, this.g)
};
r.yb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = Va.c(2 * (this.h + 1));
  Jd(this.g, 0, b, 0, 2 * this.h);
  return new Th(a, this.Qa, this.h, b)
};
r.Ob = function(a, b, c) {
  a = Sh(this.g, this.h, c);
  return-1 === a ? this : 1 === this.h ? n : new Th(n, this.Qa, this.h - 1, Hh(this.g, 0 <= (a - a % 2) / 2 ? Math.floor.c ? Math.floor.c((a - a % 2) / 2) : Math.floor.call(n, (a - a % 2) / 2) : Math.ceil.c ? Math.ceil.c((a - a % 2) / 2) : Math.ceil.call(n, (a - a % 2) / 2)))
};
r.ta = function(a, b, c, d, f) {
  return b === this.Qa ? (a = Sh(this.g, this.h, c), -1 === a ? (a = this.g.length, b = Va.c(a + 2), Jd(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.l = k, new Th(n, this.Qa, this.h + 1, b)) : jc.b(this.g[a], d) ? this : new Th(n, this.Qa, this.h, Dh.a(this.g, a + 1, d))) : (new Mh(n, 1 << (this.Qa >>> a & 31), [n, this])).ta(a, b, c, d, f)
};
r.fb = function(a, b, c, d) {
  a = Sh(this.g, this.h, c);
  return 0 > a ? d : Ch(c, this.g[a]) ? this.g[a + 1] : d
};
var Ph, Uh = n;
function Vh(a, b, c, d, f, g) {
  var i = Ad.c(b);
  if(i === d) {
    return new Th(n, i, 2, [b, c, f, g])
  }
  var j = new Bh;
  return Nh.ta(a, i, b, c, j).ta(a, d, f, g, j)
}
function Wh(a, b, c, d, f, g, i) {
  var j = Ad.c(c);
  if(j === f) {
    return new Th(n, j, 2, [c, d, g, i])
  }
  var l = new Bh;
  return Nh.ua(a, b, j, c, d, l).ua(a, b, f, g, i, l)
}
Uh = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Vh.call(this, a, b, c, d, f, g);
    case 7:
      return Wh.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uh.la = Vh;
Uh.Pa = Wh;
Ph = Uh;
function Xh(a, b, c, d, f) {
  this.m = a;
  this.wa = b;
  this.r = c;
  this.xa = d;
  this.o = f;
  this.t = 0;
  this.k = 31850572
}
r = Xh.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.K = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.ga = function() {
  return this.xa == n ? X([this.wa[this.r], this.wa[this.r + 1]]) : H(this.xa)
};
r.ba = function() {
  return this.xa == n ? Qh.a ? Qh.a(this.wa, this.r + 2, n) : Qh.call(n, this.wa, this.r + 2, n) : Qh.a ? Qh.a(this.wa, this.r, K(this.xa)) : Qh.call(n, this.wa, this.r, K(this.xa))
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Xh(b, this.wa, this.r, this.xa, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
var Qh, Yh = n;
function Zh(a) {
  return Yh.a(a, 0, n)
}
function $h(a, b, c) {
  if(c == n) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != n) {
          return new Xh(n, a, b, n, n)
        }
        var d = a[b + 1];
        if(A(d) && (d = d.Nb(), A(d))) {
          return new Xh(n, a, b + 2, d, n)
        }
        b += 2
      }else {
        return n
      }
    }
  }else {
    return new Xh(n, a, b, c, n)
  }
}
Yh = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Zh.call(this, a);
    case 3:
      return $h.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yh.c = Zh;
Yh.a = $h;
Qh = Yh;
function ai(a, b, c, d, f) {
  this.m = a;
  this.wa = b;
  this.r = c;
  this.xa = d;
  this.o = f;
  this.t = 0;
  this.k = 31850572
}
r = ai.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.K = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.ga = function() {
  return H(this.xa)
};
r.ba = function() {
  return Rh.q ? Rh.q(n, this.wa, this.r, K(this.xa)) : Rh.call(n, n, this.wa, this.r, K(this.xa))
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new ai(b, this.wa, this.r, this.xa, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
var Rh, bi = n;
function ci(a) {
  return bi.q(n, a, 0, n)
}
function di(a, b, c, d) {
  if(d == n) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(A(f) && (f = f.Nb(), A(f))) {
          return new ai(a, b, c + 1, f, n)
        }
        c += 1
      }else {
        return n
      }
    }
  }else {
    return new ai(a, b, c, d, n)
  }
}
bi = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return ci.call(this, a);
    case 4:
      return di.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bi.c = ci;
bi.q = di;
Rh = bi;
function ei(a, b, c, d, f, g) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.Y = d;
  this.ka = f;
  this.o = g;
  this.t = 4;
  this.k = 16123663
}
r = ei.prototype;
r.Zb = function() {
  return new fi({}, this.root, this.h, this.Y, this.ka)
};
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Ie(a)
};
r.W = function(a, b) {
  return a.Q(a, b, n)
};
r.Q = function(a, b, c) {
  return b == n ? this.Y ? this.ka : c : this.root == n ? c : this.root.fb(0, Ad.c(b), b, c)
};
r.Ba = function(a, b, c) {
  if(b == n) {
    var d = this.Y;
    return(d ? c === this.ka : d) ? a : new ei(this.m, this.Y ? this.h : this.h + 1, this.root, k, c, n)
  }
  d = new Bh;
  c = (this.root == n ? Nh : this.root).ta(0, Ad.c(b), b, c, d);
  return c === this.root ? a : new ei(this.m, d.l ? this.h + 1 : this.h, c, this.Y, this.ka, n)
};
r.Ld = function(a, b) {
  return b == n ? this.Y : this.root == n ? p : this.root.fb(0, Ad.c(b), b, Kd) !== Kd
};
var gi = n, gi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = ei.prototype;
r.call = gi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return Hd(b) ? a.Ba(a, D.b(b, 0), D.b(b, 1)) : ab.a(fb, a, b)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = function() {
  if(0 < this.h) {
    var a = this.root != n ? this.root.Nb() : n;
    return this.Y ? Q(X([n, this.ka]), a) : a
  }
  return n
};
r.F = q("h");
r.G = function(a, b) {
  return rh(a, b)
};
r.D = function(a, b) {
  return new ei(b, this.h, this.root, this.Y, this.ka, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(vh, this.m)
};
r.$b = function(a, b) {
  if(b == n) {
    return this.Y ? new ei(this.m, this.h - 1, this.root, p, n, n) : a
  }
  if(this.root == n) {
    return a
  }
  var c = this.root.Ob(0, Ad.c(b), b);
  return c === this.root ? a : new ei(this.m, this.h - 1, c, this.Y, this.ka, n)
};
var vh = new ei(n, 0, n, p, n, 0);
function fi(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.Y = d;
  this.ka = f;
  this.t = 56;
  this.k = 258
}
r = fi.prototype;
r.zc = function(a, b, c) {
  return hi(a, b, c)
};
r.ec = function(a, b) {
  var c;
  a: {
    if(a.v) {
      c = b ? ((c = b.k & 2048) ? c : b.xf) || (b.k ? 0 : B(wb, b)) : B(wb, b);
      if(c) {
        c = hi(a, Je.c ? Je.c(b) : Je.call(n, b), Ke.c ? Ke.c(b) : Ke.call(n, b));
        break a
      }
      c = G(b);
      for(var d = a;;) {
        var f = H(c);
        if(A(f)) {
          c = K(c), d = hi(d, Je.c ? Je.c(f) : Je.call(n, f), Ke.c ? Ke.c(f) : Ke.call(n, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = h
  }
  return c
};
r.Ac = function(a) {
  var b;
  a.v ? (a.v = n, b = new ei(n, a.count, a.root, a.Y, a.ka, n)) : e(Error("persistent! called twice"));
  return b
};
r.W = function(a, b) {
  return b == n ? this.Y ? this.ka : n : this.root == n ? n : this.root.fb(0, Ad.c(b), b)
};
r.Q = function(a, b, c) {
  return b == n ? this.Y ? this.ka : c : this.root == n ? c : this.root.fb(0, Ad.c(b), b, c)
};
r.F = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function hi(a, b, c) {
  if(a.v) {
    if(b == n) {
      a.ka !== c && (a.ka = c), a.Y || (a.count += 1, a.Y = k)
    }else {
      var d = new Bh, b = (a.root == n ? Nh : a.root).ua(a.v, 0, Ad.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.l && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function ii(a, b, c) {
  for(var d = b;;) {
    if(a != n) {
      b = c ? a.left : a.right, d = ad.b(d, a), a = b
    }else {
      return d
    }
  }
}
function ji(a, b, c, d, f) {
  this.m = a;
  this.stack = b;
  this.Ub = c;
  this.h = d;
  this.o = f;
  this.t = 0;
  this.k = 31850574
}
r = ji.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.K = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.C = aa();
r.F = function(a) {
  return 0 > this.h ? ed(K(a)) + 1 : this.h
};
r.ga = function() {
  return zb(this.stack)
};
r.ba = function() {
  var a = H(this.stack), a = ii(this.Ub ? a.right : a.left, K(this.stack), this.Ub);
  return a != n ? new ji(n, a, this.Ub, this.h - 1, n) : ic
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new ji(b, this.stack, this.Ub, this.h, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(ic, this.m)
};
function ki(a, b, c, d) {
  return oc(Z, c) ? oc(Z, c.left) ? new Z(c.key, c.l, c.left.Ma(), new $(a, b, c.right, d, n), n) : oc(Z, c.right) ? new Z(c.right.key, c.right.l, new $(c.key, c.l, c.left, c.right.left, n), new $(a, b, c.right.right, d, n), n) : new $(a, b, c, d, n) : new $(a, b, c, d, n)
}
function li(a, b, c, d) {
  return oc(Z, d) ? oc(Z, d.right) ? new Z(d.key, d.l, new $(a, b, c, d.left, n), d.right.Ma(), n) : oc(Z, d.left) ? new Z(d.left.key, d.left.l, new $(a, b, c, d.left.left, n), new $(d.key, d.l, d.left.right, d.right, n), n) : new $(a, b, c, d, n) : new $(a, b, c, d, n)
}
function mi(a, b, c, d) {
  if(oc(Z, c)) {
    return new Z(a, b, c.Ma(), d, n)
  }
  if(oc($, d)) {
    return li(a, b, c, d.Rb())
  }
  var f = oc(Z, d);
  if(f ? oc($, d.left) : f) {
    return new Z(d.left.key, d.left.l, new $(a, b, c, d.left.left, n), li(d.key, d.l, d.left.right, d.right.Rb()), n)
  }
  e(Error("red-black tree invariant violation"))
}
function $(a, b, c, d, f) {
  this.key = a;
  this.l = b;
  this.left = c;
  this.right = d;
  this.o = f;
  this.t = 0;
  this.k = 32402207
}
$.prototype.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
$.prototype.W = function(a, b) {
  return a.P(a, b, n)
};
$.prototype.Q = function(a, b, c) {
  return a.P(a, b, c)
};
$.prototype.Ba = function(a, b, c) {
  return pd.a(X([this.key, this.l]), b, c)
};
var ni = n, ni = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.call = ni;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return X([this.key, this.l, b])
};
r.ac = q("key");
r.bc = q("l");
r.Fd = function(a) {
  return a.Hd(this)
};
r.Rb = function() {
  return new Z(this.key, this.l, this.left, this.right, n)
};
r.replace = function(a, b, c, d) {
  return new $(a, b, c, d, n)
};
r.Ed = function(a) {
  return a.Gd(this)
};
r.Gd = function(a) {
  return new $(a.key, a.l, this, a.right, n)
};
var oi = n, oi = function() {
  switch(arguments.length) {
    case 0:
      return R.c ? R.c(this) : R.call(n, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.toString = oi;
r.Hd = function(a) {
  return new $(a.key, a.l, a.left, this, n)
};
r.Ma = function() {
  return this
};
r.ib = function(a, b) {
  return vc.b(a, b)
};
r.jb = function(a, b, c) {
  return vc.a(a, b, c)
};
r.C = function() {
  return O.b(this.key, this.l)
};
r.F = ca(2);
r.tb = q("l");
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return sc(X([this.key, this.l]), b)
};
r.B = ca(n);
r.V = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.l : n
};
r.P = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.l : c
};
r.O = function() {
  return dh
};
function Z(a, b, c, d, f) {
  this.key = a;
  this.l = b;
  this.left = c;
  this.right = d;
  this.o = f;
  this.t = 0;
  this.k = 32402207
}
Z.prototype.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
Z.prototype.W = function(a, b) {
  return a.P(a, b, n)
};
Z.prototype.Q = function(a, b, c) {
  return a.P(a, b, c)
};
Z.prototype.Ba = function(a, b, c) {
  return pd.a(X([this.key, this.l]), b, c)
};
var pi = n, pi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.call = pi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return X([this.key, this.l, b])
};
r.ac = q("key");
r.bc = q("l");
r.Fd = function(a) {
  return new Z(this.key, this.l, this.left, a, n)
};
r.Rb = function() {
  e(Error("red-black tree invariant violation"))
};
r.replace = function(a, b, c, d) {
  return new Z(a, b, c, d, n)
};
r.Ed = function(a) {
  return new Z(this.key, this.l, a, this.right, n)
};
r.Gd = function(a) {
  return oc(Z, this.left) ? new Z(this.key, this.l, this.left.Ma(), new $(a.key, a.l, this.right, a.right, n), n) : oc(Z, this.right) ? new Z(this.right.key, this.right.l, new $(this.key, this.l, this.left, this.right.left, n), new $(a.key, a.l, this.right.right, a.right, n), n) : new $(a.key, a.l, this, a.right, n)
};
var qi = n, qi = function() {
  switch(arguments.length) {
    case 0:
      return R.c ? R.c(this) : R.call(n, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = qi;
r.Hd = function(a) {
  return oc(Z, this.right) ? new Z(this.key, this.l, new $(a.key, a.l, a.left, this.left, n), this.right.Ma(), n) : oc(Z, this.left) ? new Z(this.left.key, this.left.l, new $(a.key, a.l, a.left, this.left.left, n), new $(this.key, this.l, this.left.right, this.right, n), n) : new $(a.key, a.l, a.left, this, n)
};
r.Ma = function() {
  return new $(this.key, this.l, this.left, this.right, n)
};
r.ib = function(a, b) {
  return vc.b(a, b)
};
r.jb = function(a, b, c) {
  return vc.a(a, b, c)
};
r.C = function() {
  return O.b(this.key, this.l)
};
r.F = ca(2);
r.tb = q("l");
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return sc(X([this.key, this.l]), b)
};
r.B = ca(n);
r.V = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.l : n
};
r.P = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.l : c
};
r.O = function() {
  return dh
};
var si = function ri(b, c, d, f, g) {
  if(c == n) {
    return new Z(d, f, n, n, n)
  }
  var i = b.b ? b.b(d, c.key) : b.call(n, d, c.key);
  if(0 === i) {
    return g[0] = c, n
  }
  if(0 > i) {
    return b = ri(b, c.left, d, f, g), b != n ? c.Ed(b) : n
  }
  b = ri(b, c.right, d, f, g);
  return b != n ? c.Fd(b) : n
}, ui = function ti(b, c) {
  if(b == n) {
    return c
  }
  if(c == n) {
    return b
  }
  if(oc(Z, b)) {
    if(oc(Z, c)) {
      var d = ti(b.right, c.left);
      return oc(Z, d) ? new Z(d.key, d.l, new Z(b.key, b.l, b.left, d.left, n), new Z(c.key, c.l, d.right, c.right, n), n) : new Z(b.key, b.l, b.left, new Z(c.key, c.l, d, c.right, n), n)
    }
    return new Z(b.key, b.l, b.left, ti(b.right, c), n)
  }
  if(oc(Z, c)) {
    return new Z(c.key, c.l, ti(b, c.left), c.right, n)
  }
  d = ti(b.right, c.left);
  return oc(Z, d) ? new Z(d.key, d.l, new $(b.key, b.l, b.left, d.left, n), new $(c.key, c.l, d.right, c.right, n), n) : mi(b.key, b.l, b.left, new $(c.key, c.l, d, c.right, n))
}, wi = function vi(b, c, d, f) {
  if(c != n) {
    var g = b.b ? b.b(d, c.key) : b.call(n, d, c.key);
    if(0 === g) {
      return f[0] = c, ui(c.left, c.right)
    }
    if(0 > g) {
      var b = vi(b, c.left, d, f), i = b != n;
      return(i ? i : f[0] != n) ? oc($, c.left) ? mi(c.key, c.l, b, c.right) : new Z(c.key, c.l, b, c.right, n) : n
    }
    b = vi(b, c.right, d, f);
    ((d = b != n) ? d : f[0] != n) ? oc($, c.right) ? (f = c.key, d = c.l, c = c.left, oc(Z, b) ? i = new Z(f, d, c, b.Ma(), n) : oc($, c) ? i = ki(f, d, c.Rb(), b) : ((g = oc(Z, c)) ? oc($, c.right) : g) ? i = new Z(c.right.key, c.right.l, ki(c.key, c.l, c.left.Rb(), c.right.left), new $(f, d, c.right.right, b, n), n) : e(Error("red-black tree invariant violation"))) : i = new Z(c.key, c.l, c.left, b, n) : i = n;
    return i
  }
  return n
}, yi = function xi(b, c, d, f) {
  var g = c.key, i = b.b ? b.b(d, g) : b.call(n, d, g);
  return 0 === i ? c.replace(g, f, c.left, c.right) : 0 > i ? c.replace(g, c.l, xi(b, c.left, d, f), c.right) : c.replace(g, c.l, c.left, xi(b, c.right, d, f))
};
function zi(a, b, c, d, f) {
  this.qa = a;
  this.rb = b;
  this.h = c;
  this.m = d;
  this.o = f;
  this.t = 0;
  this.k = 418776847
}
r = zi.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Ie(a)
};
r.W = function(a, b) {
  return a.Q(a, b, n)
};
r.Q = function(a, b, c) {
  a = Ai(a, b);
  return a != n ? a.l : c
};
r.Ba = function(a, b, c) {
  var d = [n], f = si(this.qa, this.rb, b, c, d);
  return f == n ? (d = S.b(d, 0), jc.b(c, d.l) ? a : new zi(this.qa, yi(this.qa, this.rb, b, c), this.h, this.m, n)) : new zi(this.qa, f.Ma(), this.h + 1, this.m, n)
};
r.Ld = function(a, b) {
  return Ai(a, b) != n
};
var Bi = n, Bi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.Q(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = zi.prototype;
r.call = Bi;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.K = function(a, b) {
  return Hd(b) ? a.Ba(a, D.b(b, 0), D.b(b, 1)) : ab.a(fb, a, b)
};
r.cc = function() {
  return 0 < this.h ? new ji(n, ii(this.rb, n, p), p, this.h, n) : n
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
function Ai(a, b) {
  for(var c = a.rb;;) {
    if(c != n) {
      var d = a.qa.b ? a.qa.b(b, c.key) : a.qa.call(n, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return n
    }
  }
}
r.C = function() {
  return 0 < this.h ? new ji(n, ii(this.rb, n, k), k, this.h, n) : n
};
r.F = q("h");
r.G = function(a, b) {
  return rh(a, b)
};
r.D = function(a, b) {
  return new zi(this.qa, this.rb, this.h, b, this.o)
};
r.B = q("m");
r.O = function() {
  return Eb(Ci, this.m)
};
r.$b = function(a, b) {
  var c = [n], d = wi(this.qa, this.rb, b, c);
  return d == n ? S.b(c, 0) == n ? a : new zi(this.qa, n, 0, this.m, n) : new zi(this.qa, d.Ma(), this.h - 1, this.m, n)
};
var Ci = new zi(Od, n, 0, n, 0), M;
function Di(a) {
  for(var b = G(a), c = Zb(vh);;) {
    if(b) {
      var a = K(K(b)), d = H(b), b = $c(b), c = bc(c, d, b), b = a
    }else {
      return ac(c)
    }
  }
}
function Ei(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Di.call(this, b)
}
Ei.n = 0;
Ei.j = function(a) {
  a = G(a);
  return Di(a)
};
Ei.e = Di;
M = Ei;
function Fi(a) {
  for(var a = G(a), b = Ci;;) {
    if(a) {
      var c = K(K(a)), b = pd.a(b, H(a), $c(a)), a = c
    }else {
      return b
    }
  }
}
function Gi(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Fi.call(this, b)
}
Gi.n = 0;
Gi.j = function(a) {
  a = G(a);
  return Fi(a)
};
Gi.e = Fi;
function Je(a) {
  return xb(a)
}
function Ke(a) {
  return yb(a)
}
function Hi(a) {
  var b;
  a: {
    b = a;
    for(var c = Xf;;) {
      if(G(b)) {
        var d = c.c ? c.c(H(b)) : c.call(n, H(b));
        if(A(d)) {
          b = d;
          break a
        }
        b = K(b)
      }else {
        b = n;
        break a
      }
    }
    b = h
  }
  return A(b) ? ab.b(function(a, b) {
    return ad.b(A(a) ? a : Ah, b)
  }, a) : n
}
function Ii(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return Hi.call(this, b)
}
Ii.n = 0;
Ii.j = function(a) {
  a = G(a);
  return Hi(a)
};
Ii.e = Hi;
M();
Gi();
function Ji(a) {
  if(Ld(a)) {
    return a
  }
  var b = Md(a);
  if(b ? b : Nd(a)) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? xe.b(a, 2) : xe.b(a, b + 1)
  }
  e(Error([U("Doesn't support name: "), U(a)].join("")))
}
function Ki(a) {
  var b = Md(a);
  if(b ? b : Nd(a)) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? xe.a(a, 2, b) : n
  }
  e(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
function Li(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = f;
  this.t = 0;
  this.k = 32375006
}
r = Li.prototype;
r.L = function(a) {
  var b = this.o;
  return b != n ? b : this.o = a = Nc(a)
};
r.Za = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Li(this.m, this.start + this.step, this.end, this.step, n) : n : this.start + this.step > this.end ? new Li(this.m, this.start + this.step, this.end, this.step, n) : n
};
r.K = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return R.c ? R.c(this) : R.call(n, this)
};
r.ib = function(a, b) {
  return vc.b(a, b)
};
r.jb = function(a, b, c) {
  return vc.a(a, b, c)
};
r.C = function(a) {
  return 0 < this.step ? this.start < this.end ? a : n : this.start > this.end ? a : n
};
r.F = function(a) {
  return Ua(a.C(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.ga = q("start");
r.ba = function(a) {
  return a.C(a) != n ? new Li(this.m, this.start + this.step, this.end, this.step, n) : ic
};
r.G = function(a, b) {
  return Pc(a, b)
};
r.D = function(a, b) {
  return new Li(b, this.start, this.end, this.step, this.o)
};
r.B = q("m");
r.V = function(a, b) {
  if(b < a.F(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.P = function(a, b, c) {
  c = b < a.F(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.O = function() {
  return Eb(ic, this.m)
};
var Mi, Ni = n;
function Oi() {
  return Ni.a(0, Number.MAX_VALUE, 1)
}
function Pi(a) {
  return Ni.a(0, a, 1)
}
function Qi(a, b) {
  return Ni.a(a, b, 1)
}
function Ri(a, b, c) {
  return new Li(n, a, b, c, n)
}
Ni = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Oi.call(this);
    case 1:
      return Pi.call(this, a);
    case 2:
      return Qi.call(this, a, b);
    case 3:
      return Ri.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ni.z = Oi;
Ni.c = Pi;
Ni.b = Qi;
Ni.a = Ri;
Mi = Ni;
var Si, Ti = n;
function Ui(a) {
  for(;;) {
    if(G(a)) {
      a = K(a)
    }else {
      return n
    }
  }
}
function Vi(a, b) {
  for(;;) {
    var c = G(b);
    if(A(c ? 0 < a : c)) {
      var c = a - 1, d = K(b), a = c, b = d
    }else {
      return n
    }
  }
}
Ti = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ui.call(this, a);
    case 2:
      return Vi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ti.c = Ui;
Ti.b = Vi;
Si = Ti;
var Wi, Xi = n;
function Yi(a) {
  Si.c(a);
  return a
}
function Zi(a, b) {
  Si.b(a, b);
  return b
}
Xi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yi.call(this, a);
    case 2:
      return Zi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xi.c = Yi;
Xi.b = Zi;
Wi = Xi;
function aj(a, b) {
  var c = a.exec(b);
  return c == n ? n : 1 === ed(c) ? H(c) : fh(c)
}
function bj(a, b, c, d, f, g) {
  return pf.e(X([b]), xg(wg(X([c]), V.b(function(b) {
    return a.b ? a.b(b, f) : a.call(n, b, f)
  }, g))), L([X([d])], 0))
}
function rj(a, b, c, d, f, g, i) {
  Tb(a, c);
  G(i) && (b.a ? b.a(H(i), a, g) : b.call(n, H(i), a, g));
  for(c = G(K(i));;) {
    if(c) {
      i = H(c), Tb(a, d), b.a ? b.a(i, a, g) : b.call(n, i, a, g), c = K(c)
    }else {
      break
    }
  }
  return Tb(a, f)
}
function sj(a, b) {
  for(var c = G(b);;) {
    if(c) {
      var d = H(c);
      Tb(a, d);
      c = K(c)
    }else {
      return n
    }
  }
}
function tj(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return sj.call(this, a, c)
}
tj.n = 1;
tj.j = function(a) {
  var b = H(a), a = J(a);
  return sj(b, a)
};
tj.e = sj;
function uj(a) {
  this.ff = a;
  this.t = 0;
  this.k = 1073741824
}
uj.prototype.Rd = function(a, b) {
  return this.ff.append(b)
};
uj.prototype.Be = ca(n);
var wj = function vj(b, c) {
  return b == n ? O.c("nil") : h === b ? O.c("#<undefined>") : pf.b(A(function() {
    var d = E.a(c, "\ufdd0'meta", n);
    return A(d) ? (d = b ? ((d = b.k & 131072) ? d : b.Pd) ? k : b.k ? p : B(Cb, b) : B(Cb, b), A(d) ? xd(b) : d) : d
  }()) ? pf.e(X(["^"]), vj(xd(b), c), L([X([" "])], 0)) : n, function() {
    var c = b != n;
    return c ? b.kb : c
  }() ? b.ub(b) : (b ? function() {
    var c = b.k & 536870912;
    return c ? c : b.M
  }() || (b.k ? 0 : B(Rb, b)) : B(Rb, b)) ? Sb(b, c) : A(b instanceof RegExp) ? O.a('#"', b.source, '"') : O.a("#<", "" + U(b), ">"))
}, yj = function xj(b, c, d) {
  if(b == n) {
    return Tb(c, "nil")
  }
  if(h === b) {
    return Tb(c, "#<undefined>")
  }
  var f;
  f = E.a(d, "\ufdd0'meta", n);
  A(f) && (f = b ? ((f = b.k & 131072) ? f : b.Pd) ? k : b.k ? p : B(Cb, b) : B(Cb, b), f = A(f) ? xd(b) : f);
  A(f) && (Tb(c, "^"), xj(xd(b), c, d), Tb(c, " "));
  ((f = b != n) ? b.kb : f) ? b = b.vb(b, c, d) : (f = b ? ((f = b.k & 2147483648) ? f : b.R) || (b.k ? 0 : B(Vb, b)) : B(Vb, b), f ? b = Wb(b, c, d) : (f = b ? ((f = b.k & 536870912) ? f : b.M) || (b.k ? 0 : B(Rb, b)) : B(Rb, b), b = f ? P.a(tj, c, Sb(b, d)) : A(b instanceof RegExp) ? tj.e(c, L(['#"', b.source, '"'], 0)) : tj.e(c, L(["#<", "" + U(b), ">"], 0))));
  return b
};
function zj(a) {
  var b = Y(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":k, "\ufdd0'readably":k, "\ufdd0'meta":p, "\ufdd0'dup":p});
  if(Ed(a)) {
    b = ""
  }else {
    var c = new Sa, d = new uj(c);
    a: {
      yj(H(a), d, b);
      for(a = G(K(a));;) {
        if(a) {
          var f = H(a);
          Tb(d, " ");
          yj(f, d, b);
          a = K(a)
        }else {
          break a
        }
      }
    }
    Ub(d);
    b = "" + U(c)
  }
  return b
}
var R;
function Aj(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return zj(b)
}
Aj.n = 0;
Aj.j = function(a) {
  a = G(a);
  return zj(a)
};
Aj.e = function(a) {
  return zj(a)
};
R = Aj;
var Bj = Y('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function Cj(a) {
  return[U('"'), U(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return E.a(Bj, a, n)
  })), U('"')].join("")
}
Rb.number = k;
Sb.number = function(a) {
  return O.c("" + U(a))
};
Mc.prototype.M = k;
Mc.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
jf.prototype.M = k;
jf.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
zi.prototype.M = k;
zi.prototype.I = function(a, b) {
  return bj(function(a) {
    return bj(wj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
af.prototype.M = k;
af.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Oc.prototype.M = k;
Oc.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Rb["boolean"] = k;
Sb["boolean"] = function(a) {
  return O.c("" + U(a))
};
Rb.string = k;
Sb.string = function(a, b) {
  return Md(a) ? O.c([U(":"), U(function() {
    var b = Ki(a);
    return A(b) ? [U(b), U("/")].join("") : n
  }()), U(Ji(a))].join("")) : Nd(a) ? O.c([U(function() {
    var b = Ki(a);
    return A(b) ? [U(b), U("/")].join("") : n
  }()), U(Ji(a))].join("")) : O.c(A((new W("\ufdd0'readably")).call(n, b)) ? Cj(a) : a)
};
Xh.prototype.M = k;
Xh.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Z.prototype.M = k;
Z.prototype.I = function(a, b) {
  return bj(wj, "[", " ", "]", b, a)
};
hh.prototype.M = k;
hh.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
ei.prototype.M = k;
ei.prototype.I = function(a, b) {
  return bj(function(a) {
    return bj(wj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Ug.prototype.M = k;
Ug.prototype.I = function(a, b) {
  return bj(wj, "[", " ", "]", b, a)
};
Le.prototype.M = k;
Le.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Rb.array = k;
Sb.array = function(a, b) {
  return bj(wj, "#<Array [", ", ", "]>", b, a)
};
Rb["function"] = k;
Sb["function"] = function(a) {
  return O.a("#<", "" + U(a), ">")
};
Me.prototype.M = k;
Me.prototype.I = function() {
  return O.c("()")
};
$.prototype.M = k;
$.prototype.I = function(a, b) {
  return bj(wj, "[", " ", "]", b, a)
};
Date.prototype.M = k;
Date.prototype.I = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(ed(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return O.c([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b(a.getUTCMonth() + 1, 2)), U("-"), U(b(a.getUTCDate(), 2)), U("T"), U(b(a.getUTCHours(), 2)), U(":"), U(b(a.getUTCMinutes(), 2)), U(":"), U(b(a.getUTCSeconds(), 2)), U("."), U(b(a.getUTCMilliseconds(), 3)), U("-"), U('00:00"')].join(""))
};
Ue.prototype.M = k;
Ue.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Li.prototype.M = k;
Li.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
ai.prototype.M = k;
ai.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
xh.prototype.M = k;
xh.prototype.I = function(a, b) {
  return bj(function(a) {
    return bj(wj, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ji.prototype.M = k;
ji.prototype.I = function(a, b) {
  return bj(wj, "(", " ", ")", b, a)
};
Vb.number = k;
Wb.number = function(a, b) {
  1 / 0;
  return Tb(b, "" + U(a))
};
Mc.prototype.R = k;
Mc.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
jf.prototype.R = k;
jf.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
zi.prototype.R = k;
zi.prototype.H = function(a, b, c) {
  return rj(b, function(a) {
    return rj(b, yj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
af.prototype.R = k;
af.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Oc.prototype.R = k;
Oc.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Vb["boolean"] = k;
Wb["boolean"] = function(a, b) {
  return Tb(b, "" + U(a))
};
Vb.string = k;
Wb.string = function(a, b, c) {
  return Md(a) ? (Tb(b, ":"), c = Ki(a), A(c) && tj.e(b, L(["" + U(c), "/"], 0)), Tb(b, Ji(a))) : Nd(a) ? (c = Ki(a), A(c) && tj.e(b, L(["" + U(c), "/"], 0)), Tb(b, Ji(a))) : A((new W("\ufdd0'readably")).call(n, c)) ? Tb(b, Cj(a)) : Tb(b, a)
};
Xh.prototype.R = k;
Xh.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Z.prototype.R = k;
Z.prototype.H = function(a, b, c) {
  return rj(b, yj, "[", " ", "]", c, a)
};
hh.prototype.R = k;
hh.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
ei.prototype.R = k;
ei.prototype.H = function(a, b, c) {
  return rj(b, function(a) {
    return rj(b, yj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Ug.prototype.R = k;
Ug.prototype.H = function(a, b, c) {
  return rj(b, yj, "[", " ", "]", c, a)
};
Le.prototype.R = k;
Le.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Vb.array = k;
Wb.array = function(a, b, c) {
  return rj(b, yj, "#<Array [", ", ", "]>", c, a)
};
Vb["function"] = k;
Wb["function"] = function(a, b) {
  return tj.e(b, L(["#<", "" + U(a), ">"], 0))
};
Me.prototype.R = k;
Me.prototype.H = function(a, b) {
  return Tb(b, "()")
};
$.prototype.R = k;
$.prototype.H = function(a, b, c) {
  return rj(b, yj, "[", " ", "]", c, a)
};
Date.prototype.R = k;
Date.prototype.H = function(a, b) {
  function c(a, b) {
    for(var c = "" + U(a);;) {
      if(ed(c) < b) {
        c = [U("0"), U(c)].join("")
      }else {
        return c
      }
    }
  }
  return tj.e(b, L(['#inst "', "" + U(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Ue.prototype.R = k;
Ue.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Li.prototype.R = k;
Li.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
ai.prototype.R = k;
ai.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
xh.prototype.R = k;
xh.prototype.H = function(a, b, c) {
  return rj(b, function(a) {
    return rj(b, yj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ji.prototype.R = k;
ji.prototype.H = function(a, b, c) {
  return rj(b, yj, "(", " ", ")", c, a)
};
Ug.prototype.ze = k;
Ug.prototype.Od = function(a, b) {
  return Pd.b(a, b)
};
function Dj(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.kf = c;
  this.mf = d;
  this.k = 2690809856;
  this.t = 2
}
r = Dj.prototype;
r.L = function(a) {
  return ka(a)
};
r.Qd = function(a, b, c) {
  for(var d = G(this.mf);;) {
    if(d) {
      var f = H(d), g = S.a(f, 0, n), f = S.a(f, 1, n);
      f.q ? f.q(g, a, b, c) : f.call(n, g, a, b, c);
      d = K(d)
    }else {
      return n
    }
  }
};
r.H = function(a, b, c) {
  Tb(b, "#<Atom: ");
  Wb(this.state, b, c);
  return Tb(b, ">")
};
r.I = function(a, b) {
  return pf.e(X(["#<Atom: "]), Sb(this.state, b), L([">"], 0))
};
r.B = q("m");
r.Yb = q("state");
r.G = function(a, b) {
  return a === b
};
var Ej, Fj = n;
function Gj(a) {
  return new Dj(a, n, n, n)
}
function Hj(a, b) {
  var c = T(b) ? P.b(M, b) : b, d = E.a(c, "\ufdd0'validator", n), c = E.a(c, "\ufdd0'meta", n);
  return new Dj(a, c, d, n)
}
function Ij(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return Hj.call(this, a, c)
}
Ij.n = 1;
Ij.j = function(a) {
  var b = H(a), a = J(a);
  return Hj(b, a)
};
Ij.e = Hj;
Fj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Gj.call(this, a);
    default:
      return Ij.e(a, L(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fj.n = 1;
Fj.j = Ij.j;
Fj.c = Gj;
Fj.e = Ij.e;
Ej = Fj;
function Jj(a, b) {
  var c = a.kf;
  A(c) && !A(c.c ? c.c(b) : c.call(n, b)) && e(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(R.e(L([sc(O("\ufdd1'validate", "\ufdd1'new-value"), M("\ufdd0'line", 6751))], 0)))].join("")));
  c = a.state;
  a.state = b;
  Xb(a, c, b);
  return b
}
var Kj, Lj = n;
function Mj(a, b) {
  return Jj(a, b.c ? b.c(a.state) : b.call(n, a.state))
}
function Nj(a, b, c) {
  return Jj(a, b.b ? b.b(a.state, c) : b.call(n, a.state, c))
}
function Oj(a, b, c, d) {
  return Jj(a, b.a ? b.a(a.state, c, d) : b.call(n, a.state, c, d))
}
function Pj(a, b, c, d, f) {
  return Jj(a, b.q ? b.q(a.state, c, d, f) : b.call(n, a.state, c, d, f))
}
function Qj(a, b, c, d, f, g) {
  return Jj(a, P.e(b, a.state, c, d, f, L([g], 0)))
}
function Rj(a, b, c, d, f, g) {
  var i = n;
  t(g) && (i = L(Array.prototype.slice.call(arguments, 5), 0));
  return Qj.call(this, a, b, c, d, f, i)
}
Rj.n = 5;
Rj.j = function(a) {
  var b = H(a), c = H(K(a)), d = H(K(K(a))), f = H(K(K(K(a)))), g = H(K(K(K(K(a))))), a = J(K(K(K(K(a)))));
  return Qj(b, c, d, f, g, a)
};
Rj.e = Qj;
Lj = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Mj.call(this, a, b);
    case 3:
      return Nj.call(this, a, b, c);
    case 4:
      return Oj.call(this, a, b, c, d);
    case 5:
      return Pj.call(this, a, b, c, d, f);
    default:
      return Rj.e(a, b, c, d, f, L(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lj.n = 5;
Lj.j = Rj.j;
Lj.b = Mj;
Lj.a = Nj;
Lj.q = Oj;
Lj.X = Pj;
Lj.e = Rj.e;
Kj = Lj;
function yc(a) {
  return Bb(a)
}
var Sj = n, Tj, Uj = n;
function Vj() {
  return Uj.c("G__")
}
function Wj(a) {
  Sj == n && (Sj = Ej.c(0));
  return Ee.c([U(a), U(Kj.b(Sj, tc))].join(""))
}
Uj = function(a) {
  switch(arguments.length) {
    case 0:
      return Vj.call(this);
    case 1:
      return Wj.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uj.z = Vj;
Uj.c = Wj;
Tj = Uj;
function Xj(a, b) {
  this.state = a;
  this.sa = b;
  this.t = 1;
  this.k = 32768
}
Xj.prototype.Yb = function() {
  var a = this;
  return(new W("\ufdd0'value")).call(n, Kj.b(a.state, function(b) {
    var b = T(b) ? P.b(M, b) : b, c = E.a(b, "\ufdd0'done", n);
    return A(c) ? b : Y(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":k, "\ufdd0'value":a.sa.z ? a.sa.z() : a.sa.call(n)})
  }))
};
Ej.c(Y(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Ah, "\ufdd0'descendants":Ah, "\ufdd0'ancestors":Ah}));
var Yj, Zj, $j, ak, bk;
function ck() {
  return da.navigator ? da.navigator.userAgent : n
}
bk = ak = $j = Zj = Yj = p;
var dk;
if(dk = ck()) {
  var ek = da.navigator;
  Yj = 0 == dk.indexOf("Opera");
  Zj = !Yj && -1 != dk.indexOf("MSIE");
  ak = ($j = !Yj && -1 != dk.indexOf("WebKit")) && -1 != dk.indexOf("Mobile");
  bk = !Yj && !$j && "Gecko" == ek.product
}
var fk = Yj, gk = Zj, hk = bk, ik = $j, jk = ak, kk = da.navigator, lk = -1 != (kk && kk.platform || "").indexOf("Mac"), mk;
a: {
  var nk = "", ok;
  if(fk && da.opera) {
    var pk = da.opera.version, nk = "function" == typeof pk ? pk() : pk
  }else {
    if(hk ? ok = /rv\:([^\);]+)(\)|;)/ : gk ? ok = /MSIE\s+([^\);]+)(\)|;)/ : ik && (ok = /WebKit\/(\S+)/), ok) {
      var qk = ok.exec(ck()), nk = qk ? qk[1] : ""
    }
  }
  if(gk) {
    var rk, sk = da.document;
    rk = sk ? sk.documentMode : h;
    if(rk > parseFloat(nk)) {
      mk = String(rk);
      break a
    }
  }
  mk = nk
}
var tk = {};
function uk(a) {
  var b;
  if(!(b = tk[a])) {
    b = 0;
    for(var c = va(String(mk)).split("."), d = va(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(i) || ["", "", ""], w = m.exec(j) || ["", "", ""];
        if(0 == s[0].length && 0 == w[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == w[2].length) ? -1 : (0 == s[2].length) > (0 == w[2].length) ? 1 : 0) || (s[2] < w[2] ? -1 : s[2] > w[2] ? 1 : 0)
      }while(0 == b)
    }
    b = tk[a] = 0 <= b
  }
  return b
}
var vk = {};
function wk(a) {
  return vk[a] || (vk[a] = gk && !!document.documentMode && document.documentMode >= a)
}
;!gk || wk(9);
var xk = !gk || wk(9), yk = gk && !uk("8");
!ik || uk("528");
hk && uk("1.9b") || gk && uk("8") || fk && uk("9.5") || ik && uk("528");
hk && !uk("8") || gk && uk("9");
function zk() {
  this.mb = p
}
;function Ak(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
Ak.prototype.Cb = p;
Ak.prototype.defaultPrevented = p;
Ak.prototype.nc = k;
Ak.prototype.preventDefault = function() {
  this.defaultPrevented = k;
  this.nc = p
};
function Bk(a) {
  Bk[" "](a);
  return a
}
Bk[" "] = ba();
function Ck(a, b) {
  a && this.hc(a, b)
}
y(Ck, Ak);
r = Ck.prototype;
r.target = n;
r.relatedTarget = n;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = p;
r.altKey = p;
r.shiftKey = p;
r.metaKey = p;
r.cf = p;
r.Lb = n;
r.hc = function(a, b) {
  var c = this.type = a.type;
  Ak.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(hk) {
      var f;
      a: {
        try {
          Bk(d.nodeName);
          f = k;
          break a
        }catch(g) {
        }
        f = p
      }
      f || (d = n)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = ik || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = ik || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.cf = lk ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Lb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Cb
};
r.preventDefault = function() {
  Ck.hb.preventDefault.call(this);
  var a = this.Lb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = p, yk) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.Le = q("Lb");
function Dk() {
}
var Ek = 0;
r = Dk.prototype;
r.key = 0;
r.pb = p;
r.Kd = p;
r.hc = function(a, b, c, d, f, g) {
  ia(a) ? this.ee = k : a && a.handleEvent && ia(a.handleEvent) ? this.ee = p : e(Error("Invalid listener argument"));
  this.Bb = a;
  this.me = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.gc = g;
  this.Kd = p;
  this.key = ++Ek;
  this.pb = p
};
r.handleEvent = function(a) {
  return this.ee ? this.Bb.call(this.gc || this.src, a) : this.Bb.handleEvent.call(this.Bb, a)
};
var Fk = {}, Gk = {}, Hk = {}, Ik = {};
function Jk(a, b, c, d, f) {
  if(b) {
    if(fa(b)) {
      for(var g = 0;g < b.length;g++) {
        Jk(a, b[g], c, d, f)
      }
      return n
    }
    var d = !!d, i = Gk;
    b in i || (i[b] = {w:0, oa:0});
    i = i[b];
    d in i || (i[d] = {w:0, oa:0}, i.w++);
    var i = i[d], j = ka(a), l;
    i.oa++;
    if(i[j]) {
      l = i[j];
      for(g = 0;g < l.length;g++) {
        if(i = l[g], i.Bb == c && i.gc == f) {
          if(i.pb) {
            break
          }
          return l[g].key
        }
      }
    }else {
      l = i[j] = [], i.w++
    }
    var m = Kk, s = xk ? function(a) {
      return m.call(s.src, s.key, a)
    } : function(a) {
      a = m.call(s.src, s.key, a);
      if(!a) {
        return a
      }
    }, g = s;
    g.src = a;
    i = new Dk;
    i.hc(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    l.push(i);
    Fk[c] = i;
    Hk[j] || (Hk[j] = []);
    Hk[j].push(i);
    a.addEventListener ? (a == da || !a.Oc) && a.addEventListener(b, g, d) : a.attachEvent(b in Ik ? Ik[b] : Ik[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Lk(a, b, c, d, f) {
  if(fa(b)) {
    for(var g = 0;g < b.length;g++) {
      Lk(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Mk(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Bb == c && a[g].capture == d && a[g].gc == f) {
          Nk(a[g].key);
          break
        }
      }
    }
  }
}
function Nk(a) {
  if(!Fk[a]) {
    return p
  }
  var b = Fk[a];
  if(b.pb) {
    return p
  }
  var c = b.src, d = b.type, f = b.me, g = b.capture;
  c.removeEventListener ? (c == da || !c.Oc) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Ik ? Ik[d] : Ik[d] = "on" + d, f);
  c = ka(c);
  Hk[c] && (f = Hk[c], Ja(f, b), 0 == f.length && delete Hk[c]);
  b.pb = k;
  if(b = Gk[d][g][c]) {
    b.ie = k, Ok(d, g, c, b)
  }
  delete Fk[a];
  return k
}
function Ok(a, b, c, d) {
  if(!d.kc && d.ie) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].pb ? d[f].me.src = n : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.ie = p;
    0 == g && (delete Gk[a][b][c], Gk[a][b].w--, 0 == Gk[a][b].w && (delete Gk[a][b], Gk[a].w--), 0 == Gk[a].w && delete Gk[a])
  }
}
function Mk(a, b, c) {
  var d = Gk;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : n
}
function Pk(a, b, c, d, f) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.oa--;
    a = a[b];
    a.kc ? a.kc++ : a.kc = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var l = a[j];
        l && !l.pb && (g &= Qk(l, f) !== p)
      }
    }finally {
      a.kc--, Ok(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Qk(a, b) {
  a.Kd && Nk(a.key);
  return a.handleEvent(b)
}
function Kk(a, b) {
  if(!Fk[a]) {
    return k
  }
  var c = Fk[a], d = c.type, f = Gk;
  if(!(d in f)) {
    return k
  }
  var f = f[d], g, i;
  if(!xk) {
    var j;
    if(!(j = b)) {
      a: {
        j = ["window", "event"];
        for(var l = da;g = j.shift();) {
          if(l[g] != n) {
            l = l[g]
          }else {
            j = n;
            break a
          }
        }
        j = l
      }
    }
    g = j;
    j = k in f;
    l = p in f;
    if(j) {
      if(0 > g.keyCode || g.returnValue != h) {
        return k
      }
      a: {
        var m = p;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(s) {
            m = k
          }
        }
        if(m || g.returnValue == h) {
          g.returnValue = k
        }
      }
    }
    m = new Ck;
    m.hc(g, this);
    g = k;
    try {
      if(j) {
        for(var w = [], v = m.currentTarget;v;v = v.parentNode) {
          w.push(v)
        }
        i = f[k];
        i.oa = i.w;
        for(var I = w.length - 1;!m.Cb && 0 <= I && i.oa;I--) {
          m.currentTarget = w[I], g &= Pk(i, w[I], d, k, m)
        }
        if(l) {
          i = f[p];
          i.oa = i.w;
          for(I = 0;!m.Cb && I < w.length && i.oa;I++) {
            m.currentTarget = w[I], g &= Pk(i, w[I], d, p, m)
          }
        }
      }else {
        g = Qk(c, m)
      }
    }finally {
      w && (w.length = 0)
    }
    return g
  }
  d = new Ck(b, this);
  return g = Qk(c, d)
}
;function Rk(a, b, c) {
  A((new W("\ufdd0'on-value-mouseover")).call(n, c)) && Jk(b, "mouseover", Yf.b((new W("\ufdd0'on-value-mouseover")).call(n, c), a));
  A((new W("\ufdd0'on-value-mouseout")).call(n, c)) && Jk(b, "mouseout", Yf.b((new W("\ufdd0'on-value-mouseout")).call(n, c), a));
  A((new W("\ufdd0'on-value-click")).call(n, c)) && Jk(b, "click", Yf.b((new W("\ufdd0'on-value-click")).call(n, c), a))
}
function Sk(a, b) {
  for(var c = G(Hg.b(2, b));;) {
    if(c) {
      var d = H(c), f = S.a(d, 0, n), d = S.a(d, 1, n);
      Jk(a, Ji(f), d);
      c = K(c)
    }else {
      return n
    }
  }
}
;function Tk() {
  this.mb = p
}
y(Tk, zk);
r = Tk.prototype;
r.Oc = k;
r.md = n;
r.sd = function(a) {
  this.md = a
};
r.addEventListener = function(a, b, c, d) {
  Jk(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Lk(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = Gk;
  if(b in c) {
    if(ga(a)) {
      a = new Ak(a, this)
    }else {
      if(a instanceof Ak) {
        a.target = a.target || this
      }else {
        var d = a, a = new Ak(b, this);
        Qa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = k in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.md) {
        f.push(g)
      }
      g = c[k];
      g.oa = g.w;
      for(var i = f.length - 1;!a.Cb && 0 <= i && g.oa;i--) {
        a.currentTarget = f[i], d &= Pk(g, f[i], a.type, k, a) && a.nc != p
      }
    }
    if(p in c) {
      if(g = c[p], g.oa = g.w, b) {
        for(i = 0;!a.Cb && i < f.length && g.oa;i++) {
          a.currentTarget = f[i], d &= Pk(g, f[i], a.type, p, a) && a.nc != p
        }
      }else {
        for(f = this;!a.Cb && f && g.oa;f = f.md) {
          a.currentTarget = f, d &= Pk(g, f, a.type, p, a) && a.nc != p
        }
      }
    }
    a = Boolean(d)
  }else {
    a = k
  }
  return a
};
var Uk;
Uk = ca(k);
var Vk, Wk = !gk || wk(9);
!hk && !gk || gk && wk(9) || hk && uk("1.9.1");
gk && uk("9");
function Xk(a, b) {
  var c;
  c = a.className;
  c = ga(c) && c.match(/\S+/g) || [];
  for(var d = Ka(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    0 <= Ga(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
;function Yk(a) {
  return a * Math.PI / 180
}
;function Zk(a, b) {
  this.x = t(a) ? a : 0;
  this.y = t(b) ? b : 0
}
Zk.prototype.Hb = function() {
  return new Zk(this.x, this.y)
};
Zk.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function $k(a, b) {
  this.width = a;
  this.height = b
}
r = $k.prototype;
r.Hb = function() {
  return new $k(this.width, this.height)
};
r.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
r.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
r.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
r.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
r.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
function al(a) {
  return a ? new bl(cl(a)) : Vk || (Vk = new bl)
}
function dl() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML")
}
var el = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function fl(a, b, c) {
  return gl(document, arguments)
}
function gl(a, b) {
  var c = b[0], d = b[1];
  if(!Wk && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', wa(d.name), '"');
    if(d.type) {
      c.push(' type="', wa(d.type), '"');
      var f = {};
      Qa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  var g = a.createElement(c);
  d && (ga(d) ? g.className = d : fa(d) ? Xk.apply(n, [g].concat(d)) : Ma(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in el ? g.setAttribute(el[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && hl(a, g, b, 2);
  return g
}
function hl(a, b, c, d) {
  function f(c) {
    c && b.appendChild(ga(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d], i = g, j = u(i);
    if(("array" == j || "object" == j && "number" == typeof i.length) && !(ja(g) && 0 < g.nodeType)) {
      i = Ha;
      a: {
        if((j = g) && "number" == typeof j.length) {
          if(ja(j)) {
            j = "function" == typeof j.item || "string" == typeof j.item;
            break a
          }
          if(ia(j)) {
            j = "function" == typeof j.item;
            break a
          }
        }
        j = p
      }
      if(j) {
        if(j = g.length, 0 < j) {
          for(var l = Array(j), m = 0;m < j;m++) {
            l[m] = g[m]
          }
          g = l
        }else {
          g = []
        }
      }
      i(g, f)
    }else {
      f(g)
    }
  }
}
function il(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function jl(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : n
}
function cl(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function bl(a) {
  this.Da = a || da.document || document
}
r = bl.prototype;
r.p = function(a) {
  return ga(a) ? this.Da.getElementById(a) : a
};
r.Ca = function(a, b, c) {
  return gl(this.Da, arguments)
};
r.createElement = function(a) {
  return this.Da.createElement(a)
};
r.createTextNode = function(a) {
  return this.Da.createTextNode(a)
};
function kl(a) {
  var b = a.Da, a = !ik && "CSS1Compat" == b.compatMode ? b.documentElement : b.body, b = b.parentWindow || b.defaultView;
  return new Zk(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  hl(cl(a), a, arguments, 1)
};
function ll() {
  this.T = [];
  this.w = [];
  this.Aa = []
}
ll.prototype.wb = n;
ll.prototype.ia = n;
ll.prototype.Eb = k;
var ml = [2, 2, 6, 6, 0];
r = ll.prototype;
r.clear = function() {
  this.T.length = 0;
  this.w.length = 0;
  this.Aa.length = 0;
  delete this.wb;
  delete this.ia;
  delete this.Eb;
  return this
};
r.moveTo = function(a, b) {
  0 == this.T[this.T.length - 1] ? this.Aa.length -= 2 : (this.T.push(0), this.w.push(1));
  this.Aa.push(a, b);
  this.ia = this.wb = [a, b];
  return this
};
r.lineTo = function(a) {
  var b = this.T[this.T.length - 1];
  b == n && e(Error("Path cannot start with lineTo"));
  1 != b && (this.T.push(1), this.w.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.Aa.push(c, d)
  }
  this.w[this.w.length - 1] += b / 2;
  this.ia = [c, d];
  return this
};
r.Ra = function(a) {
  var b = this.T[this.T.length - 1];
  b == n && e(Error("Path cannot start with curve"));
  2 != b && (this.T.push(2), this.w.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.Aa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.w[this.w.length - 1] += b / 6;
  this.ia = [c, d];
  return this
};
r.close = function() {
  var a = this.T[this.T.length - 1];
  a == n && e(Error("Path cannot start with close"));
  4 != a && (this.T.push(4), this.w.push(1), this.ia = this.wb);
  return this
};
r.arcTo = function(a, b, c, d) {
  var f = this.ia[0] - a * Math.cos(Yk(c)) + a * Math.cos(Yk(c + d)), g = this.ia[1] - b * Math.sin(Yk(c)) + b * Math.sin(Yk(c + d));
  this.T.push(3);
  this.w.push(1);
  this.Aa.push(a, b, c, d, f, g);
  this.Eb = p;
  this.ia = [f, g];
  return this
};
r.xe = function(a, b, c, d) {
  for(var f = this.ia[0] - a * Math.cos(Yk(c)), g = this.ia[1] - b * Math.sin(Yk(c)), i = Yk(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Yk(c), j = 0;j < d;j++) {
    var l = Math.cos(c), m = Math.sin(c), s = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), w = f + (l - s * m) * a, v = g + (m + s * l) * b, c = c + i, l = Math.cos(c), m = Math.sin(c);
    this.Ra(w, v, f + (l + s * m) * a, g + (m - s * l) * b, f + l * a, g + m * b)
  }
  return this
};
function nl(a, b) {
  for(var c = a.Aa, d = 0, f = 0, g = a.T.length;f < g;f++) {
    var i = a.T[f], j = ml[i] * a.w[f];
    b(i, c.slice(d, d + j));
    d += j
  }
}
r.Hb = function() {
  var a = new this.constructor;
  a.T = this.T.concat();
  a.w = this.w.concat();
  a.Aa = this.Aa.concat();
  a.wb = this.wb && this.wb.concat();
  a.ia = this.ia && this.ia.concat();
  a.Eb = this.Eb;
  return a
};
var ol = {};
ol[0] = ll.prototype.moveTo;
ol[1] = ll.prototype.lineTo;
ol[4] = ll.prototype.close;
ol[2] = ll.prototype.Ra;
ol[3] = ll.prototype.xe;
function pl(a, b, c) {
  a.style[String(c).replace(/\-([a-z])/g, function(a, b) {
    return b.toUpperCase()
  })] = b
}
function ql(a, b) {
  var c;
  a: {
    c = cl(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, n))) {
      c = c[b] || c.getPropertyValue(b) || "";
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : n) || a.style && a.style[b]
}
function rl(a) {
  if(jk && ik) {
    var b = a.ownerDocument.defaultView;
    if(b != b.top) {
      return p
    }
  }
  return!!a.getBoundingClientRect
}
function sl(a) {
  var b = a.getBoundingClientRect();
  gk && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function tl(a) {
  if(gk && !wk(8)) {
    return a.offsetParent
  }
  for(var b = cl(a), c = ql(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = ql(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return n
}
function ul(a, b, c) {
  b instanceof $k ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = vl(b);
  a.style.height = vl(c)
}
function vl(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function wl(a) {
  if("none" != ql(a, "display")) {
    return xl(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = xl(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function xl(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = ik && !b && !c;
  return(!t(b) || d) && a.getBoundingClientRect ? (a = sl(a), new $k(a.right - a.left, a.bottom - a.top)) : new $k(b, c)
}
var yl = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function zl(a) {
  this.mb = p;
  this.Ta = a;
  this.jc = []
}
y(zl, zk);
var Al = [];
zl.prototype.fe = function(a, b, c) {
  fa(b) || (Al[0] = b, b = Al);
  for(var d = 0;d < b.length;d++) {
    var f = Jk(a, b[d], c || this, p, this.Ta || this);
    this.jc.push(f)
  }
};
zl.prototype.se = function(a, b, c, d, f) {
  if(fa(b)) {
    for(var g = 0;g < b.length;g++) {
      this.se(a, b[g], c, d, f)
    }
  }else {
    a: {
      c = c || this;
      f = f || this.Ta || this;
      d = !!d;
      if(a = Mk(a, b, d)) {
        for(b = 0;b < a.length;b++) {
          if(!a[b].pb && a[b].Bb == c && a[b].capture == d && a[b].gc == f) {
            a = a[b];
            break a
          }
        }
      }
      a = n
    }
    a && (a = a.key, Nk(a), Ja(this.jc, a))
  }
};
zl.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Bl() {
}
Bl.ae = function() {
  return Bl.de ? Bl.de : Bl.de = new Bl
};
Bl.prototype.Ye = 0;
Bl.ae();
function Cl(a) {
  this.mb = p;
  this.Ea = a || al();
  this.ef = Dl
}
y(Cl, Tk);
Cl.prototype.Se = Bl.ae();
var Dl = n;
r = Cl.prototype;
r.Z = n;
r.ea = p;
r.S = n;
r.ef = n;
r.Qb = n;
r.Na = n;
r.Wb = n;
r.p = q("S");
r.sd = function(a) {
  this.Qb && this.Qb != a && e(Error("Method not supported"));
  Cl.hb.sd.call(this, a)
};
r.Ca = function() {
  this.S = this.Ea.createElement("div")
};
r.od = function(a) {
  this.ea && e(Error("Component already rendered"));
  this.S || this.Ca();
  a ? a.insertBefore(this.S, n) : this.Ea.Da.body.appendChild(this.S);
  (!this.Qb || this.Qb.ea) && this.eb()
};
r.eb = function() {
  this.ea = k;
  this.Yd(function(a) {
    !a.ea && a.p() && a.eb()
  })
};
r.fc = function() {
  this.Yd(function(a) {
    a.ea && a.fc()
  });
  if(this.Pe) {
    var a = this.Pe;
    Ha(a.jc, Nk);
    a.jc.length = 0
  }
  this.ea = p
};
r.Yd = function(a) {
  this.Na && Ha(this.Na, a, h)
};
r.removeChild = function(a, b) {
  if(a) {
    var c = ga(a) ? a : a.Z || (a.Z = ":" + (a.Se.Ye++).toString(36)), a = this.Wb && c ? (c in this.Wb ? this.Wb[c] : h) || n : n;
    if(c && a) {
      var d = this.Wb;
      c in d && delete d[c];
      Ja(this.Na, a);
      b && (a.fc(), a.S && jl(a.S));
      c = a;
      c == n && e(Error("Unable to set parent component"));
      c.Qb = n;
      Cl.hb.sd.call(c, n)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function El(a, b, c, d, f) {
  Cl.call(this, f);
  this.width = a;
  this.height = b;
  this.ra = c || n;
  this.Jb = d || n
}
y(El, Cl);
r = El.prototype;
r.J = n;
r.$a = 0;
r.lb = 0;
r.Zc = function() {
  return this.ra ? new $k(this.ra, this.Jb) : this.ja()
};
r.ja = function() {
  return this.ea ? wl(this.p()) : ha(this.width) && ha(this.height) ? new $k(this.width, this.height) : n
};
r.Mb = function() {
  var a = this.ja();
  return a ? a.width / this.Zc().width : 0
};
r.Ne = function() {
  var a = this.ja();
  return a ? a.height / this.Zc().height : 0
};
r.re = ba();
r.ne = ba();
function Fl(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.Ga = this.Ja = 1, this.va = this.Ha = this.Ia = this.Ka = 0)
}
r = Fl.prototype;
r.Hb = function() {
  return new Fl(this.Ga, this.va, this.Ha, this.Ja, this.Ia, this.Ka)
};
r.setTransform = function(a, b, c, d, f, g) {
  (!ha(a) || !ha(b) || !ha(c) || !ha(d) || !ha(f) || !ha(g)) && e(Error("Invalid transform parameters"));
  this.Ga = a;
  this.va = b;
  this.Ha = c;
  this.Ja = d;
  this.Ia = f;
  this.Ka = g;
  return this
};
r.scale = function(a, b) {
  this.Ga *= a;
  this.va *= a;
  this.Ha *= b;
  this.Ja *= b;
  return this
};
r.translate = function(a, b) {
  this.Ia += a * this.Ga + b * this.Ha;
  this.Ka += a * this.va + b * this.Ja;
  return this
};
r.rotate = function(a, b, c) {
  a = Gl(new Fl, a, b, c);
  b = this.Ga;
  c = this.Ha;
  this.Ga = a.Ga * b + a.va * c;
  this.Ha = a.Ha * b + a.Ja * c;
  this.Ia += a.Ia * b + a.Ka * c;
  b = this.va;
  c = this.Ja;
  this.va = a.Ga * b + a.va * c;
  this.Ja = a.Ha * b + a.Ja * c;
  this.Ka += a.Ia * b + a.Ka * c;
  return this
};
r.toString = function() {
  return"matrix(" + [this.Ga, this.va, this.Ha, this.Ja, this.Ia, this.Ka].join() + ")"
};
function Gl(a, b, c, d) {
  var f = Math.cos(b), b = Math.sin(b);
  return a.setTransform(f, b, -b, f, c - c * f + d * b, d - c * b - d * f)
}
;function Hl(a, b) {
  this.mb = p;
  this.S = a;
  this.da = b;
  this.Oc = p
}
y(Hl, Tk);
r = Hl.prototype;
r.da = n;
r.S = n;
r.zd = n;
r.p = q("S");
function Il(a, b, c) {
  a.zd = Gl(new Fl, Yk(0), 0, 0).translate(b, c);
  a.da.rd(a, b, c, 0, 0, 0)
}
r.addEventListener = function(a, b, c, d) {
  Jk(this.S, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Lk(this.S, a, b, c, d)
};
function Jl(a, b, c, d) {
  Hl.call(this, a, b);
  this.ud(c);
  this.qe(d)
}
y(Jl, Hl);
r = Jl.prototype;
r.fill = n;
r.pc = n;
r.qe = function(a) {
  this.fill = a;
  this.da.pd(this, a)
};
r.Me = q("fill");
r.ud = function(a) {
  this.pc = a;
  this.da.qd(this, a)
};
r.Oe = q("pc");
function Kl(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(Kl, Jl);
function Ll(a, b) {
  Hl.call(this, a, b)
}
y(Ll, Hl);
function Ml(a, b) {
  Hl.call(this, a, b)
}
y(Ml, Hl);
function Nl(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(Nl, Jl);
function Ol(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(Ol, Jl);
function Pl(a) {
  Hl.call(this, n, a);
  this.Na = []
}
y(Pl, Ll);
Pl.prototype.clear = function() {
  this.Na.length && (this.Na.length = 0, this.da.La())
};
Pl.prototype.Va = ba();
Pl.prototype.appendChild = function(a) {
  this.Na.push(a)
};
Pl.prototype.Fa = function() {
  for(var a = 0, b = this.Na.length;a < b;a++) {
    Ql(this.da, this.Na[a])
  }
};
function Rl(a, b, c, d, f, g, i, j) {
  Jl.call(this, a, b, i, j);
  this.Fe = c;
  this.Ge = d;
  this.oe = f;
  this.pe = g;
  this.nb = new ll;
  this.nb.clear();
  this.nb.moveTo(this.Fe + this.oe * Math.cos(Yk(0)), this.Ge + this.pe * Math.sin(Yk(0)));
  this.nb.arcTo(this.oe, this.pe, 0, 360);
  this.nb.close();
  this.bf = new Sl(n, b, this.nb, i, j)
}
y(Rl, Kl);
Rl.prototype.Fa = function(a) {
  this.bf.Fa(a)
};
function Sl(a, b, c, d, f) {
  Jl.call(this, a, b, d, f);
  this.ya(c)
}
y(Sl, Nl);
Sl.prototype.Kb = p;
Sl.prototype.ya = function(a) {
  if(!a.Eb) {
    if(a.Eb) {
      a = a.Hb()
    }else {
      var b = new ll;
      nl(a, function(a, d) {
        ol[a].apply(b, d)
      });
      a = b
    }
  }
  this.nb = a;
  this.Kb && this.da.La()
};
Sl.prototype.Fa = function(a) {
  this.Kb = k;
  a.beginPath();
  nl(this.nb, function(b, c) {
    switch(b) {
      case 0:
        a.moveTo(c[0], c[1]);
        break;
      case 1:
        for(var d = 0;d < c.length;d += 2) {
          a.lineTo(c[d], c[d + 1])
        }
        break;
      case 2:
        for(d = 0;d < c.length;d += 6) {
          a.bezierCurveTo(c[d], c[d + 1], c[d + 2], c[d + 3], c[d + 4], c[d + 5])
        }
        break;
      case 3:
        e(Error("Canvas paths cannot contain arcs"));
      case 4:
        a.closePath()
    }
  })
};
function Tl(a, b, c, d, f, g, i, j, l, m) {
  var s = fl("DIV", {style:"display:table;position:absolute;padding:0;margin:0;border:0"});
  Jl.call(this, s, a, l, m);
  this.yd = b;
  this.ue = c;
  this.of = d;
  this.ve = f;
  this.pf = g;
  this.we = i || "left";
  this.Ke = j;
  this.ic = fl("DIV", {style:"display:table-cell;padding: 0;margin: 0;border: 0"});
  c = this.ue;
  l = this.ve;
  d = this.of;
  f = this.pf;
  m = this.we;
  g = this.Ke;
  b = this.p().style;
  i = this.da.Mb();
  j = this.da.Ne();
  c == l ? (b.lineHeight = "90%", this.ic.style.verticalAlign = "center" == m ? "middle" : "left" == m ? d < f ? "top" : "bottom" : d < f ? "bottom" : "top", b.textAlign = "center", l = g.size * i, b.top = Math.round(Math.min(d, f) * j) + "px", b.left = Math.round((c - l / 2) * i) + "px", b.width = Math.round(l) + "px", b.height = Math.abs(d - f) * j + "px", b.fontSize = 0.6 * g.size * j + "pt") : (b.lineHeight = "100%", this.ic.style.verticalAlign = "top", b.textAlign = m, b.top = Math.round(((d + 
  f) / 2 - 2 * g.size / 3) * j) + "px", b.left = Math.round(c * i) + "px", b.width = Math.round(Math.abs(l - c) * i) + "px", b.height = "auto", b.fontSize = g.size * j + "pt");
  b.fontWeight = g.bold ? "bold" : "normal";
  b.fontStyle = g.cd ? "italic" : "normal";
  b.fontFamily = g.Xc;
  c = this.fill;
  b.color = c.ca || c.$d();
  Ul(this);
  a.p().appendChild(s);
  s.appendChild(this.ic)
}
y(Tl, Ol);
Tl.prototype.vd = function(a) {
  this.yd = a;
  Ul(this)
};
Tl.prototype.qe = function(a) {
  this.fill = a;
  var b = this.p();
  b && (b.style.color = a.ca || a.$d())
};
Tl.prototype.ud = ba();
Tl.prototype.Fa = ba();
function Ul(a) {
  a.ic.innerHTML = a.ue == a.ve ? Ia(a.yd.split(""), function(a) {
    return wa(a)
  }).join("<br>") : wa(a.yd)
}
function Vl(a, b, c, d, f, g, i) {
  Hl.call(this, a, b);
  this.nf = c;
  this.qf = d;
  this.Bd = f;
  this.ad = g;
  this.hf = i
}
y(Vl, Ml);
Vl.prototype.Kb = p;
Vl.prototype.Va = function(a, b) {
  this.Bd = a;
  this.ad = b;
  this.Kb && this.da.La()
};
Vl.prototype.Fa = function(a) {
  this.be ? (this.Bd && this.ad && a.drawImage(this.be, this.nf, this.qf, this.Bd, this.ad), this.Kb = k) : (a = new Image, a.onload = qa(this.Re, this, a), a.src = this.hf)
};
Vl.prototype.Re = function(a) {
  this.be = a;
  this.da.La()
};
function Wl(a, b) {
  this.size = a;
  this.Xc = b
}
Wl.prototype.bold = p;
Wl.prototype.cd = p;
function Xl() {
}
;function Yl(a, b) {
  this.ca = a;
  this.Pb = b == n ? 1 : b
}
y(Yl, Xl);
function Zl(a, b) {
  this.Cd = a;
  this.ca = b
}
;function $l(a, b, c, d, f) {
  El.call(this, a, b, c, d, f)
}
y($l, El);
r = $l.prototype;
r.pd = function() {
  this.La()
};
r.qd = function() {
  this.La()
};
r.rd = function() {
  this.La()
};
function am(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.zd ? b.zd.Hb() : new Fl, f = d.Ia, g = d.Ka;
  (f || g) && c.translate(f, g);
  (d = d.va) && c.rotate(Math.asin(d))
}
r.Ca = function() {
  var a = this.Ea.Ca("div", {style:"position:relative;overflow:hidden"});
  this.S = a;
  this.Fb = this.Ea.Ca("canvas");
  a.appendChild(this.Fb);
  this.fd = this.J = new Pl(this);
  this.df = 0;
  bm(this)
};
r.getContext = function() {
  this.p() || this.Ca();
  this.Ib || (this.Ib = this.Fb.getContext("2d"), this.Ib.save());
  return this.Ib
};
r.Va = function(a, b) {
  this.width = a;
  this.height = b;
  bm(this);
  this.La()
};
r.ja = function() {
  var a = this.width, b = this.height, c = ga(a) && -1 != a.indexOf("%"), d = ga(b) && -1 != b.indexOf("%");
  if(!this.ea && (c || d)) {
    return n
  }
  var f, g;
  c && (f = this.p().parentNode, g = wl(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.p().parentNode, g = g || wl(f), b = parseFloat(b) * g.height / 100);
  return new $k(a, b)
};
function bm(a) {
  ul(a.p(), a.width, a.height);
  var b = a.ja();
  b && (ul(a.Fb, b.width, b.height), a.Fb.width = b.width, a.Fb.height = b.height, a.Ib = n)
}
r.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.ja();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
r.clear = function() {
  this.reset();
  this.J.clear();
  for(var a = this.p();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
r.La = function() {
  if(this.le) {
    this.je = k
  }else {
    if(this.ea) {
      this.reset();
      if(this.ra) {
        var a = this.ja();
        this.getContext().scale(a.width / this.ra, a.height / this.Jb)
      }
      (this.$a || this.lb) && this.getContext().translate(-this.$a, -this.lb);
      am(this, this.J);
      this.J.Fa(this.Ib);
      this.getContext().restore()
    }
  }
};
function Ql(a, b) {
  if(!(b instanceof Tl)) {
    var c = a.getContext();
    am(a, b);
    if(!b.Me || !b.Oe) {
      b.Fa(c)
    }else {
      var d = b.fill;
      if(d) {
        if(d instanceof Yl) {
          0 != d.Pb && (c.globalAlpha = d.Pb, c.fillStyle = d.ca, b.Fa(c), c.fill(), c.globalAlpha = 1)
        }else {
          var f = c.createLinearGradient(d.Gf(), d.If(), d.Hf(), d.Jf());
          f.addColorStop(0, d.$d());
          f.addColorStop(1, d.Ff());
          c.fillStyle = f;
          b.Fa(c);
          c.fill()
        }
      }
      if(d = b.pc) {
        b.Fa(c), c.strokeStyle = d.ca, d = d.Cd, ga(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / a.Mb()), c.lineWidth = d, c.stroke()
      }
    }
    a.getContext().restore()
  }
}
r.za = function(a, b) {
  this.append(a, b)
};
r.append = function(a, b) {
  b = b || this.J;
  b.appendChild(a);
  this.ea && (!this.df && !(b != this.J && b != this.fd)) && Ql(this, a)
};
r.Rc = function(a, b, c, d, f, g, i) {
  a = new Rl(n, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  a = new Vl(n, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
r.cb = function(a, b, c, d, f, g, i, j, l, m) {
  a = new Tl(this, a, b, c, d, f, g, i, j, l);
  this.append(a, m);
  return a
};
r.bb = function(a, b, c, d) {
  a = new Sl(n, this, a, b, c);
  this.append(a, d);
  return a
};
r.ha = function(a) {
  var b = new Pl(this), a = a || this.J;
  if(a == this.J || a == this.fd) {
    this.fd = b
  }
  this.append(b, a);
  return b
};
r.eb = function() {
  var a = this.ja();
  $l.hb.eb.call(this);
  a || (bm(this), this.dispatchEvent("resize"));
  this.La()
};
r.re = function() {
  this.le = k
};
r.ne = function() {
  this.le = p;
  this.je && (this.La(), this.je = p)
};
function cm(a, b) {
  this.mb = p;
  this.Ab = a || 1;
  this.qc = b || dm;
  this.tc = qa(this.jf, this);
  this.gd = ta()
}
y(cm, Tk);
cm.prototype.enabled = p;
var dm = da.window;
cm.prototype.qb = n;
cm.prototype.jf = function() {
  if(this.enabled) {
    var a = ta() - this.gd;
    0 < a && a < 0.8 * this.Ab ? this.qb = this.qc.setTimeout(this.tc, this.Ab - a) : (this.dispatchEvent(em), this.enabled && (this.qb = this.qc.setTimeout(this.tc, this.Ab), this.gd = ta()))
  }
};
cm.prototype.start = function() {
  this.enabled = k;
  this.qb || (this.qb = this.qc.setTimeout(this.tc, this.Ab), this.gd = ta())
};
cm.prototype.stop = function() {
  this.enabled = p;
  this.qb && (this.qc.clearTimeout(this.qb), this.qb = n)
};
var em = "tick";
function fm(a, b) {
  ia(a) || (a && "function" == typeof a.handleEvent ? a = qa(a.handleEvent, a) : e(Error("Invalid listener argument")));
  return 2147483647 < b ? -1 : dm.setTimeout(a, b || 0)
}
;function gm(a, b) {
  Hl.call(this, a, b)
}
y(gm, Ll);
gm.prototype.clear = function() {
  il(this.p())
};
gm.prototype.Va = function(a, b) {
  hm(this.p(), {width:a, height:b})
};
function im(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(im, Kl);
function jm(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(jm, Nl);
jm.prototype.ya = function(a) {
  hm(this.p(), {d:km(a)})
};
function lm(a, b, c, d) {
  Jl.call(this, a, b, c, d)
}
y(lm, Ol);
lm.prototype.vd = function(a) {
  this.p().firstChild.data = a
};
function mm(a, b) {
  Hl.call(this, a, b)
}
y(mm, Ml);
mm.prototype.Va = function(a, b) {
  hm(this.p(), {width:a, height:b})
};
function nm(a, b, c, d, f) {
  El.call(this, a, b, c, d, f);
  this.He = {};
  this.Ad = ik && !uk(526);
  this.Ta = new zl(this)
}
var om;
y(nm, El);
function pm(a, b, c) {
  a = a.Ea.Da.createElementNS("http://www.w3.org/2000/svg", b);
  c && hm(a, c);
  return a
}
function hm(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = nm.prototype;
r.za = function(a, b) {
  (b || this.J).p().appendChild(a.p())
};
r.pd = function(a, b) {
  var c = a.p();
  b instanceof Yl ? (c.setAttribute("fill", b.ca), c.setAttribute("fill-opacity", b.Pb)) : c.setAttribute("fill", "none")
};
r.qd = function(a, b) {
  var c = a.p();
  if(b) {
    c.setAttribute("stroke", b.ca);
    var d = b.Cd;
    ga(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / this.Mb()) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.rd = function(a, b, c, d, f, g) {
  a.p().setAttribute("transform", "translate(" + b + "," + c + ") rotate(" + d + " " + f + " " + g + ")")
};
r.Ca = function() {
  var a = pm(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = pm(this, "g");
  this.Td = pm(this, "defs");
  this.J = new gm(b, this);
  a.appendChild(this.Td);
  a.appendChild(b);
  this.S = a;
  if(this.ra || this.$a || this.lb) {
    this.p().setAttribute("preserveAspectRatio", "none"), this.Ad ? this.rc() : this.p().setAttribute("viewBox", this.$a + " " + this.lb + " " + (this.ra ? this.ra + " " + this.Jb : ""))
  }
};
r.rc = function() {
  if(this.ea && (this.ra || this.$a || !this.lb)) {
    var a = this.ja();
    if(0 == a.width) {
      this.p().style.visibility = "hidden"
    }else {
      this.p().style.visibility = "";
      var b = -this.$a, c = -this.lb, d = a.width / this.ra, a = a.height / this.Jb;
      this.J.p().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.Va = function(a, b) {
  ul(this.p(), a, b)
};
r.ja = function() {
  if(!hk) {
    return this.ea ? wl(this.p()) : nm.hb.ja.call(this)
  }
  var a = this.width, b = this.height, c = ga(a) && -1 != a.indexOf("%"), d = ga(b) && -1 != b.indexOf("%");
  if(!this.ea && (c || d)) {
    return n
  }
  var f, g;
  c && (f = this.p().parentNode, g = wl(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.p().parentNode, g = g || wl(f), b = parseFloat(b) * g.height / 100);
  return new $k(a, b)
};
r.clear = function() {
  this.J.clear();
  il(this.Td);
  this.He = {}
};
r.Rc = function(a, b, c, d, f, g, i) {
  a = pm(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new im(a, this, f, g);
  this.za(f, i);
  return f
};
r.drawImage = function(a, b, c, d, f, g) {
  a = pm(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new mm(a, this);
  this.za(f, g);
  return f
};
r.cb = function(a, b, c, d, f, g, i, j, l, m) {
  var s = 180 * Math.atan2(f - c, d - b) / Math.PI % 360, s = Math.round(0 > 360 * s ? s + 360 : s), d = d - b, f = f - c, f = Math.round(Math.sqrt(d * d + f * f)), w = i.size, d = {"font-family":i.Xc, "font-size":w}, v = Math.round(0.85 * w), w = Math.round(c - w / 2 + v), v = b;
  "center" == g ? (v += Math.round(f / 2), d["text-anchor"] = "middle") : "right" == g && (v += f, d["text-anchor"] = "end");
  d.x = v;
  d.y = w;
  i.bold && (d["font-weight"] = "bold");
  i.cd && (d["font-style"] = "italic");
  0 != s && (d.transform = "rotate(" + s + " " + b + " " + c + ")");
  b = pm(this, "text", d);
  b.appendChild(this.Ea.Da.createTextNode(a));
  j == n && (hk && lk) && (a = "black", l instanceof Yl && (a = l.ca), j = new Zl(1, a));
  l = new lm(b, this, j, l);
  this.za(l, m);
  return l
};
r.bb = function(a, b, c, d) {
  a = pm(this, "path", {d:km(a)});
  b = new jm(a, this, b, c);
  this.za(b, d);
  return b
};
function km(a) {
  var b = [];
  nl(a, function(a, d) {
    switch(a) {
      case 0:
        b.push("M");
        Array.prototype.push.apply(b, d);
        break;
      case 1:
        b.push("L");
        Array.prototype.push.apply(b, d);
        break;
      case 2:
        b.push("C");
        Array.prototype.push.apply(b, d);
        break;
      case 3:
        var f = d[3];
        b.push("A", d[0], d[1], 0, 180 < Math.abs(f) ? 1 : 0, 0 < f ? 1 : 0, d[4], d[5]);
        break;
      case 4:
        b.push("Z")
    }
  });
  return b.join(" ")
}
r.ha = function(a) {
  var b = pm(this, "g");
  (a || this.J).p().appendChild(b);
  return new gm(b, this)
};
r.eb = function() {
  var a = this.ja();
  nm.hb.eb.call(this);
  a || this.dispatchEvent("resize");
  if(this.Ad) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && this.Ta.fe(qm(), em, this.rc);
    this.rc()
  }
};
r.fc = function() {
  nm.hb.fc.call(this);
  this.Ad && this.Ta.se(qm(), em, this.rc)
};
function qm() {
  om || (om = new cm(400), om.start());
  return om
}
;function rm() {
  return this.S = this.da.Ea.p(this.Z) || this.S
}
function sm(a, b) {
  this.Z = a.id;
  Hl.call(this, a, b)
}
y(sm, Ll);
sm.prototype.p = rm;
sm.prototype.clear = function() {
  il(this.p())
};
sm.prototype.Va = function(a, b) {
  var c = this.p(), d = c.style;
  d.width = tm(a) + "px";
  d.height = tm(b) + "px";
  c.coordsize = tm(a) + " " + tm(b);
  this.da.J != this && (c.coordorigin = "0 0")
};
function um(a, b, c, d, f, g, i, j) {
  this.Z = a.id;
  Jl.call(this, a, b, i, j);
  this.Cf = c;
  this.Df = d;
  this.Lf = f;
  this.Mf = g
}
y(um, Kl);
um.prototype.p = rm;
function vm(a, b, c, d) {
  this.Z = a.id;
  Jl.call(this, a, b, c, d)
}
y(vm, Nl);
vm.prototype.p = rm;
vm.prototype.ya = function(a) {
  wm(this.p(), "path", xm(a))
};
function ym(a, b, c, d) {
  this.Z = a.id;
  Jl.call(this, a, b, c, d)
}
y(ym, Ol);
ym.prototype.p = rm;
ym.prototype.vd = function(a) {
  wm(this.p().childNodes[1], "string", a)
};
function zm(a, b) {
  this.Z = a.id;
  Hl.call(this, a, b)
}
y(zm, Ml);
zm.prototype.p = rm;
zm.prototype.Va = function(a, b) {
  var c = this.p().style;
  c.width = Am(a) + "px";
  c.height = Am(b) + "px"
};
function Bm(a, b, c, d, f) {
  El.call(this, a, b, c, d, f);
  this.Ta = new zl(this)
}
y(Bm, El);
var Cm = document.documentMode && 8 <= document.documentMode;
function Am(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function tm(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function wm(a, b, c) {
  Cm ? a[b] = c : a.setAttribute(b, c)
}
function Dm(a, b) {
  var c = a.Ea.createElement("g_vml_:" + b);
  c.id = "goog_" + Ea++;
  return c
}
function Em(a) {
  Cm && a.ea && (a.p().innerHTML = a.p().innerHTML)
}
Bm.prototype.za = function(a, b) {
  (b || this.J).p().appendChild(a.p());
  Em(this)
};
Bm.prototype.pd = function(a, b) {
  var c = a.p();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Yl ? "transparent" == b.ca ? c.filled = p : 1 != b.Pb ? (c.filled = k, d = Dm(this, "fill"), d.opacity = Math.round(100 * b.Pb) + "%", d.color = b.ca, c.appendChild(d)) : (c.filled = k, c.fillcolor = b.ca) : c.filled = p;
  Em(this)
};
Bm.prototype.qd = function(a, b) {
  var c = a.p();
  if(b) {
    c.stroked = k;
    var d = b.Cd, d = ga(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * this.Mb(), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Dm(this, "stroke"), f.opacity = d, f.Of = "1px", f.color = b.ca, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ca, c.strokeweight = d + "px")
  }else {
    c.stroked = p
  }
  Em(this)
};
Bm.prototype.rd = function(a, b, c, d, f, g) {
  a = a.p();
  a.style.left = Am(b) + "px";
  a.style.top = Am(c) + "px";
  if(d || a.rotation) {
    a.rotation = d, a.coordsize = tm(2 * f) + " " + tm(2 * g)
  }
};
function Fm(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Am(b) + "px";
  g.top = Am(c) + "px";
  g.width = tm(d) + "px";
  g.height = tm(f) + "px";
  "shape" == a.tagName && (a.coordsize = tm(d) + " " + tm(f))
}
function Gm(a, b) {
  var c = Dm(a, b), d = a.Zc();
  Fm(c, 0, 0, d.width, d.height);
  return c
}
try {
  eval("document.namespaces")
}catch(Hm) {
}
r = Bm.prototype;
r.Ca = function() {
  var a = this.Ea.Da;
  a.namespaces.g_vml_ || (Cm ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.Ea.Ca("div", {style:"overflow:hidden;position:relative;width:" + (ga(a) && ua(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (ga(b) && ua(b) ? b : parseFloat(b.toString()) + "px")});
  this.S = c;
  var d = Dm(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ra ? tm(this.ra) + " " + tm(this.Jb) : tm(a) + " " + tm(b);
  d.coordorigin = t(this.$a) ? tm(this.$a) + " " + tm(this.lb) : "0 0";
  c.appendChild(d);
  this.J = new sm(d, this);
  Jk(c, "resize", qa(this.bd, this))
};
r.bd = function() {
  var a = wl(this.p()), b = this.J.p().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.p();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && this.Ta.fe(a, "propertychange", this.bd)
  }
  this.dispatchEvent("resize")
};
r.Va = function(a, b) {
  ul(this.p(), a, b)
};
r.ja = function() {
  var a = this.p();
  return new $k(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.J.clear()
};
r.Rc = function(a, b, c, d, f, g, i) {
  var j = Dm(this, "oval");
  Fm(j, a - c, b - d, 2 * c, 2 * d);
  a = new um(j, this, a, b, c, d, f, g);
  this.za(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  var i = Dm(this, "image");
  Fm(i, a, b, c, d);
  wm(i, "src", f);
  a = new zm(i, this);
  this.za(a, g);
  return a
};
r.cb = function(a, b, c, d, f, g, i, j, l, m) {
  var s = Gm(this, "shape"), w = Dm(this, "path"), b = "M" + Am(b) + "," + Am(c) + "L" + Am(d) + "," + Am(f) + "E";
  wm(w, "v", b);
  wm(w, "textpathok", "true");
  b = Dm(this, "textpath");
  b.setAttribute("on", "true");
  c = b.style;
  c.fontSize = i.size * this.Mb();
  c.fontFamily = i.Xc;
  g != n && (c["v-text-align"] = g);
  i.bold && (c.fontWeight = "bold");
  i.cd && (c.fontStyle = "italic");
  wm(b, "string", a);
  s.appendChild(w);
  s.appendChild(b);
  a = new ym(s, this, j, l);
  this.za(a, m);
  return a
};
r.bb = function(a, b, c, d) {
  var f = Gm(this, "shape");
  wm(f, "path", xm(a));
  a = new vm(f, this, b, c);
  this.za(a, d);
  return a
};
function xm(a) {
  var b = [];
  nl(a, function(a, d) {
    switch(a) {
      case 0:
        b.push("m");
        Array.prototype.push.apply(b, Ia(d, tm));
        break;
      case 1:
        b.push("l");
        Array.prototype.push.apply(b, Ia(d, tm));
        break;
      case 2:
        b.push("c");
        Array.prototype.push.apply(b, Ia(d, tm));
        break;
      case 4:
        b.push("x");
        break;
      case 3:
        var f = d[2] + d[3], g = tm(d[4] - d[0] * Math.cos(Yk(f))), f = tm(d[5] - d[1] * Math.sin(Yk(f))), i = tm(d[0]), j = tm(d[1]), l = Math.round(-65536 * d[2]), m = Math.round(-65536 * d[3]);
        b.push("ae", g, f, i, j, l, m)
    }
  });
  return b.join(" ")
}
r.ha = function(a) {
  var b = Gm(this, "group");
  (a || this.J).p().appendChild(b);
  return new sm(b, this)
};
r.eb = function() {
  Bm.hb.eb.call(this);
  this.bd();
  Em(this)
};
function Im(a, b) {
  var c;
  c = gk && !uk("9") ? new Bm(a, b, h, h, h) : ik && (!uk("420") || jk) ? new $l(a, b, h, h, h) : new nm(a, b, h, h, h);
  c.Ca();
  return c
}
;function Jm() {
  this.mb = p;
  this.Wa = Km;
  this.Ud = this.startTime = n
}
y(Jm, Tk);
var Km = 0;
Jm.prototype.$e = function() {
  this.ab("begin")
};
Jm.prototype.ke = function() {
  this.ab("end")
};
Jm.prototype.ab = function(a) {
  this.dispatchEvent(a)
};
function Lm(a, b, c) {
  this.mb = p;
  this.ge = a;
  this.Ab = b || 0;
  this.Ta = c;
  this.ye = qa(this.Ie, this)
}
y(Lm, zk);
Lm.prototype.Z = 0;
Lm.prototype.start = function(a) {
  this.stop();
  this.Z = fm(this.ye, t(a) ? a : this.Ab)
};
Lm.prototype.stop = function() {
  0 != this.Z && dm.clearTimeout(this.Z);
  this.Z = 0
};
Lm.prototype.Ie = function() {
  this.Z = 0;
  this.ge && this.ge.call(this.Ta)
};
var Oa = {}, Mm = n;
function Nm(a) {
  a = ka(a);
  delete Oa[a];
  Na() && Mm && Mm.stop()
}
function Om() {
  Mm || (Mm = new Lm(function() {
    var a = ta();
    Ma(Oa, function(c) {
      Pm(c, a)
    });
    Na() || Om()
  }, 20));
  var a = Mm;
  0 != a.Z || a.start()
}
;function Qm(a, b, c, d) {
  Jm.call(this);
  (!fa(a) || !fa(b)) && e(Error("Start and end parameters must be arrays"));
  a.length != b.length && e(Error("Start and end points must be the same length"));
  this.Sb = a;
  this.Je = b;
  this.duration = c;
  this.Dd = d;
  this.coords = [];
  this.Nf = p
}
y(Qm, Jm);
r = Qm.prototype;
r.Zd = 0;
r.na = 0;
r.ed = n;
r.play = function(a) {
  if(a || this.Wa == Km) {
    this.na = 0, this.coords = this.Sb
  }else {
    if(1 == this.Wa) {
      return p
    }
  }
  Nm(this);
  this.startTime = a = ta();
  -1 == this.Wa && (this.startTime -= this.duration * this.na);
  this.Ud = this.startTime + this.duration;
  this.ed = this.startTime;
  this.na || this.$e();
  this.ab("play");
  -1 == this.Wa && this.ab("resume");
  this.Wa = 1;
  var b = ka(this);
  b in Oa || (Oa[b] = this);
  Om();
  Pm(this, a);
  return k
};
r.stop = function(a) {
  Nm(this);
  this.Wa = Km;
  a && (this.na = 1);
  Rm(this, this.na);
  this.ab("stop");
  this.ke()
};
function Pm(a, b) {
  a.na = (b - a.startTime) / (a.Ud - a.startTime);
  1 <= a.na && (a.na = 1);
  a.Zd = 1E3 / (b - a.ed);
  a.ed = b;
  Rm(a, a.na);
  1 == a.na ? (a.Wa = Km, Nm(a), a.ab("finish"), a.ke()) : 1 == a.Wa && a.Ze()
}
function Rm(a, b) {
  ia(a.Dd) && (b = a.Dd(b));
  a.coords = Array(a.Sb.length);
  for(var c = 0;c < a.Sb.length;c++) {
    a.coords[c] = (a.Je[c] - a.Sb[c]) * b + a.Sb[c]
  }
}
r.Ze = function() {
  this.ab("animate")
};
r.ab = function(a) {
  this.dispatchEvent(new Sm(a, this))
};
function Sm(a, b) {
  Ak.call(this, a);
  this.coords = b.coords;
  this.x = b.coords[0];
  this.y = b.coords[1];
  this.Pf = b.coords[2];
  this.duration = b.duration;
  this.na = b.na;
  this.Ef = b.Zd;
  this.state = b.Wa;
  this.rf = b
}
y(Sm, Ak);
var Um = function Tm(b) {
  return Md(b) ? Ji(b) : Ld(b) ? b : Fd(b) ? P.b(U, V.b(function(b) {
    return Tm(b)
  }, b)) : n
};
var Vm = document.createElement("div");
Vm.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var Wm = jc.b(Vm.firstChild.nodeType, 3), Xm = jc.b(Vm.getElementsByTagName("tbody").length, 0);
jc.b(Vm.getElementsByTagName("link").length, 0);
var Ym = /<|&#?\w+;/, Zm = /^\s+/, $m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, an = /<([\w:]+)/, bn = /<tbody/i, cn = X([1, "<select multiple='multiple'>", "</select>"]), dn = X([1, "<table>", "</table>"]), en = X([3, "<table><tbody><tr>", "</tr></tbody></table>"]), fn = Y("col \ufdd0'default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), {col:X([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":X([0, 
"", ""]), tfoot:dn, caption:dn, optgroup:cn, legend:X([1, "<fieldset>", "</fieldset>"]), area:X([1, "<map>", "</map>"]), td:en, thead:dn, th:en, option:cn, tbody:dn, tr:X([2, "<table><tbody>", "</tbody></table>"]), colgroup:dn});
function gn(a) {
  var b;
  Ld($m) ? b = a.replace(RegExp(String($m).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>") : A($m.hasOwnProperty("source")) ? b = a.replace(RegExp($m.source, "g"), "<$1></$2>") : e([U("Invalid match arg: "), U($m)].join(""));
  var c = ("" + U($c(aj(an, b)))).toLowerCase(), d = E.a(fn, c, (new W("\ufdd0'default")).call(n, fn)), a = S.a(d, 0, n), f = S.a(d, 1, n), d = S.a(d, 2, n);
  a: {
    var g = document.createElement("div");
    g.innerHTML = [U(f), U(b), U(d)].join("");
    for(d = g;;) {
      if(0 < a) {
        a -= 1, d = d.lastChild
      }else {
        a = d;
        break a
      }
    }
    a = h
  }
  if(A(Xm)) {
    a: {
      d = a;
      g = Ua(aj(bn, b));
      ((c = jc.b(c, "table")) ? g : c) ? (f = d.firstChild, f = A(f) ? d.firstChild.childNodes : f) : f = ((f = jc.b(f, "<table>")) ? g : f) ? divchildNodes : dh;
      for(f = G(f);;) {
        if(f) {
          c = H(f), ((d = jc.b(c.nodeName, "tbody")) ? jc.b(c.childNodes.length, 0) : d) && c.parentNode.removeChild(c), f = K(f)
        }else {
          break a
        }
      }
    }
  }
  f = (f = Ua(Wm)) ? aj(Zm, b) : f;
  A(f) && a.insertBefore(document.createTextNode(H(aj(Zm, b))), a.firstChild);
  return a.childNodes
}
function hn(a) {
  if(a ? a.Qc : a) {
    return a.Qc(a)
  }
  var b;
  var c = hn[u(a == n ? n : a)];
  c ? b = c : (c = hn._) ? b = c : e(C("DomContent.nodes", a));
  return b.call(n, a)
}
var jn, kn = n;
function ln(a) {
  return kn.b(a, 0)
}
function mn(a, b) {
  return b < a.length ? new af(n, p, function() {
    return Q(a.item(b), kn.b(a, b + 1))
  }, n) : n
}
kn = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ln.call(this, a);
    case 2:
      return mn.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kn.c = ln;
kn.b = mn;
jn = kn;
var nn, on = n;
function pn(a) {
  return on.b(a, 0)
}
function qn(a, b) {
  return b < a.length ? new af(n, p, function() {
    return Q(a[b], on.b(a, b + 1))
  }, n) : n
}
on = function(a, b) {
  switch(arguments.length) {
    case 1:
      return pn.call(this, a);
    case 2:
      return qn.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
on.c = pn;
on.b = qn;
nn = on;
function rn(a) {
  return A(a.item) ? jn.c(a) : nn.c(a)
}
hn._ = function(a) {
  if(a == n) {
    a = ic
  }else {
    var b;
    b = a ? ((b = a.k & 8388608) ? b : a.dc) || (a.k ? 0 : B(Mb, a)) : B(Mb, a);
    a = b ? G(a) : A(A(a) ? a.length : a) ? rn(a) : G(X([a]))
  }
  return a
};
hn.string = function(a) {
  return Wi.c(hn(A(aj(Ym, a)) ? gn(a) : document.createTextNode(a)))
};
A("undefined" != typeof NodeList) && (r = NodeList.prototype, r.dc = k, r.C = function(a) {
  return rn(a)
}, r.Gb = k, r.V = function(a, b) {
  return a.item(b)
}, r.P = function(a, b, c) {
  return a.length <= b ? c : S.b(a, b)
}, r.xc = k, r.F = function(a) {
  return a.length
});
A("undefined" != typeof StaticNodeList) && (r = StaticNodeList.prototype, r.dc = k, r.C = function(a) {
  return rn(a)
}, r.Gb = k, r.V = function(a, b) {
  return a.item(b)
}, r.P = function(a, b, c) {
  return a.length <= b ? c : S.b(a, b)
}, r.xc = k, r.F = function(a) {
  return a.length
});
A("undefined" != typeof HTMLCollection) && (r = HTMLCollection.prototype, r.dc = k, r.C = function(a) {
  return rn(a)
}, r.Gb = k, r.V = function(a, b) {
  return a.item(b)
}, r.P = function(a, b, c) {
  return a.length <= b ? c : S.b(a, b)
}, r.xc = k, r.F = function(a) {
  return a.length
});
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function sn(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var tn = ik && "BackCompat" == document.compatMode, un = document.firstChild.children ? "children" : "childNodes", vn = p;
function wn(a) {
  function b() {
    0 <= m && (x.id = c(m, z).replace(/\\/g, ""), m = -1);
    if(0 <= s) {
      var a = s == z ? n : c(s, z);
      0 > ">~+".indexOf(a) ? x.fa = a : x.mc = a;
      s = -1
    }
    0 <= l && (x.Oa.push(c(l + 1, z).replace(/\\/g, "")), l = -1)
  }
  function c(b, c) {
    return va(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, l = -1, m = -1, s = -1, w = "", v = "", I, z = 0, F = a.length, x = n, N = n;w = v, v = a.charAt(z), z < F;z++) {
    if("\\" != w) {
      if(x || (I = z, x = {Db:n, ob:[], Vb:[], Oa:[], fa:n, mc:n, id:n, $c:function() {
        return vn ? this.af : this.fa
      }}, s = z), 0 <= f) {
        if("]" == v) {
          N.sc ? N.hd = c(i || f + 1, z) : N.sc = c(f + 1, z);
          if((f = N.hd) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            N.hd = f.slice(1, -1)
          }
          x.Vb.push(N);
          N = n;
          f = i = -1
        }else {
          "=" == v && (i = 0 <= "|~^$*".indexOf(w) ? w : "", N.type = i + v, N.sc = c(f + 1, z - i.length), i = z + 1)
        }
      }else {
        0 <= g ? ")" == v && (0 <= j && (N.value = c(g + 1, z)), j = g = -1) : "#" == v ? (b(), m = z + 1) : "." == v ? (b(), l = z) : ":" == v ? (b(), j = z) : "[" == v ? (b(), f = z, N = {}) : "(" == v ? (0 <= j && (N = {name:c(j + 1, z), value:n}, x.ob.push(N)), g = z) : " " == v && w != v && (b(), 0 <= j && x.ob.push({name:c(j + 1, z)}), x.he = x.ob.length || x.Vb.length || x.Oa.length, x.Kf = x.Db = c(I, z), x.af = x.fa = x.mc ? n : x.fa || "*", x.fa && (x.fa = x.fa.toUpperCase()), d.length && 
        d[d.length - 1].mc && (x.ce = d.pop(), x.Db = x.ce.Db + " " + x.Db), d.push(x), x = n)
      }
    }
  }
  return d
}
function xn(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function yn(a) {
  return 1 == a.nodeType
}
function zn(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (vn ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var An = {"*=":function(a, b) {
  return function(c) {
    return 0 <= zn(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == zn(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + zn(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + zn(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + zn(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return zn(c, a) == b
  }
}}, Bn = "undefined" == typeof document.firstChild.nextElementSibling, Cn = !Bn ? "nextElementSibling" : "nextSibling", Dn = !Bn ? "previousElementSibling" : "previousSibling", En = Bn ? yn : Uk;
function Fn(a) {
  for(;a = a[Dn];) {
    if(En(a)) {
      return p
    }
  }
  return k
}
function Gn(a) {
  for(;a = a[Cn];) {
    if(En(a)) {
      return p
    }
  }
  return k
}
function Hn(a) {
  var b = a.parentNode, c = 0, d = b[un], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Cn]) {
    En(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function In(a) {
  return!(Hn(a) % 2)
}
function Jn(a) {
  return Hn(a) % 2
}
var Ln = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Fn
}, "last-child":function() {
  return Gn
}, "only-child":function() {
  return function(a) {
    return!Fn(a) || !Gn(a) ? p : k
  }
}, empty:function() {
  return function(a) {
    for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
      var c = b[a].nodeType;
      if(1 === c || 3 == c) {
        return p
      }
    }
    return k
  }
}, contains:function(a, b) {
  var c = b.charAt(0);
  if('"' == c || "'" == c) {
    b = b.slice(1, -1)
  }
  return function(a) {
    return 0 <= a.innerHTML.indexOf(b)
  }
}, not:function(a, b) {
  var c = wn(b)[0], d = {xb:1};
  "*" != c.fa && (d.fa = 1);
  c.Oa.length || (d.Oa = 1);
  var f = Kn(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Jn
  }
  if("even" == b) {
    return In
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Hn(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return Hn(a) == j
  }
}}, Mn = gk ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return vn ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Kn(a, b) {
  if(!a) {
    return Uk
  }
  var b = b || {}, c = n;
  b.xb || (c = xn(c, yn));
  b.fa || "*" != a.fa && (c = xn(c, function(b) {
    return b && b.tagName == a.$c()
  }));
  b.Oa || Ha(a.Oa, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = xn(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.ob || Ha(a.ob, function(a) {
    var b = a.name;
    Ln[b] && (c = xn(c, Ln[b](b, a.value)))
  });
  b.Vb || Ha(a.Vb, function(a) {
    var b, g = a.sc;
    a.type && An[a.type] ? b = An[a.type](g, a.hd) : g.length && (b = Mn(g));
    b && (c = xn(c, b))
  });
  b.id || a.id && (c = xn(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = Uk);
  return c
}
var Nn = {};
function On(a) {
  var b = Nn[a.Db];
  if(b) {
    return b
  }
  var c = a.ce, c = c ? c.mc : "", d = Kn(a, {xb:1}), f = "*" == a.fa, g = document.getElementsByClassName;
  if(c) {
    if(g = {xb:1}, f && (g.fa = 1), d = Kn(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[Cn];) {
          if(!Bn || yn(a)) {
            (!c || Pn(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[Cn];a;) {
            if(En(a)) {
              if(c && !Pn(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[Cn]
          }
          return b
        }
      }else {
        if(">" == c) {
          var l = d, l = l || Uk, b = function(a, b, c) {
            for(var d = 0, f = a[un];a = f[d++];) {
              En(a) && ((!c || Pn(a, c)) && l(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.he && f ? Uk : Kn(a, {xb:1, id:1}), b = function(b, c) {
        var f = al(b).p(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return sn(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.Oa.length && !tn) {
        var d = Kn(a, {xb:1, Oa:1, id:1}), m = a.Oa.join(" "), b = function(a, b) {
          for(var c = sn(0, b), f, g = 0, i = a.getElementsByClassName(m);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.he ? b = function(b, c) {
          for(var d = sn(0, c), f, g = 0, i = b.getElementsByTagName(a.$c());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = Kn(a, {xb:1, fa:1, id:1}), b = function(b, c) {
          for(var f = sn(0, c), g, i = 0, j = b.getElementsByTagName(a.$c());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return Nn[a.Db] = b
}
var Qn = {}, Rn = {};
function Sn(a) {
  var b = wn(va(a));
  if(1 == b.length) {
    var c = On(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.lc = k
      }
      return a
    }
  }
  return function(a) {
    for(var a = sn(a), c, g, i = b.length, j, l, m = 0;m < i;m++) {
      l = [];
      c = b[m];
      g = a.length - 1;
      0 < g && (j = {}, l.lc = k);
      g = On(c);
      for(var s = 0;c = a[s];s++) {
        g(c, l, j)
      }
      if(!l.length) {
        break
      }
      a = l
    }
    return l
  }
}
var Tn = !!document.querySelectorAll && (!ik || uk("526"));
function Un(a, b) {
  if(Tn) {
    var c = Rn[a];
    if(c && !b) {
      return c
    }
  }
  if(c = Qn[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = k);
  if(Tn && !b && -1 == ">~+".indexOf(c) && (!gk || -1 == a.indexOf(":")) && !(tn && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Rn[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        gk ? c.Ce = k : c.lc = k;
        return c
      }catch(g) {
        return Un(a, k)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return Qn[a] = 2 > g.length ? Sn(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(Sn(d)(a))
    }
    return c
  }
}
var Vn = 0, Wn = gk ? function(a) {
  return vn ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Vn) || Vn : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++Vn)
};
function Pn(a, b) {
  if(!b) {
    return 1
  }
  var c = Wn(a);
  return!b[c] ? b[c] = 1 : 0
}
function Xn(a) {
  if(a && a.lc) {
    return a
  }
  var b = [];
  if(!a || !a.length) {
    return b
  }
  a[0] && b.push(a[0]);
  if(2 > a.length) {
    return b
  }
  Vn++;
  if(gk && vn) {
    var c = Vn + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(gk && a.Ce) {
      try {
        for(d = 1;f = a[d];d++) {
          yn(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = Vn);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != Vn && b.push(f), f._zipIdx = Vn
      }
    }
  }
  return b
}
function Yn(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!ga(a)) {
    return[a]
  }
  if(ga(b) && (b = ga(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  vn = b.contentType && "application/xml" == b.contentType || fk && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (gk ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = Un(a)(b)) && c.lc ? c : Xn(c)
}
Yn.ob = Ln;
ea("goog.dom.query", Yn);
ea("goog.dom.query.pseudos", Yn.ob);
var Zn, ko, lo = n;
function mo(a) {
  return lo.b(dl()[0], a)
}
function no(a, b) {
  h === Zn && (Zn = {}, Zn = function(a, b, f, g) {
    this.Xd = a;
    this.Id = b;
    this.gf = f;
    this.Xe = g;
    this.t = 0;
    this.k = 393216
  }, Zn.kb = k, Zn.ub = function() {
    return O.c("domina.css/t4423")
  }, Zn.vb = function(a, b) {
    return Tb(b, "domina.css/t4423")
  }, Zn.prototype.Qc = function() {
    var a = this;
    return yg.b(function(b) {
      b = Yn(a.Xd, b);
      if(b == n) {
        b = ic
      }else {
        var f;
        f = b ? ((f = b.k & 8388608) ? f : b.dc) || (b.k ? 0 : B(Mb, b)) : B(Mb, b);
        b = f ? G(b) : A(A(b) ? b.length : b) ? rn(b) : G(X([b]))
      }
      return b
    }, hn(a.Id))
  }, Zn.prototype.B = q("Xe"), Zn.prototype.D = function(a, b) {
    return new Zn(this.Xd, this.Id, this.gf, b)
  });
  return new Zn(b, a, lo, n)
}
lo = function(a, b) {
  switch(arguments.length) {
    case 1:
      return mo.call(this, a);
    case 2:
      return no.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lo.c = mo;
lo.b = no;
ko = lo;
var oo = {}, po, gp, hp, ip = n;
function jp(a) {
  if(a ? a.Sc : a) {
    return a.Sc(a)
  }
  var b;
  var c = hp[u(a == n ? n : a)];
  c ? b = c : (c = hp._) ? b = c : e(C("ISelector.select", a));
  return b.call(n, a)
}
function kp(a, b) {
  if(a ? a.Tc : a) {
    return a.Tc(a, b)
  }
  var c;
  var d = hp[u(a == n ? n : a)];
  d ? c = d : (d = hp._) ? c = d : e(C("ISelector.select", a));
  return c.call(n, a, b)
}
function lp(a, b, c) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b, c)
  }
  var d;
  var f = hp[u(a == n ? n : a)];
  f ? d = f : (f = hp._) ? d = f : e(C("ISelector.select", a));
  return d.call(n, a, b, c)
}
ip = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return jp.call(this, a);
    case 2:
      return kp.call(this, a, b);
    case 3:
      return lp.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ip.c = jp;
ip.b = kp;
ip.a = lp;
hp = ip;
var mp, np = n;
function op(a, b) {
  if(a ? a.Vc : a) {
    return a.Vc(a, b)
  }
  var c;
  var d = mp[u(a == n ? n : a)];
  d ? c = d : (d = mp._) ? c = d : e(C("ITransform.apply-transform", a));
  return c.call(n, a, b)
}
function pp(a, b, c) {
  if(a ? a.Wc : a) {
    return a.Wc(a, b, c)
  }
  var d;
  var f = mp[u(a == n ? n : a)];
  f ? d = f : (f = mp._) ? d = f : e(C("ITransform.apply-transform", a));
  return d.call(n, a, b, c)
}
np = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return op.call(this, a, b);
    case 3:
      return pp.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
np.b = op;
np.a = pp;
mp = np;
function qp(a) {
  return A(A(k) ? !jc.b(window.console, h) : k) ? console.log(a) : n
}
Ej.c(0);
Ej.c(Ah);
var rp, sp = n;
function tp(a) {
  h === po && (po = {}, po = function(a, c, d, f) {
    this.aa = a;
    this.Yc = c;
    this.kd = d;
    this.Ve = f;
    this.t = 0;
    this.k = 393216
  }, po.kb = k, po.ub = function() {
    return O.c("enfocus.core/t4338")
  }, po.vb = function(a, c) {
    return Tb(c, "enfocus.core/t4338")
  }, po.prototype.Vc = function(a, c) {
    return this.aa.b ? this.aa.b(c, n) : this.aa.call(n, c, n)
  }, po.prototype.Wc = function(a, c, d) {
    return this.aa.b ? this.aa.b(c, d) : this.aa.call(n, c, d)
  }, po.prototype.B = q("Ve"), po.prototype.D = function(a, c) {
    return new po(this.aa, this.Yc, this.kd, c)
  });
  return new po(function(b, c) {
    var d = a.c ? a.c(b) : a.call(n, b);
    return A(c) ? mp.b(c, b) : d
  }, a, sp, n)
}
function up(a, b) {
  h === gp && (gp = {}, gp = function(a, b, f, g, i) {
    this.aa = a;
    this.Yc = b;
    this.lf = f;
    this.kd = g;
    this.We = i;
    this.t = 0;
    this.k = 393216
  }, gp.kb = k, gp.ub = function() {
    return O.c("enfocus.core/t4341")
  }, gp.vb = function(a, b) {
    return Tb(b, "enfocus.core/t4341")
  }, gp.prototype.Vc = function(a, b) {
    return this.aa.b ? this.aa.b(b, n) : this.aa.call(n, b, n)
  }, gp.prototype.Wc = function(a, b, f) {
    return this.aa.b ? this.aa.b(b, f) : this.aa.call(n, b, f)
  }, gp.prototype.B = q("We"), gp.prototype.D = function(a, b) {
    return new gp(this.aa, this.Yc, this.lf, this.kd, b)
  });
  return new gp(function(c, d) {
    var f = yg.b(function(a) {
      return hn(a)
    }, a), f = b.b ? b.b(c, f) : b.call(n, c, f);
    return A(d) ? mp.b(d, c) : f
  }, b, a, sp, n)
}
sp = function(a, b) {
  switch(arguments.length) {
    case 1:
      return tp.call(this, a);
    case 2:
      return up.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sp.c = tp;
sp.b = up;
rp = sp;
function vp() {
  return rp.c(function(a) {
    return Wi.c(V.b(jl, hn(a)))
  })
}
var wp = Ej.c(Ah);
Kj.q(wp, pd, "\ufdd0'selected", function(a) {
  return a.selected
});
Kj.q(wp, pd, "\ufdd0'checked", function(a) {
  return a.checked
});
var xp, yp = n;
function zp(a) {
  return yp.b("", a)
}
function Ap(a, b) {
  return P.b(U, V.b(function(b) {
    return Nd(b) ? oo.Sd.c ? oo.Sd.c(b) : oo.Sd.call(n, b) : Md(b) ? [U(" "), U(Ji(b).replace("#", [U("#"), U(a)].join("")))].join("") : Hd(b) ? yp.c(b) : Ld(b) ? b.replace("#", [U("#"), U(a)].join("")) : n
  }, b))
}
yp = function(a, b) {
  switch(arguments.length) {
    case 1:
      return zp.call(this, a);
    case 2:
      return Ap.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yp.c = zp;
yp.b = Ap;
xp = yp;
var Bp, Cp = n;
function Dp(a) {
  return Cp.a("", document, a)
}
function Ep(a, b) {
  return Cp.a("", a, b)
}
function Fp(a, b, c) {
  a = xp.b(a, c);
  a = Ld(a) ? a : P.b(U, wg(" ", V.b(Um, a)));
  a = va(a);
  return ko.b(b, a)
}
Cp = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Dp.call(this, a);
    case 2:
      return Ep.call(this, a, b);
    case 3:
      return Fp.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cp.c = Dp;
Cp.b = Ep;
Cp.a = Fp;
Bp = Cp;
function Gp(a, b, c) {
  if(jc.b(1, ed(c))) {
    return mp.b(H(c), b)
  }
  for(c = G(Hg.b(2, c));;) {
    if(c) {
      var d = H(c), f = S.a(d, 0, n), d = S.a(d, 1, n);
      mp.b(A(d) ? d : vp, hp.a(f, b, a));
      c = K(c)
    }else {
      return n
    }
  }
}
function Hp(a, b, c) {
  var d = n;
  t(c) && (d = L(Array.prototype.slice.call(arguments, 2), 0));
  return Gp.call(this, a, b, d)
}
Hp.n = 2;
Hp.j = function(a) {
  var b = H(a), c = H(K(a)), a = J(K(a));
  return Gp(b, c, a)
};
Hp.e = Gp;
function Ip(a, b) {
  return P.q(Hp, "", a, b)
}
function Jp(a, b) {
  var c = n;
  t(b) && (c = L(Array.prototype.slice.call(arguments, 1), 0));
  return Ip.call(this, a, c)
}
Jp.n = 1;
Jp.j = function(a) {
  var b = H(a), a = J(a);
  return Ip(b, a)
};
Jp.e = Ip;
A("undefined" != typeof Text) && (Text.prototype.Qc = function(a) {
  return X([a])
});
String.prototype.Sc = function(a) {
  return hp.a(a, document, "")
};
String.prototype.Tc = function(a, b) {
  return hp.a(a, b, "")
};
String.prototype.Uc = function(a, b, c) {
  return Bp.a(c, b, X([a]))
};
Ug.prototype.Sc = function(a) {
  return hp.a(a, document, "")
};
Ug.prototype.Tc = function(a, b) {
  return hp.a(a, b, "")
};
Ug.prototype.Uc = function(a, b, c) {
  return Bp.a(c, b, a)
};
hp["function"] = function(a) {
  return hp.a(a, document, "")
};
hp["function"] = function(a, b) {
  return hp.a(a, b, "")
};
hp["function"] = function(a, b, c) {
  return a.b ? a.b(b, c) : a.call(n, b, c)
};
mp["function"] = function(a, b) {
  return Wi.c(V.b(a, jc.b(b, window) ? X([b]) : hn(b)))
};
mp["function"] = function(a, b, c) {
  var d = jc.b(b, window) ? X([b]) : hn(b);
  Wi.c(V.b(a, d));
  return A(c) ? mp.b(c, b) : n
};
var Kp = Y(["style"], {style:"visibility: hidden; position: absolute; top: -100px; left: 0px;"}).Xa;
function Lp(a, b, c, d) {
  var f = Math.PI / 180;
  return X([a * Math.cos(b * f) + c, a * Math.sin(b * f) + d])
}
var Mp, Np = n;
function Op(a, b) {
  return Np.a(a, b, "arial")
}
function Pp(a, b, c) {
  var d = fl("div", Kp);
  document.body.appendChild(d);
  a = Wi.c(function g(a) {
    return new af(n, p, function() {
      for(;;) {
        if(G(a)) {
          var j = H(a), l = d;
          l.innerHTML = j;
          ga("font-family") ? pl(l, c, "font-family") : Ma("font-family", sa(pl, l));
          ga("font-size") ? pl(l, b, "font-size") : Ma("font-size", sa(pl, l));
          j = wl(l);
          return Q(j, g(J(a)))
        }
        return n
      }
    }, n)
  }(a));
  jl(d);
  return a
}
Np = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Op.call(this, a, b);
    case 3:
      return Pp.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Np.b = Op;
Np.a = Pp;
Mp = Np;
function Qp(a, b, c, d) {
  var f = new ll;
  f.moveTo(0, 0);
  return a.bb(f, b, c, d)
}
function Rp(a, b) {
  var c = a.pc;
  return A(c) ? a.ud(new Zl(b, c.ca)) : n
}
;var Sp = {};
function Tp(a) {
  function b(a) {
    var b = n;
    t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, b)
  }
  function c(a) {
    return P.b($d, a)
  }
  b.n = 0;
  b.j = function(a) {
    a = G(a);
    return c(a)
  };
  b.e = c;
  return P.a(V, b, V.b("\ufdd0'values", a))
}
;var Up;
function Vp(a, b, c, d) {
  if(a ? a.Wd : a) {
    return a.Wd(0, b, c, d)
  }
  var f;
  var g = Vp[u(a == n ? n : a)];
  g ? f = g : (g = Vp._) ? f = g : e(C("Tooltip.show", a));
  return f.call(n, a, b, c, d)
}
function Wp(a) {
  if(a ? a.Vd : a) {
    return a.Vd()
  }
  var b;
  var c = Wp[u(a == n ? n : a)];
  c ? b = c : (c = Wp._) ? b = c : e(C("Tooltip.hide", a));
  return b.call(n, a)
}
var Yp = function Xp(b, c, d, f, g) {
  var i, j = T(c) ? P.b(M, c) : c, l = E.a(j, "\ufdd0'font", n);
  i = E.a(j, "\ufdd0'tooltip-content", n);
  E.a(j, "\ufdd0'tooltip-padding", n);
  var m = E.a(j, "\ufdd0'tooltip-opacity", n), s = E.a(j, "\ufdd0'tooltip-stoke-color", n), w = E.a(j, "\ufdd0'tooltip-background-color", n), v = E.a(j, "\ufdd0'tooltip-font-color", n), I = E.a(j, "\ufdd0'tooltip-font-size", n), j = E.a(j, "\ufdd0'tooltip-stroke-width", n), z = new Wl(I, l), l = new Yl(w, m), F = new Yl(v, 1), s = new Zl(j, s), x = b.ha(d), v = (new ll).moveTo(0, 0);
  i = Y(["\ufdd0'rec-element", "\ufdd0'group", "\ufdd0'lines"], {"\ufdd0'rec-element":b.bb(v, s, l, x), "\ufdd0'group":x, "\ufdd0'lines":V.b(function() {
    var c;
    c = 0 + z.size / 2;
    return b.cb("", 0, c, 200, c, "left", z, n, F, x)
  }, i)});
  s = Ej.c(Ah);
  v = Ej.c(0);
  l = Ej.c(p);
  m = (new W("\ufdd0'group")).call(n, i);
  h === Up && (Up = {}, Up = function(b, c, d, f, g, i, j, l, m, s, w, v) {
    this.te = b;
    this.Pc = c;
    this.oc = d;
    this.ld = f;
    this.Ee = g;
    this.group = i;
    this.wd = j;
    this.xd = l;
    this.Jd = m;
    this.De = s;
    this.Qe = w;
    this.Ue = v;
    this.t = 0;
    this.k = 393216
  }, Up.kb = k, Up.ub = function() {
    return O.c("enfocus.charts.tooltip/t3138")
  }, Up.vb = function(b, c) {
    return Tb(c, "enfocus.charts.tooltip/t3138")
  }, Up.prototype.Wd = function(b, c, d, f) {
    var g = this;
    qp("showing tooltip");
    Rf.b(f, Bb(g.Pc)) && Kj.b(g.Pc, function() {
      Kj.b(g.wd, function() {
        var b = g.Jd, c = g.ld, d = T(c) ? P.b(M, c) : c, i = E.a(d, "\ufdd0'tooltip-padding", n), j = E.a(d, "\ufdd0'tooltip-font-size", n), l = E.a(d, "\ufdd0'font", n), m = T(b) ? P.b(M, b) : b, b = E.a(m, "\ufdd0'group", n), d = E.a(m, "\ufdd0'lines", n), m = E.a(m, "\ufdd0'rec-element", n), c = (new W("\ufdd0'tooltip-content")).call(n, c), c = V.b(function(b) {
          var c = S.a(b, 0, n), d;
          a: {
            d = 1;
            for(b = G(b);;) {
              var g = b;
              if(A(g ? 0 < d : g)) {
                d -= 1, b = K(b)
              }else {
                d = b;
                break a
              }
            }
            d = h
          }
          return P.a(De, c, V.b(function(b) {
            return b.c ? b.c(f) : b.call(n, f)
          }, d))
        }, c), j = Mp.a(c, j, l), s = H(j).height, l = 2 * i + ab.a(function(b, c) {
          return b + c.height
        }, 0, j), w = 2 * i + ab.a(function(b, c) {
          return b + c.width
        }, 0, j), v = new ll;
        v.moveTo(5, 0);
        v.lineTo(w - 5, 0);
        v.Ra(w, 0, w, 0, w, 5);
        v.lineTo(w, l - 5);
        v.Ra(w, l, w, l, w - 5, l);
        v.lineTo(5, l);
        v.Ra(0, l, 0, l, 0, l - 5);
        v.lineTo(0, 5);
        v.Ra(0, 0, 0, 0, 5, 0);
        v.close();
        qp(H(j));
        qp(R.e(L([c, w, l], 0)));
        m.ya(v);
        b.Va(w, l);
        Wi.c(V.q(function(b, c, d) {
          Il(b, i, i + d * s);
          return b.vd(c)
        }, d, c, Mi.c(ed(c))));
        return X([w, l])
      });
      return f
    });
    var i = Bb(g.wd), b = S.a(i, 0, n), i = S.a(i, 1, n), j = 3 + c + b > g.te, d = X([(j ? j : 0 > d - i - 3) ? c - b - 3 : c + 3, 0 > d - i ? d + 3 : d - i - 3]), c = S.a(d, 0, n), d = S.a(d, 1, n);
    Il(g.xd, c, d);
    return Kj.b(g.oc, ca(k))
  }, Up.prototype.Vd = function() {
    var b = this;
    Kj.b(b.oc, ca(p));
    var c = (new W("\ufdd0'tooltip-hide-delay")).call(n, b.ld);
    return fm(function() {
      return Ua(Bb(b.oc)) ? (qp("hiding tooltip"), Il(b.xd, -100, -100)) : n
    }, c)
  }, Up.prototype.B = q("Ue"), Up.prototype.D = function(b, c) {
    return new Up(this.te, this.Pc, this.oc, this.ld, this.Ee, this.group, this.wd, this.xd, this.Jd, this.De, this.Qe, c)
  });
  return new Up(f, s, l, c, b, d, v, m, i, Xp, g, n)
};
function Zp(a) {
  return jc.b((new W("\ufdd0'chart-type")).call(n, a), "\ufdd0'bar")
}
function $p(a, b, c, d, f) {
  function g(a) {
    A(b) && Rp(b, a);
    return Rp(c, a)
  }
  Rk(a, c, f);
  var i = yc((new W("\ufdd0'tooltip")).call(n, d)), j = (new W("\ufdd0'coords")).call(n, a), l = S.a(j, 0, n), j = S.a(j, 1, n), d = A(Zp(f)) ? X([l + (new W("\ufdd0'bar-width")).call(n, d) / 2, j]) : X([l, j]), m = S.a(d, 0, n), s = S.a(d, 1, n);
  return Sk(c, X(["\ufdd0'mouseover", function() {
    A(i) && Vp(i, m, s, a);
    return g(2 * (new W("\ufdd0'stroke-width")).call(n, f))
  }, "\ufdd0'mouseout", function() {
    A(i) && Wp(i);
    return g((new W("\ufdd0'stroke-width")).call(n, f))
  }]))
}
function aq(a, b, c, d) {
  c -= a;
  d -= b;
  a = c / 2 + a;
  return X([a, b, 0.70710678118 * (c - d) + a, 0.70710678118 * (c + d) + b])
}
var bq = Y(["\ufdd0'line", "\ufdd0'bar"], {"\ufdd0'line":function(a, b, c, d) {
  var f = T(d) ? P.b(M, d) : d, d = E.a(f, "\ufdd0'chart-type", n);
  E.a(f, "\ufdd0'stroke?", n);
  var g = E.a(f, "\ufdd0'stroke-width", n), i = E.a(f, "\ufdd0'fill?", n), j = E.a(f, "\ufdd0'fill-opacity", n), l = E.a(f, "\ufdd0'series-colors", n), m = A(i) ? function(a) {
    return new Yl(a, j)
  } : ca(n), f = V.a(function(b, d) {
    return Qp(a, new Zl(g, d), n, c)
  }, b, l), b = A(i) ? V.a(function(b, d) {
    return Qp(a, n, m.c ? m.c(d) : m.call(n, d), c)
  }, b, l) : n;
  return jc.b(d, "\ufdd0'bar-chart") ? f : X([f, b])
}, "\ufdd0'bar":function(a, b, c, d) {
  var f = T(d) ? P.b(M, d) : d, d = E.a(f, "\ufdd0'chart-type", n);
  E.a(f, "\ufdd0'stroke?", n);
  var g = E.a(f, "\ufdd0'stroke-width", n), i = E.a(f, "\ufdd0'fill?", n), j = E.a(f, "\ufdd0'fill-opacity", n), l = E.a(f, "\ufdd0'series-colors", n), m = A(i) ? function(a) {
    return new Yl(a, j)
  } : ca(n), f = V.a(function(b, d) {
    var f = T(b) ? P.b(M, b) : b, f = E.a(f, "\ufdd0'values", n);
    return V.b(function() {
      return Qp(a, new Zl(g, d), n, c)
    }, f)
  }, b, l), b = A(i) ? V.a(function(b, d) {
    var f = T(b) ? P.b(M, b) : b, f = E.a(f, "\ufdd0'values", n);
    return V.b(function() {
      return Qp(a, n, m.c ? m.c(d) : m.call(n, d), c)
    }, f)
  }, b, l) : n;
  return jc.b(d, "\ufdd0'bar-chart") ? f : X([f, b])
}});
function cq(a, b) {
  var c = fh(a), d = ed(c);
  H(a);
  var f = b / 2;
  return yg.b(function(a) {
    var b = E.a(c, a - 1, n), d = S.a(b, 0, n), b = S.a(b, 1, n), l = E.a(c, a, n), a = S.a(l, 0, n), l = S.a(l, 1, n), d = d < a ? a - f : a + f;
    return X([d, b, d, l, a, l])
  }, Mi.b(1, d))
}
var dq, eq = n;
function fq(a, b, c, d, f, g) {
  var i = ng.b(ed((new W("\ufdd0'values")).call(n, H(g))), 0);
  return eq.Pa(a, b, c, d, f, g, i)
}
function gq(a, b, c, d, f, g, i) {
  var j = T(b) ? P.b(M, b) : b, l = E.a(j, "\ufdd0'scale-factor", n);
  E.a(j, "\ufdd0'graph-range", n);
  var m = E.a(j, "\ufdd0'graph-min", n);
  if(Ed(g)) {
    return n
  }
  var j = H(g), s = T(j) ? P.b(M, j) : j, j = E.a(s, "\ufdd0'values", n), w = E.a(s, "\ufdd0'label", n), s = V.a(function(a, b) {
    return a + b
  }, j, i), j = V.q(function(b, d, f) {
    return X([a + l * m - c * l * b, a + l * m - c * l * d, b, f])
  }, s, i, j);
  qp(R.e(L(["POINTS: ", j, d, i, s], 0)));
  return ad.b(eq.Pa(a, b, c, d, f, J(g), s), V.a(function(a, b) {
    var c = S.a(a, 0, n), d = S.a(a, 1, n), g = S.a(b, 0, n), i = S.a(b, 1, n), j = S.a(b, 2, n), l = S.a(b, 3, n);
    return Y("\ufdd0'coords \ufdd0'bottom-coords \ufdd0'series-label \ufdd0'value \ufdd0'total-value \ufdd0'category".split(" "), {"\ufdd0'coords":X([c + f, g]), "\ufdd0'bottom-coords":X([c + f, i]), "\ufdd0'series-label":w, "\ufdd0'value":l, "\ufdd0'total-value":j, "\ufdd0'category":d})
  }, d, j))
}
eq = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return fq.call(this, a, b, c, d, f, g);
    case 7:
      return gq.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
eq.la = fq;
eq.Pa = gq;
dq = eq;
function hq(a, b, c, d, f) {
  b = T(d) ? P.b(M, d) : d;
  a = E.a(b, "\ufdd0'categories", n);
  E.a(b, "\ufdd0'series-colors", n);
  E.a(b, "\ufdd0'stroke-width", n);
  var g = E.a(b, "\ufdd0'fill?", n);
  E.a(b, "\ufdd0'fill-opacity", n);
  var b = T(c) ? P.b(M, c) : c, i = E.a(b, "\ufdd0'scale", n);
  E.a(b, "\ufdd0'y-title-padding", n);
  E.a(b, "\ufdd0'base-coords", n);
  var j = E.a(b, "\ufdd0'scale-height", n);
  E.a(b, "\ufdd0'series-group", n);
  var l = E.a(b, "\ufdd0'series-elements", n);
  E.a(b, "\ufdd0'scale-width", n);
  var m = E.a(b, "\ufdd0'x-label-space", n), s = E.a(b, "\ufdd0'bar-width", n), w = E.a(b, "\ufdd0'x-offset", n);
  E.a(b, "\ufdd0'y-label-width", n);
  var b = E.a(b, "\ufdd0'stacks", n), v = T(i) ? P.b(M, i) : i;
  E.a(v, "\ufdd0'graph-range", n);
  E.a(v, "\ufdd0'graph-min", n);
  E.a(v, "\ufdd0'scale-factor", n);
  var v = S.a(l, 0, n), l = S.a(l, 1, n), I = Mi.c(ed(a)), z = V.a(function(a, b) {
    return X([w + m * b, a])
  }, a, I), a = V.b(function(a) {
    return s / 2 + s * a
  }, Mi.c(ed(b))), a = yg.e(function(a, b) {
    return dq.la(j, i, f, z, b, a)
  }, b, L([a], 0));
  Wi.c(V.q(function(a, b, c) {
    return Wi.c(V.q(function(a, b, c) {
      var d = T(a) ? P.b(M, a) : a, f = E.a(d, "\ufdd0'coords", n), a = S.a(f, 0, n), f = S.a(f, 1, n), i = E.a(d, "\ufdd0'bottom-coords", n), d = S.a(i, 0, n), i = S.a(i, 1, n), j = new ll;
      j.moveTo(d, i);
      j.lineTo(a, f, a + s, f, d + s, i);
      b.ya(j);
      return A(g) ? (b = new ll, b.moveTo(d, i), b.lineTo(a, f, a + s, f, d + s, i), b.close(), c.ya(b)) : n
    }, a, b, c))
  }, a, v, A(g) ? l : v));
  return Wi.c(V.a(function(a, b) {
    return $p(a, n, b, c, d)
  }, Fg(a), Fg(l)))
}
function iq(a, b, c, d, f) {
  var g = T(d) ? P.b(M, d) : d, b = E.a(g, "\ufdd0'stroke-width", n), i = E.a(g, "\ufdd0'series-colors", n), j = E.a(g, "\ufdd0'value-dot?", n), l = E.a(g, "\ufdd0'dot-radius", n), m = E.a(g, "\ufdd0'bezier-curve?", n), s = E.a(g, "\ufdd0'dot-stroke-color", n);
  E.a(g, "\ufdd0'fill-opacity", n);
  var w = E.a(g, "\ufdd0'categories", n), v = E.a(g, "\ufdd0'fill?", n), g = T(c) ? P.b(M, c) : c, I = E.a(g, "\ufdd0'scale", n);
  E.a(g, "\ufdd0'base-coords", n);
  var z = E.a(g, "\ufdd0'scale-height", n), F = E.a(g, "\ufdd0'series-group", n), x = E.a(g, "\ufdd0'series-elements", n);
  E.a(g, "\ufdd0'scale-width", n);
  var N = E.a(g, "\ufdd0'x-label-space", n), ra = E.a(g, "\ufdd0'x-offset", n), g = E.a(g, "\ufdd0'stacks", n), la = T(I) ? P.b(M, I) : I;
  E.a(la, "\ufdd0'graph-range", n);
  E.a(la, "\ufdd0'graph-min", n);
  E.a(la, "\ufdd0'scale-factor", n);
  var la = S.a(x, 0, n), x = S.a(x, 1, n), Ba = Mi.c(ed(w)), La = V.a(function(a, b) {
    return X([ra + N * b, a])
  }, w, Ba), w = yg.b(function(a) {
    return dq.la(z, I, f, La, 0, a)
  }, g);
  Wi.c(V.q(function(a, b, c) {
    var d = new ll, f = H(a), f = T(f) ? P.b(M, f) : f, g = E.a(f, "\ufdd0'coords", n), f = S.a(g, 0, n), g = S.a(g, 1, n), i = V.b("\ufdd0'coords", a), j = Ne(V.b("\ufdd0'bottom-coords", a)), l = H(j), a = S.a(l, 0, n), l = S.a(l, 1, n), i = A(m) ? cq(i, N) : Fg(i), j = A(m) ? cq(j, N) : Fg(j), i = Xa.c(i), j = Xa.c(j);
    d.moveTo(f, g);
    A(m) ? d.Ra.apply(d, i) : d.lineTo.apply(d, i);
    b.ya(d);
    return A(v) ? (b = new ll, b.moveTo(f, g), A(m) ? (b.Ra.apply(b, i), b.lineTo(a, l), b.Ra.apply(b, j)) : (b.lineTo.apply(b, i), b.lineTo(a, l), b.lineTo.apply(b, j)), b.close(), c.ya(b)) : n
  }, w, la, A(v) ? x : la));
  if(A(A(j) ? jc.b(f, 1) : j)) {
    var fd = new Zl(b, s);
    return Wi.c(V.q(function(b, f, g) {
      for(b = G(b);;) {
        if(b) {
          var i = H(b), j = T(i) ? P.b(M, i) : i, i = j, m = E.a(j, "\ufdd0'coords", n), j = S.a(m, 0, n), m = S.a(m, 1, n), j = a.Rc(j, m, l, l, fd, new Yl(g, 1), F);
          $p(i, f, j, c, d);
          b = K(b)
        }else {
          return n
        }
      }
    }, w, la, i))
  }
  return n
}
function jq(a, b, c) {
  function d(a) {
    return cj.X ? cj.X(z, b, F, c, a) : cj.call(n, z, b, F, c, a)
  }
  function f(a) {
    return A((new W("\ufdd0'stack")).call(n, a)) ? (new W("\ufdd0'stack")).call(n, a) : Tj.z()
  }
  var g = T(c) ? P.b(M, c) : c, i = E.a(g, "\ufdd0'padding", n), j = E.a(g, "\ufdd0'chart-type", n), l = E.a(g, "\ufdd0'width", n), m = E.a(g, "\ufdd0'height", n), s = E.a(g, "\ufdd0'animation?", n), w = E.a(g, "\ufdd0'animation-duration", n), v = E.a(g, "\ufdd0'tick-size", n), I = E.a(g, "\ufdd0'grid-color", n), z = Im(l, m), F, x = T(c) ? P.b(M, c) : c;
  E.a(x, "\ufdd0'stroke-width", n);
  var N = E.a(x, "\ufdd0'font", n);
  E.a(x, "\ufdd0'series-colors", n);
  var ra = E.a(x, "\ufdd0'height", n);
  E.a(x, "\ufdd0'scale-title-font-color", n);
  var la = E.a(x, "\ufdd0'scale-title-font-size", n), Ba = E.a(x, "\ufdd0'x-scale-title", n), La = E.a(x, "\ufdd0'font-size", n), fd = E.a(x, "\ufdd0'padding", n), rq = E.a(x, "\ufdd0'width", n), $n = E.a(x, "\ufdd0'categories", n), ao = E.a(x, "\ufdd0'scale-min", n);
  E.a(x, "\ufdd0'fill-opacity", n);
  var bo = E.a(x, "\ufdd0'scale-max", n), sq = E.a(x, "\ufdd0'font-color", n);
  E.a(x, "\ufdd0'categories", n);
  var tq = E.a(x, "\ufdd0'tooltip?", n);
  E.a(x, "\ufdd0'fill?", n);
  E.a(x, "\ufdd0'stroke?", n);
  var Af = E.a(x, "\ufdd0'y-scale-title", n), co = rq - 2 * fd, io = ra - 2 * fd, jo = Mp.a($n, La, N), Bf = H(jo).height, eo = A(bo) ? bo : P.b(de, V.b(function(a) {
    return P.b(de, (new W("\ufdd0'values")).call(n, a))
  }, b)), fo = A(ao) ? ao : P.b(ie, V.b(function(a) {
    return P.b(ie, (new W("\ufdd0'values")).call(n, a))
  }, b)), $i = P.b(de, V.b(function(a) {
    return a.width
  }, Mp.b(X([eo, fo]), La))), go = Mp.a(X([Ba, Af]), la, N), ho = S.a(go, 0, n), xq = S.a(go, 1, n), ej = A(Af) ? xq.height : dj.height.c ? dj.height.c(ho) : dj.height.call(n, ho), qo = A(Ba) ? ej + 5 : 0, fj = A(Af) ? ej + 20 : 0, gj = co - (fj + $i), $g = gj / ed($n), ro = A(Zp(c)) ? gj : gj - $g, so = ab.a(function(a, b) {
    return a > b.width ? a : b
  }, 0, jo), to = so < $g, uo = to ? 0.70710678118 * so + Bf : Bf, ah = io - (qo + uo), yq = new Wl(La, N), zq = new Yl(sq, 1), ye = z.ha(), Aq = z.ha(ye), Bq = z.ha(ye), Cq = z.ha(ye), vo = z.ha(ye), wo;
  wo = ab.a(function(a, b) {
    var c = f.c ? f.c(b) : f.call(n, b);
    return pd.a(a, c, ad.b(E.a(a, c, dh), b))
  }, Ah, b);
  var Df;
  Df = G(V.b($c, wo));
  var Ef, xo = T(c) ? P.b(M, c) : c, yo = E.a(xo, "\ufdd0'scale-max", n), zo = E.a(xo, "\ufdd0'scale-min", n), Ao = A(yo) ? yo : P.b(de, V.b(function(a) {
    return P.b(de, Tp(a))
  }, Df)), Bo = A(zo) ? zo : P.b(ie, V.b(function(a) {
    return P.b(ie, Tp(a))
  }, Df)), Co = (Ao - Bo) / Math.floor(ah / Bf), Dq = Math.ceil(Math.log(Co) - 1), Do = Math.pow(10, Dq), Bc = Math.ceil(Co / Do) * Do, hj = Bc * Math.floor(Bo / Bc), Eo = Bc * Math.ceil(1 + Ao / Bc), Fo = Eo - hj, ij = Fo / Bc, Eq = V.b(function(a) {
    return"" + U(hj + Bc * a)
  }, Mi.c(ij)), Go = ah / (ij - 1);
  Ef = Y("\ufdd0'y-num-steps \ufdd0'y-step-value \ufdd0'y-labels \ufdd0'graph-min \ufdd0'graph-max \ufdd0'graph-range \ufdd0'step-height \ufdd0'scale-factor".split(" "), {"\ufdd0'y-num-steps":ij, "\ufdd0'y-step-value":Bc, "\ufdd0'y-labels":Eq, "\ufdd0'graph-min":hj, "\ufdd0'graph-max":Eo, "\ufdd0'graph-range":Fo, "\ufdd0'step-height":Go, "\ufdd0'scale-factor":Go / Bc});
  var dj = qp(R.e(L([Ef], 0)));
  (new W("\ufdd0'graph-min")).call(n, Ef);
  (new W("\ufdd0'graph-range")).call(n, Ef);
  var Fq = fj + $i, Gq = A(tq) ? new Xj(Ej.c(Y(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":p, "\ufdd0'value":n})), function() {
    return Yp(z, c, ye, ro, ah)
  }) : n, Hq = (bq.c ? bq.c((new W("\ufdd0'chart-type")).call(n, c)) : bq.call(n, (new W("\ufdd0'chart-type")).call(n, c))).call(n, z, b, vo, c), Iq = A(Zp(c)) ? $g / (ed(Df) + 1) : n;
  F = Y("\ufdd0'x-label-space \ufdd0'pheight \ufdd0'series-group \ufdd0'x-label-group \ufdd0'half-label-height \ufdd0'x-label-area-height \ufdd0'y-label-group \ufdd0'scale-title-height \ufdd0'bar-width \ufdd0'series-elements \ufdd0'scale-height \ufdd0'label-font \ufdd0'x-offset \ufdd0'label-fill \ufdd0'min-y \ufdd0'y-label-width \ufdd0'stacks \ufdd0'pwidth \ufdd0'main-group \ufdd0'x-label-rotate? \ufdd0'tooltip \ufdd0'scale-width \ufdd0'max-y \ufdd0'x-title-padding \ufdd0'grid-group \ufdd0'scale \ufdd0'label-height \ufdd0'y-title-padding".split(" "), 
  {"\ufdd0'x-label-space":$g, "\ufdd0'pheight":io, "\ufdd0'series-group":vo, "\ufdd0'x-label-group":Aq, "\ufdd0'half-label-height":Bf / 2, "\ufdd0'x-label-area-height":uo, "\ufdd0'y-label-group":Bq, "\ufdd0'scale-title-height":A(A(Af) ? Af : Ba) ? ej : 0, "\ufdd0'bar-width":Iq, "\ufdd0'series-elements":Hq, "\ufdd0'scale-height":ah, "\ufdd0'label-font":yq, "\ufdd0'x-offset":Fq, "\ufdd0'label-fill":zq, "\ufdd0'min-y":fo, "\ufdd0'y-label-width":$i, "\ufdd0'stacks":Df, "\ufdd0'pwidth":co, "\ufdd0'main-group":ye, 
  "\ufdd0'x-label-rotate?":to, "\ufdd0'tooltip":Gq, "\ufdd0'scale-width":ro, "\ufdd0'max-y":eo, "\ufdd0'x-title-padding":qo, "\ufdd0'grid-group":Cq, "\ufdd0'scale":Ef, "\ufdd0'label-height":Bf, "\ufdd0'y-title-padding":fj});
  var gd = T(F) ? P.b(M, F) : F, Jq = E.a(gd, "\ufdd0'y-title-padding", n), Kq = E.a(gd, "\ufdd0'y-label-width", n), jj = E.a(gd, "\ufdd0'main-group", n), Lq = E.a(gd, "\ufdd0'x-label-space", n), Mq = E.a(gd, "\ufdd0'x-label-group", n), ze = E.a(gd, "\ufdd0'scale-height", n), Nq = E.a(gd, "\ufdd0'scale-width", n), Cc = Jq + Kq, Ho = new Zl(1, I), kj = new ll, lj = new ll, Io, Jo = (new W("\ufdd0'ease-fn")).call(n, c);
  Io = A(Jo) ? Jo : Sp.Te;
  var Ff = A(s) ? new Qm([0], [1], w, Io) : n, cj = jc.b(j, "\ufdd0'line") ? iq : jc.b(j, "\ufdd0'bar") ? hq : n;
  a: {
    var hd = T(F) ? P.b(M, F) : F, Oq = E.a(hd, "\ufdd0'scale-height", n), Pq = E.a(hd, "\ufdd0'scale-width", n), Ko = E.a(hd, "\ufdd0'x-offset", n);
    E.a(hd, "\ufdd0'x-label-space", n);
    for(var Qq = E.a(hd, "\ufdd0'tick-size", n), mj = E.a(hd, "\ufdd0'scale", n), Rq = E.a(hd, "\ufdd0'grid-group", n), Lo = T(mj) ? P.b(M, mj) : mj, Sq = E.a(Lo, "\ufdd0'y-num-steps", n), Tq = E.a(Lo, "\ufdd0'step-height", n), bh = G(Mi.c(Sq));;) {
      if(bh) {
        var Uq = H(bh), Mo = new ll, Vq = Ko - Qq, Wq = Ko + Pq, No = Oq - Tq * Uq, Xq = new Zl(1, (new W("\ufdd0'grid-color")).call(n, c)), Oo = Mo;
        Oo.moveTo(Vq, No);
        Oo.lineTo(Wq, No);
        z.bb(Mo, Xq, n, Rq);
        bh = K(bh)
      }else {
        break a
      }
    }
  }
  a: {
    var Ae = T(F) ? P.b(M, F) : F, Yq = E.a(Ae, "\ufdd0'scale-height", n);
    E.a(Ae, "\ufdd0'scale-width", n);
    var Zq = E.a(Ae, "\ufdd0'x-offset", n), $q = E.a(Ae, "\ufdd0'x-label-space", n), ar = E.a(Ae, "\ufdd0'tick-size", n), br = E.a(Ae, "\ufdd0'grid-group", n), Po = ed((new W("\ufdd0'categories")).call(n, c)), Qo = A(Zp(c)) ? Po + 1 : Po;
    qp(Qo);
    for(var ch = G(Mi.c(Qo));;) {
      if(ch) {
        var cr = H(ch), Ro = new ll, So = Yq + ar, nj = Zq + $q * cr, dr = new Zl(1, (new W("\ufdd0'grid-color")).call(n, c));
        qp(R.e(L(["x-grid:", So, 0, nj], 0)));
        var To = Ro;
        To.moveTo(nj, So);
        To.lineTo(nj, 0);
        z.bb(Ro, dr, n, br);
        ch = K(ch)
      }else {
        break a
      }
    }
  }
  var Uo = T(F) ? P.b(M, F) : F, oj = E.a(Uo, "\ufdd0'x-label-space", n), er = E.a(Uo, "\ufdd0'rotate?", n), fr = T(c) ? P.b(M, c) : c, Vo = E.a(fr, "\ufdd0'categories", n), gr = V.b(function(a) {
    return A(er) ? oj * a + oj / 2 : oj * a
  }, Mi.c(ed(Vo)));
  Wi.c(V.a(function(a, b) {
    var c = T(F) ? P.b(M, F) : F, d = E.a(c, "\ufdd0'x-label-rotate?", n), f = E.a(c, "\ufdd0'label-font", n), g = E.a(c, "\ufdd0'label-fill", n), i = E.a(c, "\ufdd0'x-label-group", n), j = E.a(c, "\ufdd0'x-label-space", n), c = E.a(c, "\ufdd0'half-label-height", n), j = X([b, c, b + j, c]), l = A(d) ? P.b(aq, j) : j, j = S.a(l, 0, n), c = S.a(l, 1, n), m = S.a(l, 2, n), l = S.a(l, 3, n);
    return z.cb(a, j, c, m, l, A(d) ? "left" : "center", f, n, g, i)
  }, Vo, gr));
  var Gf = T(c) ? P.b(M, c) : c, Wo = E.a(Gf, "\ufdd0'y-scale-title", n), Xo = E.a(Gf, "\ufdd0'x-scale-title", n), hr = E.a(Gf, "\ufdd0'font", n), ir = E.a(Gf, "\ufdd0'scale-title-font-color", n), jr = E.a(Gf, "\ufdd0'scale-title-font-size", n), Dc = T(F) ? P.b(M, F) : F, Yo = E.a(Dc, "\ufdd0'pheight", n), kr = E.a(Dc, "\ufdd0'scale-width", n), lr = E.a(Dc, "\ufdd0'scale-title-height", n), Zo = E.a(Dc, "\ufdd0'main-group", n), mr = E.a(Dc, "\ufdd0'y-title-padding", n), nr = E.a(Dc, "\ufdd0'y-label-width", 
  n), or = E.a(Dc, "\ufdd0'x-lable-area-height", n), pr = E.a(Dc, "\ufdd0'x-title-padding", n), $o = mr + nr, qr = $o + kr, rr = Yo - (pr + or), pj = lr / 2, ap = new Yl(ir, 1), bp = new Wl(jr, hr);
  A(Wo) && z.cb(Wo, pj, rr, pj, 0, "center", bp, n, ap, Zo);
  if(A(Xo)) {
    var cp = Yo - pj;
    z.cb(Xo, $o, cp, qr, cp, "center", bp, n, ap, Zo)
  }
  var dp = T(c) ? P.b(M, c) : c, sr = E.a(dp, "\ufdd0'font-size", n), tr = E.a(dp, "\ufdd0'tick-size", n), Ec = T(F) ? P.b(M, F) : F, qj = E.a(Ec, "\ufdd0'scale", n), ur = E.a(Ec, "\ufdd0'scale-height", n);
  E.a(Ec, "\ufdd0'y-title-padding", n);
  E.a(Ec, "\ufdd0'y-label-width", n);
  var ep = E.a(Ec, "\ufdd0'label-font", n), vr = E.a(Ec, "\ufdd0'label-fill", n), wr = E.a(Ec, "\ufdd0'y-label-group", n), xr = E.a(Ec, "\ufdd0'x-offset", n), Hf = T(qj) ? P.b(M, qj) : qj, yr = E.a(Hf, "\ufdd0'y-num-steps", n);
  E.a(Hf, "\ufdd0'y-step-value", n);
  var fp = E.a(Hf, "\ufdd0'y-labels", n);
  E.a(Hf, "\ufdd0'graph-min", n);
  var zr = E.a(Hf, "\ufdd0'step-height", n), Ar = Mp.a(fp, sr, ep), Br = V.a(function(a, b) {
    return X([xr - a.width - tr - 3, ur - zr * b, a.width])
  }, Ar, Mi.c(yr));
  ed(V.a(function(a, b) {
    var c = S.a(b, 0, n), d = S.a(b, 1, n), f = S.a(b, 2, n);
    return z.cb(a, c, d, c + f, d, "right", ep, n, vr, wr)
  }, fp, Br));
  A(Ff) ? (Jk(Ff, "animate", function(a) {
    return d(a.x)
  }), Jk(Ff, "end", function() {
    return d(1)
  })) : d(1);
  lj.moveTo(Cc, ze + v);
  lj.lineTo(Cc, ze, Cc, 0);
  kj.moveTo(Cc - v, ze);
  kj.lineTo(Cc - v, ze, Cc + Nq, ze);
  z.bb(lj, Ho, n, jj);
  z.bb(kj, Ho, n, jj);
  var Cr = A(Zp(c)) ? Cc : Cc - Lq / 2;
  Il(Mq, Cr, ze + 3);
  Il(jj, i, i);
  z.od(a);
  return A(Ff) ? Ff.play() : n
}
;function kq(a, b) {
  var c = T(a) ? P.b(M, a) : a, d = E.a(c, "\ufdd0'start-angle", n), f = E.a(c, "\ufdd0'seg-angle", n), g = E.a(c, "\ufdd0'selected", n), i = T(b) ? P.b(M, b) : b, c = E.a(i, "\ufdd0'width", n), j = E.a(i, "\ufdd0'height", n), l = E.a(i, "\ufdd0'radius", n), c = c / 2, j = j / 2, i = new ll, g = A(g) ? l + 10 : l, m = Lp(g, d, c, j), l = S.a(m, 0, n), m = S.a(m, 1, n);
  i.moveTo(l, m);
  i.arcTo(g, g, d, f);
  i.lineTo(c, j);
  i.close();
  return i
}
function lq(a, b, c) {
  a.re();
  a.ha();
  ab.a(function(a, f) {
    var g = T(c) ? P.b(M, c) : c, i = E.a(g, "\ufdd0'total", n), j = E.a(g, "\ufdd0'stroke?", n), l = E.a(g, "\ufdd0'show-labels?", n);
    E.a(g, "\ufdd0'group", n);
    var g = T(f) ? P.b(M, f) : f, m = E.a(g, "\ufdd0'value", n);
    E.a(g, "\ufdd0'color", n);
    var s = E.a(g, "\ufdd0'slice-element", n), i = 360 * b * (m / i);
    A(j) && ((new W("\ufdd0'stroke-width")).call(n, c), (new W("\ufdd0'stroke-color")).call(n, c));
    var w = pd.e(f, "\ufdd0'start-angle", a, L(["\ufdd0'seg-angle", i], 0)), j = kq(w, c);
    if(A(l)) {
      var v = T(w) ? P.b(M, w) : w, I = E.a(v, "\ufdd0'start-angle", n), z = E.a(v, "\ufdd0'seg-angle", n);
      E.a(v, "\ufdd0'label", n);
      var l = E.a(v, "\ufdd0'label-element", n), g = E.a(v, "\ufdd0'pointer-element", n), m = E.a(v, "\ufdd0'label-width", n), v = E.a(v, "\ufdd0'label-height", n), F = T(c) ? P.b(M, c) : c, x = E.a(F, "\ufdd0'radius", n);
      E.a(F, "\ufdd0'font-color", n);
      E.a(F, "\ufdd0'font-size", n);
      E.a(F, "\ufdd0'font", n);
      var N = E.a(F, "\ufdd0'width", n), ra = E.a(F, "\ufdd0'height", n);
      E.a(F, "\ufdd0'group", n);
      var N = N / 2, la = ra / 2, Ba = I + z / 2, z = Lp(x + 2, Ba, N, la), I = S.a(z, 0, n), z = S.a(z, 1, n), F = Lp(x + 10, Ba, N, la), ra = S.a(F, 0, n), F = S.a(F, 1, n), N = Lp(x + 14, Ba, N, la), x = S.a(N, 0, n), N = S.a(N, 1, n), m = 180 < ((Ba + 90) % 360 + 360) % 360 ? x - m : x, v = N - v / 2, x = new ll;
      x.moveTo(I, z);
      x.lineTo(I, z, ra, F);
      g.ya(x);
      Il(l, m + 100, v + 100)
    }
    s.ya(j);
    if(jc.b(b, 1)) {
      Rk(w, s, c);
      if(A((new W("\ufdd0'slice-pop")).call(n, c))) {
        var La = function(a) {
          return s.ya(kq.b ? kq.b(pd.a(w, "\ufdd0'selected", a), c) : kq.call(n, pd.a(w, "\ufdd0'selected", a), c))
        };
        Sk(s, X(["\ufdd0'mouseover", function() {
          return La(k)
        }, "\ufdd0'mouseout", function() {
          return La(p)
        }]))
      }
      if(A((new W("\ufdd0'tooltip")).call(n, c))) {
        var fd = (new W("\ufdd0'tooltip")).call(n, c);
        Sk(s, X(["\ufdd0'mousemove", function(a) {
          var b = a.clientX, a = a.clientY, c;
          c = s.da.S;
          var d = new Zk;
          if(1 == c.nodeType) {
            if(rl(c)) {
              var f = sl(c);
              d.x = f.left;
              d.y = f.top
            }else {
              f = kl(al(c));
              var g, i = cl(c), j = ql(c, "position"), l = hk && i.getBoxObjectFor && !c.getBoundingClientRect && "absolute" == j && (g = i.getBoxObjectFor(c)) && (0 > g.screenX || 0 > g.screenY), m = new Zk(0, 0), v;
              g = i ? cl(i) : document;
              if(v = gk) {
                if(v = !wk(9)) {
                  v = "CSS1Compat" != al(g).Da.compatMode
                }
              }
              v = v ? g.body : g.documentElement;
              if(c != v) {
                if(rl(c)) {
                  g = sl(c), i = kl(al(i)), m.x = g.left + i.x, m.y = g.top + i.y
                }else {
                  if(i.getBoxObjectFor && !l) {
                    g = i.getBoxObjectFor(c), i = i.getBoxObjectFor(v), m.x = g.screenX - i.screenX, m.y = g.screenY - i.screenY
                  }else {
                    g = c;
                    do {
                      m.x += g.offsetLeft;
                      m.y += g.offsetTop;
                      g != c && (m.x += g.clientLeft || 0, m.y += g.clientTop || 0);
                      if(ik && "fixed" == ql(g, "position")) {
                        m.x += i.body.scrollLeft;
                        m.y += i.body.scrollTop;
                        break
                      }
                      g = g.offsetParent
                    }while(g && g != c);
                    if(fk || ik && "absolute" == j) {
                      m.y -= i.body.offsetTop
                    }
                    for(g = c;(g = tl(g)) && g != i.body && g != v;) {
                      if(m.x -= g.scrollLeft, !fk || "TR" != g.tagName) {
                        m.y -= g.scrollTop
                      }
                    }
                  }
                }
              }
              d.x = m.x - f.x;
              d.y = m.y - f.y
            }
            if(hk && !uk(12)) {
              var x;
              gk ? x = "-ms-transform" : ik ? x = "-webkit-transform" : fk ? x = "-o-transform" : hk && (x = "-moz-transform");
              var z;
              x && (z = ql(c, x));
              z || (z = ql(c, "transform"));
              z ? (c = z.match(yl), c = !c ? new Zk(0, 0) : new Zk(parseFloat(c[1]), parseFloat(c[2]))) : c = new Zk(0, 0);
              d = new Zk(d.x + c.x, d.y + c.y)
            }
          }else {
            x = ia(c.Le), z = c, c.targetTouches ? z = c.targetTouches[0] : x && c.Lb.targetTouches && (z = c.Lb.targetTouches[0]), d.x = z.clientX, d.y = z.clientY
          }
          c = d;
          a = X([b - c.x, a - c.y]);
          b = S.a(a, 0, n);
          a = S.a(a, 1, n);
          return Vp(fd, b, a, w)
        }, "\ufdd0'mouseout", function() {
          return Wp(fd)
        }]))
      }
    }
    return a + i
  }, -45, (new W("\ufdd0'data")).call(n, c));
  return a.ne()
}
function mq(a, b, c) {
  var d = T(c) ? P.b(M, c) : c, f = E.a(d, "\ufdd0'font", n), g = E.a(d, "\ufdd0'stroke-width", n), i = E.a(d, "\ufdd0'height", n), j = E.a(d, "\ufdd0'width", n), l = E.a(d, "\ufdd0'padding", n), m = E.a(d, "\ufdd0'stroke-color", n), s = E.a(d, "\ufdd0'font-color", n), w = E.a(d, "\ufdd0'font-size", n), v = E.a(d, "\ufdd0'tooltip?", n), I = E.a(d, "\ufdd0'series-colors", n), z = E.a(d, "\ufdd0'stroke?", n), F = E.a(d, "\ufdd0'show-labels?", n), d = a.ha(), x = a.ha(d), N = a.ha(d), c = A(v) ? Yp(a, 
  c, d, j, i) : n, ra = A(z) ? new Zl(g, m) : n, g = V.a(function(b, c) {
    return Qp(a, ra, new Yl(c, 1), N)
  }, b, I), la = new Zl(1, s), Ba = new Yl(s, 1), La = new Wl(w, f), s = V.b("\ufdd0'label", b), f = Mp.a(s, w, f), w = P.b(de, V.b(function(a) {
    return a.width
  }, f)), i = (j < i ? j : i) / 2 - (A(F) ? l + w : l), j = V.a(function(b, c) {
    var d;
    d = -100 + La.size / 2;
    return a.cb(b, -100, d, -100 + c.width, d, "center", La, n, Ba, x)
  }, s, f), F = V.b(function() {
    return Qp(a, la, n, x)
  }, s), l = ab.a(function(a, b) {
    return a + (new W("\ufdd0'value")).call(n, b)
  }, 0, b), b = V.e(function(a, b, c, d, f) {
    return pd.e(a, "\ufdd0'label-element", b, L(["\ufdd0'slice-element", c, "\ufdd0'pointer-element", d, "\ufdd0'label-width", f.width, "\ufdd0'label-height", f.height], 0))
  }, b, j, g, L([F, f], 0));
  return Y(["\ufdd0'data", "\ufdd0'radius", "\ufdd0'total", "\ufdd0'main-group", "\ufdd0'tooltip"], {"\ufdd0'data":b, "\ufdd0'radius":i, "\ufdd0'total":l, "\ufdd0'main-group":d, "\ufdd0'tooltip":c})
}
;Ej.c(n);
var nq = Y(["\ufdd0'general", "\ufdd0'pie", "\ufdd0'bar", "\ufdd0'line"], {"\ufdd0'general":Y("\ufdd0'tooltip-opacity \ufdd0'fill-opacity \ufdd0'tooltip-stoke-color \ufdd0'on-value-mouseover \ufdd0'tooltip-hide-delay \ufdd0'tooltip-content \ufdd0'tooltip-stroke-width \ufdd0'padding \ufdd0'tooltip-padding \ufdd0'on-animation-complete \ufdd0'on-value-mouseout \ufdd0'stroke-color \ufdd0'tooltip-background-color \ufdd0'animation-duration \ufdd0'on-value-click \ufdd0'font-size \ufdd0'font-color \ufdd0'tooltip-font-color \ufdd0'tooltip? \ufdd0'fill? \ufdd0'animation? \ufdd0'stroke? \ufdd0'tooltip-font-size \ufdd0'font \ufdd0'stroke-width".split(" "), 
{"\ufdd0'tooltip-opacity":0.7, "\ufdd0'fill-opacity":0.5, "\ufdd0'tooltip-stoke-color":"#cfcfcf", "\ufdd0'on-value-mouseover":n, "\ufdd0'tooltip-hide-delay":1E3, "\ufdd0'tooltip-content":X([X(["%s", "\ufdd0'value"])]), "\ufdd0'tooltip-stroke-width":1, "\ufdd0'padding":10, "\ufdd0'tooltip-padding":5, "\ufdd0'on-animation-complete":n, "\ufdd0'on-value-mouseout":n, "\ufdd0'stroke-color":"#3f3f3f", "\ufdd0'tooltip-background-color":"#fff", "\ufdd0'animation-duration":500, "\ufdd0'on-value-click":n, "\ufdd0'font-size":12, 
"\ufdd0'font-color":"#3f3f3f", "\ufdd0'tooltip-font-color":"#3f3f3f", "\ufdd0'tooltip?":k, "\ufdd0'fill?":k, "\ufdd0'animation?":k, "\ufdd0'stroke?":k, "\ufdd0'tooltip-font-size":10, "\ufdd0'font":"Arial", "\ufdd0'stroke-width":1}), "\ufdd0'pie":Y("\ufdd0'slice-pop \ufdd0'tooltip-content \ufdd0'width \ufdd0'padding \ufdd0'stroke-color \ufdd0'font-color \ufdd0'series-colors \ufdd0'show-labels? \ufdd0'chart-type \ufdd0'height".split(" "), {"\ufdd0'slice-pop":k, "\ufdd0'tooltip-content":X([X(["%s: %s", 
"\ufdd0'label", "\ufdd0'value"])]), "\ufdd0'width":400, "\ufdd0'padding":n, "\ufdd0'stroke-color":"#fff", "\ufdd0'font-color":"#9f9f9f", "\ufdd0'series-colors":X("#F7464A #46BFBD #FDB45C #949FB1 #4D5360 #7D4F6D #9D9B7F #D97041 #584A5E".split(" ")), "\ufdd0'show-labels?":p, "\ufdd0'chart-type":"\ufdd0'pie", "\ufdd0'height":400}), "\ufdd0'bar":Y("\ufdd0'tooltip-content \ufdd0'width \ufdd0'show-grid-lines? \ufdd0'tick-size \ufdd0'grid-color \ufdd0'series-colors \ufdd0'scale-title-font-color \ufdd0'scale-title-font-size \ufdd0'chart-type \ufdd0'stroke-width \ufdd0'height".split(" "), 
{"\ufdd0'tooltip-content":X([X(["%s", "\ufdd0'category"]), X(["%s: %s", "\ufdd0'series-label", "\ufdd0'value"])]), "\ufdd0'width":500, "\ufdd0'show-grid-lines?":k, "\ufdd0'tick-size":3, "\ufdd0'grid-color":"#efefef", "\ufdd0'series-colors":X("#F7464A #46BFBD #FDB45C #949FB1 #4D5360 #7D4F6D #9D9B7F #D97041 #584A5E".split(" ")), "\ufdd0'scale-title-font-color":"#3f3f3f", "\ufdd0'scale-title-font-size":15, "\ufdd0'chart-type":"\ufdd0'bar", "\ufdd0'stroke-width":2, "\ufdd0'height":400}), "\ufdd0'line":Y("\ufdd0'value-dot? \ufdd0'dot-radius \ufdd0'y-scale-title \ufdd0'x-scale-title \ufdd0'tooltip-content \ufdd0'width \ufdd0'bezier-curve? \ufdd0'dot-stroke-color \ufdd0'show-grid-lines? \ufdd0'tick-size \ufdd0'grid-color \ufdd0'series-colors \ufdd0'scale-title-font-color \ufdd0'scale-title-font-size \ufdd0'chart-type \ufdd0'stroke-width \ufdd0'height".split(" "), 
{"\ufdd0'value-dot?":k, "\ufdd0'dot-radius":3, "\ufdd0'y-scale-title":n, "\ufdd0'x-scale-title":n, "\ufdd0'tooltip-content":X([X(["%s", "\ufdd0'category"]), X(["%s: %s", "\ufdd0'series-label", "\ufdd0'value"])]), "\ufdd0'width":500, "\ufdd0'bezier-curve?":k, "\ufdd0'dot-stroke-color":"#fff", "\ufdd0'show-grid-lines?":k, "\ufdd0'tick-size":3, "\ufdd0'grid-color":"#efefef", "\ufdd0'series-colors":X("#F7464A #46BFBD #FDB45C #949FB1 #4D5360 #7D4F6D #9D9B7F #D97041 #584A5E".split(" ")), "\ufdd0'scale-title-font-color":"#3f3f3f", 
"\ufdd0'scale-title-font-size":15, "\ufdd0'chart-type":"\ufdd0'line", "\ufdd0'stroke-width":2, "\ufdd0'height":400})});
function oq(a) {
  return Ii.e(L([nq.c ? nq.c("\ufdd0'general") : nq.call(n, "\ufdd0'general"), nq.c ? nq.c(a) : nq.call(n, a)], 0))
}
var pq = Ej.c(Ah);
function qq(a) {
  var b = E.a(Bb(pq), a, n);
  if(A(b)) {
    return b
  }
  b = P.b(oq, a);
  Kj.q(pq, pd, a, b);
  return b
}
function uq(a) {
  var b = n;
  t(a) && (b = L(Array.prototype.slice.call(arguments, 0), 0));
  return qq.call(this, b)
}
uq.n = 0;
uq.j = function(a) {
  a = G(a);
  return qq(a)
};
uq.e = qq;
function vq(a, b) {
  return Ii.e(L([uq.c ? uq.c(b) : uq.call(n, b), a], 0))
}
function wq() {
  var a = Dr, b = vq(Er, "\ufdd0'pie");
  return function(c) {
    var d = T(b) ? P.b(M, b) : b, f = E.a(d, "\ufdd0'width", n), g = E.a(d, "\ufdd0'height", n), i = E.a(d, "\ufdd0'animation?", n);
    E.a(d, "\ufdd0'tooltip?", n);
    var j = Im(f, g), d = (new W("\ufdd0'ease-fn")).call(n, b), d = A(d) ? d : Sp.Te, i = A(i) ? new Qm([0], [1], (new W("\ufdd0'animation-duration")).call(n, b), d) : n;
    j.ha();
    var l = Ii.e(L([b, mq(j, a, b)], 0));
    A(i) ? (Jk(i, "animate", function(a) {
      return lq(j, a.x, l)
    }), Jk(i, "end", function() {
      return lq(j, 1, l)
    }), j.od(c), c = i.play()) : (j.od(c), c = lq(j, 1, l));
    return c
  }
}
function Fr(a, b) {
  var c = vq(b, "\ufdd0'line");
  return function(b) {
    return jq(b, a, c)
  }
}
function Gr(a, b) {
  var c = vq(b, "\ufdd0'bar");
  return function(b) {
    return jq(b, a, c)
  }
}
;var Dr = X([Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":30, "\ufdd0'label":"time"}), Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":30, "\ufdd0'label":"pizza"}), Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":25, "\ufdd0'label":"freinds"}), Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":20, "\ufdd0'label":"country man"}), Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":10, "\ufdd0'label":"fore fathers"}), Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":10, "\ufdd0'label":"nice guys"}), 
Y(["\ufdd0'value", "\ufdd0'label"], {"\ufdd0'value":5, "\ufdd0'label":"dudes"})]), Er = Y(["\ufdd0'show-labels?", "\ufdd0'ease-fn", "\ufdd0'on-value-click"], {"\ufdd0'show-labels?":k, "\ufdd0'ease-fn":function(a) {
  return Math.sqrt(1 - Math.pow(a - 1, 2))
}, "\ufdd0'on-value-click":function(a) {
  return alert([U((new W("\ufdd0'label")).call(n, a)), U(": "), U((new W("\ufdd0'value")).call(n, a))].join(""))
}}), Hr = X([Y(["\ufdd0'label", "\ufdd0'values"], {"\ufdd0'label":"Series1", "\ufdd0'values":X([30, 12, 95, 40, 50, 30, 35])}), Y(["\ufdd0'label", "\ufdd0'values"], {"\ufdd0'label":"Series2", "\ufdd0'values":X([-10, 50, 40, 70, 25, 35, 45])})]), Ir = Y("\ufdd0'tick-size \ufdd0'scale-min \ufdd0'y-scale-title \ufdd0'x-scale-title \ufdd0'series-colors \ufdd0'categories \ufdd0'on-value-click".split(" "), {"\ufdd0'tick-size":3, "\ufdd0'scale-min":-20, "\ufdd0'y-scale-title":"Temperature", "\ufdd0'x-scale-title":"Month", 
"\ufdd0'series-colors":X(["#cfcfcf", "#9f9fff"]), "\ufdd0'categories":X("Jan Feb Mar Apr May Jun Jul".split(" ")), "\ufdd0'on-value-click":function(a) {
  return alert([U((new W("\ufdd0'series-label")).call(n, a)), U(": "), U((new W("\ufdd0'value")).call(n, a))].join(""))
}}), Jr = X([Y(["\ufdd0'label", "\ufdd0'values", "\ufdd0'stack"], {"\ufdd0'label":"Series1", "\ufdd0'values":X([20, 12, 95, 40, 50, 30, 35]), "\ufdd0'stack":"\ufdd0'new"}), Y(["\ufdd0'label", "\ufdd0'values", "\ufdd0'stack"], {"\ufdd0'label":"Series2", "\ufdd0'values":X([10, 50, 40, 70, 25, 35, 45]), "\ufdd0'stack":"\ufdd0'new"})]), Kr = pd.e(Ir, "\ufdd0'scale-min", 0, L(["\ufdd0'bezier-curve?", p], 0)), Lr = X([Y(["\ufdd0'label", "\ufdd0'values", "\ufdd0'stack"], {"\ufdd0'label":"Series1", "\ufdd0'values":X([20, 
12, 95, 40, 50, 30, 35]), "\ufdd0'stack":"\ufdd0'new"}), Y(["\ufdd0'label", "\ufdd0'values", "\ufdd0'stack"], {"\ufdd0'label":"Series2", "\ufdd0'values":X([10, 50, 40, 70, 25, 35, 45]), "\ufdd0'stack":"\ufdd0'new"}), Y(["\ufdd0'label", "\ufdd0'values", "\ufdd0'stack"], {"\ufdd0'label":"Series3", "\ufdd0'values":X([5, 55, 30, 70, 55, 45, 25]), "\ufdd0'stack":"\ufdd0'loner"})]), Mr = td.b(td.b(Ir, "\ufdd0'series-colors"), "\ufdd0'scale-min");
window.onload = function() {
  return Jp.e(document, L(["#pchart-div", wq(), "#lchart-div", Fr(Hr, Ir), "#slchart-div", Fr(Jr, Kr), "#bchart-div", Gr(Hr, Ir), "#sbchart-div", Gr(Lr, Mr)], 0))
};
