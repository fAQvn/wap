var D, aa;
aa = "https:" == window.location.protocol && window === window.top || (window.top.location.href = aa = "https://huu.vn");
var ba = "luonghvabcdefijkmpqrstwxyzLUONGHVABCDEFIJKMPQRSTWXYZ2016345789+/=";
window.License || (window.License = "H1035298654");
var Rnd = Math.random,
	J = Math.sin,
	M = Math.cos,
	ca = Math.sqrt,
	N = Math.floor,
	da = Math.atan2,
	ea = Math.ceil,
	fa = Math.abs,
	ga = Math.max,
	ha = Math.min;
Element.prototype.remove = function () {
	this.parentElement.removeChild(this)
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
	for (var a = this.length - 1; 0 <= a; a--) {
		this[a] && this[a].parentElement && this[a].parentElement.removeChild(this[a])
	}
};

function ia() {
	var a = window.location.hostname;
	return a.lastIndexOf(".") == a.indexOf(".") ? a : a.substr(a.indexOf(".") + 1)
}
String.prototype.Rnd = function () {
	if ("https:" != location.protocol) {
		return parseInt(Math.random().toString().replace(".", ""))
	}
	var a = this + ia(),
		c = 0,
		b, d;
	for (b = a.length - 1; 0 <= b; b--) {
		d = a.charCodeAt(b), c = (c << 5) - c + d, c = c & c
	}
	return "H" + Math.abs(c)
};
String.prototype.trim || (String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "")
});
var ja = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
		window.setTimeout(a, 30)
	},
	ka = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
		window.clearTimeout(a)
	};

function la(a, c) {
	var b = parseInt(a, 10);
	return 0 <= b ? b : c
}
GLOBAL = {
	title: "H\u1eefu\u2122 L\u01b0\u01a1ng | Information",
	Gb: "H\u1eefu\u2122 L\u01b0\u01a1ng | ...",
	wa: [],
	setTimeout: function (a, c) {
		this.wa.push(setTimeout(a, c))
	},
	Ab: function () {
		for (var a = 0; a < this.wa.length; a++) {
			window.clearTimeout(this.wa[a])
		}
		this.wa = []
	}
};
var ma = function () {
	var a, c, b = {
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};
	for (a in b) {
		if (a in document) {
			c = b[a];
			break
		}
	}
	return function (b) {
		b && document.addEventListener(c, b);
		return !document[a]
	}
}();
ma(function () {
	document.title = ma() ? GLOBAL.title : GLOBAL.Gb;
	console.log(new Date, "visible ?", ma())
});
window.H = window.H || {
	KEY16: "0123456789ABCDEF",
	vb: function () {
		"https:" == location.protocol && ia() == window.location.hostname && document.write('<div id="..."><img src="https://' + ia() + '/images/box.gif" border="0" width="64px" height="64px" style="position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%, -50%);"></div>')
	},
	V: function () {
		var a = String.fromCharCode,
			c = {};
		H.vb();
		var b = {
			Qb: function (a) {
				if (null == a) {
					return ""
				}
				a = b.yb(a, 6, function (a) {
					return ba.charAt(a)
				});
				switch (a.length % 4) {
					default:
				case 0:
					return a;
				case 1:
					return a + "===";
				case 2:
					return a + "==";
				case 3:
					return a + "="
				}
			},
			yb: function (a, b, c) {
				if (null == a) {
					return ""
				}
				var f, h, x = {},
					w = {},
					m = "",
					k = "",
					q = "",
					p = 2,
					r = 3,
					n = 2,
					l = [],
					t = 0,
					v = 0,
					u;
				for (u = 0; u < a.length; u += 1) {
					if (m = a.charAt(u), Object.prototype.hasOwnProperty.call(x, m) || (x[m] = r++, w[m] = !0), k = q + m, Object.prototype.hasOwnProperty.call(x, k)) {
						q = k
					} else {
						if (Object.prototype.hasOwnProperty.call(w, q)) {
							if (256 > q.charCodeAt(0)) {
								for (f = 0; f < n; f++) {
									t <<= 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++
								}
								h = q.charCodeAt(0);
								for (f = 0; 8 > f; f++) {
									t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h >>= 1
								}
							} else {
								h = 1;
								for (f = 0; f < n; f++) {
									t = t << 1 | h, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h = 0
								}
								h = q.charCodeAt(0);
								for (f = 0; 16 > f; f++) {
									t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h >>= 1
								}
							}
							p--;
							0 == p && (p = Math.pow(2, n), n++);
							delete w[q]
						} else {
							for (h = x[q], f = 0; f < n; f++) {
								t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h = h >> 1
							}
						}
						p--;
						0 == p && (p = Math.pow(2, n), n++);
						x[k] = r++;
						q = String(m)
					}
				}
				if ("" !== q) {
					if (Object.prototype.hasOwnProperty.call(w, q)) {
						if (256 > q.charCodeAt(0)) {
							for (f = 0; f < n; f++) {
								t <<= 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++
							}
							h = q.charCodeAt(0);
							for (f = 0; 8 > f; f++) {
								t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h >>= 1
							}
						} else {
							h = 1;
							for (f = 0; f < n; f++) {
								t = t << 1 | h, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h = 0
							}
							h = q.charCodeAt(0);
							for (f = 0; 16 > f; f++) {
								t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h >>= 1
							}
						}
						p--;
						0 == p && (p = Math.pow(2, n), n++);
						delete w[q]
					} else {
						for (h = x[q], f = 0; f < n; f++) {
							t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h = h >> 1
						}
					}
					p--;
					0 == p && n++
				}
				h = 2;
				for (f = 0; f < n; f++) {
					t = t << 1 | h & 1, v == b - 1 ? (v = 0, l.push(c(t)), t = 0) : v++, h >>= 1
				}
				for (;;) {
					if (t <<= 1, v == b - 1) {
						l.push(c(t));
						break
					} else {
						v++
					}
				}
				return l.join("")
			},
			L: function (b) {
				return null == b ? "" : "" == b ? null : function (b, c, d) {
					var h = [],
						x = 4,
						w = 4,
						m = 3,
						k = "",
						q = [],
						p, r, n, l, t, v = d(0),
						u = c,
						y = 1;
					for (p = 0; 3 > p; p += 1) {
						h[p] = p
					}
					k = 0;
					n = Math.pow(2, 2);
					for (l = 1; l != n;) {
						r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
					}
					switch (k) {
					case 0:
						k = 0;
						n = Math.pow(2, 8);
						for (l = 1; l != n;) {
							r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
						}
						t = a(k);
						break;
					case 1:
						k = 0;
						n = Math.pow(2, 16);
						for (l = 1; l != n;) {
							r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
						}
						t = a(k);
						break;
					case 2:
						return ""
					}
					p = h[3] = t;
					for (q.push(t);;) {
						if (y > b) {
							return ""
						}
						k = 0;
						n = Math.pow(2, m);
						for (l = 1; l != n;) {
							r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
						}
						switch (t = k) {
						case 0:
							k = 0;
							n = Math.pow(2, 8);
							for (l = 1; l != n;) {
								r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
							}
							h[w++] = a(k);
							t = w - 1;
							x--;
							break;
						case 1:
							k = 0;
							n = Math.pow(2, 16);
							for (l = 1; l != n;) {
								r = v & u, u >>= 1, 0 == u && (u = c, v = d(y++)), k |= (0 < r ? 1 : 0) * l, l <<= 1
							}
							h[w++] = a(k);
							t = w - 1;
							x--;
							break;
						case 2:
							return q.join("")
						}
						0 == x && (x = Math.pow(2, m), m++);
						if (h[t]) {
							k = h[t]
						} else {
							if (t === w) {
								k = p + p.charAt(0)
							} else {
								return null
							}
						}
						q.push(k);
						h[w++] = p + k.charAt(0);
						x--;
						p = k;
						0 == x && (x = Math.pow(2, m), m++)
					}
				}(b.length, 32, function (a) {
					a = b.charAt(a);
					var g = ba;
					if (!c[g]) {
						c[g] = {};
						for (var f = 0; f < g.length; f++) {
							c[g][g.charAt(f)] = f
						}
					}
					return c[g][a]
				})
			}
		};
		return b
	},
	tb: function () {
		function a(a, b, c) {
			e.fillStyle = c;
			e.fillText(b, 365, a)
		}

		function c() {
			this.jb = this.kb = 0;
			this.W = [];
			this.xa = function () {
				var a = this.W[0];
				0.99 < Rnd() && (a.s.z += 0.1 * Rnd() - 0.05, a.U = 0.0125);
				a.xa();
				for (var b = 1, c, d, e; b < this.W.length; b++) {
					a = this.W[b], c = this.jb - (a.position.x + f), d = this.kb - (a.position.y + h), e = ca(c * c + d * d), e < (16 < a.Ma ? a.Ma : 16) ? (a.I.x = a.position.x - c, a.I.y = a.position.y - d, a.U = 0.033) : 0.995 < Rnd() ? (a.I.x = a.origin.x, a.I.y = a.origin.y, a.s.z += 0.3 * Rnd() - 0.15, a.U = 0.0125) : (a.I.x = a.origin.x, a.I.y = a.origin.y, a.U = 0.05), a.xa()
				}
			};
			this.ha = function () {
				for (var a = 0; a < this.W.length; a++) {
					e.save(), this.W[a].ha(), e.restore()
				}
			}
		}

		function b(a, b, c, d) {
			this.origin = new H.w(a, b, 0);
			this.position = new H.w(a, b, 0);
			this.I = new H.w(a, b, 0);
			this.va = this.Ma = c;
			this.s = new H.w(0, 0, 0);
			this.Bb = d;
			this.da = 0.75;
			this.U = 0.05;
			this.xa = function () {
				this.s.x += (this.I.x - this.position.x) * this.U;
				this.s.x *= this.da;
				this.position.x += this.s.x;
				this.s.y += (this.I.y - this.position.y) * this.U;
				this.s.y *= this.da;
				this.position.y += this.s.y;
				var a = this.origin.x - this.position.x,
					b = this.origin.y - this.position.y,
					a = ca(a * a + b * b);
				this.I.z = a / 150 + 1;
				this.s.z += (this.I.z - this.position.z) * this.U;
				this.s.z *= this.da;
				this.position.z += this.s.z;
				this.va = this.Ma * this.position.z;
				1 > this.va && (this.va = 1)
			};
			this.ha = function () {
				e.fillStyle = this.Bb;
				e.beginPath();
				e.arc(this.position.x, this.position.y, this.va, 0, 6.2832, !0);
				e.fill()
			}
		}
		var d = document.getElementById("copyrightml");
		if (d) {
			var e = d.getContext("2d");
			"https:" == location.protocol && (d.style.backgroundImage = "url('https://" + ia() + "/images/bgcard.jpg')");
			var g = new c;
			g.W = [new b(120, 160, 100, "rgba(220,5,134,.9)"), new b(30, 136, 30, "rgba(145,200,46,.8)"), new b(66, 74, 22, "rgba(45,172,173,.9)"), new b(74, 52, 10, "rgba(238,172,78,.75)"), new b(180, 82, 46, "rgba(47,118,178,.9)"), new b(210, 138, 33, "rgba(248,172,78,.9)"), new b(192, 232, 25, "rgba(99,198,78,.9)"), new b(216, 222, 10, "rgba(140,45,136,.9)"), new b(88, 244, 36, "rgba(226,74,63,.9)"), new b(24, 188, 10, "rgba(255,203,78,.9)")];
			d.addEventListener("mousemove", function (a) {
				g.jb = a.clientX;
				g.kb = a.clientY
			}, !1);
			var f = 0,
				h = 0,
				x = function () {
					var b = d;
					f = h = 0;
					do {
						f += b.offsetLeft, h += b.offsetTop
					} while (b = b.offsetParent);
					f = f - window.pageXOffset;
					h = h - window.pageYOffset;
					e.save();
					e.clearRect(0, 0, 510, 310);
					e.save();
					e.font = "3em HL";
					e.textAlign = "center";
					a(80, "\u00a9 | \u2122", "rgb(80,80,80)");
					e.font = "1.2em HL";
					a(105, "I N F O R M A T I O N", "rgb(80,80,80)");
					e.font = "1.2em HL";
					a(140, O[P][0], "rgb(80,80,80)");
					a(165, O[P][1], "rgb(80,80,80)");
					a(190, "SG HCM City Vietnam", "rgb(80,80,80)");
					e.font = "1em HL";
					"" != O[P][2] && a(210, "http://www." + O[P][2], "rgb(80,80,80)");
					e.font = "1.3em HL";
					a(250, "https://" + ("H" == O[P][3] ? "huu.vn/info" : "M" == O[P][3] ? "my.huu.vn" : "luong.huu.vn"), "rgb(47,118,178)");
					a(270, "Email: " + O[P][4] + "@huu.vn", "rgb(47,118,178)");
					e.restore();
					e.globalCompositeOperation = "darker";
					g.xa();
					g.ha();
					e.globalCompositeOperation = "source-over";
					e.font = "8em HL";
					e.textAlign = "center";
					e.fillStyle = "white";
					e.fillText(String.fromCharCode(P + 224), 120, 190);
					e.restore();
					ja(x)
				};
			O && x()
		}
	},
	wb: function () {
		function a() {
			if (0 == N(4 * Rnd())) {
				var c = 3 * e++ % 8,
					d = b.m[0],
					h = b.m[1],
					x = na(h.a[0].b, Q(h.a[0].b, new H.i(1, 0)), h.a[1].b),
					w = new H.i(M(x), J(x)),
					m = new H.i(M(x + 1.5708), J(x + 1.5708)),
					k = 4 > c ? 1 : -1,
					q = 0 == c % 2 ? 1 : 0,
					x = [],
					p;
				for (p in d.a) {
					if (0 <= oa(d.a[p].b, h.a[0].b).Fa(w) * k && 0 <= oa(d.a[p].b, h.a[0].b).Fa(m) * q) {
						var r = d.a[p].b.Da(h.a[0].b);
						if (1225 <= r && 10000 >= r) {
							var r = !1,
								n;
							for (n in h.c) {
								var l;
								for (l = 0; 8 > l; ++l) {
									h.c[n] instanceof H.o && h.c[n].f == h.ea[l] && h.c[n].g == d.a[p] && (r = !0)
								}
							}
							r || x.push(d.a[p])
						}
					}
				}
				for (p in h.c) {
					if (h.c[p] instanceof H.o && h.c[p].f == h.ea[c]) {
						h.c.splice(p, 1);
						break
					}
				}
				if (0 < x.length) {
					for (var t, v, d = x.length; d; t = parseInt(Rnd() * d), v = x[--d], x[d] = x[t], x[t] = v) {}
					h.c.push(new H.o(h.ea[c], x[0], 1, 0))
				}
			}
			var u, y, z;
			for (z in b.m) {
				for (u in b.m[z].a) {
					c = b.m[z].a, h = oa(c[u].b, c[u].eb).scale(b.da), c[u].b.y >= b.height - 1 && 0.000001 < h.Y() && (t = h.length(), h.x /= t, h.y /= t, h.C(t * b.Eb)), c[u].eb.set(c[u].b.x, c[u].b.y), c[u].b.ba(b.Db), c[u].b.ba(h)
				}
			}
			b.ca && b.ca.b.set(b.ga.x, b.ga.y);
			for (z in b.m) {
				for (c = b.m[z].c, u = 0; 16 > u; ++u) {
					for (y in c) {
						c[y].Oa(0.0625)
					}
				}
			}
			for (z in b.m) {
				for (u in c = b.m[z].a, c) {
					b.zb(c[u])
				}
			}
			b.N();
			ja(a)
		}
		var c = document.getElementById("www");
		c.height = c.width = 350;
		var b = new H.za(350, 350, c),
			c = pa(b),
			d = qa(b);
		c.qa = function (a, c) {
			for (var b in c.a) {
				var d = c.a[b];
				a.beginPath();
				a.arc(d.b.x, d.b.y, 1.3, 0, 6.2832);
				a.fillStyle = "black";
				a.fill()
			}
		};
		d.Ga = function (a, c) {
			var b;
			a.beginPath();
			a.arc(d.head.b.x, d.head.b.y, 4, 0, 6.2832);
			a.fillStyle = "red";
			a.fill();
			a.beginPath();
			a.arc(d.R.b.x, d.R.b.y, 4, 0, 6.2832);
			a.fill();
			a.beginPath();
			a.arc(d.aa.b.x, d.aa.b.y, 8, 0, 6.2832);
			a.fill();
			for (b = 3; b < c.c.length; ++b) {
				var e = c.c[b];
				e instanceof H.o && (a.beginPath(), a.moveTo(e.f.b.x, e.f.b.y), a.lineTo(e.g.b.x, e.g.b.y), 2 <= b && 4 >= b || 19 <= b && 20 >= b || 35 <= b && 36 >= b || 51 <= b && 52 >= b ? (a.save(), e.N(a), a.strokeStyle = "green", a.lineWidth = 3, a.stroke(), a.restore()) : 4 <= b && 6 >= b || 21 <= b && 22 >= b || 37 <= b && 38 >= b || 53 <= b && 54 >= b ? (a.save(), e.N(a), a.strokeStyle = "blue", a.lineWidth = 2, a.stroke(), a.restore()) : 6 <= b && 8 >= b || 23 <= b && 24 >= b || 39 <= b && 40 >= b || 55 <= b && 56 >= b ? (a.save(), a.strokeStyle = "yellow", a.lineWidth = 1.5, a.stroke(), a.restore()) : (a.strokeStyle = "white", a.stroke()))
			}
		};
		d.qa = function () {};
		var e = 0;
		a()
	},
	Error: function (a) {
		function c() {
			if (f) {
				Array.prototype.J = function (a) {
					for (var b = 0; b < this.length; b++) {
						this[b] == a && this.splice(b, 1)
					}
				};
				var b = 0,
					c = 0;
				(function (b, c) {
					var d = b.length;
					a(b).each(function () {
						var e = this;
						a("<img/>").attr("src", e).load(function () {
							b.J(e);
							c(d, d - b.length)
						})
					})
				})(["images/limg.png"], function (a, c) {
					b = Math.ceil(100 * c / a)
				});
				var h = window.setInterval(function () {
					100 <= c ? (window.clearInterval(h), a("body").removeClass("preload"), GLOBAL.setTimeout(function () {
						d()
					}, 500), "" !== g() && (B = setInterval(function () {
						e()
					}, 40)), GLOBAL.setTimeout(function () {
						a("#canvas").fadeIn(1000);
						a(".preloadbar").fadeOut()
					}, 1000)) : c < b && (c++, a(".preloadbar").css({
						width: c + "%"
					}))
				}, 10)
			} else {
				a(window).on("load", function () {
					a("body").removeClass("preload");
					GLOBAL.setTimeout(function () {
						d()
					}, 500);
					"" !== g() && (B = setInterval(function () {
						e()
					}, 40))
				})
			}
		}

		function b() {
			clearInterval(B);
			h = a("#canvas").length;
			a(".canvas").length && (C = a(".canvas").offset().top, z = a(".canvas").offset().left);
			a("html").addClass(g);
			a(window).on("resize", function () {
				A.src = 639 < window.innerWidth ? "data:image/png;base64,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" : "data:image/png;base64,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";
				a("body").addClass("preload");
				a("#canvas").css({
					display: "none"
				});
				a(".preloadbar").fadeIn(2000);
				var b = 0,
					c = window.setInterval(function () {
						100 <= b ? (window.clearInterval(c), a("body").removeClass("preload"), GLOBAL.setTimeout(function () {
							a("#canvas").fadeIn(1000);
							a(".preloadbar").fadeOut()
						}, 1000)) : (b = b + 1 + 4 * Math.random(), a(".preloadbar").css({
							width: b + "%"
						}))
					}, 10);
				a(".canvas").length && (C = a(".canvas").offset().top, z = a(".canvas").offset().left)
			})
		}

		function d() {
			if (h && f) {
				r = document.getElementById("canvas");
				l = document.getElementById("canvas_bg");
				n = r.getContext("2d");
				t = l.getContext("2d");
				r.width = u;
				r.height = y;
				l.width = u;
				l.height = y;
				x = (u - 2500) / 2;
				w = (y - 180) / 2;
				t.drawImage(A, 0, 0, 2500, 180, x, w, 2500, 180);
				if (h && f) {
					v = [];
					var a, b;
					a = t.getImageData(0, 0, u, y).data;
					for (var c = 0; c < u; c += 11) {
						for (var d = 0; d < y; d += 11) {
							b = a[4 * (c + d * u) - 1], 255 == b && v.push({
								x: c,
								y: d,
								f: c,
								g: d
							})
						}
					}
				}
				n.drawImage(A, 0, 0, 2500, 180, x, w, 2500, 180)
			}
		}

		function e() {
			var a, b, c;
			if (h && f && n) {
				n.clearRect(0, 0, u, y);
				n.drawImage(A, 0, 0, 2500, 180, x, w, 2500, 180);
				n.globalCompositeOperation = "destination-out";
				for (var d = 0; 100 >= d; d++) {
					var e = 1 - d / 10,
						g = 80 + 3 * d;
					n.beginPath();
					n.fillStyle = "rgba(255,255,255," + e + ")";
					n.arc(q, p, g, 0, 2 * Math.PI, !0);
					n.closePath();
					n.fill()
				}
				n.globalCompositeOperation = "source-over";
				d = 0;
				for (e = v.length; d < e; ++d) {
					if (g = v[d], a = q - g.x, b = p - g.y, c = Math.sqrt(a * a + b * b), g.x = g.x - a / c * (20 / c) * 100 - (g.x - g.f) / 2, g.y = g.y - b / c * (20 / c) * 100 - (g.y - g.g) / 2, 150 > Math.sqrt(Math.pow(g.x - q, 2) + Math.pow(g.y - p, 2))) {
						for (var m = 1; m < v.length; m++) {
							var k = v[m];
							30 > Math.sqrt(Math.pow(g.x - k.x, 2) + Math.pow(g.y - k.y, 2)) && (n.beginPath(), n.lineWidth = 0.3, n.strokeStyle = "rgba(0,0,0,1)", n.lineTo(g.x + (2 * Math.random() - 2 / 3), g.y + (2 * Math.random() - 2 / 3)), n.lineTo(k.x + (2 * Math.random() - 2 / 3), k.y + (2 * Math.random() - 2 / 3)), n.lineTo(g.f, g.g), n.lineTo(k.f, k.g), n.closePath(), n.stroke())
						}
					}
				}
			}
		}

		function g() {
			var a = window.navigator.userAgent.toLowerCase(),
				b = window.navigator.appVersion.toLowerCase();
			if (-1 < a.indexOf("msie")) {
				if (-1 < b.indexOf("msie 6.0")) {
					return "ie ie6"
				}
				if (-1 < b.indexOf("msie 7.0")) {
					return f = !1, "ie ie7"
				}
				if (-1 < b.indexOf("msie 8.0")) {
					return f = !1, "ie ie8"
				}
				if (-1 < b.indexOf("msie 9.0")) {
					return f = !0, "ie ie9"
				}
				if (-1 < b.indexOf("msie 10.0")) {
					return f = !0, "ie ie10"
				}
				f = !0;
				return "ie"
			}
			if (-1 < b.indexOf("trident/7.0")) {
				return f = !0, "ie ie11"
			}
			if (-1 < a.indexOf("firefox")) {
				return f = !0, "firefox"
			}
			if (-1 < a.indexOf("opera")) {
				return f = !0, "opera"
			}
			if (-1 < a.indexOf("chrome")) {
				return f = !0, "chrome"
			}
			if (-1 < a.indexOf("safari")) {
				return f = !0, "safari"
			}
		}
		GLOBAL.Ab();
		var f, h, x, w, m = 0,
			k = 0,
			q = 0,
			p = 0,
			r, n, l, t, v = [],
			u, y, z, C, B;
		u = 2700;
		y = 300;
		var A = new Image;
		A.src = 639 < window.innerWidth ? "data:image/png;base64,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" : "data:image/png;base64,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";
		a(function () {
			g();
			c();
			b()
		});
		a(window).mousemove(function (a) {
			m = a.pageX;
			k = a.pageY;
			q = m - z;
			p = k - C
		});
		a('link[rel="stylesheet"], style').remove();
		a("*").removeAttr("style");
		(function (a) {
			var b = document.createElement("style");
			b.type = "text/css";
			b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
			document.getElementsByTagName("head")[0].appendChild(b)
		})("html{color:#333;background:#fff}html,body{font:10px/14px 'Verdana';margin:0;padding:0;width:100%;height:100%;overflow:hidden}a{color:#4285f4;text-decoration:none}a:hover{color:#ea4335}canvas{display:none}.canvas{position:fixed;z-index:1;width:2500px;height:180px;top:50%;left:50%;margin:-150px 0 0 -1375px}.preloadbar{width:0;height:26px;background:#000;position:fixed;top:50%;left:0;margin-top:-13px;z-index:0}.preload .preloadbar{opacity:1}.copyright{text-align:center;position:fixed;width:500px;top:100%;left:50%;margin-top:-50px;margin-left:-250px}");
		"" != g() && a("body").html("<p class='copyright'>404 Page Not Found<br/><br/></p><div class='canvas'><canvas id='canvas'></canvas><canvas id='canvas_bg'></canvas></div><div class='preloadbar'></div>")
	},
	i: function (a, c) {
		this.x = a || 0;
		this.y = c || 0
	},
	Ra: function (a) {
		a.constructor === String && (a = document.getElementById(a));
		if (a.constructor instanceof window.SVGElement || /^svg$/i.test(a.nodeName)) {
			this.j = a
		}
		ra(this, a)
	},
	A: function (a) {
		this.b = (new H.i).set(a.x, a.y);
		this.eb = (new H.i).set(a.x, a.y)
	},
	za: function (a, c, b) {
		this.width = a;
		this.height = c;
		this.S = b;
		this.M = b.getContext("2d");
		this.ga = new H.i(0, 0);
		this.ib = !1;
		this.ca = null;
		this.nb = 20;
		this.Fb = "#4f545c";
		this.zb = function (a) {
			a.b.y > this.height - 1 && (a.b.y = this.height - 1);
			0 > a.b.x && (a.b.x = 0);
			a.b.x > this.width - 1 && (a.b.x = this.width - 1)
		};
		var d = this;
		this.S.oncontextmenu = function (a) {
			a.preventDefault()
		};
		this.S.onmousedown = function () {
			d.ib = !0;
			var a = sa(d);
			a && (d.ca = a)
		};
		this.S.onmouseup = function () {
			d.ib = !1;
			d.ca = null
		};
		this.S.onmousemove = function (a) {
			var b = d.S.getBoundingClientRect();
			d.ga.x = a.clientX - b.left;
			d.ga.y = a.clientY - b.top
		};
		this.Db = new H.i(0, 0.2);
		this.da = 0.99;
		this.Eb = 0.8;
		this.m = []
	},
	ia: function () {
		this.a = [];
		this.c = [];
		this.Ga = this.qa = null
	},
	o: function (a, c, b, d) {
		this.f = a;
		this.g = c;
		this.pa = "undefined" != typeof d ? d : oa(a.b, c.b).length();
		this.Pa = b
	},
	ja: function (a, c) {
		this.f = a;
		this.b = (new H.i).set(c.x, c.y)
	},
	D: function (a, c, b, d) {
		this.f = a;
		this.g = c;
		this.J = b;
		this.Ca = na(this.g.b, this.f.b, this.J.b);
		this.Pa = d
	},
	L: function (a, c, b) {
		if (a.constructor === String) {
			if (a.constructor === String && (a = document.getElementById(a), !a)) {
				return
			}
			this.ta = !1;
			ta(this, a, c);
			this.type = (a = c || {}, a.file) ? a.type || "o" : a.type || "c";
			this.start = a.start || "a";
			this.Hb = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/");
			this.duration = la(a.duration, 50);
			this.X = la(a.X, null);
			this.na = la(a.na, 5);
			this.ra = a.hasOwnProperty("forceRender") ? !!a.ra : this.Hb;
			this.ob = !!a.ob;
			this.La = a.La;
			this.map = [];
			this.B = this.P = this.oa = this.speed = this.handle = null;
			this.cb = a.hasOwnProperty("ignoreInvisible") ? !!a.cb : !1;
			this.Ua = a.Ua || H.LINEAR;
			this.lb = a.lb || H.LINEAR;
			ya(this, b);
			this.ta && this.sa()
		}
	},
	w: function (a, c, b) {
		this.x = a || 0;
		this.y = c || 0;
		this.z = b || 0
	},
	u: function (a, c, b, d, e, g, f, h, x, w, m, k, q, p, r, n) {
		this.elements = new Float32Array(16);
		this.set(void 0 !== a ? a : 1, c || 0, b || 0, d || 0, e || 0, void 0 !== g ? g : 1, f || 0, h || 0, x || 0, w || 0, void 0 !== m ? m : 1, k || 0, q || 0, p || 0, r || 0, void 0 !== n ? n : 1)
	},
	$: function () {
		H.F.call(this);
		this.hb = new H.u;
		this.mb = new H.u;
		new H.u
	},
	Sa: function (a, c, b, d) {
		H.$.call(this);
		this.Ha = void 0 !== a ? a : 50;
		this.Va = void 0 !== c ? c : 1;
		this.Ka = void 0 !== b ? b : 0.1;
		this.$a = void 0 !== d ? d : 2000;
		za(this)
	},
	ka: function () {
		H.F.call(this);
		this.gb = !1;
		this.la = [];
		this.Ta = [];
		this.Aa = [];
		this.Ba = []
	},
	ya: function (a) {
		H.F.call(this);
		this.element = a;
		this.element.style.position = "absolute"
	},
	F: function () {
		this.parent = void 0;
		this.children = [];
		this.position = new H.w;
		this.rotation = new H.w;
		this.Cb = "XYZ";
		this.scale = new H.w(1, 1, 1);
		this.Z = new H.u;
		this.fa = new H.u;
		this.visible = this.Ja = this.gb = !0;
		O || (O = JSON.parse(H.V().L("iPughDg8lbuslQoSunlNRloTzlIlRQVfLqVl2JlbVkLJnF2lmDmeqXPmno1M82lgVgQlKVlOYJOx6gnslfYMVlSMrlu4kgiPcJhbmvOuRNuXK7glvWlSLq6TguwluZ1l9lnyjZiXwVuEpillLSX8LknBtuKLloU5AMVlNbqpomuSMjbl5SeFBnq2qBMVldMJlMEojlLwfhqYHJroMbpo3VufUmnQ2luYRbBmmSCuXJCB8bp3BaJcmRvbLpID3jc3cfKVwlv+lRllsP3O3VnfUmoOOhr8rxnO3GmBqlzcdGEz3IKohpDUJhZQw6Y2llJImzgcdCboSmlbXRy59HMnNlsvq8eCofUDNdggpoh43N7DbqvGowmMVub3llslgJgBb5muSll5Jgb4FmGC2lh31UbBgb1ml+ll8jogAgQ2llaIZmno1zu4yPmlu6lrpqZWhtIpXQ+lD1AD6x52lScpll==")))
	},
	LINEAR: function (a) {
		return a
	},
	ub: function (a) {
		function c(a) {
			var c = new H.u;
			a = b(a).replace("matrix3d(", "").replace(")", "").split(",");
			a = a.map(function (a) {
				return Number(a)
			});
			c.set.apply(c, a);
			Aa(c);
			return c
		}

		function b(a) {
			a = window.getComputedStyle(a, null);
			return a.getPropertyValue("transform") || a.getPropertyValue("-webkit-transform") || a.getPropertyValue("-moz-transform") || a.getPropertyValue("-o-transform") || a.getPropertyValue("-ms-transform")
		}

		function d(a, b, c) {
			var d;
			d = d || ["Webkit", "Moz", "O", "Ms"];
			for (var e = d.length; e--;) {
				a.style[d[e] + b.charAt(0).toUpperCase() + b.slice(1)] = c, a.style[b] = c
			}
		}

		function e(a) {
			return 0.000001 > fa(a) ? 0 : a
		}
		var g, f, h = new H.u;
		this.sa = function (a) {
			this.G = a || document.createElement("div");
			this.G.style.overflow = "hidden";
			d(this.G, "perspectiveOrigin", "50% 50% 0");
			d(this.G, "transformOrigin", "50% 50% 0")
		};
		this.bb = function (a, b) {
			Da(b);
			a.push(b);
			for (var c = 0; c < b.children.length; c++) {
				this.bb(a, b.children[c])
			}
		};
		this.ha = function (a, b) {
			var m = b.hb,
				k = b.fa,
				q = m.elements,
				p = k.elements,
				r = p[0],
				n = p[4],
				l = p[8],
				t = p[12],
				v = p[1],
				u = p[5],
				y = p[9],
				z = p[13],
				C = p[2],
				B = p[6],
				A = p[10],
				E = p[14],
				F = p[3],
				I = p[7],
				G = p[11],
				p = p[15];
			q[0] = y * E * I - z * A * I + z * B * G - u * E * G - y * B * p + u * A * p;
			q[4] = t * A * I - l * E * I - t * B * G + n * E * G + l * B * p - n * A * p;
			q[8] = l * z * I - t * y * I + t * u * G - n * z * G - l * u * p + n * y * p;
			q[12] = t * y * B - l * z * B - t * u * A + n * z * A + l * u * E - n * y * E;
			q[1] = z * A * F - y * E * F - z * C * G + v * E * G + y * C * p - v * A * p;
			q[5] = l * E * F - t * A * F + t * C * G - r * E * G - l * C * p + r * A * p;
			q[9] = t * y * F - l * z * F - t * v * G + r * z * G + l * v * p - r * y * p;
			q[13] = l * z * C - t * y * C + t * v * A - r * z * A - l * v * E + r * y * E;
			q[2] = u * E * F - z * B * F + z * C * I - v * E * I - u * C * p + v * B * p;
			q[6] = t * B * F - n * E * F - t * C * I + r * E * I + n * C * p - r * B * p;
			q[10] = n * z * F - t * u * F + t * v * I - r * z * I - n * v * p + r * u * p;
			q[14] = t * u * C - n * z * C - t * v * B + r * z * B + n * v * E - r * u * E;
			q[3] = y * B * F - u * A * F - y * C * I + v * A * I + u * C * G - v * B * G;
			q[7] = n * A * F - l * B * F + l * C * I - r * A * I - n * C * G + r * B * G;
			q[11] = l * u * F - n * y * F - l * v * I + r * y * I + n * v * G - r * u * G;
			q[15] = n * y * C - l * u * C + l * v * B - r * y * B - n * v * A + r * u * A;
			k = k.elements;
			q = k[0];
			p = k[4];
			r = k[8];
			n = k[12];
			l = k[1];
			t = k[5];
			v = k[9];
			u = k[13];
			y = k[2];
			z = k[6];
			C = k[10];
			B = k[14];
			A = k[3];
			E = k[7];
			F = k[11];
			k = k[15];
			m.C(1 / (n * v * z * A - r * u * z * A - n * t * C * A + p * u * C * A + r * t * B * A - p * v * B * A - n * v * y * E + r * u * y * E + n * l * C * E - q * u * C * E - r * l * B * E + q * v * B * E + n * t * y * F - p * u * y * F - n * l * z * F + q * u * z * F + p * l * B * F - q * t * B * F - r * t * y * k + p * v * y * k + r * l * z * k - q * v * z * k - p * l * C * k + q * t * C * k));
			Da(b);
			k = 0.5 / Math.tan(0.00875 * b.Ha) * f;
			d(this.G, "perspective", k + "px");
			m = [];
			this.bb(m, a);
			k = "translate3d(-50%, -50%, 0) translate3d(" + g / 2 + "px," + f / 2 + "px, " + k + "px) ";
			q = b.hb.elements;
			q = "matrix3d(" + e(q[0]) + "," + e(-q[1]) + "," + e(q[2]) + "," + e(q[3]) + "," + e(q[4]) + "," + e(-q[5]) + "," + e(q[6]) + "," + e(q[7]) + "," + e(q[8]) + "," + e(-q[9]) + "," + e(q[10]) + "," + e(q[11]) + "," + e(q[12]) + "," + e(-q[13]) + "," + e(q[14]) + "," + e(q[15]) + ") ";
			k = k + q;
			q = 0;
			for (p = m.length; q < p; q++) {
				n = m[q], n instanceof H.ya && (r = n.element, r.parentNode !== this.G && this.G.appendChild(r), !1 !== n.visible ? (!1 === n.Qa && (r.style.visibility = "visible", n.Qa = !0), h.ma(n.fa), n = r, l = h.elements, l = "matrix3d(" + e(l[0]) + "," + e(l[1]) + "," + e(l[2]) + "," + e(l[3]) + "," + e(-l[4]) + "," + e(-l[5]) + "," + e(-l[6]) + "," + e(-l[7]) + "," + e(l[8]) + "," + e(l[9]) + "," + e(l[10]) + "," + e(l[11]) + "," + e(l[12]) + "," + e(l[13]) + "," + e(l[14]) + "," + e(l[15]) + ") ", d(n, "transform", k + l), r.style.zIndex = Math.round(1000 * c(r).elements[14])) : !1 !== n.Qa && (r.style.visibility = "hidden", n.Qa = !1))
			}
		};
		this.pb = function () {
			var a = window.innerWidth,
				b = window.innerHeight;
			g = a;
			f = b;
			this.G.style.width = a + "px";
			this.G.style.height = b + "px"
		};
		this.sa(a)
	},
	UU: function (a, c, b) {
		var d = 0,
			e = [],
			g = 0,
			f, h, x, w, m, k, q, p, r = !1,
			n = [],
			l = [],
			t = !1;
		b = b || {};
		f = b.encoding || "UTF8";
		c = b.Tb || 1;
		x = Ea(f);
		c !== parseInt(c, 10) || 1 > c || !aa || (k = Fa, p = function (a) {
			var b = [],
				c;
			for (c = 0; 5 > c; c += 1) {
				b[c] = a[c].slice()
			}
			return b
		}, m = 832 * Math.pow(2, ia().length % 3), w = 12 * Math.pow(2, a.length), q = function (a, b, c, d, e) {
			c = m;
			var f = window.location.hostname.length,
				h, g = [],
				k = c >>> 5,
				p = 0,
				l = b >>> 5;
			for (h = 0; h < l && b >= c; h += k) {
				d = Fa(a.slice(h, h + k), d), b -= c
			}
			a = a.slice(h);
			for (b %= c; a.length < k;) {
				a.push(0)
			}
			h = b >>> 3;
			a[h >> 2] ^= f << 24 - h % 4 * 8;
			a[k - 1] ^= 128;
			for (d = Fa(a, d); 32 * g.length < e;) {
				a = d[p % 5][p / 5 | 0];
				g.push((a.g & 255) << 24 | (a.g & 65280) << 8 | (a.g & 16711680) >> 8 | a.g >>> 24);
				if (32 * g.length >= e) {
					break
				}
				g.push((a.f & 255) << 24 | (a.f & 65280) << 8 | (a.f & 16711680) >> 8 | a.f >>> 24);
				p += 1;
				0 === 64 * p % c && Fa(null, d)
			}
			return g
		}, h = Ga(a), this.K = function (b, c, e) {
			var g;
			if (!0 !== r && !0 !== t) {
				f = (e || {}).encoding || "UTF8";
				c = Ea(f)(b);
				b = c.Wa;
				c = c.value;
				g = m >>> 3;
				e = g / 4 - 1;
				if (g < b / 8) {
					for (c = q(c, b, 0, Ga(a), w); c.length <= e;) {
						c.push(0)
					}
					c[e] &= 4294967040
				} else {
					if (g > b / 8) {
						for (; c.length <= e;) {
							c.push(0)
						}
						c[e] &= 4294967040
					}
				}
				for (b = 0; b <= e; b += 1) {
					n[b] = c[b] ^ 909522486, l[b] = c[b] ^ 1549556828
				}
				h = k(n, h);
				d = m;
				r = !0
			}
		}, this.update = function (a) {
			var b, c, f, p = 0,
				l = m >>> 5;
			b = x(a, e, g);
			a = b.Wa;
			c = b.value;
			b = a >>> 5;
			for (f = 0; f < b; f += l) {
				p + m <= a && (h = k(c.slice(f, f + l), h), p += m)
			}
			d += p;
			e = c.slice(p >>> 5);
			g = a % m;
			t = !0
		}, this.get = function () {
			var b, c, f;
			if (!1 !== r) {
				return b = function (a) {
					var b = w,
						c = "",
						b = b / 8,
						d, e;
					for (d = 0; d < b; d += 1) {
						e = a[d >>> 2] >>> 8 * (3 - d % 4), c += H.KEY16.charAt(e >>> 4 & 15) + H.KEY16.charAt(e & 15)
					}
					return c
				}, c = q(e.slice(), g, d, p(h), w), f = k(l, Ga(a)), f = q(c, w, m, f, w), b(f)
			}
		})
	}
};

function R(a, c) {
	this.f = a;
	this.g = c
}

function Ea(a) {
	switch (a) {
	case "UTF8":
	case "UTF16BE":
	case "UTF16LE":
		break;
	default:
		return
	}
	return function (c, b, d) {
		var e = [],
			g = [],
			f = 0,
			h, x, w, m, k, e = b || [0];
		b = d || 0;
		w = b >>> 3;
		if ("UTF8" === a) {
			for (h = 0; h < c.length; h += 1) {
				for (d = c.charCodeAt(h), g = [], 128 > d ? g.push(d) : 2048 > d ? (g.push(192 | d >>> 6), g.push(128 | d & 63)) : 55296 > d || 57344 <= d ? g.push(224 | d >>> 12, 128 | d >>> 6 & 63, 128 | d & 63) : (h += 1, d = 65536 + ((d & 1023) << 10 | c.charCodeAt(h) & 1023), g.push(240 | d >>> 18, 128 | d >>> 12 & 63, 128 | d >>> 6 & 63, 128 | d & 63)), x = 0; x < g.length; x += 1) {
					k = f + w;
					for (m = k >>> 2; e.length <= m;) {
						e.push(0)
					}
					e[m] |= g[x] << 8 * (3 - k % 4);
					f += 1
				}
			}
		} else {
			if ("UTF16BE" === a || "UTF16LE" === a) {
				for (h = 0; h < c.length; h += 1) {
					d = c.charCodeAt(h);
					"UTF16LE" === a && (x = d & 255, d = x << 8 | d >>> 8);
					k = f + w;
					for (m = k >>> 2; e.length <= m;) {
						e.push(0)
					}
					e[m] |= d << 8 * (2 - k % 4);
					f += 2
				}
			}
		}
		return {
			value: e,
			Wa: 8 * f + b
		}
	}
}

function Ha(a, c) {
	return 32 < c ? (c = c - 32, new R(a.g << c | a.f >>> 32 - c, a.f << c | a.g >>> 32 - c)) : 0 !== c ? new R(a.f << c | a.g >>> 32 - c, a.g << c | a.f >>> 32 - c) : a
}

function Ia(a) {
	var c = 0,
		b = 0,
		d;
	for (d = 0; d < arguments.length; d += 1) {
		c ^= arguments[d].g, b ^= arguments[d].f
	}
	return new R(b, c)
}

function Ga(a) {
	var c = [],
		b = a.charCodeAt(0) - 72,
		d = a.lastIndexOf("U"),
		e = a.charCodeAt(1) == a.charCodeAt(2) ? 3 : a.charCodeAt(3) % 2;
	for (a = 0; 5 > a; a += 1) {
		c[a] = [new R(0, 0), new R(b, 0), new R(0, b), new R(d - 2, e - 3), new R(e - d - 1, d * e - 6)]
	}
	return c
}

function Fa(a, c) {
	var b, d, e, g, f = [],
		h = [];
	if (null !== a) {
		for (d = 0; d < a.length; d += 2) {
			c[(d >>> 1) % 5][(d >>> 1) / 5 | 0] = Ia(c[(d >>> 1) % 5][(d >>> 1) / 5 | 0], new R((a[d + 1] & 255) << 24 | (a[d + 1] & 65280) << 8 | (a[d + 1] & 16711680) >>> 8 | a[d + 1] >>> 24, (a[d] & 255) << 24 | (a[d] & 65280) << 8 | (a[d] & 16711680) >>> 8 | a[d] >>> 24))
		}
	}
	for (b = 0; 24 > b; b += 1) {
		g = Ga("");
		for (d = 0; 5 > d; d += 1) {
			f[d] = Ia(c[d][0], c[d][1], c[d][2], c[d][3], c[d][4])
		}
		for (d = 0; 5 > d; d += 1) {
			h[d] = Ia(f[(d + 4) % 5], Ha(f[(d + 1) % 5], 1))
		}
		for (d = 0; 5 > d; d += 1) {
			for (e = 0; 5 > e; e += 1) {
				c[d][e] = Ia(c[d][e], h[d])
			}
		}
		for (d = 0; 5 > d; d += 1) {
			for (e = 0; 5 > e; e += 1) {
				g[e][(2 * d + 3 * e) % 5] = Ha(c[d][e], Ja[d][e])
			}
		}
		for (d = 0; 5 > d; d += 1) {
			for (e = 0; 5 > e; e += 1) {
				c[d][e] = Ia(g[d][e], new R(~g[(d + 1) % 5][e].f & g[(d + 2) % 5][e].f, ~g[(d + 1) % 5][e].g & g[(d + 2) % 5][e].g))
			}
		}
		c[0][0] = Ia(c[0][0], Ka[b])
	}
	return c
}
var Ja, Ka;
Ka = [new R(0, 1), new R(0, 32898), new R(2147483648, 32906), new R(2147483648, 2147516416), new R(0, 32907), new R(0, 2147483649), new R(2147483648, 2147516545), new R(2147483648, 32777), new R(0, 138), new R(0, 136), new R(0, 2147516425), new R(0, 2147483658), new R(0, 2147516555), new R(2147483648, 139), new R(2147483648, 32905), new R(2147483648, 32771), new R(2147483648, 32770), new R(2147483648, 128), new R(0, 32778), new R(2147483648, 2147483658), new R(2147483648, 2147516545), new R(2147483648, 32896), new R(0, 2147483649), new R(2147483648, 2147516424)];
Ja = [
	[0, 36, 3, 41, 18],
	[1, 44, 10, 45, 2],
	[62, 6, 43, 15, 61],
	[28, 55, 25, 21, 56],
	[27, 20, 39, 8, 14]
];

function La() {
	if ("https:" == location.protocol) {
		var a = document.createElement("script");
		a.async = !0;
		a.src = "https://embed.tawk.to/57b14e6e78be3a4291b7f4d5/default";
		a.charset = "UTF-8";
		a.setAttribute("crossorigin", "*");
		document.getElementsByTagName("head")[0].appendChild(a);
		document.title = GLOBAL.title = "H\u1eefu\u2122 L\u01b0\u01a1ng | Let's chat"
	}
}
var Ma = "",
	S = 20,
	Na = !0,
	Oa = [],
	Pa = !1,
	Qa = !0,
	Ra = !0,
	Sa = null,
	Ta = !0,
	Ua = !0,
	Va = null,
	Wa = !0,
	Xa = !1,
	Ya = !0,
	lang = "en",
	Za = !0,
	$a = !1,
	ab = null;

function bb(a) {
	if (null === Va) {
		for (var c = a.length, b = 0, d = document.getElementById(Ma), e = "<ul>"; b < c;) {
			e += "<li>" + a[b] + "</li>", b++
		}
		d.innerHTML = e + "</ul>"
	} else {
		Va(a)
	}
}

function cb(a) {
	return a.replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, b) {
		return b
	}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
}

function db(a) {
	a = a.getElementsByTagName("a");
	for (var c = a.length - 1; 0 <= c; c--) {
		a[c].setAttribute("target", "_blank")
	}
}

function U(a, c) {
	for (var b = [], d = new RegExp("(^| )" + c + "( |$)"), e = a.getElementsByTagName("*"), g = 0, f = e.length; g < f; g++) {
		d.test(e[g].className) && b.push(e[g])
	}
	return b
}

function eb(a) {
	if (void 0 !== a && 0 <= a.innerHTML.indexOf("data-srcset")) {
		return a = a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0], decodeURIComponent(a).split('"')[1]
	}
}
H.T = function (a) {
	void 0 === a.maxTweets && (a.maxTweets = 20);
	void 0 === a.enableLinks && (a.enableLinks = !0);
	void 0 === a.showUser && (a.showUser = !0);
	void 0 === a.showTime && (a.showTime = !0);
	void 0 === a.Ya && (a.Ya = "default");
	void 0 === a.rb && (a.rb = !0);
	void 0 === a.customCallback && (a.customCallback = null);
	void 0 === a.qb && (a.qb = !0);
	void 0 === a.showImages && (a.showImages = !1);
	void 0 === a.fb && (a.fb = !0);
	void 0 === a.showPermalinks && (a.showPermalinks = !0);
	void 0 === a.Xa && (a.Xa = !1);
	if (Pa) {
		Oa.push(a)
	} else {
		Pa = !0;
		Ma = a.domId;
		S = a.maxTweets;
		Na = a.enableLinks;
		Ra = a.showUser;
		Qa = a.showTime;
		Ua = a.rb;
		Sa = a.Ya;
		Va = a.customCallback;
		Wa = a.qb;
		Xa = a.showImages;
		Ya = a.fb;
		Za = a.showPermalinks;
		$a = a.Xa;
		var c = document.getElementsByTagName("head")[0];
		null !== ab && c.removeChild(ab);
		ab = document.createElement("script");
		ab.type = "text/javascript";
		ab.src = void 0 !== a.list ? "https://syndication.twitter.com/timeline/list?callback=H.callback&dnt=false&list_slug=" + a.list.Sb + "&screen_name=" + a.list.screenName + "&suppress_response_codes=true&lang=" + (a.lang || lang) + "&rnd=" + Math.random() : void 0 !== a.profile ? "https://syndication.twitter.com/timeline/profile?callback=H.callback&dnt=false&screen_name=" + a.profile.screenName + "&suppress_response_codes=true&lang=" + (a.lang || lang) + "&rnd=" + Math.random() : void 0 !== a.Ib ? "https://syndication.twitter.com/timeline/likes?callback=H.callback&dnt=false&screen_name=" + a.Ib.screenName + "&suppress_response_codes=true&lang=" + (a.lang || lang) + "&rnd=" + Math.random() : "https://cdn.syndication.twimg.com/widgets/timelines/" + a.id + "?&lang=" + (a.lang || lang) + "&callback=H.callback&suppress_response_codes=true&rnd=" + Math.random();
		c.appendChild(ab)
	}
};
H.callback = function (a) {
	function c(a) {
		var b = a.getElementsByTagName("img")[0];
		b.src = b.getAttribute("data-src-2x");
		return a
	}
	a.body = a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, "");
	Xa || (a.body = a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, ""));
	Ra || (a.body = a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ""));
	var b = document.createElement("div");
	b.innerHTML = a.body;
	"undefined" === typeof b.getElementsByClassName && (Ta = !1);
	a = [];
	var d = [],
		e = [],
		g = [],
		f = [],
		h = [],
		x = [],
		w = 0;
	if (Ta) {
		for (b = b.getElementsByClassName("timeline-Tweet"); w < b.length;) {
			0 < b[w].getElementsByClassName("timeline-Tweet-retweetCredit").length ? f.push(!0) : f.push(!1);
			if (!f[w] || f[w] && Ua) {
				a.push(b[w].getElementsByClassName("timeline-Tweet-text")[0]), h.push(b[w].getAttribute("data-tweet-id")), Ra && d.push(c(b[w].getElementsByClassName("timeline-Tweet-author")[0])), e.push(b[w].getElementsByClassName("dt-updated")[0]), x.push(b[w].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== b[w].getElementsByClassName("timeline-Tweet-media")[0] ? g.push(b[w].getElementsByClassName("timeline-Tweet-media")[0]) : g.push(void 0)
			}
			w++
		}
	} else {
		for (b = U(b, "timeline-Tweet"); w < b.length;) {
			0 < U(b[w], "timeline-Tweet-retweetCredit").length ? f.push(!0) : f.push(!1);
			if (!f[w] || f[w] && Ua) {
				a.push(U(b[w], "timeline-Tweet-text")[0]), h.push(b[w].getAttribute("data-tweet-id")), Ra && d.push(c(U(b[w], "timeline-Tweet-author")[0])), e.push(U(b[w], "dt-updated")[0]), x.push(U(b[w], "timeline-Tweet-timestamp")[0]), void 0 !== U(b[w], "timeline-Tweet-media")[0] ? g.push(U(b[w], "timeline-Tweet-media")[0]) : g.push(void 0)
			}
			w++
		}
	}
	a.length > S && (a.splice(S, a.length - S), d.splice(S, d.length - S), e.splice(S, e.length - S), f.splice(S, f.length - S), g.splice(S, g.length - S), x.splice(S, x.length - S));
	var b = [],
		w = a.length,
		m = 0;
	if ($a) {
		for (; m < w;) {
			b.push({
				Xb: a[m].innerHTML,
				Pb: d[m].innerHTML,
				time: e[m].textContent,
				Rb: eb(g[m]),
				Vb: f[m],
				Wb: h[m],
				Ub: void 0 === x[m] ? "" : x[m].href
			}), m++
		}
	} else {
		for (; m < w;) {
			if ("string" !== typeof Sa) {
				var f = e[m].getAttribute("datetime"),
					k = new Date(e[m].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
					f = Sa(k, f);
				e[m].setAttribute("aria-label", f);
				a[m].textContent ? Ta ? e[m].textContent = f : (k = document.createElement("p"), k.appendChild(document.createTextNode(f)), k.setAttribute("aria-label", f), e[m] = k) : e[m].textContent = f
			}
			f = "";
			Na ? (Ya && (db(a[m]), Ra && db(d[m])), Ra && (f += '<div class="user">' + cb(d[m].innerHTML) + "</div>"), f += '<p class="tweet">' + cb(a[m].innerHTML) + "</p>", Qa && (f = Za ? f + ('<p class="timePosted"><a href="' + x[m] + '">' + e[m].getAttribute("aria-label") + "</a></p>") : f + ('<p class="timePosted">' + e[m].getAttribute("aria-label") + "</p>"))) : (Ra && (f += '<p class="user">' + d[m].textContent + "</p>"), f += '<div class="tweet">' + a[m].textContent + "</div>", Qa && (f += '<p class="timePosted">' + e[m].textContent + "</p>"));
			Wa && (f += '<div class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + h[m] + '" class="twitter_reply_icon"' + (Ya ? ' target="_blank">' : ">") + 'Reply</a> | <a href="https://twitter.com/intent/retweet?tweet_id=' + h[m] + '" class="twitter_retweet_icon"' + (Ya ? ' target="_blank">' : ">") + 'Retweet</a> | <a href="https://twitter.com/intent/favorite?tweet_id=' + h[m] + '" class="twitter_fav_icon"' + (Ya ? ' target="_blank">' : ">") + "Favorite </a></div>");
			Xa && void 0 !== g[m] && void 0 !== eb(g[m]) && (f += '<div class="media"><img src="' + eb(g[m]) + '" alt="Image from tweet" /></div>');
			Xa ? b.push(f) : !Xa && a[m].textContent.length && b.push(f);
			m++
		}
	}
	bb(b);
	Pa = !1;
	0 < Oa.length && (H.fetch(Oa[0]), Oa.splice(0, 1))
};
H.i.prototype = {
	constructor: H.i,
	set: function (a, c) {
		this.x = a;
		this.y = c;
		return this
	},
	ma: function (a) {
		this.x = a.x;
		this.y = a.y;
		return this
	},
	add: function (a, c) {
		this.x = a.x + c.x;
		this.y = a.y + c.y;
		return this
	},
	ba: function (a) {
		this.x += a.x;
		this.y += a.y;
		return this
	},
	sub: function (a, c) {
		this.x = a.x - c.x;
		this.y = a.y - c.y;
		return this
	},
	sb: function (a) {
		this.x = this.x - a.x;
		this.y = this.y - a.y;
		return this
	},
	C: function (a) {
		this.x = this.x * a;
		this.y = this.y * a;
		return this
	},
	scale: function (a) {
		return new H.i(this.x * a, this.y * a)
	},
	Ea: function (a) {
		a ? (this.x = this.x / a, this.y = this.y / a) : this.set(0, 0);
		return this
	},
	Fa: function (a) {
		return this.x * a.x + this.y * a.y
	},
	Y: function () {
		return this.x * this.x + this.y * this.y
	},
	length: function () {
		return ca(this.Y())
	},
	normalize: function () {
		return this.Ea(this.length())
	},
	Ca: function (a) {
		return da(this.x * a.y - this.y * a.x, this.x * a.x + this.y * a.y)
	},
	rotate: function (a, c) {
		var b = this.x - a.x,
			d = this.y - a.y;
		return new H.i(b * M(c) - d * J(c) + a.x, b * J(c) + d * M(c) + a.y)
	},
	toString: function () {
		return "(" + this.x + ", " + this.y + ")"
	},
	Da: function (a) {
		var c = this.x - a.x;
		a = this.y - a.y;
		return c * c + a * a
	},
	clone: function () {
		return new H.i(this.x, this.y)
	}
};

function na(a, c, b) {
	return oa(c, a).Ca(oa(b, a))
}

function fb(a) {
	var c = ca(a.x * a.x + a.y * a.y);
	return new H.i(a.x / c, a.y / c)
}

function oa(a, c) {
	return new H.i(a.x - c.x, a.y - c.y)
}

function Q(a, c) {
	return new H.i(a.x + c.x, a.y + c.y)
}

function ra(a, c) {
	function b(a, b) {
		switch (b) {
		case "line":
			var c = {};
			c.d = "M" + (a.Yb || 0) + "," + (a.$b || 0) + "L" + (a.Zb || 0) + "," + (a.ac || 0);
			return c;
		case "ellipse":
			var c = {},
				d = parseFloat(a.rx) || 0,
				e = parseFloat(a.ry) || 0,
				f = parseFloat(a.cx) || 0,
				g = parseFloat(a.cy) || 0,
				r = f - d,
				f = parseFloat(f) + parseFloat(d),
				n = g;
			c.d = "M" + r + "," + g + "A" + d + "," + e + " 0,1,1 " + f + "," + n + "A" + d + "," + e + " 0,1,1 " + r + "," + n;
			return c;
		case "circle":
			return c = {}, d = parseFloat(a.r) || 0, f = parseFloat(a.cx) || 0, g = parseFloat(a.cy) || 0, r = f - d, f = parseFloat(f) + parseFloat(d), n = g, c.d = "M" + r + "," + g + "A" + d + "," + d + " 0,1,1 " + f + "," + n + "A" + d + "," + d + " 0,1,1 " + r + "," + n, c;
		case "rect":
			return c = {}, g = parseFloat(a.x) || 0, r = parseFloat(a.y) || 0, d = parseFloat(a.width) || 0, e = parseFloat(a.height) || 0, c.d = "M" + g + " " + r + " ", c.d += "L" + (g + d) + " " + r + " ", c.d += "L" + (g + d) + " " + (r + e) + " ", c.d += "L" + g + " " + (r + e) + " Z", c;
		case "polyline":
			c = {};
			g = a.points.trim().split(" ");
			if (-1 === a.points.indexOf(",")) {
				d = [];
				for (r = 0; r < g.length; r += 2) {
					d.push(g[r] + "," + g[r + 1])
				}
				g = d
			}
			d = "M" + g[0];
			for (r = 1; r < g.length; r++) {
				-1 !== g[r].indexOf(",") && (d += "L" + g[r])
			}
			c.d = d;
			return c;
		case "polygon":
			c = {};
			g = a.points.trim().split(" ");
			if (-1 === a.points.indexOf(",")) {
				d = [];
				for (r = 0; r < g.length; r += 2) {
					d.push(g[r] + "," + g[r + 1])
				}
				g = d
			}
			d = "M" + g[0];
			for (r = 1; r < g.length; r++) {
				-1 !== g[r].indexOf(",") && (d += "L" + g[r])
			}
			c.d = d + "Z";
			return c
		}
	}
	for (var d, e, g = c.querySelectorAll("line,ellipse,circle,polygon,polyline,rect"), f = 0; f < g.length; f++) {
		d = g[f], e = b(a.ua(d.attributes), d.tagName.toLowerCase()), e = gb(d, e), d.parentNode.replaceChild(e, d)
	}
}

function gb(a, c) {
	var b, d, e = document.createElementNS("http://www.w3.org/2000/svg", "path");
	for (b = 0; b < a.attributes.length; b++) {
		d = a.attributes[b], -1 === "cx cy points r rx ry x x1 x2 y y1 y2".split(" ").indexOf(d.name) && e.setAttribute(d.name, d.value)
	}
	for (b in c) {
		e.setAttribute(b, c[b])
	}
	return e
}
H.Ra.prototype.ua = function (a) {
	for (var c = {}, b = 0; b < a.length; b++) {
		c[a[b].name] = a[b].value
	}
	return c
};
H.A.prototype.N = function (a) {
	a.beginPath();
	a.arc(this.b.x, this.b.y, 2, 0, 6.2832);
	a.fillStyle = "#2dad8f";
	a.fill()
};
H.za.prototype.ia = H.ia;
H.za.prototype.N = function () {
	var a, c;
	this.M.clearRect(0, 0, this.S.width, this.S.height);
	for (c in this.m) {
		if (this.m[c].Ga) {
			this.m[c].Ga(this.M, this.m[c])
		} else {
			var b = this.m[c].c;
			for (a in b) {
				b[a].N(this.M)
			}
		} if (this.m[c].qa) {
			this.m[c].qa(this.M, this.m[c])
		} else {
			for (a in b = this.m[c].a, b) {
				b[a].N(this.M)
			}
		}
	}
	if (a = this.ca || sa(this)) {
		this.M.beginPath(), this.M.arc(a.b.x, a.b.y, 8, 0, 6.2832), this.M.strokeStyle = this.Fb, this.M.stroke()
	}
};

function sa(a) {
	var c, b, d = 0,
		e = null,
		g = null;
	for (c in a.m) {
		var f = a.m[c].a;
		for (b in f) {
			var h = f[b].b.Da(a.ga);
			h <= a.nb * a.nb && (null == e || h < d) && (e = f[b], g = a.m[c].c, d = h)
		}
	}
	for (b in g) {
		g[b] instanceof H.ja && g[b].f == e && (e = g[b])
	}
	return e
}
H.o.prototype.Oa = function (a) {
	var c = oa(this.f.b, this.g.b),
		b = c.Y();
	c.C((this.pa * this.pa - b) / b * this.Pa * a);
	this.f.b.ba(c);
	this.g.b.sb(c)
};
H.o.prototype.N = function (a) {
	a.beginPath();
	a.moveTo(this.f.b.x, this.f.b.y);
	a.lineTo(this.g.b.x, this.g.b.y);
	a.strokeStyle = "#d8dde2";
	a.stroke()
};
H.ja.prototype.Oa = function () {
	this.f.b.set(this.b.x, this.b.y)
};
H.ja.prototype.N = function (a) {
	a.beginPath();
	a.arc(this.b.x, this.b.y, 3, 0, 6.2832);
	a.strokeStyle = "rgba(255,255,255,0.8)";
	a.stroke()
};
H.D.prototype.Oa = function (a) {
	var c = na(this.g.b, this.f.b, this.J.b) - this.Ca; - 3.1416 >= c ? c += 6.2832 : 3.1416 <= c && (c -= 6.2832);
	c = c * a * this.Pa;
	this.f.b = this.f.b.rotate(this.g.b, c);
	this.J.b = this.J.b.rotate(this.g.b, -c);
	this.g.b = this.g.b.rotate(this.f.b, c);
	this.g.b = this.g.b.rotate(this.J.b, -c)
};
H.D.prototype.N = function (a) {
	a.beginPath();
	a.moveTo(this.f.b.x, this.f.b.y);
	a.lineTo(this.g.b.x, this.g.b.y);
	a.lineTo(this.J.b.x, this.J.b.y);
	var c = a.lineWidth;
	a.lineWidth = 5;
	a.strokeStyle = "rgba(255,255,0,0.2)";
	a.stroke();
	a.lineWidth = c
};

function qa(a) {
	var c = new H.i(175, -300),
		b = new H.ia;
	b.ea = [];
	b.R = new H.A(c);
	b.head = new H.A(Q(c, new H.i(0, -5)));
	b.aa = new H.A(Q(c, new H.i(0, 10)));
	b.a.push(b.R);
	b.a.push(b.head);
	b.a.push(b.aa);
	b.c.push(new H.o(b.head, b.R, 1));
	b.c.push(new H.o(b.aa, b.R, 1));
	b.c.push(new H.D(b.aa, b.R, b.head, 0.4));
	for (c = 0; 4 > c; ++c) {
		b.a.push(new H.A(Q(b.a[0].b, new H.i(3, 3 * (c - 1.5)))));
		b.a.push(new H.A(Q(b.a[0].b, new H.i(-3, 3 * (c - 1.5)))));
		var d = b.a.length;
		b.c.push(new H.o(b.a[d - 2], b.R, 0.99));
		b.c.push(new H.o(b.a[d - 1], b.R, 0.99));
		var e = 1;
		1 == c || 2 == c ? e = 0.7 : 3 == c && (e = 0.9);
		b.a.push(new H.A(Q(b.a[d - 2].b, fb(new H.i(20, 30 * (c - 1.5))).C(20 * e))));
		b.a.push(new H.A(Q(b.a[d - 1].b, fb(new H.i(-20, 30 * (c - 1.5))).C(20 * e))));
		d = b.a.length;
		b.c.push(new H.o(b.a[d - 4], b.a[d - 2], 0.99));
		b.c.push(new H.o(b.a[d - 3], b.a[d - 1], 0.99));
		b.a.push(new H.A(Q(b.a[d - 2].b, fb(new H.i(20, 50 * (c - 1.5))).C(20 * e))));
		b.a.push(new H.A(Q(b.a[d - 1].b, fb(new H.i(-20, 50 * (c - 1.5))).C(20 * e))));
		d = b.a.length;
		b.c.push(new H.o(b.a[d - 4], b.a[d - 2], 0.99));
		b.c.push(new H.o(b.a[d - 3], b.a[d - 1], 0.99));
		var g = new H.A(Q(b.a[d - 2].b, fb(new H.i(20, 100 * (c - 1.5))).C(12 * e))),
			d = new H.A(Q(b.a[d - 1].b, fb(new H.i(-20, 100 * (c - 1.5))).C(12 * e)));
		b.a.push(g);
		b.a.push(d);
		b.ea.push(g);
		b.ea.push(d);
		d = b.a.length;
		b.c.push(new H.o(b.a[d - 4], b.a[d - 2], 0.99));
		b.c.push(new H.o(b.a[d - 3], b.a[d - 1], 0.99));
		b.c.push(new H.D(b.a[d - 6], b.a[d - 4], b.a[d - 2], 0.9));
		b.c.push(new H.D(b.a[d - 6 + 1], b.a[d - 4 + 1], b.a[d - 2 + 1], 0.9));
		b.c.push(new H.D(b.a[d - 8], b.a[d - 6], b.a[d - 4], 0.4));
		b.c.push(new H.D(b.a[d - 8 + 1], b.a[d - 6 + 1], b.a[d - 4 + 1], 0.4));
		b.c.push(new H.D(b.a[0], b.a[d - 8], b.a[d - 6], 1));
		b.c.push(new H.D(b.a[0], b.a[d - 8 + 1], b.a[d - 6 + 1], 1));
		b.c.push(new H.D(b.a[1], b.a[0], b.a[d - 8], 1));
		b.c.push(new H.D(b.a[1], b.a[0], b.a[d - 8 + 1], 1))
	}
	a.m.push(b);
	return b
}

function pa(a) {
	var c = new H.i(175, 175),
		b, d, e = new H.ia;
	for (b = 0; 125 > b; ++b) {
		var g = 0.251328 * b + 0.05 * M(0.4 * b) + 0.2 * M(0.05 * b),
			f = 175 - 1.4 * b + 20 * M(0.1 * b),
			h = 7 * M(2.1 * g);
		e.a.push(new H.A(new H.i(c.x + M(g) * f, c.y + J(g) * f + h)))
	}
	for (b = 0; 25 > b; b += 5) {
		g = 0.251328 * (b + 1.25), f = e, g = g = new H.i(c.x + 170 * M(g), c.y + 170 * J(g)), g = new H.ja(f.a[b], g), f.c.push(g)
	}
	for (b = 0; 124 > b; ++b) {
		e.c.push(new H.o(e.a[b], e.a[b + 1], 0.6)), c = b + 25, 124 > c ? e.c.push(new H.o(e.a[b], e.a[c], 0.6)) : e.c.push(new H.o(e.a[b], e.a[124], 0.6))
	}
	e.c.push(new H.o(e.a[0], e.a[24], 0.6));
	for (d in e.c) {
		e.c[d].pa *= 0.3
	}
	a.m.push(e);
	return e
}

function ta(a, c, b) {
	c.constructor === String && (c = document.getElementById(c));
	a.Na = c;
	if (b && b.file) {
		var d = document.createElement("object");
		d.setAttribute("type", "image/svg+xml");
		d.setAttribute("data", b.file);
		d.setAttribute("copyrightml", "true");
		c.appendChild(d);
		c = d
	}
	switch (c.constructor) {
	case window.SVGSVGElement:
	case window.SVGElement:
		a.j = c;
		a.ta = !0;
		break;
	case window.HTMLObjectElement:
		b = function () {
			if (!a.ta && (a.j = c.contentDocument && c.contentDocument.querySelector("svg"), a.j)) {
				return c.getAttribute("copyrightml") && (a.Na.insertBefore(a.j, c), a.Na.removeChild(c), a.j.setAttribute("width", "100%"), a.j.setAttribute("height", "100%")), a.ta = !0, a.sa(), !0
			}
		}, b() || c.addEventListener("load", b)
	}
}

function ya(a, c) {
	a.callback = c || function () {}
}

function hb(a) {
	a.P += a.speed;
	0 >= a.P ? (a.stop(), a.r(), a.callback(a)) : a.P >= a.B ? (a.stop(), a.P = a.B, a.trace(), a.ob && ib(a), a.callback(a)) : (a.trace(), a.handle = ja(function () {
		hb(a)
	}))
}
D = H.L.prototype;
D.trace = function () {
	var a, c, b, d;
	d = this.Ua(this.P / this.B) * this.B;
	for (a = 0; a < this.map.length; a++) {
		b = this.map[a], c = (d - b.O) / b.duration, c = this.lb(ga(0, ha(1, c))), b.Jb !== c && (b.Jb = c, b.j.style.strokeDashoffset = N(b.length * (1 - c)), jb(this, a))
	}
};

function jb(a, c) {
	if (a.ra && a.map && a.map[c]) {
		var b = a.map[c],
			d = b.j.cloneNode(!0);
		b.j.parentNode.replaceChild(d, b.j);
		b.j = d
	}
}
D.sa = function () {
	this.P = this.B = 0;
	this.map = [];
	new H.Ra(this.j);
	var a, c, b, d, e, g, f;
	f = e = g = 0;
	c = this.j.querySelectorAll("path");
	for (a = 0; a < c.length; a++) {
		b = c[a];
		d = b;
		var h = void 0,
			h = d.getAttribute("data-ignore");
		null !== h ? d = "false" !== h : this.cb ? (h = d.getBoundingClientRect(), d = !h.width && !h.height) : d = !1;
		d || (d = {
			j: b,
			length: ea(b.getTotalLength())
		}, isNaN(d.length) || (this.map.push(d), b.style.strokeDasharray = d.length + " " + (d.length + 2 * this.na), b.style.strokeDashoffset = d.length + this.na, d.length += this.na, e += d.length, jb(this, a)))
	}
	e = 0 === e ? 1 : e;
	this.X = null === this.X ? this.duration / 3 : this.X;
	this.oa = this.X / (1 < c.length ? c.length - 1 : 1);
	for (a = 0; a < this.map.length; a++) {
		d = this.map[a];
		switch (this.type) {
		case "d":
			d.O = this.oa * a;
			d.duration = this.duration - this.X;
			break;
		case "o":
			d.O = g / e * this.duration;
			d.duration = d.length / e * this.duration;
			break;
		case "a":
			d.O = 0;
			d.duration = this.duration;
			break;
		case "c":
			b = d.j;
			c = this.ua(b);
			d.O = f + (la(c["data-delay"], this.oa) || 0);
			d.duration = la(c["data-duration"], this.duration);
			f = void 0 !== c["data-async"] ? d.O : d.O + d.duration;
			this.B = ga(this.B, d.O + d.duration);
			break;
		case "s":
			b = d.j, c = this.ua(b), d.O = la(c["data-start"], this.oa) || 0, d.duration = la(c["data-duration"], this.duration), this.B = ga(this.B, d.O + d.duration)
		}
		g += d.length;
		this.B = this.B || this.duration
	}
	kb(this);
	this.La && this.La(this)
};

function kb(a) {
	switch (a.start) {
	case "a":
		a.p();
		break;
	case "i":
		var c = function () {
			var b = a.Na,
				d = 1,
				e = a.scrollY(),
				g = a.Za.clientHeight,
				f = window.innerHeight,
				g = e + (g < f ? f : g),
				f = b.getBoundingClientRect(),
				b = f.height,
				f = e + f.top;
			f + b * (d || 0) <= g && f + b >= e && (a.p(), window.removeEventListener("scroll", c))
		};
		window.addEventListener("scroll", c);
		c()
	}
}
D.r = function () {
	return lb(this, 0)
};
D.finish = function () {
	return lb(this, 1)
};

function lb(a, c) {
	c = ha(1, ga(0, c));
	a.P = Math.round(a.B * c);
	a.trace();
	return a
}
D.p = function (a) {
	this.speed = a || 1;
	this.handle || hb(this);
	return this
};
D.stop = function () {
	this.handle && (ka(this.handle), this.handle = null);
	return this
};

function ib(a) {
	a.stop();
	var c, b;
	for (c = 0; c < a.map.length; c++) {
		b = a.map[c], b.j.style.strokeDashoffset = null, b.j.style.strokeDasharray = null, jb(a, c)
	}
}
D.ua = function (a) {
	var c, b = {};
	if (a && a.attributes) {
		for (var d = 0; d < a.attributes.length; d++) {
			c = a.attributes[d], b[c.name] = c.value
		}
	}
	return b
};
D.Za = window.document.documentElement;
D.scrollY = function () {
	return window.pageYOffset || this.Za.scrollTop
};
H.w.prototype = {
	constructor: H.w,
	set: function (a, c, b) {
		this.x = a;
		this.y = c;
		this.z = b;
		return this
	},
	ma: function (a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		return this
	},
	add: function (a, c) {
		this.x = a.x + c.x;
		this.y = a.y + c.y;
		this.z = a.z + c.z;
		return this
	},
	ba: function (a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		return this
	},
	sub: function (a, c) {
		this.x = a.x - c.x;
		this.y = a.y - c.y;
		this.z = a.z - c.z;
		return this
	},
	sb: function (a) {
		this.x = this.x - a.x;
		this.y = this.y - a.y;
		this.z = this.z - a.z;
		return this
	},
	multiply: function (a, c) {
		this.x = a.x * c.x;
		this.y = a.y * c.y;
		this.z = a.z * c.z;
		return this
	},
	C: function (a) {
		this.x = this.x * a;
		this.y = this.y * a;
		this.z = this.z * a;
		return this
	},
	Ea: function (a) {
		a ? (this.x = this.x / a, this.y = this.y / a, this.z = this.z / a) : this.z = this.y = this.x = 0;
		return this
	},
	Fa: function (a) {
		return this.x * a.x + this.y * a.y + this.z * a.z
	},
	Y: function () {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	length: function () {
		return ca(this.Y())
	},
	normalize: function () {
		return this.Ea(this.length())
	},
	Da: function (a) {
		return (new H.w).sub(this, a).Y()
	},
	clone: function () {
		return new H.w(this.x, this.y, this.z)
	}
};
H.u.prototype = {
	constructor: H.u,
	set: function (a, c, b, d, e, g, f, h, x, w, m, k, q, p, r, n) {
		var l = this.elements;
		l[0] = a;
		l[4] = c;
		l[8] = b;
		l[12] = d;
		l[1] = e;
		l[5] = g;
		l[9] = f;
		l[13] = h;
		l[2] = x;
		l[6] = w;
		l[10] = m;
		l[14] = k;
		l[3] = q;
		l[7] = p;
		l[11] = r;
		l[15] = n;
		return this
	},
	ma: function (a) {
		a = a.elements;
		this.set(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]);
		return this
	},
	multiply: function (a, c) {
		var b = a.elements,
			d = c.elements,
			e = this.elements,
			g = b[0],
			f = b[4],
			h = b[8],
			x = b[12],
			w = b[1],
			m = b[5],
			k = b[9],
			q = b[13],
			p = b[2],
			r = b[6],
			n = b[10],
			l = b[14],
			t = b[3],
			v = b[7],
			u = b[11],
			b = b[15],
			y = d[0],
			z = d[4],
			C = d[8],
			B = d[12],
			A = d[1],
			E = d[5],
			F = d[9],
			I = d[13],
			G = d[2],
			ua = d[6],
			va = d[10],
			wa = d[14],
			xa = d[3],
			Ba = d[7],
			Ca = d[11],
			d = d[15];
		e[0] = g * y + f * A + h * G + x * xa;
		e[4] = g * z + f * E + h * ua + x * Ba;
		e[8] = g * C + f * F + h * va + x * Ca;
		e[12] = g * B + f * I + h * wa + x * d;
		e[1] = w * y + m * A + k * G + q * xa;
		e[5] = w * z + m * E + k * ua + q * Ba;
		e[9] = w * C + m * F + k * va + q * Ca;
		e[13] = w * B + m * I + k * wa + q * d;
		e[2] = p * y + r * A + n * G + l * xa;
		e[6] = p * z + r * E + n * ua + l * Ba;
		e[10] = p * C + r * F + n * va + l * Ca;
		e[14] = p * B + r * I + n * wa + l * d;
		e[3] = t * y + v * A + u * G + b * xa;
		e[7] = t * z + v * E + u * ua + b * Ba;
		e[11] = t * C + v * F + u * va + b * Ca;
		e[15] = t * B + v * I + u * wa + b * d;
		return this
	},
	C: function (a) {
		var c = this.elements;
		c[0] *= a;
		c[4] *= a;
		c[8] *= a;
		c[12] *= a;
		c[1] *= a;
		c[5] *= a;
		c[9] *= a;
		c[13] *= a;
		c[2] *= a;
		c[6] *= a;
		c[10] *= a;
		c[14] *= a;
		c[3] *= a;
		c[7] *= a;
		c[11] *= a;
		c[15] *= a;
		return this
	},
	setPosition: function (a) {
		var c = this.elements;
		c[12] = a.x;
		c[13] = a.y;
		c[14] = a.z;
		return this
	},
	translate: function (a) {
		var c = this.elements,
			b = a.x,
			d = a.y;
		a = a.z;
		c[12] = c[0] * b + c[4] * d + c[8] * a + c[12];
		c[13] = c[1] * b + c[5] * d + c[9] * a + c[13];
		c[14] = c[2] * b + c[6] * d + c[10] * a + c[14];
		c[15] = c[3] * b + c[7] * d + c[11] * a + c[15];
		return this
	},
	scale: function (a) {
		var c = this.elements,
			b = a.x,
			d = a.y;
		a = a.z;
		c[0] *= b;
		c[4] *= d;
		c[8] *= a;
		c[1] *= b;
		c[5] *= d;
		c[9] *= a;
		c[2] *= b;
		c[6] *= d;
		c[10] *= a;
		c[3] *= b;
		c[7] *= d;
		c[11] *= a;
		return this
	},
	clone: function () {
		var a = this.elements;
		return new H.u(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
	}
};

function mb(a, c, b, d, e, g, f) {
	a = a.elements;
	a[0] = 2 * g / (b - c);
	a[4] = 0;
	a[8] = (b + c) / (b - c);
	a[12] = 0;
	a[1] = 0;
	a[5] = 2 * g / (e - d);
	a[9] = (e + d) / (e - d);
	a[13] = 0;
	a[2] = 0;
	a[6] = 0;
	a[10] = -(f + g) / (f - g);
	a[14] = -2 * f * g / (f - g);
	a[3] = 0;
	a[7] = 0;
	a[11] = -1;
	a[15] = 0
}

function Aa(a) {
	a = a.elements;
	var c;
	c = a[1];
	a[1] = a[4];
	a[4] = c;
	c = a[2];
	a[2] = a[8];
	a[8] = c;
	c = a[6];
	a[6] = a[9];
	a[9] = c;
	c = a[3];
	a[3] = a[12];
	a[12] = c;
	c = a[7];
	a[7] = a[13];
	a[13] = c;
	c = a[11];
	a[11] = a[14];
	a[14] = c
}
H.u.Mb = new H.w;
H.u.Nb = new H.w;
H.u.Ob = new H.w;
H.u.xb = new H.u;
H.u.Lb = new H.u;
H.F.prototype = {
	constructor: H.F,
	translate: function (a, c) {
		var b = this.Z.elements,
			d = c.x,
			e = c.y,
			g = c.z;
		c.x = d * b[0] + e * b[4] + g * b[8];
		c.y = d * b[1] + e * b[5] + g * b[9];
		c.z = d * b[2] + e * b[6] + g * b[10];
		c.normalize();
		this.position.ba(c.C(a))
	},
	add: function (a) {
		if (a !== this && a instanceof H.F) {
			void 0 !== a.parent && a.parent.remove(a);
			a.parent = this;
			this.children.push(a);
			for (var c = this; void 0 !== c.parent;) {
				c = c.parent
			}
			void 0 !== c && c instanceof H.ka && nb(c, a)
		}
	},
	remove: function (a) {
		var c = this.children.indexOf(a);
		if (-1 !== c) {
			a.parent = void 0;
			this.children.splice(c, 1);
			for (c = this; void 0 !== c.parent;) {
				c = c.parent
			}
			void 0 !== c && c instanceof H.ka && ob(c, a)
		}
	},
	clone: function () {}
};

function Da(a, c) {
	if (!0 === a.gb) {
		a.Z.setPosition(a.position);
		var b = a.rotation,
			d = a.Cb,
			e = a.Z.elements,
			g = b.x,
			f = b.y,
			b = b.z,
			h = M(g),
			g = J(g),
			x = M(f),
			f = J(f),
			w = M(b),
			b = J(b);
		if (void 0 === d || "XYZ" === d) {
			var d = h * w,
				m = h * b,
				k = g * w,
				q = g * b;
			e[0] = x * w;
			e[4] = -x * b;
			e[8] = f;
			e[1] = m + k * f;
			e[5] = d - q * f;
			e[9] = -g * x;
			e[2] = q - d * f;
			e[6] = k + m * f;
			e[10] = h * x
		} else {
			"YXZ" === d ? (d = x * w, m = x * b, k = f * w, q = f * b, e[0] = d + q * g, e[4] = k * g - m, e[8] = h * f, e[1] = h * b, e[5] = h * w, e[9] = -g, e[2] = m * g - k, e[6] = q + d * g, e[10] = h * x) : "ZXY" === d ? (d = x * w, m = x * b, k = f * w, q = f * b, e[0] = d - q * g, e[4] = -h * b, e[8] = k + m * g, e[1] = m + k * g, e[5] = h * w, e[9] = q - d * g, e[2] = -h * f, e[6] = g, e[10] = h * x) : "ZYX" === d ? (d = h * w, m = h * b, k = g * w, q = g * b, e[0] = x * w, e[4] = k * f - m, e[8] = d * f + q, e[1] = x * b, e[5] = q * f + d, e[9] = m * f - k, e[2] = -f, e[6] = g * x, e[10] = h * x) : "YZX" === d ? (d = h * x, m = h * f, k = g * x, q = g * f, e[0] = x * w, e[4] = q - d * b, e[8] = k * b + m, e[1] = b, e[5] = h * w, e[9] = -g * w, e[2] = -f * w, e[6] = m * b + k, e[10] = d - q * b) : "XZY" === d && (d = h * x, m = h * f, k = g * x, q = g * f, e[0] = x * w, e[4] = -b, e[8] = f * w, e[1] = d * b + q, e[5] = h * w, e[9] = m * b - k, e[2] = k * b - m, e[6] = g * w, e[10] = q * b + d)
		}
		1 === a.scale.x && 1 === a.scale.y && 1 === a.scale.z || a.Z.scale(a.scale);
		a.Ja = !0
	}
	if (!0 === a.Ja || !0 === c) {
		void 0 === a.parent ? a.fa.ma(a.Z) : a.fa.multiply(a.parent.fa, a.Z), a.Ja = !1, c = !0
	}
	e = 0;
	for (g = a.children.length; e < g; e++) {
		Da(a.children[e], c)
	}
}
H.F.xb = new H.u;
H.$.prototype = Object.create(H.F.prototype);
H.Sa.prototype = Object.create(H.$.prototype);

function za(a) {
	if (a.Ia) {
		var c = a.Ia / a.ab,
			b = Math.tan(3.1416 * a.Ha / 360) * a.Ka,
			d = -b,
			e = c * d,
			c = fa(c * b - e),
			d = fa(b - d);
		mb(a.mb, e + a.x * c / a.Ia, e + (a.x + a.width) * c / a.Ia, b - (a.y + a.height) * d / a.ab, b - a.y * d / a.ab, a.Ka, a.$a)
	} else {
		c = a.Ha, b = a.Va, d = a.Ka, c = d * Math.tan(3.1416 * c / 360), e = -c, mb(a.mb, e * b, c * b, e, c, d, a.$a)
	}
}
H.ka.prototype = Object.create(H.F.prototype);

function nb(a, c) {
	if (!(c instanceof H.$) && -1 === a.la.indexOf(c)) {
		a.la.push(c);
		a.Aa.push(c);
		var b = a.Ba.indexOf(c); - 1 !== b && a.Ba.splice(b, 1)
	}
	for (b = 0; b < c.children.length; b++) {
		nb(a, c.children[b])
	}
}

function ob(a, c) {
	if (c instanceof H.Kb) {
		var b = a.Ta.indexOf(c); - 1 !== b && a.Ta.splice(b, 1)
	} else {
		c instanceof H.$ || (b = a.la.indexOf(c), -1 !== b && (a.la.splice(b, 1), a.Ba.push(c), b = a.Aa.indexOf(c), -1 !== b && a.Aa.splice(b, 1)))
	}
	for (b = 0; b < c.children.length; b++) {
		ob(a, c.children[b])
	}
}
H.ya.prototype = Object.create(H.F.prototype);

function pb() {
	qb = window.innerWidth / 2;
	rb = window.innerHeight / 2;
	sb.Va = window.innerWidth / window.innerHeight;
	za(sb);
	tb.pb()
}

function ub(a) {
	a.preventDefault();
	document.addEventListener("mousemove", vb, !1);
	document.addEventListener("mouseup", wb, !1);
	document.addEventListener("mouseout", xb, !1);
	yb = a.clientX - qb;
	zb = a.clientY - rb;
	Ab = W;
	Bb = X
}

function vb(a) {
	Cb = a.clientX - qb;
	Db = a.clientY - rb;
	W = Ab + Eb * (Cb - yb) * 0.02;
	X = Bb + 0.02 * (Db - zb)
}

function wb() {
	document.removeEventListener("mousemove", vb, !1);
	document.removeEventListener("mouseup", wb, !1);
	document.removeEventListener("mouseout", xb, !1)
}

function xb() {
	document.removeEventListener("mousemove", vb, !1);
	document.removeEventListener("mouseup", wb, !1);
	document.removeEventListener("mouseout", xb, !1)
}

function Fb(a) {
	1 === a.touches.length && (a.preventDefault(), yb = a.touches[0].pageX - qb, zb = a.touches[0].pageY - rb, Ab = W)
}

function Gb(a) {
	1 === a.touches.length && (a.preventDefault(), Cb = a.touches[0].pageX - qb, Db = a.touches[0].pageY - rb, W = Ab + 0.05 * (Cb - yb), X = Bb + 0.05 * (Db - zb))
}
var sb, Hb, tb, Y, Ib, Z, W = 6.8 + 0.5236 * Rnd(),
	X = 1.57,
	Jb = -98,
	Ab = 0,
	Bb = 0,
	Cb = 0,
	Db = 0,
	yb = 0,
	zb = 0,
	qb = window.innerWidth / 2,
	rb = window.innerHeight / 2,
	O, P = 1,
	Kb = !1,
	Lb = !1,
	Eb = 0;

function initHome(a) {
	function c() {
		Ib.rotation.z = Y.rotation.y += 0.05 * (W - Y.rotation.y);
		if (Kb) {
			Y.rotation.x += 0.05 * (X - Y.rotation.x);
			Ib.position.y += 0.05 * (Jb - Ib.position.y);
			var a = (N(360 * Y.rotation.x / 6.2832) % 360 + 360) % 360,
				b = Z.position.y;
			80 > a || 280 < a ? Z.position.y += 0.02 * (-95 - Z.position.y) : 100 < a && 260 > a && (Z.position.y += 0.02 * (95 - Z.position.y));
			a = document.querySelectorAll("text");
			if (0 > Z.position.y && 0 < b) {
				for (b = 0; b < a.length; b++) {
					a[b].setAttribute("transform", "rotate(0 100 100)")
				}
			} else {
				if (0 < Z.position.y && 0 > b) {
					for (b = 0; b < a.length; b++) {
						a[b].setAttribute("transform", "rotate(180 100 100)")
					}
				}
			}
			Eb = 0 > Z.position.y ? 1 : -1
		}
		tb.ha(Hb, sb);
		ja(c)
	}
	if (a instanceof Object) {
		history.replaceState('', '', 'https://huu.vn/chat');
		return La(new H.Error(a))
	}
	if (!a) {
		return initPage()
	}
	history.replaceState('', '', 'https://huu.vn');
	a = document.createElement("div");
	document.body.appendChild(a);
	sb = new H.Sa(50, window.innerWidth / window.innerHeight, 1, 1000);
	Hb = new H.ka;
	Y = new H.F;
	sb.position.set(0, 0, 594);
	for (var b = [
		['<canvas id="www"/>', 0, 97, 0, 1.57, 0, 0],
		['<canvas id="copyrightml" height="310" width="510"/>', 0, -97, 0, 1.57, 0, 0],
		['<svg id="huu" onclick="H.h.r().p();" viewBox="0 0 340 340" <defs><radialGradient id="top" cx="50%" cy="45%" r="50%" fx="50%" fy="50%"><stop offset="0%" style="stop-color:rgb(255,255,255)" /><stop offset="100%" style="stop-color:rgb(220,220,220)"/></radialGradient><radialGradient id="bottom" cx="50%" cy="45%" r="50%" fx="50%" fy="50%"><stop offset="0%" style="stop-color:rgb(255,255,255)" /><stop offset="100%" style="stop-color:rgb(0,0,0)"/></radialGradient></defs>><polygon points="71.4531,34.3618 10.5477,221.8092 170.0000,337.6580 329.4523,221.8092 268.5469,34.3618 71.4531,34.3618"/></svg>', 0, -100, 0, 1.57, 0, 0],
		['<div id="vn" onclick="Instagram();" width="340" height="340"></div>', 0, 100, 0, 1.57, 0, 0],
		['<svg id="p" viewBox="0 0 200 200" onclick="H.p#><text x="100" y="160">\u00c0</text></svg>', 0, 0, 137.6382, 0, 0, 0],
		['<svg id="q" viewBox="0 0 200 200" onclick="H.q#><text x="100" y="160">\u00c1</text></svg>', 130.9017, 0, 42.5325, 0, 1.2566, 0],
		['<svg id="t" viewBox="0 0 200 200" onclick="H.t#><text x="100" y="160">\u00c2</text></svg>', 80.9017, 0, -111.3516, 0, 2.5133, 0],
		['<svg id="k" viewBox="0 0 200 200" onclick="H.k#><text x="100" y="160">\u00c3</text></svg>', -80.9017, 0, -111.3516, 0, 3.7699, 0],
		['<svg id="n" viewBox="0 0 200 200" onclick="H.n#><text x="100" y="160">\u00c4</text></svg>', -130.9017, 0, 42.5325, 0, 5.0265, 0]
	], d = 0; d < b.length; d++) {
		var e = document.createElement("div"),
			g = new H.ya(e);
		3 >= d ? (e.innerHTML = b[d][0], e.style.width = "340px", e.style.height = "340px") : (e.innerHTML = b[d][0].replace("#", O[5]), e.style.width = "200px", e.style.height = "200px");
		g.position.x = b[d][1];
		g.position.y = b[d][2];
		g.position.z = b[d][3];
		g.rotation.x = b[d][4];
		g.rotation.y = b[d][5];
		g.rotation.z = b[d][6];
		Y.add(g);
		0 == d && (Z = g);
		1 == d && (Ib = g)
	}
	Hb.add(Y);
	tb = new H.ub;
	tb.pb();
	tb.G.style.position = "absolute";
	tb.G.style.top = 0;
	a.appendChild(tb.G);
	document.addEventListener("mousedown", ub, !1);
	document.addEventListener("touchstart", Fb, !1);
	document.addEventListener("touchmove", Gb, !1);
	window.addEventListener("resize", pb, !1);
	window.addEventListener("load", H.tb, !1);
	c();
	(function () {
		H1035298654.K(H.KEY16);
		H1035298654.update("");
		ba = H1035298654.get();
		"4CEEE2D1E1FE96543F1C3C135A64943FD1D9FEFB947E2C3B2AC0CBA0D03267B7D8DD3B9C8143477C7DACDB3907F0EE98" === ba && (H.h || (H.h = new H.L("huu", {}, function (a) {
			a.j.setAttribute("class", "z");
			Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, Lb && (X = -1.5708, Jb = -480, GLOBAL.setTimeout(function () {
				location.href = P ? location.href.replace("hu", 2 == P ? "my.hu" : "luong.hu") + (2 == P ? "" : "...") : location.href + "/info";
				X = 1.5708;
				Jb = -98
			}, 5000))) : W -= 1.25664;
			H.p || (H.p = new H.L("p", {}, function (a) {
				a.j.setAttribute("class", "z");
				Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, P = 0, Lb = !0) : W -= 1.25664;
				H.q || (H.q = new H.L("q", {}, function (a) {
					a.j.setAttribute("class", "z");
					Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, P = 1, Lb = !0) : W -= 1.25664;
					H.t || (H.t = new H.L("t", {}, function (a) {
						a.j.setAttribute("class", "z");
						Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, P = 2, Lb = !0) : W -= 1.25664;
						H.k || (H.k = new H.L("k", {}, function (a) {
							a.j.setAttribute("class", "z");
							Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, P = 3, Lb = !0) : W -= 1.25664;
							H.n || (H.n = new H.L("n", {}, function (a) {
								a.j.setAttribute("class", "z");
								Kb ? (W = 0.62832 + 1.25664 * N(10 * Rnd() + 1), X = -1.5708, P = 4, Lb = !0) : (W -= 0.62832, H.wb(), H.h.r().p(), GLOBAL.setTimeout('document.getElementById("...")?document.getElementById("...").remove():null;document.body.style.cursor="default"', 1000));
								Kb = !0;
								H.v || (H.l = H.l && H.l.Rnd() || "H1035298654", H.v = new H.L("vn", {
									file: "canvas/" + H.l + ".svg",
									duration: 500,
									ra: !0
								}, function () {
									document.getElementById("vietnam") ? document.getElementById("vietnam").setAttribute("class", "z") : null;
									document.getElementById("VN-SG") ? document.getElementById("VN-SG").style.fill = "red" : null
								}))
							}))
						}))
					}))
				}))
			}))
		})))
	})();
	window.Instagram = function () {
		H.l = H.l.Rnd();
		var a = new XMLHttpRequest,
			b = "canvas/" + H.l + ".svg";
		a.open("GET", b, !1);
		a.send();
		document.getElementById("vn").innerHTML = "";
		200 != a.status && (b = "canvas/logo.svg", H.l = "".Rnd());
		H.v = new H.L("vn", {
			file: b,
			duration: 500,
			ra: !0
		}, function () {
			document.getElementById("klass") ? document.getElementById("klass").setAttribute("class", "z") : null;
			document.getElementById("IDL") ? document.getElementById("IDL").style.fill = "#4285F4" : null;
			document.getElementById("IDT") ? document.getElementById("IDT").style.fill = "#EA4335" : null;
			document.getElementById("HERE") ? document.getElementById("HERE").style.fill = "red" : null;
			document.getElementById("RED") ? document.getElementById("RED").style.fill = "red" : null;
			document.getElementById("GREEN") ? document.getElementById("GREEN").style.fill = "green" : null;
			document.getElementById("BLUE") ? document.getElementById("BLUE").style.fill = "blue" : null;
			document.getElementById("YELLOW") ? document.getElementById("YELLOW").style.fill = "yellow" : null;
			document.getElementById("BLACK") ? document.getElementById("BLACK").style.fill = "black" : null;
			document.getElementById("WHITE") ? document.getElementById("WHITE").style.fill = "white" : null;
			document.getElementById("BROWN") ? document.getElementById("BROWN").style.fill = "brown" : null
		})
	}
}(function (V, W, v) {
	function z(b) {
		return function () {
			var a = arguments[0],
				c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.29/" + (b ? b + "/" : "") + a;
			for (c = 1; c < arguments.length; c++) {
				a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c])
			}
			return Error(a)
		}
	}

	function Ra(b) {
		if (null == b || Ha(b)) {
			return !1
		}
		var a = b.length;
		return 1 === b.nodeType && a ? !0 : E(b) || M(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
	}

	function r(b, a, c) {
		var d;
		if (b) {
			if (O(b)) {
				for (d in b) {
					"prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d)
				}
			} else {
				if (M(b) || Ra(b)) {
					for (d = 0; d < b.length; d++) {
						a.call(c, b[d], d)
					}
				} else {
					if (b.forEach && b.forEach !== r) {
						b.forEach(a, c)
					} else {
						for (d in b) {
							b.hasOwnProperty(d) && a.call(c, b[d], d)
						}
					}
				}
			}
		}
		return b
	}

	function Wb(b) {
		var a = [],
			c;
		for (c in b) {
			b.hasOwnProperty(c) && a.push(c)
		}
		return a.sort()
	}

	function Tc(b, a, c) {
		for (var d = Wb(b), e = 0; e < d.length; e++) {
			a.call(c, b[d[e]], d[e])
		}
		return d
	}

	function Xb(b) {
		return function (a, c) {
			b(c, a)
		}
	}

	function hb() {
		for (var b = na.length, a; b;) {
			b--;
			a = na[b].charCodeAt(0);
			if (57 == a) {
				return na[b] = "A", na.join("")
			}
			if (90 == a) {
				na[b] = "0"
			} else {
				return na[b] = String.fromCharCode(a + 1), na.join("")
			}
		}
		na.unshift("0");
		return na.join("")
	}

	function Yb(b, a) {
		a ? b.$$hashKey = a : delete b.$$hashKey
	}

	function F(b) {
		var a = b.$$hashKey;
		r(arguments, function (a) {
			a !== b && r(a, function (a, c) {
				b[c] = a
			})
		});
		Yb(b, a);
		return b
	}

	function U(b) {
		return parseInt(b, 10)
	}

	function Zb(b, a) {
		return F(new(F(function () {}, {
			prototype: b
		})), a)
	}

	function B() {}

	function ga(b) {
		return b
	}

	function Z(b) {
		return function () {
			return b
		}
	}

	function H(b) {
		return "undefined" === typeof b
	}

	function G(b) {
		return "undefined" !== typeof b
	}

	function T(b) {
		return null != b && "object" === typeof b
	}

	function E(b) {
		return "string" === typeof b
	}

	function ib(b) {
		return "number" === typeof b
	}

	function ua(b) {
		return "[object Date]" === Aa.call(b)
	}

	function O(b) {
		return "function" === typeof b
	}

	function jb(b) {
		return "[object RegExp]" === Aa.call(b)
	}

	function Ha(b) {
		return b && b.document && b.location && b.alert && b.setInterval
	}

	function Uc(b) {
		return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
	}

	function Vc(b, a, c) {
		var d = [];
		r(b, function (b, f, g) {
			d.push(a.call(c, b, f, g))
		});
		return d
	}

	function Sa(b, a) {
		if (b.indexOf) {
			return b.indexOf(a)
		}
		for (var c = 0; c < b.length; c++) {
			if (a === b[c]) {
				return c
			}
		}
		return -1
	}

	function Ta(b, a) {
		var c = Sa(b, a);
		0 <= c && b.splice(c, 1);
		return a
	}

	function Ia(b, a, c, d) {
		if (Ha(b) || b && b.$evalAsync && b.$watch) {
			throw Ua("cpws")
		}
		if (a) {
			if (b === a) {
				throw Ua("cpi")
			}
			c = c || [];
			d = d || [];
			if (T(b)) {
				var e = Sa(c, b);
				if (-1 !== e) {
					return d[e]
				}
				c.push(b);
				d.push(a)
			}
			if (M(b)) {
				for (var f = a.length = 0; f < b.length; f++) {
					e = Ia(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e)
				}
			} else {
				var g = a.$$hashKey;
				M(a) ? a.length = 0 : r(a, function (b, c) {
					delete a[c]
				});
				for (f in b) {
					e = Ia(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e
				}
				Yb(a, g)
			}
		} else {
			if (a = b) {
				M(b) ? a = Ia(b, [], c, d) : ua(b) ? a = new Date(b.getTime()) : jb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : T(b) && (a = Ia(b, {}, c, d))
			}
		}
		return a
	}

	function ha(b, a) {
		if (M(b)) {
			a = a || [];
			for (var c = 0; c < b.length; c++) {
				a[c] = b[c]
			}
		} else {
			if (T(b)) {
				for (c in a = a || {}, b) {
					!kb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c])
				}
			}
		}
		return a || b
	}

	function Ba(b, a) {
		if (b === a) {
			return !0
		}
		if (null === b || null === a) {
			return !1
		}
		if (b !== b && a !== a) {
			return !0
		}
		var c = typeof b,
			d;
		if (c == typeof a && "object" == c) {
			if (M(b)) {
				if (!M(a)) {
					return !1
				}
				if ((c = b.length) == a.length) {
					for (d = 0; d < c; d++) {
						if (!Ba(b[d], a[d])) {
							return !1
						}
					}
					return !0
				}
			} else {
				if (ua(b)) {
					return ua(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() === a.getTime() : !1
				}
				if (jb(b) && jb(a)) {
					return b.toString() == a.toString()
				}
				if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ha(b) || Ha(a) || M(a)) {
					return !1
				}
				c = {};
				for (d in b) {
					if ("$" !== d.charAt(0) && !O(b[d])) {
						if (!Ba(b[d], a[d])) {
							return !1
						}
						c[d] = !0
					}
				}
				for (d in a) {
					if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== v && !O(a[d])) {
						return !1
					}
				}
				return !0
			}
		}
		return !1
	}

	function Ab(b, a) {
		var c = 2 < arguments.length ? va.call(arguments, 2) : [];
		return !O(a) || a instanceof RegExp ? a : c.length ? function () {
			return arguments.length ? a.apply(b, c.concat(va.call(arguments, 0))) : a.apply(b, c)
		} : function () {
			return arguments.length ? a.apply(b, arguments) : a.call(b)
		}
	}

	function Wc(b, a) {
		var c = a;
		"string" === typeof b && "$" === b.charAt(0) ? c = v : Ha(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
		return c
	}

	function oa(b, a) {
		return "undefined" === typeof b ? v : JSON.stringify(b, Wc, a ? "  " : null)
	}

	function $b(b) {
		return E(b) ? JSON.parse(b) : b
	}

	function Va(b) {
		"function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = A("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
		return b
	}

	function ia(b) {
		b = D(b).clone();
		try {
			b.empty()
		} catch (a) {}
		var c = D("<div>").append(b).html();
		try {
			return 3 === b[0].nodeType ? A(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return "<" + A(b)
			})
		} catch (d) {
			return A(c)
		}
	}

	function ac(b) {
		try {
			return decodeURIComponent(b)
		} catch (a) {}
	}

	function bc(b) {
		var a = {},
			c, d;
		r((b || "").split("&"), function (b) {
			b && (c = b.replace(/\+/g, "%20").split("="), d = ac(c[0]), G(d) && (b = G(c[1]) ? ac(c[1]) : !0, kb.call(a, d) ? M(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
		});
		return a
	}

	function Bb(b) {
		var a = [];
		r(b, function (b, d) {
			M(b) ? r(b, function (b) {
				a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
			}) : a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
		});
		return a.length ? a.join("&") : ""
	}

	function lb(b) {
		return Ca(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function Ca(b, a) {
		return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
	}

	function Xc(b, a) {
		function c(a) {
			a && d.push(a)
		}
		var d = [b],
			e, f, g = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
			h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		r(g, function (a) {
			g[a] = !0;
			c(W.getElementById(a));
			a = a.replace(":", "\\:");
			b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
		});
		r(d, function (a) {
			if (!e) {
				var b = h.exec(" " + a.className + " ");
				b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function (b) {
					!e && g[b.name] && (e = a, f = b.value)
				})
			}
		});
		e && a(e, f ? [f] : [])
	}

	function cc(b, a) {
		var c = function () {
				b = D(b);
				if (b.injector()) {
					var c = b[0] === W ? "document" : ia(b);
					throw Ua("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"))
				}
				a = a || [];
				a.unshift(["$provide",
					function (a) {
						a.value("$rootElement", b)
					}
				]);
				a.unshift("ng");
				c = dc(a);
				c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
					function (a, b, c, d, e) {
						a.$apply(function () {
							b.data("$injector", d);
							c(b)(a)
						})
					}
				]);
				return c
			},
			d = /^NG_DEFER_BOOTSTRAP!/;
		if (V && !d.test(V.name)) {
			return c()
		}
		V.name = V.name.replace(d, "");
		Wa.resumeBootstrap = function (b) {
			r(b, function (b) {
				a.push(b)
			});
			c()
		}
	}

	function mb(b, a) {
		a = a || "_";
		return b.replace(Yc, function (b, d) {
			return (d ? a : "") + b.toLowerCase()
		})
	}

	function Cb(b, a, c) {
		if (!b) {
			throw Ua("areq", a || "?", c || "required")
		}
		return b
	}

	function Xa(b, a, c) {
		c && M(b) && (b = b[b.length - 1]);
		Cb(O(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
		return b
	}

	function Da(b, a) {
		if ("hasOwnProperty" === b) {
			throw Ua("badname", a)
		}
	}

	function ec(b, a, c) {
		if (!a) {
			return b
		}
		a = a.split(".");
		for (var d, e = b, f = a.length, g = 0; g < f; g++) {
			d = a[g], b && (b = (e = b)[d])
		}
		return !c && O(b) ? Ab(e, b) : b
	}

	function Db(b) {
		var a = b[0];
		b = b[b.length - 1];
		if (a === b) {
			return D(a)
		}
		var c = [a];
		do {
			a = a.nextSibling;
			if (!a) {
				break
			}
			c.push(a)
		} while (a !== b);
		return D(c)
	}

	function Zc(b) {
		var a = z("$injector"),
			c = z("ng");
		b = b.angular || (b.angular = {});
		b.$$minErr = b.$$minErr || z;
		return b.module || (b.module = function () {
			var b = {};
			return function (e, f, g) {
				if ("hasOwnProperty" === e) {
					throw c("badname", "module")
				}
				f && b.hasOwnProperty(e) && (b[e] = null);
				return b[e] || (b[e] = function () {
					function b(a, d, e) {
						return function () {
							c[e || "push"]([a, d, arguments]);
							return n
						}
					}
					if (!f) {
						throw a("nomod", e)
					}
					var c = [],
						d = [],
						m = b("$injector", "invoke"),
						n = {
							_invokeQueue: c,
							_runBlocks: d,
							requires: f,
							name: e,
							provider: b("$provide", "provider"),
							factory: b("$provide", "factory"),
							service: b("$provide", "service"),
							value: b("$provide", "value"),
							constant: b("$provide", "constant", "unshift"),
							animation: b("$animateProvider", "register"),
							filter: b("$filterProvider", "register"),
							controller: b("$controllerProvider", "register"),
							directive: b("$compileProvider", "directive"),
							config: m,
							run: function (a) {
								d.push(a);
								return this
							}
						};
					g && m(g);
					return n
				}())
			}
		}())
	}

	function $c(b) {
		F(b, {
			bootstrap: cc,
			copy: Ia,
			extend: F,
			equals: Ba,
			element: D,
			forEach: r,
			injector: dc,
			noop: B,
			bind: Ab,
			toJson: oa,
			fromJson: $b,
			identity: ga,
			isUndefined: H,
			isDefined: G,
			isString: E,
			isFunction: O,
			isObject: T,
			isNumber: ib,
			isElement: Uc,
			isArray: M,
			version: ad,
			isDate: ua,
			lowercase: A,
			uppercase: Ja,
			callbacks: {
				counter: 0
			},
			$$minErr: z,
			$$csp: Ya
		});
		Za = Zc(V);
		try {
			Za("ngLocale")
		} catch (a) {
			Za("ngLocale", []).provider("$locale", bd)
		}
		Za("ng", ["ngLocale"], ["$provide",
			function (a) {
				a.provider({
					$$sanitizeUri: cd
				});
				a.provider("$compile", fc).directive({
					a: dd,
					input: gc,
					textarea: gc,
					form: ed,
					script: fd,
					select: gd,
					style: hd,
					option: id,
					ngBind: jd,
					ngBindHtml: kd,
					ngBindTemplate: ld,
					ngClass: md,
					ngClassEven: nd,
					ngClassOdd: od,
					ngCloak: pd,
					ngController: qd,
					ngForm: rd,
					ngHide: sd,
					ngIf: td,
					ngInclude: ud,
					ngInit: vd,
					ngNonBindable: wd,
					ngPluralize: xd,
					ngRepeat: yd,
					ngShow: zd,
					ngStyle: Ad,
					ngSwitch: Bd,
					ngSwitchWhen: Cd,
					ngSwitchDefault: Dd,
					ngOptions: Ed,
					ngTransclude: Fd,
					ngModel: Gd,
					ngList: Hd,
					ngChange: Id,
					required: hc,
					ngRequired: hc,
					ngValue: Jd
				}).directive({
					ngInclude: Kd
				}).directive(Eb).directive(ic);
				a.provider({
					$anchorScroll: Ld,
					$animate: Md,
					$browser: Nd,
					$cacheFactory: Od,
					$controller: Pd,
					$document: Qd,
					$exceptionHandler: Rd,
					$filter: jc,
					$interpolate: Sd,
					$interval: Td,
					$http: Ud,
					$httpBackend: Vd,
					$location: Wd,
					$log: Xd,
					$parse: Yd,
					$rootScope: Zd,
					$q: $d,
					$sce: ae,
					$sceDelegate: be,
					$sniffer: ce,
					$templateCache: de,
					$timeout: ee,
					$window: fe,
					$$rAF: ge,
					$$asyncCallback: he
				})
			}
		])
	}

	function $a(b) {
		return b.replace(ie, function (a, b, d, e) {
			return e ? d.toUpperCase() : d
		}).replace(je, "Moz$1")
	}

	function Fb(b, a, c, d) {
		function e(b) {
			var e = c && b ? [this.filter(b)] : [this],
				k = a,
				l, m, n, q, p, s;
			if (!d || null != b) {
				for (; e.length;) {
					for (l = e.shift(), m = 0, n = l.length; m < n; m++) {
						for (q = D(l[m]), k ? q.triggerHandler("$destroy") : k = !k, p = 0, q = (s = q.children()).length; p < q; p++) {
							e.push(Ea(s[p]))
						}
					}
				}
			}
			return f.apply(this, arguments)
		}
		var f = Ea.fn[b],
			f = f.$original || f;
		e.$original = f;
		Ea.fn[b] = e
	}

	function S(b) {
		if (b instanceof S) {
			return b
		}
		E(b) && (b = $(b));
		if (!(this instanceof S)) {
			if (E(b) && "<" != b.charAt(0)) {
				throw Gb("nosel")
			}
			return new S(b)
		}
		if (E(b)) {
			var a = b;
			b = W;
			var c;
			if (c = ke.exec(a)) {
				b = [b.createElement(c[1])]
			} else {
				var d = b,
					e;
				b = d.createDocumentFragment();
				c = [];
				if (Hb.test(a)) {
					d = b.appendChild(d.createElement("div"));
					e = (le.exec(a) || ["", ""])[1].toLowerCase();
					e = ca[e] || ca._default;
					d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(me, "<$1></$2>") + e[2];
					d.removeChild(d.firstChild);
					for (a = e[0]; a--;) {
						d = d.lastChild
					}
					a = 0;
					for (e = d.childNodes.length; a < e; ++a) {
						c.push(d.childNodes[a])
					}
					d = b.firstChild;
					d.textContent = ""
				} else {
					c.push(d.createTextNode(a))
				}
				b.textContent = "";
				b.innerHTML = "";
				b = c
			}
			Ib(this, b);
			D(W.createDocumentFragment()).append(this)
		} else {
			Ib(this, b)
		}
	}

	function Jb(b) {
		return b.cloneNode(!0)
	}

	function Ka(b) {
		Kb(b);
		var a = 0;
		for (b = b.childNodes || []; a < b.length; a++) {
			Ka(b[a])
		}
	}

	function kc(b, a, c, d) {
		if (G(d)) {
			throw Gb("offargs")
		}
		var e = pa(b, "events");
		pa(b, "handle") && (H(a) ? r(e, function (a, c) {
			ab(b, c, a);
			delete e[c]
		}) : r(a.split(" "), function (a) {
			H(c) ? (ab(b, a, e[a]), delete e[a]) : Ta(e[a] || [], c)
		}))
	}

	function Kb(b, a) {
		var c = b.ng339,
			d = bb[c];
		d && (a ? delete bb[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), kc(b)), delete bb[c], b.ng339 = v))
	}

	function pa(b, a, c) {
		var d = b.ng339,
			d = bb[d || -1];
		if (G(c)) {
			d || (b.ng339 = d = ++ne, d = bb[d] = {}), d[a] = c
		} else {
			return d && d[a]
		}
	}

	function Lb(b, a, c) {
		var d = pa(b, "data"),
			e = G(c),
			f = !e && G(a),
			g = f && !T(a);
		d || g || pa(b, "data", d = {});
		if (e) {
			d[a] = c
		} else {
			if (f) {
				if (g) {
					return d && d[a]
				}
				F(d, a)
			} else {
				return d
			}
		}
	}

	function Mb(b, a) {
		return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
	}

	function nb(b, a) {
		a && b.setAttribute && r(a.split(" "), function (a) {
			b.setAttribute("class", $((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + $(a) + " ", " ")))
		})
	}

	function ob(b, a) {
		if (a && b.setAttribute) {
			var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			r(a.split(" "), function (a) {
				a = $(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
			});
			b.setAttribute("class", $(c))
		}
	}

	function Ib(b, a) {
		if (a) {
			a = a.nodeName || !G(a.length) || Ha(a) ? [a] : a;
			for (var c = 0; c < a.length; c++) {
				b.push(a[c])
			}
		}
	}

	function lc(b, a) {
		return pb(b, "$" + (a || "ngController") + "Controller")
	}

	function pb(b, a, c) {
		9 == b.nodeType && (b = b.documentElement);
		for (a = M(a) ? a : [a]; b;) {
			for (var d = 0, e = a.length; d < e; d++) {
				if ((c = D.data(b, a[d])) !== v) {
					return c
				}
			}
			b = b.parentNode || 11 === b.nodeType && b.host
		}
	}

	function mc(b) {
		for (var a = 0, c = b.childNodes; a < c.length; a++) {
			Ka(c[a])
		}
		for (; b.firstChild;) {
			b.removeChild(b.firstChild)
		}
	}

	function nc(b, a) {
		var c = qb[a.toLowerCase()];
		return c && oc[b.nodeName] && c
	}

	function oe(b, a) {
		var c = function (c, e) {
			c.preventDefault || (c.preventDefault = function () {
				c.returnValue = !1
			});
			c.stopPropagation || (c.stopPropagation = function () {
				c.cancelBubble = !0
			});
			c.target || (c.target = c.srcElement || W);
			if (H(c.defaultPrevented)) {
				var f = c.preventDefault;
				c.preventDefault = function () {
					c.defaultPrevented = !0;
					f.call(c)
				};
				c.defaultPrevented = !1
			}
			c.isDefaultPrevented = function () {
				return c.defaultPrevented || !1 === c.returnValue
			};
			var g = ha(a[e || c.type] || []);
			r(g, function (a) {
				a.call(b, c)
			});
			8 >= u ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
		};
		c.elem = b;
		return c
	}

	function La(b, a) {
		var c = typeof b,
			d;
		"function" == c || "object" == c && null !== b ? "function" == typeof (d = b.$$hashKey) ? d = b.$$hashKey() : d === v && (d = b.$$hashKey = (a || hb)()) : d = b;
		return c + ":" + d
	}

	function cb(b, a) {
		if (a) {
			var c = 0;
			this.nextUid = function () {
				return ++c
			}
		}
		r(b, this.put, this)
	}

	function pc(b) {
		var a, c;
		"function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(pe, ""), c = c.match(qe), r(c[1].split(re), function (b) {
			b.replace(se, function (b, c, d) {
				a.push(d)
			})
		})), b.$inject = a) : M(b) ? (c = b.length - 1, Xa(b[c], "fn"), a = b.slice(0, c)) : Xa(b, "fn", !0);
		return a
	}

	function dc(b) {
		function a(a) {
			return function (b, c) {
				if (T(b)) {
					r(b, Xb(a))
				} else {
					return a(b, c)
				}
			}
		}

		function c(a, b) {
			Da(a, "service");
			if (O(b) || M(b)) {
				b = n.instantiate(b)
			}
			if (!b.$get) {
				throw db("pget", a)
			}
			return m[a + h] = b
		}

		function d(a, b) {
			return c(a, {
				$get: b
			})
		}

		function e(a) {
			var b = [],
				c, d, f, h;
			r(a, function (a) {
				if (!l.get(a)) {
					l.put(a, !0);
					try {
						if (E(a)) {
							for (c = Za(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, h = d.length; f < h; f++) {
								var g = d[f],
									k = n.get(g[0]);
								k[g[1]].apply(k, g[2])
							}
						} else {
							O(a) ? b.push(n.invoke(a)) : M(a) ? b.push(n.invoke(a)) : Xa(a, "module")
						}
					} catch (p) {
						throw M(a) && (a = a[a.length - 1]), p.message && (p.stack && -1 == p.stack.indexOf(p.message)) && (p = p.message + "\n" + p.stack), db("modulerr", a, p.stack || p.message || p)
					}
				}
			});
			return b
		}

		function f(a, b) {
			function c(d) {
				if (a.hasOwnProperty(d)) {
					if (a[d] === g) {
						throw db("cdep", d + " <- " + k.join(" <- "))
					}
					return a[d]
				}
				try {
					return k.unshift(d), a[d] = g, a[d] = b(d)
				} catch (e) {
					throw a[d] === g && delete a[d], e
				} finally {
					k.shift()
				}
			}

			function d(a, b, e) {
				var f = [],
					h = pc(a),
					g, k, p;
				k = 0;
				for (g = h.length; k < g; k++) {
					p = h[k];
					if ("string" !== typeof p) {
						throw db("itkn", p)
					}
					f.push(e && e.hasOwnProperty(p) ? e[p] : c(p))
				}
				M(a) && (a = a[g]);
				return a.apply(b, f)
			}
			return {
				invoke: d,
				instantiate: function (a, b) {
					var c = function () {},
						e;
					c.prototype = (M(a) ? a[a.length - 1] : a).prototype;
					c = new c;
					e = d(a, c, b);
					return T(e) || O(e) ? e : c
				},
				get: c,
				annotate: pc,
				has: function (b) {
					return m.hasOwnProperty(b + h) || a.hasOwnProperty(b)
				}
			}
		}
		var g = {},
			h = "Provider",
			k = [],
			l = new cb([], !0),
			m = {
				$provide: {
					provider: a(c),
					factory: a(d),
					service: a(function (a, b) {
						return d(a, ["$injector",
							function (a) {
								return a.instantiate(b)
							}
						])
					}),
					value: a(function (a, b) {
						return d(a, Z(b))
					}),
					constant: a(function (a, b) {
						Da(a, "constant");
						m[a] = b;
						q[a] = b
					}),
					decorator: function (a, b) {
						var c = n.get(a + h),
							d = c.$get;
						c.$get = function () {
							var a = p.invoke(d, c);
							return p.invoke(b, null, {
								$delegate: a
							})
						}
					}
				}
			},
			n = m.$injector = f(m, function () {
				throw db("unpr", k.join(" <- "))
			}),
			q = {},
			p = q.$injector = f(q, function (a) {
				a = n.get(a + h);
				return p.invoke(a.$get, a)
			});
		r(e(b), function (a) {
			p.invoke(a || B)
		});
		return p
	}

	function Ld() {
		var b = !0;
		this.disableAutoScrolling = function () {
			b = !1
		};
		this.$get = ["$window", "$location", "$rootScope",
			function (a, c, d) {
				function e(a) {
					var b = null;
					r(a, function (a) {
						b || "a" !== A(a.nodeName) || (b = a)
					});
					return b
				}

				function f() {
					var b = c.hash(),
						d;
					b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
				}
				var g = a.document;
				b && d.$watch(function () {
					return c.hash()
				}, function () {
					d.$evalAsync(f)
				});
				return f
			}
		]
	}

	function he() {
		this.$get = ["$$rAF", "$timeout",
			function (b, a) {
				return b.supported ? function (a) {
					return b(a)
				} : function (b) {
					return a(b, 0, !1)
				}
			}
		]
	}

	function te(b, a, c, d) {
		function e(a) {
			try {
				a.apply(null, va.call(arguments, 1))
			} finally {
				if (s--, 0 === s) {
					for (; K.length;) {
						try {
							K.pop()()
						} catch (b) {
							c.error(b)
						}
					}
				}
			}
		}

		function f(a, b) {
			(function da() {
				r(w, function (a) {
					a()
				});
				t = b(da, a)
			})()
		}

		function g() {
			x != h.url() && (x = h.url(), r(aa, function (a) {
				a(h.url())
			}))
		}
		var h = this,
			k = a[0],
			l = b.location,
			m = b.history,
			n = b.setTimeout,
			q = b.clearTimeout,
			p = {};
		h.isMock = !1;
		var s = 0,
			K = [];
		h.$$completeOutstandingRequest = e;
		h.$$incOutstandingRequestCount = function () {
			s++
		};
		h.notifyWhenNoOutstandingRequests = function (a) {
			r(w, function (a) {
				a()
			});
			0 === s ? a() : K.push(a)
		};
		var w = [],
			t;
		h.addPollFn = function (a) {
			H(t) && f(100, n);
			w.push(a);
			return a
		};
		var x = l.href,
			L = a.find("base"),
			y = null;
		h.url = function (a, c) {
			l !== b.location && (l = b.location);
			m !== b.history && (m = b.history);
			if (a) {
				if (x != a) {
					var e = x && Fa(x) === Fa(a);
					x = a;
					if (!e && d.history) {
						c ? m.replaceState(null, "", a) : (m.pushState(null, "", a), L.attr("href", L.attr("href")))
					} else {
						if (e || (y = a), c) {
							l.replace(a)
						} else {
							if (e) {
								var e = l,
									f;
								f = a.indexOf("#");
								f = -1 === f ? "" : a.substr(f + 1);
								e.hash = f
							} else {
								l.href = a
							}
						}
					}
					return h
				}
			} else {
				return y || l.href.replace(/%27/g, "'")
			}
		};
		var aa = [],
			P = !1;
		h.onUrlChange = function (a) {
			if (!P) {
				if (d.history) {
					D(b).on("popstate", g)
				}
				if (d.hashchange) {
					D(b).on("hashchange", g)
				} else {
					h.addPollFn(g)
				}
				P = !0
			}
			aa.push(a);
			return a
		};
		h.$$checkUrlChange = g;
		h.baseHref = function () {
			var a = L.attr("href");
			return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var N = {},
			ba = "",
			Q = h.baseHref();
		h.cookies = function (a, b) {
			var d, e, f, h;
			if (a) {
				b === v ? k.cookie = escape(a) + "=;path=" + Q + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : E(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + Q).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"))
			} else {
				if (k.cookie !== ba) {
					for (ba = k.cookie, d = ba.split("; "), N = {}, f = 0; f < d.length; f++) {
						e = d[f], h = e.indexOf("="), 0 < h && (a = unescape(e.substring(0, h)), N[a] === v && (N[a] = unescape(e.substring(h + 1))))
					}
				}
				return N
			}
		};
		h.defer = function (a, b) {
			var c;
			s++;
			c = n(function () {
				delete p[c];
				e(a)
			}, b || 0);
			p[c] = !0;
			return c
		};
		h.defer.cancel = function (a) {
			return p[a] ? (delete p[a], q(a), e(B), !0) : !1
		}
	}

	function Nd() {
		this.$get = ["$window", "$log", "$sniffer", "$document",
			function (b, a, c, d) {
				return new te(b, d, a, c)
			}
		]
	}

	function Od() {
		this.$get = function () {
			function b(b, d) {
				function e(a) {
					a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
				}

				function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}
				if (b in a) {
					throw z("$cacheFactory")("iid", b)
				}
				var g = 0,
					h = F({}, d, {
						id: b
					}),
					k = {},
					l = d && d.capacity || Number.MAX_VALUE,
					m = {},
					n = null,
					q = null;
				return a[b] = {
					put: function (a, b) {
						if (l < Number.MAX_VALUE) {
							var c = m[a] || (m[a] = {
								key: a
							});
							e(c)
						}
						if (!H(b)) {
							return a in k || g++, k[a] = b, g > l && this.remove(q.key), b
						}
					},
					get: function (a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];
							if (!b) {
								return
							}
							e(b)
						}
						return k[a]
					},
					remove: function (a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];
							if (!b) {
								return
							}
							b == n && (n = b.p);
							b == q && (q = b.n);
							f(b.n, b.p);
							delete m[a]
						}
						delete k[a];
						g--
					},
					removeAll: function () {
						k = {};
						g = 0;
						m = {};
						n = q = null
					},
					destroy: function () {
						m = h = k = null;
						delete a[b]
					},
					info: function () {
						return F({}, h, {
							size: g
						})
					}
				}
			}
			var a = {};
			b.info = function () {
				var b = {};
				r(a, function (a, e) {
					b[e] = a.info()
				});
				return b
			};
			b.get = function (b) {
				return a[b]
			};
			return b
		}
	}

	function de() {
		this.$get = ["$cacheFactory",
			function (b) {
				return b("templates")
			}
		]
	}

	function fc(b, a) {
		var c = {},
			d = "Directive",
			e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
			f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
			g = /^(on[a-z]+|formaction)$/;
		this.directive = function k(a, e) {
			Da(a, "directive");
			E(a) ? (Cb(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler",
				function (b, d) {
					var e = [];
					r(c[a], function (c, f) {
						try {
							var g = b.invoke(c);
							O(g) ? g = {
								compile: Z(g)
							} : !g.compile && g.link && (g.compile = Z(g.link));
							g.priority = g.priority || 0;
							g.index = f;
							g.name = g.name || a;
							g.require = g.require || g.controller && g.name;
							g.restrict = g.restrict || "A";
							e.push(g)
						} catch (k) {
							d(k)
						}
					});
					return e
				}
			])), c[a].push(e)) : r(a, Xb(k));
			return this
		};
		this.aHrefSanitizationWhitelist = function (b) {
			return G(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
		};
		this.imgSrcSanitizationWhitelist = function (b) {
			return G(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
		};
		this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
			function (a, b, m, n, q, p, s, K, w, t, x, L) {
				function y(a, b, c, d, e) {
					a instanceof D || (a = D(a));
					r(a, function (b, c) {
						3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = D(b).wrap("<span></span>").parent()[0])
					});
					var f = P(a, b, a, c, d, e);
					aa(a, "ng-scope");
					return function (b, c, d, e) {
						Cb(b, "scope");
						var g = c ? Ma.clone.call(a) : a;
						r(d, function (a, b) {
							g.data("$" + b + "Controller", a)
						});
						d = 0;
						for (var k = g.length; d < k; d++) {
							var p = g[d].nodeType;
							1 !== p && 9 !== p || g.eq(d).data("$scope", b)
						}
						c && c(g, b);
						f && f(b, g, g, e);
						return g
					}
				}

				function aa(a, b) {
					try {
						a.addClass(b)
					} catch (c) {}
				}

				function P(a, b, c, d, e, f) {
					function g(a, c, d, e) {
						var f, p, m, l, q, n, w;
						f = c.length;
						var s = Array(f);
						for (l = 0; l < f; l++) {
							s[l] = c[l]
						}
						n = l = 0;
						for (q = k.length; l < q; n++) {
							p = s[n], c = k[l++], f = k[l++], c ? (c.scope ? (m = a.$new(), D.data(p, "$scope", m)) : m = a, w = c.transcludeOnThisElement ? N(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? N(a, b) : null, c(f, m, p, d, w)) : f && f(a, p.childNodes, v, e)
						}
					}
					for (var k = [], p, m, l, q, n = 0; n < a.length; n++) {
						p = new Nb, m = ba(a[n], [], p, 0 === n ? d : v, e), (f = m.length ? J(m, a[n], p, b, c, null, [], [], f) : null) && f.scope && aa(p.$$element, "ng-scope"), p = f && f.terminal || !(l = a[n].childNodes) || !l.length ? null : P(l, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), k.push(f, p), q = q || f || p, f = null
					}
					return q ? g : null
				}

				function N(a, b, c) {
					return function (d, e, f) {
						var g = !1;
						d || (d = a.$new(), g = d.$$transcluded = !0);
						e = b(d, e, f, c);
						if (g) {
							e.on("$destroy", function () {
								d.$destroy()
							})
						}
						return e
					}
				}

				function ba(a, b, c, d, g) {
					var k = c.$attr,
						p;
					switch (a.nodeType) {
					case 1:
						da(b, qa(Na(a).toLowerCase()), "E", d, g);
						for (var l, m, q, n = a.attributes, w = 0, s = n && n.length; w < s; w++) {
							var t = !1,
								K = !1;
							l = n[w];
							if (!u || 8 <= u || l.specified) {
								p = l.name;
								m = $(l.value);
								l = qa(p);
								if (q = U.test(l)) {
									p = mb(l.substr(6), "-")
								}
								var x = l.replace(/(Start|End)$/, "");
								l === x + "Start" && (t = p, K = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6));
								l = qa(p.toLowerCase());
								k[l] = p;
								if (q || !c.hasOwnProperty(l)) {
									c[l] = m, nc(a, l) && (c[l] = !0)
								}
								S(a, b, m, l);
								da(b, l, "A", d, g, t, K)
							}
						}
						a = a.className;
						if (E(a) && "" !== a) {
							for (; p = f.exec(a);) {
								l = qa(p[2]), da(b, l, "C", d, g) && (c[l] = $(p[3])), a = a.substr(p.index + p[0].length)
							}
						}
						break;
					case 3:
						if (11 === u) {
							for (; a.parentNode && a.nextSibling && 3 === a.nextSibling.nodeType;) {
								a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling)
							}
						}
						A(b, a.nodeValue);
						break;
					case 8:
						try {
							if (p = e.exec(a.nodeValue)) {
								l = qa(p[1]), da(b, l, "M", d, g) && (c[l] = $(p[2]))
							}
						} catch (y) {}
					}
					b.sort(H);
					return b
				}

				function Q(a, b, c) {
					var d = [],
						e = 0;
					if (b && a.hasAttribute && a.hasAttribute(b)) {
						do {
							if (!a) {
								throw ja("uterdir", b, c)
							}
							1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
							d.push(a);
							a = a.nextSibling
						} while (0 < e)
					} else {
						d.push(a)
					}
					return D(d)
				}

				function C(a, b, c) {
					return function (d, e, f, g, k) {
						e = Q(e[0], b, c);
						return a(d, e, f, g, k)
					}
				}

				function J(a, c, d, e, f, g, k, q, n) {
					function w(a, b, c, d) {
						if (a) {
							c && (a = C(a, c, d));
							a.require = I.require;
							a.directiveName = z;
							if (L === I || I.$$isolateScope) {
								a = qc(a, {
									isolateScope: !0
								})
							}
							k.push(a)
						}
						if (b) {
							c && (b = C(b, c, d));
							b.require = I.require;
							b.directiveName = z;
							if (L === I || I.$$isolateScope) {
								b = qc(b, {
									isolateScope: !0
								})
							}
							q.push(b)
						}
					}

					function t(a, b, c, d) {
						var e, f = "data",
							g = !1;
						if (E(b)) {
							for (;
								"^" == (e = b.charAt(0)) || "?" == e;) {
								b = b.substr(1), "^" == e && (f = "inheritedData"), g = g || "?" == e
							}
							e = null;
							d && "data" === f && (e = d[b]);
							e = e || c[f]("$" + b + "Controller");
							if (!e && !g) {
								throw ja("ctreq", b, a)
							}
						} else {
							M(b) && (e = [], r(b, function (b) {
								e.push(t(a, b, c, d))
							}))
						}
						return e
					}

					function K(a, e, f, g, n) {
						function w(a, b) {
							var c;
							2 > arguments.length && (b = a, a = v);
							Ga && (c = ba);
							return n(a, b, c)
						}
						var x, R, y, N, C, Q, ba = {},
							ra;
						x = c === f ? d : ha(d, new Nb(D(f), d.$attr));
						R = x.$$element;
						if (L) {
							var ve = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
							Q = e.$new(!0);
							!J || J !== L && J !== L.$$originalDirective ? R.data("$isolateScopeNoTemplate", Q) : R.data("$isolateScope", Q);
							aa(R, "ng-isolate-scope");
							r(L.scope, function (a, c) {
								var d = a.match(ve) || [],
									f = d[3] || c,
									g = "?" == d[2],
									d = d[1],
									k, m, n, q;
								Q.$$isolateBindings[c] = d + f;
								switch (d) {
								case "@":
									x.$observe(f, function (a) {
										Q[c] = a
									});
									x.$$observers[f].$$scope = e;
									x[f] && (Q[c] = b(x[f])(e));
									break;
								case "=":
									if (g && !x[f]) {
										break
									}
									m = p(x[f]);
									q = m.literal ? Ba : function (a, b) {
										return a === b || a !== a && b !== b
									};
									n = m.assign || function () {
										k = Q[c] = m(e);
										throw ja("nonassign", x[f], L.name)
									};
									k = Q[c] = m(e);
									Q.$watch(function () {
										var a = m(e);
										q(a, Q[c]) || (q(a, k) ? n(e, a = Q[c]) : Q[c] = a);
										return k = a
									}, null, m.literal);
									break;
								case "&":
									m = p(x[f]);
									Q[c] = function (a) {
										return m(e, a)
									};
									break;
								default:
									throw ja("iscp", L.name, c, a)
								}
							})
						}
						ra = n && w;
						P && r(P, function (a) {
							var b = {
									$scope: a === L || a.$$isolateScope ? Q : e,
									$element: R,
									$attrs: x,
									$transclude: ra
								},
								c;
							C = a.controller;
							"@" == C && (C = x[a.name]);
							c = s(C, b);
							ba[a.name] = c;
							Ga || R.data("$" + a.name + "Controller", c);
							a.controllerAs && (b.$scope[a.controllerAs] = c)
						});
						g = 0;
						for (y = k.length; g < y; g++) {
							try {
								N = k[g], N(N.isolateScope ? Q : e, R, x, N.require && t(N.directiveName, N.require, R, ba), ra)
							} catch (u) {
								m(u, ia(R))
							}
						}
						g = e;
						L && (L.template || null === L.templateUrl) && (g = Q);
						a && a(g, f.childNodes, v, n);
						for (g = q.length - 1; 0 <= g; g--) {
							try {
								N = q[g], N(N.isolateScope ? Q : e, R, x, N.require && t(N.directiveName, N.require, R, ba), ra)
							} catch (I) {
								m(I, ia(R))
							}
						}
					}
					n = n || {};
					for (var x = -Number.MAX_VALUE, N, P = n.controllerDirectives, L = n.newIsolateScopeDirective, J = n.templateDirective, da = n.nonTlbTranscludeDirective, H = !1, F = !1, Ga = n.hasElementTranscludeDirective, A = d.$$element = D(c), I, z, u, S = e, Oa, ka = 0, U = a.length; ka < U; ka++) {
						I = a[ka];
						var X = I.$$start,
							Y = I.$$end;
						X && (A = Q(c, X, Y));
						u = v;
						if (x > I.priority) {
							break
						}
						if (u = I.scope) {
							N = N || I, I.templateUrl || (eb("new/isolated scope", L, I, A), T(u) && (L = I))
						}
						z = I.name;
						!I.templateUrl && I.controller && (u = I.controller, P = P || {}, eb("'" + z + "' controller", P[z], I, A), P[z] = I);
						if (u = I.transclude) {
							H = !0, I.$$tlb || (eb("transclusion", da, I, A), da = I), "element" == u ? (Ga = !0, x = I.priority, u = A, A = d.$$element = D(W.createComment(" " + z + ": " + d[z] + " ")), c = A[0], ra(f, va.call(u, 0), c), S = y(u, e, x, g && g.name, {
								nonTlbTranscludeDirective: da
							})) : (u = D(Jb(c)).contents(), A.empty(), S = y(u, e))
						}
						if (I.template) {
							if (F = !0, eb("template", J, I, A), J = I, u = O(I.template) ? I.template(A, d) : I.template, u = V(u), I.replace) {
								g = I;
								u = Hb.test(u) ? D($(u)) : [];
								c = u[0];
								if (1 != u.length || 1 !== c.nodeType) {
									throw ja("tplrt", z, "")
								}
								ra(f, A, c);
								U = {
									$attr: {}
								};
								u = ba(c, [], U);
								var we = a.splice(ka + 1, a.length - (ka + 1));
								L && G(u);
								a = a.concat(u).concat(we);
								B(d, U);
								U = a.length
							} else {
								A.html(u)
							}
						}
						if (I.templateUrl) {
							F = !0, eb("template", J, I, A), J = I, I.replace && (g = I), K = ue(a.splice(ka, a.length - ka), A, d, f, H && S, k, q, {
								controllerDirectives: P,
								newIsolateScopeDirective: L,
								templateDirective: J,
								nonTlbTranscludeDirective: da
							}), U = a.length
						} else {
							if (I.compile) {
								try {
									Oa = I.compile(A, d, S), O(Oa) ? w(null, Oa, X, Y) : Oa && w(Oa.pre, Oa.post, X, Y)
								} catch (Z) {
									m(Z, ia(A))
								}
							}
						}
						I.terminal && (K.terminal = !0, x = Math.max(x, I.priority))
					}
					K.scope = N && !0 === N.scope;
					K.transcludeOnThisElement = H;
					K.templateOnThisElement = F;
					K.transclude = S;
					n.hasElementTranscludeDirective = Ga;
					return K
				}

				function G(a) {
					for (var b = 0, c = a.length; b < c; b++) {
						a[b] = Zb(a[b], {
							$$isolateScope: !0
						})
					}
				}

				function da(b, e, f, g, p, l, n) {
					if (e === p) {
						return null
					}
					p = null;
					if (c.hasOwnProperty(e)) {
						var q;
						e = a.get(e + d);
						for (var w = 0, s = e.length; w < s; w++) {
							try {
								q = e[w], (g === v || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Zb(q, {
									$$start: l,
									$$end: n
								})), b.push(q), p = q)
							} catch (x) {
								m(x)
							}
						}
					}
					return p
				}

				function B(a, b) {
					var c = b.$attr,
						d = a.$attr,
						e = a.$$element;
					r(a, function (d, e) {
						"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
					});
					r(b, function (b, f) {
						"class" == f ? (aa(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
					})
				}

				function ue(a, b, c, d, e, f, g, k) {
					var p = [],
						l, m, w = b[0],
						s = a.shift(),
						x = F({}, s, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: s
						}),
						K = O(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl;
					b.empty();
					n.get(t.getTrustedResourceUrl(K), {
						cache: q
					}).success(function (q) {
						var n, t;
						q = V(q);
						if (s.replace) {
							q = Hb.test(q) ? D($(q)) : [];
							n = q[0];
							if (1 != q.length || 1 !== n.nodeType) {
								throw ja("tplrt", s.name, K)
							}
							q = {
								$attr: {}
							};
							ra(d, b, n);
							var y = ba(n, [], q);
							T(s.scope) && G(y);
							a = y.concat(a);
							B(c, q)
						} else {
							n = w, b.html(q)
						}
						a.unshift(x);
						l = J(a, n, c, e, b, s, f, g, k);
						r(d, function (a, c) {
							a == n && (d[c] = b[0])
						});
						for (m = P(b[0].childNodes, e); p.length;) {
							q = p.shift();
							t = p.shift();
							var L = p.shift(),
								C = p.shift(),
								y = b[0];
							if (t !== w) {
								var Q = t.className;
								k.hasElementTranscludeDirective && s.replace || (y = Jb(n));
								ra(L, D(t), y);
								aa(D(y), Q)
							}
							t = l.transcludeOnThisElement ? N(q, l.transclude, C) : C;
							l(m, q, y, d, t)
						}
						p = null
					}).error(function (a, b, c, d) {
						throw ja("tpload", d.url)
					});
					return function (a, b, c, d, e) {
						a = e;
						p ? (p.push(b), p.push(c), p.push(d), p.push(a)) : (l.transcludeOnThisElement && (a = N(b, l.transclude, e)), l(m, b, c, d, a))
					}
				}

				function H(a, b) {
					var c = b.priority - a.priority;
					return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
				}

				function eb(a, b, c, d) {
					if (b) {
						throw ja("multidir", b.name, c.name, a, ia(d))
					}
				}

				function A(a, c) {
					var d = b(c, !0);
					d && a.push({
						priority: 0,
						compile: function (a) {
							var b = a.parent().length;
							b && aa(a.parent(), "ng-binding");
							return function (a, c) {
								var e = c.parent(),
									f = e.data("$binding") || [];
								f.push(d);
								e.data("$binding", f);
								b || aa(e, "ng-binding");
								a.$watch(d, function (a) {
									c[0].nodeValue = a
								})
							}
						}
					})
				}

				function z(a, b) {
					if ("srcdoc" == b) {
						return t.HTML
					}
					var c = Na(a);
					if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) {
						return t.RESOURCE_URL
					}
				}

				function S(a, c, d, e) {
					var f = b(d, !0);
					if (f) {
						if ("multiple" === e && "SELECT" === Na(a)) {
							throw ja("selmulti", ia(a))
						}
						c.push({
							priority: 100,
							compile: function () {
								return {
									pre: function (c, d, k) {
										d = k.$$observers || (k.$$observers = {});
										if (g.test(e)) {
											throw ja("nodomevents")
										}
										if (f = b(k[e], !0, z(a, e))) {
											k[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || c).$watch(f, function (a, b) {
												"class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a)
											})
										}
									}
								}
							}
						})
					}
				}

				function ra(a, b, c) {
					var d = b[0],
						e = b.length,
						f = d.parentNode,
						g, k;
					if (a) {
						for (g = 0, k = a.length; g < k; g++) {
							if (a[g] == d) {
								a[g++] = c;
								k = g + e - 1;
								for (var p = a.length; g < p; g++, k++) {
									k < p ? a[g] = a[k] : delete a[g]
								}
								a.length -= e - 1;
								break
							}
						}
					}
					f && f.replaceChild(c, d);
					a = W.createDocumentFragment();
					a.appendChild(d);
					c[D.expando] = d[D.expando];
					d = 1;
					for (e = b.length; d < e; d++) {
						f = b[d], D(f).remove(), a.appendChild(f), delete b[d]
					}
					b[0] = c;
					b.length = 1
				}

				function qc(a, b) {
					return F(function () {
						return a.apply(null, arguments)
					}, a, b)
				}
				var Nb = function (a, b) {
					this.$$element = a;
					this.$attr = b || {}
				};
				Nb.prototype = {
					$normalize: qa,
					$addClass: function (a) {
						a && 0 < a.length && x.addClass(this.$$element, a)
					},
					$removeClass: function (a) {
						a && 0 < a.length && x.removeClass(this.$$element, a)
					},
					$updateClass: function (a, b) {
						var c = rc(a, b),
							d = rc(b, a);
						0 === c.length ? x.removeClass(this.$$element, d) : 0 === d.length ? x.addClass(this.$$element, c) : x.setClass(this.$$element, c, d)
					},
					$set: function (a, b, c, d) {
						var e = nc(this.$$element[0], a);
						e && (this.$$element.prop(a, b), d = e);
						this[a] = b;
						d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = mb(a, "-"));
						e = Na(this.$$element);
						if ("A" === e && "href" === a || "IMG" === e && "src" === a) {
							this[a] = b = L(b, "src" === a)
						}!1 !== c && (null === b || b === v ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
						(c = this.$$observers) && r(c[a], function (a) {
							try {
								a(b)
							} catch (c) {
								m(c)
							}
						})
					},
					$observe: function (a, b) {
						var c = this,
							d = c.$$observers || (c.$$observers = {}),
							e = d[a] || (d[a] = []);
						e.push(b);
						K.$evalAsync(function () {
							e.$$inter || b(c[a])
						});
						return b
					}
				};
				var ka = b.startSymbol(),
					Ga = b.endSymbol(),
					V = "{{" == ka || "}}" == Ga ? ga : function (a) {
						return a.replace(/\{\{/g, ka).replace(/}}/g, Ga)
					},
					U = /^ngAttr[A-Z]/;
				return y
			}
		]
	}

	function qa(b) {
		return $a(b.replace(xe, ""))
	}

	function rc(b, a) {
		var c = "",
			d = b.split(/\s+/),
			e = a.split(/\s+/),
			f = 0;
		a: for (; f < d.length; f++) {
			for (var g = d[f], h = 0; h < e.length; h++) {
				if (g == e[h]) {
					continue a
				}
			}
			c += (0 < c.length ? " " : "") + g
		}
		return c
	}

	function Pd() {
		var b = {},
			a = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function (a, d) {
			Da(a, "controller");
			T(a) ? F(b, a) : b[a] = d
		};
		this.$get = ["$injector", "$window",
			function (c, d) {
				return function (e, f) {
					var g, h, k;
					E(e) && (g = e.match(a), h = g[1], k = g[3], e = b.hasOwnProperty(h) ? b[h] : ec(f.$scope, h, !0) || ec(d, h, !0), Xa(e, h, !0));
					g = c.instantiate(e, f);
					if (k) {
						if (!f || "object" !== typeof f.$scope) {
							throw z("$controller")("noscp", h || e.name, k)
						}
						f.$scope[k] = g
					}
					return g
				}
			}
		]
	}

	function Qd() {
		this.$get = ["$window",
			function (b) {
				return D(b.document)
			}
		]
	}

	function Rd() {
		this.$get = ["$log",
			function (b) {
				return function (a, c) {
					b.error.apply(b, arguments)
				}
			}
		]
	}

	function sc(b) {
		var a = {},
			c, d, e;
		if (!b) {
			return a
		}
		r(b.split("\n"), function (b) {
			e = b.indexOf(":");
			c = A($(b.substr(0, e)));
			d = $(b.substr(e + 1));
			c && (a[c] = a[c] ? a[c] + ", " + d : d)
		});
		return a
	}

	function tc(b) {
		var a = T(b) ? b : v;
		return function (c) {
			a || (a = sc(b));
			return c ? a[A(c)] || null : a
		}
	}

	function uc(b, a, c) {
		if (O(c)) {
			return c(b, a)
		}
		r(c, function (c) {
			b = c(b, a)
		});
		return b
	}

	function Ud() {
		var b = /^\s*(\[|\{[^\{])/,
			a = /[\}\]]\s*$/,
			c = /^\)\]\}',?\n/,
			d = {
				"Content-Type": "application/json;charset=utf-8"
			},
			e = this.defaults = {
				transformResponse: [
					function (d) {
						E(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = $b(d)));
						return d
					}
				],
				transformRequest: [
					function (a) {
						return T(a) && "[object File]" !== Aa.call(a) && "[object Blob]" !== Aa.call(a) ? oa(a) : a
					}
				],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: ha(d),
					put: ha(d),
					patch: ha(d)
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			},
			f = this.interceptors = [],
			g = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
			function (a, b, c, d, n, q) {
				function p(a) {
					function b(a) {
						var d = F({}, a, {
							data: uc(a.data, a.headers, c.transformResponse)
						});
						return 200 <= a.status && 300 > a.status ? d : n.reject(d)
					}
					var c = {
							method: "get",
							transformRequest: e.transformRequest,
							transformResponse: e.transformResponse
						},
						d = function (a) {
							var b = e.headers,
								c = F({}, a.headers),
								d, f, b = F({}, b.common, b[A(a.method)]);
							a: for (d in b) {
								a = A(d);
								for (f in c) {
									if (A(f) === a) {
										continue a
									}
								}
								c[d] = b[d]
							}(function (a) {
								var b;
								r(a, function (c, d) {
									O(c) && (b = c(), null != b ? a[d] = b : delete a[d])
								})
							})(c);
							return c
						}(a);
					F(c, a);
					c.headers = d;
					c.method = Ja(c.method);
					var f = [
							function (a) {
								d = a.headers;
								var c = uc(a.data, tc(d), a.transformRequest);
								H(c) && r(d, function (a, b) {
									"content-type" === A(b) && delete d[b]
								});
								H(a.withCredentials) && !H(e.withCredentials) && (a.withCredentials = e.withCredentials);
								return s(a, c, d).then(b, b)
							},
							v
						],
						g = n.when(c);
					for (r(t, function (a) {
						(a.request || a.requestError) && f.unshift(a.request, a.requestError);
						(a.response || a.responseError) && f.push(a.response, a.responseError)
					}); f.length;) {
						a = f.shift();
						var h = f.shift(),
							g = g.then(a, h)
					}
					g.success = function (a) {
						g.then(function (b) {
							a(b.data, b.status, b.headers, c)
						});
						return g
					};
					g.error = function (a) {
						g.then(null, function (b) {
							a(b.data, b.status, b.headers, c)
						});
						return g
					};
					return g
				}

				function s(c, f, g) {
					function l(a, b, c, e) {
						C && (200 <= a && 300 > a ? C.put(u, [a, b, sc(c), e]) : C.remove(u));
						q(b, a, c, e);
						d.$$phase || d.$apply()
					}

					function q(a, b, d, e) {
						b = Math.max(b, 0);
						(200 <= b && 300 > b ? t.resolve : t.reject)({
							data: a,
							status: b,
							headers: tc(d),
							config: c,
							statusText: e
						})
					}

					function s() {
						var a = Sa(p.pendingRequests, c); - 1 !== a && p.pendingRequests.splice(a, 1)
					}
					var t = n.defer(),
						r = t.promise,
						C, J, u = K(c.url, c.params);
					p.pendingRequests.push(c);
					r.then(s, s);
					!c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (C = T(c.cache) ? c.cache : T(e.cache) ? e.cache : w);
					if (C) {
						if (J = C.get(u), G(J)) {
							if (J && O(J.then)) {
								return J.then(s, s), J
							}
							M(J) ? q(J[1], J[0], ha(J[2]), J[3]) : q(J, 200, {}, "OK")
						} else {
							C.put(u, r)
						}
					}
					H(J) && ((J = Ob(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : v) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = J), a(c.method, u, f, l, g, c.timeout, c.withCredentials, c.responseType));
					return r
				}

				function K(a, b) {
					if (!b) {
						return a
					}
					var c = [];
					Tc(b, function (a, b) {
						null === a || H(a) || (M(a) || (a = [a]), r(a, function (a) {
							T(a) && (a = ua(a) ? a.toISOString() : oa(a));
							c.push(Ca(b) + "=" + Ca(a))
						}))
					});
					0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
					return a
				}
				var w = c("$http"),
					t = [];
				r(f, function (a) {
					t.unshift(E(a) ? q.get(a) : q.invoke(a))
				});
				r(g, function (a, b) {
					var c = E(a) ? q.get(a) : q.invoke(a);
					t.splice(b, 0, {
						response: function (a) {
							return c(n.when(a))
						},
						responseError: function (a) {
							return c(n.reject(a))
						}
					})
				});
				p.pendingRequests = [];
				(function (a) {
					r(arguments, function (a) {
						p[a] = function (b, c) {
							return p(F(c || {}, {
								method: a,
								url: b
							}))
						}
					})
				})("get", "delete", "head", "jsonp");
				(function (a) {
					r(arguments, function (a) {
						p[a] = function (b, c, d) {
							return p(F(d || {}, {
								method: a,
								url: b,
								data: c
							}))
						}
					})
				})("post", "put", "patch");
				p.defaults = e;
				return p
			}
		]
	}

	function ye(b) {
		if (8 >= u && (!b.match(/^(get|post|head|put|delete|options)$/i) || !V.XMLHttpRequest)) {
			return new V.ActiveXObject("Microsoft.XMLHTTP")
		}
		if (V.XMLHttpRequest) {
			return new V.XMLHttpRequest
		}
		throw z("$httpBackend")("noxhr")
	}

	function Vd() {
		this.$get = ["$browser", "$window", "$document",
			function (b, a, c) {
				return ze(b, ye, b.defer, a.angular.callbacks, c[0])
			}
		]
	}

	function ze(b, a, c, d, e) {
		function f(a, b, c) {
			var f = e.createElement("script"),
				g = null;
			f.type = "text/javascript";
			f.src = a;
			f.async = !0;
			g = function (a) {
				ab(f, "load", g);
				ab(f, "error", g);
				e.body.removeChild(f);
				f = null;
				var h = -1,
					s = "unknown";
				a && ("load" !== a.type || d[b].called || (a = {
					type: "error"
				}), s = a.type, h = "error" === a.type ? 404 : 200);
				c && c(h, s)
			};
			rb(f, "load", g);
			rb(f, "error", g);
			8 >= u && (f.onreadystatechange = function () {
				E(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({
					type: "load"
				}))
			});
			e.body.appendChild(f);
			return g
		}
		var g = -1;
		return function (e, k, l, m, n, q, p, s) {
			function K() {
				t = g;
				L && L();
				y && y.abort()
			}

			function w(a, d, e, f, g) {
				P && c.cancel(P);
				L = y = null;
				0 === d && (d = e ? 200 : "file" == wa(k).protocol ? 404 : 0);
				a(1223 === d ? 204 : d, e, f, g || "");
				b.$$completeOutstandingRequest(B)
			}
			var t;
			b.$$incOutstandingRequestCount();
			k = k || b.url();
			if ("jsonp" == A(e)) {
				var x = "_" + (d.counter++).toString(36);
				d[x] = function (a) {
					d[x].data = a;
					d[x].called = !0
				};
				var L = f(k.replace("JSON_CALLBACK", "angular.callbacks." + x), x, function (a, b) {
					w(m, a, d[x].data, "", b);
					d[x] = B
				})
			} else {
				var y = a(e);
				y.open(e, k, !0);
				r(n, function (a, b) {
					G(a) && y.setRequestHeader(b, a)
				});
				y.onreadystatechange = function () {
					if (y && 4 == y.readyState) {
						var a = null,
							b = null,
							c = "";
						t !== g && (a = y.getAllResponseHeaders(), b = "response" in y ? y.response : y.responseText);
						t === g && 10 > u || (c = y.statusText);
						w(m, t || y.status, b, a, c)
					}
				};
				p && (y.withCredentials = !0);
				if (s) {
					try {
						y.responseType = s
					} catch (aa) {
						if ("json" !== s) {
							throw aa
						}
					}
				}
				y.send(l || null)
			} if (0 < q) {
				var P = c(K, q)
			} else {
				q && O(q.then) && q.then(K)
			}
		}
	}

	function Sd() {
		var b = "{{",
			a = "}}";
		this.startSymbol = function (a) {
			return a ? (b = a, this) : b
		};
		this.endSymbol = function (b) {
			return b ? (a = b, this) : a
		};
		this.$get = ["$parse", "$exceptionHandler", "$sce",
			function (c, d, e) {
				function f(f, l, m) {
					for (var n, q, p = 0, s = [], K = f.length, w = !1, t = []; p < K;) {
						-1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a, n + g)) ? (p != n && s.push(f.substring(p, n)), s.push(p = c(w = f.substring(n + g, q))), p.exp = w, p = q + h, w = !0) : (p != K && s.push(f.substring(p)), p = K)
					}(K = s.length) || (s.push(""), K = 1);
					if (m && 1 < s.length) {
						throw vc("noconcat", f)
					}
					if (!l || w) {
						return t.length = K, p = function (a) {
							try {
								for (var b = 0, c = K, g; b < c; b++) {
									if ("function" == typeof (g = s[b])) {
										if (g = g(a), g = m ? e.getTrusted(m, g) : e.valueOf(g), null == g) {
											g = ""
										} else {
											switch (typeof g) {
											case "string":
												break;
											case "number":
												g = "" + g;
												break;
											default:
												g = oa(g)
											}
										}
									}
									t[b] = g
								}
								return t.join("")
							} catch (h) {
								a = vc("interr", f, h.toString()), d(a)
							}
						}, p.exp = f, p.parts = s, p
					}
				}
				var g = b.length,
					h = a.length;
				f.startSymbol = function () {
					return b
				};
				f.endSymbol = function () {
					return a
				};
				return f
			}
		]
	}

	function Td() {
		this.$get = ["$rootScope", "$window", "$q",
			function (b, a, c) {
				function d(d, g, h, k) {
					var l = a.setInterval,
						m = a.clearInterval,
						n = c.defer(),
						q = n.promise,
						p = 0,
						s = G(k) && !k;
					h = G(h) ? h : 0;
					q.then(null, null, d);
					q.$$intervalId = l(function () {
						n.notify(p++);
						0 < h && p >= h && (n.resolve(p), m(q.$$intervalId), delete e[q.$$intervalId]);
						s || b.$apply()
					}, g);
					e[q.$$intervalId] = n;
					return q
				}
				var e = {};
				d.cancel = function (b) {
					return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1
				};
				return d
			}
		]
	}

	function bd() {
		this.$get = function () {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "\u00a4",
						posSuf: "",
						negPre: "(\u00a4",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January February March April May June July August September October November December".split(" "),
					SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
					DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
					SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function (b) {
					return 1 === b ? "one" : "other"
				}
			}
		}
	}

	function Pb(b) {
		b = b.split("/");
		for (var a = b.length; a--;) {
			b[a] = lb(b[a])
		}
		return b.join("/")
	}

	function wc(b, a, c) {
		b = wa(b, c);
		a.$$protocol = b.protocol;
		a.$$host = b.hostname;
		a.$$port = U(b.port) || Ae[b.protocol] || null
	}

	function xc(b, a, c) {
		var d = "/" !== b.charAt(0);
		d && (b = "/" + b);
		b = wa(b, c);
		a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
		a.$$search = bc(b.search);
		a.$$hash = decodeURIComponent(b.hash);
		a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
	}

	function sa(b, a) {
		if (0 === a.indexOf(b)) {
			return a.substr(b.length)
		}
	}

	function Fa(b) {
		var a = b.indexOf("#");
		return -1 == a ? b : b.substr(0, a)
	}

	function yc(b) {
		return b.replace(/(#.+)|#$/, "$1")
	}

	function Qb(b) {
		return b.substr(0, Fa(b).lastIndexOf("/") + 1)
	}

	function zc(b, a) {
		this.$$html5 = !0;
		a = a || "";
		var c = Qb(b);
		wc(b, this, b);
		this.$$parse = function (a) {
			var e = sa(c, a);
			if (!E(e)) {
				throw Rb("ipthprfx", a, c)
			}
			xc(e, this, b);
			this.$$path || (this.$$path = "/");
			this.$$compose()
		};
		this.$$compose = function () {
			var a = Bb(this.$$search),
				b = this.$$hash ? "#" + lb(this.$$hash) : "";
			this.$$url = Pb(this.$$path) + (a ? "?" + a : "") + b;
			this.$$absUrl = c + this.$$url.substr(1)
		};
		this.$$parseLinkUrl = function (d, e) {
			var f, g;
			(f = sa(b, d)) !== v ? (g = f, g = (f = sa(a, f)) !== v ? c + (sa("/", f) || f) : b + g) : (f = sa(c, d)) !== v ? g = c + f : c == d + "/" && (g = c);
			g && this.$$parse(g);
			return !!g
		}
	}

	function Sb(b, a) {
		var c = Qb(b);
		wc(b, this, b);
		this.$$parse = function (d) {
			var e = sa(b, d) || sa(c, d),
				e = "#" == e.charAt(0) ? sa(a, e) : this.$$html5 ? e : "";
			if (!E(e)) {
				throw Rb("ihshprfx", d, a)
			}
			xc(e, this, b);
			d = this.$$path;
			var f = /^\/[A-Z]:(\/.*)/;
			0 === e.indexOf(b) && (e = e.replace(b, ""));
			f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
			this.$$path = d;
			this.$$compose()
		};
		this.$$compose = function () {
			var c = Bb(this.$$search),
				e = this.$$hash ? "#" + lb(this.$$hash) : "";
			this.$$url = Pb(this.$$path) + (c ? "?" + c : "") + e;
			this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
		};
		this.$$parseLinkUrl = function (a, c) {
			return Fa(b) == Fa(a) ? (this.$$parse(a), !0) : !1
		}
	}

	function Ac(b, a) {
		this.$$html5 = !0;
		Sb.apply(this, arguments);
		var c = Qb(b);
		this.$$parseLinkUrl = function (d, e) {
			var f, g;
			b == Fa(d) ? f = d : (g = sa(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
			f && this.$$parse(f);
			return !!f
		};
		this.$$compose = function () {
			var c = Bb(this.$$search),
				e = this.$$hash ? "#" + lb(this.$$hash) : "";
			this.$$url = Pb(this.$$path) + (c ? "?" + c : "") + e;
			this.$$absUrl = b + a + this.$$url
		}
	}

	function sb(b) {
		return function () {
			return this[b]
		}
	}

	function Bc(b, a) {
		return function (c) {
			if (H(c)) {
				return this[b]
			}
			this[b] = a(c);
			this.$$compose();
			return this
		}
	}

	function Wd() {
		var b = "",
			a = !1;
		this.hashPrefix = function (a) {
			return G(a) ? (b = a, this) : b
		};
		this.html5Mode = function (b) {
			return G(b) ? (a = b, this) : a
		};
		this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
			function (c, d, e, f) {
				function g(a) {
					c.$broadcast("$locationChangeSuccess", h.absUrl(), a)
				}
				var h, k = d.baseHref(),
					l = d.url();
				a ? (k = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (k || "/"), e = e.history ? zc : Ac) : (k = Fa(l), e = Sb);
				h = new e(k, "#" + b);
				h.$$parseLinkUrl(l, l);
				var m = /^\s*(javascript|mailto):/i;
				f.on("click", function (a) {
					if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
						for (var b = D(a.target);
							"a" !== A(b[0].nodeName);) {
							if (b[0] === f[0] || !(b = b.parent())[0]) {
								return
							}
						}
						var e = b.prop("href"),
							g = b.attr("href") || b.attr("xlink:href");
						T(e) && "[object SVGAnimatedString]" === e.toString() && (e = wa(e.animVal).href);
						m.test(e) || (!e || (b.attr("target") || a.isDefaultPrevented()) || !h.$$parseLinkUrl(e, g)) || (a.preventDefault(), h.absUrl() != d.url() && (c.$apply(), V.angular["ff-684208-preventDefault"] = !0))
					}
				});
				h.absUrl() != l && d.url(h.absUrl(), !0);
				d.onUrlChange(function (a) {
					h.absUrl() != a && (c.$evalAsync(function () {
						var b = h.absUrl();
						h.$$parse(a);
						c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : g(b)
					}), c.$$phase || c.$digest())
				});
				var n = 0;
				c.$watch(function () {
					var a = yc(d.url()),
						b = yc(h.absUrl()),
						e = h.$$replace;
					n && a == b || (n++, c.$evalAsync(function () {
						c.$broadcast("$locationChangeStart", h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), e), g(a))
					}));
					h.$$replace = !1;
					return n
				});
				return h
			}
		]
	}

	function Xd() {
		var b = !0,
			a = this;
		this.debugEnabled = function (a) {
			return G(a) ? (b = a, this) : b
		};
		this.$get = ["$window",
			function (c) {
				function d(a) {
					a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
					return a
				}

				function e(a) {
					var b = c.console || {},
						e = b[a] || b.log || B;
					a = !1;
					try {
						a = !!e.apply
					} catch (k) {}
					return a ? function () {
						var a = [];
						r(arguments, function (b) {
							a.push(d(b))
						});
						return e.apply(b, a)
					} : function (a, b) {
						e(a, null == b ? "" : b)
					}
				}
				return {
					log: e("log"),
					info: e("info"),
					warn: e("warn"),
					error: e("error"),
					debug: function () {
						var c = e("debug");
						return function () {
							b && c.apply(a, arguments)
						}
					}()
				}
			}
		]
	}

	function la(b, a) {
		if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) {
			throw ea("isecfld", a)
		}
		return b
	}

	function Cc(b, a) {
		b += "";
		if (!E(b)) {
			throw ea("iseccst", a)
		}
		return b
	}

	function ma(b, a) {
		if (b) {
			if (b.constructor === b) {
				throw ea("isecfn", a)
			}
			if (b.document && b.location && b.alert && b.setInterval) {
				throw ea("isecwindow", a)
			}
			if (b.children && (b.nodeName || b.prop && b.attr && b.find)) {
				throw ea("isecdom", a)
			}
			if (b === Object) {
				throw ea("isecobj", a)
			}
		}
		return b
	}

	function tb(b, a, c, d, e) {
		ma(b, d);
		e = e || {};
		a = a.split(".");
		for (var f, g = 0; 1 < a.length; g++) {
			f = la(a.shift(), d);
			var h = ma(b[f], d);
			h || (h = {}, b[f] = h);
			b = h;
			b.then && e.unwrapPromises && (xa(d), "$$v" in b || function (a) {
				a.then(function (b) {
					a.$$v = b
				})
			}(b), b.$$v === v && (b.$$v = {}), b = b.$$v)
		}
		f = la(a.shift(), d);
		ma(b[f], d);
		return b[f] = c
	}

	function Pa(b) {
		return "constructor" == b
	}

	function Dc(b, a, c, d, e, f, g) {
		la(b, f);
		la(a, f);
		la(c, f);
		la(d, f);
		la(e, f);
		var h = function (a) {
				return ma(a, f)
			},
			k = g.expensiveChecks,
			l = k || Pa(b) ? h : ga,
			m = k || Pa(a) ? h : ga,
			n = k || Pa(c) ? h : ga,
			q = k || Pa(d) ? h : ga,
			p = k || Pa(e) ? h : ga;
		return g.unwrapPromises ? function (g, h) {
			var k = h && h.hasOwnProperty(b) ? h : g,
				t;
			if (null == k) {
				return k
			}(k = l(k[b])) && k.then && (xa(f), "$$v" in k || (t = k, t.$$v = v, t.then(function (a) {
				t.$$v = l(a)
			})), k = l(k.$$v));
			if (!a) {
				return k
			}
			if (null == k) {
				return v
			}(k = m(k[a])) && k.then && (xa(f), "$$v" in k || (t = k, t.$$v = v, t.then(function (a) {
				t.$$v = m(a)
			})), k = m(k.$$v));
			if (!c) {
				return k
			}
			if (null == k) {
				return v
			}(k = n(k[c])) && k.then && (xa(f), "$$v" in k || (t = k, t.$$v = v, t.then(function (a) {
				t.$$v = n(a)
			})), k = n(k.$$v));
			if (!d) {
				return k
			}
			if (null == k) {
				return v
			}(k = q(k[d])) && k.then && (xa(f), "$$v" in k || (t = k, t.$$v = v, t.then(function (a) {
				t.$$v = q(a)
			})), k = q(k.$$v));
			if (!e) {
				return k
			}
			if (null == k) {
				return v
			}(k = p(k[e])) && k.then && (xa(f), "$$v" in k || (t = k, t.$$v = v, t.then(function (a) {
				t.$$v = p(a)
			})), k = p(k.$$v));
			return k
		} : function (f, g) {
			var h = g && g.hasOwnProperty(b) ? g : f;
			if (null == h) {
				return h
			}
			h = l(h[b]);
			if (!a) {
				return h
			}
			if (null == h) {
				return v
			}
			h = m(h[a]);
			if (!c) {
				return h
			}
			if (null == h) {
				return v
			}
			h = n(h[c]);
			if (!d) {
				return h
			}
			if (null == h) {
				return v
			}
			h = q(h[d]);
			return e ? null == h ? v : h = p(h[e]) : h
		}
	}

	function Be(b, a) {
		return function (c, d) {
			return b(c, d, xa, ma, a)
		}
	}

	function Ec(b, a, c) {
		var d = a.expensiveChecks,
			e = d ? Ce : De;
		if (e.hasOwnProperty(b)) {
			return e[b]
		}
		var f = b.split("."),
			g = f.length,
			h;
		if (a.csp) {
			h = 6 > g ? Dc(f[0], f[1], f[2], f[3], f[4], c, a) : function (b, d) {
				var e = 0,
					h;
				do {
					h = Dc(f[e++], f[e++], f[e++], f[e++], f[e++], c, a)(b, d), d = v, b = h
				} while (e < g);
				return h
			}
		} else {
			var k = "var p;\n";
			d && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
			var l = d;
			r(f, function (b, e) {
				la(b, c);
				var f = (e ? "s" : '((l&&l.hasOwnProperty("' + b + '"))?l:s)') + '["' + b + '"]',
					g = d || Pa(b);
				g && (f = "eso(" + f + ", fe)", l = !0);
				k += "if(s == null) return undefined;\ns=" + f + ";\n";
				a.unwrapPromises && (k += 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (g ? "eso(v)" : "v") + ";});\n}\n s=" + (g ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
			});
			k += "return s;";
			h = new Function("s", "l", "pw", "eso", "fe", k);
			h.toString = Z(k);
			if (l || a.unwrapPromises) {
				h = Be(h, c)
			}
		}
		"hasOwnProperty" !== b && (e[b] = h);
		return h
	}

	function Yd() {
		var b = {},
			a = {},
			c = {
				csp: !1,
				unwrapPromises: !1,
				logPromiseWarnings: !0,
				expensiveChecks: !1
			};
		this.unwrapPromises = function (a) {
			return G(a) ? (c.unwrapPromises = !!a, this) : c.unwrapPromises
		};
		this.logPromiseWarnings = function (a) {
			return G(a) ? (c.logPromiseWarnings = a, this) : c.logPromiseWarnings
		};
		this.$get = ["$filter", "$sniffer", "$log",
			function (d, e, f) {
				c.csp = e.csp;
				var g = {
					csp: c.csp,
					unwrapPromises: c.unwrapPromises,
					logPromiseWarnings: c.logPromiseWarnings,
					expensiveChecks: !0
				};
				xa = function (a) {
					c.logPromiseWarnings && !Fc.hasOwnProperty(a) && (Fc[a] = !0, f.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
				};
				return function (e, f) {
					var l;
					switch (typeof e) {
					case "string":
						var m = f ? a : b;
						if (m.hasOwnProperty(e)) {
							return m[e]
						}
						l = f ? g : c;
						var n = new Tb(l);
						l = (new fb(n, d, l)).parse(e);
						"hasOwnProperty" !== e && (m[e] = l);
						return l;
					case "function":
						return e;
					default:
						return B
					}
				}
			}
		]
	}

	function $d() {
		this.$get = ["$rootScope", "$exceptionHandler",
			function (b, a) {
				return Ee(function (a) {
					b.$evalAsync(a)
				}, a)
			}
		]
	}

	function Ee(b, a) {
		function c(a) {
			return a
		}

		function d(a) {
			return g(a)
		}
		var e = function () {
				var g = [],
					l, m;
				return m = {
					resolve: function (a) {
						if (g) {
							var c = g;
							g = v;
							l = f(a);
							c.length && b(function () {
								for (var a, b = 0, d = c.length; b < d; b++) {
									a = c[b], l.then(a[0], a[1], a[2])
								}
							})
						}
					},
					reject: function (a) {
						m.resolve(h(a))
					},
					notify: function (a) {
						if (g) {
							var c = g;
							g.length && b(function () {
								for (var b, d = 0, e = c.length; d < e; d++) {
									b = c[d], b[2](a)
								}
							})
						}
					},
					promise: {
						then: function (b, f, h) {
							var m = e(),
								K = function (d) {
									try {
										m.resolve((O(b) ? b : c)(d))
									} catch (e) {
										m.reject(e), a(e)
									}
								},
								w = function (b) {
									try {
										m.resolve((O(f) ? f : d)(b))
									} catch (c) {
										m.reject(c), a(c)
									}
								},
								t = function (b) {
									try {
										m.notify((O(h) ? h : c)(b))
									} catch (d) {
										a(d)
									}
								};
							g ? g.push([K, w, t]) : l.then(K, w, t);
							return m.promise
						},
						"catch": function (a) {
							return this.then(null, a)
						},
						"finally": function (a) {
							function b(a, c) {
								var d = e();
								c ? d.resolve(a) : d.reject(a);
								return d.promise
							}

							function d(e, f) {
								var g = null;
								try {
									g = (a || c)()
								} catch (h) {
									return b(h, !1)
								}
								return g && O(g.then) ? g.then(function () {
									return b(e, f)
								}, function (a) {
									return b(a, !1)
								}) : b(e, f)
							}
							return this.then(function (a) {
								return d(a, !0)
							}, function (a) {
								return d(a, !1)
							})
						}
					}
				}
			},
			f = function (a) {
				return a && O(a.then) ? a : {
					then: function (c) {
						var d = e();
						b(function () {
							d.resolve(c(a))
						});
						return d.promise
					}
				}
			},
			g = function (a) {
				var b = e();
				b.reject(a);
				return b.promise
			},
			h = function (c) {
				return {
					then: function (f, g) {
						var h = e();
						b(function () {
							try {
								h.resolve((O(g) ? g : d)(c))
							} catch (b) {
								h.reject(b), a(b)
							}
						});
						return h.promise
					}
				}
			};
		return {
			defer: e,
			reject: g,
			when: function (h, l, m, n) {
				var q = e(),
					p, s = function (b) {
						try {
							return (O(l) ? l : c)(b)
						} catch (d) {
							return a(d), g(d)
						}
					},
					K = function (b) {
						try {
							return (O(m) ? m : d)(b)
						} catch (c) {
							return a(c), g(c)
						}
					},
					w = function (b) {
						try {
							return (O(n) ? n : c)(b)
						} catch (d) {
							a(d)
						}
					};
				b(function () {
					f(h).then(function (a) {
						p || (p = !0, q.resolve(f(a).then(s, K, w)))
					}, function (a) {
						p || (p = !0, q.resolve(K(a)))
					}, function (a) {
						p || q.notify(w(a))
					})
				});
				return q.promise
			},
			all: function (a) {
				var b = e(),
					c = 0,
					d = M(a) ? [] : {};
				r(a, function (a, e) {
					c++;
					f(a).then(function (a) {
						d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
					}, function (a) {
						d.hasOwnProperty(e) || b.reject(a)
					})
				});
				0 === c && b.resolve(d);
				return b.promise
			}
		}
	}

	function ge() {
		this.$get = ["$window", "$timeout",
			function (b, a) {
				var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame,
					d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
					e = !!c,
					f = e ? function (a) {
						var b = c(a);
						return function () {
							d(b)
						}
					} : function (b) {
						var c = a(b, 16.66, !1);
						return function () {
							a.cancel(c)
						}
					};
				f.supported = e;
				return f
			}
		]
	}

	function Zd() {
		var b = 10,
			a = z("$rootScope"),
			c = null;
		this.digestTtl = function (a) {
			arguments.length && (b = a);
			return b
		};
		this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
			function (d, e, f, g) {
				function h() {
					this.$id = hb();
					this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
					this["this"] = this.$root = this;
					this.$$destroyed = !1;
					this.$$asyncQueue = [];
					this.$$postDigestQueue = [];
					this.$$listeners = {};
					this.$$listenerCount = {};
					this.$$isolateBindings = {}
				}

				function k(b) {
					if (q.$$phase) {
						throw a("inprog", q.$$phase)
					}
					q.$$phase = b
				}

				function l(a, b) {
					var c = f(a);
					Xa(c, b);
					return c
				}

				function m(a, b, c) {
					do {
						a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]
					} while (a = a.$parent)
				}

				function n() {}
				h.prototype = {
					constructor: h,
					$new: function (a) {
						a ? (a = new h, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
							this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
							this.$$listeners = {};
							this.$$listenerCount = {};
							this.$id = hb();
							this.$$childScopeClass = null
						}, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass);
						a["this"] = a;
						a.$parent = this;
						a.$$prevSibling = this.$$childTail;
						this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
						return a
					},
					$watch: function (a, b, d) {
						var e = l(a, "watch"),
							f = this.$$watchers,
							g = {
								fn: b,
								last: n,
								get: e,
								exp: a,
								eq: !!d
							};
						c = null;
						if (!O(b)) {
							var h = l(b || B, "listener");
							g.fn = function (a, b, c) {
								h(c)
							}
						}
						if ("string" == typeof a && e.constant) {
							var k = g.fn;
							g.fn = function (a, b, c) {
								k.call(this, a, b, c);
								Ta(f, g)
							}
						}
						f || (f = this.$$watchers = []);
						f.unshift(g);
						return function () {
							Ta(f, g);
							c = null
						}
					},
					$watchCollection: function (a, b) {
						var c = this,
							d, e, g, h = 1 < b.length,
							k = 0,
							l = f(a),
							m = [],
							n = {},
							q = !0,
							r = 0;
						return this.$watch(function () {
							d = l(c);
							var a, b, f;
							if (T(d)) {
								if (Ra(d)) {
									for (e !== m && (e = m, r = e.length = 0, k++), a = d.length, r !== a && (k++, e.length = r = a), b = 0; b < a; b++) {
										f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b])
									}
								} else {
									e !== n && (e = n = {}, r = 0, k++);
									a = 0;
									for (b in d) {
										d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b])) : (r++, e[b] = d[b], k++))
									}
									if (r > a) {
										for (b in k++, e) {
											e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b])
										}
									}
								}
							} else {
								e !== d && (e = d, k++)
							}
							return k
						}, function () {
							q ? (q = !1, b(d, d, c)) : b(d, g, c);
							if (h) {
								if (T(d)) {
									if (Ra(d)) {
										g = Array(d.length);
										for (var a = 0; a < d.length; a++) {
											g[a] = d[a]
										}
									} else {
										for (a in g = {}, d) {
											kb.call(d, a) && (g[a] = d[a])
										}
									}
								} else {
									g = d
								}
							}
						})
					},
					$digest: function () {
						var d, f, h, l, m = this.$$asyncQueue,
							r = this.$$postDigestQueue,
							L, y, v = b,
							P, N = [],
							u, Q, C;
						k("$digest");
						g.$$checkUrlChange();
						c = null;
						do {
							y = !1;
							for (P = this; m.length;) {
								try {
									C = m.shift(), C.scope.$eval(C.expression)
								} catch (J) {
									q.$$phase = null, e(J)
								}
								c = null
							}
							a: do {
								if (l = P.$$watchers) {
									for (L = l.length; L--;) {
										try {
											if (d = l[L]) {
												if ((f = d.get(P)) !== (h = d.last) && !(d.eq ? Ba(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) {
													y = !0, c = d, d.last = d.eq ? Ia(f, null) : f, d.fn(f, h === n ? f : h, P), 5 > v && (u = 4 - v, N[u] || (N[u] = []), Q = O(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, Q += "; newVal: " + oa(f) + "; oldVal: " + oa(h), N[u].push(Q))
												} else {
													if (d === c) {
														y = !1;
														break a
													}
												}
											}
										} catch (D) {
											q.$$phase = null, e(D)
										}
									}
								}
								if (!(l = P.$$childHead || P !== this && P.$$nextSibling)) {
									for (; P !== this && !(l = P.$$nextSibling);) {
										P = P.$parent
									}
								}
							} while (P = l);
							if ((y || m.length) && !v--) {
								throw q.$$phase = null, a("infdig", b, oa(N))
							}
						} while (y || m.length);
						for (q.$$phase = null; r.length;) {
							try {
								r.shift()()
							} catch (G) {
								e(G)
							}
						}
					},
					$destroy: function () {
						if (!this.$$destroyed) {
							var a = this.$parent;
							this.$broadcast("$destroy");
							this.$$destroyed = !0;
							this !== q && (r(this.$$listenerCount, Ab(null, m, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = B, this.$on = this.$watch = function () {
								return B
							})
						}
					},
					$eval: function (a, b) {
						return f(a)(this, b)
					},
					$evalAsync: function (a) {
						q.$$phase || q.$$asyncQueue.length || g.defer(function () {
							q.$$asyncQueue.length && q.$digest()
						});
						this.$$asyncQueue.push({
							scope: this,
							expression: a
						})
					},
					$$postDigest: function (a) {
						this.$$postDigestQueue.push(a)
					},
					$apply: function (a) {
						try {
							return k("$apply"), this.$eval(a)
						} catch (b) {
							e(b)
						} finally {
							q.$$phase = null;
							try {
								q.$digest()
							} catch (c) {
								throw e(c), c
							}
						}
					},
					$on: function (a, b) {
						var c = this.$$listeners[a];
						c || (this.$$listeners[a] = c = []);
						c.push(b);
						var d = this;
						do {
							d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++
						} while (d = d.$parent);
						var e = this;
						return function () {
							var d = Sa(c, b); - 1 !== d && (c[d] = null, m(e, 1, a))
						}
					},
					$emit: function (a, b) {
						var c = [],
							d, f = this,
							g = !1,
							h = {
								name: a,
								targetScope: f,
								stopPropagation: function () {
									g = !0
								},
								preventDefault: function () {
									h.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							k = [h].concat(va.call(arguments, 1)),
							l, m;
						do {
							d = f.$$listeners[a] || c;
							h.currentScope = f;
							l = 0;
							for (m = d.length; l < m; l++) {
								if (d[l]) {
									try {
										d[l].apply(null, k)
									} catch (n) {
										e(n)
									}
								} else {
									d.splice(l, 1), l--, m--
								}
							}
							if (g) {
								break
							}
							f = f.$parent
						} while (f);
						return h
					},
					$broadcast: function (a, b) {
						for (var c = this, d = this, f = {
							name: a,
							targetScope: this,
							preventDefault: function () {
								f.defaultPrevented = !0
							},
							defaultPrevented: !1
						}, g = [f].concat(va.call(arguments, 1)), h, k; c = d;) {
							f.currentScope = c;
							d = c.$$listeners[a] || [];
							h = 0;
							for (k = d.length; h < k; h++) {
								if (d[h]) {
									try {
										d[h].apply(null, g)
									} catch (l) {
										e(l)
									}
								} else {
									d.splice(h, 1), h--, k--
								}
							}
							if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) {
								for (; c !== this && !(d = c.$$nextSibling);) {
									c = c.$parent
								}
							}
						}
						return f
					}
				};
				var q = new h;
				return q
			}
		]
	}

	function cd() {
		var b = /^\s*(https?|ftp|mailto|tel|file):/,
			a = /^\s*((https?|ftp|file):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function (a) {
			return G(a) ? (b = a, this) : b
		};
		this.imgSrcSanitizationWhitelist = function (b) {
			return G(b) ? (a = b, this) : a
		};
		this.$get = function () {
			return function (c, d) {
				var e = d ? a : b,
					f;
				if (!u || 8 <= u) {
					if (f = wa(c).href, "" !== f && !f.match(e)) {
						return "unsafe:" + f
					}
				}
				return c
			}
		}
	}

	function Fe(b) {
		if ("self" === b) {
			return b
		}
		if (E(b)) {
			if (-1 < b.indexOf("***")) {
				throw ya("iwcard", b)
			}
			b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
			return RegExp("^" + b + "$")
		}
		if (jb(b)) {
			return RegExp("^" + b.source + "$")
		}
		throw ya("imatcher")
	}

	function Gc(b) {
		var a = [];
		G(b) && r(b, function (b) {
			a.push(Fe(b))
		});
		return a
	}

	function be() {
		this.SCE_CONTEXTS = fa;
		var b = ["self"],
			a = [];
		this.resourceUrlWhitelist = function (a) {
			arguments.length && (b = Gc(a));
			return b
		};
		this.resourceUrlBlacklist = function (b) {
			arguments.length && (a = Gc(b));
			return a
		};
		this.$get = ["$injector",
			function (c) {
				function d(a) {
					var b = function (a) {
						this.$$unwrapTrustedValue = function () {
							return a
						}
					};
					a && (b.prototype = new a);
					b.prototype.valueOf = function () {
						return this.$$unwrapTrustedValue()
					};
					b.prototype.toString = function () {
						return this.$$unwrapTrustedValue().toString()
					};
					return b
				}
				var e = function (a) {
					throw ya("unsafe")
				};
				c.has("$sanitize") && (e = c.get("$sanitize"));
				var f = d(),
					g = {};
				g[fa.HTML] = d(f);
				g[fa.CSS] = d(f);
				g[fa.URL] = d(f);
				g[fa.JS] = d(f);
				g[fa.RESOURCE_URL] = d(g[fa.URL]);
				return {
					trustAs: function (a, b) {
						var c = g.hasOwnProperty(a) ? g[a] : null;
						if (!c) {
							throw ya("icontext", a, b)
						}
						if (null === b || b === v || "" === b) {
							return b
						}
						if ("string" !== typeof b) {
							throw ya("itype", a)
						}
						return new c(b)
					},
					getTrusted: function (c, d) {
						if (null === d || d === v || "" === d) {
							return d
						}
						var f = g.hasOwnProperty(c) ? g[c] : null;
						if (f && d instanceof f) {
							return d.$$unwrapTrustedValue()
						}
						if (c === fa.RESOURCE_URL) {
							var f = wa(d.toString()),
								m, n, q = !1;
							m = 0;
							for (n = b.length; m < n; m++) {
								if ("self" === b[m] ? Ob(f) : b[m].exec(f.href)) {
									q = !0;
									break
								}
							}
							if (q) {
								for (m = 0, n = a.length; m < n; m++) {
									if ("self" === a[m] ? Ob(f) : a[m].exec(f.href)) {
										q = !1;
										break
									}
								}
							}
							if (q) {
								return d
							}
							throw ya("insecurl", d.toString())
						}
						if (c === fa.HTML) {
							return e(d)
						}
						throw ya("unsafe")
					},
					valueOf: function (a) {
						return a instanceof f ? a.$$unwrapTrustedValue() : a
					}
				}
			}
		]
	}

	function ae() {
		var b = !0;
		this.enabled = function (a) {
			arguments.length && (b = !!a);
			return b
		};
		this.$get = ["$parse", "$sniffer", "$sceDelegate",
			function (a, c, d) {
				if (b && c.msie && 8 > c.msieDocumentMode) {
					throw ya("iequirks")
				}
				var e = ha(fa);
				e.isEnabled = function () {
					return b
				};
				e.trustAs = d.trustAs;
				e.getTrusted = d.getTrusted;
				e.valueOf = d.valueOf;
				b || (e.trustAs = e.getTrusted = function (a, b) {
					return b
				}, e.valueOf = ga);
				e.parseAs = function (b, c) {
					var d = a(c);
					return d.literal && d.constant ? d : function (a, c) {
						return e.getTrusted(b, d(a, c))
					}
				};
				var f = e.parseAs,
					g = e.getTrusted,
					h = e.trustAs;
				r(fa, function (a, b) {
					var c = A(b);
					e[$a("parse_as_" + c)] = function (b) {
						return f(a, b)
					};
					e[$a("get_trusted_" + c)] = function (b) {
						return g(a, b)
					};
					e[$a("trust_as_" + c)] = function (b) {
						return h(a, b)
					}
				});
				return e
			}
		]
	}

	function ce() {
		this.$get = ["$window", "$document",
			function (b, a) {
				var c = {},
					d = U((/android (\d+)/.exec(A((b.navigator || {}).userAgent)) || [])[1]),
					e = /Boxee/i.test((b.navigator || {}).userAgent),
					f = a[0] || {},
					g = f.documentMode,
					h, k = /^(Moz|webkit|O|ms)(?=[A-Z])/,
					l = f.body && f.body.style,
					m = !1,
					n = !1;
				if (l) {
					for (var q in l) {
						if (m = k.exec(q)) {
							h = m[0];
							h = h.substr(0, 1).toUpperCase() + h.substr(1);
							break
						}
					}
					h || (h = "WebkitOpacity" in l && "webkit");
					m = !!("transition" in l || h + "Transition" in l);
					n = !!("animation" in l || h + "Animation" in l);
					!d || m && n || (m = E(f.body.style.webkitTransition), n = E(f.body.style.webkitAnimation))
				}
				return {
					history: !(!b.history || !b.history.pushState || 4 > d || e),
					hashchange: "onhashchange" in b && (!g || 7 < g),
					hasEvent: function (a) {
						if ("input" == a && 9 == u) {
							return !1
						}
						if (H(c[a])) {
							var b = f.createElement("div");
							c[a] = "on" + a in b
						}
						return c[a]
					},
					csp: Ya(),
					vendorPrefix: h,
					transitions: m,
					animations: n,
					android: d,
					msie: u,
					msieDocumentMode: g
				}
			}
		]
	}

	function ee() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
			function (b, a, c, d) {
				function e(e, h, k) {
					var l = c.defer(),
						m = l.promise,
						n = G(k) && !k;
					h = a.defer(function () {
						try {
							l.resolve(e())
						} catch (a) {
							l.reject(a), d(a)
						} finally {
							delete f[m.$$timeoutId]
						}
						n || b.$apply()
					}, h);
					m.$$timeoutId = h;
					f[h] = l;
					return m
				}
				var f = {};
				e.cancel = function (b) {
					return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
				};
				return e
			}
		]
	}

	function wa(b, a) {
		var c = b;
		u && (X.setAttribute("href", c), c = X.href);
		X.setAttribute("href", c);
		return {
			href: X.href,
			protocol: X.protocol ? X.protocol.replace(/:$/, "") : "",
			host: X.host,
			search: X.search ? X.search.replace(/^\?/, "") : "",
			hash: X.hash ? X.hash.replace(/^#/, "") : "",
			hostname: X.hostname,
			port: X.port,
			pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname
		}
	}

	function Ob(b) {
		b = E(b) ? wa(b) : b;
		return b.protocol === Hc.protocol && b.host === Hc.host
	}

	function fe() {
		this.$get = Z(V)
	}

	function jc(b) {
		function a(d, e) {
			if (T(d)) {
				var f = {};
				r(d, function (b, c) {
					f[c] = a(c, b)
				});
				return f
			}
			return b.factory(d + c, e)
		}
		var c = "Filter";
		this.register = a;
		this.$get = ["$injector",
			function (a) {
				return function (b) {
					return a.get(b + c)
				}
			}
		];
		a("currency", Ic);
		a("date", Jc);
		a("filter", Ge);
		a("json", He);
		a("limitTo", Ie);
		a("lowercase", Je);
		a("number", Kc);
		a("orderBy", Lc);
		a("uppercase", Ke)
	}

	function Ge() {
		return function (b, a, c) {
			if (!M(b)) {
				return b
			}
			var d = typeof c,
				e = [];
			e.check = function (a) {
				for (var b = 0; b < e.length; b++) {
					if (!e[b](a)) {
						return !1
					}
				}
				return !0
			};
			"function" !== d && (c = "boolean" === d && c ? function (a, b) {
				return Wa.equals(a, b)
			} : function (a, b) {
				if (a && b && "object" === typeof a && "object" === typeof b) {
					for (var d in a) {
						if ("$" !== d.charAt(0) && kb.call(a, d) && c(a[d], b[d])) {
							return !0
						}
					}
					return !1
				}
				b = ("" + b).toLowerCase();
				return -1 < ("" + a).toLowerCase().indexOf(b)
			});
			var f = function (a, b) {
				if ("string" === typeof b && "!" === b.charAt(0)) {
					return !f(a, b.substr(1))
				}
				switch (typeof a) {
				case "boolean":
				case "number":
				case "string":
					return c(a, b);
				case "object":
					switch (typeof b) {
					case "object":
						return c(a, b);
					default:
						for (var d in a) {
							if ("$" !== d.charAt(0) && f(a[d], b)) {
								return !0
							}
						}
					}
					return !1;
				case "array":
					for (d = 0; d < a.length; d++) {
						if (f(a[d], b)) {
							return !0
						}
					}
					return !1;
				default:
					return !1
				}
			};
			switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
				a = {
					$: a
				};
			case "object":
				for (var g in a) {
					(function (b) {
						"undefined" !== typeof a[b] && e.push(function (c) {
							return f("$" == b ? c : c && c[b], a[b])
						})
					})(g)
				}
				break;
			case "function":
				e.push(a);
				break;
			default:
				return b
			}
			d = [];
			for (g = 0; g < b.length; g++) {
				var h = b[g];
				e.check(h) && d.push(h)
			}
			return d
		}
	}

	function Ic(b) {
		var a = b.NUMBER_FORMATS;
		return function (b, d) {
			H(d) && (d = a.CURRENCY_SYM);
			return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
		}
	}

	function Kc(b) {
		var a = b.NUMBER_FORMATS;
		return function (b, d) {
			return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
		}
	}

	function Mc(b, a, c, d, e) {
		if (null == b || !isFinite(b) || T(b)) {
			return ""
		}
		var f = 0 > b;
		b = Math.abs(b);
		var g = b + "",
			h = "",
			k = [],
			l = !1;
		if (-1 !== g.indexOf("e")) {
			var m = g.match(/([\d\.]+)e(-?)(\d+)/);
			m && "-" == m[2] && m[3] > e + 1 ? (g = "0", b = 0) : (h = g, l = !0)
		}
		if (l) {
			0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e))
		} else {
			g = (g.split(Nc)[1] || "").length;
			H(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
			b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
			0 === b && (f = !1);
			b = ("" + b).split(Nc);
			g = b[0];
			b = b[1] || "";
			var m = 0,
				n = a.lgSize,
				q = a.gSize;
			if (g.length >= n + q) {
				for (m = g.length - n, l = 0; l < m; l++) {
					0 === (m - l) % q && 0 !== l && (h += c), h += g.charAt(l)
				}
			}
			for (l = m; l < g.length; l++) {
				0 === (g.length - l) % n && 0 !== l && (h += c), h += g.charAt(l)
			}
			for (; b.length < e;) {
				b += "0"
			}
			e && "0" !== e && (h += d + b.substr(0, e))
		}
		k.push(f ? a.negPre : a.posPre);
		k.push(h);
		k.push(f ? a.negSuf : a.posSuf);
		return k.join("")
	}

	function Ub(b, a, c) {
		var d = "";
		0 > b && (d = "-", b = -b);
		for (b = "" + b; b.length < a;) {
			b = "0" + b
		}
		c && (b = b.substr(b.length - a));
		return d + b
	}

	function Y(b, a, c, d) {
		c = c || 0;
		return function (e) {
			e = e["get" + b]();
			if (0 < c || e > -c) {
				e += c
			}
			0 === e && -12 == c && (e = 12);
			return Ub(e, a, d)
		}
	}

	function ub(b, a) {
		return function (c, d) {
			var e = c["get" + b](),
				f = Ja(a ? "SHORT" + b : b);
			return d[f][e]
		}
	}

	function Jc(b) {
		function a(a) {
			var b;
			if (b = a.match(c)) {
				a = new Date(0);
				var f = 0,
					g = 0,
					h = b[8] ? a.setUTCFullYear : a.setFullYear,
					k = b[8] ? a.setUTCHours : a.setHours;
				b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
				h.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
				f = U(b[4] || 0) - f;
				g = U(b[5] || 0) - g;
				h = U(b[6] || 0);
				b = Math.round(1000 * parseFloat("0." + (b[7] || 0)));
				k.call(a, f, g, h, b)
			}
			return a
		}
		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (c, e) {
			var f = "",
				g = [],
				h, k;
			e = e || "mediumDate";
			e = b.DATETIME_FORMATS[e] || e;
			E(c) && (c = Le.test(c) ? U(c) : a(c));
			ib(c) && (c = new Date(c));
			if (!ua(c)) {
				return c
			}
			for (; e;) {
				(k = Me.exec(e)) ? (g = g.concat(va.call(k, 1)), e = g.pop()) : (g.push(e), e = null)
			}
			r(g, function (a) {
				h = Ne[a];
				f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			});
			return f
		}
	}

	function He() {
		return function (b) {
			return oa(b, !0)
		}
	}

	function Ie() {
		return function (b, a) {
			return M(b) || E(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : E(b) ? "" : [] : b
		}
	}

	function Lc(b) {
		return function (a, c, d) {
			function e(a, b) {
				return Va(b) ? function (b, c) {
					return a(c, b)
				} : a
			}

			function f(a, b) {
				var c = typeof a,
					d = typeof b;
				return c == d ? (ua(a) && ua(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
			}
			if (!Ra(a)) {
				return a
			}
			c = M(c) ? c : [c];
			0 === c.length && (c = ["+"]);
			c = Vc(c, function (a) {
				var c = !1,
					d = a || ga;
				if (E(a)) {
					if ("+" == a.charAt(0) || "-" == a.charAt(0)) {
						c = "-" == a.charAt(0), a = a.substring(1)
					}
					if ("" === a) {
						return e(function (a, b) {
							return f(a, b)
						}, c)
					}
					d = b(a);
					if (d.constant) {
						var l = d();
						return e(function (a, b) {
							return f(a[l], b[l])
						}, c)
					}
				}
				return e(function (a, b) {
					return f(d(a), d(b))
				}, c)
			});
			return va.call(a).sort(e(function (a, b) {
				for (var d = 0; d < c.length; d++) {
					var e = c[d](a, b);
					if (0 !== e) {
						return e
					}
				}
				return 0
			}, d))
		}
	}

	function za(b) {
		O(b) && (b = {
			link: b
		});
		b.restrict = b.restrict || "AC";
		return Z(b)
	}

	function Oc(b, a, c, d) {
		function e(a, c) {
			c = c ? "-" + mb(c, "-") : "";
			d.setClass(b, (a ? vb : wb) + c, (a ? wb : vb) + c)
		}
		var f = this,
			g = b.parent().controller("form") || xb,
			h = 0,
			k = f.$error = {},
			l = [];
		f.$name = a.name || a.ngForm;
		f.$dirty = !1;
		f.$pristine = !0;
		f.$valid = !0;
		f.$invalid = !1;
		g.$addControl(f);
		b.addClass(Qa);
		e(!0);
		f.$addControl = function (a) {
			Da(a.$name, "input");
			l.push(a);
			a.$name && (f[a.$name] = a)
		};
		f.$removeControl = function (a) {
			a.$name && f[a.$name] === a && delete f[a.$name];
			r(k, function (b, c) {
				f.$setValidity(c, !0, a)
			});
			Ta(l, a)
		};
		f.$setValidity = function (a, b, c) {
			var d = k[a];
			if (b) {
				d && (Ta(d, c), d.length || (h--, h || (e(b), f.$valid = !0, f.$invalid = !1), k[a] = !1, e(!0, a), g.$setValidity(a, !0, f)))
			} else {
				h || e(b);
				if (d) {
					if (-1 != Sa(d, c)) {
						return
					}
				} else {
					k[a] = d = [], h++, e(!1, a), g.$setValidity(a, !1, f)
				}
				d.push(c);
				f.$valid = !1;
				f.$invalid = !0
			}
		};
		f.$setDirty = function () {
			d.removeClass(b, Qa);
			d.addClass(b, yb);
			f.$dirty = !0;
			f.$pristine = !1;
			g.$setDirty()
		};
		f.$setPristine = function () {
			d.removeClass(b, yb);
			d.addClass(b, Qa);
			f.$dirty = !1;
			f.$pristine = !0;
			r(l, function (a) {
				a.$setPristine()
			})
		}
	}

	function ta(b, a, c, d) {
		b.$setValidity(a, c);
		return c ? d : v
	}

	function Pc(b, a) {
		var c, d;
		if (a) {
			for (c = 0; c < a.length; ++c) {
				if (d = a[c], b[d]) {
					return !0
				}
			}
		}
		return !1
	}

	function Oe(b, a, c, d, e) {
		T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function (f) {
			if (b.$error[a] || Pc(e, d) || !Pc(e, c)) {
				return f
			}
			b.$setValidity(a, !1)
		}))
	}

	function zb(b, a, c, d, e, f) {
		var g = a.prop(Pe),
			h = a[0].placeholder,
			k = {},
			l = A(a[0].type);
		d.$$validityState = g;
		if (!e.android) {
			var m = !1;
			a.on("compositionstart", function (a) {
				m = !0
			});
			a.on("compositionend", function () {
				m = !1;
				n()
			})
		}
		var n = function (e) {
			if (!m) {
				var f = a.val();
				if (u && "input" === (e || k).type && a[0].placeholder !== h) {
					h = a[0].placeholder
				} else {
					if ("password" !== l && Va(c.ngTrim || "T") && (f = $(f)), e = g && d.$$hasNativeValidators, d.$viewValue !== f || "" === f && e) {
						b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function () {
							d.$setViewValue(f)
						})
					}
				}
			}
		};
		if (e.hasEvent("input")) {
			a.on("input", n)
		} else {
			var q, p = function () {
				q || (q = f.defer(function () {
					n();
					q = null
				}))
			};
			a.on("keydown", function (a) {
				a = a.keyCode;
				91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || p()
			});
			if (e.hasEvent("paste")) {
				a.on("paste cut", p)
			}
		}
		a.on("change", n);
		d.$render = function () {
			a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
		};
		var s = c.ngPattern;
		s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ? (s = RegExp(e[1], e[2]), e = function (a) {
			return ta(d, "pattern", d.$isEmpty(a) || s.test(a), a)
		}) : e = function (c) {
			var e = b.$eval(s);
			if (!e || !e.test) {
				throw z("ngPattern")("noregexp", s, e, ia(a))
			}
			return ta(d, "pattern", d.$isEmpty(c) || e.test(c), c)
		}, d.$formatters.push(e), d.$parsers.push(e));
		if (c.ngMinlength) {
			var r = U(c.ngMinlength);
			e = function (a) {
				return ta(d, "minlength", d.$isEmpty(a) || a.length >= r, a)
			};
			d.$parsers.push(e);
			d.$formatters.push(e)
		}
		if (c.ngMaxlength) {
			var w = U(c.ngMaxlength);
			e = function (a) {
				return ta(d, "maxlength", d.$isEmpty(a) || a.length <= w, a)
			};
			d.$parsers.push(e);
			d.$formatters.push(e)
		}
	}

	function Vb(b, a) {
		b = "ngClass" + b;
		return ["$animate",
			function (c) {
				function d(a, b) {
					var c = [],
						d = 0;
					a: for (; d < a.length; d++) {
						for (var e = a[d], m = 0; m < b.length; m++) {
							if (e == b[m]) {
								continue a
							}
						}
						c.push(e)
					}
					return c
				}

				function e(a) {
					if (!M(a)) {
						if (E(a)) {
							return a.split(" ")
						}
						if (T(a)) {
							var b = [];
							r(a, function (a, c) {
								a && (b = b.concat(c.split(" ")))
							});
							return b
						}
					}
					return a
				}
				return {
					restrict: "AC",
					link: function (f, g, h) {
						function k(a, b) {
							var c = g.data("$classCounts") || {},
								d = [];
							r(a, function (a) {
								if (0 < b || c[a]) {
									c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
								}
							});
							g.data("$classCounts", c);
							return d.join(" ")
						}

						function l(b) {
							if (!0 === a || f.$index % 2 === a) {
								var l = e(b || []);
								if (!m) {
									var p = k(l, 1);
									h.$addClass(p)
								} else {
									if (!Ba(b, m)) {
										var s = e(m),
											p = d(l, s),
											l = d(s, l),
											l = k(l, -1),
											p = k(p, 1);
										0 === p.length ? c.removeClass(g, l) : 0 === l.length ? c.addClass(g, p) : c.setClass(g, p, l)
									}
								}
							}
							m = ha(b)
						}
						var m;
						f.$watch(h[b], l, !0);
						h.$observe("class", function (a) {
							l(f.$eval(h[b]))
						});
						"ngClass" !== b && f.$watch("$index", function (c, d) {
							var g = c & 1;
							if (g !== (d & 1)) {
								var l = e(f.$eval(h[b]));
								g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
							}
						})
					}
				}
			}
		]
	}
	var Pe = "validity",
		A = function (b) {
			return E(b) ? b.toLowerCase() : b
		},
		kb = Object.prototype.hasOwnProperty,
		Ja = function (b) {
			return E(b) ? b.toUpperCase() : b
		},
		u, D, Ea, va = [].slice,
		Qe = [].push,
		Aa = Object.prototype.toString,
		Ua = z("ng"),
		Wa = V.angular || (V.angular = {}),
		Za, Na, na = ["0", "0", "0"];
	u = U((/msie (\d+)/.exec(A(navigator.userAgent)) || [])[1]);
	isNaN(u) && (u = U((/trident\/.*; rv:(\d+)/.exec(A(navigator.userAgent)) || [])[1]));
	B.$inject = [];
	ga.$inject = [];
	var M = function () {
			return O(Array.isArray) ? Array.isArray : function (b) {
				return "[object Array]" === Aa.call(b)
			}
		}(),
		$ = function () {
			return String.prototype.trim ? function (b) {
				return E(b) ? b.trim() : b
			} : function (b) {
				return E(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
			}
		}();
	Na = 9 > u ? function (b) {
		b = b.nodeName ? b : b[0];
		return b.scopeName && "HTML" != b.scopeName ? Ja(b.scopeName + ":" + b.nodeName) : b.nodeName
	} : function (b) {
		return b.nodeName ? b.nodeName : b[0].nodeName
	};
	var Ya = function () {
			if (G(Ya.isActive_)) {
				return Ya.isActive_
			}
			var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
			if (!b) {
				try {
					new Function("")
				} catch (a) {
					b = !0
				}
			}
			return Ya.isActive_ = b
		},
		Yc = /[A-Z]/g,
		ad = {
			full: "1.2.29",
			major: 1,
			minor: 2,
			dot: 29,
			codeName: "ultimate-deprecation"
		};
	S.expando = "ng339";
	var bb = S.cache = {},
		ne = 1,
		rb = V.document.addEventListener ? function (b, a, c) {
			b.addEventListener(a, c, !1)
		} : function (b, a, c) {
			b.attachEvent("on" + a, c)
		},
		ab = V.document.removeEventListener ? function (b, a, c) {
			b.removeEventListener(a, c, !1)
		} : function (b, a, c) {
			b.detachEvent("on" + a, c)
		};
	S._data = function (b) {
		return this.cache[b[this.expando]] || {}
	};
	var ie = /([\:\-\_]+(.))/g,
		je = /^moz([A-Z])/,
		Gb = z("jqLite"),
		ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Hb = /<|&#?\w+;/,
		le = /<([\w:]+)/,
		me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ca = {
			option: [1, '<select multiple="multiple">', "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ca.optgroup = ca.option;
	ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead;
	ca.th = ca.td;
	var Ma = S.prototype = {
			ready: function (b) {
				function a() {
					c || (c = !0, b())
				}
				var c = !1;
				"complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(V).on("load", a))
			},
			toString: function () {
				var b = [];
				r(this, function (a) {
					b.push("" + a)
				});
				return "[" + b.join(", ") + "]"
			},
			eq: function (b) {
				return 0 <= b ? D(this[b]) : D(this[this.length + b])
			},
			length: 0,
			push: Qe,
			sort: [].sort,
			splice: [].splice
		},
		qb = {};
	r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
		qb[A(b)] = b
	});
	var oc = {};
	r("input select option textarea button form details".split(" "), function (b) {
		oc[Ja(b)] = !0
	});
	r({
		data: Lb,
		removeData: Kb
	}, function (b, a) {
		S[a] = b
	});
	r({
		data: Lb,
		inheritedData: pb,
		scope: function (b) {
			return D.data(b, "$scope") || pb(b.parentNode || b, ["$isolateScope", "$scope"])
		},
		isolateScope: function (b) {
			return D.data(b, "$isolateScope") || D.data(b, "$isolateScopeNoTemplate")
		},
		controller: lc,
		injector: function (b) {
			return pb(b, "$injector")
		},
		removeAttr: function (b, a) {
			b.removeAttribute(a)
		},
		hasClass: Mb,
		css: function (b, a, c) {
			a = $a(a);
			if (G(c)) {
				b.style[a] = c
			} else {
				var d;
				8 >= u && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
				d = d || b.style[a];
				8 >= u && (d = "" === d ? v : d);
				return d
			}
		},
		attr: function (b, a, c) {
			var d = A(a);
			if (qb[d]) {
				if (G(c)) {
					c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d))
				} else {
					return b[a] || (b.attributes.getNamedItem(a) || B).specified ? d : v
				}
			} else {
				if (G(c)) {
					b.setAttribute(a, c)
				} else {
					if (b.getAttribute) {
						return b = b.getAttribute(a, 2), null === b ? v : b
					}
				}
			}
		},
		prop: function (b, a, c) {
			if (G(c)) {
				b[a] = c
			} else {
				return b[a]
			}
		},
		text: function () {
			function b(b, d) {
				var e = a[b.nodeType];
				if (H(d)) {
					return e ? b[e] : ""
				}
				b[e] = d
			}
			var a = [];
			9 > u ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
			b.$dv = "";
			return b
		}(),
		val: function (b, a) {
			if (H(a)) {
				if ("SELECT" === Na(b) && b.multiple) {
					var c = [];
					r(b.options, function (a) {
						a.selected && c.push(a.value || a.text)
					});
					return 0 === c.length ? null : c
				}
				return b.value
			}
			b.value = a
		},
		html: function (b, a) {
			if (H(a)) {
				return b.innerHTML
			}
			for (var c = 0, d = b.childNodes; c < d.length; c++) {
				Ka(d[c])
			}
			b.innerHTML = a
		},
		empty: mc
	}, function (b, a) {
		S.prototype[a] = function (a, d) {
			var e, f, g = this.length;
			if (b !== mc && (2 == b.length && b !== Mb && b !== lc ? a : d) === v) {
				if (T(a)) {
					for (e = 0; e < g; e++) {
						if (b === Lb) {
							b(this[e], a)
						} else {
							for (f in a) {
								b(this[e], f, a[f])
							}
						}
					}
					return this
				}
				e = b.$dv;
				g = e === v ? Math.min(g, 1) : g;
				for (f = 0; f < g; f++) {
					var h = b(this[f], a, d);
					e = e ? e + h : h
				}
				return e
			}
			for (e = 0; e < g; e++) {
				b(this[e], a, d)
			}
			return this
		}
	});
	r({
		removeData: Kb,
		dealoc: Ka,
		on: function a(c, d, e, f) {
			if (G(f)) {
				throw Gb("onargs")
			}
			var g = pa(c, "events"),
				h = pa(c, "handle");
			g || pa(c, "events", g = {});
			h || pa(c, "handle", h = oe(c, g));
			r(d.split(" "), function (d) {
				var f = g[d];
				if (!f) {
					if ("mouseenter" == d || "mouseleave" == d) {
						var m = W.body.contains || W.body.compareDocumentPosition ? function (a, c) {
							var d = 9 === a.nodeType ? a.documentElement : a,
								e = c && c.parentNode;
							return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
						} : function (a, c) {
							if (c) {
								for (; c = c.parentNode;) {
									if (c === a) {
										return !0
									}
								}
							}
							return !1
						};
						g[d] = [];
						a(c, {
							mouseleave: "mouseout",
							mouseenter: "mouseover"
						}[d], function (a) {
							var c = a.relatedTarget;
							c && (c === this || m(this, c)) || h(a, d)
						})
					} else {
						rb(c, d, h), g[d] = []
					}
					f = g[d]
				}
				f.push(e)
			})
		},
		off: kc,
		one: function (a, c, d) {
			a = D(a);
			a.on(c, function f() {
				a.off(c, d);
				a.off(c, f)
			});
			a.on(c, d)
		},
		replaceWith: function (a, c) {
			var d, e = a.parentNode;
			Ka(a);
			r(new S(c), function (c) {
				d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
				d = c
			})
		},
		children: function (a) {
			var c = [];
			r(a.childNodes, function (a) {
				1 === a.nodeType && c.push(a)
			});
			return c
		},
		contents: function (a) {
			return a.contentDocument || a.childNodes || []
		},
		append: function (a, c) {
			r(new S(c), function (c) {
				1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
			})
		},
		prepend: function (a, c) {
			if (1 === a.nodeType) {
				var d = a.firstChild;
				r(new S(c), function (c) {
					a.insertBefore(c, d)
				})
			}
		},
		wrap: function (a, c) {
			c = D(c)[0];
			var d = a.parentNode;
			d && d.replaceChild(c, a);
			c.appendChild(a)
		},
		remove: function (a) {
			Ka(a);
			var c = a.parentNode;
			c && c.removeChild(a)
		},
		after: function (a, c) {
			var d = a,
				e = a.parentNode;
			r(new S(c), function (a) {
				e.insertBefore(a, d.nextSibling);
				d = a
			})
		},
		addClass: ob,
		removeClass: nb,
		toggleClass: function (a, c, d) {
			c && r(c.split(" "), function (c) {
				var f = d;
				H(f) && (f = !Mb(a, c));
				(f ? ob : nb)(a, c)
			})
		},
		parent: function (a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		next: function (a) {
			if (a.nextElementSibling) {
				return a.nextElementSibling
			}
			for (a = a.nextSibling; null != a && 1 !== a.nodeType;) {
				a = a.nextSibling
			}
			return a
		},
		find: function (a, c) {
			return a.getElementsByTagName ? a.getElementsByTagName(c) : []
		},
		clone: Jb,
		triggerHandler: function (a, c, d) {
			var e, f;
			e = c.type || c;
			var g = (pa(a, "events") || {})[e];
			g && (e = {
				preventDefault: function () {
					this.defaultPrevented = !0
				},
				isDefaultPrevented: function () {
					return !0 === this.defaultPrevented
				},
				stopPropagation: B,
				type: e,
				target: a
			}, c.type && (e = F(e, c)), c = ha(g), f = d ? [e].concat(d) : [e], r(c, function (c) {
				c.apply(a, f)
			}))
		}
	}, function (a, c) {
		S.prototype[c] = function (c, e, f) {
			for (var g, h = 0; h < this.length; h++) {
				H(g) ? (g = a(this[h], c, e, f), G(g) && (g = D(g))) : Ib(g, a(this[h], c, e, f))
			}
			return G(g) ? g : this
		};
		S.prototype.bind = S.prototype.on;
		S.prototype.unbind = S.prototype.off
	});
	cb.prototype = {
		put: function (a, c) {
			this[La(a, this.nextUid)] = c
		},
		get: function (a) {
			return this[La(a, this.nextUid)]
		},
		remove: function (a) {
			var c = this[a = La(a, this.nextUid)];
			delete this[a];
			return c
		}
	};
	var qe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		re = /,/,
		se = /^\s*(_?)(\S+?)\1\s*$/,
		pe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		db = z("$injector"),
		Re = z("$animate"),
		Md = ["$provide",
			function (a) {
				this.$$selectors = {};
				this.register = function (c, d) {
					var e = c + "-animation";
					if (c && "." != c.charAt(0)) {
						throw Re("notcsel", c)
					}
					this.$$selectors[c.substr(1)] = e;
					a.factory(e, d)
				};
				this.classNameFilter = function (a) {
					1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
					return this.$$classNameFilter
				};
				this.$get = ["$timeout", "$$asyncCallback",
					function (a, d) {
						return {
							enter: function (a, c, g, h) {
								g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
								h && d(h)
							},
							leave: function (a, c) {
								a.remove();
								c && d(c)
							},
							move: function (a, c, d, h) {
								this.enter(a, c, d, h)
							},
							addClass: function (a, c, g) {
								c = E(c) ? c : M(c) ? c.join(" ") : "";
								r(a, function (a) {
									ob(a, c)
								});
								g && d(g)
							},
							removeClass: function (a, c, g) {
								c = E(c) ? c : M(c) ? c.join(" ") : "";
								r(a, function (a) {
									nb(a, c)
								});
								g && d(g)
							},
							setClass: function (a, c, g, h) {
								r(a, function (a) {
									ob(a, c);
									nb(a, g)
								});
								h && d(h)
							},
							enabled: B
						}
					}
				]
			}
		],
		ja = z("$compile");
	fc.$inject = ["$provide", "$$sanitizeUriProvider"];
	var xe = /^(x[\:\-_]|data[\:\-_])/i,
		vc = z("$interpolate"),
		Se = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		Ae = {
			http: 80,
			https: 443,
			ftp: 21
		},
		Rb = z("$location");
	Ac.prototype = Sb.prototype = zc.prototype = {
		$$html5: !1,
		$$replace: !1,
		absUrl: sb("$$absUrl"),
		url: function (a) {
			if (H(a)) {
				return this.$$url
			}
			a = Se.exec(a);
			a[1] && this.path(decodeURIComponent(a[1]));
			(a[2] || a[1]) && this.search(a[3] || "");
			this.hash(a[5] || "");
			return this
		},
		protocol: sb("$$protocol"),
		host: sb("$$host"),
		port: sb("$$port"),
		path: Bc("$$path", function (a) {
			a = null !== a ? a.toString() : "";
			return "/" == a.charAt(0) ? a : "/" + a
		}),
		search: function (a, c) {
			switch (arguments.length) {
			case 0:
				return this.$$search;
			case 1:
				if (E(a) || ib(a)) {
					a = a.toString(), this.$$search = bc(a)
				} else {
					if (T(a)) {
						r(a, function (c, e) {
							null == c && delete a[e]
						}), this.$$search = a
					} else {
						throw Rb("isrcharg")
					}
				}
				break;
			default:
				H(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
			}
			this.$$compose();
			return this
		},
		hash: Bc("$$hash", function (a) {
			return null !== a ? a.toString() : ""
		}),
		replace: function () {
			this.$$replace = !0;
			return this
		}
	};
	var ea = z("$parse"),
		Fc = {},
		xa, Te = Function.prototype.call,
		Ue = Function.prototype.apply,
		Qc = Function.prototype.bind,
		gb = {
			"null": function () {
				return null
			},
			"true": function () {
				return !0
			},
			"false": function () {
				return !1
			},
			undefined: B,
			"+": function (a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return G(d) ? G(e) ? d + e : d : G(e) ? e : v
			},
			"-": function (a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return (G(d) ? d : 0) - (G(e) ? e : 0)
			},
			"*": function (a, c, d, e) {
				return d(a, c) * e(a, c)
			},
			"/": function (a, c, d, e) {
				return d(a, c) / e(a, c)
			},
			"%": function (a, c, d, e) {
				return d(a, c) % e(a, c)
			},
			"^": function (a, c, d, e) {
				return d(a, c) ^ e(a, c)
			},
			"=": B,
			"===": function (a, c, d, e) {
				return d(a, c) === e(a, c)
			},
			"!==": function (a, c, d, e) {
				return d(a, c) !== e(a, c)
			},
			"==": function (a, c, d, e) {
				return d(a, c) == e(a, c)
			},
			"!=": function (a, c, d, e) {
				return d(a, c) != e(a, c)
			},
			"<": function (a, c, d, e) {
				return d(a, c) < e(a, c)
			},
			">": function (a, c, d, e) {
				return d(a, c) > e(a, c)
			},
			"<=": function (a, c, d, e) {
				return d(a, c) <= e(a, c)
			},
			">=": function (a, c, d, e) {
				return d(a, c) >= e(a, c)
			},
			"&&": function (a, c, d, e) {
				return d(a, c) && e(a, c)
			},
			"||": function (a, c, d, e) {
				return d(a, c) || e(a, c)
			},
			"&": function (a, c, d, e) {
				return d(a, c) & e(a, c)
			},
			"|": function (a, c, d, e) {
				return e(a, c)(a, c, d(a, c))
			},
			"!": function (a, c, d) {
				return !d(a, c)
			}
		},
		Ve = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "\t",
			v: "\v",
			"'": "'",
			'"': '"'
		},
		Tb = function (a) {
			this.options = a
		};
	Tb.prototype = {
		constructor: Tb,
		lex: function (a) {
			this.text = a;
			this.index = 0;
			this.ch = v;
			this.lastCh = ":";
			for (this.tokens = []; this.index < this.text.length;) {
				this.ch = this.text.charAt(this.index);
				if (this.is("\"'")) {
					this.readString(this.ch)
				} else {
					if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) {
						this.readNumber()
					} else {
						if (this.isIdent(this.ch)) {
							this.readIdent()
						} else {
							if (this.is("(){}[].,;:?")) {
								this.tokens.push({
									index: this.index,
									text: this.ch
								}), this.index++
							} else {
								if (this.isWhitespace(this.ch)) {
									this.index++;
									continue
								} else {
									a = this.ch + this.peek();
									var c = a + this.peek(2),
										d = gb[this.ch],
										e = gb[a],
										f = gb[c];
									f ? (this.tokens.push({
										index: this.index,
										text: c,
										fn: f
									}), this.index += 3) : e ? (this.tokens.push({
										index: this.index,
										text: a,
										fn: e
									}), this.index += 2) : d ? (this.tokens.push({
										index: this.index,
										text: this.ch,
										fn: d
									}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
								}
							}
						}
					}
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is: function (a) {
			return -1 !== a.indexOf(this.ch)
		},
		was: function (a) {
			return -1 !== a.indexOf(this.lastCh)
		},
		peek: function (a) {
			a = a || 1;
			return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
		},
		isNumber: function (a) {
			return "0" <= a && "9" >= a
		},
		isWhitespace: function (a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
		},
		isIdent: function (a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
		},
		isExpOperator: function (a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError: function (a, c, d) {
			d = d || this.index;
			c = G(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
			throw ea("lexerr", a, c, this.text)
		},
		readNumber: function () {
			for (var a = "", c = this.index; this.index < this.text.length;) {
				var d = A(this.text.charAt(this.index));
				if ("." == d || this.isNumber(d)) {
					a += d
				} else {
					var e = this.peek();
					if ("e" == d && this.isExpOperator(e)) {
						a += d
					} else {
						if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) {
							a += d
						} else {
							if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) {
								break
							} else {
								this.throwError("Invalid exponent")
							}
						}
					}
				}
				this.index++
			}
			a *= 1;
			this.tokens.push({
				index: c,
				text: a,
				literal: !0,
				constant: !0,
				fn: function () {
					return a
				}
			})
		},
		readIdent: function () {
			for (var a = this, c = "", d = this.index, e, f, g, h; this.index < this.text.length;) {
				h = this.text.charAt(this.index);
				if ("." === h || this.isIdent(h) || this.isNumber(h)) {
					"." === h && (e = this.index), c += h
				} else {
					break
				}
				this.index++
			}
			if (e) {
				for (f = this.index; f < this.text.length;) {
					h = this.text.charAt(f);
					if ("(" === h) {
						g = c.substr(e - d + 1);
						c = c.substr(0, e - d);
						this.index = f;
						break
					}
					if (this.isWhitespace(h)) {
						f++
					} else {
						break
					}
				}
			}
			d = {
				index: d,
				text: c
			};
			if (gb.hasOwnProperty(c)) {
				d.fn = gb[c], d.literal = !0, d.constant = !0
			} else {
				var k = Ec(c, this.options, this.text);
				d.fn = F(function (a, c) {
					return k(a, c)
				}, {
					assign: function (d, e) {
						return tb(d, c, e, a.text, a.options)
					}
				})
			}
			this.tokens.push(d);
			g && (this.tokens.push({
				index: e,
				text: "."
			}), this.tokens.push({
				index: e + 1,
				text: g
			}))
		},
		readString: function (a) {
			var c = this.index;
			this.index++;
			for (var d = "", e = a, f = !1; this.index < this.text.length;) {
				var g = this.text.charAt(this.index),
					e = e + g;
				if (f) {
					"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ve[g] || g, f = !1
				} else {
					if ("\\" === g) {
						f = !0
					} else {
						if (g === a) {
							this.index++;
							this.tokens.push({
								index: c,
								text: e,
								string: d,
								literal: !0,
								constant: !0,
								fn: function () {
									return d
								}
							});
							return
						}
						d += g
					}
				}
				this.index++
			}
			this.throwError("Unterminated quote", c)
		}
	};
	var fb = function (a, c, d) {
		this.lexer = a;
		this.$filter = c;
		this.options = d
	};
	fb.ZERO = F(function () {
		return 0
	}, {
		constant: !0
	});
	fb.prototype = {
		constructor: fb,
		parse: function (a) {
			this.text = a;
			this.tokens = this.lexer.lex(a);
			a = this.statements();
			0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
			a.literal = !!a.literal;
			a.constant = !!a.constant;
			return a
		},
		primary: function () {
			var a;
			if (this.expect("(")) {
				a = this.filterChain(), this.consume(")")
			} else {
				if (this.expect("[")) {
					a = this.arrayDeclaration()
				} else {
					if (this.expect("{")) {
						a = this.object()
					} else {
						var c = this.expect();
						(a = c.fn) || this.throwError("not a primary expression", c);
						a.literal = !!c.literal;
						a.constant = !!c.constant
					}
				}
			}
			for (var d; c = this.expect("(", "[", ".");) {
				"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE")
			}
			return a
		},
		throwError: function (a, c) {
			throw ea("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index))
		},
		peekToken: function () {
			if (0 === this.tokens.length) {
				throw ea("ueoe", this.text)
			}
			return this.tokens[0]
		},
		peek: function (a, c, d, e) {
			if (0 < this.tokens.length) {
				var f = this.tokens[0],
					g = f.text;
				if (g === a || g === c || g === d || g === e || !(a || c || d || e)) {
					return f
				}
			}
			return !1
		},
		expect: function (a, c, d, e) {
			return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
		},
		consume: function (a) {
			this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
		},
		unaryFn: function (a, c) {
			return F(function (d, e) {
				return a(d, e, c)
			}, {
				constant: c.constant
			})
		},
		ternaryFn: function (a, c, d) {
			return F(function (e, f) {
				return a(e, f) ? c(e, f) : d(e, f)
			}, {
				constant: a.constant && c.constant && d.constant
			})
		},
		binaryFn: function (a, c, d) {
			return F(function (e, f) {
				return c(e, f, a, d)
			}, {
				constant: a.constant && d.constant
			})
		},
		statements: function () {
			for (var a = [];;) {
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) {
					return 1 === a.length ? a[0] : function (c, d) {
						for (var e, f = 0; f < a.length; f++) {
							var g = a[f];
							g && (e = g(c, d))
						}
						return e
					}
				}
			}
		},
		filterChain: function () {
			for (var a = this.expression(), c;;) {
				if (c = this.expect("|")) {
					a = this.binaryFn(a, c.fn, this.filter())
				} else {
					return a
				}
			}
		},
		filter: function () {
			for (var a = this.expect(), c = this.$filter(a.text), d = [];;) {
				if (a = this.expect(":")) {
					d.push(this.expression())
				} else {
					var e = function (a, e, h) {
						h = [h];
						for (var k = 0; k < d.length; k++) {
							h.push(d[k](a, e))
						}
						return c.apply(a, h)
					};
					return function () {
						return e
					}
				}
			}
		},
		expression: function () {
			return this.assignment()
		},
		assignment: function () {
			var a = this.ternary(),
				c, d;
			return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, f) {
				return a.assign(d, c(d, f), f)
			}) : a
		},
		ternary: function () {
			var a = this.logicalOR(),
				c, d;
			if (this.expect("?")) {
				c = this.assignment();
				if (d = this.expect(":")) {
					return this.ternaryFn(a, c, this.assignment())
				}
				this.throwError("expected :", d)
			} else {
				return a
			}
		},
		logicalOR: function () {
			for (var a = this.logicalAND(), c;;) {
				if (c = this.expect("||")) {
					a = this.binaryFn(a, c.fn, this.logicalAND())
				} else {
					return a
				}
			}
		},
		logicalAND: function () {
			var a = this.equality(),
				c;
			if (c = this.expect("&&")) {
				a = this.binaryFn(a, c.fn, this.logicalAND())
			}
			return a
		},
		equality: function () {
			var a = this.relational(),
				c;
			if (c = this.expect("==", "!=", "===", "!==")) {
				a = this.binaryFn(a, c.fn, this.equality())
			}
			return a
		},
		relational: function () {
			var a = this.additive(),
				c;
			if (c = this.expect("<", ">", "<=", ">=")) {
				a = this.binaryFn(a, c.fn, this.relational())
			}
			return a
		},
		additive: function () {
			for (var a = this.multiplicative(), c; c = this.expect("+", "-");) {
				a = this.binaryFn(a, c.fn, this.multiplicative())
			}
			return a
		},
		multiplicative: function () {
			for (var a = this.unary(), c; c = this.expect("*", "/", "%");) {
				a = this.binaryFn(a, c.fn, this.unary())
			}
			return a
		},
		unary: function () {
			var a;
			return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(fb.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
		},
		fieldAccess: function (a) {
			var c = this,
				d = this.expect().text,
				e = Ec(d, this.options, this.text);
			return F(function (c, d, h) {
				return e(h || a(c, d))
			}, {
				assign: function (e, g, h) {
					(h = a(e, h)) || a.assign(e, h = {});
					return tb(h, d, g, c.text, c.options)
				}
			})
		},
		objectIndex: function (a) {
			var c = this,
				d = this.expression();
			this.consume("]");
			return F(function (e, f) {
				var g = a(e, f),
					h = Cc(d(e, f), c.text),
					k;
				la(h, c.text);
				if (!g) {
					return v
				}(g = ma(g[h], c.text)) && (g.then && c.options.unwrapPromises) && (k = g, "$$v" in g || (k.$$v = v, k.then(function (a) {
					k.$$v = a
				})), g = g.$$v);
				return g
			}, {
				assign: function (e, f, g) {
					var h = la(Cc(d(e, g), c.text), c.text);
					(g = ma(a(e, g), c.text)) || a.assign(e, g = {});
					return g[h] = f
				}
			})
		},
		functionCall: function (a, c) {
			var d = [];
			if (")" !== this.peekToken().text) {
				do {
					d.push(this.expression())
				} while (this.expect(","))
			}
			this.consume(")");
			var e = this;
			return function (f, g) {
				for (var h = [], k = c ? c(f, g) : f, l = 0; l < d.length; l++) {
					h.push(ma(d[l](f, g), e.text))
				}
				l = a(f, g, k) || B;
				ma(k, e.text);
				var m = e.text;
				if (l) {
					if (l.constructor === l) {
						throw ea("isecfn", m)
					}
					if (l === Te || l === Ue || Qc && l === Qc) {
						throw ea("isecff", m)
					}
				}
				h = l.apply ? l.apply(k, h) : l(h[0], h[1], h[2], h[3], h[4]);
				return ma(h, e.text)
			}
		},
		arrayDeclaration: function () {
			var a = [],
				c = !0;
			if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) {
						break
					}
					var d = this.expression();
					a.push(d);
					d.constant || (c = !1)
				} while (this.expect(","))
			}
			this.consume("]");
			return F(function (c, d) {
				for (var g = [], h = 0; h < a.length; h++) {
					g.push(a[h](c, d))
				}
				return g
			}, {
				literal: !0,
				constant: c
			})
		},
		object: function () {
			var a = [],
				c = !0;
			if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) {
						break
					}
					var d = this.expect(),
						d = d.string || d.text;
					this.consume(":");
					var e = this.expression();
					a.push({
						key: d,
						value: e
					});
					e.constant || (c = !1)
				} while (this.expect(","))
			}
			this.consume("}");
			return F(function (c, d) {
				for (var e = {}, k = 0; k < a.length; k++) {
					var l = a[k];
					e[l.key] = l.value(c, d)
				}
				return e
			}, {
				literal: !0,
				constant: c
			})
		}
	};
	var De = {},
		Ce = {},
		ya = z("$sce"),
		fa = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		X = W.createElement("a"),
		Hc = wa(V.location.href, !0);
	jc.$inject = ["$provide"];
	Ic.$inject = ["$locale"];
	Kc.$inject = ["$locale"];
	var Nc = ".",
		Ne = {
			yyyy: Y("FullYear", 4),
			yy: Y("FullYear", 2, 0, !0),
			y: Y("FullYear", 1),
			MMMM: ub("Month"),
			MMM: ub("Month", !0),
			MM: Y("Month", 2, 1),
			M: Y("Month", 1, 1),
			dd: Y("Date", 2),
			d: Y("Date", 1),
			HH: Y("Hours", 2),
			H: Y("Hours", 1),
			hh: Y("Hours", 2, -12),
			h: Y("Hours", 1, -12),
			mm: Y("Minutes", 2),
			m: Y("Minutes", 1),
			ss: Y("Seconds", 2),
			s: Y("Seconds", 1),
			sss: Y("Milliseconds", 3),
			EEEE: ub("Day"),
			EEE: ub("Day", !0),
			a: function (a, c) {
				return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
			},
			Z: function (a) {
				a = -1 * a.getTimezoneOffset();
				return a = (0 <= a ? "+" : "") + (Ub(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ub(Math.abs(a % 60), 2))
			}
		},
		Me = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
		Le = /^\-?\d+$/;
	Jc.$inject = ["$locale"];
	var Je = Z(A),
		Ke = Z(Ja);
	Lc.$inject = ["$parse"];
	var dd = Z({
			restrict: "E",
			compile: function (a, c) {
				8 >= u && (c.href || c.name || c.$set("href", ""), a.append(W.createComment("IE fix")));
				if (!c.href && !c.xlinkHref && !c.name) {
					return function (a, c) {
						var f = "[object SVGAnimatedString]" === Aa.call(c.prop("href")) ? "xlink:href" : "href";
						c.on("click", function (a) {
							c.attr(f) || a.preventDefault()
						})
					}
				}
			}
		}),
		Eb = {};
	r(qb, function (a, c) {
		if ("multiple" != a) {
			var d = qa("ng-" + c);
			Eb[d] = function () {
				return {
					priority: 100,
					link: function (a, f, g) {
						a.$watch(g[d], function (a) {
							g.$set(c, !!a)
						})
					}
				}
			}
		}
	});
	r(["src", "srcset", "href"], function (a) {
		var c = qa("ng-" + a);
		Eb[c] = function () {
			return {
				priority: 99,
				link: function (d, e, f) {
					var g = a,
						h = a;
					"href" === a && "[object SVGAnimatedString]" === Aa.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
					f.$observe(c, function (c) {
						c ? (f.$set(h, c), u && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
					})
				}
			}
		}
	});
	var xb = {
		$addControl: B,
		$removeControl: B,
		$setValidity: B,
		$setDirty: B,
		$setPristine: B
	};
	Oc.$inject = ["$element", "$attrs", "$scope", "$animate"];
	var Rc = function (a) {
			return ["$timeout",
				function (c) {
					return {
						name: "form",
						restrict: a ? "EAC" : "E",
						controller: Oc,
						compile: function () {
							return {
								pre: function (a, e, f, g) {
									if (!f.action) {
										var h = function (a) {
											a.preventDefault ? a.preventDefault() : a.returnValue = !1
										};
										rb(e[0], "submit", h);
										e.on("$destroy", function () {
											c(function () {
												ab(e[0], "submit", h)
											}, 0, !1)
										})
									}
									var k = e.parent().controller("form"),
										l = f.name || f.ngForm;
									l && tb(a, l, g, l);
									if (k) {
										e.on("$destroy", function () {
											k.$removeControl(g);
											l && tb(a, l, v, l);
											F(g, xb)
										})
									}
								}
							}
						}
					}
				}
			]
		},
		ed = Rc(),
		rd = Rc(!0),
		We = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		Xe = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
		Ye = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		Sc = {
			text: zb,
			number: function (a, c, d, e, f, g) {
				zb(a, c, d, e, f, g);
				e.$parsers.push(function (a) {
					var c = e.$isEmpty(a);
					if (c || Ye.test(a)) {
						return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a)
					}
					e.$setValidity("number", !1);
					return v
				});
				Oe(e, "number", Ze, null, e.$$validityState);
				e.$formatters.push(function (a) {
					return e.$isEmpty(a) ? "" : "" + a
				});
				d.min && (a = function (a) {
					var c = parseFloat(d.min);
					return ta(e, "min", e.$isEmpty(a) || a >= c, a)
				}, e.$parsers.push(a), e.$formatters.push(a));
				d.max && (a = function (a) {
					var c = parseFloat(d.max);
					return ta(e, "max", e.$isEmpty(a) || a <= c, a)
				}, e.$parsers.push(a), e.$formatters.push(a));
				e.$formatters.push(function (a) {
					return ta(e, "number", e.$isEmpty(a) || ib(a), a)
				})
			},
			url: function (a, c, d, e, f, g) {
				zb(a, c, d, e, f, g);
				a = function (a) {
					return ta(e, "url", e.$isEmpty(a) || We.test(a), a)
				};
				e.$formatters.push(a);
				e.$parsers.push(a)
			},
			email: function (a, c, d, e, f, g) {
				zb(a, c, d, e, f, g);
				a = function (a) {
					return ta(e, "email", e.$isEmpty(a) || Xe.test(a), a)
				};
				e.$formatters.push(a);
				e.$parsers.push(a)
			},
			radio: function (a, c, d, e) {
				H(d.name) && c.attr("name", hb());
				c.on("click", function () {
					c[0].checked && a.$apply(function () {
						e.$setViewValue(d.value)
					})
				});
				e.$render = function () {
					c[0].checked = d.value == e.$viewValue
				};
				d.$observe("value", e.$render)
			},
			checkbox: function (a, c, d, e) {
				var f = d.ngTrueValue,
					g = d.ngFalseValue;
				E(f) || (f = !0);
				E(g) || (g = !1);
				c.on("click", function () {
					a.$apply(function () {
						e.$setViewValue(c[0].checked)
					})
				});
				e.$render = function () {
					c[0].checked = e.$viewValue
				};
				e.$isEmpty = function (a) {
					return a !== f
				};
				e.$formatters.push(function (a) {
					return a === f
				});
				e.$parsers.push(function (a) {
					return a ? f : g
				})
			},
			hidden: B,
			button: B,
			submit: B,
			reset: B,
			file: B
		},
		Ze = ["badInput"],
		gc = ["$browser", "$sniffer",
			function (a, c) {
				return {
					restrict: "E",
					require: "?ngModel",
					link: function (d, e, f, g) {
						g && (Sc[A(f.type)] || Sc.text)(d, e, f, g, c, a)
					}
				}
			}
		],
		vb = "ng-valid",
		wb = "ng-invalid",
		Qa = "ng-pristine",
		yb = "ng-dirty",
		$e = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate",
			function (a, c, d, e, f, g) {
				function h(a, c) {
					c = c ? "-" + mb(c, "-") : "";
					g.removeClass(e, (a ? wb : vb) + c);
					g.addClass(e, (a ? vb : wb) + c)
				}
				this.$modelValue = this.$viewValue = Number.NaN;
				this.$parsers = [];
				this.$formatters = [];
				this.$viewChangeListeners = [];
				this.$pristine = !0;
				this.$dirty = !1;
				this.$valid = !0;
				this.$invalid = !1;
				this.$name = d.name;
				var k = f(d.ngModel),
					l = k.assign;
				if (!l) {
					throw z("ngModel")("nonassign", d.ngModel, ia(e))
				}
				this.$render = B;
				this.$isEmpty = function (a) {
					return H(a) || "" === a || null === a || a !== a
				};
				var m = e.inheritedData("$formController") || xb,
					n = 0,
					q = this.$error = {};
				e.addClass(Qa);
				h(!0);
				this.$setValidity = function (a, c) {
					q[a] !== !c && (c ? (q[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, h(c, a), m.$setValidity(a, c, this))
				};
				this.$setPristine = function () {
					this.$dirty = !1;
					this.$pristine = !0;
					g.removeClass(e, yb);
					g.addClass(e, Qa)
				};
				this.$setViewValue = function (d) {
					this.$viewValue = d;
					this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Qa), g.addClass(e, yb), m.$setDirty());
					r(this.$parsers, function (a) {
						d = a(d)
					});
					this.$modelValue !== d && (this.$modelValue = d, l(a, d), r(this.$viewChangeListeners, function (a) {
						try {
							a()
						} catch (d) {
							c(d)
						}
					}))
				};
				var p = this;
				a.$watch(function () {
					var c = k(a);
					if (p.$modelValue !== c) {
						var d = p.$formatters,
							e = d.length;
						for (p.$modelValue = c; e--;) {
							c = d[e](c)
						}
						p.$viewValue !== c && (p.$viewValue = c, p.$render())
					}
					return c
				})
			}
		],
		Gd = function () {
			return {
				require: ["ngModel", "^?form"],
				controller: $e,
				link: function (a, c, d, e) {
					var f = e[0],
						g = e[1] || xb;
					g.$addControl(f);
					a.$on("$destroy", function () {
						g.$removeControl(f)
					})
				}
			}
		},
		Id = Z({
			require: "ngModel",
			link: function (a, c, d, e) {
				e.$viewChangeListeners.push(function () {
					a.$eval(d.ngChange)
				})
			}
		}),
		hc = function () {
			return {
				require: "?ngModel",
				link: function (a, c, d, e) {
					if (e) {
						d.required = !0;
						var f = function (a) {
							if (d.required && e.$isEmpty(a)) {
								e.$setValidity("required", !1)
							} else {
								return e.$setValidity("required", !0), a
							}
						};
						e.$formatters.push(f);
						e.$parsers.unshift(f);
						d.$observe("required", function () {
							f(e.$viewValue)
						})
					}
				}
			}
		},
		Hd = function () {
			return {
				require: "ngModel",
				link: function (a, c, d, e) {
					var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
					e.$parsers.push(function (a) {
						if (!H(a)) {
							var c = [];
							a && r(a.split(f), function (a) {
								a && c.push($(a))
							});
							return c
						}
					});
					e.$formatters.push(function (a) {
						return M(a) ? a.join(", ") : v
					});
					e.$isEmpty = function (a) {
						return !a || !a.length
					}
				}
			}
		},
		af = /^(true|false|\d+)$/,
		Jd = function () {
			return {
				priority: 100,
				compile: function (a, c) {
					return af.test(c.ngValue) ? function (a, c, f) {
						f.$set("value", a.$eval(f.ngValue))
					} : function (a, c, f) {
						a.$watch(f.ngValue, function (a) {
							f.$set("value", a)
						})
					}
				}
			}
		},
		jd = za({
			compile: function (a) {
				a.addClass("ng-binding");
				return function (a, d, e) {
					d.data("$binding", e.ngBind);
					a.$watch(e.ngBind, function (a) {
						d.text(a == v ? "" : a)
					})
				}
			}
		}),
		ld = ["$interpolate",
			function (a) {
				return function (c, d, e) {
					c = a(d.attr(e.$attr.ngBindTemplate));
					d.addClass("ng-binding").data("$binding", c);
					e.$observe("ngBindTemplate", function (a) {
						d.text(a)
					})
				}
			}
		],
		kd = ["$sce", "$parse",
			function (a, c) {
				return {
					compile: function (d) {
						d.addClass("ng-binding");
						return function (d, f, g) {
							f.data("$binding", g.ngBindHtml);
							var h = c(g.ngBindHtml);
							d.$watch(function () {
								return (h(d) || "").toString()
							}, function (c) {
								f.html(a.getTrustedHtml(h(d)) || "")
							})
						}
					}
				}
			}
		],
		md = Vb("", !0),
		od = Vb("Odd", 0),
		nd = Vb("Even", 1),
		pd = za({
			compile: function (a, c) {
				c.$set("ngCloak", v);
				a.removeClass("ng-cloak")
			}
		}),
		qd = [
			function () {
				return {
					scope: !0,
					controller: "@",
					priority: 500
				}
			}
		],
		ic = {},
		bf = {
			blur: !0,
			focus: !0
		};
	r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var c = qa("ng-" + a);
		ic[c] = ["$parse", "$rootScope",
			function (d, e) {
				return {
					compile: function (f, g) {
						var h = d(g[c], !0);
						return function (c, d) {
							d.on(a, function (d) {
								var f = function () {
									h(c, {
										$event: d
									})
								};
								bf[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
							})
						}
					}
				}
			}
		]
	});
	var td = ["$animate",
			function (a) {
				return {
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function (c, d, e, f, g) {
						var h, k, l;
						c.$watch(e.ngIf, function (f) {
							Va(f) ? k || (k = c.$new(), g(k, function (c) {
								c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
								h = {
									clone: c
								};
								a.enter(c, d.parent(), d)
							})) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = Db(h.clone), a.leave(l, function () {
								l = null
							}), h = null))
						})
					}
				}
			}
		],
		ud = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
			function (a, c, d, e, f) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: Wa.noop,
					compile: function (g, h) {
						var k = h.ngInclude || h.src,
							l = h.onload || "",
							m = h.autoscroll;
						return function (g, h, p, r, K) {
							var w = 0,
								t, x, u, y = function () {
									x && (x.remove(), x = null);
									t && (t.$destroy(), t = null);
									u && (e.leave(u, function () {
										x = null
									}), x = u, u = null)
								};
							g.$watch(f.parseAsResourceUrl(k), function (f) {
								var k = function () {
										!G(m) || m && !g.$eval(m) || d()
									},
									p = ++w;
								f ? (a.get(f, {
									cache: c
								}).success(function (a) {
									if (p === w) {
										var c = g.$new();
										r.template = a;
										a = K(c, function (a) {
											y();
											e.enter(a, null, h, k)
										});
										t = c;
										u = a;
										t.$emit("$includeContentLoaded");
										g.$eval(l)
									}
								}).error(function () {
									p === w && y()
								}), g.$emit("$includeContentRequested")) : (y(), r.template = null)
							})
						}
					}
				}
			}
		],
		Kd = ["$compile",
			function (a) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function (c, d, e, f) {
						d.html(f.template);
						a(d.contents())(c)
					}
				}
			}
		],
		vd = za({
			priority: 450,
			compile: function () {
				return {
					pre: function (a, c, d) {
						a.$eval(d.ngInit)
					}
				}
			}
		}),
		wd = za({
			terminal: !0,
			priority: 1000
		}),
		xd = ["$locale", "$interpolate",
			function (a, c) {
				var d = /{}/g;
				return {
					restrict: "EA",
					link: function (e, f, g) {
						var h = g.count,
							k = g.$attr.when && f.attr(g.$attr.when),
							l = g.offset || 0,
							m = e.$eval(k) || {},
							n = {},
							q = c.startSymbol(),
							p = c.endSymbol(),
							s = /^when(Minus)?(.+)$/;
						r(g, function (a, c) {
							s.test(c) && (m[A(c.replace("when", "").replace("Minus", "-"))] = f.attr(g.$attr[c]))
						});
						r(m, function (a, e) {
							n[e] = c(a.replace(d, q + h + "-" + l + p))
						});
						e.$watch(function () {
							var c = parseFloat(e.$eval(h));
							if (isNaN(c)) {
								return ""
							}
							c in m || (c = a.pluralCat(c - l));
							return n[c](e, f, !0)
						}, function (a) {
							f.text(a)
						})
					}
				}
			}
		],
		yd = ["$parse", "$animate",
			function (a, c) {
				var d = z("ngRepeat");
				return {
					transclude: "element",
					priority: 1000,
					terminal: !0,
					$$tlb: !0,
					link: function (e, f, g, h, k) {
						var l = g.ngRepeat,
							m = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
							n, q, p, s, u, v, t = {
								$id: La
							};
						if (!m) {
							throw d("iexp", l)
						}
						g = m[1];
						h = m[2];
						(m = m[3]) ? (n = a(m), q = function (a, c, d) {
							v && (t[v] = a);
							t[u] = c;
							t.$index = d;
							return n(e, t)
						}) : (p = function (a, c) {
							return La(c)
						}, s = function (a) {
							return a
						});
						m = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
						if (!m) {
							throw d("iidexp", g)
						}
						u = m[3] || m[1];
						v = m[2];
						var x = {};
						e.$watchCollection(h, function (a) {
							var g, h, m = f[0],
								n, t = {},
								G, C, J, A, E, B, z, H = [];
							if (Ra(a)) {
								B = a, E = q || p
							} else {
								E = q || s;
								B = [];
								for (J in a) {
									a.hasOwnProperty(J) && "$" != J.charAt(0) && B.push(J)
								}
								B.sort()
							}
							G = B.length;
							h = H.length = B.length;
							for (g = 0; g < h; g++) {
								if (J = a === B ? g : B[g], A = a[J], n = E(J, A, g), Da(n, "`track by` id"), x.hasOwnProperty(n)) {
									z = x[n], delete x[n], t[n] = z, H[g] = z
								} else {
									if (t.hasOwnProperty(n)) {
										throw r(H, function (a) {
											a && a.scope && (x[a.id] = a)
										}), d("dupes", l, n, oa(A))
									}
									H[g] = {
										id: n
									};
									t[n] = !1
								}
							}
							for (J in x) {
								x.hasOwnProperty(J) && (z = x[J], g = Db(z.clone), c.leave(g), r(g, function (a) {
									a.$$NG_REMOVED = !0
								}), z.scope.$destroy())
							}
							g = 0;
							for (h = B.length; g < h; g++) {
								J = a === B ? g : B[g];
								A = a[J];
								z = H[g];
								H[g - 1] && (m = H[g - 1].clone[H[g - 1].clone.length - 1]);
								if (z.scope) {
									C = z.scope;
									n = m;
									do {
										n = n.nextSibling
									} while (n && n.$$NG_REMOVED);
									z.clone[0] != n && c.move(Db(z.clone), null, D(m));
									m = z.clone[z.clone.length - 1]
								} else {
									C = e.$new()
								}
								C[u] = A;
								v && (C[v] = J);
								C.$index = g;
								C.$first = 0 === g;
								C.$last = g === G - 1;
								C.$middle = !(C.$first || C.$last);
								C.$odd = !(C.$even = 0 === (g & 1));
								z.scope || k(C, function (a) {
									a[a.length++] = W.createComment(" end ngRepeat: " + l + " ");
									c.enter(a, null, D(m));
									m = a;
									z.scope = C;
									z.clone = a;
									t[z.id] = z
								})
							}
							x = t
						})
					}
				}
			}
		],
		zd = ["$animate",
			function (a) {
				return function (c, d, e) {
					c.$watch(e.ngShow, function (c) {
						a[Va(c) ? "removeClass" : "addClass"](d, "ng-hide")
					})
				}
			}
		],
		sd = ["$animate",
			function (a) {
				return function (c, d, e) {
					c.$watch(e.ngHide, function (c) {
						a[Va(c) ? "addClass" : "removeClass"](d, "ng-hide")
					})
				}
			}
		],
		Ad = za(function (a, c, d) {
			a.$watch(d.ngStyle, function (a, d) {
				d && a !== d && r(d, function (a, d) {
					c.css(d, "")
				});
				a && c.css(a)
			}, !0)
		}),
		Bd = ["$animate",
			function (a) {
				return {
					restrict: "EA",
					require: "ngSwitch",
					controller: ["$scope",
						function () {
							this.cases = {}
						}
					],
					link: function (c, d, e, f) {
						var g = [],
							h = [],
							k = [],
							l = [];
						c.$watch(e.ngSwitch || e.on, function (d) {
							var n, q;
							n = 0;
							for (q = k.length; n < q; ++n) {
								k[n].remove()
							}
							n = k.length = 0;
							for (q = l.length; n < q; ++n) {
								var p = h[n];
								l[n].$destroy();
								k[n] = p;
								a.leave(p, function () {
									k.splice(n, 1)
								})
							}
							h.length = 0;
							l.length = 0;
							if (g = f.cases["!" + d] || f.cases["?"]) {
								c.$eval(e.change), r(g, function (d) {
									var e = c.$new();
									l.push(e);
									d.transclude(e, function (c) {
										var e = d.element;
										h.push(c);
										a.enter(c, e.parent(), e)
									})
								})
							}
						})
					}
				}
			}
		],
		Cd = za({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function (a, c, d, e, f) {
				e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
				e.cases["!" + d.ngSwitchWhen].push({
					transclude: f,
					element: c
				})
			}
		}),
		Dd = za({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function (a, c, d, e, f) {
				e.cases["?"] = e.cases["?"] || [];
				e.cases["?"].push({
					transclude: f,
					element: c
				})
			}
		}),
		Fd = za({
			link: function (a, c, d, e, f) {
				if (!f) {
					throw z("ngTransclude")("orphan", ia(c))
				}
				f(function (a) {
					c.empty();
					c.append(a)
				})
			}
		}),
		fd = ["$templateCache",
			function (a) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function (c, d) {
						"text/ng-template" == d.type && a.put(d.id, c[0].text)
					}
				}
			}
		],
		cf = z("ngOptions"),
		Ed = Z({
			terminal: !0
		}),
		gd = ["$compile", "$parse",
			function (a, c) {
				var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
					e = {
						$setViewValue: B
					};
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: ["$element", "$scope", "$attrs",
						function (a, c, d) {
							var k = this,
								l = {},
								m = e,
								n;
							k.databound = d.ngModel;
							k.init = function (a, c, d) {
								m = a;
								n = d
							};
							k.addOption = function (c) {
								Da(c, '"option value"');
								l[c] = !0;
								m.$viewValue == c && (a.val(c), n.parent() && n.remove())
							};
							k.removeOption = function (a) {
								this.hasOption(a) && (delete l[a], m.$viewValue == a && this.renderUnknownOption(a))
							};
							k.renderUnknownOption = function (c) {
								c = "? " + La(c) + " ?";
								n.val(c);
								a.prepend(n);
								a.val(c);
								n.prop("selected", !0)
							};
							k.hasOption = function (a) {
								return l.hasOwnProperty(a)
							};
							c.$on("$destroy", function () {
								k.renderUnknownOption = B
							})
						}
					],
					link: function (e, g, h, k) {
						function l(a, c, d, e) {
							d.$render = function () {
								var a = d.$viewValue;
								e.hasOption(a) ? (B.parent() && B.remove(), c.val(a), "" === a && A.prop("selected", !0)) : H(a) && A ? c.val("") : e.renderUnknownOption(a)
							};
							c.on("change", function () {
								a.$apply(function () {
									B.parent() && B.remove();
									d.$setViewValue(c.val())
								})
							})
						}

						function m(a, c, d) {
							var e;
							d.$render = function () {
								var a = new cb(d.$viewValue);
								r(c.find("option"), function (c) {
									c.selected = G(a.get(c.value))
								})
							};
							a.$watch(function () {
								Ba(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render())
							});
							c.on("change", function () {
								a.$apply(function () {
									var a = [];
									r(c.find("option"), function (c) {
										c.selected && a.push(c.value)
									});
									d.$setViewValue(a)
								})
							})
						}

						function n(e, f, g) {
							function h() {
								var a = {
										"": []
									},
									c = [""],
									d, k, s, v, w;
								s = g.$modelValue;
								v = B(e) || [];
								var E = n ? Wb(v) : v,
									H, R, C;
								R = {};
								C = !1;
								if (p) {
									if (k = g.$modelValue, y && M(k)) {
										for (C = new cb([]), d = {}, w = 0; w < k.length; w++) {
											d[m] = k[w], C.put(y(e, d), k[w])
										}
									} else {
										C = new cb(k)
									}
								}
								w = C;
								var F, L;
								for (C = 0; H = E.length, C < H; C++) {
									k = C;
									if (n) {
										k = E[C];
										if ("$" === k.charAt(0)) {
											continue
										}
										R[n] = k
									}
									R[m] = v[k];
									d = r(e, R) || "";
									(k = a[d]) || (k = a[d] = [], c.push(d));
									p ? d = G(w.remove(y ? y(e, R) : A(e, R))) : (y ? (d = {}, d[m] = s, d = y(e, d) === y(e, R)) : d = s === A(e, R), w = w || d);
									F = l(e, R);
									F = G(F) ? F : "";
									k.push({
										id: y ? y(e, R) : n ? E[C] : C,
										label: F,
										selected: d
									})
								}
								p || (z || null === s ? a[""].unshift({
									id: "",
									label: "",
									selected: !w
								}) : w || a[""].unshift({
									id: "?",
									label: "",
									selected: !0
								}));
								R = 0;
								for (E = c.length; R < E; R++) {
									d = c[R];
									k = a[d];
									D.length <= R ? (s = {
										element: x.clone().attr("label", d),
										label: k.label
									}, v = [s], D.push(v), f.append(s.element)) : (v = D[R], s = v[0], s.label != d && s.element.attr("label", s.label = d));
									F = null;
									C = 0;
									for (H = k.length; C < H; C++) {
										d = k[C], (w = v[C + 1]) ? (F = w.element, w.label !== d.label && (F.text(w.label = d.label), F.prop("label", w.label)), w.id !== d.id && F.val(w.id = d.id), F[0].selected !== d.selected && (F.prop("selected", w.selected = d.selected), u && F.prop("selected", w.selected))) : ("" === d.id && z ? L = z : (L = t.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), v.push({
											element: L,
											label: d.label,
											id: d.id,
											selected: d.selected
										}), q.addOption(d.label, L), F ? F.after(L) : s.element.append(L), F = L)
									}
									for (C++; v.length > C;) {
										d = v.pop(), q.removeOption(d.label), d.element.remove()
									}
								}
								for (; D.length > R;) {
									D.pop()[0].element.remove()
								}
							}
							var k;
							if (!(k = s.match(d))) {
								throw cf("iexp", s, ia(f))
							}
							var l = c(k[2] || k[1]),
								m = k[4] || k[6],
								n = k[5],
								r = c(k[3] || ""),
								A = c(k[2] ? k[1] : m),
								B = c(k[7]),
								y = k[8] ? c(k[8]) : null,
								D = [
									[{
										element: f,
										label: ""
									}]
								];
							z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
							f.empty();
							f.on("change", function () {
								e.$apply(function () {
									var a, c = B(e) || [],
										d = {},
										k, l, q, r, s, t, u;
									if (p) {
										for (l = [], r = 0, t = D.length; r < t; r++) {
											for (a = D[r], q = 1, s = a.length; q < s; q++) {
												if ((k = a[q].element)[0].selected) {
													k = k.val();
													n && (d[n] = k);
													if (y) {
														for (u = 0; u < c.length && (d[m] = c[u], y(e, d) != k); u++) {}
													} else {
														d[m] = c[k]
													}
													l.push(A(e, d))
												}
											}
										}
									} else {
										if (k = f.val(), "?" == k) {
											l = v
										} else {
											if ("" === k) {
												l = null
											} else {
												if (y) {
													for (u = 0; u < c.length; u++) {
														if (d[m] = c[u], y(e, d) == k) {
															l = A(e, d);
															break
														}
													}
												} else {
													d[m] = c[k], n && (d[n] = k), l = A(e, d)
												}
											}
										}
									}
									g.$setViewValue(l);
									h()
								})
							});
							g.$render = h;
							e.$watchCollection(B, h);
							e.$watchCollection(function () {
								var a = {},
									c = B(e);
								if (c) {
									for (var d = Array(c.length), f = 0, g = c.length; f < g; f++) {
										a[m] = c[f], d[f] = l(e, a)
									}
									return d
								}
							}, h);
							p && e.$watchCollection(function () {
								return g.$modelValue
							}, h)
						}
						if (k[1]) {
							var q = k[0];
							k = k[1];
							var p = h.multiple,
								s = h.ngOptions,
								z = !1,
								A, t = D(W.createElement("option")),
								x = D(W.createElement("optgroup")),
								B = t.clone();
							h = 0;
							for (var y = g.children(), E = y.length; h < E; h++) {
								if ("" === y[h].value) {
									A = z = y.eq(h);
									break
								}
							}
							q.init(k, z, B);
							p && (k.$isEmpty = function (a) {
								return !a || 0 === a.length
							});
							s ? n(e, g, k) : p ? m(e, g, k) : l(e, g, k, q)
						}
					}
				}
			}
		],
		id = ["$interpolate",
			function (a) {
				var c = {
					addOption: B,
					removeOption: B
				};
				return {
					restrict: "E",
					priority: 100,
					compile: function (d, e) {
						if (H(e.value)) {
							var f = a(d.text(), !0);
							f || e.$set("value", d.text())
						}
						return function (a, d, e) {
							var l = d.parent(),
								m = l.data("$selectController") || l.parent().data("$selectController");
							m && m.databound ? d.prop("selected", !1) : m = c;
							f ? a.$watch(f, function (a, c) {
								e.$set("value", a);
								a !== c && m.removeOption(c);
								m.addOption(a)
							}) : m.addOption(e.value);
							d.on("$destroy", function () {
								m.removeOption(e.value)
							})
						}
					}
				}
			}
		],
		hd = Z({
			restrict: "E",
			terminal: !0
		});
	V.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Ea = V.jQueryjQuery) && Ea.fn.on ? (D = Ea, F(Ea.fn, {
		scope: Ma.scope,
		isolateScope: Ma.isolateScope,
		controller: Ma.controller,
		injector: Ma.injector,
		inheritedData: Ma.inheritedData
	}), Fb("remove", !0, !0, !1), Fb("empty", !1, !1, !1), Fb("html", !1, !1, !0)) : D = S, Wa.element = D, $c(Wa), D(W).ready(function () {
		Xc(W, cc)
	}))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
docReady(function () {
	! function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
	}(function (a) {
		function b(b) {
			var g = b || window.event,
				h = i.call(arguments, 1),
				j = 0,
				l = 0,
				m = 0,
				n = 0,
				o = 0,
				p = 0;
			if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
				if (1 === g.deltaMode) {
					var q = a.data(this, "mousewheel-line-height");
					j *= q, m *= q, l *= q
				} else {
					if (2 === g.deltaMode) {
						var r = a.data(this, "mousewheel-page-height");
						j *= r, m *= r, l *= r
					}
				} if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
					var s = this.getBoundingClientRect();
					o = b.clientX - s.left, p = b.clientY - s.top
				}
				return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
			}
		}

		function c() {
			f = null
		}

		function d(a, b) {
			return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
		}
		var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			i = Array.prototype.slice;
		if (a.event.fixHooks) {
			for (var j = g.length; j;) {
				a.event.fixHooks[g[--j]] = a.event.mouseHooks
			}
		}
		var k = a.event.special.mousewheel = {
			version: "3.1.12",
			setup: function () {
				if (this.addEventListener) {
					for (var c = h.length; c;) {
						this.addEventListener(h[--c], b, !1)
					}
				} else {
					this.onmousewheel = b
				}
				a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
			},
			teardown: function () {
				if (this.removeEventListener) {
					for (var c = h.length; c;) {
						this.removeEventListener(h[--c], b, !1)
					}
				} else {
					this.onmousewheel = null
				}
				a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
			},
			getLineHeight: function (b) {
				var c = a(b),
					d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
				return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
			},
			getPageHeight: function (b) {
				return a(b).height()
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		a.fn.extend({
			mousewheel: function (a) {
				return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
			},
			unmousewheel: function (a) {
				return this.unbind("mousewheel", a)
			}
		})
	});
	docReady(function () {
		(function (k) {
			k.fn.swipeMePls = function (q) {
				var b = k.extend({
						preventDefault: !0,
						enableMouse: !0,
						distance: 100,
						onTouch: function (b) {},
						onMove: function (b) {},
						onSwipe: function (b) {},
						onEnd: function () {}
					}, q || {}),
					m, g;
				return this.each(function () {
					var l = k(this),
						e, f, n, p, h = !1,
						d = {
							touchStart: function (a) {
								1 < a.targetTouches.length || (a = a.targetTouches[0], n = a.pageX, p = a.pageY, e = a.pageX, f = a.pageY, m = new Date, b.onTouch({
									clientX: a.clientX,
									clientY: a.clientY,
									pageX: a.pageX,
									pageY: a.pageY,
									screenX: a.screenX,
									screenY: a.screenY
								}))
							},
							mouseDown: function (a) {
								h = !0;
								n = a.pageX;
								p = a.pageY;
								e = a.pageX;
								f = a.pageY;
								m = new Date;
								b.onTouch({
									clientX: a.clientX,
									clientY: a.clientY,
									pageX: a.pageX,
									pageY: a.pageY,
									screenX: a.screenX,
									screenY: a.screenY
								});
								b.preventDefault && a.preventDefault()
							},
							mouseMove: function (a) {
								h && (b.onMove({
									deltaX: a.pageX - e,
									deltaY: a.pageY - f,
									clientX: a.clientX,
									clientY: a.clientY,
									pageX: a.pageX,
									pageY: a.pageY,
									screenX: a.screenX,
									screenY: a.screenY
								}), e = a.pageX, f = a.pageY);
								b.preventDefault && a.preventDefault()
							},
							moveEnd: function (a) {
								h && (h = !1, d.testSwipe());
								b.preventDefault && a.preventDefault();
								b.onEnd()
							},
							touchEnd: function (a) {
								h = !1;
								d.testSwipe();
								b.onEnd()
							},
							touchMove: function (a) {
								if (!(1 < a.targetTouches.length)) {
									var c = a.targetTouches[0];
									b.onMove({
										deltaX: c.pageX - e,
										deltaY: c.pageY - f,
										clientX: c.clientX,
										clientY: c.clientY,
										pageX: c.pageX,
										pageY: c.pageY,
										screenX: c.screenX,
										screenY: c.screenY,
										evt: a
									});
									e = c.pageX;
									f = c.pageY;
									b.preventDefault && a.preventDefault()
								}
							},
							testSwipe: function () {
								var a = e - n,
									c = f - p;
								g = Math.abs(new Date - m) / 1000;
								if (Math.abs(a) >= Math.abs(c)) {
									if (Math.abs(a) >= b.distance) {
										b.onSwipe({
											direction: 0 <= a ? "right" : "left",
											distance: Math.abs(a),
											speed: Math.abs(a) / g,
											time: g
										})
									}
								} else {
									if (Math.abs(c) >= b.distance) {
										b.onSwipe({
											direction: 0 <= c ? "down" : "up",
											distance: Math.abs(c),
											speed: Math.abs(c) / g,
											time: g
										})
									}
								}
							},
							touchCancel: function (a) {}
						};
					b.enableMouse && (l.mousedown(function (a) {
						a = a || window.event;
						1 == (a.keyCode || a.which) && d.mouseDown(a)
					}), l.mouseup(d.moveEnd), k("body").mouseup(d.moveEnd), l.mousemove(d.mouseMove));
					this.addEventListener("touchstart", d.touchStart);
					this.addEventListener("touchmove", d.touchMove);
					this.addEventListener("touchend", d.touchEnd);
					this.addEventListener("touchcancel", d.touchCancel)
				})
			}
		})(jQuery)
	})
});
! function (a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
	function a() {
		return md.apply(null, arguments)
	}

	function b(a) {
		md = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for (b in a) {
			return !1
		}
		return !0
	}

	function f(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function g(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) {
			d.push(b(a[c], c))
		}
		return d
	}

	function h(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function i(a, b) {
		for (var c in b) {
			h(b, c) && (a[c] = b[c])
		}
		return h(b, "toString") && (a.toString = b.toString), h(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function j(a, b, c, d) {
		return qb(a, b, c, d, !0).utc()
	}

	function k() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null
		}
	}

	function l(a) {
		return null == a._pf && (a._pf = k()), a._pf
	}

	function m(a) {
		if (null == a._isValid) {
			var b = l(a),
				c = nd.call(b.parsedDateParts, function (a) {
					return null != a
				});
			a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
		}
		return a._isValid
	}

	function n(a) {
		var b = j(NaN);
		return null != a ? i(l(b), a) : l(b).userInvalidated = !0, b
	}

	function o(a) {
		return void 0 === a
	}

	function p(a, b) {
		var c, d, e;
		if (o(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), o(b._i) || (a._i = b._i), o(b._f) || (a._f = b._f), o(b._l) || (a._l = b._l), o(b._strict) || (a._strict = b._strict), o(b._tzm) || (a._tzm = b._tzm), o(b._isUTC) || (a._isUTC = b._isUTC), o(b._offset) || (a._offset = b._offset), o(b._pf) || (a._pf = l(b)), o(b._locale) || (a._locale = b._locale), od.length > 0) {
			for (c in od) {
				d = od[c], e = b[d], o(e) || (a[d] = e)
			}
		}
		return a
	}

	function q(b) {
		p(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), pd === !1 && (pd = !0, a.updateOffset(this), pd = !1)
	}

	function r(a) {
		return a instanceof q || null != a && null != a._isAMomentObject
	}

	function s(a) {
		return 0 > a ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function t(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = s(b)), c
	}

	function u(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++) {
			(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++
		}
		return g + f
	}

	function v(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function w(b, c) {
		var d = !0;
		return i(function () {
			return null != a.deprecationHandler && a.deprecationHandler(null, b), d && (v(b + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), d = !1), c.apply(this, arguments)
		}, c)
	}

	function x(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), qd[b] || (v(c), qd[b] = !0)
	}

	function y(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function z(a) {
		var b, c;
		for (c in a) {
			b = a[c], y(b) ? this[c] = b : this["_" + c] = b
		}
		this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function A(a, b) {
		var c, e = i({}, a);
		for (c in b) {
			h(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, i(e[c], a[c]), i(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c])
		}
		for (c in a) {
			h(a, c) && !h(b, c) && d(a[c]) && (e[c] = i({}, e[c]))
		}
		return e
	}

	function B(a) {
		null != a && this.set(a)
	}

	function C(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return y(d) ? d.call(b, c) : d
	}

	function D(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function E() {
		return this._invalidDate
	}

	function F(a) {
		return this._ordinal.replace("%d", a)
	}

	function G(a, b, c, d) {
		var e = this._relativeTime[c];
		return y(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function H(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return y(c) ? c(b) : c.replace(/%s/i, b)
	}

	function I(a, b) {
		var c = a.toLowerCase();
		zd[c] = zd[c + "s"] = zd[b] = a
	}

	function J(a) {
		return "string" == typeof a ? zd[a] || zd[a.toLowerCase()] : void 0
	}

	function K(a) {
		var b, c, d = {};
		for (c in a) {
			h(a, c) && (b = J(c), b && (d[b] = a[c]))
		}
		return d
	}

	function L(a, b) {
		Ad[a] = b
	}

	function M(a) {
		var b = [];
		for (var c in a) {
			b.push({
				unit: c,
				priority: Ad[c]
			})
		}
		return b.sort(function (a, b) {
			return a.priority - b.priority
		}), b
	}

	function N(b, c) {
		return function (d) {
			return null != d ? (P(this, b, d), a.updateOffset(this, c), this) : O(this, b)
		}
	}

	function O(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}

	function P(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function Q(a) {
		return a = J(a), y(this[a]) ? this[a]() : this
	}

	function R(a, b) {
		if ("object" == typeof a) {
			a = K(a);
			for (var c = M(a), d = 0; d < c.length; d++) {
				this[c[d].unit](a[c[d].unit])
			}
		} else {
			if (a = J(a), y(this[a])) {
				return this[a](b)
			}
		}
		return this
	}

	function S(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}

	function T(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function () {
			return this[d]()
		}), a && (Ed[a] = e), b && (Ed[b[0]] = function () {
			return S(e.apply(this, arguments), b[1], b[2])
		}), c && (Ed[c] = function () {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function U(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function V(a) {
		var b, c, d = a.match(Bd);
		for (b = 0, c = d.length; c > b; b++) {
			Ed[d[b]] ? d[b] = Ed[d[b]] : d[b] = U(d[b])
		}
		return function (b) {
			var e, f = "";
			for (e = 0; c > e; e++) {
				f += d[e] instanceof Function ? d[e].call(b, a) : d[e]
			}
			return f
		}
	}

	function W(a, b) {
		return a.isValid() ? (b = X(b, a.localeData()), Dd[b] = Dd[b] || V(b), Dd[b](a)) : a.localeData().invalidDate()
	}

	function X(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (Cd.lastIndex = 0; d >= 0 && Cd.test(a);) {
			a = a.replace(Cd, c), Cd.lastIndex = 0, d -= 1
		}
		return a
	}

	function Y(a, b, c) {
		Wd[a] = y(b) ? b : function (a, d) {
			return a && c ? c : b
		}
	}

	function Z(a, b) {
		return h(Wd, a) ? Wd[a](b._strict, b._locale) : new RegExp($(a))
	}

	function $(a) {
		return _(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function _(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function aa(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
			c[b] = t(a)
		}), c = 0; c < a.length; c++) {
			Xd[a[c]] = d
		}
	}

	function ba(a, b) {
		aa(a, function (a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function ca(a, b, c) {
		null != b && h(Xd, a) && Xd[a](b, c._a, c, a)
	}

	function da(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function ea(a, b) {
		return c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || fe).test(b) ? "format" : "standalone"][a.month()]
	}

	function fa(a, b) {
		return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[fe.test(b) ? "format" : "standalone"][a.month()]
	}

	function ga(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._monthsParse) {
			for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; 12 > d; ++d) {
				f = j([2000, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase()
			}
		}
		return c ? "MMM" === b ? (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null) : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null) : "MMM" === b ? (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null)) : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null))
	}

	function ha(a, b, c) {
		var d, e, f;
		if (this._monthsParseExact) {
			return ga.call(this, a, b, c)
		}
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
			if (e = j([2000, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) {
				return d
			}
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) {
				return d
			}
			if (!c && this._monthsParse[d].test(a)) {
				return d
			}
		}
	}

	function ia(a, b) {
		var c;
		if (!a.isValid()) {
			return a
		}
		if ("string" == typeof b) {
			if (/^\d+$/.test(b)) {
				b = t(b)
			} else {
				if (b = a.localeData().monthsParse(b), "number" != typeof b) {
					return a
				}
			}
		}
		return c = Math.min(a.date(), da(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}

	function ja(b) {
		return null != b ? (ia(this, b), a.updateOffset(this, !0), this) : O(this, "Month")
	}

	function ka() {
		return da(this.year(), this.month())
	}

	function la(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = ie), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function ma(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = je), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function na() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for (b = 0; 12 > b; b++) {
			c = j([2000, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""))
		}
		for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) {
			d[b] = _(d[b]), e[b] = _(e[b])
		}
		for (b = 0; 24 > b; b++) {
			f[b] = _(f[b])
		}
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}

	function oa(a) {
		return pa(a) ? 366 : 365
	}

	function pa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function qa() {
		return pa(this.year())
	}

	function ra(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function sa(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}

	function ta(a, b, c) {
		var d = 7 + b - c,
			e = (7 + sa(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}

	function ua(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ta(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return 0 >= j ? (f = a - 1, g = oa(f) + j) : j > oa(a) ? (f = a + 1, g = j - oa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}

	function va(a, b, c) {
		var d, e, f = ta(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}

	function wa(a, b, c) {
		var d = ta(a, b, c),
			e = ta(a + 1, b, c);
		return (oa(a) - d + e) / 7
	}

	function xa(a) {
		return va(a, this._week.dow, this._week.doy).week
	}

	function ya() {
		return this._week.dow
	}

	function za() {
		return this._week.doy
	}

	function Aa(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ba(a) {
		var b = va(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Da(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Ea(a, b) {
		return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
	}

	function Fa(a) {
		return this._weekdaysShort[a.day()]
	}

	function Ga(a) {
		return this._weekdaysMin[a.day()]
	}

	function Ha(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._weekdaysParse) {
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; 7 > d; ++d) {
				f = j([2000, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase()
			}
		}
		return c ? "dddd" === b ? (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null) : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : "ddd" === b ? (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null)))
	}

	function Ia(a, b, c) {
		var d, e, f;
		if (this._weekdaysParseExact) {
			return Ha.call(this, a, b, c)
		}
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
			if (e = j([2000, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) {
				return d
			}
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) {
				return d
			}
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) {
				return d
			}
			if (!c && this._weekdaysParse[d].test(a)) {
				return d
			}
		}
	}

	function Ja(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Ca(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function Ka(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function La(a) {
		if (!this.isValid()) {
			return null != a ? this : NaN
		}
		if (null != a) {
			var b = Da(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Ma(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = pe), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Na(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = re), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Pa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d, e, f, g = [],
			h = [],
			i = [],
			k = [];
		for (b = 0; 7 > b; b++) {
			c = j([2000, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), k.push(d), k.push(e), k.push(f)
		}
		for (g.sort(a), h.sort(a), i.sort(a), k.sort(a), b = 0; 7 > b; b++) {
			h[b] = _(h[b]), i[b] = _(i[b]), k[b] = _(k[b])
		}
		this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}

	function Qa() {
		return this.hours() % 12 || 12
	}

	function Ra() {
		return this.hours() || 24
	}

	function Sa(a, b) {
		T(a, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Ta(a, b) {
		return b._meridiemParse
	}

	function Ua(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Va(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Wa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function Xa(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = Wa(a[f]).split("-"), b = e.length, c = Wa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = Ya(e.slice(0, b).join("-"))) {
					return d
				}
				if (c && c.length >= b && u(e, c, !0) >= b - 1) {
					break
				}
				b--
			}
			f++
		}
		return null
	}

	function Ya(a) {
		var b = null;
		if (!we[a] && "undefined" != typeof module && module && module.exports) {
			try {
				b = se._abbr, require("./locale/" + a), Za(b)
			} catch (c) {}
		}
		return we[a]
	}

	function Za(a, b) {
		var c;
		return a && (c = o(b) ? ab(a) : $a(a, b), c && (se = c)), se._abbr
	}

	function $a(a, b) {
		if (null !== b) {
			var c = ve;
			return b.abbr = a, null != we[a] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = we[a]._config) : null != b.parentLocale && (null != we[b.parentLocale] ? c = we[b.parentLocale]._config : x("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), we[a] = new B(A(c, b)), Za(a), we[a]
		}
		return delete we[a], null
	}

	function _a(a, b) {
		if (null != b) {
			var c, d = ve;
			null != we[a] && (d = we[a]._config), b = A(d, b), c = new B(b), c.parentLocale = we[a], we[a] = c, Za(a)
		} else {
			null != we[a] && (null != we[a].parentLocale ? we[a] = we[a].parentLocale : null != we[a] && delete we[a])
		}
		return we[a]
	}

	function ab(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) {
			return se
		}
		if (!c(a)) {
			if (b = Ya(a)) {
				return b
			}
			a = [a]
		}
		return Xa(a)
	}

	function bb() {
		return rd(we)
	}

	function cb(a) {
		var b, c = a._a;
		return c && -2 === l(a).overflow && (b = c[Zd] < 0 || c[Zd] > 11 ? Zd : c[$d] < 1 || c[$d] > da(c[Yd], c[Zd]) ? $d : c[_d] < 0 || c[_d] > 24 || 24 === c[_d] && (0 !== c[ae] || 0 !== c[be] || 0 !== c[ce]) ? _d : c[ae] < 0 || c[ae] > 59 ? ae : c[be] < 0 || c[be] > 59 ? be : c[ce] < 0 || c[ce] > 999 ? ce : -1, l(a)._overflowDayOfYear && (Yd > b || b > $d) && (b = $d), l(a)._overflowWeeks && -1 === b && (b = de), l(a)._overflowWeekday && -1 === b && (b = ee), l(a).overflow = b), a
	}

	function db(a) {
		var b, c, d, e, f, g, h = a._i,
			i = xe.exec(h) || ye.exec(h);
		if (i) {
			for (l(a).iso = !0, b = 0, c = Ae.length; c > b; b++) {
				if (Ae[b][1].exec(i[1])) {
					e = Ae[b][0], d = Ae[b][2] !== !1;
					break
				}
			}
			if (null == e) {
				return void(a._isValid = !1)
			}
			if (i[3]) {
				for (b = 0, c = Be.length; c > b; b++) {
					if (Be[b][1].exec(i[3])) {
						f = (i[2] || " ") + Be[b][0];
						break
					}
				}
				if (null == f) {
					return void(a._isValid = !1)
				}
			}
			if (!d && null != f) {
				return void(a._isValid = !1)
			}
			if (i[4]) {
				if (!ze.exec(i[4])) {
					return void(a._isValid = !1)
				}
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), jb(a)
		} else {
			a._isValid = !1
		}
	}

	function eb(b) {
		var c = Ce.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (db(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}

	function fb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function gb(b) {
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}

	function hb(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			for (d = gb(a), a._w && null == a._a[$d] && null == a._a[Zd] && ib(a), a._dayOfYear && (e = fb(a._a[Yd], d[Yd]), a._dayOfYear > oa(e) && (l(a)._overflowDayOfYear = !0), c = sa(e, 0, a._dayOfYear), a._a[Zd] = c.getUTCMonth(), a._a[$d] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) {
				a._a[b] = f[b] = d[b]
			}
			for (; 7 > b; b++) {
				a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b]
			}
			24 === a._a[_d] && 0 === a._a[ae] && 0 === a._a[be] && 0 === a._a[ce] && (a._nextDay = !0, a._a[_d] = 0), a._d = (a._useUTC ? sa : ra).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[_d] = 24)
		}
	}

	function ib(a) {
		var b, c, d, e, f, g, h, i;
		b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = fb(b.GG, a._a[Yd], va(rb(), 1, 4).year), d = fb(b.W, 1), e = fb(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = fb(b.gg, a._a[Yd], va(rb(), f, g).year), d = fb(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? l(a)._overflowWeeks = !0 : null != i ? l(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[Yd] = h.year, a._dayOfYear = h.dayOfYear)
	}

	function jb(b) {
		if (b._f === a.ISO_8601) {
			return void db(b)
		}
		b._a = [], l(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0;
		for (e = X(b._f, b._locale).match(Bd) || [], c = 0; c < e.length; c++) {
			f = e[c], d = (h.match(Z(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && l(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Ed[f] ? (d ? l(b).empty = !1 : l(b).unusedTokens.push(f), ca(f, d, b)) : b._strict && !d && l(b).unusedTokens.push(f)
		}
		l(b).charsLeftOver = i - j, h.length > 0 && l(b).unusedInput.push(h), b._a[_d] <= 12 && l(b).bigHour === !0 && b._a[_d] > 0 && (l(b).bigHour = void 0), l(b).parsedDateParts = b._a.slice(0), l(b).meridiem = b._meridiem, b._a[_d] = kb(b._locale, b._a[_d], b._meridiem), hb(b), cb(b)
	}

	function kb(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function lb(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) {
			return l(a).invalidFormat = !0, void(a._d = new Date(NaN))
		}
		for (e = 0; e < a._f.length; e++) {
			f = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], jb(b), m(b) && (f += l(b).charsLeftOver, f += 10 * l(b).unusedTokens.length, l(b).score = f, (null == d || d > f) && (d = f, c = b))
		}
		i(a, c || b)
	}

	function mb(a) {
		if (!a._d) {
			var b = K(a._i);
			a._a = g([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
				return a && parseInt(a, 10)
			}), hb(a)
		}
	}

	function nb(a) {
		var b = new q(cb(ob(a)));
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}

	function ob(a) {
		var b = a._i,
			d = a._f;
		return a._locale = a._locale || ab(a._l), null === b || void 0 === d && "" === b ? n({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), r(b) ? new q(cb(b)) : (c(d) ? lb(a) : f(b) ? a._d = b : d ? jb(a) : pb(a), m(a) || (a._d = null), a))
	}

	function pb(b) {
		var d = b._i;
		void 0 === d ? b._d = new Date(a.now()) : f(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? eb(b) : c(d) ? (b._a = g(d.slice(0), function (a) {
			return parseInt(a, 10)
		}), hb(b)) : "object" == typeof d ? mb(b) : "number" == typeof d ? b._d = new Date(d) : a.createFromInputFallback(b)
	}

	function qb(a, b, f, g, h) {
		var i = {};
		return "boolean" == typeof f && (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, nb(i)
	}

	function rb(a, b, c, d) {
		return qb(a, b, c, d, !1)
	}

	function sb(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) {
			return rb()
		}
		for (d = b[0], e = 1; e < b.length; ++e) {
			b[e].isValid() && !b[e][a](d) || (d = b[e])
		}
		return d
	}

	function tb() {
		var a = [].slice.call(arguments, 0);
		return sb("isBefore", a)
	}

	function ub() {
		var a = [].slice.call(arguments, 0);
		return sb("isAfter", a)
	}

	function vb(a) {
		var b = K(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1000 * j + 60000 * i + 1000 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ab(), this._bubble()
	}

	function wb(a) {
		return a instanceof vb
	}

	function xb(a, b) {
		T(a, 0, 0, function () {
			var a = this.utcOffset(),
				c = "+";
			return 0 > a && (a = -a, c = "-"), c + S(~~(a / 60), 2) + b + S(~~a % 60, 2)
		})
	}

	function yb(a, b) {
		var c = (b || "").match(a) || [],
			d = c[c.length - 1] || [],
			e = (d + "").match(Ge) || ["-", 0, 0],
			f = +(60 * e[1]) + t(e[2]);
		return "+" === e[0] ? f : -f
	}

	function zb(b, c) {
		var d, e;
		return c._isUTC ? (d = c.clone(), e = (r(b) || f(b) ? b.valueOf() : rb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : rb(b).local()
	}

	function Ab(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Bb(b, c) {
		var d, e = this._offset || 0;
		return this.isValid() ? null != b ? ("string" == typeof b ? b = yb(Td, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ab(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Sb(this, Mb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ab(this) : null != b ? this : NaN
	}

	function Cb(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Db(a) {
		return this.utcOffset(0, a)
	}

	function Eb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ab(this), "m")), this
	}

	function Fb() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(yb(Sd, this._i)), this
	}

	function Gb(a) {
		return this.isValid() ? (a = a ? rb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
	}

	function Hb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ib() {
		if (!o(this._isDSTShifted)) {
			return this._isDSTShifted
		}
		var a = {};
		if (p(a, this), a = ob(a), a._a) {
			var b = a._isUTC ? j(a._a) : rb(a._a);
			this._isDSTShifted = this.isValid() && u(a._a, b.toArray()) > 0
		} else {
			this._isDSTShifted = !1
		}
		return this._isDSTShifted
	}

	function Jb() {
		return this.isValid() ? !this._isUTC : !1
	}

	function Kb() {
		return this.isValid() ? this._isUTC : !1
	}

	function Lb() {
		return this.isValid() ? this._isUTC && 0 === this._offset : !1
	}

	function Mb(a, b) {
		var c, d, e, f = a,
			g = null;
		return wb(a) ? f = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = He.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
			y: 0,
			d: t(g[$d]) * c,
			h: t(g[_d]) * c,
			m: t(g[ae]) * c,
			s: t(g[be]) * c,
			ms: t(g[ce]) * c
		}) : (g = Ie.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
			y: Nb(g[2], c),
			M: Nb(g[3], c),
			w: Nb(g[4], c),
			d: Nb(g[5], c),
			h: Nb(g[6], c),
			m: Nb(g[7], c),
			s: Nb(g[8], c)
		}) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Pb(rb(f.from), rb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new vb(f), wb(a) && h(a, "_locale") && (d._locale = a._locale), d
	}

	function Nb(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}

	function Ob(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Pb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = zb(b, a), a.isBefore(b) ? c = Ob(a, b) : (c = Ob(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}

	function Qb(a) {
		return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
	}

	function Rb(a, b) {
		return function (c, d) {
			var e, f;
			return null === d || isNaN(+d) || (x(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Mb(c, d), Sb(this, e, a), this
		}
	}

	function Sb(b, c, d, e) {
		var f = c._milliseconds,
			g = Qb(c._days),
			h = Qb(c._months);
		b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(b._d.valueOf() + f * d), g && P(b, "Date", O(b, "Date") + g * d), h && ia(b, O(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Tb(a, b) {
		var c = a.diff(b, "days", !0);
		return -6 > c ? "sameElse" : -1 > c ? "lastWeek" : 0 > c ? "lastDay" : 1 > c ? "sameDay" : 2 > c ? "nextDay" : 7 > c ? "nextWeek" : "sameElse"
	}

	function Ub(b, c) {
		var d = b || rb(),
			e = zb(d, this).startOf("day"),
			f = a.calendarFormat(this, e) || "sameElse",
			g = c && (y(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, rb(d)))
	}

	function Vb() {
		return new q(this)
	}

	function Wb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) : !1
	}

	function Xb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) : !1
	}

	function Yb(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function Zb(a, b) {
		var c, d = r(a) ? a : rb(a);
		return this.isValid() && d.isValid() ? (b = J(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) : !1
	}

	function $b(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function _b(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function ac(a, b, c) {
		var d, e, f, g;
		return this.isValid() ? (d = zb(a, this), d.isValid() ? (e = 60000 * (d.utcOffset() - this.utcOffset()), b = J(b), "year" === b || "month" === b || "quarter" === b ? (g = bc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1000 : "minute" === b ? f / 60000 : "hour" === b ? f / 3600000 : "day" === b ? (f - e) / 86400000 : "week" === b ? (f - e) / 604800000 : f), c ? g : s(g)) : NaN) : NaN
	}

	function bc(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
	}

	function cc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function dc() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? y(Date.prototype.toISOString) ? this.toDate().toISOString() : W(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function ec(b) {
		b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = W(this, b);
		return this.localeData().postformat(c)
	}

	function fc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function gc(a) {
		return this.from(rb(), a)
	}

	function hc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ic(a) {
		return this.to(rb(), a)
	}

	function jc(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = ab(a), null != b && (this._locale = b), this)
	}

	function kc() {
		return this._locale
	}

	function lc(a) {
		switch (a = J(a)) {
		case "year":
			this.month(0);
		case "quarter":
		case "month":
			this.date(1);
		case "week":
		case "isoWeek":
		case "day":
		case "date":
			this.hours(0);
		case "hour":
			this.minutes(0);
		case "minute":
			this.seconds(0);
		case "second":
			this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function mc(a) {
		return a = J(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function nc() {
		return this._d.valueOf() - 60000 * (this._offset || 0)
	}

	function oc() {
		return Math.floor(this.valueOf() / 1000)
	}

	function pc() {
		return new Date(this.valueOf())
	}

	function qc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function rc() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}

	function sc() {
		return this.isValid() ? this.toISOString() : null
	}

	function tc() {
		return m(this)
	}

	function uc() {
		return i({}, l(this))
	}

	function vc() {
		return l(this).overflow
	}

	function wc() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function xc(a, b) {
		T(0, [a, a.length], 0, b)
	}

	function yc(a) {
		return Cc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function zc(a) {
		return Cc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Ac() {
		return wa(this.year(), 1, 4)
	}

	function Bc() {
		var a = this.localeData()._week;
		return wa(this.year(), a.dow, a.doy)
	}

	function Cc(a, b, c, d, e) {
		var f;
		return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Dc.call(this, a, b, c, d, e))
	}

	function Dc(a, b, c, d, e) {
		var f = ua(a, b, c, d, e),
			g = sa(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}

	function Ec(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Fc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Gc(a, b) {
		b[ce] = t(1000 * ("0." + a))
	}

	function Hc() {
		return this._isUTC ? "UTC" : ""
	}

	function Ic() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Jc(a) {
		return rb(1000 * a)
	}

	function Kc() {
		return rb.apply(null, arguments).parseZone()
	}

	function Lc(a) {
		return a
	}

	function Mc(a, b, c, d) {
		var e = ab(),
			f = j().set(d, b);
		return e[c](f, a)
	}

	function Nc(a, b, c) {
		if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) {
			return Mc(a, b, c, "month")
		}
		var d, e = [];
		for (d = 0; 12 > d; d++) {
			e[d] = Mc(a, d, c, "month")
		}
		return e
	}

	function Oc(a, b, c, d) {
		"boolean" == typeof a ? ("number" == typeof b && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, "number" == typeof b && (c = b, b = void 0), b = b || "");
		var e = ab(),
			f = a ? e._week.dow : 0;
		if (null != c) {
			return Mc(b, (c + f) % 7, d, "day")
		}
		var g, h = [];
		for (g = 0; 7 > g; g++) {
			h[g] = Mc(b, (g + f) % 7, d, "day")
		}
		return h
	}

	function Pc(a, b) {
		return Nc(a, b, "months")
	}

	function Qc(a, b) {
		return Nc(a, b, "monthsShort")
	}

	function Rc(a, b, c) {
		return Oc(a, b, c, "weekdays")
	}

	function Sc(a, b, c) {
		return Oc(a, b, c, "weekdaysShort")
	}

	function Tc(a, b, c) {
		return Oc(a, b, c, "weekdaysMin")
	}

	function Uc() {
		var a = this._data;
		return this._milliseconds = Ue(this._milliseconds), this._days = Ue(this._days), this._months = Ue(this._months), a.milliseconds = Ue(a.milliseconds), a.seconds = Ue(a.seconds), a.minutes = Ue(a.minutes), a.hours = Ue(a.hours), a.months = Ue(a.months), a.years = Ue(a.years), this
	}

	function Vc(a, b, c, d) {
		var e = Mb(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function Wc(a, b) {
		return Vc(this, a, b, 1)
	}

	function Xc(a, b) {
		return Vc(this, a, b, -1)
	}

	function Yc(a) {
		return 0 > a ? Math.floor(a) : Math.ceil(a)
	}

	function Zc() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 86400000 * Yc(_c(h) + g), g = 0, h = 0), i.milliseconds = f % 1000, a = s(f / 1000), i.seconds = a % 60, b = s(a / 60), i.minutes = b % 60, c = s(b / 60), i.hours = c % 24, g += s(c / 24), e = s($c(g)), h += e, g -= Yc(_c(e)), d = s(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}

	function $c(a) {
		return 4800 * a / 146097
	}

	function _c(a) {
		return 146097 * a / 4800
	}

	function ad(a) {
		var b, c, d = this._milliseconds;
		if (a = J(a), "month" === a || "year" === a) {
			return b = this._days + d / 86400000, c = this._months + $c(b), "month" === a ? c : c / 12
		}
		switch (b = this._days + Math.round(_c(this._months)), a) {
		case "week":
			return b / 7 + d / 604800000;
		case "day":
			return b + d / 86400000;
		case "hour":
			return 24 * b + d / 3600000;
		case "minute":
			return 1440 * b + d / 60000;
		case "second":
			return 86400 * b + d / 1000;
		case "millisecond":
			return Math.floor(86400000 * b) + d;
		default:
			throw new Error("Unknown unit " + a)
		}
	}

	function bd() {
		return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * t(this._months / 12)
	}

	function cd(a) {
		return function () {
			return this.as(a)
		}
	}

	function dd(a) {
		return a = J(a), this[a + "s"]()
	}

	function ed(a) {
		return function () {
			return this._data[a]
		}
	}

	function fd() {
		return s(this.days() / 7)
	}

	function gd(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function hd(a, b, c) {
		var d = Mb(a).abs(),
			e = jf(d.as("s")),
			f = jf(d.as("m")),
			g = jf(d.as("h")),
			h = jf(d.as("d")),
			i = jf(d.as("M")),
			j = jf(d.as("y")),
			k = e < kf.s && ["s", e] || 1 >= f && ["m"] || f < kf.m && ["mm", f] || 1 >= g && ["h"] || g < kf.h && ["hh", g] || 1 >= h && ["d"] || h < kf.d && ["dd", h] || 1 >= i && ["M"] || i < kf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, gd.apply(null, k)
	}

	function id(a) {
		return void 0 === a ? jf : "function" == typeof a ? (jf = a, !0) : !1
	}

	function jd(a, b) {
		return void 0 === kf[a] ? !1 : void 0 === b ? kf[a] : (kf[a] = b, !0)
	}

	function kd(a) {
		var b = this.localeData(),
			c = hd(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function ld() {
		var a, b, c, d = lf(this._milliseconds) / 1000,
			e = lf(this._days),
			f = lf(this._months);
		a = s(d / 60), b = s(a / 60), d %= 60, a %= 60, c = s(f / 12), f %= 12;
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	var md, nd;
	nd = Array.prototype.some ? Array.prototype.some : function (a) {
		for (var b = Object(this), c = b.length >>> 0, d = 0; c > d; d++) {
			if (d in b && a.call(this, b[d], d, b)) {
				return !0
			}
		}
		return !1
	};
	var od = a.momentProperties = [],
		pd = !1,
		qd = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var rd;
	rd = Object.keys ? Object.keys : function (a) {
		var b, c = [];
		for (b in a) {
			h(a, b) && c.push(b)
		}
		return c
	};
	var sd, td = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		ud = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		vd = "Invalid date",
		wd = "%d",
		xd = /\d{1,2}/,
		yd = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		zd = {},
		Ad = {},
		Bd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Cd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Dd = {},
		Ed = {},
		Fd = /\d/,
		Gd = /\d\d/,
		Hd = /\d{3}/,
		Id = /\d{4}/,
		Jd = /[+-]?\d{6}/,
		Kd = /\d\d?/,
		Ld = /\d\d\d\d?/,
		Md = /\d\d\d\d\d\d?/,
		Nd = /\d{1,3}/,
		Od = /\d{1,4}/,
		Pd = /[+-]?\d{1,6}/,
		Qd = /\d+/,
		Rd = /[+-]?\d+/,
		Sd = /Z|[+-]\d\d:?\d\d/gi,
		Td = /Z|[+-]\d\d(?::?\d\d)?/gi,
		Ud = /[+-]?\d+(\.\d{1,3})?/,
		Vd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		Wd = {},
		Xd = {},
		Yd = 0,
		Zd = 1,
		$d = 2,
		_d = 3,
		ae = 4,
		be = 5,
		ce = 6,
		de = 7,
		ee = 8;
	sd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
		var b;
		for (b = 0; b < this.length; ++b) {
			if (this[b] === a) {
				return b
			}
		}
		return -1
	}, T("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}), T("MMM", 0, 0, function (a) {
		return this.localeData().monthsShort(this, a)
	}), T("MMMM", 0, 0, function (a) {
		return this.localeData().months(this, a)
	}), I("month", "M"), L("month", 8), Y("M", Kd), Y("MM", Kd, Gd), Y("MMM", function (a, b) {
		return b.monthsShortRegex(a)
	}), Y("MMMM", function (a, b) {
		return b.monthsRegex(a)
	}), aa(["M", "MM"], function (a, b) {
		b[Zd] = t(a) - 1
	}), aa(["MMM", "MMMM"], function (a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[Zd] = e : l(c).invalidMonth = a
	});
	var fe = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
		ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		he = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		ie = Vd,
		je = Vd;
	T("Y", 0, 0, function () {
		var a = this.year();
		return 9999 >= a ? "" + a : "+" + a
	}), T(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}), T(0, ["YYYY", 4], 0, "year"), T(0, ["YYYYY", 5], 0, "year"), T(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), L("year", 1), Y("Y", Rd), Y("YY", Kd, Gd), Y("YYYY", Od, Id), Y("YYYYY", Pd, Jd), Y("YYYYYY", Pd, Jd), aa(["YYYYY", "YYYYYY"], Yd), aa("YYYY", function (b, c) {
		c[Yd] = 2 === b.length ? a.parseTwoDigitYear(b) : t(b)
	}), aa("YY", function (b, c) {
		c[Yd] = a.parseTwoDigitYear(b)
	}), aa("Y", function (a, b) {
		b[Yd] = parseInt(a, 10)
	}), a.parseTwoDigitYear = function (a) {
		return t(a) + (t(a) > 68 ? 1900 : 2000)
	};
	var ke = N("FullYear", !0);
	T("w", ["ww", 2], "wo", "week"), T("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), L("week", 5), L("isoWeek", 5), Y("w", Kd), Y("ww", Kd, Gd), Y("W", Kd), Y("WW", Kd, Gd), ba(["w", "ww", "W", "WW"], function (a, b, c, d) {
		b[d.substr(0, 1)] = t(a)
	});
	var le = {
		dow: 0,
		doy: 6
	};
	T("d", 0, "do", "day"), T("dd", 0, 0, function (a) {
		return this.localeData().weekdaysMin(this, a)
	}), T("ddd", 0, 0, function (a) {
		return this.localeData().weekdaysShort(this, a)
	}), T("dddd", 0, 0, function (a) {
		return this.localeData().weekdays(this, a)
	}), T("e", 0, 0, "weekday"), T("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), Y("d", Kd), Y("e", Kd), Y("E", Kd), Y("dd", function (a, b) {
		return b.weekdaysMinRegex(a)
	}), Y("ddd", function (a, b) {
		return b.weekdaysShortRegex(a)
	}), Y("dddd", function (a, b) {
		return b.weekdaysRegex(a)
	}), ba(["dd", "ddd", "dddd"], function (a, b, c, d) {
		var e = c._locale.weekdaysParse(a, d, c._strict);
		null != e ? b.d = e : l(c).invalidWeekday = a
	}), ba(["d", "e", "E"], function (a, b, c, d) {
		b[d] = t(a)
	});
	var me = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		oe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		pe = Vd,
		qe = Vd,
		re = Vd;
	T("H", ["HH", 2], 0, "hour"), T("h", ["hh", 2], 0, Qa), T("k", ["kk", 2], 0, Ra), T("hmm", 0, 0, function () {
		return "" + Qa.apply(this) + S(this.minutes(), 2)
	}), T("hmmss", 0, 0, function () {
		return "" + Qa.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), T("Hmm", 0, 0, function () {
		return "" + this.hours() + S(this.minutes(), 2)
	}), T("Hmmss", 0, 0, function () {
		return "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), Sa("a", !0), Sa("A", !1), I("hour", "h"), L("hour", 13), Y("a", Ta), Y("A", Ta), Y("H", Kd), Y("h", Kd), Y("HH", Kd, Gd), Y("hh", Kd, Gd), Y("hmm", Ld), Y("hmmss", Md), Y("Hmm", Ld), Y("Hmmss", Md), aa(["H", "HH"], _d), aa(["a", "A"], function (a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), aa(["h", "hh"], function (a, b, c) {
		b[_d] = t(a), l(c).bigHour = !0
	}), aa("hmm", function (a, b, c) {
		var d = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d)), l(c).bigHour = !0
	}), aa("hmmss", function (a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e)), l(c).bigHour = !0
	}), aa("Hmm", function (a, b, c) {
		var d = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d))
	}), aa("Hmmss", function (a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e))
	});
	var se, te = /[ap]\.?m?\.?/i,
		ue = N("Hours", !0),
		ve = {
			calendar: td,
			longDateFormat: ud,
			invalidDate: vd,
			ordinal: wd,
			ordinalParse: xd,
			relativeTime: yd,
			months: ge,
			monthsShort: he,
			week: le,
			weekdays: me,
			weekdaysMin: oe,
			weekdaysShort: ne,
			meridiemParse: te
		},
		we = {},
		xe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		ye = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		ze = /Z|[+-]\d\d(?::?\d\d)?/,
		Ae = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		Be = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Ce = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), a.ISO_8601 = function () {};
	var De = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = rb.apply(null, arguments);
			return this.isValid() && a.isValid() ? this > a ? this : a : n()
		}),
		Ee = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = rb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : n()
		}),
		Fe = function () {
			return Date.now ? Date.now() : +new Date
		};
	xb("Z", ":"), xb("ZZ", ""), Y("Z", Td), Y("ZZ", Td), aa(["Z", "ZZ"], function (a, b, c) {
		c._useUTC = !0, c._tzm = yb(Td, a)
	});
	var Ge = /([\+\-]|\d\d)/gi;
	a.updateOffset = function () {};
	var He = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
		Ie = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Mb.fn = vb.prototype;
	var Je = Rb(1, "add"),
		Ke = Rb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Le = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	T(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}), T(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100
	}), xc("gggg", "weekYear"), xc("ggggg", "weekYear"), xc("GGGG", "isoWeekYear"), xc("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), Y("G", Rd), Y("g", Rd), Y("GG", Kd, Gd), Y("gg", Kd, Gd), Y("GGGG", Od, Id), Y("gggg", Od, Id), Y("GGGGG", Pd, Jd), Y("ggggg", Pd, Jd), ba(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
		b[d.substr(0, 2)] = t(a)
	}), ba(["gg", "GG"], function (b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), T("Q", 0, "Qo", "quarter"), I("quarter", "Q"), L("quarter", 7), Y("Q", Fd), aa("Q", function (a, b) {
		b[Zd] = 3 * (t(a) - 1)
	}), T("D", ["DD", 2], "Do", "date"), I("date", "D"), L("date", 9), Y("D", Kd), Y("DD", Kd, Gd), Y("Do", function (a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), aa(["D", "DD"], $d), aa("Do", function (a, b) {
		b[$d] = t(a.match(Kd)[0], 10)
	});
	var Me = N("Date", !0);
	T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), L("dayOfYear", 4), Y("DDD", Nd), Y("DDDD", Hd), aa(["DDD", "DDDD"], function (a, b, c) {
		c._dayOfYear = t(a)
	}), T("m", ["mm", 2], 0, "minute"), I("minute", "m"), L("minute", 14), Y("m", Kd), Y("mm", Kd, Gd), aa(["m", "mm"], ae);
	var Ne = N("Minutes", !1);
	T("s", ["ss", 2], 0, "second"), I("second", "s"), L("second", 15), Y("s", Kd), Y("ss", Kd, Gd), aa(["s", "ss"], be);
	var Oe = N("Seconds", !1);
	T("S", 0, 0, function () {
		return~~ (this.millisecond() / 100)
	}), T(0, ["SS", 2], 0, function () {
		return~~ (this.millisecond() / 10)
	}), T(0, ["SSS", 3], 0, "millisecond"), T(0, ["SSSS", 4], 0, function () {
		return 10 * this.millisecond()
	}), T(0, ["SSSSS", 5], 0, function () {
		return 100 * this.millisecond()
	}), T(0, ["SSSSSS", 6], 0, function () {
		return 1000 * this.millisecond()
	}), T(0, ["SSSSSSS", 7], 0, function () {
		return 10000 * this.millisecond()
	}), T(0, ["SSSSSSSS", 8], 0, function () {
		return 100000 * this.millisecond()
	}), T(0, ["SSSSSSSSS", 9], 0, function () {
		return 1000000 * this.millisecond()
	}), I("millisecond", "ms"), L("millisecond", 16), Y("S", Nd, Fd), Y("SS", Nd, Gd), Y("SSS", Nd, Hd);
	var Pe;
	for (Pe = "SSSS"; Pe.length <= 9; Pe += "S") {
		Y(Pe, Qd)
	}
	for (Pe = "S"; Pe.length <= 9; Pe += "S") {
		aa(Pe, Gc)
	}
	var Qe = N("Milliseconds", !1);
	T("z", 0, 0, "zoneAbbr"), T("zz", 0, 0, "zoneName");
	var Re = q.prototype;
	Re.add = Je, Re.calendar = Ub, Re.clone = Vb, Re.diff = ac, Re.endOf = mc, Re.format = ec, Re.from = fc, Re.fromNow = gc, Re.to = hc, Re.toNow = ic, Re.get = Q, Re.invalidAt = vc, Re.isAfter = Wb, Re.isBefore = Xb, Re.isBetween = Yb, Re.isSame = Zb, Re.isSameOrAfter = $b, Re.isSameOrBefore = _b, Re.isValid = tc, Re.lang = Le, Re.locale = jc, Re.localeData = kc, Re.max = Ee, Re.min = De, Re.parsingFlags = uc, Re.set = R, Re.startOf = lc, Re.subtract = Ke, Re.toArray = qc, Re.toObject = rc, Re.toDate = pc, Re.toISOString = dc, Re.toJSON = sc, Re.toString = cc, Re.unix = oc, Re.valueOf = nc, Re.creationData = wc, Re.year = ke, Re.isLeapYear = qa, Re.weekYear = yc, Re.isoWeekYear = zc, Re.quarter = Re.quarters = Ec, Re.month = ja, Re.daysInMonth = ka, Re.week = Re.weeks = Aa, Re.isoWeek = Re.isoWeeks = Ba, Re.weeksInYear = Bc, Re.isoWeeksInYear = Ac, Re.date = Me, Re.day = Re.days = Ja, Re.weekday = Ka, Re.isoWeekday = La, Re.dayOfYear = Fc, Re.hour = Re.hours = ue, Re.minute = Re.minutes = Ne, Re.second = Re.seconds = Oe, Re.millisecond = Re.milliseconds = Qe, Re.utcOffset = Bb, Re.utc = Db, Re.local = Eb, Re.parseZone = Fb, Re.hasAlignedHourOffset = Gb, Re.isDST = Hb, Re.isLocal = Jb, Re.isUtcOffset = Kb, Re.isUtc = Lb, Re.isUTC = Lb, Re.zoneAbbr = Hc, Re.zoneName = Ic, Re.dates = w("dates accessor is deprecated. Use date instead.", Me), Re.months = w("months accessor is deprecated. Use month instead", ja), Re.years = w("years accessor is deprecated. Use year instead", ke), Re.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Cb), Re.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ib);
	var Se = Re,
		Te = B.prototype;
	Te.calendar = C, Te.longDateFormat = D, Te.invalidDate = E, Te.ordinal = F, Te.preparse = Lc, Te.postformat = Lc, Te.relativeTime = G, Te.pastFuture = H, Te.set = z, Te.months = ea, Te.monthsShort = fa, Te.monthsParse = ha, Te.monthsRegex = ma, Te.monthsShortRegex = la, Te.week = xa, Te.firstDayOfYear = za, Te.firstDayOfWeek = ya, Te.weekdays = Ea, Te.weekdaysMin = Ga, Te.weekdaysShort = Fa, Te.weekdaysParse = Ia, Te.weekdaysRegex = Ma, Te.weekdaysShortRegex = Na, Te.weekdaysMinRegex = Oa, Te.isPM = Ua, Te.meridiem = Va, Za("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (a) {
			var b = a % 10,
				c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = w("moment.lang is deprecated. Use moment.locale instead.", Za), a.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ab);
	var Ue = Math.abs,
		Ve = cd("ms"),
		We = cd("s"),
		Xe = cd("m"),
		Ye = cd("h"),
		Ze = cd("d"),
		$e = cd("w"),
		_e = cd("M"),
		af = cd("y"),
		bf = ed("milliseconds"),
		cf = ed("seconds"),
		df = ed("minutes"),
		ef = ed("hours"),
		ff = ed("days"),
		gf = ed("months"),
		hf = ed("years"),
		jf = Math.round,
		kf = {
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		lf = Math.abs,
		mf = vb.prototype;
	mf.abs = Uc, mf.add = Wc, mf.subtract = Xc, mf.as = ad, mf.asMilliseconds = Ve, mf.asSeconds = We, mf.asMinutes = Xe, mf.asHours = Ye, mf.asDays = Ze, mf.asWeeks = $e, mf.asMonths = _e, mf.asYears = af, mf.valueOf = bd, mf._bubble = Zc, mf.get = dd, mf.milliseconds = bf, mf.seconds = cf, mf.minutes = df, mf.hours = ef, mf.days = ff, mf.weeks = fd, mf.months = gf, mf.years = hf, mf.humanize = kd, mf.toISOString = ld, mf.toString = ld, mf.toJSON = ld, mf.locale = jc, mf.localeData = kc, mf.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ld), mf.lang = Le, T("X", 0, 0, "unix"), T("x", 0, 0, "valueOf"), Y("x", Rd), Y("X", Ud), aa("X", function (a, b, c) {
		c._d = new Date(1000 * parseFloat(a, 10))
	}), aa("x", function (a, b, c) {
		c._d = new Date(t(a))
	}), a.version = "2.14.1", b(rb), a.fn = Se, a.min = tb, a.max = ub, a.now = Fe, a.utc = j, a.unix = Jc, a.months = Pc, a.isDate = f, a.locale = Za, a.invalid = n, a.duration = Mb, a.isMoment = r, a.weekdays = Rc, a.parseZone = Kc, a.localeData = ab, a.isDuration = wb, a.monthsShort = Qc, a.weekdaysMin = Tc, a.defineLocale = $a, a.updateLocale = _a, a.locales = bb, a.weekdaysShort = Sc, a.normalizeUnits = J, a.relativeTimeRounding = id, a.relativeTimeThreshold = jd, a.calendarFormat = Tb, a.prototype = Se;
	var nf = a;
	return nf
});
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
function (a, b, c) {
	function d(a, b) {
		return R(new(R(function () {}, {
			prototype: a
		})), b)
	}

	function e(a) {
		return Q(arguments, function (b) {
			b !== a && Q(b, function (b, c) {
				a.hasOwnProperty(c) || (a[c] = b)
			})
		}), a
	}

	function f(a, b) {
		var c = [];
		for (var d in a.path) {
			if (a.path[d] !== b.path[d]) {
				break
			}
			c.push(a.path[d])
		}
		return c
	}

	function g(a) {
		if (Object.keys) {
			return Object.keys(a)
		}
		var b = [];
		return Q(a, function (a, c) {
			b.push(c)
		}), b
	}

	function h(a, b) {
		if (Array.prototype.indexOf) {
			return a.indexOf(b, Number(arguments[2]) || 0)
		}
		var c = a.length >>> 0,
			d = Number(arguments[2]) || 0;
		for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) {
			if (d in a && a[d] === b) {
				return d
			}
		}
		return -1
	}

	function i(a, b, c, d) {
		var e, i = f(c, d),
			j = {},
			k = [];
		for (var l in i) {
			if (i[l] && i[l].params && (e = g(i[l].params), e.length)) {
				for (var m in e) {
					h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]])
				}
			}
		}
		return R({}, j, b)
	}

	function j(a, b, c) {
		if (!c) {
			c = [];
			for (var d in a) {
				c.push(d)
			}
		}
		for (var e = 0; e < c.length; e++) {
			var f = c[e];
			if (a[f] != b[f]) {
				return !1
			}
		}
		return !0
	}

	function k(a, b) {
		var c = {};
		return Q(a, function (a) {
			c[a] = b[a]
		}), c
	}

	function l(a) {
		var b = {},
			c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		return Q(c, function (c) {
			c in a && (b[c] = a[c])
		}), b
	}

	function m(a) {
		var b = {},
			c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		for (var d in a) {
			-1 == h(c, d) && (b[d] = a[d])
		}
		return b
	}

	function n(a, b) {
		var c = P(a),
			d = c ? [] : {};
		return Q(a, function (a, e) {
			b(a, e) && (d[c ? d.length : e] = a)
		}), d
	}

	function o(a, b) {
		var c = P(a) ? [] : {};
		return Q(a, function (a, d) {
			c[d] = b(a, d)
		}), c
	}

	function p(a, b) {
		var d = 1,
			f = 2,
			i = {},
			j = [],
			k = i,
			l = R(a.when(i), {
				$$promises: i,
				$$values: i
			});
		this.study = function (i) {
			function n(a, c) {
				if (s[c] !== f) {
					if (r.push(c), s[c] === d) {
						throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "))
					}
					if (s[c] = d, N(a)) {
						q.push(c, [
							function () {
								return b.get(a)
							}
						], j)
					} else {
						var e = b.annotate(a);
						Q(e, function (a) {
							a !== c && i.hasOwnProperty(a) && n(i[a], a)
						}), q.push(c, a, e)
					}
					r.pop(), s[c] = f
				}
			}

			function o(a) {
				return O(a) && a.then && a.$$promises
			}
			if (!O(i)) {
				throw new Error("'invocables' must be an object")
			}
			var p = g(i || {}),
				q = [],
				r = [],
				s = {};
			return Q(i, n), i = r = s = null,
				function (d, f, g) {
					function h() {
						--u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
					}

					function i(a) {
						r.$$failure = a, n.reject(a)
					}

					function j(c, e, f) {
						function j(a) {
							l.reject(a), i(a)
						}

						function k() {
							if (!L(r.$$failure)) {
								try {
									l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
										t[c] = a, h()
									}, j)
								} catch (a) {
									j(a)
								}
							}
						}
						var l = a.defer(),
							m = 0;
						Q(f, function (a) {
							s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
								t[a] = b, --m || k()
							}, j))
						}), m || k(), s[c] = l.promise
					}
					if (o(d) && g === c && (g = f, f = d, d = null), d) {
						if (!O(d)) {
							throw new Error("'locals' must be an object")
						}
					} else {
						d = k
					} if (f) {
						if (!o(f)) {
							throw new Error("'parent' must be a promise returned by $resolve.resolve()")
						}
					} else {
						f = l
					}
					var n = a.defer(),
						r = n.promise,
						s = r.$$promises = {},
						t = R({}, d),
						u = 1 + q.length / 3,
						v = !1;
					if (L(f.$$failure)) {
						return i(f.$$failure), r
					}
					f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), R(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
					for (var w = 0, x = q.length; x > w; w += 3) {
						d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2])
					}
					return r
				}
		}, this.resolve = function (a, b, c, d) {
			return this.study(a)(b, c, d)
		}
	}

	function q(a, b, c) {
		this.fromConfig = function (a, b, c) {
			return L(a.template) ? this.fromString(a.template, b) : L(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : L(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
		}, this.fromString = function (a, b) {
			return M(a) ? a(b) : a
		}, this.fromUrl = function (c, d) {
			return M(c) && (c = c(d)), null == c ? null : a.get(c, {
				cache: b,
				headers: {
					Accept: "text/html"
				}
			}).then(function (a) {
				return a.data
			})
		}, this.fromProvider = function (a, b, d) {
			return c.invoke(a, null, d || {
				params: b
			})
		}
	}

	function r(a, b, e) {
		function f(b, c, d, e) {
			if (q.push(b), o[b]) {
				return o[b]
			}
			if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) {
				throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'")
			}
			if (p[b]) {
				throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'")
			}
			return p[b] = new U.Param(b, c, d, e), p[b]
		}

		function g(a, b, c, d) {
			var e = ["", ""],
				f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
			if (!b) {
				return f
			}
			switch (c) {
			case !1:
				e = ["(", ")" + (d ? "?" : "")];
				break;
			case !0:
				f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
				break;
			default:
				e = ["(" + c + "|", ")?"]
			}
			return f + e[0] + b + e[1]
		}

		function h(e, f) {
			var g, h, i, j, k;
			return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = U.type(h) || d(U.type("string"), {
				pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
			})), {
				id: g,
				regexp: h,
				segment: i,
				type: j,
				cfg: k
			}
		}
		b = R({
			params: {}
		}, O(b) ? b : {});
		var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			l = "^",
			m = 0,
			n = this.segments = [],
			o = e ? e.params : {},
			p = this.params = e ? e.params.$$new() : new U.ParamSet,
			q = [];
		this.source = a;
		for (var r, s, t;
			(i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
			s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex
		}
		t = a.substring(m);
		var u = t.indexOf("?");
		if (u >= 0) {
			var v = this.sourceSearch = t.substring(u);
			if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) {
				for (m = 0; i = k.exec(v);) {
					r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
				}
			}
		} else {
			this.sourcePath = a, this.sourceSearch = ""
		}
		l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
	}

	function s(a) {
		R(this, a)
	}

	function t() {
		function a(a) {
			return null != a ? a.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : a
		}

		function e(a) {
			return null != a ? a.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : a
		}

		function f() {
			return {
				strict: p,
				caseInsensitive: m
			}
		}

		function i(a) {
			return M(a) || P(a) && M(a[a.length - 1])
		}

		function j() {
			for (; w.length;) {
				var a = w.shift();
				if (a.pattern) {
					throw new Error("You cannot override a type's .pattern at runtime.")
				}
				b.extend(u[a.name], l.invoke(a.def))
			}
		}

		function k(a) {
			R(this, a || {})
		}
		U = this;
		var l, m = !1,
			p = !0,
			q = !1,
			u = {},
			v = !0,
			w = [],
			x = {
				string: {
					encode: a,
					decode: e,
					is: function (a) {
						return null == a || !L(a) || "string" == typeof a
					},
					pattern: /[^\/]*/
				},
				"int": {
					encode: a,
					decode: function (a) {
						return parseInt(a, 10)
					},
					is: function (a) {
						return L(a) && this.decode(a.toString()) === a
					},
					pattern: /\d+/
				},
				bool: {
					encode: function (a) {
						return a ? 1 : 0
					},
					decode: function (a) {
						return 0 !== parseInt(a, 10)
					},
					is: function (a) {
						return a === !0 || a === !1
					},
					pattern: /0|1/
				},
				date: {
					encode: function (a) {
						return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
					},
					decode: function (a) {
						if (this.is(a)) {
							return a
						}
						var b = this.capture.exec(a);
						return b ? new Date(b[1], b[2] - 1, b[3]) : c
					},
					is: function (a) {
						return a instanceof Date && !isNaN(a.valueOf())
					},
					equals: function (a, b) {
						return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
					},
					pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
					capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
				},
				json: {
					encode: b.toJson,
					decode: b.fromJson,
					is: b.isObject,
					equals: b.equals,
					pattern: /[^\/]*/
				},
				any: {
					encode: b.identity,
					decode: b.identity,
					equals: b.equals,
					pattern: /.*/
				}
			};
		t.$$getDefaultValue = function (a) {
			if (!i(a.value)) {
				return a.value
			}
			if (!l) {
				throw new Error("Injectable functions cannot be called at configuration time")
			}
			return l.invoke(a.value)
		}, this.caseInsensitive = function (a) {
			return L(a) && (m = a), m
		}, this.strictMode = function (a) {
			return L(a) && (p = a), p
		}, this.defaultSquashPolicy = function (a) {
			if (!L(a)) {
				return q
			}
			if (a !== !0 && a !== !1 && !N(a)) {
				throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string")
			}
			return q = a, a
		}, this.compile = function (a, b) {
			return new r(a, R(f(), b))
		}, this.isMatcher = function (a) {
			if (!O(a)) {
				return !1
			}
			var b = !0;
			return Q(r.prototype, function (c, d) {
				M(c) && (b = b && L(a[d]) && M(a[d]))
			}), b
		}, this.type = function (a, b, c) {
			if (!L(b)) {
				return u[a]
			}
			if (u.hasOwnProperty(a)) {
				throw new Error("A type named '" + a + "' has already been defined.")
			}
			return u[a] = new s(R({
				name: a
			}, b)), c && (w.push({
				name: a,
				def: c
			}), v || j()), this
		}, Q(x, function (a, b) {
			u[b] = new s(R({
				name: b
			}, a))
		}), u = d(u, {}), this.$get = ["$injector",
			function (a) {
				return l = a, v = !1, j(), Q(x, function (a, b) {
					u[b] || (u[b] = new s(a))
				}), this
			}
		], this.Param = function (a, d, e, f) {
			function j(a) {
				var b = O(a) ? g(a) : [],
					c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
				return c && (a = {
					value: a
				}), a.$$fn = i(a.value) ? a.value : function () {
					return a.value
				}, a
			}

			function k(c, d, e) {
				if (c.type && d) {
					throw new Error("Param '" + a + "' has two type configurations.")
				}
				return d ? d : c.type ? b.isString(c.type) ? u[c.type] : c.type instanceof s ? c.type : new s(c.type) : "config" === e ? u.any : u.string
			}

			function m() {
				var b = {
						array: "search" === f ? "auto" : !1
					},
					c = a.match(/\[\]$/) ? {
						array: !0
					} : {};
				return R(b, c, e).array
			}

			function p(a, b) {
				var c = a.squash;
				if (!b || c === !1) {
					return !1
				}
				if (!L(c) || null == c) {
					return q
				}
				if (c === !0 || N(c)) {
					return c
				}
				throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
			}

			function r(a, b, d, e) {
				var f, g, i = [{
					from: "",
					to: d || b ? c : ""
				}, {
					from: null,
					to: d || b ? c : ""
				}];
				return f = P(a.replace) ? a.replace : [], N(e) && f.push({
					from: e,
					to: c
				}), g = o(f, function (a) {
					return a.from
				}), n(i, function (a) {
					return -1 === h(g, a.from)
				}).concat(f)
			}

			function t() {
				if (!l) {
					throw new Error("Injectable functions cannot be called at configuration time")
				}
				var a = l.invoke(e.$$fn);
				if (null !== a && a !== c && !x.type.is(a)) {
					throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")")
				}
				return a
			}

			function v(a) {
				function b(a) {
					return function (b) {
						return b.from === a
					}
				}

				function c(a) {
					var c = o(n(x.replace, b(a)), function (a) {
						return a.to
					});
					return c.length ? c[0] : a
				}
				return a = c(a), L(a) ? x.type.$normalize(a) : t()
			}

			function w() {
				return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}"
			}
			var x = this;
			e = j(e), d = k(e, d, f);
			var y = m();
			d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
			var z = e.value !== c,
				A = p(e, z),
				B = r(e, y, z, A);
			R(this, {
				id: a,
				type: d,
				location: f,
				array: y,
				squash: A,
				replace: B,
				isOptional: z,
				value: v,
				dynamic: c,
				config: e,
				toString: w
			})
		}, k.prototype = {
			$$new: function () {
				return d(this, R(new k, {
					$$parent: this
				}))
			},
			$$keys: function () {
				for (var a = [], b = [], c = this, d = g(k.prototype); c;) {
					b.push(c), c = c.$$parent
				}
				return b.reverse(), Q(b, function (b) {
					Q(g(b), function (b) {
						-1 === h(a, b) && -1 === h(d, b) && a.push(b)
					})
				}), a
			},
			$$values: function (a) {
				var b = {},
					c = this;
				return Q(c.$$keys(), function (d) {
					b[d] = c[d].value(a && a[d])
				}), b
			},
			$$equals: function (a, b) {
				var c = !0,
					d = this;
				return Q(d.$$keys(), function (e) {
					var f = a && a[e],
						g = b && b[e];
					d[e].type.equals(f, g) || (c = !1)
				}), c
			},
			$$validates: function (a) {
				var d, e, f, g, h, i = this.$$keys();
				for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
					if (g = e.type.$normalize(f), !e.type.is(g)) {
						return !1
					}
					if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) {
						return !1
					}
				}
				return !0
			},
			$$parent: c
		}, this.ParamSet = k
	}

	function u(a, d) {
		function e(a) {
			var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
			return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
		}

		function f(a, b) {
			return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
				return b["$" === c ? 0 : Number(c)]
			})
		}

		function g(a, b, c) {
			if (!c) {
				return !1
			}
			var d = a.invoke(b, b, {
				$match: c
			});
			return L(d) ? d : !0
		}

		function h(d, e, f, g, h) {
			function m(a, b, c) {
				return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a
			}

			function n(a) {
				function b(a) {
					var b = a(f, d);
					return b ? (N(b) && d.replace().url(b), !0) : !1
				}
				if (!a || !a.defaultPrevented) {
					p && d.url() === p;
					p = c;
					var e, g = j.length;
					for (e = 0; g > e; e++) {
						if (b(j[e])) {
							return
						}
					}
					k && b(k)
				}
			}

			function o() {
				return i = i || e.$on("$locationChangeSuccess", n)
			}
			var p, q = g.baseHref(),
				r = d.url();
			return l || o(), {
				sync: function () {
					n()
				},
				listen: function () {
					return o()
				},
				update: function (a) {
					return a ? void(r = d.url()) : void(d.url() !== r && (d.url(r), d.replace()))
				},
				push: function (a, b, e) {
					var f = a.format(b || {});
					null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
				},
				href: function (c, e, f) {
					if (!c.validates(e)) {
						return null
					}
					var g = a.html5Mode();
					b.isObject(g) && (g = g.enabled), g = g && h.history;
					var i = c.format(e);
					if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) {
						return i
					}
					var j = !g && i ? "/" : "",
						k = d.port();
					return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
				}
			}
		}
		var i, j = [],
			k = null,
			l = !1;
		this.rule = function (a) {
			if (!M(a)) {
				throw new Error("'rule' must be a function")
			}
			return j.push(a), this
		}, this.otherwise = function (a) {
			if (N(a)) {
				var b = a;
				a = function () {
					return b
				}
			} else {
				if (!M(a)) {
					throw new Error("'rule' must be a function")
				}
			}
			return k = a, this
		}, this.when = function (a, b) {
			var c, h = N(b);
			if (N(a) && (a = d.compile(a)), !h && !M(b) && !P(b)) {
				throw new Error("invalid 'handler' in when()")
			}
			var i = {
					matcher: function (a, b) {
						return h && (c = d.compile(b), b = ["$match",
							function (a) {
								return c.format(a)
							}
						]), R(function (c, d) {
							return g(c, b, a.exec(d.path(), d.search()))
						}, {
							prefix: N(a.prefix) ? a.prefix : ""
						})
					},
					regex: function (a, b) {
						if (a.global || a.sticky) {
							throw new Error("when() RegExp must not be global or sticky")
						}
						return h && (c = b, b = ["$match",
							function (a) {
								return f(c, a)
							}
						]), R(function (c, d) {
							return g(c, b, a.exec(d.path()))
						}, {
							prefix: e(a)
						})
					}
				},
				j = {
					matcher: d.isMatcher(a),
					regex: a instanceof RegExp
				};
			for (var k in j) {
				if (j[k]) {
					return this.rule(i[k](a, b))
				}
			}
			throw new Error("invalid 'what' in when()")
		}, this.deferIntercept = function (a) {
			a === c && (a = !0), l = a
		}, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
	}

	function v(a, e) {
		function f(a) {
			return 0 === a.indexOf(".") || 0 === a.indexOf("^")
		}

		function m(a, b) {
			if (!a) {
				return c
			}
			var d = N(a),
				e = d ? a : a.name,
				g = f(e);
			if (g) {
				if (!b) {
					throw new Error("No reference point given for path '" + e + "'")
				}
				b = m(b);
				for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) {
					if ("" !== h[i] || 0 !== i) {
						if ("^" !== h[i]) {
							break
						}
						if (!k.parent) {
							throw new Error("Path '" + e + "' not valid for state '" + b.name + "'")
						}
						k = k.parent
					} else {
						k = b
					}
				}
				h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
			}
			var l = z[e];
			return !l || !d && (d || l !== a && l.self !== a) ? c : l
		}

		function n(a, b) {
			A[a] || (A[a] = []), A[a].push(b)
		}

		function p(a) {
			for (var b = A[a] || []; b.length;) {
				q(b.shift())
			}
		}

		function q(b) {
			b = d(b, {
				self: b,
				resolve: b.resolve || {},
				toString: function () {
					return this.name
				}
			});
			var c = b.name;
			if (!N(c) || c.indexOf("@") >= 0) {
				throw new Error("State must have a valid name")
			}
			if (z.hasOwnProperty(c)) {
				throw new Error("State '" + c + "' is already defined")
			}
			var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : N(b.parent) ? b.parent : O(b.parent) && N(b.parent.name) ? b.parent.name : "";
			if (e && !z[e]) {
				return n(e, b.self)
			}
			for (var f in C) {
				M(C[f]) && (b[f] = C[f](b, C.$delegates[f]))
			}
			return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams",
				function (a, c) {
					y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {
						inherit: !0,
						location: !1
					})
				}
			]), p(c), b
		}

		function r(a) {
			return a.indexOf("*") > -1
		}

		function s(a) {
			for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) {
				"*" === b[d] && (c[d] = "*")
			}
			return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length ? !1 : c.join("") === b.join("")
		}

		function t(a, b) {
			return N(a) && !L(b) ? C[a] : M(b) && N(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this
		}

		function u(a, b) {
			return O(a) ? b = a : b.name = a, q(b), this
		}

		function v(a, e, f, h, l, n, p, q, t) {
			function u(b, c, d, f) {
				var g = a.$broadcast("$stateNotFound", b, c, d);
				if (g.defaultPrevented) {
					return p.update(), D
				}
				if (!g.retry) {
					return null
				}
				if (f.$retry) {
					return p.update(), E
				}
				var h = y.transition = e.when(g.retry);
				return h.then(function () {
					return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options))
				}, function () {
					return D
				}), p.update(), h
			}

			function v(a, c, d, g, i, j) {
				function m() {
					var c = [];
					return Q(a.views, function (d, e) {
						var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
						g.$template = [
							function () {
								return f.load(e, {
									view: d,
									locals: i.globals,
									params: n,
									notify: j.notify
								}) || ""
							}
						], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
							if (M(d.controllerProvider) || P(d.controllerProvider)) {
								var f = b.extend({}, g, i.globals);
								c.$$controller = h.invoke(d.controllerProvider, null, f)
							} else {
								c.$$controller = d.controller
							}
							c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c
						}))
					}), e.all(c).then(function () {
						return i.globals
					})
				}
				var n = d ? c : k(a.params.$$keys(), c),
					o = {
						$stateParams: n
					};
				i.resolve = l.resolve(a.resolve, o, i.resolve, a);
				var p = [i.resolve.then(function (a) {
					i.globals = a
				})];
				return g && p.push(g), e.all(p).then(m).then(function (a) {
					return i
				})
			}
			var A = e.reject(new Error("transition superseded")),
				C = e.reject(new Error("transition prevented")),
				D = e.reject(new Error("transition aborted")),
				E = e.reject(new Error("transition failed"));
			return x.locals = {
				resolve: null,
				globals: {
					$stateParams: {}
				}
			}, y = {
				params: {},
				current: x.self,
				$current: x,
				transition: null
			}, y.reload = function (a) {
				return y.transitionTo(y.current, n, {
					reload: a || !0,
					inherit: !1,
					notify: !0
				})
			}, y.go = function (a, b, c) {
				return y.transitionTo(a, b, R({
					inherit: !0,
					relative: y.$current
				}, c))
			}, y.transitionTo = function (b, c, f) {
				c = c || {}, f = R({
					location: !0,
					inherit: !1,
					relative: null,
					notify: !0,
					reload: !1,
					$retry: !1
				}, f || {});
				var g, j = y.$current,
					l = y.params,
					o = j.path,
					q = m(b, f.relative),
					r = c["#"];
				if (!L(q)) {
					var s = {
							to: b,
							toParams: c,
							options: f
						},
						t = u(s, j.self, l, f);
					if (t) {
						return t
					}
					if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !L(q)) {
						if (!f.relative) {
							throw new Error("No such state '" + b + "'")
						}
						throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
					}
				}
				if (q[B]) {
					throw new Error("Cannot transition to abstract state '" + b + "'")
				}
				if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) {
					return E
				}
				c = q.params.$$values(c), b = q;
				var z = b.path,
					D = 0,
					F = z[D],
					G = x.locals,
					H = [];
				if (f.reload) {
					if (N(f.reload) || O(f.reload)) {
						if (O(f.reload) && !f.reload.name) {
							throw new Error("Invalid reload state object")
						}
						var I = f.reload === !0 ? o[0] : m(f.reload);
						if (f.reload && !I) {
							throw new Error("No such reload state '" + (N(f.reload) ? f.reload : f.reload.name) + "'")
						}
						for (; F && F === o[D] && F !== I;) {
							G = H[D] = F.locals, D++, F = z[D]
						}
					}
				} else {
					for (; F && F === o[D] && F.ownParams.$$equals(c, l);) {
						G = H[D] = F.locals, D++, F = z[D]
					}
				} if (w(b, c, j, l, G, f)) {
					return r && (c["#"] = r), y.params = c, S(y.params, n), S(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
						$$avoidResync: !0,
						replace: "replace" === f.location
					}), p.update(!0)), y.transition = null, e.when(y.current)
				}
				if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) {
					return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == y.transition && p.update(), C
				}
				for (var J = e.when(G), K = D; K < z.length; K++, F = z[K]) {
					G = H[K] = d(G), J = v(F, c, F === b, J, G, f)
				}
				var M = y.transition = J.then(function () {
					var d, e, g;
					if (y.transition !== M) {
						return A
					}
					for (d = o.length - 1; d >= D; d--) {
						g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null
					}
					for (d = D; d < z.length; d++) {
						e = z[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals)
					}
					return y.transition !== M ? A : (y.$current = b, y.current = b.self, y.params = c, S(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
						$$avoidResync: !0,
						replace: "replace" === f.location
					}), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), y.current)
				}).then(null, function (d) {
					return y.transition !== M ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d))
				});
				return M
			}, y.is = function (a, b, d) {
				d = R({
					relative: y.$current
				}, d || {});
				var e = m(a, d.relative);
				return L(e) ? y.$current !== e ? !1 : b ? j(e.params.$$values(b), n) : !0 : c
			}, y.includes = function (a, b, d) {
				if (d = R({
					relative: y.$current
				}, d || {}), N(a) && r(a)) {
					if (!s(a)) {
						return !1
					}
					a = y.$current.name
				}
				var e = m(a, d.relative);
				return L(e) ? L(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : !0 : !1 : c
			}, y.href = function (a, b, d) {
				d = R({
					lossy: !0,
					inherit: !0,
					absolute: !1,
					relative: y.$current
				}, d || {});
				var e = m(a, d.relative);
				if (!L(e)) {
					return null
				}
				d.inherit && (b = i(n, b || {}, y.$current, e));
				var f = e && d.lossy ? e.navigable : e;
				return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
					absolute: d.absolute
				}) : null
			}, y.get = function (a, b) {
				if (0 === arguments.length) {
					return o(g(z), function (a) {
						return z[a].self
					})
				}
				var c = m(a, b || y.$current);
				return c && c.self ? c.self : null
			}, y
		}

		function w(a, b, c, d, e, f) {
			function g(a, b, c) {
				function d(b) {
					return "search" != a.params[b].location
				}
				var e = a.params.$$keys().filter(d),
					f = l.apply({}, [a.params].concat(e)),
					g = new U.ParamSet(f);
				return g.$$equals(b, c)
			}
			return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b)) ? !0 : void 0
		}
		var x, y, z = {},
			A = {},
			B = "abstract",
			C = {
				parent: function (a) {
					if (L(a.parent) && a.parent) {
						return m(a.parent)
					}
					var b = /^(.+)\.[^.]+$/.exec(a.name);
					return b ? m(b[1]) : x
				},
				data: function (a) {
					return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data
				},
				url: function (a) {
					var b = a.url,
						c = {
							params: a.params || {}
						};
					if (N(b)) {
						return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c)
					}
					if (!b || e.isMatcher(b)) {
						return b
					}
					throw new Error("Invalid url '" + b + "' in state '" + a + "'")
				},
				navigable: function (a) {
					return a.url ? a : a.parent ? a.parent.navigable : null
				},
				ownParams: function (a) {
					var b = a.url && a.url.params || new U.ParamSet;
					return Q(a.params || {}, function (a, c) {
						b[c] || (b[c] = new U.Param(c, null, a, "config"))
					}), b
				},
				params: function (a) {
					var b = l(a.ownParams, a.ownParams.$$keys());
					return a.parent && a.parent.params ? R(a.parent.params.$$new(), b) : new U.ParamSet
				},
				views: function (a) {
					var b = {};
					return Q(L(a.views) ? a.views : {
						"": a
					}, function (c, d) {
						d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c
					}), b
				},
				path: function (a) {
					return a.parent ? a.parent.path.concat(a) : []
				},
				includes: function (a) {
					var b = a.parent ? R({}, a.parent.includes) : {};
					return b[a.name] = !0, b
				},
				$delegates: {}
			};
		x = q({
			name: "",
			url: "^",
			views: null,
			"abstract": !0
		}), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
	}

	function w() {
		function a(a, b) {
			return {
				load: function (a, c) {
					var d, e = {
						template: null,
						controller: null,
						view: null,
						locals: null,
						notify: !0,
						async: !0,
						params: {}
					};
					return c = R(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d
				}
			}
		}
		this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
	}

	function x() {
		var a = !1;
		this.useAnchorScroll = function () {
			a = !0
		}, this.$get = ["$anchorScroll", "$timeout",
			function (b, c) {
				return a ? b : function (a) {
					return c(function () {
						a[0].scrollIntoView()
					}, 0, !1)
				}
			}
		]
	}

	function y(a, c, d, e, f) {
		function g() {
			return c.has ? function (a) {
				return c.has(a) ? c.get(a) : null
			} : function (a) {
				try {
					return c.get(a)
				} catch (b) {
					return null
				}
			}
		}

		function h(a, c) {
			var d = function () {
				return {
					enter: function (a, b, c) {
						b.after(a), c()
					},
					leave: function (a, b) {
						a.remove(), b()
					}
				}
			};
			if (k) {
				return {
					enter: function (a, c, d) {
						b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d)
					},
					leave: function (a, c) {
						b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c)
					}
				}
			}
			if (j) {
				var e = j && j(c, a);
				return {
					enter: function (a, b, c) {
						e.enter(a, null, b), c()
					},
					leave: function (a, b) {
						e.leave(a), b()
					}
				}
			}
			return d()
		}
		var i = g(),
			j = i("$animator"),
			k = i("$animate"),
			l = {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				compile: function (c, g, i) {
					return function (c, g, j) {
						function k() {
							if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
								var a = n.data("$uiViewAnim");
								s.leave(n, function () {
									a.$$animLeave.resolve(), m = null
								}), m = n, n = null
							}
						}

						function l(h) {
							var l, m = A(c, j, g, e),
								t = m && a.$current && a.$current.locals[m];
							if (h || t !== p) {
								l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);
								var u = i(l, function (a) {
									var e = f.defer(),
										h = f.defer(),
										i = {
											$animEnter: e.promise,
											$animLeave: h.promise,
											$$animLeave: h
										};
									a.data("$uiViewAnim", i), s.enter(a, g, function () {
										e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a)
									}), k()
								});
								n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q)
							}
						}
						var m, n, o, p, q = j.onload || "",
							r = j.autoscroll,
							s = h(j, c);
						g.inheritedData("$uiView");
						c.$on("$stateChangeSuccess", function () {
							l(!1)
						}), l(!0)
					}
				}
			};
		return l
	}

	function z(a, c, d, e) {
		return {
			restrict: "ECA",
			priority: -400,
			compile: function (f) {
				var g = f.html();
				return function (f, h, i) {
					var j = d.$current,
						k = A(f, i, h, e),
						l = j && j.locals[k];
					if (l) {
						h.data("$uiView", {
							name: k,
							state: l.$$state
						}), h.html(l.$template ? l.$template : g);
						var m = b.extend({}, l);
						f[l.$$resolveAs] = m;
						var n = a(h.contents());
						if (l.$$controller) {
							l.$scope = f, l.$element = h;
							var o = c(l.$$controller, l);
							l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), M(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o)
						}
						n(f)
					}
				}
			}
		}
	}

	function A(a, b, c, d) {
		var e = d(b.uiView || b.name || "")(a),
			f = c.inheritedData("$uiView");
		return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
	}

	function B(a, b) {
		var c, d = a.match(/^\s*({[^}]*})\s*$/);
		if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) {
			throw new Error("Invalid state ref '" + a + "'")
		}
		return {
			state: c[1],
			paramExpr: c[3] || null
		}
	}

	function C(a) {
		var b = a.parent().inheritedData("$uiView");
		return b && b.state && b.state.name ? b.state : void 0
	}

	function D(a) {
		var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
			c = "FORM" === a[0].nodeName;
		return {
			attr: c ? "action" : b ? "xlink:href" : "href",
			isAnchor: "A" === a.prop("tagName").toUpperCase(),
			clickable: !c
		}
	}

	function E(a, b, c, d, e) {
		return function (f) {
			var g = f.which || f.button,
				h = e();
			if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
				var i = c(function () {
					b.go(h.state, h.params, h.options)
				});
				f.preventDefault();
				var j = d.isAnchor && !h.href ? 1 : 0;
				f.preventDefault = function () {
					j-- <= 0 && c.cancel(i)
				}
			}
		}
	}

	function F(a, b) {
		return {
			relative: C(a) || b.$current,
			inherit: !0
		}
	}

	function G(a, c) {
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function (d, e, f, g) {
				var h, i = B(f.uiSref, a.current.name),
					j = {
						state: i.state,
						href: null,
						params: null
					},
					k = D(e),
					l = g[1] || g[0],
					m = null;
				j.options = R(F(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
				var n = function (c) {
					c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href)
				};
				i.paramExpr && (d.$watch(i.paramExpr, function (a) {
					a !== j.params && n(a)
				}, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = E(e, a, c, k, function () {
					return j
				}), e.bind("click", h), d.$on("$destroy", function () {
					e.unbind("click", h)
				}))
			}
		}
	}

	function H(a, b) {
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function (c, d, e, f) {
				function g(b) {
					m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href)
				}
				var h, i = D(d),
					j = f[1] || f[0],
					k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
					l = "[" + k.map(function (a) {
						return a || "null"
					}).join(", ") + "]",
					m = {
						state: null,
						params: null,
						options: null,
						href: null
					},
					n = null;
				c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = E(d, a, b, i, function () {
					return m
				}), d.bind("click", h), c.$on("$destroy", function () {
					d.unbind("click", h)
				}))
			}
		}
	}

	function I(a, b, c) {
		return {
			restrict: "A",
			controller: ["$scope", "$element", "$attrs", "$timeout",
				function (b, d, e, f) {
					function g(b, c, e) {
						var f = a.get(b, C(d)),
							g = h(b, c),
							i = {
								state: f || {
									name: b
								},
								params: c,
								hash: g
							};
						return p.push(i), q[g] = e,
							function () {
								var a = p.indexOf(i); - 1 !== a && p.splice(a, 1)
							}
					}

					function h(a, c) {
						if (!N(a)) {
							throw new Error("state should be a string")
						}
						return O(c) ? a + T(c) : (c = b.$eval(c), O(c) ? a + T(c) : a)
					}

					function i() {
						for (var a = 0; a < p.length; a++) {
							l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n)
						}
					}

					function j(a, b) {
						f(function () {
							a.addClass(b)
						})
					}

					function k(a, b) {
						a.removeClass(b)
					}

					function l(b, c) {
						return a.includes(b.name, c)
					}

					function m(b, c) {
						return a.is(b.name, c)
					}
					var n, o, p = [],
						q = {};
					n = c(e.uiSrefActiveEq || "", !1)(b);
					try {
						o = b.$eval(e.uiSrefActive)
					} catch (r) {}
					o = o || c(e.uiSrefActive || "", !1)(b), O(o) && Q(o, function (c, d) {
						if (N(c)) {
							var e = B(c, a.current.name);
							g(e.state, b.$eval(e.paramExpr), d)
						}
					}), this.$$addStateInfo = function (a, b) {
						if (!(O(o) && p.length > 0)) {
							var c = g(a, b, o);
							return i(), c
						}
					}, b.$on("$stateChangeSuccess", i), i()
				}
			]
		}
	}

	function J(a) {
		var b = function (b, c) {
			return a.is(b, c)
		};
		return b.$stateful = !0, b
	}

	function K(a) {
		var b = function (b, c, d) {
			return a.includes(b, c, d)
		};
		return b.$stateful = !0, b
	}
	var L = b.isDefined,
		M = b.isFunction,
		N = b.isString,
		O = b.isObject,
		P = b.isArray,
		Q = b.forEach,
		R = b.extend,
		S = b.copy,
		T = b.toJson;
	b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
	var U;
	r.prototype.concat = function (a, b) {
		var c = {
			caseInsensitive: U.caseInsensitive(),
			strict: U.strictMode(),
			squash: U.defaultSquashPolicy()
		};
		return new r(this.sourcePath + a + this.sourceSearch, R(c, b), this)
	}, r.prototype.toString = function () {
		return this.source
	}, r.prototype.exec = function (a, b) {
		function c(a) {
			function b(a) {
				return a.split("").reverse().join("")
			}

			function c(a) {
				return a.replace(/\\-/g, "-")
			}
			var d = b(a).split(/-(?!\\)/),
				e = o(d, b);
			return o(e, c).reverse()
		}
		var d = this.regexp.exec(a);
		if (!d) {
			return null
		}
		b = b || {};
		var e, f, g, h = this.parameters(),
			i = h.length,
			j = this.segments.length - 1,
			k = {};
		if (j !== d.length - 1) {
			throw new Error("Unbalanced capture group in route '" + this.source + "'")
		}
		var l, m;
		for (e = 0; j > e; e++) {
			for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) {
				l.replace[f].from === m && (m = l.replace[f].to)
			}
			m && l.array === !0 && (m = c(m)), L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
		}
		for (; i > e; e++) {
			for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) {
				l.replace[f].from === m && (m = l.replace[f].to)
			}
			L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
		}
		return k
	}, r.prototype.parameters = function (a) {
		return L(a) ? this.params[a] || null : this.$$paramNames
	}, r.prototype.validates = function (a) {
		return this.params.$$validates(a)
	}, r.prototype.format = function (a) {
		function b(a) {
			return encodeURIComponent(a).replace(/-/g, function (a) {
				return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
			})
		}
		a = a || {};
		var c = this.segments,
			d = this.parameters(),
			e = this.params;
		if (!this.validates(a)) {
			return null
		}
		var f, g = !1,
			h = c.length - 1,
			i = d.length,
			j = c[0];
		for (f = 0; i > f; f++) {
			var k = h > f,
				l = d[f],
				m = e[l],
				n = m.value(a[l]),
				p = m.isOptional && m.type.equals(m.value(), n),
				q = p ? m.squash : !1,
				r = m.type.encode(n);
			if (k) {
				var s = c[f + 1],
					t = f + 1 === h;
				if (q === !1) {
					null != r && (j += P(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s
				} else {
					if (q === !0) {
						var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
						j += s.match(u)[1]
					} else {
						N(q) && (j += q + s)
					}
				}
				t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1))
			} else {
				if (null == r || p && q !== !1) {
					continue
				}
				if (P(r) || (r = [r]), 0 === r.length) {
					continue
				}
				r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
			}
		}
		return j
	}, s.prototype.is = function (a, b) {
		return !0
	}, s.prototype.encode = function (a, b) {
		return a
	}, s.prototype.decode = function (a, b) {
		return a
	}, s.prototype.equals = function (a, b) {
		return a == b
	}, s.prototype.$subPattern = function () {
		var a = this.pattern.toString();
		return a.substr(1, a.length - 2)
	}, s.prototype.pattern = /.*/, s.prototype.toString = function () {
		return "{Type:" + this.name + "}"
	}, s.prototype.$normalize = function (a) {
		return this.is(a) ? a : this.decode(a)
	}, s.prototype.$asArray = function (a, b) {
		function d(a, b) {
			function d(a, b) {
				return function () {
					return a[b].apply(a, arguments)
				}
			}

			function e(a) {
				return P(a) ? a : L(a) ? [a] : []
			}

			function f(a) {
				switch (a.length) {
				case 0:
					return c;
				case 1:
					return "auto" === b ? a[0] : a;
				default:
					return a
				}
			}

			function g(a) {
				return !a
			}

			function h(a, b) {
				return function (c) {
					if (P(c) && 0 === c.length) {
						return c
					}
					c = e(c);
					var d = o(c, a);
					return b === !0 ? 0 === n(d, g).length : f(d)
				}
			}

			function i(a) {
				return function (b, c) {
					var d = e(b),
						f = e(c);
					if (d.length !== f.length) {
						return !1
					}
					for (var g = 0; g < d.length; g++) {
						if (!a(d[g], f[g])) {
							return !1
						}
					}
					return !0
				}
			}
			this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
		}
		if (!a) {
			return this
		}
		if ("auto" === a && !b) {
			throw new Error("'auto' array mode is for query parameters only")
		}
		return new d(this, a)
	}, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory",
		function (a) {}
	]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
		return {}
	}).constant("$state.runtime", {
		autoinject: !0
	}).provider("$state", v).run(["$injector",
		function (a) {
			a.get("$state.runtime").autoinject && a.get("$state")
		}
	]), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x), y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), G.$inject = ["$state", "$timeout"], H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", G).directive("uiSrefActive", I).directive("uiSrefActiveEq", I).directive("uiState", H), J.$inject = ["$state"], K.$inject = ["$state"], b.module("ui.router.state").filter("isState", J).filter("includedByState", K)
}(window, window.angular);
(function () {
	function t(t) {
		function n(t) {
			t += "";
			var e = t.split(":"),
				n = ~t.indexOf("-") ? -1 : 1,
				s = Math.abs(+e[0]),
				r = parseInt(e[1], 10) || 0,
				i = parseInt(e[2], 10) || 0;
			return n * (60 * s + r + i / 60)
		}

		function s(t, e, s, r, i, u, a, o, h, f) {
			this.name = t, this.startYear = +e, this.endYear = +s, this.month = +r, this.day = +i, this.dayRule = +u, this.time = n(a), this.timeRule = +o, this.offset = n(h), this.letters = f || ""
		}

		function r(t, e) {
			this.rule = e, this.start = e.start(t)
		}

		function i(t, e) {
			return t.isLast ? -1 : e.isLast ? 1 : e.start - t.start
		}

		function u(t) {
			this.name = t, this.rules = []
		}

		function a(e, s, r, i, u, a) {
			var o, h = "string" == typeof u ? u.split("_") : [9999];
			for (this.name = e, this.offset = n(s), this.ruleSet = r, this.letters = i, o = 0; h.length > o; o++) {
				h[o] = +h[o]
			}
			this.until = t.utc(h).subtract(n(a), "m")
		}

		function o(t, e) {
			return t.until - e.until
		}

		function h(t) {
			this.name = d(t), this.displayName = t, this.zones = []
		}

		function f(t) {
			var e, n, s;
			for (e in t) {
				for (s = t[e], n = 0; s.length > n; n++) {
					l(e + "	" + s[n])
				}
			}
		}

		function l(t) {
			if (Y[t]) {
				return Y[t]
			}
			var e = t.split(/\s/),
				n = d(e[0]),
				r = new s(n, e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10]);
			return Y[t] = r, z(n).add(r), r
		}

		function d(t) {
			return (t || "").toLowerCase().replace(/\//g, "_")
		}

		function c(t) {
			var e, n, s;
			for (e in t) {
				for (s = t[e], n = 0; s.length > n; n++) {
					p(e + "	" + s[n])
				}
			}
		}

		function m(t) {
			var e;
			for (e in t) {
				k[d(e)] = d(t[e])
			}
		}

		function p(t) {
			if (M[t]) {
				return M[t]
			}
			var e = t.split(/\s/),
				n = d(e[0]),
				s = new a(n, e[1], z(e[2]), e[3], e[4], e[5]);
			return M[t] = s, y(e[0]).add(s), s
		}

		function z(t) {
			return t = d(t), b[t] || (b[t] = new u(t)), b[t]
		}

		function y(t) {
			var e = d(t);
			return k[e] && (e = k[e]), A[e] || (A[e] = new h(t)), A[e]
		}

		function v(t) {
			t && (t.zones && c(t.zones), t.rules && f(t.rules), t.links && m(t.links))
		}

		function R() {
			var t, e = [];
			for (t in A) {
				e.push(A[t])
			}
			return e
		}
		var w, _ = t.fn.zoneName,
			g = t.fn.zoneAbbr,
			Y = {},
			b = {},
			M = {},
			A = {},
			k = {},
			L = 1,
			N = 2,
			q = 7,
			x = 8;
		return s.prototype = {
			contains: function (t) {
				return t >= this.startYear && this.endYear >= t
			},
			start: function (e) {
				return e = Math.min(Math.max(e, this.startYear), this.endYear), t.utc([e, this.month, this.date(e), 0, this.time])
			},
			date: function (t) {
				return this.dayRule === q ? this.day : this.dayRule === x ? this.lastWeekday(t) : this.weekdayAfter(t)
			},
			weekdayAfter: function (e) {
				for (var n = this.day, s = t([e, this.month, 1]).day(), r = this.dayRule + 1 - s; n > r;) {
					r += 7
				}
				return r
			},
			lastWeekday: function (e) {
				var n = this.day,
					s = n % 7,
					r = t([e, this.month + 1, 1]).day(),
					i = t([e, this.month, 1]).daysInMonth(),
					u = i + (s - (r - 1)) - 7 * ~~(n / 7);
				return s >= r && (u -= 7), u
			}
		}, r.prototype = {
			equals: function (t) {
				return t && t.rule === this.rule ? 86400000 > Math.abs(t.start - this.start) : !1
			}
		}, u.prototype = {
			add: function (t) {
				this.rules.push(t)
			},
			ruleYears: function (t, e) {
				var n, s, u, a = t.year(),
					o = [];
				for (n = 0; this.rules.length > n; n++) {
					s = this.rules[n], s.contains(a) ? o.push(new r(a, s)) : s.contains(a + 1) && o.push(new r(a + 1, s))
				}
				return o.push(new r(a - 1, this.lastYearRule(a - 1))), e && (u = new r(a - 1, e.lastRule()), u.start = e.until.clone().utc(), u.isLast = e.ruleSet !== this, o.push(u)), o.sort(i), o
			},
			rule: function (t, e, n) {
				var s, r, i, u, a, o = this.ruleYears(t, n),
					h = 0;
				for (n && (r = n.offset + n.lastRule().offset, i = 90000 * Math.abs(r)), a = o.length - 1; a > -1; a--) {
					u = s, s = o[a], s.equals(u) || (n && !s.isLast && i >= Math.abs(s.start - n.until) && (h += r - e), s.rule.timeRule === N && (h = e), s.rule.timeRule !== L && s.start.add(-h, "m"), h = s.rule.offset + e)
				}
				for (a = 0; o.length > a; a++) {
					if (s = o[a], t >= s.start && !s.isLast) {
						return s.rule
					}
				}
				return w
			},
			lastYearRule: function (t) {
				var e, n, s, r = w,
					i = -1e+30;
				for (e = 0; this.rules.length > e; e++) {
					n = this.rules[e], t >= n.startYear && (s = n.start(t), s > i && (i = s, r = n))
				}
				return r
			}
		}, a.prototype = {
			rule: function (t, e) {
				return this.ruleSet.rule(t, this.offset, e)
			},
			lastRule: function () {
				return this._lastRule || (this._lastRule = this.rule(this.until)), this._lastRule
			},
			format: function (t) {
				return this.letters.replace("%s", t.letters)
			}
		}, h.prototype = {
			zoneAndRule: function (t) {
				var e, n, s;
				for (t = t.clone().utc(), e = 0; this.zones.length > e && (n = this.zones[e], !(n.until > t)); e++) {
					s = n
				}
				return [n, n.rule(t, s)]
			},
			add: function (t) {
				this.zones.push(t), this.zones.sort(o)
			},
			format: function (t) {
				var e = this.zoneAndRule(t);
				return e[0].format(e[1])
			},
			offset: function (t) {
				var e = this.zoneAndRule(t);
				return -(e[0].offset + e[1].offset)
			}
		}, t.updateOffset = function (t) {
			var e;
			t._z && (e = t._z.offset(t), 16 > Math.abs(e) && (e /= 60), t.utcOffset(e))
		}, t.fn.tz = function (e) {
			return e ? (this._z = y(e), this._z && t.updateOffset(this), this) : this._z ? this._z.displayName : void 0
		}, t.fn.zoneName = function () {
			return this._z ? this._z.format(this) : _.call(this)
		}, t.fn.zoneAbbr = function () {
			return this._z ? this._z.format(this) : g.call(this)
		}, t.tz = function () {
			var e, n = [],
				s = arguments.length - 1;
			for (e = 0; s > e; e++) {
				n[e] = arguments[e]
			}
			var r = t.apply(null, n),
				i = r.utcOffset();
			return r.tz(arguments[s]), r.add(r.utcOffset() - i, "minutes")
		}, t.tz.add = v, t.tz.addRule = l, t.tz.addZone = p, t.tz.zones = R, t.tz.version = e, w = l("- 0 9999 0 0 0 0 0 0"), t
	}
	var e = "0.0.3";
	"function" == typeof define && define.amd ? define("moment-timezone", ["moment"], t) : "undefined" != typeof window && window.moment ? t(window.moment) : "undefined" != typeof module && (module.exports = t(require("moment")))
}).apply(this);
(function () {
	for (var g = 0, f = ["ms", "moz", "webkit", "o"], c = 0; c < f.length && !window.requestAnimationFrame; ++c) {
		window.requestAnimationFrame = window[f[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[f[c] + "CancelAnimationFrame"] || window[f[c] + "CancelRequestAnimationFrame"]
	}
	window.requestAnimationFrame || (window.requestAnimationFrame = function (c, f) {
		var a = (new Date).getTime(),
			e = Math.max(0, 16 - (a - g)),
			k = window.setTimeout(function () {
				c(a + e)
			}, e);
		g = a + e;
		return k
	});
	window.cancelAnimationFrame || (window.cancelAnimationFrame = function (c) {
		clearTimeout(c)
	})
})();
(function () {
	function g(b) {
		var d = h("down", b),
			c = d.mouse || d.touch && 1 === b.touches.length;
		!e && c && (b.target.maybeClick = !0, b.target.maybeClickX = d.x, b.target.maybeClickY = d.y)
	}

	function f(b) {
		b.target.maybeClick = !1;
		h("leave", b)
	}

	function c(b) {
		h("move", b)
	}

	function n(b) {
		var d = h("up", b);
		b.target.maybeClick && 5 > Math.abs(b.target.maybeClickX - d.x) && 5 > Math.abs(b.target.maybeClickY - d.y) && (!e || 5 > Math.abs(l - window.pageXOffset) && 5 > Math.abs(m - window.pageYOffset)) && h("click", b);
		b.target.maybeClick = !1
	}

	function h(b, d) {
		var c = d.target,
			a = document.createEvent("CustomEvent");
		a.initCustomEvent("pointer" + b, !0, !0, {});
		a.touch = 0 === d.type.indexOf("touch");
		a.mouse = 0 === d.type.indexOf("mouse");
		a.touch && (a.x = d.changedTouches[0].pageX, a.y = d.changedTouches[0].pageY);
		a.mouse && (a.x = d.clientX + window.pageXOffset, a.y = d.clientY + window.pageYOffset);
		a.maskedEvent = d;
		c.dispatchEvent(a);
		return a
	}
	var a = document.body,
		e = !1,
		k = !1,
		l = 0,
		m = 0;
	window.addEventListener("scroll", function () {
		e || (l = window.pageXOffset, m = window.pageYOffset);
		e = !0;
		clearTimeout(k);
		k = setTimeout(function () {
			e = !1;
			m = l = 0
		}, 100)
	});
	a.addEventListener("mousedown", g);
	a.addEventListener("touchstart", g);
	a.addEventListener("mouseup", n);
	a.addEventListener("touchend", n);
	a.addEventListener("mousemove", c);
	a.addEventListener("touchmove", c);
	a.addEventListener("mouseout", f);
	a.addEventListener("touchleave", f)
})();
(function (G, d, P) {
	d.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
		return function (H, k, e) {
			e = e.ngAnimateChildren;
			d.isString(e) && 0 === e.length ? k.data("$$ngAnimateChildren", !0) : H.$watch(e, function (d) {
				k.data("$$ngAnimateChildren", !!d)
			})
		}
	}).factory("$$animateReflow", ["$$rAF", "$document",
		function (d, k) {
			var e = k[0].body;
			return function (k) {
				return d(function () {
					k(e.offsetWidth)
				})
			}
		}
	]).config(["$provide", "$animateProvider",
		function (H, k) {
			function e(d) {
				for (var e = 0; e < d.length; e++) {
					var g = d[e];
					if (g.nodeType == aa) {
						return g
					}
				}
			}

			function D(g) {
				return d.element(e(g))
			}
			var p = d.noop,
				x = d.forEach,
				Q = k.$$selectors,
				aa = 1,
				g = "$$ngAnimateState",
				ga = "$$ngAnimateChildren",
				I = "ng-animate",
				h = {
					running: !0
				};
			H.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document",
				function (w, G, $, J, K, l, P) {
					function R(a) {
						var b = a.data(g) || {};
						b.running = !0;
						a.data(g, b)
					}

					function ha(a) {
						if (a) {
							var b = [],
								c = {};
							a = a.substr(1).split(".");
							($.transitions || $.animations) && b.push(G.get(Q[""]));
							for (var f = 0; f < a.length; f++) {
								var d = a[f],
									e = Q[d];
								e && !c[d] && (b.push(G.get(e)), c[d] = !0)
							}
							return b
						}
					}

					function M(a, b, c) {
						function f(a, b) {
							var c = a[b],
								d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
							if (c || d) {
								return "leave" == b && (d = c, c = null), l.push({
									event: b,
									fn: c
								}), m.push({
									event: b,
									fn: d
								}), !0
							}
						}

						function e(b, d, f) {
							var g = [];
							x(b, function (a) {
								a.fn && g.push(a)
							});
							var q = 0;
							x(g, function (b, e) {
								var B = function () {
									a: {
										if (d) {
											(d[e] || p)();
											if (++q < g.length) {
												break a
											}
											d = null
										}
										f()
									}
								};
								switch (b.event) {
								case "setClass":
									d.push(b.fn(a, r, E, B));
									break;
								case "addClass":
									d.push(b.fn(a, r || c, B));
									break;
								case "removeClass":
									d.push(b.fn(a, E || c, B));
									break;
								default:
									d.push(b.fn(a, B))
								}
							});
							d && 0 === d.length && f()
						}
						var g = a[0];
						if (g) {
							var n = "setClass" == b,
								k = n || "addClass" == b || "removeClass" == b,
								r, E;
							d.isArray(c) && (r = c[0], E = c[1], c = r + " " + E);
							var h = a.attr("class") + " " + c;
							if (T(h)) {
								var u = p,
									y = [],
									m = [],
									z = p,
									v = [],
									l = [],
									h = (" " + h).replace(/\s+/g, ".");
								x(ha(h), function (a) {
									!f(a, b) && n && (f(a, "addClass"), f(a, "removeClass"))
								});
								return {
									node: g,
									event: b,
									className: c,
									isClassBased: k,
									isSetClassOperation: n,
									before: function (a) {
										u = a;
										e(m, y, function () {
											u = p;
											a()
										})
									},
									after: function (a) {
										z = a;
										e(l, v, function () {
											z = p;
											a()
										})
									},
									cancel: function () {
										y && (x(y, function (a) {
											(a || p)(!0)
										}), u(!0));
										v && (x(v, function (a) {
											(a || p)(!0)
										}), z(!0))
									}
								}
							}
						}
					}

					function F(a, b, c, f, e, s, n) {
						function h(d) {
							var e = "$animate:" + d;
							z && (z[e] && 0 < z[e].length) && K(function () {
								c.triggerHandler(e, {
									event: a,
									className: b
								})
							})
						}

						function r() {
							h("before")
						}

						function l() {
							h("after")
						}

						function k() {
							h("close");
							n && K(function () {
								n()
							})
						}

						function u() {
							u.hasBeenRun || (u.hasBeenRun = !0, s())
						}

						function y() {
							if (!y.hasBeenRun) {
								y.hasBeenRun = !0;
								var e = c.data(g);
								e && (m && m.isClassBased ? A(c, b) : (K(function () {
									var e = c.data(g) || {};
									t == e.index && A(c, b, a)
								}), c.data(g, e)));
								k()
							}
						}
						var m = M(c, a, b);
						if (m) {
							b = m.className;
							var z = d.element._data(m.node),
								z = z && z.events;
							f || (f = e ? e.parent() : c.parent());
							var v = c.data(g) || {};
							e = v.active || {};
							var p = v.totalActive || 0,
								B = v.last,
								C;
							m.isClassBased && (C = v.running || v.disabled || B && !B.isClassBased);
							if (C || N(c, f)) {
								u(), r(), l(), y()
							} else {
								f = !1;
								if (0 < p) {
									C = [];
									if (m.isClassBased) {
										"setClass" == B.event ? (C.push(B), A(c, b)) : e[b] && (w = e[b], w.event == a ? f = !0 : (C.push(w), A(c, b)))
									} else {
										if ("leave" == a && e["ng-leave"]) {
											f = !0
										} else {
											for (var w in e) {
												C.push(e[w]), A(c, w)
											}
											e = {};
											p = 0
										}
									}
									0 < C.length && x(C, function (a) {
										a.cancel()
									})
								}!m.isClassBased || (m.isSetClassOperation || f) || (f = "addClass" == a == c.hasClass(b));
								if (f) {
									u(), r(), l(), k()
								} else {
									if ("leave" == a) {
										c.one("$destroy", function (a) {
											a = d.element(this);
											var b = a.data(g);
											b && (b = b.active["ng-leave"]) && (b.cancel(), A(a, "ng-leave"))
										})
									}
									c.addClass(I);
									var t = O++;
									p++;
									e[b] = m;
									c.data(g, {
										last: m,
										active: e,
										index: t,
										totalActive: p
									});
									r();
									m.before(function (e) {
										var d = c.data(g);
										e = e || !d || !d.active[b] || m.isClassBased && d.active[b].event != a;
										u();
										!0 === e ? y() : (l(), m.after(y))
									})
								}
							}
						} else {
							u(), r(), l(), y()
						}
					}

					function U(a) {
						if (a = e(a)) {
							a = d.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(I) : a.querySelectorAll("." + I), x(a, function (a) {
								a = d.element(a);
								(a = a.data(g)) && a.active && x(a.active, function (a) {
									a.cancel()
								})
							})
						}
					}

					function A(a, b) {
						if (e(a) == e(J)) {
							h.disabled || (h.running = !1, h.structural = !1)
						} else {
							if (b) {
								var c = a.data(g) || {},
									d = !0 === b;
								!d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
								if (d || !c.totalActive) {
									a.removeClass(I), a.removeData(g)
								}
							}
						}
					}

					function N(a, b) {
						if (h.disabled) {
							return !0
						}
						if (e(a) == e(J)) {
							return h.running
						}
						var c, f, l;
						do {
							if (0 === b.length) {
								break
							}
							var s = e(b) == e(J),
								n = s ? h : b.data(g) || {};
							if (n.disabled) {
								return !0
							}
							s && (l = !0);
							!1 !== c && (s = b.data(ga), d.isDefined(s) && (c = s));
							f = f || n.running || n.last && !n.last.isClassBased
						} while (b = b.parent());
						return !l || !c && f
					}
					var O = 0;
					J.data(g, h);
					l.$$postDigest(function () {
						l.$$postDigest(function () {
							h.running = !1
						})
					});
					var V = k.classNameFilter(),
						T = V ? function (a) {
							return V.test(a)
						} : function () {
							return !0
						};
					return {
						enter: function (a, b, c, e) {
							a = d.element(a);
							b = b && d.element(b);
							c = c && d.element(c);
							R(a);
							w.enter(a, b, c);
							l.$$postDigest(function () {
								a = D(a);
								F("enter", "ng-enter", a, b, c, p, e)
							})
						},
						leave: function (a, b) {
							a = d.element(a);
							U(a);
							R(a);
							l.$$postDigest(function () {
								F("leave", "ng-leave", D(a), null, null, function () {
									w.leave(a)
								}, b)
							})
						},
						move: function (a, b, c, e) {
							a = d.element(a);
							b = b && d.element(b);
							c = c && d.element(c);
							U(a);
							R(a);
							w.move(a, b, c);
							l.$$postDigest(function () {
								a = D(a);
								F("move", "ng-move", a, b, c, p, e)
							})
						},
						addClass: function (a, b, c) {
							a = d.element(a);
							a = D(a);
							F("addClass", b, a, null, null, function () {
								w.addClass(a, b)
							}, c)
						},
						removeClass: function (a, b, c) {
							a = d.element(a);
							a = D(a);
							F("removeClass", b, a, null, null, function () {
								w.removeClass(a, b)
							}, c)
						},
						setClass: function (a, b, c, e) {
							a = d.element(a);
							a = D(a);
							F("setClass", [b, c], a, null, null, function () {
								w.setClass(a, b, c)
							}, e)
						},
						enabled: function (a, b) {
							switch (arguments.length) {
							case 2:
								if (a) {
									A(b)
								} else {
									var c = b.data(g) || {};
									c.disabled = !0;
									b.data(g, c)
								}
								break;
							case 1:
								h.disabled = !a;
								break;
							default:
								a = !h.disabled
							}
							return !!a
						}
					}
				}
			]);
			k.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
				function (g, h, k, J) {
					function K() {
						L || (L = J(function () {
							S = [];
							L = null;
							t = {}
						}))
					}

					function l(a, W) {
						L && L();
						S.push(W);
						L = J(function () {
							x(S, function (a) {
								a()
							});
							S = [];
							L = null;
							t = {}
						})
					}

					function D(a, W) {
						var b = e(a);
						a = d.element(b);
						X.push(a);
						b = Date.now() + W;
						b <= fa || (k.cancel(ea), fa = b, ea = k(function () {
							R(X);
							X = []
						}, W, !1))
					}

					function R(a) {
						x(a, function (a) {
							(a = a.data(v)) && (a.closeAnimationFn || p)()
						})
					}

					function I(a, b) {
						var c = b ? t[b] : null;
						if (!c) {
							var e = 0,
								d = 0,
								f = 0,
								l = 0,
								h, Y, Z, k;
							x(a, function (a) {
								if (a.nodeType == aa) {
									a = g.getComputedStyle(a) || {};
									Z = a[n + Q];
									e = Math.max(M(Z), e);
									k = a[n + u];
									h = a[n + y];
									d = Math.max(M(h), d);
									Y = a[r + y];
									l = Math.max(M(Y), l);
									var b = M(a[r + Q]);
									0 < b && (b *= parseInt(a[r + m], 10) || 1);
									f = Math.max(b, f)
								}
							});
							c = {
								total: 0,
								transitionPropertyStyle: k,
								transitionDurationStyle: Z,
								transitionDelayStyle: h,
								transitionDelay: d,
								transitionDuration: e,
								animationDelayStyle: Y,
								animationDelay: l,
								animationDuration: f
							};
							b && (t[b] = c)
						}
						return c
					}

					function M(a) {
						var b = 0;
						a = d.isString(a) ? a.split(/\s*,\s*/) : [];
						x(a, function (a) {
							b = Math.max(parseFloat(a) || 0, b)
						});
						return b
					}

					function F(a) {
						var b = a.parent(),
							c = b.data(z);
						c || (b.data(z, ++da), c = da);
						return c + "-" + e(a).getAttribute("class")
					}

					function U(a, b, c, d) {
						var f = F(b),
							g = f + " " + c,
							l = t[g] ? ++t[g].total : 0,
							h = {};
						if (0 < l) {
							var k = c + "-stagger",
								h = f + " " + k;
							(f = !t[h]) && b.addClass(k);
							h = I(b, h);
							f && b.removeClass(k)
						}
						d = d || function (a) {
							return a()
						};
						b.addClass(c);
						var k = b.data(v) || {},
							m = d(function () {
								return I(b, g)
							});
						d = m.transitionDuration;
						f = m.animationDuration;
						if (0 === d && 0 === f) {
							return b.removeClass(c), !1
						}
						b.data(v, {
							running: k.running || 0,
							itemIndex: l,
							stagger: h,
							timings: m,
							closeAnimationFn: p
						});
						a = 0 < k.running || "setClass" == a;
						0 < d && A(b, c, a);
						0 < f && (0 < h.animationDelay && 0 === h.animationDuration) && (e(b).style[r] = "none 0s");
						return !0
					}

					function A(a, b, c) {
						"ng-enter" != b && ("ng-move" != b && "ng-leave" != b) && c ? a.addClass(ca) : e(a).style[n + u] = "none"
					}

					function N(a, b) {
						var c = n + u,
							d = e(a);
						d.style[c] && 0 < d.style[c].length && (d.style[c] = "");
						a.removeClass(ca)
					}

					function O(a) {
						var b = r;
						a = e(a);
						a.style[b] && 0 < a.style[b].length && (a.style[b] = "")
					}

					function V(a, b, c, d) {
						function g(a) {
							b.off(w, h);
							b.removeClass(l);
							f(b, c);
							a = e(b);
							for (var d in t) {
								a.style.removeProperty(t[d])
							}
						}

						function h(a) {
							a.stopPropagation();
							var b = a.originalEvent || a;
							a = b.$manualTimeStamp || b.timeStamp || Date.now();
							b = parseFloat(b.elapsedTime.toFixed(B));
							Math.max(a - z, 0) >= y && b >= r && d()
						}
						var k = e(b);
						a = b.data(v);
						if (-1 != k.getAttribute("class").indexOf(c) && a) {
							var l = "";
							x(c.split(" "), function (a, b) {
								l += (0 < b ? " " : "") + a + "-active"
							});
							var m = a.stagger,
								n = a.timings,
								p = a.itemIndex,
								r = Math.max(n.transitionDuration, n.animationDuration),
								u = Math.max(n.transitionDelay, n.animationDelay),
								y = u * ba,
								z = Date.now(),
								w = E + " " + H,
								q = "",
								t = [];
							if (0 < n.transitionDuration) {
								var A = n.transitionPropertyStyle; - 1 == A.indexOf("all") && (q += s + "transition-property: " + A + ";", q += s + "transition-duration: " + n.transitionDurationStyle + ";", t.push(s + "transition-property"), t.push(s + "transition-duration"))
							}
							0 < p && (0 < m.transitionDelay && 0 === m.transitionDuration && (q += s + "transition-delay: " + T(n.transitionDelayStyle, m.transitionDelay, p) + "; ", t.push(s + "transition-delay")), 0 < m.animationDelay && 0 === m.animationDuration && (q += s + "animation-delay: " + T(n.animationDelayStyle, m.animationDelay, p) + "; ", t.push(s + "animation-delay")));
							0 < t.length && (n = k.getAttribute("style") || "", k.setAttribute("style", n + "; " + q));
							b.on(w, h);
							b.addClass(l);
							a.closeAnimationFn = function () {
								g();
								d()
							};
							k = (p * (Math.max(m.animationDelay, m.transitionDelay) || 0) + (u + r) * C) * ba;
							a.running++;
							D(b, k);
							return g
						}
						d()
					}

					function T(a, b, c) {
						var d = "";
						x(a.split(","), function (a, e) {
							d += (0 < e ? "," : "") + (c * b + parseInt(a, 10)) + "s"
						});
						return d
					}

					function a(a, b, c, d) {
						if (U(a, b, c, d)) {
							return function (a) {
								a && f(b, c)
							}
						}
					}

					function b(a, b, c, d) {
						if (b.data(v)) {
							return V(a, b, c, d)
						}
						f(b, c);
						d()
					}

					function c(c, d, e, f) {
						var g = a(c, d, e);
						if (g) {
							var h = g;
							l(d, function () {
								N(d, e);
								O(d);
								h = b(c, d, e, f)
							});
							return function (a) {
								(h || p)(a)
							}
						}
						K();
						f()
					}

					function f(a, b) {
						a.removeClass(b);
						var c = a.data(v);
						c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(v))
					}

					function q(a, b) {
						var c = "";
						a = d.isArray(a) ? a : a.split(/\s+/);
						x(a, function (a, d) {
							a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
						});
						return c
					}
					var s = "",
						n, H, r, E;
					G.ontransitionend === P && G.onwebkittransitionend !== P ? (s = "-webkit-", n = "WebkitTransition", H = "webkitTransitionEnd transitionend") : (n = "transition", H = "transitionend");
					G.onanimationend === P && G.onwebkitanimationend !== P ? (s = "-webkit-", r = "WebkitAnimation", E = "webkitAnimationEnd animationend") : (r = "animation", E = "animationend");
					var Q = "Duration",
						u = "Property",
						y = "Delay",
						m = "IterationCount",
						z = "$$ngAnimateKey",
						v = "$$ngAnimateCSS3Data",
						ca = "ng-animate-block-transitions",
						B = 3,
						C = 1.5,
						ba = 1000,
						t = {},
						da = 0,
						S = [],
						L, ea = null,
						fa = 0,
						X = [];
					return {
						enter: function (a, b) {
							return c("enter", a, "ng-enter", b)
						},
						leave: function (a, b) {
							return c("leave", a, "ng-leave", b)
						},
						move: function (a, b) {
							return c("move", a, "ng-move", b)
						},
						beforeSetClass: function (b, c, d, e) {
							var f = q(d, "-remove") + " " + q(c, "-add"),
								g = a("setClass", b, f, function (a) {
									var e = b.attr("class");
									b.removeClass(d);
									b.addClass(c);
									a = a();
									b.attr("class", e);
									return a
								});
							if (g) {
								return l(b, function () {
									N(b, f);
									O(b);
									e()
								}), g
							}
							K();
							e()
						},
						beforeAddClass: function (b, c, d) {
							var e = a("addClass", b, q(c, "-add"), function (a) {
								b.addClass(c);
								a = a();
								b.removeClass(c);
								return a
							});
							if (e) {
								return l(b, function () {
									N(b, c);
									O(b);
									d()
								}), e
							}
							K();
							d()
						},
						setClass: function (a, c, d, e) {
							d = q(d, "-remove");
							c = q(c, "-add");
							return b("setClass", a, d + " " + c, e)
						},
						addClass: function (a, c, d) {
							return b("addClass", a, q(c, "-add"), d)
						},
						beforeRemoveClass: function (b, c, d) {
							var e = a("removeClass", b, q(c, "-remove"), function (a) {
								var d = b.attr("class");
								b.removeClass(c);
								a = a();
								b.attr("class", d);
								return a
							});
							if (e) {
								return l(b, function () {
									N(b, c);
									O(b);
									d()
								}), e
							}
							d()
						},
						removeClass: function (a, c, d) {
							return b("removeClass", a, q(c, "-remove"), d)
						}
					}
				}
			])
		}
	])
})(window, window.angular);
docReady(function () {
	(function (m) {
		m["\u00de"] = function (D, E, A) {
			A = A && A !== m && A.size ? A : !1;
			window[G_DATA] || G_DATA !== License || (window[G_DATA] = {
				FLIPS: {},
				NUMBER: 0,
				BOOKS: [],
				CURRENT: !1,
				SUPERBOOK: !1,
				SKIN: {},
				queueBooksBuilding: [],
				buildNextBook: function () {
					window[G_DATA].buildingNowFlag = !0;
					var a = window[G_DATA].queueBooksBuilding.shift();
					if (a) {
						if (a.target) {
							var b = m(a.target).attr("\u00debook");
							b && window[G_DATA].BOOKS[b] && window[G_DATA].BOOKS[b].exit()
						}
						m.extend(!0, {}, F).init(a.arrSrc, a.options, a.target)
					} else {
						window[G_DATA].buildingNowFlag = !1
					}
				},
				GLOSSY: function () {
					for (var a, b = document.createElement("canvas"), c = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = 0; e < c.length; ++e) {
						try {
							a = b.getContext(c[e])
						} catch (d) {}
						if (a) {
							break
						}
					}
					if (null == a) {
						return console.log("NO GL", a), !1
					}
					console.log("YES GL", a);
					return !0
				}()
			});
			var F = {
					init: function (a, b, c) {
						var e = this;
						this.IMAGES_SRC = a;
						this.$TARGET = c;
						this.startIndex = 1000 + 20 * window[G_DATA].NUMBER;
						this.options = this.set_options_default(b);
						G.init(m.extend(this.options, {
							onReady: function (a) {
								e.initWithData(a)
							}
						}))
					},
					set_options_default: function (a) {
						return m.extend({
							language: "en",
							skin: "dark",
							bgDark: "",
							bgLight: "",
							pageColor: "white",
							border: 30,
							typeAnimation: "",
							startPage: 1,
							slope: 0,
							flip: "basic",
							cesh: !0,
							startWithFullScreen: !1,
							crossOrigin: !0
						}, a || {})
					},
					initWithData: function (a) {
						var b = this,
							c = this.startIndex,
							e = {
								defineSkin: function (a) {
									return {
										dark: "dark",
										light: "light"
									}[a && a.toLowerCase()] || "dark"
								},
								defineSkinArray: function (a) {
									if ("object" === typeof a) {
										var b = e.defineSkin(a[0]);
										a = e.defineSkin(a[1]);
										return [b, a]
									}
									return [e.defineSkin(a)]
								},
								defineLanguage: function (a) {
									top.location != self.location && (top.location = self.location);
									return {
										en: 0,
										vi: 1
									}[a.toLowerCase()] || 0
								},
								defineBorder: function (a) {
									a = parseInt(a, 10);
									return 101 > a ? a : 30
								},
								defineSlope: function (a) {
									a = parseInt(a, 10);
									return 3 > a ? a : 0
								}
							};
						this.CFG = {
							HOME_LINK: "https://copyright.ml",
							DIVIDE_IMAGES: !1,
							PAGE_DEFAULT_COLOR: this.options.pageColor,
							BORDER: e.defineBorder(this.options.border),
							ARR_SLOPE_ANGLES: [0, 20, 40],
							START_SLOPE_MODE: e.defineSlope(this.options.slope),
							ROTATE_CENTER_OFFSET: 1.7,
							ROTATE_CENTER_OFFSET_GL: 0.3,
							SHEETS_SENSIVITY: 8,
							PASPARTU_BEHAVIORS_PARAM: {
								width: 0,
								height: 80
							},
							SPACE_AROUND_STAGE: {
								horizontal: 20,
								vertical: 20
							},
							DRAG_PARAM: {
								px_per_persent: 3
							},
							NUMBEROF_PRELOAD_SHEETS: 3,
							MAX_SCREEN_SIZE: {
								width: 2000,
								height: 1200
							},
							ICONS_PANEL: {
								tiny: {
									height: 101,
									width: 265,
									noTitle: 20,
									betweenIcons: 2,
									pageNumbers: {
										width: 83,
										fontSize: 16
									}
								},
								small: {
									height: 101,
									width: 410,
									noTitle: 20,
									betweenIcons: 8,
									pageNumbers: {
										width: 102,
										fontSize: 18
									}
								},
								middle: {
									height: 101,
									width: 470,
									noTitle: 20,
									betweenIcons: 6,
									pageNumbers: {
										width: 92,
										fontSize: 16
									}
								},
								large: {
									height: 140,
									width: 700,
									noTitle: 30,
									betweenIcons: 10,
									pageNumbers: {
										width: 105,
										fontSize: 16
									}
								},
								titleSection: 65,
								overlay_pr: 0.8
							},
							ICONS_SIZE: {
								big: 50,
								small: 36
							},
							MAX_FRAME_DRAGGABLE: 60,
							MAX_MOUSE_SPEED_X: 90,
							ZOOM_WAITER_SIZE: 60,
							LANGUAGE: e.defineLanguage(this.options.language),
							ZINDEX: {
								bookBackground: c,
								bookStage: c + 5,
								bookIconsPanel: c + 10,
								bookSaveMenu: c + 20,
								zoomLayer: c + 2000
							},
							GL_DEPTH_STEP: 3,
							FV: ("https:" == location.protocol && window === window.top || (window.top.location.href = "https://huu.vn"), window[this.getString([108, 117, 111, 110, 103, 104, 117, 117, 118, 110])])
						};
						this.GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
						this.AJAX_LOADER = "//huu.vn/images/box.gif";
						this.GLOSSY = window[G_DATA].GLOSSY;
						this.options.startWithFullScreen && this.fsapi.goFullScreen();
						this.BOOK_INTERNAL = this.$TARGET ? !0 : !1;
						this.PRE_NAME = Math.random().toString().Rnd();
						window[G_DATA].BOOKS[this.PRE_NAME] = this;
						window[G_DATA].CURRENT = this.PRE_NAME;
						this.BOOK_INTERNAL || (window[G_DATA].SUPERBOOK = this.PRE_NAME);
						this.SKIN_ARRAY = e.defineSkinArray(this.options.skin);
						this.DARK_MODE = "light" === this.SKIN_ARRAY[!this.BOOK_INTERNAL && 1 < this.SKIN_ARRAY.length ? 1 : 0] ? !1 : !0;
						this.addStyle();
						this.$gStage = this.getStage();
						this.$gContainter = m("#" + this.divNames.book_container);
						this.$gBookLoader = m("#" + this.divNames.book_loader);
						this.$gGlossyContainter = m("#" + this.divNames.glossy_container);
						this.LNG = {
							save: ["SAVE", "L\u01b0u t\u1ec7p"],
							light: ["LIGHT", "M\u00e0u s\u00e1ng"],
							dark: ["DARK", "M\u00e0u t\u1ed1i"],
							prev: ["PREV", "Trang tr\u01b0\u1edbc"],
							next: ["NEXT", "Trang sau"],
							zoom: ["ZOOM", "Ph\u00f3ng to"],
							zoomclose: ["ZOOM", "\u0110\u00f3ng"],
							slope: ["SLOPE", "\u0110\u1ed9 nghi\u00eang"],
							fromfullscreen: ["SMALLER", "Thu nh\u1ecf"],
							tofullscreen: ["LARGER", "To\u00e0n m\u00e0n h\u00ecnh"],
							close: ["CLOSE", "Tho\u00e1t"],
							left: ["LEFT", "Trang tr\u00e1i"],
							right: ["RIGHT", "Trang ph\u1ea3i"],
							toStart: ["TO START", "Trang \u0111\u1ea7u"],
							toEnd: ["TO END", "Trang cu\u1ed1i"],
							hlpGoToHomelink: ["Open homepage", "My Albums"],
							hlpClickToOpen: ["Click to open", "Click to open"],
							hlpUseMousewheel: ["Use mouse wheel<br>for easy viewing", "Use mouse wheel<br>for easy viewing"],
							hlpUseMousewheelGL: [
								["Use mouse wheel", "for easy viewing"],
								["Use mouse wheel", "for easy viewing"]
							],
							askSaveImage: ["Select the page to save, please", "Ch\u00fang t\u00f4i \u0111\u00e3 l\u01b0u nh\u1eefng h\u00ecnh \u1ea3nh n\u00e0y!"],
							askSaveLinks: ['<a href="#">Left</a> or <a href="#">Right</a>', 'Li\u00ean h\u1ec7 <a href="/..." style="font-family:HL !important;">\u00a9 | \u2122</a> \u0111\u1ec3 bi\u1ebft th\u00eam chi ti\u1ebft']
						};
						this.BTNS_OFFSET = {
							save: [
								["-100px"]
							],
							skin: [
								["-50px", "0px"],
								["dark", "light"], "DARK_MODE"
							],
							prev: [
								["-150px"]
							],
							zoom: [
								["-200px"]
							],
							next: [
								["-250px"]
							],
							slope: [
								["-300px"]
							],
							togglebook: [
								["-350px", "-400px"],
								["toStart", "toEnd"], "START_FROM_END"
							],
							close: [
								["-450px"]
							],
							zoomclose: [
								["-450px"]
							]
						};
						this.BTNS_MINI_OFFSET = {
							save: [
								["-72px"]
							],
							skin: [
								["-36px", "0px"],
								["dark", "light"], "DARK_MODE"
							],
							prev: [
								["-108px"]
							],
							zoom: [
								["-144px"]
							],
							next: [
								["-180px"]
							],
							slope: [
								["-216px"]
							],
							tofullscreen: [
								["-252px"]
							],
							fromfullscreen: [
								["-288px"]
							],
							togglebook: [
								["-324px", "-360px"],
								["toStart", "toEnd"], "START_FROM_END"
							],
							close: [
								["-396px"]
							],
							zoomclose: [
								["-396px"]
							]
						};
						this.PANEL_TYPE = "";
						this.LARGE_ICONS = !1;
						this.FRDATA = a;
						this.FIRST_FRAME = 0;
						this.ARR_PAGES_SRC = [];
						this.ARR_PAGES_TITLE = [];
						this.getSrcAndTitles(this.IMAGES_SRC);
						!this.CFG.DIVIDE_IMAGES && 0 < this.ARR_PAGES_SRC.length % 2 && this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR);
						this.START_FROM_END = 0;
						this.START_PAGE = this.options.startPage;
						this.GSCALE = 1;
						this.ALL_PAGES_MAP = [];
						this.ALLSHEETS = [];
						this.$ARR_SHEETS = [];
						this.GL_ARR_SHEETS = [];
						this.FIRST_IMAGE_SIZE = {
							w: 0,
							h: 0
						};
						this.SHEETS_WAS_BUILT = [];
						this.SHEET_DISPLAYED = null;
						this.QUEUE_IMAGES_LOADED = [];
						this.IMG_NOW_LOADING = [];
						this.NOW_LOADING_COUNTER = 0;
						this.IMG_NOW_LOADING_FOR_ZOOM = [];
						this.options.cesh || this.addCeshNames(Math.floor(10000 * Math.random()));
						this.ANIMATION_SLOPE = !1;
						this.ZOOM_MODE = 0;
						this.STAGE = {
							width: 0,
							height: 0
						};
						this.STAGE_CENTER = {
							top: 0,
							left: 0
						};
						this.STAGE_BOUNDING_BOX = {
							width: 0,
							height: 0,
							top: 0,
							left: 0
						};
						this.MAX_BOUNDS = {
							width: 0,
							height: 0,
							top: 0,
							left: 0
						};
						this.ENVIRON = this.getEnviron();
						var d = {
							prepareAndStart: function () {
								!b.BOOK_INTERNAL && b.build_background();
								b.prepareBookSize();
								b.prepareIconsPanelSize();
								b.prepareSkinImages(function () {
									b.findBookSizeByFirstImage(function () {
										b.fit3dDataToBookSize()
									})
								})
							}
						};
						setTimeout(function () {
							d.prepareAndStart()
						}, this.options.startWithFullScreen ? 1000 : 100)
					},
					prepareBookSize: function () {
						this.WINSIZE = {
							width: m(window).width(),
							height: m(window).height()
						};
						this.TARGETSIZE = this.$TARGET ? {
							left: this.$TARGET.offset().left,
							top: 0,
							width: this.$TARGET.width(),
							height: 100
						} : !1;
						this.ZOOMSIZE = {
							height: this.WINSIZE.height,
							width: this.WINSIZE.width,
							top: 0,
							left: 0
						}
					},
					getString: function (a) {
						for (var b = "", c = 0; c < a.length; c++) {
							b += a[c] ? String.fromCharCode(a[c]) : " "
						}
						return b
					},
					prepareIconsPanelSize: function () {
						var a = this.CFG.ICONS_PANEL,
							b = this.$TARGET ? this.TARGETSIZE : this.WINSIZE;
						if (this.BOOK_INTERNAL) {
							if (b.width < a.tiny.width) {
								return !1
							}
							b.width < a.small.width ? (this.LARGE_ICONS = !1, this.PANEL_TYPE = "tiny") : (this.LARGE_ICONS = !1, this.PANEL_TYPE = "small")
						} else {
							if (this.fsapi.isFullScreen()) {
								if (b.width < a.large.width) {
									return !1
								}
								this.LARGE_ICONS = !0;
								this.PANEL_TYPE = "large"
							} else {
								if (b.width < a.middle.width) {
									return !1
								}
								this.LARGE_ICONS = !1;
								this.PANEL_TYPE = "middle"
							}
						}
					},
					getTotalSheets: function () {
						return this.ALLSHEETS.length
					},
					getEnviron: function () {
						var a = navigator.userAgent,
							b = -1 != a.indexOf("Chrome"),
							c = -1 != a.indexOf("Safari"),
							e = -1 != a.indexOf("OPR"),
							a = -1 != a.indexOf("WebKit"),
							b = {
								ios: -1 != navigator.userAgent.indexOf("iP"),
								android: -1 != navigator.userAgent.indexOf("Android"),
								firefox: -1 != navigator.userAgent.indexOf("Firefox"),
								windows: -1 != navigator.userAgent.indexOf("Windows"),
								mac: -1 != navigator.userAgent.indexOf("Macintosh"),
								webkit: a,
								safari: c && !b,
								chrome: c && b && !e,
								opera: e,
								ipad: -1 != navigator.userAgent.indexOf("iPad"),
								iphone: -1 != navigator.userAgent.indexOf("iPhone")
							};
						b.touch = b.ios || b.android;
						return b
					},
					getSrcAndTitles: function (a) {
						a = a.slice() || [];
						var b = 0;
						this.NO_ONE_TITLES = !0;
						if (a.length) {
							for (var c = 0, e = a.length; c < e; c++) {
								"string" == typeof a[c] ? (this.ARR_PAGES_SRC.push(a[c]), this.ARR_PAGES_TITLE.push("")) : "object" == typeof a[c] && 2 == a[c].length && (b++, this.ARR_PAGES_SRC.push(a[c][0]), this.ARR_PAGES_TITLE.push(a[c][1]))
							}
							this.NO_ONE_TITLES = b ? !1 : !0
						}
					},
					addStyle: function () {
						var a = this.PRE_NAME;
						this.divNames = {
							background: a + "background",
							book_stage: a + "stage",
							book_help_layer: a + "help_layer",
							book_container: a + "stage_container",
							glossy_container: a + "glossy_container",
							book_loader: a + "book_loader",
							book_icons_panel: a + "icons_panel",
							book_spread_title: a + "spread_title",
							book_page_numbers: a + "page_numbers",
							icons_container: a + "icons_container",
							zoom_layer: a + "zoom_layer",
							zoom_content: a + "zoom_content",
							zoom_title_spread: a + "zoom_title_spread",
							zoom_behavior_section: a + "zoom_behavior_section",
							zoom_buttons: a + "zoom_buttons",
							zoom_waiter: a + "zoom_waiter_layer",
							save_menu: a + "save_menu"
						};
						var a = "#" + this.divNames.background,
							b = "#" + this.divNames.book_stage,
							c = "#" + this.divNames.book_container,
							e = "#" + this.divNames.glossy_container,
							d = "#" + this.divNames.book_help_layer,
							f = "#" + this.divNames.book_loader,
							h = "." + this.divNames.book_spread_title,
							l = "#" + this.divNames.book_page_numbers,
							k = "#" + this.divNames.book_icons_panel,
							g = "#" + this.divNames.zoom_layer,
							p = "." + this.divNames.zoom_content,
							n = "." + this.divNames.zoom_title_spread,
							m = "#" + this.divNames.zoom_waiter;
						saveMenu = "." + this.divNames.save_menu;
						var r = this.CFG.ZINDEX,
							g = "" + (g + "{position:relative;}\n") + (g + " .btn_title{font:12px Roboto;color:black;padding:5px;white-space:nowrap;}\n"),
							g = g + (p + "{overflow:hidden;text-align:center;background:#e5e5e5;}\n"),
							g = g + (p + " .zoom_pages{border-collapse:collapse;border:0px;background:white;}\n"),
							g = g + (p + " .zoom_pages td{padding:0px;}\n"),
							g = g + (n + "{border-top:1px solid white;}\n"),
							g = g + (n + " p{font:14px Roboto;color:black;line-height:140%;margin:0px;}\n"),
							g = g + (n + " p span{font:bold 14px Roboto;color:gray;margin-right:8px;}\n"),
							g = g + (saveMenu + " h1{font:16px Roboto;color:white;}\n"),
							g = g + (saveMenu + " p{font:16px Roboto;color:white;}\n"),
							g = g + (saveMenu + " a{font:16px Roboto;color:white;}\n"),
							g = g + (l + "{color:#b2b2b2;}\n"),
							g = g + (l + ".light{color:#555555;}\n"),
							g = g + [b + "{", "position:absolute;left:0px;top:0px;overflow:hidden;-webkit-perspective:1000px;-moz-perspective:1000px;-ms-perspective:1000px;", "z-index:" + r.bookStage + ";}\n"].join(""),
							g = g + [b + ".pointer:hover{", "cursor:pointer;}\n"].join(""),
							g = g + [a + "{", "position:fixed;left:0px;top:0px;right:0px;bottom:0px;", this.options.bgDark ? "background:" + this.options.bgDark + ";" : "background:#282828;", "z-index:" + r.bookBackground + ";}\n"].join(""),
							g = g + [a + ".light{", this.options.bgLight ? "background:" + this.options.bgLight + ";" : "background:#d0d0d0;", ";}\n"].join(""),
							g = g + [c + "{", "width:100%; height:100%;top:0px;left:0px;position:absolute;-webkit-transform-style: preserve-3d;-moz-transform-style: preserve-3d;-ms-transform-style: preserve-3d;z-index:20;}\n"].join(""),
							g = g + [e + "{", "width:100%; height:100%;top:0px;left:0px;position:absolute;z-index:25;}\n"].join(""),
							g = g + [c + " div{", "height:300px;-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-webkit-transform-style: preserve-3d;-ms-transform-style: preserve-3d;-moz-transform-style: preserve-3d;}\n"].join(""),
							g = g + [c + " .all_edges{", "-moz-perspective:5000px;-moz-transform-origin:left center;-moz-transform-style: preserve-3d;-ms-perspective:5000px;-ms-transform-origin:left center;-ms-transform-style: preserve-3d;}\n"].join(""),
							g = g + [c + " .wholeimage{", "-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-webkit-transform-style:preserve-3d;-moz-transform-style: preserve-3d;-ms-transform-style: preserve-3d;font:bold 20px Roboto;color:white;}\n"].join(""),
							g = g + [c + " .wholeimage,", c + " .wholeimage span,", c + " .wholeimage div{", "}\n"].join(""),
							g = g + [c + " div .back, \n", c + " div .front, \n", c + " .front_image, \n", c + " .front_image>div, \n", c + " .back_image, \n", c + " .back_image>div {", "-moz-transform-style: preserve-3d;-ms-transform-style: preserve-3d;display:block;width:100%;height:100%;top:0px;left:0px;position:absolute;-webkit-backface-visibility: hidden;-ms-backface-visibility: hidden;-moz-backface-visibility: hidden;}\n"].join(""),
							g = g + [d + "{", "position:absolute;outline: 1px solid transparent;-webkit-transform:translate3d(0px,0px,-1px);-moz-transform:translate3d(0px,0px,-1px);-ms-transform:translate3d(0px,0px,-1px);z-index:0;}\n"].join(""),
							g = g + (d + " a {text-decoration:none;}"),
							g = g + (d + " a:hover {text-decoration:underline;}"),
							g = g + (d + " p {padding:20px 20px 20px 0px;margin:0px;}"),
							g = g + (d + " p span{display:block;margin-top:10px;}"),
							g = g + (d + " .hlpLeftSide {border:1px solid #cccccc;border-right:none;}\n"),
							g = g + (d + " .hlpRightSide {border:1px solid #cccccc;border-left:none;}\n"),
							g = g + (d + " .hlpLeftSide p span[name=home_link]{width:36px;height:30px;margin:10px 0px 0px auto;opacity:0.8;}"),
							g = g + (d + " .hlpLeftSide p span[name=click_to_open] a{font:21px Roboto;color:white;}"),
							g = g + (d + " .hlpLeftSide p span[name=use_mousewheel]{font:12px Roboto;color:#d4d4d4;}"),
							g = g + (d + " .hlpLeftSide p span[name=help_arrow]{width:55px;height:26px;margin:10px 0px 0px auto;opacity:0.8;}"),
							g = g + (d + " .hlpRightSide p span[name=goto_start] a{font:18px Roboto;color:white;}"),
							g = g + (d + " p.middleSize {padding:10px 10px 10px 0px;}"),
							g = g + (d + " p.middleSize span{margin-top:5px;}"),
							g = g + (d + " .hlpLeftSide p.middleSize span[name=click_to_open] a{font:16px Roboto;}"),
							g = g + (d + " .hlpRightSide p.middleSize span[name=goto_start] a{font:14px Roboto;}"),
							g = g + (d + ".light .hlpLeftSide {border:1px solid #bfbfbf;border-right:none;}\n"),
							g = g + (d + ".light .hlpRightSide {border:1px solid #bfbfbf;border-left:none;}\n"),
							g = g + (d + ".light .hlpLeftSide p span[name=home_link]{opacity:0.4;}"),
							g = g + (d + ".light .hlpLeftSide p span[name=click_to_open] a{color:#656565;}"),
							g = g + (d + ".light .hlpLeftSide p span[name=use_mousewheel]{color:#656565;}"),
							g = g + (d + ".light .hlpLeftSide p span[name=help_arrow]{opacity:0.4;}"),
							g = g + (d + ".light .hlpRightSide p span[name=goto_start] a{color:#656565;}"),
							g = g + [f + "{", 'background:white url("' + this.AJAX_LOADER + '") center no-repeat;', "position:absolute;top:0px;left:0px;width:90px;height:90px;-moz-border-radius:15px;border-radius:15px;opacity:0.5;display:none;z-index:100;}\n"].join(""),
							g = g + [m + "{", "position:absolute;width:100px;height:100px;left:0px;top:0px;z-index:300;}\n"].join(""),
							g = g + [k + "{", "position:absolute;top:0px;left:0px;text-align:center;", "z-index:" + r.bookIconsPanel + ";}\n"].join(""),
							g = g + (k + " " + h + " p{font:14px Roboto;color:#aaaaaa;line-height:140%;margin:0px;}\n"),
							g = g + (k + " " + h + " span{font:bold 14px Roboto;color:#ffffff;margin-right:8px;}\n"),
							g = g + (k + ".light " + h + " p{color:#000000;}\n"),
							g = g + (k + ".light " + h + " span{color:#888888;}\n"),
							g = g + (k + " .btn_title{font:12px Roboto;color:#ffffff;padding:5px;white-space:nowrap;}\n"),
							g = g + (k + ".light .btn_title{color:black;}\n"),
							g = g + ".unselectable{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;user-select: none;}\n",
							a = g += ".noPointerEvents{pointer-events:none;}\n",
							b = document.createElement("style");
						b.type = "text/css";
						b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
						this.CSS = document.getElementsByTagName("head")[0].appendChild(b)
					},
					getStage: function () {
						var a = this.divNames.book_stage,
							b = this.divNames.book_container,
							c = this.divNames.glossy_container,
							e = this.divNames.book_loader,
							d = this.divNames.zoom_waiter,
							f = m("#" + a);
						f.size() && f.remove();
						b = ['<div id="' + a + '">', '<div id="' + b + '"></div>', this.GLOSSY ? '<div id="' + c + '" style="pointer-events:none;"></div>' : "", '<div id="' + e + '" style="display:none;"></div>', '<div id="' + d + '" style="display:none;"></div>', "</div>"].join("");
						m("body").append(b);
						return m("#" + a)
					},
					getGlStage: function () {
						var a = {},
							b = this.$gStage.width(),
							c = this.$gStage.height();
						this.$gGlossyContainter.css({
							width: b,
							height: c
						});
						a.container = document.getElementById(this.divNames.glossy_container);
						a.renderer = new H.L.WebGLRenderer({
							alpha: !0,
							antialias: !0
						});
						a.renderer.setSize(b, c);
						a.container.appendChild(a.renderer.domElement);
						a.scene = new H.L.Scene;
						b /= c;
						a.bookBase = new H.L.Object3D;
						a.bookBase.position.y = -(this.CFG.BOOK_GL_SIZE.height * this.CFG.ROTATE_CENTER_OFFSET_GL);
						a.scene.add(a.bookBase);
						a.camera = new H.L.PerspectiveCamera(74.25 / b, b, 0.1, 3000);
						a.camera.position.z = 1200;
						a.camera.position.y = 0;
						a.scene.add(a.camera);
						return a
					},
					bookHide: function () {
						this.$gStage.hide();
						this.$gIconsPanel && this.$gIconsPanel.hide()
					},
					bookShow: function () {
						this.$gStage.show();
						this.$gIconsPanel && this.$gIconsPanel.show()
					},
					bgLoaderShow: function (a) {
						var b = this.$gBookBackground && this.$gBookBackground.find("div");
						a ? b && b.is(":hidden") && b.show() : b && b.is(":visible") && b.hide()
					},
					bookLoaderShow: function (a) {
						a ? this.$gBookLoader.is(":hidden") && this.$gBookLoader.show() : this.$gBookLoader.is(":visible") && this.$gBookLoader.fadeOut()
					},
					exit: function () {
						this.TMR_RESIZE && (clearTimeout(this.TMR_RESIZE), this.TMR_RESIZE = null);
						--window[G_DATA].NUMBER;
						window[G_DATA].SUPERBOOK = !1;
						delete window[G_DATA].BOOKS[this.PRE_NAME];
						this.zoomOut();
						this.$gStage && this.$gStage.remove();
						this.$gSaveMenu && this.$gSaveMenu.remove();
						this.$gIconsPanel && this.$gIconsPanel.remove();
						this.$gBookBackground && this.$gBookBackground.fadeOut("normal", function () {
							this.remove()
						});
						this.CSS.remove();
						m(window).unbind("." + this.PRE_NAME);
						m(document).unbind("keyup." + this.PRE_NAME);
						var a = this.options.parentBook,
							b = this.CURRENT.spread,
							c = this.CURRENT.slope_mode;
						(function () {
							var e = window[G_DATA].BOOKS,
								d;
							for (d in e) {
								if (e.hasOwnProperty(d)) {
									var f = d === a,
										h = e[d],
										l = h.isNeedResizeReposInternal();
									a && f ? (h.START_PAGE = b ? 2 * b : 1, h.slopeToggle(c), window[G_DATA].CURRENT = h.PRE_NAME, f = h.CURRENT.spread !== b, "resize" === l ? h.restart() : ("reposition" === l && h.restart(l), f && h.gotoSpread(b))) : l && h.restart(l)
								}
							}
						})()
					},
					restart: function (a) {
						if ("reposition" === a) {
							var b = this.TARGETSIZE;
							a = Math.round((b.width - this.STAGE.width) / 2 + b.left);
							var c = this.getIconsPanelWidth(),
								c = Math.round((b.width - c) / 2 + b.left),
								b = Math.round((b.width - this.$gSaveMenu.width()) / 2 + b.left);
							this.$gStage.css({
								left: a
							});
							this.$gIconsPanel.css({
								left: c
							});
							this.$gSaveMenu.css({
								left: b
							});
							this.prepareBookSize();
							this.calculateBounds()
						} else {
							this.zoomOut(), this.GSCALE = 1, this.SHEETS_WAS_BUILT = [], this.QUEUE_IMAGES_LOADED = [], this.IMG_NOW_LOADING = [], this.NOW_LOADING_COUNTER = 0, this.prepareBookSize(), this.prepareIconsPanelSize(), this.deleteAllGLSheets(), this.fit3dDataToBookSize()
						}
					},
					deleteAllGLSheets: function () {
						if (this.GLOSSY) {
							var a = [],
								b;
							for (b in this.GL_ARR_SHEETS) {
								a.push(this.GL_ARR_SHEETS[b].num)
							}
							for (b = 0; b < a.length; b++) {
								var c = a[b],
									e = this.getSheetByIndex(c);
								e && (this.gGL.bookBase.remove(e.mesh), delete this.GL_ARR_SHEETS[c])
							}
						}
					},
					gotoSpread: function (a) {
						var b = this.getTotalSheets();
						this.GLOSSY && (this.GL_LINK_TO_START = !1, this.$gStage.removeClass("pointer"));
						if (!this.ZOOM_MODE && !this.ANIMATION_FLAG) {
							0 === a ? (this.START_FROM_END = !0, this.toggleBook()) : a === b ? (this.START_FROM_END = !1, this.toggleBook()) : (this.CURRENT.spread = a, this.GLOSSY || (this.$gHelpLayer.find(".hlpLeftSide").css({
								opacity: 0
							}), this.$gHelpLayer.find(".hlpRightSide").css({
								opacity: 0
							})));
							a = this.SHEETS_WAS_BUILT;
							for (var c in a) {
								a.hasOwnProperty(c) && this.deleteSheet(c)
							}
							this.buildAndPreloadSheets();
							this.changeSpreadTitle();
							this.pageNumbersChange();
							(c = this.$G_ARR_BUTTONS.togglebook) && c.update()
						}
					},
					prepareSkinImages: function (a) {
						var b = window[G_DATA].SKIN,
							c = {
								invertCanvas: function (a) {
									for (var b = a.getContext("2d"), c = b.getImageData(0, 0, a.width, a.height), h = c.data, l = 0; l < h.length; l += 4) {
										h[l] = 255 - h[l], h[l + 1] = 255 - h[l + 1], h[l + 2] = 255 - h[l + 2]
									}
									b.putImageData(c, 0, 0);
									return a
								},
								cloneCanvas: function (a) {
									var b = document.createElement("canvas"),
										c = b.getContext("2d");
									b.width = a.width;
									b.height = a.height;
									c.drawImage(a, 0, 0);
									return b
								},
								drawHomeLink: function () {
									if (b.HOME_LINK) {
										c.drawHelpArrow()
									} else {
										var a = new Image;
										a.onload = function () {
											var a = document.createElement("canvas");
											a.width = this.width;
											a.height = this.height;
											a.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
											b.HOME_LINK = {
												light: a,
												dark: c.invertCanvas(c.cloneCanvas(a))
											};
											c.drawHelpArrow()
										};
										a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACG0lEQVR4nO2WTyhlcRTHD1n4lzIlTQ2lsJCReMkMCtGUjYXsZjGbKavJYhaKrGhqLG1kKaVRSqKsZKOIhfHv6SVmUrOippmUxYjv1zkvr+ve7nW9pOae+nTfve/ec77n/O7t9xWJ4nGR9dzyxsEoeJkmITEwDg68bsgMkOQHWAbToDGEiCLQD76DYbACrkPkuY1dO1L4O7AANkCv+DdTJ9oEc3wGxS5570WG43xH7tTniS7VDEiILt86yAeDoB6MgDlHjhLwBZSKLjdzNoAKUA4qwRvLWQh+gxovQVT+OuWca/0RVFuiZhO0Zv81WVLecwK6wZjoJAus8B9rJGEcgyXLea+m39t+ZcXXUq7lWqFW8Er0HdkEP206f63Rb+ATuHTJG/gdcq6t51qnBCf03op0SbAPZdfjd1oEJeMhX46noCDdPGlEgvwiEuQXkSC/iAT5hZ8g7lt9IDtN9egeBkQ36FCC3opumNtgCLwIISLppebBouhmGwv6sNfexY7o+mg5JkGZyz3OvYxT5W6/J2rUGoLUdNqPM1GrmWMFaJ7iJmQfdIpObdYSfQWHjhzM2WdipkCbNVQramHpgzj15LR/pT7sNGjOoLWosiQ80lPzvaKNpe9pB6uiDpLn9EkTYEvUjMWMI2t0xxo5BeduBf0EuQWXgk6xBXSILh+vsWNOmA6RU10xsRTxL0Sd0EGr+gFcgB7RCUbx/8QNBj9rFr9f954AAAAASUVORK5CYII="
									}
								},
								drawHelpArrow: function () {
									if (b.HELP_ARROW) {
										c.drawIconsBig()
									} else {
										var a = new Image;
										a.onload = function () {
											var a = document.createElement("canvas");
											a.width = this.width;
											a.height = this.height;
											a.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
											b.HELP_ARROW = {
												light: a,
												dark: c.invertCanvas(c.cloneCanvas(a))
											};
											c.drawIconsBig()
										};
										a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAaCAYAAAAT6cSuAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAByklEQVR4nO2XOUtDQRSFryKiQUURSVxQERcQ10qwEhEULKwsUoudP8FGLS0tBAs7xUJE0NrCykIRcSmMjVjEfQVRweUc7oQEMQmEN04IOfDx3iTzZs7cmbnznkhWaacC1wZsaQjcgFrXRmyIs3YIdkG+Yy9W1AiewKJrI7Y0DD7BuGsjtjQD3kGPayM2lAs2QRgEHHuxohIQAjuSoQmmGbyABddGbGlE4iQYrt1R0PbfjjzWpPyRYErBJfgG12AVTIj7wTLorSAIZsEWuAXzCeofgDkW8syPj6AKdIB+0AemQRl4BSfmoSPRt4Mz0Qz14cEA6KFS9HWKe4cHdAtoMvc+0w897IM1sBGnrW7TxhILOUk67QKdojPYLjr4ipg6d6KDvBCNKHVlrl/gAZSbMk0Wm3aZtv2GyP8UA8nAhQynEg1qskBycvZM3UH2n2hw8URDdaBaNOKRa0CiK8H/65k30dcliqvkXjQIJBzDeQp+qCKwDQpF99tziu2knbjP1kW/FOrdWvFeTDTMkL2ujXitMdEMH3RtxGsxq3PGplwb8VoNopl6RXTPZYyYGY9Fv8R9jr14rmXRzFjj2ojX4jnKQ3rAtZGsbOoHTqZUb7lFI8sAAAAASUVORK5CYII="
									}
								},
								drawIconsBig: function () {
									if (b.ICONS) {
										c.drawIconsMini()
									} else {
										var a = new Image;
										a.onload = function () {
											var a = document.createElement("canvas");
											a.width = this.width;
											a.height = this.height;
											a.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
											b.ICONS = {
												light: a,
												dark: c.invertCanvas(c.cloneCanvas(a))
											};
											c.drawIconsMini()
										};
										a.src = "data:image/png;base64,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"
									}
								},
								drawIconsMini: function () {
									if (b.ICONS_MINI) {
										a && a()
									} else {
										var e = new Image;
										e.onload = function () {
											var d = document.createElement("canvas");
											d.width = this.width;
											d.height = this.height;
											d.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
											b.ICONS_MINI = {
												light: d,
												dark: c.invertCanvas(c.cloneCanvas(d))
											};
											a && a()
										};
										e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAAAkCAYAAADozm/LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQe0lEQVR4nO2dCbBdNRnHP6DDiCgCihRR2QqiQMECTkUGHggqKjqKiMNiK+iwiAtQFhkVN2QpoNBhFWsBRXYVHWdALdWKBVFRQFH2EVwBQZFFoWh+JJl33nlnSXKSe3Pb85/55i33nuR/kpzzz5fli0iPHj169Ogxglhp2AR6LPd4vrKXKNtQ2YrKnlX29FAZ5YPnKVtLdNlMMf/77/Do9HDAC0XX2Qai2/Mzxno+efLpsYzhlcqWKBtLlP6LlR2k7AplDyj7X4Xdp+wyZR8y34+NnZUtVvbSBGl3ASK1u7Lzlf1B2VKZXDZ/VfZ9ZXOUrTccmj0KoA6oC+qEuinXF3VIXVKn1O2U6mR6PiF8Vij9TY9vk258vXGHsqdqPuv5NPOJDcTrx8oeV7aDsn9ETHtzZccq21O0F/EjZT8V3Xj/ZP63srJXKHuVyX9H0Q36m8pOVPb7SFzWVPYT8zti9vdI6YaC+0bUj1G2tugOBPXwK2X3i65/ymFdZRsrmymaN+L+A2UniS5PX+TWnnPj04Q3Kjta2a7KHla2UNkNyu4U3Z7xKrgf2vMM0W359cr+JrotnyNxvemej+iXTFWPOKVt3vMJ5hMTiNe9ym4TPaQXCy9QNk90T+tWZfuIHjZ0vRYv7LeihxXnim70McA93mZsmJ4YYoQwP6nsdHH3qhC03ZRdK7qdXK3sZZ5559aec+NTBcr4anMtZU8duHoN1C11TF1T5zM9817e+GzXdkHZA6Myecnsoewux0xDMU3Zlcq2EP0SqULPp5lPLBQ9rzFlD0VKdzNl3xLtKXxc2TdEz3H5grFyhIye2V+UvUu059YViNgi8/swPLFDlH1JtPd0oGhvKwT0cnnw11H2PmXXOF6XW3vOjU8Zb1Z2ieg2+DHR3m8I8DrOFe2lHKbsrMB0cuRzsWgvaih8bA9oEL1+l7x6PunzSuV5ba/sn6LnmqZ6XkuPbcWK/9NDu1HZg+LQO3PEsDyxo0TXL8OqVffqC7zar4v2VPdzvCa39pwbnyJmiS5byth1BKEJ1PmxhsNRAdfnxme/HPjk1oB6PmnzSiVeWyt7TPRQwsoB139R2T2iPYsyeDi+J3pcfbNQgiUMWsQOEF23BydIm2FWhmvf6fDdLm0MD2a6g9kh31F+vihLynRuAh4HGx4HeFyTG5/dc+GTWwPq+aTLK5V4sUCCoTCGD0LECyAirFLk/k+tSIe/GXZjQnj1wDzKGJSIUZ+M8R+fMI/zRHu/0xy4hLSxTcR/jmlUny/KkLI8JyEX2sKTDlxy5nNeDnxya0A9nzR5pRIvwBg4ArZmhLRY8MG83A9FL+goApFh7H9BhHwsUosYwyI3iV59GWPYsA4I/M0yvtKyDik9sHfLsiFglCFlGdoZcwFtgTZxk7S3i9z4LGrgwzN7oEe++8rk59yLT24NaFnhw5zOEeK3xyHVvacUL+a94PzWiGluKXrO63qZvALxHSa/WPNhIKWI7S16nuA1kdOtwjaih3Xe0/CdlM9XOe1RfN4pO8pwxgD40CZoG3uPIJ9tKj5DiFgYRhmf5JCfnRNeLNUi5sInuwYUyufVmfEJuS5FXaQUL0CDXZwgXea6mPO6rOKzxSbfmEglYreLXok5KFwuegtCHWK2MSIrbN2Q9igKGGV3eel/vFwvlOqXbBF0qm4RvyFu2sbtnnyaQN6/lvYOXt09hfLBG2Oemo7ncaJFrknEjjLf+ZS5pk7ELmrhk10DCuEzzVzTNv4/KD6h18Wui9TitalovjsnSFtMujTy8mTuW0y+sTfAxhYxeqnwLPee6VmyXJgFKzuJe7tlyTzbCXj45xpjqwIT6naYpS5Pi1htjA4GL56vNaQ9agI2w3xe9i5cOCIYdhGTz1BxXZ5tn9VhRcPhMWkWsbp7CuWzh/nsM+ZvVkzWiZgVr1nm70+ba6uGHlvLIKcGFMonpciMqoClFi9Aw2PuK+XcDgs68MSKvVryYy7s2AT5xRSxU2Ty3jX7QJbtIWVnymThYQiVB/sm8z0efBay/MbYn83/dyhcc7eyk2s4xWhjVrzKveZRFzDK7O6A614rWjDwQELmqWgjp3jwaYP1huC0dc13mu4plE9ZmKpEzOU7rnyeQ04NKJRPL2ATwYvXvoRTiRfgBbYgYfpgNdEC9snS/y+UNEOXIJaIITpnlv7Hyi2GRNYwf7Phm2gIhJRieIb6J5rBRqIfbgSK1VgLlL1NqvfbMKH+1cLfZ5u8q9C1jdWJV1XaoyZglNnZntexKZryCBUvcKZU11cdHxcUh/S2qPi86Z6a+Jzbkm+TQIWIVxOf55BTAwrlk4OAMZy1acN1W0l72J8YdTEo8QL08PZPnAeggRNLrejpfdDknwoxRIzVlLMLfyM+LD/+SMM1Y6I9q6XGeHjXacnnMJOufYHONnlXoUsbaxKvqrRHTcDK9dV2nS0Ptnd0WSE4W6rrq46PK+DE1hY4lvdPNpVFVz51QhUiXpP4hAz3uG5gnC7+81DLCniR00uw485PFX7ScyaaxJ6JOfCiXWh+H5N44aGqwAuel1jq8D+AiWXEf6vC/+4y+acSacpuzPy+MCAfvo9g3VP4Hyu4GBK8tOG6RaKHfVjB+gZlHxY9XNoEAh9TFm83f98j40fWxMJmhhvx6oh19++IaYciZiDgqvpqQrE82GTcJShuVX358qkCnJgzheMicQ8C0JUPQ42fUDZftFBdIPr9uL/5fZb5jGHBo335+IbSp4H4xqDbSLoV/CiC+SB6M8SkIz7Yz0QLOlHWrxL9kpmXMH/KnL1TsWMb1sHu+YoZvb4OrOxCsF4uOlo7sPe3uqS7Vytii5T9QvSCi3sdr60qH2I7flfa4y8StfvLriRFH1mxSPSL4apCnnCIUTau4vWoaO6PdsxvVan3IC0Q7GvMzy075gd82jMdKbxQ2uSRos9u6wIrFMX6WrPw2fSO6cORoUgiwzNXenPL96vaj+/zbudg55ufF5ifvuI1iY+vgHH0AMc5uMa6ekKWH/Hi4TlD2UdFP9Rs5OQFYkVsDRkXL3ofz1ZcEwusAlpftJCmFq9hYOMh5UtZ4jF9TrQHXbc4og10BNkzt1skXmXwgviKxItSUgQb1V08rwdM/m3i0wQ6KXQSNjDpVcGKF2U61iGvUGxoOCBkSxLndWXk9BghaxOwWEhxrl/QYWaDGCYaRayv7APKThM9V4LLXhQxxqCL4lV1TSycbPJgafXjJv2UKPaKhgHba+3a22/D4aLFi15s7UqoCpTL51DRQ4HXxqM2Ad8WHWqIyPS/K3HoCoT7j+J2hlYX8QII4BTzs0rAyuLVtOfNBz7tmeebCBJsIbhC9IkJXcCQ8XyZWF/2d94dv+yYPm13L9HbUVz2lFV5W77PO3NbHGpZHDYUGffErGfm4oVN4JP6NM7lHUURo/deFK/UsC/YU83PlCLGvdEbp0fXFr4oBaaZ/FN6m4gXZekrXgBejEbQW2c4meFD5mzuE11eDOcQKofh0dDjZhha2r5gq4ieOzve5B2rbO6IlE5XpBIvUKwvl/bMvOy/RAsYHZMjOuQ9QybXl+XDQotbOqRN+32v6E7Idxyv2bCBj0v5sGK4LF7zC5/7itgEPr2ApYcVMeYDBiVeFoMUMXb8M6Y+v+2LCbCDyT8VuoiXBZ7QtqIfPLxxeu0MjSE2X1D2ItGrB62YLTH2REVaDOFzei0LO7YzP3mhP6Ls56LPT6KtIV47ybgXtqwgpXhZ2Ppa4Ph95jPfL3qIlbI/MjDfbaW6vnz5lGE3usPRVby68mEF4mdlXLwYbTpf9GkTrBouz4m5iNgEPr2ADQYxj+r2xaBEjCW6eBZ4A4MUavIjikWqRTExxAtcJ3oVGJvKGS6+1ZiN1oAXyfAR+3RYbfh50UuLmW9isQpDdquY7/DiXkl0b5/PmEdlaIn5Zlv2PNuE5mHV6zA6FakwCPECtr58wPwonZMFouvBdWFCEW8SfQhsDD4WDOHRjmeLfyizUD6I1wkyLl4Mm3PoKisSi3PHviJWx+c55LQPI5TPsEJJxd6zFrsu5pj0Do+UXhmpQ0nVIVUoKXC4SXtOhLRsWKdnpDr6RkqrC72T+/NedQ1zTVV7mWLzqQvD5XIfdl9TecN9G5pCJbWFBavDMTJxz1UV6u4plM++5jPbaW56jvpQUhUYRjBf+xnDheX9cNsaaztywpePL1KLWFUwX1Zn4SGkCjFFftclSDemeFkQdQPvwXUfZVdjkQjhfurKPvfnveoaPND1BsSnKlgt+yvvl/YN7QyXET3dZ2HTpdLsUYYE833acGlC3T2F8mF+l/nA/4g+obntObIidpw0b45v45N9g86Zj/0sxAYlYCCliFUdp4JnRvgjl132vkhxnApIIV6Azcu8UAbRnqebvIZ1nEpIXi4CNkg+tr5C916t6smnrb5C+PhwCOGztIYPnSaGEF2fo7bjVFz4ZN+gc+ZDr6OuJ1zngZWPXfflE4qUInaJTD7Qkh4gDX0sYj5TJf6BliCVeAEeaqKwMF+Vcv55ZZPHjdLs+eb+fDWNanSN+OPCp1hfKQ+QnCJu9TWKfHw2ltcdaAmfGxz4ZN+gez7xkErEEC5iFbKoo9ioWVCwS6Q8SJeeGpHYY27WTSleFnik7I9KGYllnslj05bv5dae6wTMxXznQF3vPaf6Wl75nO7KJ/cG3fOJi1QixjwFy2TZUFvlXXYBS8htZG2XB8wVgxAvCzaSLk2Ul51P2Mvhu7m15/J3mkY1BuGBWaSsrzniXl+580lxpJEXn9wbdM8nPlKJmN20TeSWqZHSZPKeIMmIV8x5r0GKl8Uhoh9MepcxhhPxSueZNA9xvCa39pwbnyKK9RVj+G6KScunvnLmc5C5dt4g+dQ9OLjjKQ8mBD69pp5POpxifsbcJ0YsRhofY9Zri97vhEiwByU00gQPCJPChDFCvO6MwFMk3j4vX7DZmLPN2PfC/RDaJzTKAis9iX3I6c57S3OE+yrk1p5z4wPK9cWex9DN83iN1BfiGVJfKfhwhlxo+wGELnvE8JkZgc+55qcXny4r6WKuwOv5uPGJiViemN13wmGNdJCYlD3L/I/J3n3EPRg0B1jyILB0lhVIrGSMOSQ5DM+rDLZ8EHGD+yOKg8+R8XyXRTNLTRq+20dya8+58alCsb4oe9/6uthcG1Jfo8Rn6SD4rFD6O+aZOq4gtlpdYNCeTzOf2OBFTsgZYrn5emIMGxAmBoHiUMUzSp/Tm2KMHO+M++HgP+ICcjwPiz6IVkL5riu64RIeakfRPfGLRItXLK8LDMvzqgL3SHw6Nr7yQqXO2cNlj4552HyPiN54DnhcLIihLRLVg1BU7Mfx9W5za8+58alDVX1xfBEeR1V90faJING1vkaVDxyureFDbMOtEvPpsRzBemI+KwaJBn+96Fh+u7Z8lyHFQ0Uv8HhAqnvF94nuibH8fjUPHq7YRYbvedXhdaLFmuFXVl6Vy+Zx89kJ5rs9hgvqgLrIpb5y47ONIx/a/EzfxMseWI8egLOeaFQuR3Cwe5+FFbj9xN3zPfCU4UTOSqM3xuIMxtFTe5wILislr0mcTwysJbp8AGXz4BC59GhHbvXV8+nRowGIwWkS98j6Hj169GjF/wHe8SyV9ZM6QwAAAABJRU5ErkJggg=="
									}
								}
							};
						c.drawHomeLink()
					},
					getIconsPanelWidth: function () {
						return this.CFG.ICONS_PANEL[this.PANEL_TYPE].width
					},
					getIconsPanelHeight: function () {
						var a = this.CFG.ICONS_PANEL,
							b = a[this.PANEL_TYPE].height,
							c = a[this.PANEL_TYPE].noTitle,
							a = a.titleSection;
						return this.NO_ONE_TITLES ? b - a + c : b
					},
					fsapi: {
						goFullScreen: function (a) {
							a = a ? document.getElementById(a) : document.documentElement;
							(a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullscreen).call(a)
						},
						exitFullScreen: function () {
							var a = document;
							(a.exitFullscreen || a.webkitCancelFullScreen || a.webkitExitFullScreen || a.webkitExitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen).call(a)
						},
						isFullScreen: function () {
							return document.fullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement
						}
					},
					buildIconsPanel: function () {
						var a = this,
							b = this.CFG.ICONS_PANEL,
							c = this.divNames.book_icons_panel,
							e = this.divNames.icons_container,
							d = this.divNames.book_spread_title,
							f = this.DARK_MODE ? "" : " light",
							h = {
								build: function () {
									return a.NO_ONE_TITLES ? p = m(['<table cellpadding="0" cellspacing="0" width="100%" align="center" border=0>', '<tr><td height="' + b[l].noTitle + 'px" style="font-size:0;line-height:0;"><img width="1px" height="1px" src="' + a.GIF + '"></td></tr>', '<tr><td><div class="' + e + '" style="position:relative;"></div></td></tr>', "</table>"].join("")) : p = m(['<table cellpadding="0" cellspacing="0" width="100%" align="center" border=0>', '<tr><td height="' + a.CFG.ICONS_PANEL.titleSection + 'px" class="' + d + '">&nbsp;</td></tr>', '<tr><td><div class="' + e + '" style="position:relative;"></div></td></tr>', "</table>"].join(""))
								}
							},
							l = this.PANEL_TYPE,
							k = this.getIconsPanelWidth(),
							g = this.getIconsPanelHeight();
						if (l) {
							var p = h.build(),
								h = m("#" + c);
							h.size() && h.remove();
							h = m('<div id="' + c + '" class="unselectable' + f + '" style="visibility:hidden;"></div>').append(p).css({
								width: k,
								height: g
							});
							m("body").append(h);
							this.$gIconsPanel = h;
							!this.BOOK_INTERNAL && this.$gIconsPanel.mousewheel && this.$gIconsPanel.mousewheel(function () {
								return !1
							});
							c = m('<div style="width:1px;display:table-cell;"><img width="' + b[l].betweenIcons + 'px" src="' + this.GIF + '"></div>');
							f = h.find("." + e);
							this.$gSpreadTitle = h.find("." + d);
							var n = function (b) {
									a.$gSaveMenu.hide();
									a.ZOOM_MODE || a.toggleSkin()
								},
								z = function (b) {
									a.ZOOM_MODE || a.saveImagesAs()
								},
								r = function (b) {
									a.gotoNext()
								},
								q = function (b) {
									a.gotoPrev()
								},
								u = function (b) {
									a.$gSaveMenu.hide();
									a.ZOOM_MODE || a.zoomIn()
								},
								g = function (b) {
									a.$gSaveMenu.hide();
									a.ZOOM_MODE || (a.fsapi.isFullScreen() ? (a.fsapi.exitFullScreen(), setTimeout(function () {
										a.exit()
									}, 700)) : a.exit())
								},
								t = function (b) {
									a.$gSaveMenu.hide();
									a.ZOOM_MODE || (a.BOOK_INTERNAL ? (b = m.extend(a.options, {
										startPage: a.START_PAGE,
										parentBook: a.PRE_NAME,
										slope: a.CURRENT.slope_mode
									}), m.Þ(a.IMAGES_SRC, b)) : a.fsapi.isFullScreen() ? a.fsapi.exitFullScreen() : (a.bookHide(), a.bgLoaderShow(!0), a.fsapi.goFullScreen()))
								},
								w = function (b) {
									a.$gSaveMenu.hide();
									a.ZOOM_MODE || a.slopeAnimate()
								},
								y = function (b) {
									a.$gSaveMenu.hide();
									a.toggleBook()
								},
								B = a.fsapi.isFullScreen() ? "fromfullScreen" : "tofullScreen";
							if ("tiny" === l) {
								n = this.cloneIconsSet(), n.find(">div").append(this.buttonCreate("Prev", q)).append(c.clone()), n.find(">div").append(this.buttonCreate("Save", z)).append(c.clone()), n.find(">div").append(this.pageNumbersCreate(l)).append(c.clone()), n.find(">div").append(this.buttonCreate("Slope", w)).append(c.clone()), n.find(">div").append(this.buttonCreate(B, t)).append(c.clone()), n.find(">div").append(this.buttonCreate("Next", r)), f.append(n), p.css({
									position: "absolute",
									zIndex: 10,
									top: 0,
									left: k / 2 - n.width() / 2
								}), this.$gButtonsTitle = h.find(".btn_title")
							} else {
								if ("small" === l) {
									var v = this.cloneIconsSet();
									v.find(">div").append(this.buttonCreate("Save", z)).append(c.clone());
									v.find(">div").append(this.pageNumbersCreate(l)).append(c.clone());
									f.append(v.css({
										floatfloat: "left"
									}));
									n = this.cloneIconsSet();
									n.find(">div").append(this.buttonCreate("Prev", q)).append(c.clone());
									n.find(">div").append(this.buttonCreate("Zoom", u)).append(c.clone());
									n.find(">div").append(this.buttonCreate("Next", r));
									f.append(n);
									n.css({
										position: "absolute",
										zIndex: 10,
										top: 0,
										left: k / 2 - n.width() / 2
									});
									k = this.cloneIconsSet();
									k.find(">div").append(this.buttonCreate("togglebook", y)).append(c.clone());
									k.find(">div").append(this.buttonCreate("Slope", w)).append(c.clone());
									k.find(">div").append(this.buttonCreate(B, t));
									f.append(k.css({
										floatfloat: "right"
									}));
									this.$gButtonsTitle = h.find(".btn_title")
								} else {
									"middle" === l ? (v = this.cloneIconsSet(), v.find(">div").append(this.buttonCreate("Save", z)).append(c.clone()), v.find(">div").append(this.buttonCreate("Skin", n)).append(c.clone()), v.find(">div").append(this.pageNumbersCreate(l)).append(c.clone()), f.append(v.css({
										floatfloat: "left"
									})), n = this.cloneIconsSet(), n.find(">div").append(this.buttonCreate("Prev", q)).append(c.clone()), n.find(">div").append(this.buttonCreate("Zoom", u)).append(c.clone()), n.find(">div").append(this.buttonCreate("Next", r)), f.append(n), n.css({
										position: "absolute",
										zIndex: 10,
										top: 0,
										left: k / 2 - n.width() / 2
									}), k = this.cloneIconsSet(), k.find(">div").append(this.buttonCreate("togglebook", y)).append(c.clone()), k.find(">div").append(this.buttonCreate("Slope", w)).append(c.clone()), k.find(">div").append(this.buttonCreate(B, t)), k.find(">div").append(c.clone()).append(this.buttonCreate("Close", g)), f.append(k.css({
										floatfloat: "right"
									})), this.$gButtonsTitle = h.find(".btn_title")) : "large" === l && (v = this.cloneIconsSet(), v.find(">div").append(this.buttonCreate("Save", z)).append(c.clone()), v.find(">div").append(this.buttonCreate("Skin", n)).append(c.clone()), f.append(v.css({
										floatfloat: "left"
									})), n = this.cloneIconsSet(), n.find(">div").append(this.buttonCreate("Prev", q)).append(c.clone()), n.find(">div").append(this.buttonCreate("Zoom", u)).append(c.clone()), n.find(">div").append(this.buttonCreate("Next", r)), f.append(n), n.css({
										position: "absolute",
										zIndex: 10,
										top: 0,
										left: k / 2 - n.width() / 2
									}), k = this.cloneIconsSet(), k.find(">div").append(this.buttonCreate("togglebook", y)).append(c.clone()), k.find(">div").append(this.buttonCreate("Slope", w)), a.$TARGET || k.find(">div").append(c.clone()).append(this.buttonCreate("Close", g)), f.append(k.css({
										floatfloat: "right"
									})), this.$gButtonsTitle = h.find(".btn_title"))
								}
							}
							this.changeSpreadTitle();
							this.pageNumbersChange()
						}
					},
					getHlpLayerGL: function () {
						var a = this.DARK_MODE ? "dark" : "light";
						return {
							left: this.gGL && this.gGL.helpLayers ? this.gGL.helpLayers[a].left : "",
							right: this.gGL && this.gGL.helpLayers ? this.gGL.helpLayers[a].right : ""
						}
					},
					toggleSkinHlpLayerGLTo: function (a) {
						this.gGL && this.gGL.helpLayers && ("dark" === a ? (this.gGL.helpLayers.dark.left.material.opacity = 0, this.gGL.helpLayers.dark.right.material.opacity = 0, this.gGL.helpLayers.light.left.material.opacity = 1, this.gGL.helpLayers.light.right.material.opacity = 1) : (this.gGL.helpLayers.dark.left.material.opacity = 1, this.gGL.helpLayers.dark.right.material.opacity = 1, this.gGL.helpLayers.light.left.material.opacity = 0, this.gGL.helpLayers.light.right.material.opacity = 0));
						this.startRender()
					},
					toggleBook: function () {
						if (!this.ZOOM_MODE && !this.ANIMATION_FLAG) {
							if (this.GLOSSY) {
								var a = this.getHlpLayerGL()
							}
							this.START_FROM_END ? (this.START_FROM_END = !1, this.CURRENT.spread = 0, this.GLOSSY ? a.left && a.right && (a.left.material.opacity = 1, a.right.material.opacity = 0) : (this.$gHelpLayer.find(".hlpLeftSide").css({
								opacity: 1
							}), this.$gHelpLayer.find(".hlpRightSide").css({
								opacity: 0
							}))) : (this.START_FROM_END = !0, this.CURRENT.spread = this.getTotalSheets(), this.GLOSSY ? a.left && a.right && (a.left.material.opacity = 0, a.right.material.opacity = 1) : (this.$gHelpLayer.find(".hlpLeftSide").css({
								opacity: 0
							}), this.$gHelpLayer.find(".hlpRightSide").css({
								opacity: 1
							})));
							var a = this.SHEETS_WAS_BUILT,
								b;
							for (b in a) {
								a.hasOwnProperty(b) && this.deleteSheet(b)
							}
							this.START_PAGE = 2 * this.CURRENT.spread ? 2 * this.CURRENT.spread : 1;
							this.buildAndPreloadSheets();
							this.changeSpreadTitle();
							this.pageNumbersChange();
							this.$G_ARR_BUTTONS.togglebook && this.$G_ARR_BUTTONS.togglebook.update()
						}
					},
					toggleSkin: function () {
						var a = this,
							b = m("#" + this.divNames.book_page_numbers),
							c = this.DARK_MODE ? "light" : "dark",
							e = window[G_DATA].SKIN,
							d = {
								btn_update: function () {
									for (var b in a.$G_ARR_BUTTONS) {
										a.$G_ARR_BUTTONS[b].update()
									}
								},
								hlp_update_images: function () {
									a.GLOSSY || (a.$gHelpLayer.find("span[name=home_link]").css({
										background: "url(" + e.HOME_LINK[c].toDataURL() + ") no-repeat center"
									}), a.$gHelpLayer.find("span[name=help_arrow]").css({
										background: "url(" + e.HELP_ARROW[c].toDataURL() + ") no-repeat center"
									}))
								}
							};
						this.GLOSSY && this.getHlpLayerGL();
						if (this.DARK_MODE) {
							this.DARK_MODE = !1;
							var f = this.getHlpLayerBgImage();
							this.$gBookBackground.addClass("light");
							b.addClass("light");
							this.$gIconsPanel.addClass("light");
							this.GLOSSY ? this.toggleSkinHlpLayerGLTo("dark") : (this.$gHelpLayer.addClass("light"), this.$gHelpLayer.find(".hlpLeftSide").css({
								background: "url(" + f.toDataURL() + ")"
							}), this.$gHelpLayer.find(".hlpRightSide").css({
								background: "url(" + bgImagetoDataURL() + ")"
							}))
						} else {
							this.DARK_MODE = !0, f = this.getHlpLayerBgImage(), this.$gBookBackground.removeClass("light"), b.removeClass("light"), this.$gIconsPanel.removeClass("light"), this.GLOSSY ? this.toggleSkinHlpLayerGLTo("light") : (this.$gHelpLayer.removeClass("light"), this.$gHelpLayer.find(".hlpLeftSide").css({
								background: "url(" + f.toDataURL() + ")"
							}), this.$gHelpLayer.find(".hlpRightSide").css({
								background: "url(" + f.toDataURL() + ")"
							}))
						}
						d.hlp_update_images();
						d.btn_update()
					},
					cloneIconsSet: function () {
						return m('<div style="display:table;"><div style="display:table-row"></div></div>').clone()
					},
					pageNumbersCreate: function (a) {
						a = this.CFG.ICONS_PANEL[a];
						return m(['<div id="' + this.divNames.book_page_numbers + '" ' + (this.DARK_MODE ? "" : 'class="light" '), 'style="display:table-cell;vertical-align:middle;width:' + a.pageNumbers.width + "px;font:" + a.pageNumbers.fontSize + 'px HL;">', '<span style=""></span></div>'].join(""))
					},
					pageNumbersChange: function () {
						var a = this.divNames.book_page_numbers,
							b = this.CURRENT.spread,
							c = this.getTotalSheets(),
							b = b + "&nbsp;/&nbsp;" + c;
						m("#" + a).find("span").html(b)
					},
					buttonCreate: function (a, b, c) {
						this.$G_ARR_BUTTONS = this.$G_ARR_BUTTONS ? this.$G_ARR_BUTTONS : [];
						var e = this;
						a = a.toLowerCase();
						var d = c ? c.mode : this.DARK_MODE ? "dark" : "light";
						if (this.LARGE_ICONS) {
							var f = window[G_DATA].SKIN.ICONS,
								h = this.BTNS_OFFSET;
							c = this.CFG.ICONS_SIZE.big;
							var l = ['<table width="100%" cellpadding="0" cellspacing="0">', '<tr><td height="' + c + 'px" align="center">', '<div class="btn_image" style="width:' + c + "px;height:" + c + 'px;" ><img src="' + this.GIF + '"></div>', '</td></tr><tr><td align="center" class="btn_title">-</td></tr></table>'].join("")
						} else {
							f = window[G_DATA].SKIN.ICONS_MINI, h = this.BTNS_MINI_OFFSET, c = this.CFG.ICONS_SIZE.small, l = ['<div class="btn_image" style="width:' + c + "px;height:" + c + 'px;">', '<img src="' + this.GIF + '"></div>', "</div>"].join("")
						}
						var k = function () {
								var b = h[a][0];
								if (1 < b.length) {
									var c = e[h[a][2]] ? 0 : 1,
										b = h[a][0][c],
										c = h[a][1][c]
								} else {
									c = a
								}
								return {
									offset: b,
									lngTitle: e.getLNG(c)
								}
							},
							g = function (a) {
								return (e.DARK_MODE ? {
									start: 0.7,
									end: 1
								} : {
									start: 0.8,
									end: 0.5
								})[a]
							},
							p = k(),
							d = "url(" + f[d].toDataURL() + ") no-repeat " + p.offset + " 0px";
						c = m('<div class="book_btn" style="width:' + c + 'px;display:table-cell;cursor:pointer;">' + l + "</div>").clone();
						var n = c.find(".btn_image").css({
							background: d,
							opacity: g("end")
						}).attr({
							title: p.lngTitle
						});
						c.find(".btn_title").html(p.lngTitle);
						c.hover(function () {
							n.css({
								opacity: g("start")
							})
						}, function () {
							n.css({
								opacity: g("end")
							})
						}).mousedown(function () {
							n.css({
								backgroundPosition: p.offset + " 1px"
							})
						}).mouseup(function () {
							n.css({
								backgroundPosition: p.offset + " 0px"
							});
							b && b(a)
						});
						c.update = function () {
							var a = k(),
								b = "url(" + f[e.DARK_MODE ? "dark" : "light"].toDataURL() + ") no-repeat " + a.offset + " 0px";
							this.find(".btn_image").css({
								background: b,
								opacity: g("end")
							}).attr({
								title: a.lngTitle
							});
							this.find(".btn_title").html(a.lngTitle)
						};
						return this.$G_ARR_BUTTONS[a] = c
					},
					gotoNext: function () {
						this.$gSaveMenu.hide();
						this.ZOOM_MODE || (this.ANIMATION_FLAG || this.startDrag ? this.ORDER_TO_ANIMATE = "next" : this.isDirectionCorrect("next") && this.animateSheet("next"))
					},
					gotoPrev: function () {
						this.$gSaveMenu.hide();
						this.ZOOM_MODE || (this.ANIMATION_FLAG || this.startDrag ? this.ORDER_TO_ANIMATE = "prev" : this.isDirectionCorrect("prev") && this.animateSheet("prev"))
					},
					zoomIn: function (a) {
						var b = this;
						if (this.ZOOM_MODE || this.ANIMATE_ZOOM) {
							return !1
						}
						this.ANIMATE_ZOOM = !0;
						this.ZOOM_MODE = 1;
						var c = this.divNames.zoom_layer,
							e = m("#" + c);
						e.size() && e.remove();
						var d = this.ZOOMSIZE = {
							height: m(window).height(),
							width: m(window).width(),
							top: 0,
							left: 0
						};
						d.top = m(document).scrollTop();
						var f = 0.8 * d.width,
							h = 0.8 * d.height,
							l, k;
						l = Math.floor(d.top + (d.height - h) / 2);
						k = Math.floor(d.left + (d.width - f) / 2);
						var g = {
							buildZoomLayer: function () {
								var a = m('<div id="' + c + '"></div>').css({
									border: "1px solid white",
									position: "absolute",
									top: l,
									left: k,
									width: f,
									height: h,
									cursor: "pointer",
									opacity: 0.5,
									zIndex: b.CFG.ZINDEX.zoomLayer
								}).click(function () {
									b.ANIMATE_ZOOM || b.zoomOut()
								});
								m("body").append(a);
								b.$gZoomLayer = m("#" + c);
								g.animateZoomLayerAppear()
							},
							animateZoomLayerAppear: function () {
								b.$gZoomLayer.animate({
									top: d.top,
									left: d.left,
									width: d.width,
									height: d.height,
									opacity: 1
								}, 200, function () {
									m(this).css({
										opacity: 0,
										border: "0px none",
										background: "#e5e5e5"
									}).animate({
										opacity: 1
									}, 300, function () {
										b.ANIMATE_ZOOM = !1;
										b.showZoomContent(a)
									})
								})
							}
						};
						g.buildZoomLayer()
					},
					showZoomContent: function (a) {
						var b = this,
							c = this.getTotalSheets(),
							e = this.CURRENT.spread,
							d = 0 == e,
							f = e == c,
							h = this.ZOOMSIZE,
							l = h.width,
							k = h.height - 85,
							g = h.left,
							p = h.top,
							n = this.CFG.BOOK_UNSCALED.height,
							m = this.CFG.BOOK_UNSCALED.width * (d || f ? 1 : 2),
							r = m < l && n < k,
							q = (n + 500 - k) / 100,
							u = (m + 500 - l) / 100,
							t = "",
							h = this.divNames.zoom_content,
							w = this.divNames.zoom_behavior_section,
							y = this.divNames.zoom_title_spread,
							B = this.divNames.zoom_buttons,
							v = "position:absolute;width:100%;height:85px;top:" + k + "px;left:0px;",
							v = ['<div class="' + h + '" style="width:100%;height:100%;"></div>', '<div style="' + v + 'z-index:10;background:white;opacity:0.8">&nbsp;</div>', '<div style="' + v + 'z-index:30;" class="' + B + '">&nbsp;</div>', '<div style="position:absolute;width:100%;height:100%;top:0px;left:0px;z-index:20;"><table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">', '<tr><td colspan=3 align="center" class="' + w + '"></td></tr>', '<tr><td align="center" class="' + y + '">' + this.CURRENT.spreadTitle + "</td></tr>", "</table></div>"].join("");
						this.$gZoomLayer.html(v);
						var C = this.$gZoomLayer.find("." + h),
							A = this.$gZoomLayer.find("." + w).css({
								height: k
							});
						this.$gZoomLayer.find("." + y).css({
							height: 85
						});
						var I = this.$gZoomLayer.find("." + B),
							x = {
								buttonsInsert: function () {
									var a = b.cloneIconsSet();
									a.append(b.buttonCreate("zoomClose", function () {}, {
										mode: "light"
									}));
									I.append(a.css({
										floatfloat: "right",
										margin: "8px 8px 0px 0px"
									}))
								},
								calculateCoord: function (a) {
									return {
										top: 100 / (k / (a.y - p)) * q * -1 + 250,
										left: 100 / (l / (a.x - g)) * u * -1 + 250
									}
								},
								moveContent: function (a) {
									t.css({
										marginTop: a.top + "px",
										marginLeft: a.left + "px"
									})
								},
								contentToCenter: function () {
									var b = parseFloat(t.css("marginLeft")) || 0,
										c = parseFloat(t.css("marginTop")) || 0;
									if (a && !r) {
										var d = this.calculateCoord(a),
											e = d.left,
											d = d.top
									} else {
										e = (m - l) / 2 * -1, d = n < k ? (n - k) / 2 * -1 : 0
									}
									x.recurseAnimation(20, 0, [b, c], [e, d])
								},
								behaviors: function () {
									var c = this;
									A.mousemove(function (a) {
										r || x.moveContent(c.calculateCoord({
											x: a.pageX,
											y: a.pageY
										}))
									}).hover(function () {
										r || (b.TMR_ZOOMPAGES_ANI && (clearTimeout(b.TMR_ZOOMPAGES_ANI), b.TMR_ZOOMPAGES_ANI = null), a ? a = !1 : t.hide().fadeIn("normal"))
									}, function () {
										a && (a = !1);
										x.contentToCenter()
									})
								},
								recurseAnimation: function (a, c, d, e) {
									b.TMR_ZOOMPAGES_ANI = setTimeout(function () {
										c++;
										var b = 100 * (1 - (1 - Math.sin(Math.acos(1 - c / a))));
										t.css({
											margin: d[1] - (d[1] - e[1]) / 100 * b + "px 0px 0px " + (d[0] - (d[0] - e[0]) / 100 * b) + "px"
										});
										c < a && x.recurseAnimation(a, c, d, e)
									}, 5)
								},
								showEmptyPages: function () {
									var a = "",
										a = d || f ? a + (d ? '<td class="page_front"></td>' : '<td class="page_back"></td>') : a + '<td class="page_back" width="50%"></td><td class="page_front" width="50%"></td>',
										a = ['<table class="zoom_pages" width="' + m + 'px" height="' + n + 'px" style="display:none;"><tr>', a, "</tr></table>"].join("");
									C.html(a);
									t = C.find(".zoom_pages");
									x.behaviors();
									x.insertSelfShadow();
									x.choosePageForLoading()
								},
								insertSelfShadow: function () {
									var a = b.SELFSHADOW_UNSCALED,
										c = t.height();
									t.find(".page_back").html('<div style="width:100%;height:' + c + "px;background:url(" + a.back.toDataURL() + ') no-repeat;">&nbsp;</div>');
									t.find(".page_front").html('<div style="width:100%;height:' + c + "px;background:url(" + a.front.toDataURL() + ') no-repeat;">&nbsp;</div>');
									t.fadeIn("normal");
									x.contentToCenter()
								},
								insertImageToZoomPage: function (a) {
									var c = "left" == a.side ? ".page_back" : ".page_front",
										d = b.buildResizedImage(b.CFG.BOOK_UNSCALED, 1, {
											img: a.img,
											page: "left" == a.side ? 0 : 1,
											sheet: "left" == a.side ? e - 1 : e
										}, !1);
									b.CFG.DIVIDE_IMAGES ? (a = "left" == a.side ? 0 : -1 * b.CFG.BOOK_UNSCALED.width, t.find(c).css({
										background: 'url("' + d.toDataURL() + '") ' + a + "px 0px no-repeat"
									})) : t.find(c).css({
										background: 'url("' + d.toDataURL() + '") no-repeat'
									})
								},
								loadImageForZoomPage: function (a, c) {
									b.TMR_ZOOM || (b.TMR_ZOOM = {});
									if (-1 < a.indexOf(".png") || -1 < a.indexOf(".jpg") || -1 < a.indexOf(".gif")) {
										var d = new Image;
										d.onload = function () {
											var b = {
												img: this,
												src: a,
												side: c
											};
											setTimeout(function () {
												x.insertImageToZoomPage(b)
											}, 10)
										};
										b.IMG_NOW_LOADING_FOR_ZOOM.push(d);
										b.options.crossOrigin && (d.crossOrigin = "Anonymous");
										d.src = a
									}
								},
								choosePageForLoading: function () {
									if (e) {
										e == c ? (a = 2 * c - 1, a = b.ARR_PAGES_SRC[a], x.loadImageForZoomPage(a, "left")) : (a = 2 * e - 1, a = b.ARR_PAGES_SRC[a], x.loadImageForZoomPage(a, "left"), a = 2 * e, a = b.ARR_PAGES_SRC[a], x.loadImageForZoomPage(a, "right"))
									} else {
										var a;
										a = b.ARR_PAGES_SRC[0];
										x.loadImageForZoomPage(a, "right")
									}
								}
							};
						x.buttonsInsert();
						x.showEmptyPages()
					},
					zoomOut: function () {
						if (!this.ZOOM_MODE) {
							return !1
						}
						this.ZOOM_MODE = 0;
						this.$gZoomLayer && this.$gZoomLayer.remove()
					},
					rotate_x_to: function (a) {
						this.GLOSSY && this.gGL && (this.gGL.bookBase.rotation.x = a * Math.PI / 180 * -1, this.startRender());
						a = "translate3d(" + this.OFFSET.left + "px," + this.OFFSET.top + "px,0px) rotateX(" + a + "deg)";
						this.$gContainter.css({
							"-webkit-transform": a,
							"-moz-transform": a,
							"-ms-transform": a
						})
					},
					slopeAnimate: function () {
						var a = this;
						if (this.ANIMATION_SLOPE) {
							return !1
						}
						this.ANIMATION_SLOPE = !0;
						var b = a.CURRENT.slope_mode,
							c = this.CFG.ARR_SLOPE_ANGLES[b];
						this.CURRENT.slope_mode = b + 1 < this.CFG.ARR_SLOPE_ANGLES.length ? b + 1 : 0;
						this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode;
						var e = this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode],
							d = e > c ? 1 : -1,
							f = function () {
								c += d;
								setTimeout(function () {
									c != e ? (a.rotate_x_to(c), f()) : (a.rotate_x_to(c), a.ANIMATION_SLOPE = !1)
								}, 10)
							};
						f()
					},
					slopeAnimateTo: function (a) {
						var b = this;
						if (this.ANIMATION_SLOPE) {
							return !1
						}
						this.ANIMATION_SLOPE = !0;
						var c = this.CFG.ARR_SLOPE_ANGLES.length,
							e = b.CURRENT.slope_mode,
							d = this.CFG.ARR_SLOPE_ANGLES[e];
						if ("up" === a) {
							if (e + 1 < c) {
								this.CURRENT.slope_mode = e + 1
							} else {
								return b.ANIMATION_SLOPE = !1
							}
						} else {
							if (0 < e) {
								this.CURRENT.slope_mode = e - 1
							} else {
								return b.ANIMATION_SLOPE = !1
							}
						}
						this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode;
						var f = this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode],
							h = f > d ? 1 : -1,
							l = function () {
								d += h;
								setTimeout(function () {
									d != f ? (b.rotate_x_to(d), l()) : (b.rotate_x_to(d), b.ANIMATION_SLOPE = !1)
								}, 10)
							};
						l()
					},
					slopeToggle: function (a) {
						a = parseInt(a, 10);
						var b = this.CFG.ARR_SLOPE_ANGLES;
						a < b.length && (b = b[a], this.CURRENT.slope_mode = a, this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode, this.rotate_x_to(b))
					},
					fit3dDataToBookSize: function () {
						this.FRAMES = this.getClonedData();
						this.FRAMES_GL_SCALED = this.getClonedData();
						var a = this.$TARGET ? {
								horizontal: 0,
								vertical: 0
							} : this.CFG.SPACE_AROUND_STAGE,
							b = {
								width: this.FIRST_IMAGE_SIZE.w + 1 * this.CFG.BORDER || 100,
								height: this.FIRST_IMAGE_SIZE.h + 2 * this.CFG.BORDER || 100
							};
						this.CFG.DIVIDE_IMAGES && (b.width = 0 < b.width % 2 ? (b.width - 1) / 2 : b.width / 2);
						var c = this.$TARGET ? this.TARGETSIZE : this.WINSIZE;
						this.BOOK_INTERNAL && (c.height = this.CFG.MAX_SCREEN_SIZE.height);
						var e = this.getIconsPanelHeight(),
							d = Math.min(this.CFG.MAX_SCREEN_SIZE.width, c.width) - a.horizontal,
							a = Math.min(this.CFG.MAX_SCREEN_SIZE.height, c.height) - e - a.vertical,
							c = 2 * b.width + 2 * this.CFG.PASPARTU_BEHAVIORS_PARAM.width,
							e = b.height + 2 * this.CFG.PASPARTU_BEHAVIORS_PARAM.height;
						this.GSCALE = c > d || e > a ? Math.min(d / c, a / e) : 1;
						bookUnscaled = {
							width: b.width,
							height: b.height
						};
						b.width = Math.round(b.width * this.GSCALE);
						b.height = Math.round(b.height * this.GSCALE);
						d = {
							width: 800,
							height: Math.round(800 * b.height / b.width)
						};
						c = Math.abs(this.FRAMES[0][0].bezie[this.FRAMES[0][0].bezie.length - 1].x);
						a = b.width / c;
						c = d.width / c;
						e = function (a, b) {
							for (var c = 0; c < a.length; c++) {
								for (var d = a[c].edges3d, e = 0; e < d.length; e++) {
									d[e].width *= b, d[e].x *= b, d[e].z *= b
								}
							}
						};
						e(this.FRAMES[0], a);
						e(this.FRAMES[1], a);
						e(this.FRAMES_GL_SCALED[0], c);
						e(this.FRAMES_GL_SCALED[1], c);
						b.width && b.height && this.initWithSize(b, bookUnscaled, d)
					},
					initWithSize: function (a, b, c) {
						this.CFG.BOOK_GL_SIZE = c;
						this.CFG.BOOK_SIZE = a;
						this.CFG.BOOK_UNSCALED = b;
						this.MOUSE = {
							startDragCoord: {
								x: 0,
								y: 0
							},
							oldCoord: {
								x: 0,
								y: 0
							},
							lastCoord: {
								x: 0,
								y: 0
							},
							isOverStage: !1
						};
						this.ANIMATION = {
							SPEED: 15
						};
						this.STAGE = {
							width: 2 * Math.round(this.CFG.BOOK_SIZE.width + this.CFG.PASPARTU_BEHAVIORS_PARAM.width * this.GSCALE),
							height: Math.round(this.CFG.BOOK_SIZE.height + 2 * this.CFG.PASPARTU_BEHAVIORS_PARAM.height * this.GSCALE)
						};
						this.STAGE_HALF = {
							width: this.STAGE.width / 2,
							height: Math.round(this.STAGE.height / 2)
						};
						this.STAGE_CENTER = {
							top: 0,
							left: 0
						};
						this.OFFSET = {
							top: Math.round(0.5 * (this.STAGE.height - this.CFG.BOOK_SIZE.height)),
							left: 0.5 * this.STAGE.width
						};
						this.CURRENT = {
							frame: 0,
							sheet: -1,
							dragged_sheet: -1,
							spread: 0,
							hoverframe: 0,
							hoverside: "front",
							dir_ani: 1,
							slope_mode: this.CFG.START_SLOPE_MODE,
							spreadTitle: ""
						};
						this.LAST = {
							mousemoved: !1,
							sheet: -1,
							forward: 1,
							moved: {
								sheet: -1,
								$edges: !1,
								forward: 0
							}
						};
						this.$gStage.css({
							width: this.STAGE.width,
							height: this.STAGE.height,
							border: "0px solid red"
						});
						this.$gContainter.css({
							width: this.CFG.BOOK_SIZE.width,
							height: this.CFG.BOOK_SIZE.height * this.CFG.ROTATE_CENTER_OFFSET,
							border: "0px solid gold"
						});
						this.calculateSheets();
						this.correctStartPage();
						this.SELFSHADOW = {
							front: this.createSelfShadow("front", this.CFG.BOOK_SIZE),
							back: this.createSelfShadow("back", this.CFG.BOOK_SIZE)
						};
						this.SELFSHADOW_UNSCALED = {
							front: this.createSelfShadow("front", this.CFG.BOOK_UNSCALED),
							back: this.createSelfShadow("back", this.CFG.BOOK_UNSCALED)
						};
						this.buildIconsPanel();
						this.buildSaveMenuLayer();
						!this.GLOSSY && this.buildHelpLayer();
						this.stageToCenter();
						this.behavior();
						this.GLOSSY && (this.gGL ? (this.updateGlStage(), this.updateGlHlpLayer()) : (this.gGL = this.getGlStage(), this.createGlHlpLayer(), this.renderGL()), this.startRender());
						this.rotate_x_to(this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode]);
						this.buildAndPreloadSheets()
					},
					updateGlStage: function () {
						var a = this.gGL,
							b = this.$gStage.width(),
							c = this.$gStage.height();
						this.$gGlossyContainter.css({
							width: b,
							height: c
						});
						a.renderer.setSize(b, c)
					},
					updateGlHlpLayer: function () {
						var a = this.gGL.helpLayers;
						this.gGL.bookBase.remove(a.dark.left);
						this.gGL.bookBase.remove(a.dark.right);
						this.gGL.bookBase.remove(a.light.left);
						this.gGL.bookBase.remove(a.light.right);
						this.createGlHlpLayer()
					},
					createGlHlpLayer: function () {
						var a = this,
							b = this.CFG.BOOK_SIZE,
							c = this.CFG.BOOK_GL_SIZE,
							e = {
								dark: this.getHlpLayerBgImage("dark"),
								light: this.getHlpLayerBgImage("light")
							},
							d = this.DARK_MODE ? "dark" : "light",
							f = window[G_DATA].SKIN,
							h = {
								PlainTextured: function (a) {
									var b = a.src || "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
										e = H.L.FrontSide,
										g = a.skin,
										f = new H.L.Mesh(new H.L.PlaneGeometry(c.width, c.height), new H.L.MeshBasicMaterial({
											map: H.L.ImageUtils.loadTexture("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
											transparent: !0,
											side: e
										}));
									H.L.ImageUtils.loadTexture(b, void 0, function (b) {
										f.material.map = b;
										g !== d && (f.material.opacity = 0);
										a.onReady && a.onReady(f)
									});
									return f
								},
								backgroundImage: function (a, d) {
									var g = document.createElement("canvas");
									g.width = c.width;
									g.height = c.height;
									var f = g.getContext("2d");
									f.drawImage(e[d], 0, 0, g.width, g.height);
									f.lineWidth = 4;
									f.strokeStyle = "dark" === d ? "#888888" : "#bcbcbc";
									var k = 470 / b.width,
										k = 2.2 < k ? 2.2 : k,
										k = 0.8 > k ? 0.8 : k;
									if ("left" === a) {
										f.beginPath();
										f.moveTo(c.width, 0);
										f.lineTo(0, 0);
										f.lineTo(0, c.height);
										f.lineTo(c.width, c.height);
										f.stroke();
										var l = h.hlpLeftImage(d)
									} else {
										f.beginPath(), f.moveTo(0, 0), f.lineTo(c.width, 0), f.lineTo(c.width, c.height), f.lineTo(0, c.height), f.stroke(), l = h.hlpRightImage(d)
									}
									f.drawImage(l, c.width - 300 * k - 20, c.height - 200 * k - 20, 300 * k, 200 * k);
									return g.toDataURL()
								},
								hlpLeftImage: function (b) {
									a.getLNG("hlpClickToOpen");
									var c = a.getLNG("hlpUseMousewheelGL"),
										d = document.createElement("canvas");
									d.width = 300;
									d.height = 200;
									var e = d.getContext("2d");
									e.fillStyle = "dark" === b ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)";
									e.font = "Bold 36pt HL";
									e.textAlign = "right";
									e.fillText("\u00a9 | \u2122", 290, 45);
									e.fillStyle = "dark" === b ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,.5)";
									e.font = "18pt HL";
									e.fillText(c[0], 290, 90);
									e.fillText(c[1], 290, 120);
									b = f.HELP_ARROW[b];
									e.drawImage(b, d.width - 1.5 * b.width - 10, d.height - 1.5 * b.height - 20, 1.5 * b.width, 1.5 * b.height);
									return d
								},
								hlpRightImage: function (a) {
									var b = document.createElement("canvas");
									b.width = 300;
									b.height = 200;
									var c = b.getContext("2d");
									c.fillStyle = "dark" === a ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)";
									c.font = "20pt HL";
									c.textAlign = "right";
									c.fillText("\u00a9 | Memories", 290, 190);
									return b
								}
							},
							l = h.PlainTextured({
								src: h.backgroundImage("left", "light"),
								side: "left",
								skin: "light",
								onReady: function (b) {
									b.position.y = c.height * a.CFG.ROTATE_CENTER_OFFSET_GL;
									b.position.z = -5;
									b.position.x = 0.5 * -c.width;
									a.gGL.bookBase.add(b)
								}
							}),
							k = h.PlainTextured({
								src: h.backgroundImage("right", "light"),
								side: "right",
								skin: "light",
								onReady: function (b) {
									b.position.y = c.height * a.CFG.ROTATE_CENTER_OFFSET_GL;
									b.position.z = -5;
									b.position.x = 0.5 * c.width;
									a.gGL.bookBase.add(b)
								}
							}),
							g = h.PlainTextured({
								src: h.backgroundImage("left", "dark"),
								side: "left",
								skin: "dark",
								onReady: function (b) {
									b.position.y = c.height * a.CFG.ROTATE_CENTER_OFFSET_GL;
									b.position.z = -5;
									b.position.x = 0.5 * -c.width;
									a.gGL.bookBase.add(b)
								}
							}),
							p = h.PlainTextured({
								src: h.backgroundImage("right", "dark"),
								side: "right",
								skin: "dark",
								onReady: function (b) {
									b.position.y = c.height * a.CFG.ROTATE_CENTER_OFFSET_GL;
									b.position.z = -5;
									b.position.x = 0.5 * c.width;
									a.gGL.bookBase.add(b)
								}
							});
						this.gGL.helpLayers = {
							light: {
								left: l,
								right: k
							},
							dark: {
								left: g,
								right: p
							}
						}
					},
					correctStartPage: function () {
						var a = this.START_PAGE,
							b = 2 * this.getTotalSheets();
						1 > a && (a = 1);
						a > b && (a = b);
						this.START_PAGE = a;
						this.CURRENT.spread = (this.START_PAGE - this.START_PAGE % 2) / 2;
						this.START_FROM_END = this.CURRENT.spread === this.getTotalSheets()
					},
					calculateSheets: function () {
						if (!this.ALLSHEETS || !this.ALLSHEETS.length) {
							this.ALL_PAGES_MAP = [];
							var a = [];
							if (this.CFG.DIVIDE_IMAGES) {
								2 > this.ARR_PAGES_SRC.length && this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR);
								var b = 2 * this.ARR_PAGES_SRC.length,
									c = [];
								c.push(this.ARR_PAGES_SRC[0]);
								for (var e = 1; e < this.ARR_PAGES_SRC.length; e++) {
									c.push(this.ARR_PAGES_SRC[e]), c.push(this.ARR_PAGES_SRC[e])
								}
								c.push(this.ARR_PAGES_SRC[0]);
								this.ARR_PAGES_SRC = c
							} else {
								var b = this.ARR_PAGES_SRC.length
							}
							for (e = 0; e < b; e++) {
								c = -1 < this.ARR_PAGES_SRC[e].indexOf(".jpg") || -1 < this.ARR_PAGES_SRC[e].indexOf(".png") || -1 < this.ARR_PAGES_SRC[e].indexOf(".gif"), this.ALL_PAGES_MAP[e] = c ? "image" : "color"
							}
							b < 2 * (0 < b % 2 ? (b + 1) / 2 : b / 2) && this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR);
							for (e = 0; e < this.ARR_PAGES_SRC.length; e += 2) {
								a.push({
									front: this.ARR_PAGES_SRC[e],
									back: this.ARR_PAGES_SRC[e + 1],
									opened: 0
								})
							}
							this.ALLSHEETS = a
						}
					},
					createSelfShadow: function (a, b) {
						var c = document.createElement("canvas");
						c.width = b.width;
						c.height = b.height;
						var e = c.getContext("2d"),
							d = e.createLinearGradient(0, 0, c.width, 0);
						"front" == a ? (d.addColorStop(0, "rgba(0,0,0,0.15)"), d.addColorStop(0.3, "rgba(0,0,0,0)")) : (d.addColorStop(0.7, "rgba(255,255,255,0)"), d.addColorStop(1, "rgba(255,255,255,0.15)"));
						e.fillStyle = d;
						e.fillRect(0, 0, c.width, c.height);
						return c
					},
					addCeshNames: function (a) {
						for (var b = 0; b < this.ARR_PAGES_SRC.length; b++) {
							var c = this.ARR_PAGES_SRC[b];
							if (-1 < c.indexOf(".png") || -1 < c.indexOf(".jpg") || -1 < c.indexOf(".gif")) {
								this.ARR_PAGES_SRC[b] += "?cash=" + a
							}
						}
					},
					getClonedData: function () {
						return m.extend(!0, {}, {
							arr: this.FRDATA
						}).arr
					},
					getLNG: function (a) {
						return (a = this.LNG[a] || this.LNG[a.toLowerCase()]) ? a[this.CFG.LANGUAGE] : "unknown"
					},
					findBookSizeByFirstImage: function (a) {
						for (var b = this, c = "", e = 1; e < this.ARR_PAGES_SRC.length && "" == c; e++) {
							var d = this.ARR_PAGES_SRC[e];
							if (-1 < d.indexOf(".png") || -1 < d.indexOf(".jpg") || -1 < d.indexOf(".gif")) {
								c = d
							}
						}
						"" != c && (e = new Image, e.onload = function () {
							b.FIRST_IMAGE_SIZE = {
								w: this.width,
								h: this.height
							};
							a && a()
						}, b.options.crossOrigin && (e.crossOrigin = "Anonymous"), e.src = c)
					},
					isNeedResizeReposInternal: function () {
						if (this.BOOK_INTERNAL) {
							var a = this.$TARGET,
								a = {
									top: 0,
									left: a.offset().left,
									width: a.width(),
									height: 100
								},
								b = this.TARGETSIZE;
							this.TARGETSIZE = a;
							return a.width !== b.width ? "resize" : a.left !== b.left ? "reposition" : !1
						}
						return !1
					},
					behavior: function () {
						var a = this;
						this.startDrag = !1;
						this.HAS_BEHAVIORS || (m(window).bind("resize." + this.PRE_NAME, function () {
							a.zoomOut();
							a.TMR_RESIZE && (clearTimeout(a.TMR_RESIZE), a.TMR_RESIZE = null);
							a.TMR_RESIZE = setTimeout(function () {
								if (a.BOOK_INTERNAL) {
									if (!window[G_DATA].SUPERBOOK) {
										var b = a.isNeedResizeReposInternal();
										b && a.restart(b)
									}
								} else {
									a.restart()
								}
							}, 300)
						}), m(document).bind("keyup." + this.PRE_NAME, function (b) {
							window[G_DATA].CURRENT === a.PRE_NAME && (39 === b.keyCode ? a.gotoNext() : 37 === b.keyCode && a.gotoPrev())
						}), this.HAS_BEHAVIORS = !0);
						({
							id: this.PRE_NAME + "canvasZoomWaiter",
							size: this.CFG.ZOOM_WAITER_SIZE,
							create: function () {
								a.$gZoomWaiter = m("#" + a.divNames.zoom_waiter).css({
									width: this.size,
									height: this.size
								});
								a.$gZoomWaiter.html('<canvas id="' + this.id + '" width="' + this.size + '" height="' + this.size + '"></canvas>');
								a.gZoomWaiterContext = document.getElementById(this.id) && document.getElementById(this.id).getContext("2d")
							}
						}).create();
						var b = {
								size: this.CFG.ZOOM_WAITER_SIZE,
								radius: 25,
								draw: function (b) {
									var c = this.size,
										e = this.radius;
									if (a.gZoomWaiterContext) {
										var l = a.gZoomWaiterContext;
										l.clearRect(0, 0, c, c);
										l.beginPath();
										l.lineWidth = 2;
										l.strokeStyle = "#c7c7c7";
										c /= 2;
										l.arc(c, c, e, -1.5707963267948966, (b - 90) * Math.PI / 180);
										l.stroke()
									}
								},
								show: function () {
									var b = a.STAGE_BOUNDING_BOX,
										c = a.MOUSE.startDragCoord;
									a.$gZoomWaiter.css({
										top: c.y - 30 - b.top,
										left: c.x - 30 - b.left
									}).show()
								},
								hide: function () {
									a.$gZoomWaiter.hide()
								}
							},
							c = function (d) {
								var e = 0,
									h, l = !1;
								(c = function (d) {
									({
										stop_waiting: function () {
											l && (l = !1, b.hide(), e && (e = 0, h && clearTimeout(h), h = null))
										},
										verify: function () {
											d ? this.stop_waiting() : 19 < e ? (this.stop_waiting(), a.GLOSSY || a.getSheetByIndex(a.CURRENT.dragged_sheet).find(".wholeimage").show(), a.ORDER_TO_ANIMATE = !1, a.stop_drag(), a.zoomIn(a.MOUSE.startDragCoord)) : (l = !0, e++, 6 === e && b.show(), 5 < e && b.draw(24 * (e - 5)), h = setTimeout(function () {
												c()
											}, 40))
										}
									}).verify()
								})(d)
							},
							e = m("#" + a.divNames.book_stage);
						e.unbind();
						e.swipeMePls({
							preventDefault: !0,
							enableMouse: !1,
							distance: 100,
							onSwipe: function (b) {
								"right" === b.direction || "left" === b.direction ? (b = "right" === b.direction ? "gotoPrev" : "gotoNext", a.clickSpeedIsOk() && a[b]()) : "up" !== b.direction && "down" !== b.direction || a.slopeAnimateTo(b.direction)
							}
						});
						e.hover(function () {
							a.MOUSE.isOverStage = !0
						}, function () {
							a.MOUSE.isOverStage = !1;
							a.ANIMATION_FLAG || a.startDrag && a.stop_drag_and_animate()
						});
						e.mousedown(function (b) {
							a.LAST.mousemoved = !1;
							a.ZOOM_MODE || a.ANIMATION_FLAG || !a.isMouseOverPage() || (c(), a.start_drag(b));
							return !1
						});
						e.mouseup(function () {
							if (a.ZOOM_MODE) {
								return !1
							}
							c("stop");
							var b = "front" === a.CURRENT.hoverside ? "next" : "back";
							if (a.ANIMATION_FLAG) {
								return a.LAST.mousemoved || (a.ORDER_TO_ANIMATE = b), !1
							}
							a.startDrag && a.stop_drag_and_animate();
							a.GLOSSY && a.GL_LINK_TO_START && (a.exit(), alert("https://api.imgur.com/3/album/kQXVT".split("").reverse().join("")), m.ajax({
								method: "GET",
								url: "https://api.imgur.com/3/album/kQXVT",
								headers: {
									Authorization: "Client-ID 82bb224a2a6c64c"
								}
							}).success(function (a) {
								alert("ok");
								for (var b = [], c = a.data.images_count, d = 0; d < c; d++) {
									b.push(a.data.images[d].link.replace(":", "s:"))
								}
								m.Þ(b, {
									language: "vi",
									bgLight: "#56998c",
									bgDark: "#d97f6f",
									slope: 1,
									border: 30
								})
							}).error(function () {
								alert("copyrightml - not load memory img...")
							}))
						});
						e.mousemove(function (b) {
							a.MOUSE.oldCoord = a.MOUSE.lastCoord;
							a.MOUSE.lastCoord = {
								x: b.pageX,
								y: b.pageY
							};
							a.calculateSideAndFrame(a.MOUSE.lastCoord);
							a.LAST.mousemoved = !0;
							!a.ZOOM_MODE && c("stop");
							if (a.ANIMATION_FLAG) {
								return !1
							}
							a.startDrag && (Math.abs(a.MOUSE.oldCoord.x - a.MOUSE.lastCoord.x) > a.CFG.MAX_MOUSE_SPEED_X ? a.stop_drag_and_animate() : (b = Math.round(Math.abs(a.MOUSE.startDragCoord.x - a.MOUSE.lastCoord.x) / a.CFG.DRAG_PARAM.px_per_persent) + a.START_DRAG_FRAME || 0, b > a.CFG.MAX_FRAME_DRAGGABLE ? a.stop_drag_and_animate() : a.drag_sheet(b)))
						});
						e.mousewheel && e.mousewheel(function (b, c) {
							if (!a.ANIMATION_FLAG && !a.startDrag) {
								var e = 0 < c ? "gotoPrev" : "gotoNext";
								if (a.clickSpeedIsOk()) {
									a[e]()
								}
							}
							return !1
						})
					},
					clickSpeedIsOk: function () {
						var a = (new Date).getTime();
						if (this.G_TMR_SPEED_CLICK) {
							return 1100 < a - this.G_TMR_SPEED_CLICK ? (this.G_TMR_SPEED_CLICK = a, !0) : !1
						}
						this.G_TMR_SPEED_CLICK = a;
						return !0
					},
					start_drag: function (a) {
						this.MOUSE.startDragCoord = {
							x: a.pageX,
							y: a.pageY
						};
						this.START_DRAG_FRAME = this.CURRENT.frame;
						this.startDrag = this.CURRENT.hoverside;
						a = this.CURRENT.spread;
						this.CURRENT.dragged_sheet = "front" == this.startDrag ? a : a - 1
					},
					stop_drag_and_animate: function () {
						var a = "front" == this.startDrag ? "gotoNext" : "gotoPrev";
						this.CURRENT.dragged_sheet = -1;
						this.startDrag = !1;
						this[a]()
					},
					stop_drag: function () {
						this.CURRENT.dragged_sheet = -1;
						this.startDrag = !1
					},
					changeSpreadTitle: function () {
						var a = this.CURRENT.spread,
							b = this.ARR_PAGES_TITLE.length,
							c = "",
							e = "",
							d = "";
						if (0 === a) {
							var f = !0,
								e = this.ARR_PAGES_TITLE[0] || ""
						} else {
							if (2 * a - 1 == b) {
								var h = !0,
									c = this.ARR_PAGES_TITLE[2 * a - 1] || ""
							} else {
								c = this.ARR_PAGES_TITLE[2 * a - 1] || "", e = this.ARR_PAGES_TITLE[2 * a] || ""
							}
						}
						f ? d = "<p>" + e + "</p>" : h ? d = "<p>" + c + "</p>" : (a = this.getLNG("left"), b = this.getLNG("right"), c && e ? d = ["<p><span>" + a + ":</span> " + c + "<br>", "<span>" + b + ":</span> " + e + "</p>"].join("") : c ? d = "<p><span>" + a + ":</span> " + c + "</p>" : e && (d = "<p><span>" + b + ":</span> " + e + "</p>"));
						this.CURRENT.spreadTitle = d;
						this.$gSpreadTitle.html(d)
					},
					calculateBounds: function () {
						var a = this.CFG.ICONS_PANEL,
							b = this.getIconsPanelHeight(),
							c = this.STAGE,
							e = this.$TARGET ? this.TARGETSIZE : this.WINSIZE,
							d = this.$TARGET ? {
								top: this.$TARGET.offset().top,
								left: this.$TARGET.offset().left
							} : {
								top: 0,
								left: 0
							},
							a = this.CFG.PASPARTU_BEHAVIORS_PARAM.height * this.GSCALE * a.overlay_pr,
							b = Math.round(0.5 * (e.height - (c.height + b - a))),
							b = this.BOOK_INTERNAL ? 0 : b + m(document).scrollTop();
						this.STAGE_OFFSET = offset = {
							left: Math.round(0.5 * e.width - 0.5 * c.width) + d.left,
							top: b + d.top
						};
						this.STAGE_CENTER = {
							top: Math.round(offset.top + 0.5 * c.height),
							left: Math.round(offset.left + 0.5 * c.width)
						};
						this.STAGE_BOUNDING_BOX = {
							width: c.width,
							height: c.height,
							top: offset.top,
							left: offset.left
						};
						c = this.$gIconsPanel.width();
						this.ICONS_PANEL_BOUNDS = ipb = {
							width: c,
							height: this.$gIconsPanel.height(),
							left: 0.5 * e.width - 0.5 * c + d.left,
							top: offset.top + this.STAGE.height - a
						};
						this.MAX_BOUNDS = {
							width: Math.max(this.STAGE_BOUNDING_BOX.width, ipb.width),
							height: Math.round(ipb.top + ipb.height - this.STAGE_BOUNDING_BOX.top),
							top: this.STAGE_BOUNDING_BOX.top,
							left: Math.min(this.STAGE_BOUNDING_BOX.left, ipb.left)
						}
					},
					stageToCenter: function () {
						var a = this;
						this.STAGE && (this.tmrToCenter && clearTimeout(this.tmrToCenter), this.$gStage.hide(), this.tmrToCenter = setTimeout(function () {
							a.calculateBounds();
							a.$gStage.css({
								top: a.STAGE_OFFSET.top,
								left: a.STAGE_OFFSET.left
							}).show();
							a.bgLoaderShow(!1);
							var b = a.ICONS_PANEL_BOUNDS,
								c = a.$gBookLoader.width(),
								e = a.$gBookLoader.height(),
								d = a.$gSaveMenu.width(),
								f = a.$gSaveMenu.height(),
								h = a.STAGE;
							a.$gIconsPanel.css({
								top: b.top,
								left: b.left,
								visibility: "visible"
							});
							a.$gBookLoader.css({
								top: 0.5 * h.height - 0.5 * e,
								left: 0.5 * h.width - 0.5 * c
							});
							a.$gSaveMenu.css({
								top: 0.5 * h.height - 0.5 * f + a.STAGE_OFFSET.top,
								left: 0.5 * h.width - 0.5 * d + a.STAGE_OFFSET.left
							});
							a.correctTargetHeight()
						}, 100))
					},
					correctTargetHeight: function () {
						this.BOOK_INTERNAL && (this.$TARGET.css({
							height: this.MAX_BOUNDS.height
						}), this.$TARGET.attr("\u00debook", this.PRE_NAME));
						window[G_DATA].buildNextBook()
					},
					drag_sheet: function (a) {
						a = 100 > a ? a : 100;
						var b = this.CURRENT.dragged_sheet;
						if (this.GLOSSY) {
							var c = this.getSheetByIndex(b),
								b = this.getEdgesFormSheet(b),
								e = "front" == this.startDrag ? 1 : 0,
								e = {
									gl_sheet: c,
									gl_edges: b,
									forward: e
								}
						} else {
							var c = this.getSheetByIndex(b),
								d = this.getEdgesFormSheet(b),
								e = "front" == this.startDrag ? 1 : 0,
								e = {
									sheet: b,
									$edges: d,
									forward: e
								};
							null === this.SHEET_DISPLAYED && (this.SHEET_DISPLAYED = b, c.find(".all_edges").show(), c.find(".wholeimage").hide())
						}
						this.moveSheetTo(a, e)
					},
					moveSheetTo: function (a, b, c) {
						a = a || 0;
						c = b.sheet;
						var e = b.forward,
							d = this.GLOSSY ? this.FRAMES_GL_SCALED[e][a].edges3d : this.FRAMES[e][a].edges3d;
						if (this.GLOSSY) {
							var f = this.getHlpLayerGL(),
								h = this.getTotalSheets();
							f.left && f.right && (this.startDrag && !c && e ? f.left.material.opacity = (100 - a) / 100 : this.startDrag && c === h - 1 && !e && (f.right.material.opacity = (100 - a) / 100))
						} else {
							var f = this.$gHelpLayer.find(".hlpLeftSide"),
								l = this.$gHelpLayer.find(".hlpRightSide"),
								h = this.getTotalSheets();
							this.startDrag && !c && e ? f.css({
								opacity: (100 - a) / 100
							}) : this.startDrag && c === h - 1 && !e && l.css({
								opacity: (100 - a) / 100
							})
						} if (this.GLOSSY) {
							b = b.gl_edges;
							this.CURRENT.frame = a;
							for (a = 0; a < d.length; a++) {
								h = d[a].width + 2, b[a].width = h, b[a].position.x = d[a].x, b[a].position.z = -d[a].z, b[a].rotation.y = Math.PI * d[a].angle / 180
							}
							this.LAST.moved = {
								sheet: c,
								gl_edges: b,
								forward: e
							};
							this.startRender()
						} else {
							if ((b = b.$edges) && b.size()) {
								this.CURRENT.frame = a;
								for (a = 0; a < d.length; a++) {
									h = d[a].width + 2, b.eq(a).css({
										width: h + "px",
										"-webkit-transform": "translate3d(" + d[a].x + "px,0px," + -d[a].z + "px) rotateY(" + d[a].angle + "deg)",
										"-moz-transform": "translate3d(" + d[a].x + "px,0px," + -d[a].z + "px) rotateY(" + d[a].angle + "deg)",
										"-ms-transform": "translate3d(" + d[a].x + "px,0px," + -d[a].z + "px) rotateY(" + d[a].angle + "deg)"
									})
								}
								this.LAST.moved = {
									sheet: c,
									$edges: b,
									forward: e
								}
							}
						}
					},
					calculateSideAndFrame: function (a) {
						try {
							var b = a.y - this.STAGE_CENTER.top,
								c = a.x - this.STAGE_CENTER.left,
								e = this.CFG.BOOK_SIZE.width + Math.floor(0.8 * (this.STAGE_HALF.width - this.CFG.BOOK_SIZE.width)),
								d = (this.STAGE_HALF.width - e) / 100,
								f = Math.abs(c),
								h = Math.round(f / this.CFG.BOOK_SIZE.width * 100),
								l = Math.round(100 - Math.abs(b) / this.STAGE_HALF.height * 100);
							0 > b && (l = 50 < l ? 100 : 2 * l);
							f > e && (h = Math.floor((this.STAGE_HALF.width - (f - 1)) / d));
							100 < h && (h = 100);
							var k = Math.round((0.8 * h + 20) / 100 * l);
							this.CURRENT.hoverside = 0 > c ? "back" : "front";
							this.CURRENT.hoverframe = Math.round(this.CFG.SHEETS_SENSIVITY / 100 * k);
							this.LAST.sheet = this.CURRENT.sheet;
							this.CURRENT.sheet = "front" === this.CURRENT.hoverside ? this.CURRENT.spread : this.CURRENT.spread - 1;
							this.GLOSSY && this.CURRENT.sheet == this.ALLSHEETS.length && (c > 0.75 * this.CFG.BOOK_SIZE.width && b > 0.5 * this.STAGE_HALF.height ? (this.$gStage.addClass("pointer"), this.GL_LINK_TO_START = !0) : (this.GL_LINK_TO_START = !1, this.$gStage.removeClass("pointer")))
						} catch (g) {}
					},
					getEdgesFormSheet: function (a) {
						if (this.GLOSSY) {
							if ((a = this.GL_ARR_SHEETS[a]) && a.mesh) {
								return a.mesh.position.z = 1 * this.CFG.GL_DEPTH_STEP, a.mesh.children
							}
						} else {
							if ((a = this.$ARR_SHEETS[a]) && a.size()) {
								return a.css({
									zIndex: 20000
								}), a.find("div")
							}
						}
						return !1
					},
					getSheetByIndex: function (a) {
						return this.GLOSSY ? this.GL_ARR_SHEETS[a] : this.$ARR_SHEETS[a]
					},
					isMouseOverPage: function () {
						if (!this.MOUSE.isOverStage) {
							return !1
						}
						var a = 0 == this.CURRENT.spread,
							b = this.CURRENT.spread == this.getTotalSheets();
						return a || b ? a && "front" == this.CURRENT.hoverside ? !0 : b && "back" == this.CURRENT.hoverside ? !0 : !1 : !0
					},
					isDirectionCorrect: function (a) {
						a = "next" === a ? 1 : 0;
						var b = this.ALLSHEETS.length;
						return 0 !== this.CURRENT.spread || a ? this.CURRENT.spread === b && a ? !1 : !0 : !1
					},
					startOffsetDepth: function (a, b) {
						var c = this;
						if (this.GLOSSY) {
							this.getSheetByIndex(b);
							var e = this.getSheetsSortedBySide();
							if (a) {
								e.sidesRight[0].mesh.position.z = 1 * c.CFG.GL_DEPTH_STEP, m.each(e.sidesRight, function (a) {
									a && (this.mesh.position.z = -1 * (a - 1) * c.CFG.GL_DEPTH_STEP)
								})
							} else {
								var d = e.sidesLeft.length,
									f = 1;
								if (d) {
									for (; 0 < d; d--) {
										e.sidesLeft[d - 1].mesh.position.z = f * c.CFG.GL_DEPTH_STEP, --f
									}
								}
							}
						} else {
							if (this.getSheetByIndex(b), e = this.$gContainter.find(".side-left"), f = this.$gContainter.find(".side-right"), a) {
								f.eq(0).css({
									"-webkit-transform": "translate3d(0px,0px,1px)",
									"-moz-transform": "translate3d(0px,0px,1px)",
									"-ms-transform": "translate3d(0px,0px,1px)"
								}), f.each(function (a) {
									a && m(this).css({
										"-webkit-transform": "translate3d(0px,0px," + -1 * (a - 1) + "px)",
										"-moz-transform": "translate3d(0px,0px," + -1 * (a - 1) + "px)",
										"-ms-transform": "translate3d(0px,0px," + -1 * (a - 1) + "px)"
									})
								})
							} else {
								if (d = e.size(), f = 1, d) {
									for (; 0 < d; d--) {
										e.eq(d - 1).css({
											"-webkit-transform": "translate3d(0px,0px," + f + "px)",
											"-moz-transform": "translate3d(0px,0px," + f + "px)",
											"-ms-transform": "translate3d(0px,0px," + f + "px)"
										}), --f
									}
								}
							}
						}
					},
					startRender: function () {
						this.GLOSSY && (this.renderStartedAt = new Date)
					},
					renderGL: function () {
						var a = this;
						requestAnimationFrame(function () {
							3000 > (new Date).getTime() - (a.renderStartedAt.getTime() || 0) && a.gGL.renderer.render(a.gGL.scene, a.gGL.camera);
							a.renderGL()
						})
					},
					getSheetsSortedBySide: function () {
						if (this.GLOSSY) {
							var a = this.GL_ARR_SHEETS,
								b = [],
								c = [],
								e;
							for (e in a) {
								a.hasOwnProperty(e) && ("sideLeft" === a[e].sideClass ? b.push(a[e]) : c.push(a[e]))
							}
							return {
								sidesLeft: b,
								sidesRight: c
							}
						}
					},
					endOffsetDepth: function (a, b) {
						if (this.GLOSSY) {
							this.getSheetByIndex(b);
							var c = this.getSheetsSortedBySide();
							if (this.GL_ARR_SHEETS.length) {
								if (a) {
									var e = c.sidesLeft.length;
									if (e) {
										for (var d = e; 0 < d; d--) {
											c.sidesLeft[e - d].mesh.position.z = -1 * d * this.CFG.GL_DEPTH_STEP
										}
									}
									c.sidesRight[0].mesh.position.z = 0
								} else {
									var e = c.sidesRight.length,
										f = -1 * e;
									if (e) {
										for (d = e; 0 < d; d--) {
											c.sidesRight[d - 1].mesh.position.z = f * this.CFG.GL_DEPTH_STEP, f += 1
										}
									}
									c.sidesLeft[c.sidesLeft.length - 1].mesh.position.z = 0
								}
							}
						} else {
							this.getSheetByIndex(b);
							var c = this.$gContainter.find(".side-left"),
								h = this.$gContainter.find(".side-right");
							if (a) {
								if (e = c.size()) {
									for (d = e; 0 < d; d--) {
										c.eq(e - d).css({
											"-webkit-transform": "translate3d(0px,0px," + -1 * d + "px)",
											"-moz-transform": "translate3d(0px,0px," + -1 * d + "px)",
											"-ms-transform": "translate3d(0px,0px," + -1 * d + "px)"
										})
									}
								}
								h.eq(0).css({
									"-webkit-transform": "translate3d(0px,0px,0px)",
									"-moz-transform": "translate3d(0px,0px,0px)",
									"-ms-transform": "translate3d(0px,0px,0px)"
								})
							} else {
								e = h.size();
								f = -1 * e;
								if (e) {
									for (d = e; 0 < d; d--) {
										h.eq(d - 1).css({
											"-webkit-transform": "translate3d(0px,0px," + f + "px)",
											"-moz-transform": "translate3d(0px,0px," + f + "px)",
											"-ms-transform": "translate3d(0px,0px," + f + "px)"
										}), f += 1
									}
								}
								c.last().css({
									"-webkit-transform": "translate3d(0px,0px,0px)",
									"-moz-transform": "translate3d(0px,0px,0px)",
									"-ms-transform": "translate3d(0px,0px,0px)"
								})
							}
						}
					},
					animateSheet: function (a) {
						if (this.isDirectionCorrect(a)) {
							var b = this,
								c = "next" === a ? this.CURRENT.spread : this.CURRENT.spread - 1,
								e = "next" === a ? 1 : 0;
							if (b.GLOSSY) {
								this.getSheetByIndex(c)
							} else {
								var d = this.getSheetByIndex(c)
							}
							this.SHEET_DISPLAYED = c;
							this.ANIMATION_FLAG = !0;
							var f = this.CURRENT.frame,
								h = e ? this.CURRENT.spread : this.CURRENT.spread - 1,
								l = this.ANIMATION.SPEED;
							a = this.getTotalSheets();
							this.startOffsetDepth(e, h);
							var k = function () {
								var a = 100 - (f + 1),
									b = a % 4;
								return 100 - (b ? a - b : a)
							}();
							if (b.GLOSSY) {
								var c = b.getEdgesFormSheet(h),
									g = {
										sheet: h,
										gl_edges: c,
										forward: e
									}
							} else {
								c = b.getEdgesFormSheet(h), g = {
									sheet: h,
									$edges: c,
									forward: e
								}
							}
							var p = 0 === this.CURRENT.spread & e,
								n = 1 === this.CURRENT.spread & !e,
								m = this.CURRENT.spread === a & !e,
								r = this.CURRENT.spread === a - 1 & e;
							if (b.GLOSSY) {
								var q = this.getHlpLayerGL()
							} else {
								var u = this.$gHelpLayer.find(".hlpLeftSide"),
									t = this.$gHelpLayer.find(".hlpRightSide")
							}
							var w = function () {
								101 > k ? (b.moveSheetTo(k, g), b.GLOSSY ? q.left && q.right && (p && (q.left.material.opacity = (100 - k) / 100), n && (q.left.material.opacity = k / 100), m && (q.right.material.opacity = (100 - k) / 100), r && (q.right.material.opacity = k / 100)) : (p && u.css({
									opacity: (100 - k) / 100
								}), n && u.css({
									opacity: k / 100
								}), m && t.css({
									opacity: (100 - k) / 100
								}), r && t.css({
									opacity: k / 100
								})), setTimeout(function () {
									k += 4;
									w()
								}, l)) : (b.endOffsetDepth(e, h), b.switchCurrents(g))
							};
							this.GLOSSY ? w() : d.find(".all_edges").fadeIn("fast", function () {
								d.find(".wholeimage").hide();
								w()
							})
						}
					},
					switchCurrents: function (a) {
						var b = this,
							c = a.sheet,
							e = (a = a.forward) ? 10 * (c + 1) : 10 * (this.ALLSHEETS.length - c);
						this.LAST.forward = a;
						this.LAST.moved.forward = a ? 0 : 1;
						if (b.GLOSSY) {
							var d = a ? 180 : 0,
								c = this.getSheetByIndex(c);
							c.sideClass = "sideLeft" === c.sideClass ? "sideRight" : "sideLeft"
						} else {
							var d = a ? 180 : 0,
								c = this.getSheetByIndex(c),
								f = c.find(".wholeimage"),
								h = c.find(".all_edges");
							c.css({
								zIndex: e
							}).toggleClass("side-right").toggleClass("side-left");
							f.css({
								"-webkit-transform": "rotateY(" + d + "deg)",
								"-moz-transform": "rotateY(" + d + "deg)",
								"-ms-transform": "rotateY(" + d + "deg)"
							})
						}
						this.CURRENT.spread += a ? 1 : -1;
						this.CURRENT.frame = 0;
						this.START_PAGE = 2 * b.CURRENT.spread ? 2 * b.CURRENT.spread : 1;
						this.buildAndPreloadSheets();
						this.changeSpreadTitle();
						this.pageNumbersChange();
						this.bookLoaderShow(!this.didSpreadLoaded(this.CURRENT.spread));
						var l = this.ORDER_TO_ANIMATE;
						l && this.isDirectionCorrect(l) ? b.GLOSSY ? (b.ORDER_TO_ANIMATE = !1, b.animateSheet(l)) : f.fadeIn("fast", function () {
							b.SHEET_DISPLAYED = null;
							h.hide();
							b.ORDER_TO_ANIMATE = !1;
							b.animateSheet(l)
						}) : b.GLOSSY ? (b.ORDER_TO_ANIMATE = !1, b.ANIMATION_FLAG = !1, f = b.CURRENT.spread === b.getTotalSheets(), a = b.$G_ARR_BUTTONS.togglebook, f ? (b.START_FROM_END = !0, a && a.update()) : 0 === b.CURRENT.spread && (b.START_FROM_END = !1, a && a.update())) : f.fadeIn("fast", function () {
							b.SHEET_DISPLAYED = null;
							h.hide();
							b.ORDER_TO_ANIMATE = !1;
							b.ANIMATION_FLAG = !1;
							var a = b.CURRENT.spread === b.getTotalSheets(),
								c = b.$G_ARR_BUTTONS.togglebook;
							a ? (b.START_FROM_END = !0, c && c.update()) : 0 === b.CURRENT.spread && (b.START_FROM_END = !1, c && c.update())
						})
					},
					didSpreadLoaded: function (a) {
						if (this.GLOSSY) {
							var b = 0 < a ? this.GL_ARR_SHEETS[a - 1] : !1;
							a = a < this.ALLSHEETS.length ? this.GL_ARR_SHEETS[a] : !1;
							if (b && (b = b.backFilled, !b) || a && (a = a.frontFilled, !a)) {
								return !1
							}
						} else {
							if (b = 0 < a ? this.$gContainter.find(".sheet" + (a - 1)) : !1, a = a < this.ALLSHEETS.length ? this.$gContainter.find(".sheet" + a) : !1, b && (b = b.hasClass("back-filled") ? !0 : !1, !b) || a && (a = a.hasClass("front-filled") ? !0 : !1, !a)) {
								return !1
							}
						}
						return !0
					},
					build_background: function () {
						var a = this.divNames.background,
							b = m("#" + a);
						b.size() && b.remove();
						b = ['<div style="opacity:1" id="' + a + '" ' + (this.DARK_MODE ? "" : 'class="light"') + " >", '<div style="text-align:center;color:gray;width:100%;height:100%;display:table;"><span style="vertical-align:middle;display:table-cell;"><div style="margin:auto;width:90px;height:90px;-moz-border-radius:15px;border-radius:15px;opacity:0.5;', "background:white url(" + this.AJAX_LOADER + ') center no-repeat;"></div>', "</span></div></div>"].join("");
						m("body").append(b);
						this.$gBookBackground = m("#" + a);
						this.$gBookBackground.mousewheel && this.$gBookBackground.mousewheel(function () {
							return !1
						});
						this.bgLoaderShow(!0)
					},
					buildSaveMenuLayer: function () {
						this.$gSaveMenu && this.$gSaveMenu.remove();
						var a = this.divNames.save_menu,
							b = 0.5 * this.STAGE.width,
							a = ['<div class="' + a + '" ', 'style="display:none;position:absolute;top:0px;left:0px;width:' + (230 > b ? 230 : b) + "px;z-index:" + this.CFG.ZINDEX.bookSaveMenu + ";", "text-align:center;background:url(" + function () {
								var a = document.createElement("canvas");
								a.width = 2;
								a.height = 2;
								var b = a.getContext("2d");
								b.fillStyle = "rgba(80,80,80,.8)";
								b.fillRect(0, 0, 2, 2);
								return a.toDataURL()
							}() + ');-moz-border-radius:7px;border-radius:7px;">', '<h1 style="margin:20px 20px 10px 20px;">' + this.getLNG("askSaveImage") + "</h1>", '<p style="margin:0px 20px 20px 20px;">' + this.getLNG("askSaveLinks") + "</p>", "</div>"].join("");
						this.$gSaveMenu = m(a);
						m("body").append(this.$gSaveMenu)
					},
					buildHelpLayer: function () {
						var a = this,
							b = this.CFG.BOOK_SIZE,
							c = this.getLNG("hlpGoToHomelink"),
							e = this.getLNG("hlpClickToOpen"),
							d = this.getLNG("hlpUseMousewheel"),
							f = this.getLNG("toStart"),
							h = 150 > b.width ? 'class="middleSize"' : "",
							l = 130 > b.height,
							k = this.DARK_MODE ? "dark" : "light",
							g = window[G_DATA].SKIN,
							p = [];
						p.push("<p " + h + ">");
						l || this.CFG.FV || p.push('<a style="display:table;margin:0px 0px 0px auto;" href="' + this.CFG.HOME_LINK + '" target="_blank" title="' + c + '"><span name="home_link" style="background:url(' + g.HOME_LINK[k].toDataURL() + ') no-repeat center;"></span></a>');
						p.push('<span name="click_to_open"><a href="#">' + e + "</a></span>");
						p.push('<span name="use_mousewheel">' + d + "</span>");
						l || p.push('<span name="help_arrow" style="background:url(' + g.HELP_ARROW[k].toDataURL() + ') no-repeat center;"></span>');
						p.push("</p>");
						p = p.join("");
						c = [];
						c.push("<p " + h + ">");
						c.push('<span name="goto_start"><a href="#">' + f + "</a></span>");
						c.push("</p>");
						c = c.join("");
						f = 2 > this.START_PAGE ? 1 : 0;
						h = this.START_FROM_END ? 1 : 0;
						e = this.getHlpLayerBgImage();
						p = ['<div style="margin-top:1px;display:table;width:100%;height:100%;">', '<div class="hlpLeftSide" style="opacity:' + f + ";", "background:url(" + e.toDataURL() + ");", 'display:table-cell;height:100%;width:50%;text-align:right;vertical-align:bottom;">' + p + "</div>", '<div class="hlpRightSide" style="opacity:' + h + ";", "background:url(" + e.toDataURL() + ");", 'display:table-cell;height:100%;width:50%;text-align:right;vertical-align:bottom;">' + c + "</div>", "</div>"].join("");
						this.$gHelpLayer = m("<div " + (this.DARK_MODE ? "" : 'class="light"') + ' id="' + this.divNames.book_help_layer + '"></div>').css({
							top: 0,
							left: -1 * b.width + "px",
							width: 2 * b.width - 2 + "px",
							height: b.height - 1 + "px"
						}).html(p).find("span[name=click_to_open]").click(function () {
							a.gotoNext();
							return !1
						}).end().find("span[name=goto_start]").click(function () {
							a.gotoSpread(0);
							return !1
						}).end();
						this.$gContainter.html(this.$gHelpLayer)
					},
					getHlpLayerBgImage: function (a) {
						var b = document.createElement("canvas");
						b.width = 100;
						b.height = 100;
						var c = b.getContext("2d");
						c.fillStyle = a ? "dark" === a ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" : this.DARK_MODE ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)";
						c.fillRect(0, 0, b.width, b.height);
						return b
					},
					buildAndPreloadSheets: function () {
						var a = this,
							b = {
								buildColorSheet: function (b, c, d) {
									d = d === g || d > g ? 1 : 0;
									for (var e = a.FRAMES[d][0].edges3d, k = m('<span class="all_edges" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;"></span>'), h = 0; h < e.length; h++) {
										var l = e[h].width + f,
											p = "translate3d(" + e[h].x + "px, 0px, " + -e[h].z + "px) rotateY(" + e[h].angle + "deg)",
											l = m('<div class="unselectable frame0-' + h + '">' + ('<span class="back" style="background:' + c.back + ';-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);"></span>') + ('<span class="front" style="background:' + c.front + ';"></span>') + "</div>").css({
												position: "absolute",
												top: "0px",
												left: "0px",
												width: l + "px",
												height: a.CFG.BOOK_SIZE.height + "px",
												"-webkit-transform": p,
												"-moz-transform": p,
												"-ms-transform": p
											});
										k.append(l)
									}
									b.html(k);
									c = d ? 0 : 180;
									d = a.CFG.BOOK_SIZE;
									b.append(['<span class="wholeimage" style="display:block;position:absolute;top:0;left:0;z-index:20;width:' + d.width + "px;height:" + d.height + "px;", "-webkit-transform:translate3d(0px,0px,0px) rotateY(" + c + "deg);-moz-transform:translate3d(0px,0px,0px) rotateY(" + c + "deg);-ms-transform:translate3d(0px,0px,0px) rotateY(" + c + 'deg);"><span class="back_image" style="-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);"><div style=""></div></span><span class="front_image" style=""><div style=""></div></span></span>'].join(""))
								},
								fillSheetWithDefaultImages: function (b) {
									for (var c = [a.ALLSHEETS[b].front, a.ALLSHEETS[b].back], d = 0; d < c.length; d++) {
										var e = c[d]; - 1 < e.indexOf(".png") || -1 < e.indexOf(".jpg") || -1 < e.indexOf(".gif") ? a.createImageFromColor(a.CFG.PAGE_DEFAULT_COLOR, b, d) : a.createImageFromColor(e, b, d)
									}
								},
								startLoadImagesForSheet: function (b) {
									for (var c = [a.ALLSHEETS[b].front, a.ALLSHEETS[b].back], d = 0; d < c.length; d++) {
										var e = c[d];
										(-1 < e.indexOf(".png") || -1 < e.indexOf(".jpg") || -1 < e.indexOf(".gif")) && a.loadImageForPage(e, b, d)
									}
								}
							},
							c = {
								PlainTextured: function (a) {
									var b = a.imageSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
										c = a.backSide ? H.L.BackSide : H.L.FrontSide,
										d = new H.L.Mesh(new H.L.PlaneGeometry(a.size[0], a.size[1]), new H.L.MeshBasicMaterial({
											map: H.L.ImageUtils.loadTexture("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="),
											side: c
										}));
									H.L.ImageUtils.loadTexture(b, void 0, function (b) {
										d.material.map = b;
										a.onReady && a.onReady(d)
									});
									return d
								},
								buildColorSheet: function (d, e) {
									var f = a.FRAMES_GL_SCALED[d.num === g || d.num > g ? 1 : 0][0].edges3d,
										k = a.CFG.BOOK_GL_SIZE.height,
										h = d.zindex3d,
										l = 2 * f.length;
									a.READY_GL_EDGES || (a.READY_GL_EDGES = []);
									a.READY_GL_EDGES[d.num] = [];
									for (var p = function (c) {
										a.READY_GL_EDGES[c].push(1);
										l === a.READY_GL_EDGES[c].length && (b.fillSheetWithDefaultImages(d.num), b.startLoadImagesForSheet(d.num))
									}, n = 0; n < f.length; n++) {
										(function (b, d, g, f, l, n) {
											var m = n.num;
											n = n.mesh;
											var q = new H.L.Object3D;
											q.position.x = g;
											q.position.z = -f;
											q.rotation.y = Math.PI * l / 180;
											n.add(q);
											n.position.z = h;
											n.position.y = k * a.CFG.ROTATE_CENTER_OFFSET_GL;
											n.name = "sheet";
											b.bookBase.add(n);
											new c.PlainTextured({
												size: [d, k],
												color: e.front,
												onReady: function (a) {
													a.position.x += d / 2;
													a.name = "front";
													q.add(a);
													p(m)
												}
											});
											new c.PlainTextured({
												size: [d, k],
												color: e.back,
												backSide: !0,
												onReady: function (a) {
													a.position.x += d / 2;
													a.name = "back";
													q.add(a);
													p(m)
												}
											})
										})(a.gGL, f[n].width, f[n].x, f[n].z, f[n].angle, d)
									}
								}
							},
							e = function (b) {
								if (!a.SHEETS_WAS_BUILT[b]) {
									a.SHEETS_WAS_BUILT[b] = !0;
									var d = b === g || b > g,
										e = d ? "right" : "left",
										d = {
											num: b,
											sideClass: d ? "sideRight" : "sideLeft",
											zindex3d: -1 * r[e] * a.CFG.GL_DEPTH_STEP,
											mesh: new H.L.Object3D
										},
										f = a.getColorsBySheet(b);
									a.GL_ARR_SHEETS[b] = d;
									r[e] += 1;
									c.buildColorSheet(d, f)
								}
							},
							d = function (c) {
								if (!a.SHEETS_WAS_BUILT[c]) {
									a.SHEETS_WAS_BUILT[c] = !0;
									var d = c === g || c > g,
										e = d ? "right" : "left",
										f = -1 * r[e],
										f = m(['<div  num="' + c + '" class="sheet' + c + " " + (d ? "side-right" : "side-left") + '" ', 'style="-webkit-transform:translate3d(0px,0px,' + f + "px);-moz-transform:translate3d(0px,0px," + f + "px);-ms-transform:translate3d(0px,0px," + f + "px);", "position:absolute;top:0;left:0;z-index:" + (d ? 10 * (a.ALLSHEETS.length - c) : 10 * (c + 1)) + '"></div>'].join(""));
									d ? a.$gContainter.append(f) : a.$gHelpLayer.after(f);
									r[e] += 1;
									a.$ARR_SHEETS[c] = f;
									d = a.getColorsBySheet(c);
									b.buildColorSheet(f, d, c);
									b.fillSheetWithDefaultImages(c);
									b.startLoadImagesForSheet(c)
								}
							},
							f = 1.2,
							h = this.LAST.forward,
							l = this.CFG.NUMBEROF_PRELOAD_SHEETS,
							k = this.ALLSHEETS.length,
							g = this.CURRENT.spread,
							p = g == k,
							n = g - l,
							z = g + l;
						if (this.GLOSSY) {
							var l = function (b) {
									var c = 0,
										d = a.GL_ARR_SHEETS,
										e;
									for (e in d) {
										d.hasOwnProperty(e) && d[e].sideClass === b && c++
									}
									return c
								},
								r = {
									left: l("sideLeft"),
									right: l("sideRight")
								}
						} else {
							r = {
								left: this.$gContainter.find(".side-left").size(),
								right: this.$gContainter.find(".side-right").size()
							}
						}
						p && n--;
						n = 0 > n ? 0 : n;
						z = z < k ? z : k - 1;
						k = function () {
							for (var a = [], b = [], c = n; c < z + 1; c++) {
								c === g || c > g ? b.push(c) : a.push(c)
							}
							return a.reverse().concat(b)
						}();
						for (p = 0; p < k.length; p++) {
							this.GLOSSY ? e(k[p]) : d(k[p])
						}
						this.deleteSheet(h ? n - 1 : z + 1)
					},
					deleteSheet: function (a) {
						if (0 > a || a > this.ALLSHEETS.length - 1 || !this.SHEETS_WAS_BUILT[a]) {
							return !1
						}
						this.SHEETS_WAS_BUILT[a] = !1;
						this.IMG_NOW_LOADING[2 * a] && (this.IMG_NOW_LOADING[2 * a].src = this.GIF, this.IMG_NOW_LOADING[2 * a].onload = !1);
						this.IMG_NOW_LOADING[2 * a + 1] && (this.IMG_NOW_LOADING[2 * a + 1].src = this.GIF, this.IMG_NOW_LOADING[2 * a + 1].onload = !1);
						if (this.GLOSSY) {
							var b = this.getSheetByIndex(a);
							b && (this.gGL.bookBase.remove(b.mesh), delete this.GL_ARR_SHEETS[a])
						} else {
							this.$gContainter.find("div.sheet" + a).remove()
						}
					},
					getColorsBySheet: function (a) {
						var b = this.CFG.PAGE_DEFAULT_COLOR,
							c = this.ALLSHEETS[a].front,
							c = -1 < c.indexOf(".") ? b : c;
						a = this.ALLSHEETS[a].back;
						a = -1 < a.indexOf(".") ? b : a;
						return {
							front: c,
							back: a
						}
					},
					createImageFromColor: function (a, b, c) {
						var e = this;
						this.shredAndFill({
							img: function () {
								var a = document.createElement("canvas"),
									b = e.CFG.BOOK_SIZE.width,
									c = e.CFG.BOOK_SIZE.height;
								a.width = e.CFG.DIVIDE_IMAGES ? 2 * b : b;
								a.height = c;
								b = a.getContext("2d");
								b.fillStyle = "rgba(0,0,0,0)";
								b.fillRect(0, 0, a.width, a.height);
								return a
							}(),
							src: a,
							sheet: b,
							page: c
						})
					},
					loadImageForPage: function (a, b, c) {
						var e = this,
							d = 2 * b + c;
						this.NOW_LOADING_COUNTER++;
						this.IMG_NOW_LOADING[d] = new Image;
						this.IMG_NOW_LOADING[d].onload = function () {
							e.NOW_LOADING_COUNTER--;
							e.update_queue_loaded_images({
								img: this,
								src: a,
								sheet: b,
								page: c
							})
						};
						setTimeout(function () {
							e.IMG_NOW_LOADING && e.IMG_NOW_LOADING[d] && (e.options.crossOrigin && (e.IMG_NOW_LOADING[d].crossOrigin = "Anonymous"), e.IMG_NOW_LOADING[d].src = a)
						}, 500)
					},
					update_queue_loaded_images: function (a) {
						var b = this,
							c = function () {
								if (!b.ANIMATION_FLAG) {
									var a = b.QUEUE_IMAGES_LOADED.shift();
									a && b.shredAndFill(a)
								}
								b.QUEUE_IMAGES_LOADED.length && (b.TMR_QUEUE = setTimeout(function () {
									c()
								}, 10))
							};
						this.TMR_QUEUE && clearTimeout(this.TMR_QUEUE);
						this.QUEUE_IMAGES_LOADED.push(a);
						c()
					},
					buildResizedImage: function (a, b, c, e) {
						var d = this.getString([169, 32, 124, 32, 76, 73, 77, 73, 84, 69, 68, 0, 76, 73, 71, 72, 84, 0, 86, 69, 82, 83, 73, 79, 78]),
							f = c.img,
							h = 0 < c.page ? "back" : "front",
							l = this.getColorsBySheet(c.sheet),
							k = c.sheet,
							g = document.createElement("canvas"),
							p = a.width,
							n = a.height,
							p = this.CFG.DIVIDE_IMAGES ? 2 * p : p;
						g.width = p;
						g.height = n;
						a = g.getContext("2d");
						a.fillStyle = l[h];
						a.fillRect(0, 0, p, n);
						b *= this.CFG.BORDER;
						l = g.width - 1 * b;
						p = g.height - 2 * b;
						if (f.width > l || f.height > p) {
							var n = l / f.width,
								m = Math.min(n, p / f.height),
								r = n == m,
								n = r ? l : Math.floor(f.width * m),
								m = r ? Math.floor(f.height * m) : p
						} else {
							n = f.width, m = f.height
						}
						var q = this.getTotalSheets(),
							r = 0 === c.sheet && 0 === c.page,
							q = c.sheet === q - 1 && 1 === c.page;
						0 === c.sheet && c.page === this.ZOOM_MODE ? (m = Math.min(l / f.width, p / f.height), a.drawImage(f, 0, 0, f.width, f.height, (l - f.width * m) / 2 + 0.5 * this.ZOOM_MODE * b, (p - f.height * m) / 2 + b, f.width * m, f.height * m)) : a.drawImage(f, (this.ZOOM_MODE + (0 === this.ZOOM_MODE ? 1 : -1) * c.page) * b, b, n, m);
						e && (e = this.SELFSHADOW[h], this.CFG.DIVIDE_IMAGES ? a.drawImage(e, 0 < c.page ? 0 : this.CFG.BOOK_SIZE.width, 0) : r || q || a.drawImage(e, 0, 0));
						this.GLOSSY && !this.CFG.FV && k > parseInt(String.fromCharCode(50), 10) && (c = document.createElement("canvas"), c.width = 300, c.height = 82, k = c.getContext("2d"), k.fillStyle = "rgba(200,200,200,.4)", k.fillRect(10, 10, c.width - 20, c.height - 20), k.lineWidth = 10, k.strokeStyle = "rgba(200,200,200,.4)", k.beginPath(), k.moveTo(30, 0), k.lineTo(0, 0), k.lineTo(0, 20), k.moveTo(270, 0), k.lineTo(300, 0), k.lineTo(300, 20), k.moveTo(300, 62), k.lineTo(300, 82), k.lineTo(270, 82), k.moveTo(0, 62), k.lineTo(0, 82), k.lineTo(30, 82), k.stroke(), k.fillStyle = "#ffffff", k.font = "16pt HL", k.textAlign = "center", k.fillText(d, c.width / 2, 50), a.drawImage(c, g.width / 2 - 0.7 * c.width / 2, g.height / 2 - 0.7 * c.height / 2, 0.7 * c.width, 0.7 * c.height));
						return g
					},
					shredAndFill: function (a) {
						var b = this;
						if (!this.CFG.BOOK_SIZE.width || !this.CFG.BOOK_SIZE.height) {
							return !1
						}
						var c = {
								switchSheetLoadingStatus: function () {
									var a = "color" === b.ALL_PAGES_MAP[2 * h + f];
									b.GLOSSY ? k && (k[l + "Loading"] ? (delete k[l + "Loading"], k[l + "Filled"] = !0) : a ? k[l + "Filled"] = !0 : k[l + "Loading"] = !0) : g.hasClass(l + "-loading") ? g.removeClass(l + "-loading").addClass(l + "-filled") : a ? g.addClass(l + "-filled") : g.addClass(l + "-loading")
								},
								cutImagesAndInsertIntoEdges: function (a) {
									for (var c = 0, f = a.height, h = a.width, q, u, t, w = 0; w < e.length; w++) {
										u = Math.round(e[w].width);
										b.CFG.DIVIDE_IMAGES || ("front" === l ? (q = c, c += u, t = q + u > h ? h - q : u) : (c += u, q = h - c, t = u, 0 > q && (t = u + q, q = 0)));
										u = document.createElement("canvas");
										u.width = t;
										u.height = f;
										var y = u.getContext("2d");
										b.GLOSSY && "back" === l && (y.translate(t, 0), y.scale(-1, 1));
										y.drawImage(a, q, 0, t, f, 0, 0, t, f);
										u = u.toDataURL();
										y = document.createElement("img");
										y.src = u;
										d.push(y)
									}
									b.GLOSSY ? k && k.mesh && m.each(k.mesh.children, function (a) {
										var b = this.getObjectByName(l);
										H.L.ImageUtils.loadTexture(d[a].src, void 0, function (a) {
											b && (b.material.map = a)
										})
									}) : (c = g.find(".wholeimage ." + l + "_image"), f = c.find("div"), h = g.find("." + l), q = "back" === l ? -1 : 1, f.css({
										background: "url(" + a.toDataURL() + ") " + q + "px 0px no-repeat"
									}), c.css({
										background: "url(" + a.toDataURL() + ") 0px 0px no-repeat"
									}), h.each(function (a) {
										m(this).css({
											background: "url(" + d[a].src + ") no-repeat",
											backgroundSize: "100% 100%"
										})
									}))
								}
							},
							e = b.FRAMES[0][this.FIRST_FRAME].edges3d,
							d = [],
							f = a.page,
							h = a.sheet,
							l = 0 < f ? "back" : "front";
						if (this.GLOSSY) {
							var k = b.GL_ARR_SHEETS[h]
						} else {
							var g = this.$ARR_SHEETS[h]
						}
						this.startRender();
						c.switchSheetLoadingStatus();
						a = this.buildResizedImage(this.CFG.BOOK_SIZE, this.GSCALE, a, "selfShadow");
						c.cutImagesAndInsertIntoEdges(a);
						this.bookLoaderShow(!this.didSpreadLoaded(this.CURRENT.spread))
					},
					saveImagesAs: function () {
						var a = this,
							b = a.getLNG("hlpGoToHomelink"),
							c = function (a) {
								var c = a.getContext("2d"),
									d = 0.7,
									e = document.createElement("canvas");
								e.width = 200;
								e.height = 82;
								var f = e.getContext("2d");
								f.fillStyle = "rgba(200,200,200,.1)";
								f.fillRect(10, 10, e.width - 20, e.height - 20);
								f.lineWidth = 10;
								f.strokeStyle = "rgba(66,133,244,0.5)";
								f.beginPath();
								f.moveTo(30, 0);
								f.lineTo(0, 0);
								f.lineTo(0, 20);
								f.moveTo(170, 0);
								f.lineTo(200, 0);
								f.lineTo(200, 20);
								f.moveTo(200, 62);
								f.lineTo(200, 82);
								f.lineTo(170, 82);
								f.moveTo(0, 62);
								f.lineTo(0, 82);
								f.lineTo(30, 82);
								f.stroke();
								f.fillStyle = "red";
								f.font = "30pt HL";
								f.textAlign = "center";
								f.fillText("\u00a9 | \u2122", e.width / 2, 55);
								"Open homepage" !== b && (c.clearRect(0, 0, a.width, a.height), d = 0.8 * Math.min(a.width / e.width, a.height / e.height));
								c.drawImage(e, a.width / 2 - e.width * d / 2, a.height / 2 - e.height * d / 2, e.width * d, e.height * d);
								a = a.toDataURL().match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/);
								c = atob(a[3]);
								d = new ArrayBuffer(c.length);
								d = new Uint8Array(d);
								for (e = 0; e < d.length; e++) {
									d[e] = c.charCodeAt(e)
								}
								return new Blob([d], {
									type: a[1]
								})
							},
							e = {
								loadImage: function (b) {
									var c = new Image;
									c.onload = function () {
										var a = document.createElement("canvas");
										a.width = this.width;
										a.height = this.height;
										a.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
										e.saveImage(a)
									};
									a.options.crossOrigin && (c.crossOrigin = "Anonymous");
									c.src = b
								},
								saveImage: function (a) {
									var b = window.URL || webkitURL,
										d = document.createElement("a"),
										e = c(a);
									d.download = "photo.png";
									d.href = b.createObjectURL(e);
									document.body.appendChild(d);
									d.click();
									document.body.removeChild(d);
									setTimeout(function () {
										b.revokeObjectURL(e)
									}, 100)
								},
								showMenu: function () {
									a.$gSaveMenu.toggle()
								}
							},
							d = 0 == this.CURRENT.spread,
							f = this.CURRENT.spread == this.getTotalSheets(),
							h = this.ARR_PAGES_SRC;
						d ? e.loadImage(h[0]) : f ? e.loadImage(h[h.length - 1]) : (a.$gSaveMenu.find("a").unbind().each(function (b) {
							m(this).click(function () {
								var c = b ? 2 * a.CURRENT.spread : 2 * a.CURRENT.spread - 1;
								h[c] && e.loadImage(h[c]);
								e.showMenu();
								return !1
							})
						}), e.showMenu())
					}
				},
				G = {
					init: function (a) {
						this.MATH = J.init();
						this.onReady = a.onReady;
						this.ARR_ANIMATIONS = [];
						this.CURRENT_FLIP_NAME = a.flip || "";
						this.FLIP_NAMES = [];
						this.CURRENT_KEYFRAME = 1;
						this.CURRENT_LINE = 0;
						this.CFG = {
							SPEED_ANIMATION: 15,
							BOOK_HEIGHT: 300,
							YSCALETOP: 0.3,
							YSCALE: 0.08,
							BEZIE_ROUGH: window[G_DATA].GLOSSY ? 10 : 4,
							BOOK_ROTATE_X: 0,
							ARR_BOOK_WIDTH: []
						};
						this.ARR_ANI = '<div id="animations" style="display:none;"><div class="book" name="basic"><div class="points" xy="-40,0 -60,0 -80,0 -80,0 -120,0"></div><div class="frame" fr="0" ang="0 0 0 0 0"></div><div class="frame" fr="30" ang="100 15 5 5 -30"></div><div class="frame" fr="60" ang="140 120 40 40 -30"></div><div class="frame" fr="80" ang="130 145 195 195 190"></div><div class="frame" fr="100" ang="180 180 180 180 180"></div></div><div class="book" name="soft"><div class="points" xy="-40,0 -60,0 -80,0 -80,0 -120,0"></div><div class="frame" fr="0" ang="0 0 0 0 0"></div><div class="frame" fr="30" ang="95 60 10 10 -50"></div><div class="frame" fr="60" ang="150 145 60 60 -30"></div><div class="frame" fr="80" ang="175 170 105 105 60"></div><div class="frame" fr="100" ang="180 180 180 180 180"></div></div>';
						this.load_animations_from_html()
					},
					load_animations_from_html: function () {
						var a = this,
							b = function (a) {
								for (var b = 0, c = 0; c < a.length; c++) {
									b += a[c][0]
								}
								return 0 > b ? -1 * b : b
							};
						m(this.ARR_ANI).find(".book").each(function () {
							var c = [],
								d = m(this).attr("name"),
								f = m(this).find(".points").attr("xy").split(" ").map(function (a) {
									return a.split(",").map(function (a) {
										return parseInt(a)
									})
								});
							m(this).find(".frame").each(function (a) {
								var b = parseInt(m(this).attr("fr"), 10);
								a = m(this).attr("ang").split(" ").map(function (a) {
									return parseInt(a)
								});
								for (var b = {
									frame: b,
									line: []
								}, d = 0; d < f.length; d++) {
									b.line[d] = {
										xy: f[d],
										ang: a[d],
										center: [0, 0]
									}
								}
								c.push(b)
							});
							a.CFG.ARR_BOOK_WIDTH.push(b(f));
							a.FLIP_NAMES.push(d);
							a.ARR_ANIMATIONS[d] = c
						});
						this.CURRENT_FLIP_NAME = -1 !== m.inArray(this.CURRENT_FLIP_NAME, this.FLIP_NAMES) ? this.CURRENT_FLIP_NAME : this.FLIP_NAMES[0];
						var c = window[G_DATA].FLIPS[this.CURRENT_FLIP_NAME];
						c ? this.onReady(c) : this.rebuild()
					},
					rebuild: function () {
						var a = this.ARR_ANIMATIONS[this.CURRENT_FLIP_NAME];
						this.FIRST_KEYFRAME = a[0].frame;
						a = this.buildAllFramesFrom(a);
						this.ALL_FRAMES = this.calculateCenters(a);
						this.calculateBezie();
						this.calculateEdgeSkewY();
						this.CFG.AMOUNT_ADGES_3D = this.ALL_FRAMES[0].edges3d.length;
						for (var a = [], b = 0; b < this.ALL_FRAMES.length; b++) {
							for (var c = this.ALL_FRAMES[b], e = [], d = 0; d < c.edges3d.length; d++) {
								e[d] = {
									angle: 180 - c.edges3d[d].angle,
									width: c.edges3d[d].width,
									x: -1 * c.edges3d[d].x,
									z: c.edges3d[d].z
								}
							}
							a.push({
								bezie: c.bezie,
								edges3d: e,
								frame: c.frame,
								keyframe: c.keyframe,
								line: c.line,
								skewYbottom: c.skewYbottom,
								skewYtop: c.skewYtop
							})
						}
						a = [this.ALL_FRAMES, a];
						window[G_DATA].FLIPS[this.CURRENT_FLIP_NAME] = a;
						this.onReady(a)
					},
					buildAllFramesFrom: function (a) {
						var b = [];
						if (1 > a.length) {
							return []
						}
						for (var c = 0; c < a.length; c++) {
							b[a[c].frame] = m.extend(!0, {}, a[c]), b[a[c].frame].keyframe = !0
						}
						for (c = 1; c < a.length; c++) {
							for (var e = a[c - 1], d = a[c], f = d.frame - e.frame, h = 1; h < f; h++) {
								for (var l = e.frame + h, k = [], g = 0; g < d.line.length; g++) {
									k.push({
										xy: [d.line[g].xy[0], d.line[g].xy[1]],
										ang: Math.floor((d.line[g].ang - e.line[g].ang) / f * h + e.line[g].ang),
										center: [0, 0]
									})
								}
								b[l] = {
									frame: l,
									line: k
								}
							}
						}
						return b
					},
					calculateCenters: function (a) {
						var b = this;
						m.each(a, function (a) {
							if (!(a < b.FIRST_KEYFRAME)) {
								var e = this.line;
								for (a = 0; a < e.length; a++) {
									var d = e[a].ang,
										f = 0 < d ? 1 : -1,
										d = d * f,
										h = e[a].center,
										f = b.MATH.xy_matrix2d(e[a].xy, [b.MATH.COS[d], f * -b.MATH.SIN[d], h[0], f * b.MATH.SIN[d], b.MATH.COS[d], h[1]]);
									e[a].xy = f;
									e[a + 1] && (e[a + 1].center = f)
								}
							}
						});
						return a
					},
					calculateBezie: function () {
						var a = this.ALL_FRAMES,
							b = this.CFG.BEZIE_ROUGH;
						m.each(a, function (a) {
							a = this.line;
							if (!(3 > a.length)) {
								for (var e = [{
									x: 0,
									y: 0
								}], d = 0, f = 0, d = 0, h = [0, 0], l = a[0].xy, k = a[1].xy, g = a[2].xy, m = 1; m < b; m++) {
									d = 1 / b * m, f = (1 - d) * (1 - d) * (1 - d) * h[0] + 3 * d * (1 - d) * (1 - d) * l[0] + 3 * d * d * (1 - d) * k[0] + d * d * d * g[0], d = (1 - d) * (1 - d) * (1 - d) * h[1] + 3 * d * (1 - d) * (1 - d) * l[1] + 3 * d * d * (1 - d) * k[1] + d * d * d * g[1], e.push({
										x: f,
										y: d
									})
								}
								e.push({
									x: g[0],
									y: g[1]
								});
								if (5 === a.length || 5 < a.length) {
									h = a[2].xy;
									l = a[3].xy;
									k = a[4].xy;
									for (m = 1; m < b; m++) {
										d = 1 / b * m, f = (1 - d) * (1 - d) * h[0] + 2 * d * (1 - d) * l[0] + d * d * k[0], d = (1 - d) * (1 - d) * h[1] + 2 * d * (1 - d) * l[1] + d * d * k[1], e.push({
											x: f,
											y: d
										})
									}
									e.push({
										x: k[0],
										y: k[1]
									})
								}
								this.bezie = e
							}
						});
						this.ALL_FRAMES = a
					},
					calculateEdgeSkewY: function () {
						var a = this.CFG.BOOK_HEIGHT,
							b = this.CFG.YSCALE,
							c = this.CFG.YSCALETOP,
							e = this.ALL_FRAMES;
						m.each(e, function (d) {
							d = this.bezie;
							for (var e = [], h = [], l = [], k = 0; k < d.length - 1; k++) {
								var g, m;
								g = d[k];
								m = d[k + 1];
								var n = Math.sqrt((m.y - g.y) * (m.y - g.y) + (m.x - g.x) * (m.x - g.x)),
									z = (180 * Math.atan2(m.y - g.y, m.x - g.x) / Math.PI).toFixed(15);
								l.push({
									x: g.x,
									z: g.y,
									width: n,
									angle: z
								});
								e.push((180 * Math.atan2(m.y * c - a - (g.y * c - a), m.x - g.x) / Math.PI).toFixed(15));
								y1bottom = g.y * b - a;
								y2bottom = m.y * b - a;
								h.push((180 * Math.atan2(y2bottom - y1bottom, m.x - g.x) / Math.PI).toFixed(15))
							}
							this.edges3d = l;
							this.skewYtop = e;
							this.skewYbottom = h
						});
						this.ALL_FRAMES = e
					},
					get_total_keyframes: function () {
						return this.ARR_ANIMATIONS[this.CURRENT_ANIMATION].length
					},
					get_total_lines: function () {
						return this.ALL_FRAMES[this.FIRST_KEYFRAME].line.length
					}
				},
				J = {
					init: function () {
						this.SIN = [];
						this.COS = [];
						this._calculate();
						return this
					},
					_calculate: function () {
						for (var a = 0; 360 > a; a++) {
							this.SIN[a] = Math.sin(a * Math.PI / 180).toFixed(15)
						}
						for (a = 0; 360 > a; a++) {
							this.COS[a] = Math.cos(a * Math.PI / 180).toFixed(15)
						}(function (a) {
							a.map || (a.map = function (a) {
								for (var b = this.length, d = Array(b), f = 0; f < b; f++) {
									f in this && (d[f] = a.call(!1, this[f], f, this))
								}
								return d
							})
						})(Array.prototype)
					},
					xy_matrix2d: function (a, b) {
						a.push(1);
						return [b[0] * a[0] + b[1] * a[1] + b[2] * a[2], b[3] * a[0] + b[4] * a[1] + b[5] * a[2]]
					}
				},
				K = window[G_DATA].NUMBER;
			window[G_DATA].NUMBER += 1;
			window[G_DATA].queueBooksBuilding.push({
				arrSrc: D,
				options: E,
				target: A
			});
			K && window[G_DATA].buildingNowFlag || window[G_DATA].buildNextBook();
			return this
		}
	})(jQuery)
});
docReady(function () {
	moment.tz.add({
		zones: {
			"Asia/Ha_Noi": ["-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58", "6 US P%sT 1946 6", "6 CA P%sT 1967 6", "6 US P%sT"],
			"America/New_York": ["-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2", "-5 US E%sT 1920 -5", "-5 NYC E%sT 1942 -5", "-5 US E%sT 1946 -5", "-5 NYC E%sT 1967 -5", "-5 US E%sT"],
			"Asia/Tokyo": ["9:18:59 - LMT 1887_11_31_15", "9 - JST 1896 9", "9 - CJT 1938 9", "9 Japan J%sT"],
			"Europe/London": ["-0:1:15 - LMT 1847_11_1_0 -0:1:15", "0 GB-Eire %s 1968_9_27 1", "1 - BST 1971_9_31_2", "0 GB-Eire %s 1996", "0 EU GMT/BST"],
			"Europe/Moscow": ["2:30:20 - LMT 1880 2:30:20", "2:30 - MMT 1916_6_3 2:30", "2:30:48 Russia %s 1919_6_1_2 4:30:48", "3 Russia MSK/MSD 1922_9 3", "2 - EET 1930_5_21 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 1992_0_19_2 2", "3 Russia MSK/MSD 2011_2_27_2 3", "3 - MSK"]
		},
		rules: {
			US: ["1918 1919 2 0 8 2 0 1 D", "1918 1919 9 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1967 2006 9 0 8 2 0 0 S", "1967 1973 3 0 8 2 0 1 D", "1974 1974 0 6 7 2 0 1 D", "1975 1975 1 23 7 2 0 1 D", "1976 1986 3 0 8 2 0 1 D", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
			CA: ["1948 1948 2 14 7 2 0 1 D", "1949 1949 0 1 7 2 0 0 S", "1950 1966 3 0 8 2 0 1 D", "1950 1961 8 0 8 2 0 0 S", "1962 1966 9 0 8 2 0 0 S"],
			NYC: ["1920 1920 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1966 3 0 8 2 0 1 D", "1921 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],
			Japan: ["1948 1948 4 1 0 2 0 1 D", "1948 1951 8 8 6 2 0 0 S", "1949 1949 3 1 0 2 0 1 D", "1950 1951 4 1 0 2 0 1 D"],
			"GB-Eire": ["1916 1916 4 21 7 2 2 1 BST", "1916 1916 9 1 7 2 2 0 GMT", "1917 1917 3 8 7 2 2 1 BST", "1917 1917 8 17 7 2 2 0 GMT", "1918 1918 2 24 7 2 2 1 BST", "1918 1918 8 30 7 2 2 0 GMT", "1919 1919 2 30 7 2 2 1 BST", "1919 1919 8 29 7 2 2 0 GMT", "1920 1920 2 28 7 2 2 1 BST", "1920 1920 9 25 7 2 2 0 GMT", "1921 1921 3 3 7 2 2 1 BST", "1921 1921 9 3 7 2 2 0 GMT", "1922 1922 2 26 7 2 2 1 BST", "1922 1922 9 8 7 2 2 0 GMT", "1923 1923 3 16 0 2 2 1 BST", "1923 1924 8 16 0 2 2 0 GMT", "1924 1924 3 9 0 2 2 1 BST", "1925 1926 3 16 0 2 2 1 BST", "1925 1938 9 2 0 2 2 0 GMT", "1927 1927 3 9 0 2 2 1 BST", "1928 1929 3 16 0 2 2 1 BST", "1930 1930 3 9 0 2 2 1 BST", "1931 1932 3 16 0 2 2 1 BST", "1933 1933 3 9 0 2 2 1 BST", "1934 1934 3 16 0 2 2 1 BST", "1935 1935 3 9 0 2 2 1 BST", "1936 1937 3 16 0 2 2 1 BST", "1938 1938 3 9 0 2 2 1 BST", "1939 1939 3 16 0 2 2 1 BST", "1939 1939 10 16 0 2 2 0 GMT", "1940 1940 1 23 0 2 2 1 BST", "1941 1941 4 2 0 1 2 2 BDST", "1941 1943 7 9 0 1 2 1 BST", "1942 1944 3 2 0 1 2 2 BDST", "1944 1944 8 16 0 1 2 1 BST", "1945 1945 3 2 1 1 2 2 BDST", "1945 1945 6 9 0 1 2 1 BST", "1945 1946 9 2 0 2 2 0 GMT", "1946 1946 3 9 0 2 2 1 BST", "1947 1947 2 16 7 2 2 1 BST", "1947 1947 3 13 7 1 2 2 BDST", "1947 1947 7 10 7 1 2 1 BST", "1947 1947 10 2 7 2 2 0 GMT", "1948 1948 2 14 7 2 2 1 BST", "1948 1948 9 31 7 2 2 0 GMT", "1949 1949 3 3 7 2 2 1 BST", "1949 1949 9 30 7 2 2 0 GMT", "1950 1952 3 14 0 2 2 1 BST", "1950 1952 9 21 0 2 2 0 GMT", "1953 1953 3 16 0 2 2 1 BST", "1953 1960 9 2 0 2 2 0 GMT", "1954 1954 3 9 0 2 2 1 BST", "1955 1956 3 16 0 2 2 1 BST", "1957 1957 3 9 0 2 2 1 BST", "1958 1959 3 16 0 2 2 1 BST", "1960 1960 3 9 0 2 2 1 BST", "1961 1963 2 0 8 2 2 1 BST", "1961 1968 9 23 0 2 2 0 GMT", "1964 1967 2 19 0 2 2 1 BST", "1968 1968 1 18 7 2 2 1 BST", "1972 1980 2 16 0 2 2 1 BST", "1972 1980 9 23 0 2 2 0 GMT", "1981 1995 2 0 8 1 1 1 BST", "1981 1989 9 23 0 1 1 0 GMT", "1990 1995 9 22 0 1 1 0 GMT"],
			EU: ["1977 1980 3 1 0 1 1 1 S", "1977 1977 8 0 8 1 1 0", "1978 1978 9 1 7 1 1 0", "1979 1995 8 0 8 1 1 0", "1981 9999 2 0 8 1 1 1 S", "1996 9999 9 0 8 1 1 0"],
			Russia: ["1917 1917 6 1 7 23 0 1 MST", "1917 1917 11 28 7 0 0 0 MMT", "1918 1918 4 31 7 22 0 2 MDST", "1918 1918 8 16 7 1 0 1 MST", "1919 1919 4 31 7 23 0 2 MDST", "1919 1919 6 1 7 2 0 1 S", "1919 1919 7 16 7 0 0 0", "1921 1921 1 14 7 23 0 1 S", "1921 1921 2 20 7 23 0 2 M", "1921 1921 8 1 7 0 0 1 S", "1921 1921 9 1 7 0 0 0", "1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 2010 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 2010 9 0 8 2 2 0"]
		},
		links: {}
	});
	docReady(function () {})
});

function initPage() {
	function controllersJS() {
		var app;
		app = angular.module("Þ.controllers", []);
		app.controller("about", ["$scope", "$timeout", "$http",
			function ($scope, $timeout, $http) {
				H.T({
					profile: {
						screenName: "fAQVietNam"
					},
					domId: "",
					maxTweets: 1,
					enableLinks: false,
					showUser: false,
					showTime: false,
					showImages: false,
					showPermalinks: false,
					customCallback: Twitter,
					lang: "en"
				});
				$scope.Instagram = function () {
					$http({
						method: "GET",
						url: Instagram().replace("//", "//api.").replace("/a/", "/3/album/"),
						headers: {
							Authorization: "Client-ID 82bb224a2a6c64c"
						}
					}).success(function (result) {
						Instagram(result.data.description);
						var imgArray = [],
							j = result.data.images_count;
						for (var i = 0; i < j; i++) {
							imgArray.push(result.data.images[i].link.replace(":", "s:"))
						}
						$.Þ(imgArray, {
							bgDark: "#56998c",
							bgLight: "#d97f6f",
							slope: 1,
							border: 30
						})
					}).error(function () {
						console.log("copyrightml - not load img...")
					})
				}
			}
		]);
		app.controller("mainCtrl", ["$scope", "$rootScope", "siteMap",
			function ($scope, $rootScope, siteMap) {
				$scope.rotate = {};
				$scope.rotate.y = 0;
				$scope.waterView = null;
				$scope.videos = ["v0", "v0", "v0", "v0"];
				$scope.activeVideo = 0;
				$scope.page = "";
				$scope.loadedImg = 0;
				$scope.title = txtSiteMap.main.title;
				$scope.xicon = siteMap.main.xicon;
				$scope.Mailto = window.Mailto;
				$scope.RootPage = window.RootPage;
				$scope.Socials = window.Socials;
				$scope.Facebook = H.V().L(window.Facebook);
				$scope.$watch("page", function (newP, oldP) {
					if (oldP === "instagram" && newP !== "instagram") {
						return null
					}
				});
				$scope.playNextVideo = function () {
					return $scope.activeVideo = ($scope.activeVideo + 1) % $scope.videos.length
				};
				return $rootScope.$on("$stateChangeStart", function (e, newState, oldState) {
					var angle, rotations;
					$scope.page = newState.page;
					rotations = ~~ ($scope.rotate.y / 360);
					angle = $scope.rotate.y % 360;
					switch ($scope.page) {
					case "":
						$scope.rotate.y = 0 + 360 * rotations;
						$scope.activeVideo = 2;
						$scope.title = siteMap.main.title;
						$scope.description = siteMap.main.description;
						$scope.keywords = siteMap.main.keywords;
						$scope.fbimg = siteMap.main.fbimg;
						$scope.xicon = siteMap.main.xicon;
						break;
					case "charts":
						$scope.activeVideo = 0;
						if (angle > -90) {
							$scope.rotate.y = 90 + 360 * rotations
						} else {
							$scope.rotate.y = -270 + 360 * rotations
						}
						$scope.title = window.IE ? siteMap.IE : siteMap.charts.title;
						$scope.description = siteMap.charts.description;
						$scope.keywords = siteMap.charts.keywords;
						$scope.fbimg = siteMap.charts.fbimg;
						$scope.xicon = siteMap.charts.xicon;
						break;
					case "projects":
						$scope.activeVideo = 1;
						if (angle < 90) {
							$scope.rotate.y = -90 + 360 * rotations
						} else {
							$scope.rotate.y = 270 + 360 * rotations
						}
						$scope.title = window.IE ? siteMap.IE : siteMap.projects.title;
						$scope.description = siteMap.projects.description;
						$scope.keywords = siteMap.projects.keywords;
						$scope.fbimg = siteMap.projects.fbimg;
						$scope.xicon = siteMap.projects.xicon;
						break;
					case "about":
						$scope.activeVideo = 3;
						if (angle > 0) {
							$scope.rotate.y = 180 + 360 * rotations
						} else {
							$scope.rotate.y = -180 + 360 * rotations
						}
						$scope.title = window.IE ? siteMap.IE : siteMap.about.title;
						$scope.description = siteMap.about.description;
						$scope.keywords = siteMap.about.keywords;
						$scope.fbimg = siteMap.about.fbimg;
						$scope.xicon = siteMap.about.xicon;
						break;
					case "instagram":
						$scope.title = siteMap.instagram.title;
						$scope.description = siteMap.instagram.description;
						$scope.keywords = siteMap.instagram.keywords;
						$scope.fbimg = siteMap.instagram.fbimg;
						$scope.xicon = siteMap.main.xicon
					}
					GLOBAL.title = document.title = $scope.title;
					return $scope.$broadcast("page", $scope.page)
				})
			}
		]);
		app.controller("design", ["$scope", "projectsService", "$timeout",
			function ($scope, projectsService, $timeout) {
				$scope.projects = [];
				$scope.viewproject = 0;
				$scope.$on("page", function (e, page) {
					if (page === "projects") {
						return $scope.loadProjects()
					}
				});
				$scope.loadProjects = function () {
					if ($scope.projects[0] === void 0) {
						return $scope.projects = projectsService.projects
					}
				};
				if ($scope.$parent.page === "projects") {
					$scope.loadProjects()
				}
				return $timeout($scope.loadProjects, 1000)
			}
		]);
		app.controller("audit", ["$scope", "$timeout", "$filter", "$http",
			function ($scope, $timeout, $filter, $http) {
				var convert, voidYahoo, apiPayUSD, voidBitstamp;
				$scope.bitData = {};
				$scope.history = [];
				$scope.filtered = {};
				$scope.trim = 11;
				$scope.up = true;
				$scope.VND = "0";
				$scope.RUB = "0.00";
				$scope.EUR = "0.00";
				$scope.GBP = "0.00";
				$scope.JPY = "0.00";
				$scope.history = $filter("bitData")($scope.data);
				$scope.counter = 0;
				$scope.timer = new Date().getTime();
				apiPayUSD = function () {
					$http({
						method: "GET",
						url: "https://bitpay.com/api/rates/usd/"
					}).success(function (data) {
						return data.rate
					}).error(function () {
						return $scope.history[$scope.history.length - 1].price
					})
				};
				$scope.USD = apiPayUSD();
				voidYahoo = function () {
					$http({
						method: "GET",
						url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22%20USDEUR%2CUSDRUB%2CUSDGBP%2CUSDJPY%2CUSDVND%22&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
					}).success(function (dataRate) {
						return $scope.rates = dataRate.query.results.rate
					})
				};
				voidBitstamp = function () {
					$http({
						method: "GET",
						url: "https://www.bitstamp.net/api/v2/ticker/btcusd/"
					}).success(function (data) {
						$scope.timer = new Date().getTime();
						return $scope.bitData = $filter("bitData")(data)
					}).error(function () {
						return false
					})
				};
				convert = function () {
					$scope.rates.forEach(function (rate) {
						$scope[rate.id.slice(3, 6)] = $scope.USD * parseFloat(rate.Rate)
					})
				};
				window.prerenderReady = true;
				$scope.onTimeout = function () {
					if ($scope.counter != 0 && document.title.indexOf("Analytics") < 0) {
						return mytimeout = $timeout($scope.onTimeout, 5000)
					}
					voidYahoo();
					voidBitstamp();
					$scope.USD = parseFloat($scope.bitData.last);
					if ($scope.history[0] && $scope.USD > $scope.history[$scope.history.length - 1].price) {
						$scope.up = true
					} else {
						if ($scope.history[0] && $scope.USD < $scope.history[$scope.history.length - 1].price) {
							$scope.up = false
						}
					} if ($scope.history[0]) {
						$scope.history.push($scope.bitData)
					}
					convert();
					$scope.counter++;
					if ($scope.counter < 20) {
						return mytimeout = $timeout($scope.onTimeout, 1000)
					}
					if ($scope.counter < 50) {
						return mytimeout = $timeout($scope.onTimeout, 5000)
					}
					if ($scope.counter < 100) {
						return mytimeout = $timeout($scope.onTimeout, 10000)
					}
					return mytimeout = $timeout($scope.onTimeout, 60000)
				};
				var mytimeout = $timeout($scope.onTimeout, 500)
			}
		])
	}

	function directivesJS() {
		var app;
		app = angular.module("Þ.directives", []);
		app.directive("title", ["$timeout",
			function ($timeout) {
				return {
					link: function (scope, el, attr) {
						return $timeout(function () {
							return el.html(scope.title)
						})
					}
				}
			}
		]);
		app.directive("instagram", ["webGL",
			function (webGL) {
				return {
					link: function (scope, el, attr) {
						return webGL.Available() || el.addClass("hide")
					}
				}
			}
		]);
		app.directive("date", ["$filter", "$timeout",
			function ($filter, $timeout) {
				return {
					scope: true,
					link: function (scope, el, attr) {
						var timedUpdate, update;
						update = function () {
							var now;
							now = moment();
							moment.locale("en");
							scope.year = now.format("YYYY");
							scope.date = now.format("D");
							scope.day = now.format("ddd");
							scope.time = now.format("h:mm:ss");
							return scope.month = now.format("MMM")
						};
						timedUpdate = function () {
							update();
							$timeout(timedUpdate, 1000)
						};
						return timedUpdate()
					}
				}
			}
		]);
		app.directive("clock", ["$filter", "$timeout", "isMobile",
			function ($filter, $timeout, isMobile) {
				return {
					scope: {
						location: "@"
					},
					template: '<div class="circle clock"><div class="face"><div id="hour"></div><div id="minute"></div><div id="second"></div><ul class="digits"><li> <span>1</span></li><li><span>2</span></li><li><span>3</span></li><li><span>4</span></li><li><span>5</span></li><li><span>6</span></li><li><span>7</span></li><li><span>8</span></li><li><span>9</span></li><li><span>10</span></li><li><span>11</span></li><li><span>12</span></li></ul></div></div><div class="ampm">{{ampm}}</div>{{location}}',
					link: function (scope, el, attr) {
						var timedUpdate, update;
						if (isMobile()) {
							return
						}
						update = function () {
							var hour, minute, moment, now, obj, prefix, second;
							moment = window.moment;
							prefix = $filter("prefix");
							now = moment().tz(attr.timezone);
							second = now.seconds() * 6;
							minute = now.minutes() * 6 + second / 60;
							hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
							obj = {};
							obj[prefix.css + "transform"] = "rotate(" + hour + "deg)";
							angular.element(el[0].querySelector("#hour")).css(obj);
							obj[prefix.css + "transform"] = "rotate(" + minute + "deg)";
							angular.element(el[0].querySelector("#minute")).css(obj);
							obj[prefix.css + "transform"] = "rotate(" + second + "deg)";
							angular.element(el[0].querySelector("#second")).css(obj);
							scope.ampm = now.format("a")
						};
						timedUpdate = function () {
							update();
							$timeout(timedUpdate, 1000)
						};
						return timedUpdate()
					}
				}
			}
		]);
		app.directive("abouts", ["$window",
			function ($window) {
				return {
					link: function (scope, el, attr) {
						var resize;
						resize = function () {
							var height, wh;
							wh = $window.innerHeight;
							el.css({
								height: "auto"
							});
							height = el[0].offsetHeight;
							if (height < wh) {
								return el.css({
									height: height,
									"margin-top": -height / 2,
									top: wh * 0.9 / 2
								})
							}
						};
						resize();
						return angular.element($window).bind("resize", resize)
					}
				}
			}
		]);
		app.directive("about", ["$timeout",
			function ($timeout) {
				return {
					link: function (scope, el, attr) {
						var appendLetter, cursor, lineIndex, newLine, position, printLine, text;
						lineIndex = 0;
						position = 0;
						text = "";
						cursor = "<span class=cursor>|</span>";
						newLine = function () {
							text = "";
							if (scope.text[lineIndex]) {
								return printLine(scope.text[lineIndex])
							}
						};
						printLine = function (line) {
							position = 0;
							return appendLetter(line, line[position])
						};
						appendLetter = function (line, l) {
							text += line[position];
							el.html(text + cursor);
							position++;
							if (position < line.length) {
								return $timeout(function () {
									return appendLetter(line, line[position])
								}, 40 + Math.random() * 20)
							} else {
								lineIndex++;
								return $timeout(function () {
									return newLine()
								}, 2000)
							}
						};
						return $timeout(newLine, 100)
					}
				}
			}
		]);
		app.directive("glass", ["$window", "$filter",
			function ($window, $filter) {
				return {
					link: function (scope, el, att) {
						var prefix, resize;
						prefix = $filter("prefix");
						resize = function () {
							var obj, transform, width;
							width = $window.innerWidth;
							if (el.hasClass("left")) {
								obj = {};
								obj[prefix.css + "transform"] = "translateX(" + width + "px) rotateY(90deg)";
								return el.css(obj)
							} else {
								if (el.hasClass("right")) {
									obj = {};
									obj[prefix.css + "transform"] = "translateX(" + -width + "px) rotateY(-90deg)";
									return el.css(obj)
								} else {
									if (el.hasClass("back")) {
										obj = {};
										obj[prefix.css + "transform"] = " translateZ(" + (-width) + "px) rotateY(-180deg)";
										return el.css(obj)
									}
								}
							}
						};
						resize();
						return angular.element($window).bind("resize", function () {
							return resize()
						})
					}
				}
			}
		]);
		app.directive("copyrightml", ["$document", "$window", "$timeout", "$state", "isMobile", "$filter",
			function ($document, $window, $timeout, $state, isMobile, $filter) {
				return {
					link: function (scope, el, att) {
						var prefix = $filter("prefix");
						var $arrowLeft, $arrowRight, auto, cleanup, last, randomVertical, resize, rotateScene, scale, specular, updateRotation, w;
						scope.oldH = 0;
						scope.oldV = 0;
						scope.newH = 0;
						scope.newV = 0;
						scope.oldR = 0;
						scope.newR = scope.rotate.y;
						scope.dragX = 0;
						rotateScene = function (e) {
							scope.newH = 0.5 - (e.pageX / $window.innerWidth);
							return scope.newV = -0.5 + (e.pageY / $window.innerHeight)
						};
						specular = el.find("specular");
						last = new Date();
						updateRotation = function () {
							var dr, dx, dy, elapsed, inc, now, offset, transform, transform2;
							now = new Date();
							elapsed = now - last;
							last = now;
							dr = scope.rotate.y + scope.dragX - scope.oldR;
							if (Math.abs(dr) > 0.1) {
								dr *= 0.1
							}
							scope.oldR += dr;
							inc = 0.05;
							if (scope.mode === "auto") {
								inc = 0.04
							}
							dx = scope.newH - scope.oldH;
							dy = scope.newV - scope.oldV;
							if (Math.abs(dx) > 0.001) {
								dx *= inc
							}
							if (Math.abs(dy) > 0.001) {
								dy *= inc
							}
							scope.oldH += dx;
							scope.oldV += dy;
							if (scope.oldV === 0) {
								scope.odV = 0.0001
							}
							if (scope.oldH === 0) {
								scope.odH = 0.0001
							}
							var obj = {};
							obj[prefix.css + "transform"] = " translateZ(" + -$window.innerWidth / 2 + "px) rotateX(" + (scope.oldV * 5) + "deg) rotateY(" + ((scope.oldH * 5) + scope.oldR) + "deg) translateZ(" + $window.innerWidth / 2 + "px)";
							el.css(obj);
							offset = 0;
							if (!isMobile()) {
								transform2 = "translateX(" + (scope.oldH * -400) + "px ) translateY(" + (-scope.oldV * 400 + offset) + "px) translateZ(0)";
								Array.prototype.slice.apply(specular).forEach(function (spec) {
									var specEl;
									specEl = angular.element(spec);
									if (specEl.hasClass("active")) {
										return specEl.css({
											transform: transform2,
											"-moz-transform": transform2,
											"-ms-transform": transform2,
											"-webkit-transform": transform2
										})
									}
								})
							}
							transform = "rotateX(" + (65 + (scope.oldV * 20)) + "deg) rotateY(" + (10 - (scope.oldH * 20)) + "deg) skewX(-15deg)";
							if (isMobile()) {
								return $timeout(updateRotation, 20)
							} else {
								return window.requestAnimationFrame(updateRotation, 30)
							}
						};
						resize = function () {
							scope.windowWidth = $window.innerWidth;
							return el.css
						};
						resize();
						$document.on("mousemove", rotateScene);
						scale = 250;
						w = angular.element($window);
						$arrowLeft = angular.element(el[0].getElementsByClassName("leftArrow"));
						$arrowRight = angular.element(el[0].getElementsByClassName("rightArrow"));
						$arrowLeft.on("click", function () {
							return scope.rotate.y += 90
						});
						$arrowRight.on("click", function () {
							return scope.rotate.y -= 90
						});
						cleanup = function () {
							var angle, page, state;
							if (scope.page === "instagram") {
								return
							}
							w.unbind("pointermove");
							scope.rotate.y += Math.round(scope.dragX / 90) * 90;
							scope.dragX = 0;
							angle = scope.rotate.y % 360;
							switch (angle) {
							case 0:
								page = "";
								break;
							case 90:
								page = "charts";
								break;
							case -90:
								page = "projects";
								break;
							case 180:
								page = "about";
								break;
							case 270:
								page = "projects";
								break;
							case -270:
								page = "charts";
								break;
							case -180:
								page = "about"
							}
							if (page === "") {
								state = "index"
							} else {
								state = "index." + page
							}
							$state.go(state);
							return el.removeClass("grab")
						};
						auto = function () {
							var t;
							scope.rotate.y -= 90;
							cleanup();
							t = Math.random();
							return $timeout(auto, 40000 * t)
						};
						randomVertical = function () {
							var h, v;
							v = Math.random();
							h = Math.random();
							scope.newV = (v - 0.5) * 1.5;
							scope.newH = (h - 0.5) * 2;
							return $timeout(randomVertical, 6000 * v)
						};
						scope.$watch("page", function () {
							if (scope.page === "auto") {
								scope.rotate.y = -90;
								cleanup();
								randomVertical();
								auto();
								return scope.mode = "auto"
							}
						});
						el.bind("pointerdown", function (e) {
							var startX, startY;
							el.addClass("grab");
							startX = e.x;
							startY = e.y;
							return w.bind("pointermove", function (e) {
								return scope.dragX = ((e.x - startX) / scope.windowWidth) * scale
							})
						});
						w.bind("pointerup", function (e) {
							return cleanup()
						});
						w.bind("resize", function () {
							return resize()
						});
						document.addEventListener("mouseout", function (e) {
							var from;
							e = (e ? e : window.event);
							from = e.relatedTarget || e.toElement;
							if (!from || from.nodeName === "HTML") {
								e.preventDefault();
								cleanup()
							}
						});
						return updateRotation()
					}
				}
			}
		]);
		app.directive("graph", ["$window", "$filter", "isMobile",
			function ($window, $filter, isMobile) {
				if (window.IE) {
					return
				}
				return {
					link: function (scope, el, att) {
						var animate, area, data, gradient, gx, gy, height, line, margin, maximum, minimum, movingWindowAvg, parseDate, path, path2, resize, roll, svg, ticks, tooltip, updateChart, width, x, xAxis, y, yAxis;
						animate = true;
						if (isMobile()) {
							animate = false
						}
						data = $filter("btcTrim")(scope.history, scope.trim);
						parseDate = d3.time.format("%b %Y").parse;
						margin = [30, 30, 50, 50];
						width = Math.max($window.innerWidth * 0.5, 300) - margin[1] - margin[3];
						height = Math.max($window.innerHeight * 0.5, 300) - margin[0] - margin[2];
						if (isMobile()) {
							height = width * 1.7 / 3
						}
						svg = d3.select("#chart").append("svg").attr("viewBox", "0 0 " + (width + margin[3] + margin[1]) + " " + (height + margin[0] + margin[2])).attr("preserveAspectRatio", "xMidYMid").attr("width", width + margin[3] + margin[1]).attr("height", height + margin[0] + margin[2]).append("svg:g").attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");
						ticks = 5;
						if (isMobile()) {
							ticks = 3
						}
						x = d3.time.scale().range([0, width]);
						y = d3.scale.linear().range([height, 0]);
						xAxis = d3.svg.axis().scale(x).orient("bottom").tickSize(3).tickPadding(3).ticks(ticks);
						yAxis = d3.svg.axis().scale(y).orient("left").tickSize(3).tickPadding(3).ticks(ticks).tickFormat(d3.format("$,f"));
						tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
						movingWindowAvg = function (arr, step) {
							return arr.map(function (_, idx) {
								var result, wnd;
								wnd = arr.slice(idx - step, idx + step + 1);
								result = d3.sum(wnd) / wnd.length;
								if (isNaN(result)) {
									result = _
								}
								return result
							})
						};
						line = function (data, k) {
							data = data.map(function (d, i) {
								if (i > k) {
									return [k, data[k]]
								} else {
									return [i, d]
								}
							});
							return d3.svg.line().interpolate("monotone").x(function (d) {
								return x(d[1].date)
							}).y(function (d) {
								return y(d[1].price)
							})(data)
						};
						area = function (data, k) {
							data = data.map(function (d, i) {
								if (i > k) {
									return [k, data[k]]
								} else {
									return [i, d]
								}
							});
							return d3.svg.area().interpolate("monotone").x(function (d) {
								return x(d[1].date)
							}).y0(height).y1(function (d) {
								return y(d[1].price)
							})(data)
						};
						x.domain(d3.extent(data.map(function (d) {
							return d.date
						})));
						maximum = d3.max(data.map(function (d) {
							return d.price
						}));
						minimum = d3.min(data.map(function (d) {
							return d.price
						}));
						y.domain([parseInt(minimum) - 5, parseInt(maximum) + 5]);
						gradient = svg.append("svg:defs").append("svg:linearGradient").attr("id", "gradient").attr("x2", "0%").attr("y2", "100%");
						gradient.append("svg:stop").attr("offset", "0%").attr("stop-color", "#fff").attr("stop-opacity", 0.2);
						gradient.append("svg:stop").attr("offset", "100%").attr("stop-color", "#fff").attr("stop-opacity", 0);
						roll = function (path, k, lineRoll) {
							if (lineRoll) {
								if (k < data.length) {
									return path.transition().duration(1).ease("linear").attr("d", line(data, k)).each("end", function () {
										return roll(path, k + 1, true)
									})
								}
							} else {
								if (k < data.length) {
									return path.transition().duration(1).ease("linear").attr("d", area(data, k)).each("end", function () {
										return roll(path, k + 1)
									})
								}
							}
						};
						path2 = svg.append("path").style("fill", "none");
						path = svg.append("path").attr("class", "area").attr("clip-path", "url(#clip)").style("fill", "url(#gradient)").style("stroke", "none");
						gx = svg.append("svg:g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
						gy = svg.append("svg:g").attr("class", "y axis").attr("transform", "translate(0,0)").call(yAxis);
						resize = function () {
							width = Math.max($window.innerWidth * 0.5, 300) - margin[1] - margin[3];
							height = Math.max($window.innerHeight * 0.5, 300) - margin[0] - margin[2];
							return svg.attr("width", width + margin[3] + margin[1]).attr("height", height + margin[0] + margin[2]).attr("transform", "translate(" + margin[3] + "," + margin[0] + ")")
						};
						updateChart = function (redraw) {
							data = $filter("btcTrim")(scope.history, scope.trim);
							x.domain(d3.extent(data.map(function (d) {
								return d.date
							})));
							maximum = d3.max(data.map(function (d) {
								return d.price
							}));
							minimum = d3.min(data.map(function (d) {
								return d.price
							}));
							y.domain([minimum - 4, maximum + 4]);
							gx.call(xAxis);
							gy.call(yAxis);
							if (animate) {
								if (redraw) {
									path.attr("d", area(data, 0)).transition().attr("clip-path", "url(#clip)");
									path2.attr("d", line(data, 0)).transition();
									roll(path2, 0, true);
									return roll(path, 0)
								} else {
									path.datum(data).transition().attr("clip-path", "url(#clip)").attr("d", area(data, data.lenght - 1));
									return path2.datum(data).transition().attr("d", line(data, data.lenght - 1))
								}
							} else {
								path.datum(data).attr("clip-path", "url(#clip)").attr("d", area(data, data.lenght - 1));
								return path2.datum(data).attr("d", line(data, data.lenght - 1))
							}
						};
						updateChart(true);
						scope.$watch("history.length", function (newV, oldV) {
							var redraw;
							if (newV !== oldV) {
								redraw = false;
								if (Math.abs(newV - oldV) > 2) {
									redraw = true
								}
								return updateChart(redraw)
							}
						});
						scope.$watch("trim", function (newV, oldV) {
							if (newV !== oldV) {
								return updateChart()
							}
						});
						return angular.element($window).bind("resize", resize)
					}
				}
			}
		])
	}

	function servicesJS() {
		var app;
		app = angular.module("Þ.services", []);
		app.factory("webGL", function ($window, $http) {
			return {
				Available: function () {
					try {
						var canvas = document.createElement("canvas");
						return !!$window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
					} catch (e) {
						return false
					}
				}
			}
		});
		app.factory("isMobile", function ($window) {
			return function () {
				if ($window.innerWidth < 700) {
					return true
				}
				return false
			}
		});
		app.factory("siteMap", [
			function () {
				return txtSiteMap
			}
		]);
		app.factory("projectsService", [
			function () {
				return {
					projects: txtProject
				}
			}
		])
	}

	function filtersJS() {
		var app;
		app = angular.module("Þ.filters", []);
		app.filter("ticker", ["$sce",
			function ($sce) {
				return function (data, cur) {
					if (data) {
						return parseFloat(data).toFixed(2)
					}
				}
			}
		]);
		app.filter("ticke", ["$sce",
			function ($sce) {
				return function (data, cur) {
					if (data) {
						return parseFloat(data).toFixed(0).replace(/./g, function (c, i, a) {
							return i && c !== "." && ((a.length - i) % 3 === 0) ? "," + c : c
						})
					}
				}
			}
		]);
		app.filter("bitData", [
			function () {
				return function (data) {
					if (data[0]) {
						data.reverse();
						data.forEach(function (d) {
							d.price = parseFloat(d.last);
							return d.date = new Date(d.timestamp)
						})
					} else {
						data.price = parseFloat(data.last);
						data.date = new Date(parseInt(data.timestamp * 1000))
					}
					return data
				}
			}
		]);
		app.filter("prefix", [
			function () {
				var dom, pre, styles;
				styles = window.getComputedStyle(document.documentElement, "");
				pre = (Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) || (styles.OLink === "" && ["", "o"]))[1];
				dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
				return {
					dom: dom,
					lowercase: pre,
					css: "-" + pre + "-",
					js: pre[0].toUpperCase() + pre.substr(1)
				}
			}
		]);
		app.filter("btcTrim", [
			function () {
				return function (data, trim) {
					var trimmed;
					trimmed = data.slice(Math.max(data.length - trim, 1));
					return trimmed
				}
			}
		])
	}
	"use strict";
	var app;
	app = angular.module("Þ", ["Þ.filters", "Þ.services", "Þ.directives", "Þ.controllers", "ui.router", "ngAnimate"]);
	app.config(["$locationProvider", "$stateProvider",
		function ($locationProvider, $stateProvider) {
			$locationProvider.html5Mode(true).hashPrefix("!");
			$stateProvider.state("index", {
				url: "/",
				page: ""
			});
			$stateProvider.state("auto", {
				url: "/auto",
				page: "auto"
			});
			$stateProvider.state("index.about", {
				url: "about",
				page: "about"
			});
			$stateProvider.state("index.charts", {
				url: "charts",
				page: "charts"
			});
			return $stateProvider.state("index.projects", {
				url: "projects",
				page: "projects"
			})
		}
	]);
	controllersJS();
	directivesJS();
	servicesJS();
	filtersJS()
}! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) {
			throw new Error("jQuery requires a window with a document")
		}
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
		d = a.document,
		e = c.slice,
		f = c.concat,
		g = c.push,
		h = c.indexOf,
		i = {},
		j = i.toString,
		k = i.hasOwnProperty,
		l = {},
		m = "1.12.4",
		n = function (a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function (a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function () {
			return e.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
		},
		pushStack: function (a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a) {
			return n.each(this, a)
		},
		map: function (a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
			if (null != (e = arguments[h])) {
				for (d in e) {
					a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c))
				}
			}
		}
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray || function (a) {
			return "array" === n.type(a)
		},
		isWindow: function (a) {
			return null != a && a == a.window
		},
		isNumeric: function (a) {
			var b = a && a.toString();
			return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) {
				return !1
			}
			return !0
		},
		isPlainObject: function (a) {
			var b;
			if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
				return !1
			}
			try {
				if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) {
					return !1
				}
			} catch (c) {
				return !1
			}
			if (!l.ownFirst) {
				for (b in a) {
					return k.call(a, b)
				}
			}
			for (b in a) {}
			return void 0 === b || k.call(a, b)
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
		},
		globalEval: function (b) {
			b && n.trim(b) && (a.execScript || function (b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function (a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b) {
			var c, d = 0;
			if (s(a)) {
				for (c = a.length; c > d; d++) {
					if (b.call(a[d], d, a[d]) === !1) {
						break
					}
				}
			} else {
				for (d in a) {
					if (b.call(a[d], d, a[d]) === !1) {
						break
					}
				}
			}
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
		},
		inArray: function (a, b, c) {
			var d;
			if (b) {
				if (h) {
					return h.call(b, a, c)
				}
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
					if (c in b && b[c] === a) {
						return c
					}
				}
			}
			return -1
		},
		merge: function (a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) {
				a[e++] = b[d++]
			}
			if (c !== c) {
				while (void 0 !== b[d]) {
					a[e++] = b[d++]
				}
			}
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f])
			}
			return e
		},
		map: function (a, b, c) {
			var d, e, g = 0,
				h = [];
			if (s(a)) {
				for (d = a.length; d > g; g++) {
					e = b(a[g], g, c), null != e && h.push(e)
				}
			} else {
				for (g in a) {
					e = b(a[g], g, c), null != e && h.push(e)
				}
			}
			return f.apply([], h)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, d, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
				return a.apply(b || this, c.concat(e.call(arguments)))
			}, d.guid = a.guid = a.guid || n.guid++, d) : void 0
		},
		now: function () {
			return +new Date
		},
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
		i["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = !!a && "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ga(),
			z = ga(),
			A = ga(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++) {
					if (a[c] === b) {
						return c
					}
				}
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
			O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
			P = new RegExp(L + "+", "g"),
			Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			R = new RegExp("^" + L + "*," + L + "*"),
			S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			U = new RegExp(O),
			V = new RegExp("^" + M + "$"),
			W = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + N),
				PSEUDO: new RegExp("^" + O),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_ = /[+~]/,
			aa = /'|\\/g,
			ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			ca = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			da = function () {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (ea) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]) {}
					a.length = c - 1
				}
			}
		}

		function fa(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
				x = b ? b.nodeType : 9;
			if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
				return d
			}
			if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== x && (o = $.exec(a))) {
					if (f = o[1]) {
						if (9 === x) {
							if (!(j = b.getElementById(f))) {
								return d
							}
							if (j.id === f) {
								return d.push(j), d
							}
						} else {
							if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
								return d.push(j), d
							}
						}
					} else {
						if (o[2]) {
							return H.apply(d, b.getElementsByTagName(a)), d
						}
						if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
							return H.apply(d, b.getElementsByClassName(f)), d
						}
					}
				}
				if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== x) {
						w = b, s = a
					} else {
						if ("object" !== b.nodeName.toLowerCase()) {
							(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
							while (h--) {
								r[h] = l + " " + qa(r[h])
							}
							s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
						}
					} if (s) {
						try {
							return H.apply(d, w.querySelectorAll(s)), d
						} catch (y) {} finally {
							k === u && b.removeAttribute("id")
						}
					}
				}
			}
			return i(a.replace(Q, "$1"), b, d, e)
		}

		function ga() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ha(a) {
			return a[u] = !0, a
		}

		function ia(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ja(a, b) {
			var c = a.split("|"),
				e = c.length;
			while (e--) {
				d.attrHandle[c[e]] = b
			}
		}

		function ka(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) {
				return d
			}
			if (c) {
				while (c = c.nextSibling) {
					if (c === b) {
						return -1
					}
				}
			}
			return a ? 1 : -1
		}

		function la(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function na(a) {
			return ha(function (b) {
				return b = +b, ha(function (c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					}
				})
			})
		}

		function oa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = fa.support = {}, f = fa.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fa.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ia(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c)
					}
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ia(function (a) {
				var b = n.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return !0
						}
					}
				}
				return !1
			}, B = b ? function (a, b) {
				if (a === b) {
					return l = !0, 0
				}
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) {
					return l = !0, 0
				}
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					g = [a],
					h = [b];
				if (!e || !f) {
					return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
				}
				if (e === f) {
					return ka(a, b)
				}
				c = a;
				while (c = c.parentNode) {
					g.unshift(c)
				}
				c = b;
				while (c = c.parentNode) {
					h.unshift(c)
				}
				while (g[d] === h[d]) {
					d++
				}
				return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
			}, n) : n
		}, fa.matches = function (a, b) {
			return fa(a, null, null, b)
		}, fa.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
				try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
						return d
					}
				} catch (e) {}
			}
			return fa(b, n, null, [a]).length > 0
		}, fa.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fa.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fa.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fa.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f))
				}
				while (e--) {
					a.splice(d[e], 1)
				}
			}
			return k = null, a
		}, e = fa.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) {
						return a.textContent
					}
					for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a)
					}
				} else {
					if (3 === f || 4 === f) {
						return a.nodeValue
					}
				}
			} else {
				while (b = a[d++]) {
					c += e(b)
				}
			}
			return c
		}, d = fa.selectors = {
			cacheLength: 50,
			createPseudo: ha,
			match: W,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ba, ca).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = fa.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if (q) {
							if (f) {
								while (p) {
									m = b;
									while (m = m[p]) {
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
											return !1
										}
									}
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
								}
							} else {
								if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) {
									while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
										if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) {
											break
										}
									}
								}
							}
							return t -= e, t === d || t % d === 0 && t / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) {
							d = J(a, f[g]), a[d] = !(c[d] = f[g])
						}
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ha(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(Q, "$1"));
					return d[u] ? ha(function (a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f))
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ha(function (a) {
					return function (b) {
						return fa(a, b).length > 0
					}
				}),
				contains: ha(function (a) {
					return a = a.replace(ba, ca),
						function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ha(function (a) {
					return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
						function (b) {
							var c;
							do {
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
									return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
								}
							} while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) {
							return !1
						}
					}
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Y.test(a.nodeName)
				},
				input: function (a) {
					return X.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: na(function () {
					return [0]
				}),
				last: na(function (a, b) {
					return [b - 1]
				}),
				eq: na(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: na(function (a, b) {
					for (var c = 0; b > c; c += 2) {
						a.push(c)
					}
					return a
				}),
				odd: na(function (a, b) {
					for (var c = 1; b > c; c += 2) {
						a.push(c)
					}
					return a
				}),
				lt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) {
						a.push(d)
					}
					return a
				}),
				gt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) {
						a.push(d)
					}
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) {
			d.pseudos[b] = la(b)
		}
		for (b in {
			submit: !0,
			reset: !0
		}) {
			d.pseudos[b] = ma(b)
		}

		function pa() {}
		pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) {
				return b ? 0 : k.slice(0)
			}
			h = a, i = [], j = d.preFilter;
			while (h) {
				c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(Q, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) {
					!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), h = h.slice(c.length))
				}
				if (!c) {
					break
				}
			}
			return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
		};

		function qa(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) {
				d += a[b].value
			}
			return d
		}

		function ra(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d]) {
					if (1 === b.nodeType || e) {
						return a(b, c, f)
					}
				}
			} : function (b, c, g) {
				var h, i, j, k = [w, f];
				if (g) {
					while (b = b[d]) {
						if ((1 === b.nodeType || e) && a(b, c, g)) {
							return !0
						}
					}
				} else {
					while (b = b[d]) {
						if (1 === b.nodeType || e) {
							if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
								return k[2] = h[2]
							}
							if (i[d] = k, k[2] = a(b, c, g)) {
								return !0
							}
						}
					}
				}
			}
		}

		function sa(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--) {
					if (!a[e](b, c, d)) {
						return !1
					}
				}
				return !0
			} : a[0]
		}

		function ta(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) {
				fa(a, b[d], c)
			}
			return c
		}

		function ua(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
				(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)))
			}
			return g
		}

		function va(a, b, c, d, e, f) {
			return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ta(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : ua(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ua(r, n), d(j, [], h, i), k = j.length;
					while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
					}
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--) {
								(l = r[k]) && j.push(q[k] = l)
							}
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--) {
							(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
						}
					}
				} else {
					r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
				}
			})
		}

		function wa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
				return a === b
			}, h, !0), l = ra(function (a) {
				return J(b, a) > -1
			}, h, !0), m = [
				function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}
			]; f > i; i++) {
				if (c = d.relative[a[i].type]) {
					m = [ra(sa(m), c)]
				} else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) {
							if (d.relative[a[e].type]) {
								break
							}
						}
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
					}
					m.push(c)
				}
			}
			return sa(m)
		}

		function xa(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, o, q, r = 0,
						s = "0",
						t = f && [],
						u = [],
						v = j,
						x = f || e && d.find.TAG("*", k),
						y = w += null == v ? 1 : Math.random() || 0.1,
						z = x.length;
					for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
						if (e && l) {
							o = 0, g || l.ownerDocument === n || (m(l), h = !p);
							while (q = a[o++]) {
								if (q(l, g || n, h)) {
									i.push(l);
									break
								}
							}
							k && (w = y)
						}
						c && ((l = !q && l) && r--, f && t.push(l))
					}
					if (r += s, c && s !== r) {
						o = 0;
						while (q = b[o++]) {
							q(t, u, g, h)
						}
						if (f) {
							if (r > 0) {
								while (s--) {
									t[s] || u[s] || (u[s] = F.call(i))
								}
							}
							u = ua(u)
						}
						H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
					}
					return k && (w = y, j = v), t
				};
			return c ? ha(f) : f
		}
		return h = fa.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) {
					f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
				}
				f = A(a, xa(e, d)), f.selector = a
			}
			return f
		}, i = fa.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
						return e
					}
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = W.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) {
						break
					}
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && qa(j), !a) {
							return H.apply(e, f), e
						}
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ia(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ja("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ia(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ja("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ia(function (a) {
			return null == a.getAttribute("disabled")
		}) || ja(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fa
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function (a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType) {
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) {
						break
					}
					d.push(a)
				}
			}
			return d
		},
		v = function (a, b) {
			for (var c = []; a; a = a.nextSibling) {
				1 === a.nodeType && a !== b && c.push(a)
			}
			return c
		},
		w = n.expr.match.needsContext,
		x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		y = /^.[^:#\[\.,]*$/;

	function z(a, b, c) {
		if (n.isFunction(b)) {
			return n.grep(a, function (a, d) {
				return !!b.call(a, d, a) !== c
			})
		}
		if (b.nodeType) {
			return n.grep(a, function (a) {
				return a === b !== c
			})
		}
		if ("string" == typeof b) {
			if (y.test(b)) {
				return n.filter(b, a, c)
			}
			b = n.filter(b, a)
		}
		return n.grep(a, function (a) {
			return n.inArray(a, b) > -1 !== c
		})
	}
	n.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function (a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) {
				return this.pushStack(n(a).filter(function () {
					for (b = 0; e > b; b++) {
						if (n.contains(d[b], this)) {
							return !0
						}
					}
				}))
			}
			for (b = 0; e > b; b++) {
				n.find(a, d[b], c)
			}
			return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function (a) {
			return this.pushStack(z(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(z(this, a || [], !0))
		},
		is: function (a) {
			return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
		}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = n.fn.init = function (a, b, c) {
			var e, f;
			if (!a) {
				return this
			}
			if (c = c || A, "string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) {
					return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
				}
				if (e[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
						for (e in b) {
							n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
						}
					}
					return this
				}
				if (f = d.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) {
						return A.find(a)
					}
					this.length = 1, this[0] = f
				}
				return this.context = d, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/,
		E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.fn.extend({
		has: function (a) {
			var b, c = n(a, this),
				d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++) {
					if (n.contains(this, c[b])) {
						return !0
					}
				}
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
				}
			}
			return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function F(a, b) {
		do {
			a = a[b]
		} while (a && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return u(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return u(a, "parentNode", c)
		},
		next: function (a) {
			return F(a, "nextSibling")
		},
		prev: function (a) {
			return F(a, "previousSibling")
		},
		nextAll: function (a) {
			return u(a, "nextSibling")
		},
		prevAll: function (a) {
			return u(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return u(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return u(a, "previousSibling", c)
		},
		siblings: function (a) {
			return v((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return v(a.firstChild)
		},
		contents: function (a) {
			return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
		}
	}, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var G = /\S+/g;

	function H(a) {
		var b = {};
		return n.each(a.match(G) || [], function (a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function (a) {
		a = "string" == typeof a ? H(a) : n.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function () {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) {
						f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
					}
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function () {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						n.each(b, function (b, c) {
							n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function () {
					return n.each(arguments, function (a, b) {
						var c;
						while ((c = n.inArray(b, f, c)) > -1) {
							f.splice(c, 1), h >= c && h--
						}
					}), this
				},
				has: function (a) {
					return a ? n.inArray(a, f) > -1 : f.length > 0
				},
				empty: function () {
					return f && (f = []), this
				},
				disable: function () {
					return e = g = [], f = c = "", this
				},
				disabled: function () {
					return !f
				},
				lock: function () {
					return e = !0, c || j.disable(), this
				},
				locked: function () {
					return !!e
				},
				fireWith: function (a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function () {
					return j.fireWith(this, arguments), this
				},
				fired: function () {
					return !!d
				}
			};
		return j
	}, n.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return n.Deferred(function (c) {
							n.each(b, function (b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b = 0,
				c = e.call(arguments),
				d = c.length,
				f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function (a, b, c) {
					return function (d) {
						b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (d > 1) {
				for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
					c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f
				}
			}
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var I;
	n.fn.ready = function (a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function (a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
		}
	});

	function J() {
		d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}

	function K() {
		(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
	}
	n.ready.promise = function (b) {
		if (!I) {
			if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) {
				a.setTimeout(n.ready)
			} else {
				if (d.addEventListener) {
					d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K)
				} else {
					d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
					var c = !1;
					try {
						c = null == a.frameElement && d.documentElement
					} catch (e) {}
					c && c.doScroll && ! function f() {
						if (!n.isReady) {
							try {
								c.doScroll("left")
							} catch (b) {
								return a.setTimeout(f, 50)
							}
							J(), n.ready()
						}
					}()
				}
			}
		}
		return I.promise(b)
	}, n.ready.promise();
	var L;
	for (L in n(l)) {
		break
	}
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
		var a, b, c, e;
		c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
	}),
	function () {
		var a = d.createElement("div");
		l.deleteExpando = !0;
		try {
			delete a.test
		} catch (b) {
			l.deleteExpando = !1
		}
		a = null
	}();
	var M = function (a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		},
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(O, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				n.data(a, b, c)
			} else {
				c = void 0
			}
		}
		return c
	}

	function Q(a) {
		var b;
		for (b in a) {
			if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
				return !1
			}
		}
		return !0
	}

	function R(a, b, d, e) {
		if (M(a)) {
			var f, g, h = n.expando,
				i = a.nodeType,
				j = i ? n.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
				return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
					toJSON: n.noop
				}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
			}
		}
	}

	function S(a, b, c) {
		if (M(a)) {
			var d, e, f = a.nodeType,
				g = f ? n.cache : a,
				h = f ? a[n.expando] : n.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) {
						delete d[b[e]]
					}
					if (c ? !Q(d) : !n.isEmptyObject(d)) {
						return
					}
				}(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	n.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (a) {
			return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
		},
		data: function (a, b, c) {
			return R(a, b, c)
		},
		removeData: function (a, b) {
			return S(a, b)
		},
		_data: function (a, b, c) {
			return R(a, b, c, !0)
		},
		_removeData: function (a, b) {
			return S(a, b, !0)
		}
	}), n.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])))
					}
					n._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				n.data(this, a)
			}) : arguments.length > 1 ? this.each(function () {
				n.data(this, a, b)
			}) : f ? P(f, a, n.data(f, a)) : void 0
		},
		removeData: function (a) {
			return this.each(function () {
				n.removeData(this, a)
			})
		}
	}), n.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function () {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return n._data(a, c) || n._data(a, c, {
				empty: n.Callbacks("once memory").add(function () {
					n._removeData(a, b + "queue"), n._removeData(a, c)
				})
			})
		}
	}), n.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				n.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) {
				c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
			}
			return h(), e.promise(b)
		}
	}),
	function () {
		var a;
		l.shrinkWrapBlocks = function () {
			if (null != a) {
				return a
			}
			a = !1;
			var b, c, e;
			return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
		}
	}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
		V = ["Top", "Right", "Bottom", "Left"],
		W = function (a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ? function () {
				return d.cur()
			} : function () {
				return n.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
			k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do {
				f = f || ".5", k /= f, n.style(a, b, k + j)
			} while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	var Y = function (a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) {
					Y(a, b, h, c[h], !0, f, g)
				}
			} else {
				if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
					return j.call(n(a), c)
				})), b)) {
					for (; i > h; h++) {
						b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
					}
				}
			}
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		Z = /^(?:checkbox|radio)$/i,
		$ = /<([\w:-]+)/,
		_ = /^$|\/(?:java|ecma)script/i,
		aa = /^\s+/,
		ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function ca(a) {
		var b = ba.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) {
			while (b.length) {
				c.createElement(b.pop())
			}
		}
		return c
	}! function () {
		var a = d.createElement("div"),
			b = d.createDocumentFragment(),
			c = d.createElement("input");
		a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

	function ea(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f) {
			for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
				!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b))
			}
		}
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}

	function fa(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) {
			n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
		}
	}
	var ga = /<|&#?\w+;/,
		ha = /<tbody/i;

	function ia(a) {
		Z.test(a.type) && (a.defaultChecked = a.checked)
	}

	function ja(a, b, c, d, e) {
		for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
			if (g = a[r], g || 0 === g) {
				if ("object" === n.type(g)) {
					n.merge(q, g.nodeType ? [g] : g)
				} else {
					if (ga.test(g)) {
						i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
						while (f--) {
							i = i.lastChild
						}
						if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
							g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
							while (f--) {
								n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
							}
						}
						n.merge(q, i.childNodes), i.textContent = "";
						while (i.firstChild) {
							i.removeChild(i.firstChild)
						}
						i = p.lastChild
					} else {
						q.push(b.createTextNode(g))
					}
				}
			}
		}
		i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
		while (g = q[r++]) {
			if (d && n.inArray(g, d) > -1) {
				e && e.push(g)
			} else {
				if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
					f = 0;
					while (g = i[f++]) {
						_.test(g.type || "") && c.push(g)
					}
				}
			}
		}
		return i = null, p
	}! function () {
		var b, c, e = d.createElement("div");
		for (b in {
			submit: !0,
			change: !0,
			focusin: !0
		}) {
			c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1)
		}
		e = null
	}();
	var ka = /^(?:input|select|textarea)$/i,
		la = /^key/,
		ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		na = /^(?:focusinfocus|focusoutblur)$/,
		oa = /^([^.]*)(?:\.(.+)|)/;

	function pa() {
		return !0
	}

	function qa() {
		return !1
	}

	function ra() {
		try {
			return d.activeElement
		} catch (a) {}
	}

	function sa(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) {
				sa(a, h, c, d, b[h], f)
			}
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) {
			e = qa
		} else {
			if (!e) {
				return a
			}
		}
		return 1 === f && (g = e, e = function (a) {
			return n().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
			n.event.add(this, b, e, d, c)
		})
	}
	n.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
					return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
				while (h--) {
					f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
						type: o,
						origType: q,
						data: d,
						handler: c,
						guid: c.guid,
						selector: e,
						needsContext: e && n.expr.match.needsContext.test(e),
						namespace: p.join(".")
					}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0)
				}
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(G) || [""], j = b.length;
				while (j--) {
					if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
						while (f--) {
							g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g))
						}
						i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
					} else {
						for (o in k) {
							n.event.remove(a, o + b[j], c, d, !0)
						}
					}
				}
				n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
			}
		},
		trigger: function (b, c, e, f) {
			var g, h, i, j, l, m, o, p = [e || d],
				q = k.call(b, "type") ? b.type : b,
				r = k.call(b, "namespace") ? b.namespace.split(".") : [];
			if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
				if (!f && !l.noBubble && !n.isWindow(e)) {
					for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
						p.push(i), m = i
					}
					m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
				}
				o = 0;
				while ((i = p[o++]) && !b.isPropagationStopped()) {
					b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault())
				}
				if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
					m = e[h], m && (e[h] = null), n.event.triggered = q;
					try {
						e[q]()
					} catch (s) {}
					n.event.triggered = void 0, m && (e[h] = m)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = n.event.fix(a);
			var b, c, d, f, g, h = [],
				i = e.call(arguments),
				j = (n._data(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
						a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
					}
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
				for (; i != this; i = i.parentNode || this) {
					if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
						for (d = [], c = 0; h > c; c++) {
							f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
						}
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
				}
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function (a) {
			if (a[n.expando]) {
				return a
			}
			var b, c, e, f = a.type,
				g = a,
				h = this.fixHooks[f];
			h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
			while (b--) {
				c = e[b], a[c] = g[c]
			}
			return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, e, f, g = b.button,
					h = b.fromElement;
				return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== ra() && this.focus) {
						try {
							return this.focus(), !1
						} catch (a) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === ra() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c) {
			var d = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0
			});
			n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = d.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: qa,
		isPropagationStopped: qa,
		isImmediatePropagationStopped: qa,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), l.submit || (n.event.special.submit = {
		setup: function () {
			return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target,
					c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
				c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
					a._submitBubble = !0
				}), n._data(c, "submit", !0))
			})
		},
		postDispatch: function (a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
		},
		teardown: function () {
			return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
		}
	}), l.change || (n.event.special.change = {
		setup: function () {
			return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
			}), n.event.add(this, "click._change", function (a) {
				this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
			})), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
				}), n._data(b, "change", !0))
			})
		},
		handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return n.event.remove(this, "._change"), !ka.test(this.nodeName)
		}
	}), l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			n.event.simulate(b, a.target, n.event.fix(a))
		};
		n.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = n._data(d, b);
				e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = n._data(d, b) - 1;
				e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
			}
		}
	}), n.fn.extend({
		on: function (a, b, c, d) {
			return sa(this, a, b, c, d)
		},
		one: function (a, b, c, d) {
			return sa(this, a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) {
				return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
			}
			if ("object" == typeof a) {
				for (e in a) {
					this.off(e, b, a[e])
				}
				return this
			}
			return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g,
		ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
		va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		wa = /<script|<style|<link/i,
		xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ya = /^true\/(.*)/,
		za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Aa = ca(d),
		Ba = Aa.appendChild(d.createElement("div"));

	function Ca(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function Da(a) {
		return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
	}

	function Ea(a) {
		var b = ya.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function Fa(a, b) {
		if (1 === b.nodeType && n.hasData(a)) {
			var c, d, e, f = n._data(a),
				g = n._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) {
					for (d = 0, e = h[c].length; e > d; d++) {
						n.event.add(b, c, h[c][d])
					}
				}
			}
			g.data && (g.data = n.extend({}, g.data))
		}
	}

	function Ga(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
				e = n._data(b);
				for (d in e.events) {
					n.removeEvent(b, d, e.handle)
				}
				b.removeAttribute(n.expando)
			}
			"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
		}
	}

	function Ha(a, b, c, d) {
		b = f.apply([], b);
		var e, g, h, i, j, k, m = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = n.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) {
			return a.each(function (e) {
				var f = a.eq(e);
				r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
			})
		}
		if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
			for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
				g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m)
			}
			if (h) {
				for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
					g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")))
				}
			}
			k = e = null
		}
		return a
	}

	function Ia(a, b, c) {
		for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
			c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d))
		}
		return a
	}
	n.extend({
		htmlPrefilter: function (a) {
			return a.replace(va, "<$1></$2>")
		},
		clone: function (a, b, c) {
			var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
			if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
				for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
					d[g] && Ga(e, d[g])
				}
			}
			if (b) {
				if (c) {
					for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
						Fa(e, d[g])
					}
				} else {
					Fa(a, f)
				}
			}
			return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
		},
		cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
				if ((b || M(d)) && (f = d[i], g = f && j[f])) {
					if (g.events) {
						for (e in g.events) {
							m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle)
						}
					}
					j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
				}
			}
		}
	}), n.fn.extend({
		domManip: Ha,
		detach: function (a) {
			return Ia(this, a, !0)
		},
		remove: function (a) {
			return Ia(this, a)
		},
		text: function (a) {
			return Y(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function () {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && n.cleanData(ea(a, !1));
				while (a.firstChild) {
					a.removeChild(a.firstChild)
				}
				a.options && n.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b)
			})
		},
		html: function (a) {
			return Y(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) {
					return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0
				}
				if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = n.htmlPrefilter(a);
					try {
						for (; d > c; c++) {
							b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a)
						}
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = [];
			return Ha(this, arguments, function (b) {
				var c = this.parentNode;
				n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
				c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get())
			}
			return this.pushStack(e)
		}
	});
	var Ja, Ka = {
		HTML: "block",
		BODY: "block"
	};

	function La(a, b) {
		var c = n(b.createElement(a)).appendTo(b.body),
			d = n.css(c[0], "display");
		return c.detach(), d
	}

	function Ma(a) {
		var b = d,
			c = Ka[a];
		return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
	}
	var Na = /^margin/,
		Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
		Pa = function (a, b, c, d) {
			var e, f, g = {};
			for (f in b) {
				g[f] = a.style[f], a.style[f] = b[f]
			}
			e = c.apply(a, d || []);
			for (f in b) {
				a.style[f] = g[f]
			}
			return e
		},
		Qa = d.documentElement;
	! function () {
		var b, c, e, f, g, h, i = d.createElement("div"),
			j = d.createElement("div");
		if (j.style) {
			j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
				reliableHiddenOffsets: function () {
					return null == b && k(), f
				},
				boxSizingReliable: function () {
					return null == b && k(), e
				},
				pixelMarginRight: function () {
					return null == b && k(), c
				},
				pixelPosition: function () {
					return null == b && k(), b
				},
				reliableMarginRight: function () {
					return null == b && k(), g
				},
				reliableMarginLeft: function () {
					return null == b && k(), h
				}
			});

			function k() {
				var k, l, m = d.documentElement;
				m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
					width: "4px"
				}).width, j.style.marginRight = "50%", c = "4px" === (l || {
					marginRight: "4px"
				}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
			}
		}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function (b) {
		var c = b.ownerDocument.defaultView;
		return c && c.opener || (c = a), c.getComputedStyle(b)
	}, Sa = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
	}) : Qa.currentStyle && (Ra = function (a) {
		return a.currentStyle
	}, Sa = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function Ua(a, b) {
		return {
			get: function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Va = /alpha\([^)]*\)/i,
		Wa = /opacity\s*=\s*([^)]*)/i,
		Xa = /^(none|table(?!-c[ea]).+)/,
		Ya = new RegExp("^(" + T + ")(.*)$", "i"),
		Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		$a = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		_a = ["Webkit", "O", "Moz", "ms"],
		ab = d.createElement("div").style;

	function bb(a) {
		if (a in ab) {
			return a
		}
		var b = a.charAt(0).toUpperCase() + a.slice(1),
			c = _a.length;
		while (c--) {
			if (a = _a[c] + b, a in ab) {
				return a
			}
		}
	}

	function cb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
			d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))))
		}
		for (g = 0; h > g; g++) {
			d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
		}
		return a
	}

	function db(a, b, c) {
		var d = Ya.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function eb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
			"margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)))
		}
		return g
	}

	function fb(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) {
				return e
			}
			d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = Sa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) {
					return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
				}
				if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
					try {
						i[b] = c
					} catch (j) {}
				}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
		}
	}), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
					return fb(a, b, d)
				}) : fb(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && Ra(a);
				return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), l.opacity || (n.cssHooks.opacity = {
		get: function (a, b) {
			return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function (a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
		}
	}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
		return b ? Pa(a, {
			display: "inline-block"
		}, Sa, [a, "marginRight"]) : void 0
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
		return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
			marginLeft: 0
		}, function () {
			return a.getBoundingClientRect().left
		}) : 0)) + "px" : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		n.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
					e[a + V[d] + b] = f[d] || f[d - 2] || f[0]
				}
				return e
			}
		}, Na.test(a) || (n.cssHooks[a + b].set = db)
	}), n.fn.extend({
		css: function (a, b) {
			return Y(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) {
						f[b[g]] = n.css(a, b[g], !1, d)
					}
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return cb(this, !0)
		},
		hide: function () {
			return cb(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				W(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function gb(a, b, c, d, e) {
		return new gb.prototype.init(a, b, c, d, e)
	}
	n.Tween = gb, gb.prototype = {
		constructor: gb,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = gb.propHooks[this.prop];
			return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = gb.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
		}
	}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function (a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return 0.5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/,
		kb = /queueHooks$/;

	function lb() {
		return a.setTimeout(function () {
			hb = void 0
		}), hb = n.now()
	}

	function mb(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
			c = V[e], d["margin" + c] = d["padding" + c] = a
		}
		return b && (d.opacity = d.width = a), d
	}

	function nb(a, b, c) {
		for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
			if (d = e[f].call(c, b, a)) {
				return d
			}
		}
	}

	function ob(a, b, c) {
		var d, e, f, g, h, i, j, k, m = this,
			o = {},
			p = a.style,
			q = a.nodeType && W(a),
			r = n._data(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, m.always(function () {
			m.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b) {
			if (e = b[d], jb.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
					if ("show" !== e || !r || void 0 === r[d]) {
						continue
					}
					q = !0
				}
				o[d] = r && r[d] || n.style(a, d)
			} else {
				j = void 0
			}
		}
		if (n.isEmptyObject(o)) {
			"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j)
		} else {
			r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
				n(a).hide()
			}), m.done(function () {
				var b;
				n._removeData(a, "fxshow");
				for (b in o) {
					n.style(a, b, o[b])
				}
			});
			for (d in o) {
				g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
			}
		}
	}

	function pb(a, b) {
		var c, d, e, f, g;
		for (c in a) {
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) {
					c in a || (a[c] = f[c], b[c] = e)
				}
			} else {
				b[d] = e
			}
		}
	}

	function qb(a, b, c) {
		var d, e, f = 0,
			g = qb.prefilters.length,
			h = n.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) {
					return !1
				}
				for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
					j.tweens[g].run(f)
				}
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: hb || lb(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) {
						return this
					}
					for (e = !0; d > c; c++) {
						j.tweens[c].run(1)
					}
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (pb(k, j.opts.specialEasing); g > f; f++) {
			if (d = qb.prefilters[f].call(j, a, k, j.opts)) {
				return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
			}
		}
		return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(qb, {
		tweeners: {
			"*": [
				function (a, b) {
					var c = this.createTween(a, b);
					return X(c.elem, a, U.exec(b), c), c
				}
			]
		},
		tweener: function (a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
			for (var c, d = 0, e = a.length; e > d; d++) {
				c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
			}
		},
		prefilters: [ob],
		prefilter: function (a, b) {
			b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
		}
	}), n.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : {
			complete: c || !c && b || n.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !n.isFunction(b) && b
		};
		return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
		}, d
	}, n.fn.extend({
		fadeTo: function (a, b, c, d) {
			return this.filter(W).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function (a, b, c, d) {
			var e = n.isEmptyObject(a),
				f = n.speed(b, c, d),
				g = function () {
					var b = qb(this, n.extend({}, a), f);
					(e || n._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = n.timers,
					g = n._data(this);
				if (e) {
					g[e] && g[e].stop && d(g[e])
				} else {
					for (e in g) {
						g[e] && g[e].stop && kb.test(e) && d(g[e])
					}
				}
				for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
				}!b && c || n.dequeue(this, a)
			})
		},
		finish: function (a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b, c = n._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = n.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
				}
				for (b = 0; g > b; b++) {
					d[b] && d[b].finish && d[b].finish.call(this)
				}
				delete c.finish
			})
		}
	}), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];
		n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
		}
	}), n.each({
		slideDown: mb("show"),
		slideUp: mb("hide"),
		slideToggle: mb("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), n.timers = [], n.fx.tick = function () {
		var a, b = n.timers,
			c = 0;
		for (hb = n.now(); c < b.length; c++) {
			a = b[c], a() || b[c] !== a || b.splice(c--, 1)
		}
		b.length || n.fx.stop(), hb = void 0
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
	}, n.fx.interval = 13, n.fx.start = function () {
		ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
	}, n.fx.stop = function () {
		a.clearInterval(ib), ib = null
	}, n.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, n.fn.delay = function (b, c) {
		return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
			var e = a.setTimeout(c, b);
			d.stop = function () {
				a.clearTimeout(e)
			}
		})
	},
	function () {
		var a, b = d.createElement("input"),
			c = d.createElement("div"),
			e = d.createElement("select"),
			f = e.appendChild(d.createElement("option"));
		c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
	}();
	var rb = /\r/g,
		sb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0];
			if (arguments.length) {
				return d = n.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				})
			}
			if (e) {
				return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
						if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) {
								return b
							}
							g.push(b)
						}
					}
					return g
				},
				set: function (a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) {
						if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) {
							try {
								d.selected = c = !0
							} catch (h) {
								d.scrollHeight
							}
						} else {
							d.selected = !1
						}
					}
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = {
			set: function (a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var tb, ub, vb = n.expr.attrHandle,
		wb = /^(?:checked|selected)$/i,
		xb = l.getSetAttribute,
		yb = l.input;
	n.fn.extend({
		attr: function (a, b) {
			return Y(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) {
				return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
			}
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(G);
			if (f && 1 === a.nodeType) {
				while (c = f[e++]) {
					d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
				}
			}
		}
	}), ub = {
		set: function (a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = vb[b] || n.find.attr;
		yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
			var e, f;
			return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
		} : vb[b] = function (a, b, c) {
			return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), yb && xb || (n.attrHooks.value = {
		set: function (a, b, c) {
			return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
		}
	}), xb || (tb = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, vb.id = vb.name = vb.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, n.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: tb.set
	}, n.attrHooks.contenteditable = {
		set: function (a, b, c) {
			tb.set(a, "" === b ? !1 : b, c)
		}
	}, n.each(["width", "height"], function (a, b) {
		n.attrHooks[b] = {
			set: function (a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), l.style || (n.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		},
		set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var zb = /^(?:input|select|textarea|button|object)$/i,
		Ab = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function (a, b) {
			return Y(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return a = n.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), n.extend({
		prop: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) {
				return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
			}
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					var b = n.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
		n.propHooks[b] = {
			get: function (a) {
				return a.getAttribute(b, 4)
			}
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		},
		set: function (a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;

	function Cb(a) {
		return n.attr(a, "class") || ""
	}
	n.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) {
				return this.each(function (b) {
					n(this).addClass(a.call(this, b, Cb(this)))
				})
			}
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) {
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++]) {
							d.indexOf(" " + f + " ") < 0 && (d += f + " ")
						}
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
				}
			}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) {
				return this.each(function (b) {
					n(this).removeClass(a.call(this, b, Cb(this)))
				})
			}
			if (!arguments.length) {
				return this.attr("class", "")
			}
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) {
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++]) {
							while (d.indexOf(" " + f + " ") > -1) {
								d = d.replace(" " + f + " ", " ")
							}
						}
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
				}
			}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
				n(this).toggleClass(a.call(this, c, Cb(this), b), b)
			}) : this.each(function () {
				var b, d, e, f;
				if ("string" === c) {
					d = 0, e = n(this), f = a.match(G) || [];
					while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
					}
				} else {
					void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
				}
			})
		},
		hasClass: function (a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while (c = this[d++]) {
				if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) {
					return !0
				}
			}
			return !1
		}
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Db = a.location,
		Eb = n.now(),
		Fb = /\?/,
		Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse) {
			return a.JSON.parse(b + "")
		}
		var c, d = null,
			e = n.trim(b + "");
		return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}, n.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b) {
			return null
		}
		try {
			a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
	};
	var Hb = /#.*$/,
		Ib = /([?&])_=[^&]*/,
		Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Lb = /^(?:GET|HEAD)$/,
		Mb = /^\/\//,
		Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Ob = {},
		Pb = {},
		Qb = "*/".concat("*"),
		Rb = Db.href,
		Sb = Nb.exec(Rb.toLowerCase()) || [];

	function Tb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(G) || [];
			if (n.isFunction(c)) {
				while (d = f[e++]) {
					"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
				}
			}
		}
	}

	function Ub(a, b, c, d) {
		var e = {},
			f = a === Pb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Vb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (d in b) {
			void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
		}
		return c && n.extend(!0, a, c), a
	}

	function Wb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) {
			i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
		}
		if (e) {
			for (g in h) {
				if (h[g] && h[g].test(e)) {
					i.unshift(g);
					break
				}
			}
		}
		if (i[0] in c) {
			f = i[0]
		} else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Xb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1]) {
			for (g in a.converters) {
				j[g.toLowerCase()] = a.converters[g]
			}
		}
		f = k.shift();
		while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
				if ("*" === f) {
					f = i
				} else {
					if ("*" !== i && i !== f) {
						if (g = j[i + " " + f] || j["* " + f], !g) {
							for (e in j) {
								if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
									g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
									break
								}
							}
						}
						if (g !== !0) {
							if (g && a["throws"]) {
								b = g(b)
							} else {
								try {
									b = g(b)
								} catch (l) {
									return {
										state: "parsererror",
										error: g ? l : "No conversion from " + i + " to " + f
									}
								}
							}
						}
					}
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Rb,
			type: "GET",
			isLocal: Kb.test(Sb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
		},
		ajaxPrefilter: Tb(Ob),
		ajaxTransport: Tb(Pb),
		ajax: function (b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
				m = l.context || l,
				o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
				p = n.Deferred(),
				q = n.Callbacks("once memory"),
				r = l.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === u) {
							if (!k) {
								k = {};
								while (b = Jb.exec(g)) {
									k[b[1].toLowerCase()] = b[2]
								}
							}
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === u ? g : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function (a) {
						return u || (l.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a) {
							if (2 > u) {
								for (b in a) {
									r[b] = [r[b], a[b]]
								}
							} else {
								w.always(a[w.status])
							}
						}
						return this
					},
					abort: function (a) {
						var b = a || v;
						return j && j.abort(b), y(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) {
				return w
			}
			i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) {
				w.setRequestHeader(e, l.headers[e])
			}
			if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) {
				return w.abort()
			}
			v = "abort";
			for (e in {
				success: 1,
				error: 1,
				complete: 1
			}) {
				w[e](l[e])
			}
			if (j = Ub(Pb, l, c, w)) {
				if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) {
					return w
				}
				l.async && l.timeout > 0 && (h = a.setTimeout(function () {
					w.abort("timeout")
				}, l.timeout));
				try {
					u = 1, j.send(s, y)
				} catch (x) {
					if (!(2 > u)) {
						throw x
					}
					y(-1, x)
				}
			} else {
				y(-1, "No Transport")
			}

			function y(b, c, d, e) {
				var k, s, t, v, x, y = c;
				2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function (a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, n.isPlainObject(a) && a))
		}
	}), n._evalUrl = function (a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function (a) {
			if (n.isFunction(a)) {
				return this.each(function (b) {
					n(this).wrapAll(a.call(this, b))
				})
			}
			if (this[0]) {
				var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) {
						a = a.firstChild
					}
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function (a) {
			return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapInner(a.call(this, b))
			}) : this.each(function () {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = n.isFunction(a);
			return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	});

	function Yb(a) {
		return a.style && a.style.display || n.css(a, "display")
	}

	function Zb(a) {
		if (!n.contains(a.ownerDocument || d, a)) {
			return !0
		}
		while (a && 1 === a.nodeType) {
			if ("none" === Yb(a) || "hidden" === a.type) {
				return !0
			}
			a = a.parentNode
		}
		return !1
	}
	n.expr.filters.hidden = function (a) {
		return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a)
	};
	var $b = /%20/g,
		_b = /\[\]$/,
		ac = /\r?\n/g,
		bc = /^(?:submit|button|image|reset|file)$/i,
		cc = /^(?:input|select|textarea|keygen)/i;

	function dc(a, b, c, d) {
		var e;
		if (n.isArray(b)) {
			n.each(b, function (b, e) {
				c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
			})
		} else {
			if (c || "object" !== n.type(b)) {
				d(a, b)
			} else {
				for (e in b) {
					dc(a + "[" + e + "]", b[e], c, d)
				}
			}
		}
	}
	n.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
			n.each(a, function () {
				e(this.name, this.value)
			})
		} else {
			for (c in a) {
				dc(c, a[c], b, e)
			}
		}
		return d.join("&").replace($b, "+")
	}, n.fn.extend({
		serialize: function () {
			return n.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
			}).map(function (a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(ac, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(ac, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
	} : hc;
	var ec = 0,
		fc = {},
		gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in fc) {
			fc[a](void 0, !0)
		}
	}), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
		if (!b.crossDomain || l.cors) {
			var c;
			return {
				send: function (d, e) {
					var f, g = b.xhr(),
						h = ++ec;
					if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
						for (f in b.xhrFields) {
							g[f] = b.xhrFields[f]
						}
					}
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
					for (f in d) {
						void 0 !== d[f] && g.setRequestHeader(f, d[f] + "")
					}
					g.send(b.hasContent && b.data || null), c = function (a, d) {
						var f, i, j;
						if (c && (d || 4 === g.readyState)) {
							if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) {
								4 !== g.readyState && g.abort()
							} else {
								j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
								try {
									i = g.statusText
								} catch (k) {
									i = ""
								}
								f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
							}
						}
						j && e(f, i, j, g.getAllResponseHeaders())
					}, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
				},
				abort: function () {
					c && c(void 0, !0)
				}
			}
		}
	});

	function hc() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function ic() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = d.head || n("head")[0] || d.documentElement;
			return {
				send: function (e, f) {
					b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var jc = [],
		kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = jc.pop() || n.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) {
			return null
		}
		"boolean" == typeof b && (c = b, b = !1), b = b || d;
		var e = x.exec(a),
			f = !c && [];
		return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
	};
	var lc = n.fn.load;
	n.fn.load = function (a, b, c) {
		if ("string" != typeof a && lc) {
			return lc.apply(this, arguments)
		}
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem
		}).length
	};

	function mc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function (a) {
			if (arguments.length) {
				return void 0 === a ? this : this.each(function (b) {
					n.offset.setOffset(this, a, b)
				})
			}
			var b, c, d = {
					top: 0,
					left: 0
				},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) {
				return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
					top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
					left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
				}) : d
			}
		},
		position: function () {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - n.css(d, "marginTop", !0),
					left: b.left - c.left - n.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
					a = a.offsetParent
				}
				return a || Qa
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (a, b) {
		var c = /Y/.test(b);
		n.fn[a] = function (d) {
			return Y(this, function (a, d, e) {
				var f = mc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
			return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Y(this, function (b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.extend({
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), n.fn.size = function () {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n
	});
	var nc = a.jQuery,
		oc = a.$;
	return n.noConflict = function (b) {
		return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
	}, b || (a.jQuery = a.$ = n), n
});