!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "2bce489c-9acf-4c76-b12a-2e94e01ed2d4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2bce489c-9acf-4c76-b12a-2e94e01ed2d4"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [106],
    {
      35883: function () {},
      46601: function () {},
      89214: function () {},
      85568: function () {},
      9232: function (e, t, n) {
        "use strict";
        n.d(t, {
          rU: function () {
            return a;
          },
        });
        let {
          Link: a,
          redirect: s,
          usePathname: i,
          useRouter: r,
        } = (0, n(74669).iV)({ locales: ["en"], localePrefix: "as-needed" });
      },
      6182: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            QueryKey: function () {
              return s;
            },
            ReactQueryProvider: function () {
              return u;
            },
          });
        var a,
          s,
          i = n(57651);
        n(75874);
        var r = n(7150),
          l = n(78851),
          o = n(86348);
        let u = (e) => {
          let t,
            { children: n } = e,
            a = () =>
              new l.S({ defaultOptions: { queries: { staleTime: 6e4 } } }),
            s = r.sk ? a() : (t || (t = a()), t);
          return (0, i.jsx)(o.aH, {
            client: s,
            "data-sentry-element": "QueryClientProvider",
            "data-sentry-component": "ReactQueryProvider",
            "data-sentry-source-file": "react-query.tsx",
            children: n,
          });
        };
        ((a = s || (s = {})).CybroBalance = "CybroBalance"),
          (a.BalanceErc20 = "BalanceErc20"),
          (a.CybroRate = "CybroRate"),
          (a.CybroPrice = "CybroPrice"),
          (a.ExchangeGas = "ExchangeGas"),
          (a.ExchangePool = "ExchangePool"),
          (a.TotalStaked = "TotalStaked");
      },
      76933: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return g;
            },
          });
        var a = n(57651),
          s = n(76163),
          i = {
            src: "/_next/static/media/medium-2.fb881e49.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0,
          },
          r = {
            src: "/_next/static/media/debank.9ac407f2.svg",
            height: 32,
            width: 28,
            blurWidth: 0,
            blurHeight: 0,
          },
          l = {
            src: "/_next/static/media/twitter-2.01cbf297.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0,
          },
          o = {
            src: "/_next/static/media/discord-2.365eb190.svg",
            height: 17,
            width: 21,
            blurWidth: 0,
            blurHeight: 0,
          },
          u = {
            src: "/_next/static/media/tg-2.5d2dbe3a.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0,
          },
          d = n(10463),
          c = {
            src: "/_next/static/media/cookies.72944211.png",
            height: 45,
            width: 58,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Aer/9QD246kd+/b7iAH76EkBAwIF/wQZyv311mcHERzcAdzTewAC//F7/P4OhAECCv/7+f7/9+/iAvXw6m4JECGTAdfYnDQC89KX9/b8NPXw+v7v4t3/7+TYAxgrQOIpQ1ZdAdvQb+8B/wEQ+Oza/u3k/ADu5+cC5+L4ABcgFQATIzPvAdfGUeX8/xsa9OTd/9O7twHb1ADsO04t1PD3E0Dj1cCUAdbCTlf7/ROE7ePnHt7S1+zDwfJoocs+s6RlsS7yEFXdLxhzmD5ywkQAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 6,
          },
          p = n(75874);
        n(25609);
        var y = n(73010),
          m = n(19376),
          b = n(24079);
        function f(e) {
          let { translations: t } = e,
            [n, s] = (0, p.useState)(""),
            [i, r] = (0, p.useState)(!1),
            l = (0, p.createRef)(),
            o = !n || !i,
            u = async () => {
              var e;
              if (o) return;
              let t = await (null === (e = l.current) || void 0 === e
                ? void 0
                : e.executeAsync());
              try {
                if (
                  (
                    await fetch("".concat(y._, "/waitlist/signup"), {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ captcha_answer: t, email: n }),
                    })
                  ).ok
                ) {
                  (0, b.j4)(), s(""), r(!1);
                  let e = document.querySelector(".success");
                  (0, b.U)(e);
                }
              } catch (e) {
                console.error(e);
              }
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "overlay visually-hidden",
              children: (0, a.jsxs)("div", {
                className: "overlay__container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "popup waitlist visually-hidden",
                    children: [
                      (0, a.jsx)("button", {
                        className: "popup__close",
                        onClick: b.j4,
                      }),
                      (0, a.jsxs)("div", {
                        className: "popup__content",
                        children: [
                          (0, a.jsx)("h4", {
                            className:
                              "title title--h4 popup__title waitlist__title",
                            children: t.header,
                          }),
                          (0, a.jsx)("span", {
                            className: "waitlist__text",
                            children: t.comment,
                          }),
                          (0, a.jsxs)("div", {
                            className: "waitlist__form",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "waitlist__btns",
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "email",
                                    value: n,
                                    onChange: (e) => s(e.target.value),
                                    className: "waitlist__input",
                                    placeholder: "Enter your email",
                                  }),
                                  (0, a.jsx)(m.Z, {
                                    ref: l,
                                    size: "invisible",
                                    sitekey:
                                      "6Lfz2K8pAAAAAM2itpliUi-DHXaFNa12OUyoL54x",
                                    "data-sentry-element": "ReCAPTCHA",
                                    "data-sentry-source-file": "index.tsx",
                                  }),
                                  (0, a.jsx)("button", {
                                    className:
                                      "button button--yellow button--arrow waitlist__btn",
                                    style: {
                                      backgroundColor: o ? "#d3d3d3" : "",
                                      cursor: o ? "not-allowed" : "",
                                      transition: "background-color 0.5s",
                                    },
                                    disabled: o,
                                    onClick: u,
                                    children: "GET NOTIFIED",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "checkbox",
                                    checked: i,
                                    onChange: () => r(!i),
                                    className: "waitlist__checkbox",
                                    id: "terms",
                                  }),
                                  (0, a.jsxs)("label", {
                                    className: "waitlist__terms",
                                    htmlFor: "terms",
                                    children: [
                                      "I agree to the",
                                      " ",
                                      (0, a.jsx)("a", {
                                        href: "/pdf/terms.pdf",
                                        download: !0,
                                        target: "_blank",
                                        children: "Terms of Service",
                                      }),
                                      " ",
                                      "and",
                                      " ",
                                      (0, a.jsx)("a", {
                                        href: "/pdf/privacy.pdf",
                                        download: !0,
                                        target: "_blank",
                                        children: "Privacy Policy",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "popup success visually-hidden",
                    children: [
                      (0, a.jsx)("button", {
                        className: "popup__close",
                        onClick: b.j4,
                      }),
                      (0, a.jsxs)("div", {
                        className: "popup__content success__content",
                        children: [
                          (0, a.jsx)("span", {
                            className: "success__label",
                            children: "You’re added in the list!",
                          }),
                          (0, a.jsxs)("h4", {
                            className:
                              "title title--h4 popup__title success__title",
                            children: [
                              "STAY TUNED IN ",
                              (0, a.jsx)("b", { children: "SOCIAL" }),
                            ],
                          }),
                          (0, a.jsxs)("ul", {
                            className: "success__socials",
                            children: [
                              (0, a.jsx)("li", {
                                className: "success__social",
                                children: (0, a.jsx)("a", {
                                  href: "https://x.com/cybro_erc20",
                                  className:
                                    "success__social-link success__social-link--twitter",
                                  children: "Twitter",
                                }),
                              }),
                              (0, a.jsx)("li", {
                                className: "success__social",
                                children: (0, a.jsx)("a", {
                                  href: "https://t.me/cybro_erc20",
                                  className:
                                    "success__social-link success__social-link--telegram",
                                  children: "Telegram",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        n(7694);
        var _ = n(86055),
          h = n(26131);
        function x() {
          var e;
          _.c.trackCookieAccepted(),
            null === (e = document.querySelector(".cookies")) ||
              void 0 === e ||
              e.classList.remove("cookies--active"),
            (document.cookie = "cybroCookies=true; max-age=2592000; path=/");
        }
        function v() {
          var e;
          _.c.trackCookieDeclined(),
            null === (e = document.querySelector(".cookies")) ||
              void 0 === e ||
              e.classList.remove("cookies--active"),
            (document.cookie = "cybroCookies=false; max-age=2592000; path=/");
        }
        function g(e) {
          let { translations: t } = e;
          return (
            (0, p.useEffect)(() => {
              let e = document.querySelector(".cookies");
              -1 === document.cookie.indexOf("cybroCookies") &&
                (null == e || e.classList.add("cookies--active"));
            }),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "cookies",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "cookies__content",
                      children: [
                        (0, a.jsx)(s.default, {
                          src: c,
                          alt: "cookies",
                          className: "cookies__image",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "index.tsx",
                        }),
                        (0, a.jsxs)("p", {
                          className: "cookies__text",
                          children: [
                            (0, a.jsx)("b", { children: t.commentFirst }),
                            " ",
                            t.commentSecond,
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "cookies__btns",
                      children: [
                        (0, a.jsx)("button", {
                          className:
                            "cookies__btn cookies__btn--reverted cookies__apply",
                          onClick: x,
                          children: t.btnAccept,
                        }),
                        (0, a.jsx)("button", {
                          className: "cookies__btn cookies__cancel",
                          onClick: v,
                          children: t.btnReject,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("footer", {
                  className: "footer",
                  children: (0, a.jsxs)("div", {
                    className: "container_main footer__container",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "footer__block",
                        children: [
                          (0, a.jsx)("div", {
                            className: "logo footer__logo",
                            children: (0, a.jsx)("a", {
                              href: "/",
                              className: "logo__link",
                              children: (0, a.jsx)(s.default, {
                                src: d.Z,
                                alt: "cybro logo",
                                className: "logo__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "footer__info",
                            children: null == t ? void 0 : t.info,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "footer__block",
                        children: [
                          (0, a.jsx)("span", {
                            className: "footer__block-name",
                            children: t.follow,
                          }),
                          (0, a.jsxs)("ul", {
                            className: "footer__socials",
                            children: [
                              (0, a.jsx)("li", {
                                className: "footer__social",
                                children: (0, a.jsxs)("a", {
                                  href: "https://x.com/cybro_erc20",
                                  className: "footer__social-link",
                                  target: "_blank",
                                  children: [
                                    (0, a.jsx)(s.default, {
                                      className: "footer__social-img",
                                      src: l,
                                      alt: "x",
                                      "data-sentry-element": "Image",
                                      "data-sentry-source-file": "index.tsx",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "footer__social-name",
                                      children: "Twitter",
                                    }),
                                  ],
                                }),
                              }),
                             
                              (0, a.jsx)("li", {
                                className: "footer__social",
                                children: (0, a.jsxs)("a", {
                                  href: "https://t.me/cybro_erc20",
                                  className: "footer__social-link",
                                  target: "_blank",
                                  children: [
                                    (0, a.jsx)(s.default, {
                                      className: "footer__social-img",
                                      src: u,
                                      alt: "telegram",
                                      "data-sentry-element": "Image",
                                      "data-sentry-source-file": "index.tsx",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "footer__social-name",
                                      children: "Telegram Channel",
                                    }),
                                  ],
                                }),
                              }),
                              
                              
                             
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "footer__block",
                        children: [
                          (0, a.jsx)("span", {
                            className: "footer__block-name",
                            children: t.label,
                          }),
                          (0, a.jsxs)("ul", {
                            className: "footer__terms",
                            children: [
                              
                              (0, a.jsx)("li", {
                                className: "footer__term",
                                children: (0, a.jsx)("a", {
                                  href: "https://docs.cybro.io",
                                  className: "footer__term-link",
                                  target: "_blank",
                                  children: t.doc,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "footer__block",
                        children: [
                          (0, a.jsx)("span", {
                            className: "footer__block-name",
                            children: "Company",
                          }),
                          (0, a.jsx)("ul", {
                            className: "footer__terms",
                            children: (0, a.jsx)("li", {
                              className: "footer__term",
                              children: (0, a.jsx)("span", {
                                className: "text-sm",
                                children:
                                  "CoinLock Protector LLC, Saint Vincent and the Grenadines",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(f, {
                  translations: t.waitList,
                  "data-sentry-element": "Waitlist",
                  "data-sentry-source-file": "index.tsx",
                }),
              ],
            })
          );
        }
      },
      33797: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return B;
            },
          });
        var a = n(57651),
          s = n(76163),
          i = n(10463),
          r = n(36598),
          l = n(75911),
          o = n(75573),
          u = n(33448),
          d = {
            src: "/_next/static/media/small-arrow.5e573dae.svg",
            height: 10,
            width: 6,
            blurWidth: 0,
            blurHeight: 0,
          };
        n(54070);
        var c = n(75874),
          p = n(10435),
          y = n(9232),
          m = n(11129),
          b = n(79866),
          f = n(46796),
          _ = n(82884),
          h = n(52842);
        n(99184), n(28377);
        var x = n(50677),
          v = {
            src: "/_next/static/media/profile.6014b587.png",
            height: 60,
            width: 60,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42j2Pz0rDQByEp2yy4EFQUBFj/Jcc7Kq16qnWpFiN2tI2BW2ESHyEvuO+UO7Zy5RfoZ3TwPfBMJAoT5kwDO1zr+ceH7ouimMLoA1JEARS6ovzMwItjsYT/lcVjTE1ACOOzbJ3fo2nzbwL9q/B5DVrisWCwkRweZ6zLEve7oPLOfgzSlkUvxQGrbUDwEGaMD45ovSPYcrkpS9dGKzfAqPoqjnc9XgXQEAjolJqPWE+3wb16fGBAD7dXPK+06Hve/X2yWQ6a2vfs3pnz1XfQ/dXzOzmwQpn5Umpa9+qugAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8,
          },
          g = {
            src: "/_next/static/media/logo-mini.e64bb953.svg",
            height: 16,
            width: 17,
            blurWidth: 0,
            blurHeight: 0,
          },
          T = {
            src: "/_next/static/media/eth.9c609f95.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0,
          },
          w = {
            src: "/_next/static/media/usdb.50c08219.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0,
          },
          j = {
            src: "/_next/static/media/copy.c2b44696.svg",
            height: 19,
            width: 19,
            blurWidth: 0,
            blurHeight: 0,
          },
          N = n(3784),
          k = n(24079);
        let C = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "...";
            if (!e) return "";
            if (e.length <= 2 * t + n.length) return e;
            let a = e.substring(0, t),
              s = e.substring(e.length - t, e.length);
            return "".concat(a).concat(n).concat(s);
          },
          M = (e) => {
            var t, n;
            let {
                profileData: i,
                earnedYield: r,
                address: l,
                isLoading: o,
                cybroBalance: u,
              } = e,
              { disconnect: d } = (0, N.qL)(),
              p = (0, c.useMemo)(() => {
                var e, t, n, a, s;
                return {
                  list: [
                    {
                      label: "CYBRO Tokens",
                      value: (0, k.lb)(u),
                      leftIcon: g,
                      isNativeYieldInfo: !1,
                    },
                    {
                      label: "CYBRO Points",
                      value: "".concat(
                        null !== (s = null == i ? void 0 : i.points) &&
                          void 0 !== s
                          ? s
                          : 0,
                        " pts"
                      ),
                      isNativeYieldInfo: !1,
                    },
                    {
                      label: "Total Earned",
                      leftIcon: T,
                      value: "".concat(
                        (0, k.lb)(
                          Number(
                            null == r
                              ? void 0
                              : null === (e = r.ETH) || void 0 === e
                              ? void 0
                              : e.total
                          )
                        )
                      ),
                      isNativeYieldInfo: !0,
                    },
                    {
                      label: "Due Last Week",
                      leftIcon: T,
                      value: "".concat(
                        (0, k.lb)(
                          Number(
                            null == r
                              ? void 0
                              : null === (t = r.ETH) || void 0 === t
                              ? void 0
                              : t.last
                          )
                        )
                      ),
                      isNativeYieldInfo: !0,
                    },
                    {
                      label: null,
                      leftIcon: w,
                      value: "".concat(
                        (0, k.lb)(
                          Number(
                            null == r
                              ? void 0
                              : null === (n = r.USDB) || void 0 === n
                              ? void 0
                              : n.total
                          )
                        )
                      ),
                      isNativeYieldInfo: !0,
                    },
                    {
                      label: null,
                      leftIcon: w,
                      value: "".concat(
                        (0, k.lb)(
                          Number(
                            null == r
                              ? void 0
                              : null === (a = r.USDB) || void 0 === a
                              ? void 0
                              : a.last
                          )
                        )
                      ),
                      isNativeYieldInfo: !0,
                    },
                  ],
                  desc: "You are a participant in the Pre-Alpha Yield Program and earn <b>additional income</b> from your Cybro Token Balance.",
                };
              }, [i, r]),
              y = /<b>(.*)<\/b>/,
              m = p.desc.split(y),
              b = {
                firstPart: m[0],
                boldText:
                  (null == p
                    ? void 0
                    : null === (n = p.desc) || void 0 === n
                    ? void 0
                    : null === (t = n.match(y)) || void 0 === t
                    ? void 0
                    : t[1]) || "",
                secondPart: m[1],
              },
              f = (0, c.useMemo)(
                () =>
                  (null == i ? void 0 : i.balance_usd) && Number(i.balance_usd)
                    ? Number(i.balance_usd)
                    : 0,
                [null == i ? void 0 : i.balance_usd]
              );
            return (0, a.jsxs)("div", {
              className: "user-menu z-50 relative",
              "data-sentry-component": "ProfileStatsPanel",
              "data-sentry-source-file": "ProfileStatsPanel.tsx",
              children: [
                (0, a.jsxs)("div", {
                  className: "user-menu__header",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "user-menu__header-block",
                      children: [
                        (0, a.jsx)("span", {
                          className: "user-menu__header-label",
                          children: "Your Cybro Profile",
                        }),
                        (0, a.jsx)("button", {
                          onClick: d,
                          className: "user-menu__logout",
                          children: "Log out",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "user-menu__copy",
                      children: [
                        (0, a.jsx)(s.default, {
                          src: v,
                          alt: "profile",
                          className: "user-menu__logo",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "ProfileStatsPanel.tsx",
                        }),
                        l
                          ? (0, a.jsxs)(c.Fragment, {
                              children: [
                                (0, a.jsx)("span", {
                                  className: "user-menu__copy-text",
                                  children: C(l, 3),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "user-menu__copy-box",
                                  children: [
                                    (0, a.jsx)("button", {
                                      className: "user-menu__copy-btn",
                                      onClick: () => {
                                        navigator.clipboard.writeText(
                                          "".concat(l)
                                        );
                                      },
                                      children: (0, a.jsx)(s.default, {
                                        src: j,
                                        alt: "copy",
                                        className: "user-menu__copy-icon",
                                      }),
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "user-menu__copy-label",
                                      children: "Copied!",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsx)(_.X, {
                              classNames: {
                                base: "w-20 h-[22px] rounded-lg dark:bg-background-tableRow",
                              },
                            }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "user-menu__content",
                  children: [
                    (0, a.jsx)("ul", {
                      className: "user-menu__list",
                      children: p.list.map(
                        (e, t) =>
                          (!e.isNativeYieldInfo ||
                            (e.isNativeYieldInfo &&
                              (null == i
                                ? void 0
                                : i.claimable_yield_enrolled))) &&
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "user-menu__item".concat(
                                null === e.label
                                  ? " user-menu__item-compact"
                                  : ""
                              ),
                              children: [
                                null !== e.label &&
                                  (0, a.jsx)("span", {
                                    className: "user-menu__item-label",
                                    children: e.label,
                                  }),
                                (0, a.jsxs)("div", {
                                  className: "user-menu__item-content",
                                  children: [
                                    e.leftIcon
                                      ? (0, a.jsx)(s.default, {
                                          src: e.leftIcon,
                                          alt: "left icon",
                                          className:
                                            "user-menu__item-currency-left",
                                        })
                                      : null,
                                    (0, a.jsx)("span", {
                                      className: "user-menu__item-value",
                                      children: o
                                        ? (0, a.jsx)(_.X, {
                                            classNames: {
                                              base: "w-12 h-[22px] rounded-lg dark:bg-background-tableRow",
                                            },
                                          })
                                        : e.value,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            "userMenuItem" + t
                          )
                      ),
                    }),
                    !!f &&
                      (null == i ? void 0 : i.claimable_yield_enrolled) &&
                      (0, a.jsxs)("p", {
                        className: "user-menu__desc",
                        children: [
                          (0, a.jsx)("span", { children: b.firstPart }),
                          b.boldText
                            ? (0, a.jsx)("b", { children: b.boldText })
                            : null,
                          b.secondPart
                            ? (0, a.jsxs)("span", {
                                children: ["\xa0", b.secondPart],
                              })
                            : null,
                        ],
                      }),
                    (0, a.jsxs)("div", {
                      className: "user-menu__offer",
                      children: [
                        (0, a.jsx)("span", {
                          className: "user-menu__offer-title",
                          children: "Grow your CYBRO Capital",
                        }),
                        (0, a.jsx)("p", {
                          className: "user-menu__offer-desc",
                          children:
                            "Stake your CYBRO tokens and earn up to 20% more!",
                        }),
                        (0, a.jsx)(x.default, {
                          href: "https://app.cybro-ai.xyz/staking",
                          target: "_blank",
                          className:
                            "button button--yellow button--arrow user-menu__offer-btn",
                          rel: "noreferrer",
                          "data-sentry-element": "Link",
                          "data-sentry-source-file": "ProfileStatsPanel.tsx",
                          children: "Stake CYBRO",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var A = n(13714),
          S = n(4405);
        let I = () => {
            let { address: e } = (0, N.Tj)(),
              { data: t, isLoading: n } = (0, A._R0)(e, {
                query: { enabled: !!e, select: (e) => e.data.data },
              }),
              { data: a, isLoading: s } = (0, A.$_j)(e, {
                query: { enabled: !!e, select: (e) => e.data.data },
              }),
              { balance: i, isLoadingBalance: r } = (0, S.Y)(e);
            return {
              cybroBalance: i.locked + i.cybro,
              address: e,
              userProfile: t,
              earnedYield: a,
              isLoading: s || n || r,
            };
          },
          O = () => {
            let {
              address: e,
              cybroBalance: t,
              userProfile: n,
              earnedYield: i,
              isLoading: r,
            } = I();
            return (0, a.jsxs)(b.j, {
              placement: "bottom",
              "data-sentry-element": "Popover",
              "data-sentry-component": "ProfileStatsPopover",
              "data-sentry-source-file": "ProfileStatsPopover.tsx",
              children: [
                (0, a.jsx)(f.b, {
                  "data-sentry-element": "PopoverTrigger",
                  "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  children: (0, a.jsxs)("button", {
                    className: "user-toggle",
                    children: [
                      (0, a.jsx)("div", {
                        className: "user-toggle__profile",
                        children: (0, a.jsx)(s.default, {
                          src: v,
                          alt: "profile",
                          className: "user-toggle__profile-icon",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "ProfileStatsPopover.tsx",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "user-toggle__content",
                        children: [
                          (0, a.jsx)("div", {
                            className: "user-toggle__inner",
                            children: e
                              ? (0, a.jsx)("span", {
                                  className: "user-toggle__name",
                                  children: C(e, 3),
                                })
                              : (0, a.jsx)(_.X, {
                                  classNames: {
                                    base: "w-11 h-[14px] rounded-lg dark:bg-background-tableRow",
                                  },
                                }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "user-toggle__inner landscape",
                            children: [
                              (0, a.jsx)("span", {
                                className: "user-toggle__money",
                                children: r
                                  ? (0, a.jsx)(_.X, {
                                      classNames: {
                                        base: "w-6 h-[14px] rounded-lg dark:bg-background-tableRow",
                                      },
                                    })
                                  : (0, k.lb)(t),
                              }),
                              (0, a.jsx)(s.default, {
                                src: g,
                                alt: "logo icon",
                                className: "user-toggle__currency",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file":
                                  "ProfileStatsPopover.tsx",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(h.g, {
                  className: "p-0 bg-transparent shadow-none",
                  "data-sentry-element": "PopoverContent",
                  "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  children: (0, a.jsx)(M, {
                    isLoading: r,
                    address: e,
                    profileData: n,
                    earnedYield: i,
                    cybroBalance: t,
                    "data-sentry-element": "ProfileStatsPanel",
                    "data-sentry-source-file": "ProfileStatsPopover.tsx",
                  }),
                }),
              ],
            });
          };
        function P() {
          var e, t;
          document.body.classList.add("no-scroll"),
            null === (e = document.querySelector(".lang-menu--active")) ||
              void 0 === e ||
              e.classList.remove("lang-menu--active"),
            null === (t = document.querySelector(".mobile-menu")) ||
              void 0 === t ||
              t.classList.remove("visually-hidden");
        }
        function E(e) {
          var t, n;
          e.preventDefault(),
            null === (n = e.currentTarget.parentElement) ||
              void 0 === n ||
              null === (t = n.querySelector(".lang-menu")) ||
              void 0 === t ||
              t.classList.toggle("lang-menu--active");
        }
        function B(e) {
          let { translations: t } = e;
          return (
            (0, c.useEffect)(() => {
              let e = document.querySelector(".header");
              (window.onscroll = function () {
                window.scrollY > 10
                  ? null == e || e.classList.add("header--sticky")
                  : null == e || e.classList.remove("header--sticky");
              }),
                window.scrollY > 10 &&
                  (null == e || e.classList.add("header--sticky")),
                Array.from(
                  document.querySelectorAll(".lang-toggle__btn")
                ).forEach((e) => {
                  e.removeEventListener("click", E),
                    e.addEventListener("click", E);
                });
            }),
            (0, c.useEffect)(() => {
              let e = window.location.hash;
              if (e) {
                let t = document.querySelector(e);
                if (t) {
                  let e = t.getBoundingClientRect().top + window.scrollY - 25;
                  window.scrollTo({ top: e });
                }
              }
            }, []),
            (0, a.jsx)("header", {
              className: "header",
              "data-sentry-component": "Header",
              "data-sentry-source-file": "index.tsx",
              children: (0, a.jsxs)("div", {
                className: "container_main header__container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "header__column",
                    children: [
                      (0, a.jsx)("button", {
                        className: "mobile-menu__open mobile-desktop",
                        onClick: P,
                      }),
                      (0, a.jsx)("div", {
                        className: "logo header__logo",
                        children: (0, a.jsx)("a", {
                          href: "/",
                          className: "logo__link",
                          children: (0, a.jsx)(s.default, {
                            src: i.Z,
                            alt: "cybro logo",
                            className: "logo__img",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx",
                          }),
                        }),
                      }),
                      (0, a.jsx)("nav", {
                        className: "header__menu desktop",
                        children: (0, a.jsxs)("ul", {
                          className: "header__menu-list",
                          children: [
                            (0, a.jsx)("li", {
                              className: "header__menu-item",
                              children: (0, a.jsx)("a", {
                                href: "/en#about",
                                className: "header__menu-link",
                                children: "ABOUT US",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className: "header__menu-item",
                              children: (0, a.jsx)("a", {
                                href: "/en#faq",
                                className: "header__menu-link",
                                children: t.faq,
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className: "header__menu-item",
                              children: (0, a.jsx)("a", {
                                href: "https://docs.cybro.io",
                                className: "header__menu-link",
                                target: "_black",
                                children: "DOCS",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "header__column header__btns",
                    children: [
                      (0, a.jsxs)("ul", {
                        className: "socials desktop",
                        children: [
                          (0, a.jsx)("li", {
                            className: "social",
                            children: (0, a.jsx)("a", {
                              href: "https://x.com/cybro_erc20",
                              className: "header__btn social__link",
                              target: "_blank",
                              children: (0, a.jsx)(s.default, {
                                className: "social__img",
                                src: l.Z,
                                alt: "x",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                          }),
                          (0, a.jsx)("li", {
                            className: "social",
                            children: (0, a.jsx)("a", {
                              href: "https://t.me/cybro_erc20",
                              className: "header__btn social__link",
                              target: "_blank",
                              children: (0, a.jsx)(s.default, {
                                className: "social__img",
                                src: u.default,
                                alt: "telegram",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(y.rU, {
                        href: "https://app.cybro-ai.xyz/",
                        className: (0, p.Z)("header__launchButton"),
                        target: "_blank",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "index.tsx",
                        children: [
                          (0, a.jsx)(s.default, {
                            src: d,
                            alt: "",
                            className: "header__launchButton-icon",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx",
                          }),
                          "Launch app",
                        ],
                      }),
                      (0, a.jsx)(m.g2, {
                        className: "header__connectButton",
                        "data-sentry-element": "AppKitConnectButton",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, a.jsx)(O, {
                          "data-sentry-element": "ProfileStatsPopover",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
      },
      86661: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return y;
            },
          });
        var a = n(57651),
          s = n(76163),
          i = n(10463);
        n(77667);
        var r = n(36598),
          l = n(75911),
          o = n(75573),
          u = n(33448),
          d = n(24079),
          c = n(9232),
          p = n(11129);
        function y(e) {
          let { translations: t } = e;
          return (0, a.jsxs)("div", {
            className: "mobile-menu visually-hidden",
            "data-sentry-component": "MobileMenu",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, a.jsxs)("div", {
                className: "mobile-menu__content",
                children: [
                  (0, a.jsxs)("div", {
                    className: "mobile-menu__header",
                    children: [
                      (0, a.jsx)("a", {
                        href: "/",
                        className: "mobile-menu__logo-link",
                        children: (0, a.jsx)(s.default, {
                          src: i.Z,
                          alt: "cybro logo",
                          className: "mobile-menu__logo-img",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "index.tsx",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "mobile-menu__btns",
                        children: (0, a.jsx)("button", {
                          className: "mobile-menu__close",
                          onClick: d.Wj,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("ul", {
                    className: "mobile-menu__list",
                    children: [
                      (0, a.jsx)("li", {
                        className: "mobile-menu__item",
                        children: (0, a.jsx)("a", {
                          href: "/en#about",
                          className: "mobile-menu__link",
                          onClick: d.Wj,
                          children: "About us",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        className: "mobile-menu__item",
                        children: (0, a.jsx)("a", {
                          href: "/en#faq",
                          className: "mobile-menu__link",
                          onClick: d.Wj,
                          children: t.faq,
                        }),
                      }),
                      (0, a.jsx)("li", {
                        className: "mobile-menu__item",
                        children: (0, a.jsx)("a", {
                          href: "https://docs.cybro.io",
                          className: "mobile-menu__link",
                          onClick: d.Wj,
                          target: "_black",
                          children: "DOCS",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        className: "mobile-menu__item text-accent",
                        children: (0, a.jsx)("a", {
                          href: "https://app.cybro.io",
                          className: "mobile-menu__link",
                          onClick: d.Wj,
                          target: "_black",
                          children: "LAUNCH APP",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mobile-menu__footer",
                children: (0, a.jsxs)("div", {
                  className: "header__btns",
                  children: [
                    (0, a.jsxs)("ul", {
                      className: "socials",
                      children: [
                        (0, a.jsx)("li", {
                          className: "social",
                          children: (0, a.jsx)("a", {
                            href: "https://x.com/cybro_erc20",
                            className: "header__btn social__link",
                            target: "_blank",
                            children: (0, a.jsx)(s.default, {
                              className: "social__img",
                              src: l.Z,
                              alt: "x",
                              "data-sentry-element": "Image",
                              "data-sentry-source-file": "index.tsx",
                            }),
                          }),
                        }),
                        
                        (0, a.jsx)("li", {
                          className: "social",
                          children: (0, a.jsx)("a", {
                            href: "https://t.me/cybro_erc20",
                            className: "header__btn social__link",
                            target: "_blank",
                            children: (0, a.jsx)(s.default, {
                              className: "social__img",
                              src: u.default,
                              alt: "telegram",
                              "data-sentry-element": "Image",
                              "data-sentry-source-file": "index.tsx",
                            }),
                          }),
                        }),
                       
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mobile-menu__footer-btns",
                      children: (0, a.jsx)(p.g2, {
                        className: "bg-accent text-black w-full max-w-[450px]",
                        "data-sentry-element": "AppKitConnectButton",
                        "data-sentry-source-file": "index.tsx",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      4405: function (e, t, n) {
        "use strict";
        n.d(t, {
          Y: function () {
            return m;
          },
          U: function () {
            return x;
          },
        });
        var a = n(55137),
          s = n(74855),
          i = n(87818),
          r = n(40574),
          l = n(6182),
          o = n(28573),
          u = n(77215),
          d = n(6177),
          c = JSON.parse(
            '[{"inputs":[{"internalType":"address[]","name":"_lockedCYBROStakings","type":"address[]"},{"internalType":"address","name":"_cybro","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"uint256","name":"_tgeTimestamp","type":"uint256"},{"internalType":"uint8","name":"_tgePercent","type":"uint8"},{"internalType":"uint256","name":"_vestingStart","type":"uint256"},{"internalType":"uint256","name":"_vestingDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"ECDSAInvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"name":"ECDSAInvalidSignatureLength","type":"error"},{"inputs":[{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"ECDSAInvalidSignatureS","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"addWhitelistedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"allocations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cybro","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getClaimableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUnlockedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"totalBalance","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"mintFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintableByUsers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"mintersWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"removeWhitelistedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_mintableByUsers","type":"bool"}],"name":"setMintableByUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tgePercent","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tgeTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"transferWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
          );
        let p = (e, t) => new d.CH(e, c, t);
        var y = n(37875);
        let m = (e) => {
            let { data: t, isLoading: n } = (0, r.a)({
              queryKey: [l.QueryKey.CybroBalance, e],
              refetchInterval: 3e4,
              queryFn: async () => {
                var t, n;
                if (!e) return b;
                let r = new s.r(y.AEF.rpcUrls.default.http[0]);
                if (!r) return b;
                let l = (0, u.s)(o.$.cybro, r),
                  d = p(o.$.locked, r),
                  c = await d.decimals(),
                  m = await d.balanceOf(e),
                  f = await l.balanceOf(e),
                  _ = await d.claimedAmount(e);
                return {
                  locked: new a.O(
                    null !== (t = i.formatUnits(m, c)) && void 0 !== t ? t : 0
                  )
                    .dp(6, a.O.ROUND_DOWN)
                    .toNumber(),
                  cybro: new a.O(
                    null !== (n = i.formatUnits(f, c)) && void 0 !== n ? n : 0
                  )
                    .dp(6, a.O.ROUND_DOWN)
                    .toNumber(),
                  isClaimed: !_.isZero(),
                };
              },
            });
            return { balance: null != t ? t : b, isLoadingBalance: n };
          },
          b = { locked: 0, cybro: 0, isClaimed: !1 };
        var f = n(75874),
          _ = n(73010),
          h = n(3784);
        let x = () => {
          let { address: e } = (0, h.Tj)(),
            [t, n] = (0, f.useState)(),
            [a, s] = (0, f.useState)(),
            [i, r] = (0, f.useState)(!1);
          return (
            (0, f.useEffect)(() => {
              let t = async () => {
                  let t = await fetch(
                      "".concat(_._, "/users/profile/").concat(e)
                    ),
                    { data: a } = await t.json();
                  n(a);
                },
                a = async () => {
                  let t = await fetch(
                      ""
                        .concat(_._, "/users/profile/")
                        .concat(e, "/earned-yield")
                    ),
                    { data: n } = await t.json();
                  s(n);
                };
              (async () => {
                try {
                  r(!0), await a(), await t();
                } finally {
                  r(!1);
                }
              })();
            }, []),
            { isLoading: i, userProfile: t, earnedYield: a }
          );
        };
      },
      82077: function (e, t, n) {
        "use strict";
        n.d(t, {
          c: function () {
            return y;
          },
        });
        var a,
          s,
          i,
          r,
          l = n(55151),
          o = n.n(l);
        o().init("c2981df2111f2cc9046befb2b336602b", {
          api_host: "https://hiddenninja.cybro.io",
        });
        let u = {
          track: (e, t) => {
            o().track(e, t);
          },
        };
        ((a = i || (i = {})).JoinWaitlistClicked = "join_waitlist_clicked"),
          (a.CookieAccepted = "cookie_accepter"),
          (a.CookieDeclined = "cookie_declined"),
          (a.PageLoad = "page_load"),
          (a.Lead = "lead"),
          (a.Sale = "sale"),
          (a.UpSale = "upsale"),
          (a.PurchaseCybro = "purchase_cybro"),
          (a.PurchaseCybroError = "purchase_cybro_error"),
          (a.SellCybro = "sell_cybro"),
          (a.SellCybroError = "sell_cybro_error");
        let d = {
          join_waitlist_clicked: "waitlist",
          cookie_accepter: "cookie",
          cookie_declined: "cookie",
          page_load: "page",
          lead: "page",
          sale: "sale",
          upsale: "sale",
          purchase_cybro: "cybro_sale",
          purchase_cybro_error: "cybro_sale_error",
          sell_cybro: "cybro_sale",
          sell_cybro_error: "cybro_sale_error",
        };
        var c = n(37457);
        ((s = r || (r = {})).FormVersion = "formVersion"),
          (s.SubId = "subid"),
          (s.SubSale = "subSale");
        let p = {
            track: async (e, t) => {
              let n = (0, c.ej)(r.SubId);
              if (!n) return;
              let a = new URL(
                "https://addictiontreatment.one/77b8d72/postback"
              );
              a.searchParams.set("subid", n),
                a.searchParams.set("status", e),
                Object.entries(t).map((e) => {
                  let [t, n] = e;
                  return a.searchParams.set(
                    t,
                    "string" != typeof n ? JSON.stringify(n) : n
                  );
                }),
                a.searchParams.get("payout") ||
                  a.searchParams.set("payout", "0"),
                fetch(a, { method: "POST" }).catch(() => {
                  console.error("Failed to track postback event");
                });
            },
          },
          y = (function (e, t) {
            let n = (n) =>
              function () {
                let a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                t && console.debug("[ANALYTICS]: track", n, a), e(n, a);
              };
            return {
              trackJoinWaitClick: n(i.JoinWaitlistClicked),
              trackCookieAccepted: n(i.CookieAccepted),
              trackCookieDeclined: n(i.CookieDeclined),
              trackPageLoad: n(i.PageLoad),
              trackLead: n(i.Lead),
              trackSale: n(i.Sale),
              trackUpSale: n(i.UpSale),
              trackPurchaseCybro: n(i.PurchaseCybro),
              trackPurchaseCybroError: n(i.PurchaseCybroError),
              trackSellCybro: n(i.SellCybro),
              trackSellCybroError: n(i.SellCybroError),
            };
          })((e, t) => {
            var n, a, s, i;
            p.track(e, t),
              (n = e),
              (a = t),
              window.fbq && window.fbq("track", n, a),
              (s = e),
              (i = t),
              window.gtag && window.gtag("event", s, i),
              u.track(e, t),
              ((e) => {
                if (window.safary) {
                  var t, n;
                  null === (t = (n = window.safary).track) ||
                    void 0 === t ||
                    t.call(n, e);
                }
              })({ eventType: d[e], eventName: e, parameters: t });
          }, !1);
      },
      86055: function (e, t, n) {
        "use strict";
        n.d(t, {
          c: function () {
            return a.c;
          },
        });
        var a = n(82077);
      },
      73010: function (e, t, n) {
        "use strict";
        n.d(t, {
          _: function () {
            return a;
          },
        });
        let a = "https://dapp-api.cybro.io";
      },
      28573: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return a;
          },
        });
        let a = {
          locked: "0x2F3aF664Ecdbc66F832E12F0Df38180B2807E8A2",
          cybro: "0x963eec23618BbC8e1766661d5f263f18094Ae4d5",
          exchange: "0xb1DB6c81Ad29F6bfAbb3F0fd9F356c669c0CFf98",
        };
      },
      26131: function (e, t, n) {
        "use strict";
        n.d(t, {
          K: function () {
            return a;
          },
          O: function () {
            return s;
          },
        });
        let a = {
            x: "https://twitter.com/Cybro_io",
            discord: "https://discord.gg/xFMGDQPhrB",
            telegram: "https://t.me/cybro_erc20",
            medium: "https://cybro.medium.com/",
            debank: "https://debank.com/official/CYBRO",
          },
          s = {
            aboutCybro:
              "https://docs.cybro.io/cybro/usdcybro-token/about-usdcybro",
            staking:
              "https://docs.cybro.io/cybro/usdcybro-token/staking-usdcybro-and-usdlcybro",
            howToBuy:
              "https://docs.cybro.io/cybro/usdcybro-token/how-to-buy#how-to-buy-cybro-using-the-swap-widget-on-the-token-page",
            defillama: "https://defillama.com/protocol/cybro",
            medium: "https://cybro.medium.com/",
            tokenPage: "https://cybro.io/en/token",
          };
      },
      77215: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return i;
          },
        });
        var a = n(6177),
          s = JSON.parse(
            '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
          );
        let i = (e, t) => new a.CH(e, s, t);
      },
      13714: function (e, t, n) {
        "use strict";
        n.d(t, {
          DXF: function () {
            return T;
          },
          rNJ: function () {
            return x;
          },
          FMY: function () {
            return E;
          },
          _R0: function () {
            return k;
          },
          $_j: function () {
            return S;
          },
        });
        var a = n(80745),
          s = n(6177);
        let i = [
          {
            inputs: [
              { internalType: "address", name: "_weth", type: "address" },
              { internalType: "address", name: "_usdb", type: "address" },
              { internalType: "address", name: "_oracle", type: "address" },
              {
                internalType: "address",
                name: "_oracleCybro",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "EnforcedPause", type: "error" },
          { inputs: [], name: "ExpectedPause", type: "error" },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          { inputs: [], name: "InvalidInitialization", type: "error" },
          { inputs: [], name: "NotInitializing", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "cost",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "buyer",
                type: "address",
              },
            ],
            name: "Bought",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint64",
                name: "version",
                type: "uint64",
              },
            ],
            name: "Initialized",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "cost",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "seller",
                type: "address",
              },
            ],
            name: "Sold",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            inputs: [],
            name: "USDB",
            outputs: [
              {
                internalType: "contract IERC20Metadata",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "WETH",
            outputs: [
              {
                internalType: "contract IERC20Metadata",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "address", name: "receiver", type: "address" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "buy",
            outputs: [
              { internalType: "uint256", name: "cost", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "cybro",
            outputs: [
              {
                internalType: "contract IERC20Metadata",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimalsCYBRO",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimalsUSDB",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getCybroPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "buyOrSell", type: "bool" }],
            name: "getPriceWithSpread",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "admin", type: "address" },
              { internalType: "uint32", name: "_spread", type: "uint32" },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "maxAmountToBuy",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "maxAmountToSell",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oracle",
            outputs: [
              {
                internalType: "contract IChainlinkOracle",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oracleCybro",
            outputs: [
              { internalType: "contract IOracle", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oracleDecimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "address", name: "receiver", type: "address" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "sell",
            outputs: [
              { internalType: "uint256", name: "cost", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint32", name: "_spread", type: "uint32" },
            ],
            name: "setSpread",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "spread",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "spreadPrecision",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "viewBuyByCybro",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "viewBuyByToken",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "viewSellByCybro",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "usdbOrWeth", type: "bool" },
            ],
            name: "viewSellByToken",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "withdrawFunds",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
        class r {
          static createInterface() {
            return new a.vU(i);
          }
          static connect(e, t) {
            return new s.CH(e, i, t);
          }
        }
        r.abi = i;
        let l = [
          {
            inputs: [
              {
                internalType: "address[]",
                name: "_lockedCYBROStakings",
                type: "address[]",
              },
              { internalType: "address", name: "_cybro", type: "address" },
              { internalType: "address", name: "admin", type: "address" },
              {
                internalType: "uint256",
                name: "_tgeTimestamp",
                type: "uint256",
              },
              { internalType: "uint8", name: "_tgePercent", type: "uint8" },
              {
                internalType: "uint256",
                name: "_vestingStart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_vestingDuration",
                type: "uint256",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "length", type: "uint256" },
            ],
            name: "ECDSAInvalidSignatureLength",
            type: "error",
          },
          {
            inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
            name: "ECDSAInvalidSignatureS",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "addr", type: "address" },
            ],
            name: "addMinter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "addr", type: "address" },
            ],
            name: "addWhitelistedAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "allocations",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "claimedAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "cybro",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getClaimableAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
            ],
            name: "getUnlockedAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              {
                internalType: "uint256",
                name: "totalBalance",
                type: "uint256",
              },
              { internalType: "bytes", name: "signature", type: "bytes" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address[]", name: "users", type: "address[]" },
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            name: "mintFor",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "mintableByUsers",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "minter", type: "address" },
            ],
            name: "mintersWhitelist",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "addr", type: "address" },
            ],
            name: "removeMinter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "addr", type: "address" },
            ],
            name: "removeWhitelistedAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bool", name: "_mintableByUsers", type: "bool" },
            ],
            name: "setMintableByUsers",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tgePercent",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tgeTimestamp",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "transferWhitelist",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vestingDuration",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vestingStart",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ];
        class o {
          static createInterface() {
            return new a.vU(l);
          }
          static connect(e, t) {
            return new s.CH(e, l, t);
          }
        }
        o.abi = l;
        let u = [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "address", name: "_stakeToken", type: "address" },
              { internalType: "uint256", name: "_lockTime", type: "uint256" },
              { internalType: "uint32", name: "_percent", type: "uint32" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "address", name: "target", type: "address" },
            ],
            name: "AddressEmptyCode",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
          },
          { inputs: [], name: "FailedInnerCall", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Claimed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Staked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Withdrawn",
            type: "event",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [
              { internalType: "uint256", name: "reward", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "addr", type: "address" },
            ],
            name: "getRewardOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lockTime",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "minBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "percent",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_lockTime", type: "uint256" },
              { internalType: "uint32", name: "_percent", type: "uint32" },
            ],
            name: "setLockTimeAndPercent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_minBalance", type: "uint256" },
            ],
            name: "setMinBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "stake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "stakeToken",
            outputs: [
              {
                internalType: "contract IERC20Metadata",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalLocked",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "users",
            outputs: [
              { internalType: "uint256", name: "balance", type: "uint256" },
              {
                internalType: "uint256",
                name: "lastClaimTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "yearlyReward",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "bool", name: "force", type: "bool" }],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "withdrawFunds",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
        class d {
          static createInterface() {
            return new a.vU(u);
          }
          static connect(e, t) {
            return new s.CH(e, u, t);
          }
        }
        d.abi = u;
        let c = [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_from", type: "address" },
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "balance", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "_owner", type: "address" },
              { name: "_spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
        ];
        class p {
          static createInterface() {
            return new a.vU(c);
          }
          static connect(e, t) {
            return new s.CH(e, c, t);
          }
        }
        p.abi = c;
        var y = n(40574),
          m = n(323),
          b = n(33225);
        let f = (e) =>
            b.Z.get("https://dapp-api.cybro.io/api/v1/waitlist/captcha", e),
          _ = () => ["https://dapp-api.cybro.io/api/v1/waitlist/captcha"],
          h = (e) => {
            var t;
            let { query: n, axios: a } = null != e ? e : {};
            return {
              queryKey:
                null !== (t = null == n ? void 0 : n.queryKey) && void 0 !== t
                  ? t
                  : _(),
              queryFn: (e) => {
                let { signal: t } = e;
                return f({ signal: t, ...a });
              },
              ...n,
            };
          };
        function x(e) {
          let t = h(e),
            n = (0, y.a)(t);
          return (n.queryKey = t.queryKey), n;
        }
        let v = (e, t) =>
            b.Z.post("https://dapp-api.cybro.io/api/v1/waitlist/signup", e, t),
          g = (e) => {
            let { mutation: t, axios: n } = null != e ? e : {};
            return {
              mutationFn: (e) => {
                let { data: t } = null != e ? e : {};
                return v(t, n);
              },
              ...t,
            };
          },
          T = (e) => {
            let t = g(e);
            return (0, m.D)(t);
          },
          w = (e, t) =>
            b.Z.get("https://dapp-api.cybro.io/api/v1/profile/".concat(e), t),
          j = (e) => ["https://dapp-api.cybro.io/api/v1/profile/".concat(e)],
          N = (e, t) => {
            var n;
            let { query: a, axios: s } = null != t ? t : {};
            return {
              queryKey:
                null !== (n = null == a ? void 0 : a.queryKey) && void 0 !== n
                  ? n
                  : j(e),
              queryFn: (t) => {
                let { signal: n } = t;
                return w(e, { signal: n, ...s });
              },
              enabled: !!e,
              ...a,
            };
          };
        function k(e, t) {
          let n = N(e, t),
            a = (0, y.a)(n);
          return (a.queryKey = n.queryKey), a;
        }
        let C = (e, t) =>
            b.Z.get(
              "https://dapp-api.cybro.io/api/v1/profile/".concat(
                e,
                "/earned-yield"
              ),
              t
            ),
          M = (e) => [
            "https://dapp-api.cybro.io/api/v1/profile/".concat(
              e,
              "/earned-yield"
            ),
          ],
          A = (e, t) => {
            var n;
            let { query: a, axios: s } = null != t ? t : {};
            return {
              queryKey:
                null !== (n = null == a ? void 0 : a.queryKey) && void 0 !== n
                  ? n
                  : M(e),
              queryFn: (t) => {
                let { signal: n } = t;
                return C(e, { signal: n, ...s });
              },
              enabled: !!e,
              ...a,
            };
          };
        function S(e, t) {
          let n = A(e, t),
            a = (0, y.a)(n);
          return (a.queryKey = n.queryKey), a;
        }
        let I = (e, t) =>
            b.Z.get("https://dapp-api.cybro.io/api/v1/dashboard/posts", {
              ...t,
              params: { ...e, ...(null == t ? void 0 : t.params) },
            }),
          O = (e) => [
            "https://dapp-api.cybro.io/api/v1/dashboard/posts",
            ...(e ? [e] : []),
          ],
          P = (e, t) => {
            var n;
            let { query: a, axios: s } = null != t ? t : {};
            return {
              queryKey:
                null !== (n = null == a ? void 0 : a.queryKey) && void 0 !== n
                  ? n
                  : O(e),
              queryFn: (t) => {
                let { signal: n } = t;
                return I(e, { signal: n, ...s });
              },
              ...a,
            };
          };
        function E(e, t) {
          let n = P(e, t),
            a = (0, y.a)(n);
          return (a.queryKey = n.queryKey), a;
        }
      },
      11129: function (e, t, n) {
        "use strict";
        n.d(t, {
          _Z: function () {
            return v;
          },
          g2: function () {
            return G;
          },
          PS: function () {
            return L;
          },
          UP: function () {
            return M;
          },
          hz: function () {
            return B;
          },
          LB: function () {
            return U;
          },
          Dx: function () {
            return j;
          },
          FN: function () {
            return Z;
          },
          pC: function () {
            return r;
          },
          ZT: function () {
            return _;
          },
        });
        var a,
          s,
          i,
          r,
          l = n(57651),
          o = n(75874),
          u = n(10435),
          d = n(1067),
          c = n.n(d),
          p = n(3357),
          y = n(39143),
          m = n(51932),
          b = n.n(m);
        let f = {
            regular: "font-normal",
            medium: "font-medium",
            "semi-bold": "font-semibold",
            bold: "font-bold",
          },
          _ = (e) => {
            let {
                order: t = 1,
                children: n,
                className: a,
                component: s = "p",
                variant: i,
                uppercase: r,
                weight: o = "medium",
                ...d
              } = e,
              c = i || "unbounded";
            return (0, l.jsx)(s, {
              ...d,
              className: (0, u.Z)(
                b()["text".concat((0, y.kC)(c))],
                b()["text".concat((0, y.kC)(c)).concat(t)],
                f[o],
                a,
                r && "uppercase"
              ),
              "data-sentry-element": "Component",
              "data-sentry-component": "Typography",
              "data-sentry-source-file": "Typography.tsx",
              children: n,
            });
          };
        var h = n(44369),
          x = n(82884);
        let v = o.forwardRef((e, t) => {
          let {
              onChange: n,
              helperText: a,
              usd: s,
              isPositive: i = !0,
              disabled: r,
              leftSection: o,
              labelRight: d,
              isLoading: y,
              ...m
            } = e,
            { className: b, label: f } = m;
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, l.jsxs)("div", {
                className: "inline-flex justify-between",
                children: [
                  f &&
                    (0, l.jsx)(_, {
                      className: c().label,
                      variant: "caption",
                      order: 4,
                      children: f,
                    }),
                  d &&
                    (0, l.jsx)(_, {
                      className: c().label,
                      variant: "caption",
                      order: 4,
                      children: d,
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: (0, u.Z)(c().inputContainer),
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex-1 inline-flex gap-2",
                    children: [
                      o && o,
                      (0, l.jsx)(x.X, {
                        isLoaded: !y,
                        className: "rounded-lg",
                        children: (0, l.jsx)("input", {
                          className: (0, u.Z)(b, c().input),
                          ...m,
                          ref: t,
                          onChange: (e) => {
                            (e.target.value = (function (e, t) {
                              let n = e.replace(/[^\d.-]/g, "");
                              if (
                                (t && (n = n.replace(/-/g, "")),
                                (n.match(/\./g) || []).length > 1)
                              ) {
                                let e = n.split(".");
                                n = e[0] + "." + e.slice(1).join("");
                              }
                              return (
                                (n.match(/-/g) || []).length > 1 &&
                                  (n = "-" + (n = n.replace(/-/g, ""))),
                                n
                              );
                            })(e.target.value, i)),
                              null == n || n(e);
                          },
                          disabled: r,
                        }),
                      }),
                    ],
                  }),
                  !!s &&
                    (0, l.jsxs)("span", {
                      className: c().equal,
                      children: ["≈ $", (0, h.u)(s)],
                    }),
                  a &&
                    (0, l.jsx)(p.z, {
                      className: "absolute -bottom-7 z-[1]",
                      children: a,
                    }),
                ],
              }),
            ],
          });
        });
        v.displayName = "AmountInput";
        var g = n(47380),
          T = n.n(g);
        let w = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5" },
          j = (e) => {
            let {
                order: t = 1,
                children: n,
                className: a,
                uppercase: s,
                ...i
              } = e,
              r = w[t];
            return (0, l.jsx)(r, {
              ...i,
              className: (0, u.Z)(
                a,
                T().title,
                T()["titleH".concat(t)],
                s && T().uppercase
              ),
              "data-sentry-element": "Component",
              "data-sentry-component": "Title",
              "data-sentry-source-file": "Title.tsx",
              children: n,
            });
          };
        var N = n(76163),
          k = n(43644),
          C = n.n(k);
        let M = (e) => {
          let {
            title: t,
            balance: n,
            onActionClick: a,
            children: s,
            isDisabled: i,
            actionName: r = "Change token",
            tokenIcon: o,
            tokenName: u,
            chainIcon: d,
            chainName: c,
          } = e;
          return (0, l.jsxs)("div", {
            className: C().container,
            "data-sentry-component": "InputField",
            "data-sentry-source-file": "InputField.tsx",
            children: [
              (0, l.jsxs)("div", {
                className: C().tokenCard,
                onClick: a,
                children: [
                  (0, l.jsxs)("div", {
                    className: C().header,
                    children: [
                      (0, l.jsx)(M.Title, {
                        title: t,
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "InputField.tsx",
                      }),
                      (0, l.jsx)(M.Balance, {
                        "data-sentry-element": "unknown",
                        "data-sentry-source-file": "InputField.tsx",
                        children: n,
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: C().content,
                    children: [
                      (0, l.jsx)(x.X, {
                        isLoaded: !!o,
                        classNames: { base: "rounded-full" },
                        "data-sentry-element": "Skeleton",
                        "data-sentry-source-file": "InputField.tsx",
                        children: (0, l.jsx)(N.default, {
                          src: o,
                          width: 32,
                          height: 32,
                          alt: u,
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "InputField.tsx",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-px",
                        children: [
                          (0, l.jsx)(x.X, {
                            isLoaded: !!u,
                            classNames: { base: "rounded-lg" },
                            "data-sentry-element": "Skeleton",
                            "data-sentry-source-file": "InputField.tsx",
                            children: (0, l.jsx)(_, {
                              order: 1,
                              variant: "unbounded",
                              "data-sentry-element": "Typography",
                              "data-sentry-source-file": "InputField.tsx",
                              children: null != u ? u : "Token",
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "inline-flex gap-[5px] items-center",
                            children: [
                              d &&
                                c &&
                                (0, l.jsx)(N.default, {
                                  className: "rounded-full",
                                  src: d,
                                  width: 14,
                                  height: 14,
                                  alt: c,
                                }),
                              c &&
                                (0, l.jsxs)(_, {
                                  order: 4,
                                  variant: "caption",
                                  className: "opacity-40",
                                  children: ["On ", c],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(L, {
                    className: "w-fit absolute right-4 -bottom-4",
                    type: "button",
                    onClick: a,
                    disabled: i,
                    "data-sentry-element": "DropdownButton",
                    "data-sentry-source-file": "InputField.tsx",
                    children: r,
                  }),
                ],
              }),
              (0, l.jsx)("div", { className: "px-4", children: s }),
            ],
          });
        };
        (M.Title = (e) => {
          let { title: t } = e;
          return t
            ? (0, l.jsx)(_, {
                order: 4,
                variant: "caption",
                className: "opacity-70",
                "data-sentry-element": "Typography",
                "data-sentry-component": "Title",
                "data-sentry-source-file": "Title.tsx",
                children: t,
              })
            : null;
        }),
          (M.Balance = (e) => {
            let { children: t } = e;
            return t
              ? "string" != typeof t
                ? t
                : (0, l.jsxs)("div", {
                    className: "inline-flex gap-[5px]",
                    "data-sentry-component": "Balance",
                    "data-sentry-source-file": "Balance.tsx",
                    children: [
                      (0, l.jsx)(_, {
                        order: 4,
                        variant: "caption",
                        className: "opacity-70",
                        "data-sentry-element": "Typography",
                        "data-sentry-source-file": "Balance.tsx",
                        children: "Balance",
                      }),
                      (0, l.jsx)(_, {
                        order: 4,
                        variant: "caption",
                        "data-sentry-element": "Typography",
                        "data-sentry-source-file": "Balance.tsx",
                        children: (0, h.u)(t),
                      }),
                    ],
                  })
              : null;
          });
        var A = n(5544),
          S = n.n(A),
          I = n(37090),
          O = n.n(I),
          P = {
            src: "/_next/static/media/clock.d6e41c27.svg",
            height: 14,
            width: 14,
            blurWidth: 0,
            blurHeight: 0,
          },
          E = {
            src: "/_next/static/media/arrow-score-up.95265e53.svg",
            height: 16,
            width: 16,
            blurWidth: 0,
            blurHeight: 0,
          };
        S().extend(O());
        let B = (e) => {
          let { children: t, currentRate: n, duration: a, isLoading: s } = e;
          return (0, l.jsxs)("div", {
            className:
              "p-4 flex flex-col gap-2 border border-stroke-tableBorder rounded-[20px]",
            "data-sentry-component": "InputSecondaryField",
            "data-sentry-source-file": "InputSecondaryField.tsx",
            children: [
              t,
              (0, l.jsx)("div", {
                className:
                  "w-full h-px border-dashed border border-stroke-tableBorder",
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                  (0, l.jsxs)(_, {
                    className: "flex flex-row items-center gap-1",
                    variant: "caption",
                    order: 4,
                    "data-sentry-element": "Typography",
                    "data-sentry-source-file": "InputSecondaryField.tsx",
                    children: [
                      (0, l.jsx)(N.default, {
                        src: P,
                        alt: "timer",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "InputSecondaryField.tsx",
                      }),
                      S().duration(a).format("mm:ss"),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [
                      (0, l.jsx)(_, {
                        order: 4,
                        variant: "caption",
                        className: "text-white/60",
                        "data-sentry-element": "Typography",
                        "data-sentry-source-file": "InputSecondaryField.tsx",
                        children: "Current Rate:",
                      }),
                      (0, l.jsxs)(_, {
                        order: 4,
                        variant: "caption",
                        className: "flex flex-row items-center gap-1",
                        "data-sentry-element": "Typography",
                        "data-sentry-source-file": "InputSecondaryField.tsx",
                        children: [
                          (0, l.jsx)(N.default, {
                            src: E,
                            alt: "rate",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file":
                              "InputSecondaryField.tsx",
                          }),
                          (0, l.jsxs)(x.X, {
                            isLoaded: !s,
                            className: "rounded-lg",
                            "data-sentry-element": "Skeleton",
                            "data-sentry-source-file":
                              "InputSecondaryField.tsx",
                            children: ["$", (0, h.u)(n)],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
        ((a = i || (i = {})).Rounded = "rounded"), (a.Flat = "flat");
        var D = n(79455),
          F = n.n(D);
        i.Rounded, i.Flat;
        let L = o.forwardRef((e, t) => {
          let { children: n, viewType: a = i.Rounded, className: s, ...r } = e;
          return (0, l.jsx)("button", {
            ...r,
            className: (0, u.Z)(s, F().button, F()[a]),
            ref: t,
            children: n,
          });
        });
        L.displayName = "DropdownButton";
        var R = {
          src: "/_next/static/media/swap-white.ae636829.svg",
          height: 44,
          width: 44,
          blurWidth: 0,
          blurHeight: 0,
        };
        let U = (e) =>
          (0, l.jsxs)("div", {
            className: "h-11 inline-flex items-center w-full",
            "data-sentry-component": "SwapButton",
            "data-sentry-source-file": "SwapButton.tsx",
            children: [
              (0, l.jsx)("div", {
                className:
                  'bg-[url("/rectangle.svg")] h-[31px] w-[375px] bg-repeat bg-left bg-[length:31px] flex-1',
              }),
              (0, l.jsx)("button", {
                ...e,
                children: (0, l.jsx)(N.default, {
                  src: R,
                  alt: "Swap",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "SwapButton.tsx",
                }),
              }),
              (0, l.jsx)("div", {
                className:
                  'bg-[url("/rectangle.svg")] w-[375px] h-[31px] bg-repeat bg-right bg-[length:31px] flex-1',
              }),
            ],
          });
        var q = {
            src: "/_next/static/media/close.ffa13f7f.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0,
          },
          W = {
            src: "/_next/static/media/ErrorToast.aa6371f6.svg",
            height: 73,
            width: 51,
            blurWidth: 0,
            blurHeight: 0,
          },
          H = {
            src: "/_next/static/media/SuccessToast.6a9ea935.svg",
            height: 66,
            width: 62,
            blurWidth: 0,
            blurHeight: 0,
          };
        ((s = r || (r = {})).Success = "success"), (s.Error = "error");
        var Y = n(67251),
          K = n.n(Y);
        let Z = (e) => {
          let {
              message: t,
              description: n,
              type: a = r.Success,
              actions: s,
            } = e,
            i = a === r.Success ? H : W;
          return (0, l.jsxs)("div", {
            className: (0, u.Z)(K().toast, K()[a]),
            "data-sentry-component": "Toast",
            "data-sentry-source-file": "Toast.tsx",
            children: [
              (0, l.jsx)("div", {
                className: K().iconContainer,
                children: (0, l.jsx)(N.default, {
                  src: i,
                  alt: "Icon",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "Toast.tsx",
                }),
              }),
              (0, l.jsxs)("div", {
                className: K().content,
                children: [
                  (0, l.jsx)("div", { className: K().message, children: t }),
                  (0, l.jsx)("div", {
                    className: K().description,
                    children: n,
                  }),
                  s &&
                    (0, l.jsx)("div", { className: K().actions, children: s }),
                ],
              }),
              (0, l.jsx)(N.default, {
                src: q,
                className: K().closeIcon,
                alt: "Close icon",
                "data-sentry-element": "Image",
                "data-sentry-source-file": "Toast.tsx",
              }),
            ],
          });
        };
        var z = n(3784),
          Q = n(89268);
        let G = (e) => {
          let { children: t, className: n, label: a } = e,
            { open: s } = (0, z.Ig)(),
            i = (0, z.Tj)(),
            r = (0, z.qL)();
          return i.isConnected
            ? "function" == typeof t
              ? t({ ...i, ...r })
              : t
            : (0, l.jsx)("button", {
                className: (0, Q.m6)(
                  "button button--black !h-[42px] text-white border-0",
                  n
                ),
                onClick: () => s(),
                "data-sentry-component": "AppKitConnectButton",
                "data-sentry-source-file": "AppkitConnectButton.tsx",
                children:
                  a ||
                  (0, l.jsx)("span", {
                    children: "+\xa0\xa0\xa0Connect wallet",
                  }),
              });
        };
      },
      44369: function (e, t, n) {
        "use strict";
        n.d(t, {
          u: function () {
            return s;
          },
        });
        var a = n(55137);
        let s = function (e) {
          var t, n, s, i;
          let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e) return "";
          let l = new a.O(e);
          if (l.isNaN()) return "";
          let o = { ...r };
          return (
            (o.maximumFractionDigits =
              null !== (t = o.maximumFractionDigits) && void 0 !== t ? t : 6),
            (o.minimumFractionDigits =
              null !== (n = o.minimumFractionDigits) && void 0 !== n ? n : 0),
            (o.useGrouping = null === (s = o.useGrouping) || void 0 === s || s),
            (o.decimals = null !== (i = o.decimals) && void 0 !== i ? i : 0),
            o.decimals > 0 && l.div(10 ** o.decimals),
            new Intl.NumberFormat("en-US", o).format(l.toNumber())
          );
        };
      },
      24079: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return i;
          },
          WY: function () {
            return o;
          },
          Wj: function () {
            return l;
          },
          j4: function () {
            return r;
          },
          lb: function () {
            return u;
          },
          zb: function () {
            return d;
          },
        }),
          n(86055);
        var a = n(39991),
          s = n.n(a);
        function i(e) {
          var t;
          document.body.classList.add("no-scroll"),
            e.classList.remove("visually-hidden"),
            null === (t = document.querySelector(".overlay")) ||
              void 0 === t ||
              t.classList.remove("visually-hidden");
        }
        function r() {
          var e;
          Array.from(document.querySelectorAll(".popup")).forEach((e) => {
            e.classList.add("visually-hidden");
          }),
            null === (e = document.querySelector(".overlay")) ||
              void 0 === e ||
              e.classList.add("visually-hidden"),
            document.body.classList.remove("no-scroll");
        }
        function l() {
          var e, t;
          null === (e = document.querySelector(".lang-menu--active")) ||
            void 0 === e ||
            e.classList.remove("lang-menu--active"),
            null === (t = document.querySelector(".mobile-menu")) ||
              void 0 === t ||
              t.classList.add("visually-hidden"),
            document.body.classList.remove("no-scroll");
        }
        function o(e) {
          if ("A" !== e.target.tagName) {
            e.preventDefault();
            let n = e.currentTarget;
            if (!n.classList.contains("accordion-active")) {
              var t;
              null ===
                (t = document.querySelector(
                  ".accordion__item.accordion-active"
                )) ||
                void 0 === t ||
                t.classList.remove("accordion-active");
            }
            n.classList.toggle("accordion-active");
          }
        }
        let u = (e) => (void 0 === e ? "" : s()(e).format("0,0.0[00000]")),
          d = (e, t) => {
            try {
              return (e.toBigInt() * BigInt(Math.ceil(100 * t))) / BigInt(100);
            } catch (e) {
              throw (console.error("Error estimating gas limit:", e), e);
            }
          };
      },
      28377: function () {},
      8633: function () {},
      19110: function () {},
      7694: function () {},
      54070: function () {},
      77667: function () {},
      99184: function () {},
      25609: function () {},
      47380: function (e) {
        e.exports = {
          title: "Title_title__D_IK_",
          uppercase: "Title_uppercase__7Y85X",
          titleH1: "Title_titleH1__3tUHq",
          titleH2: "Title_titleH2__84MbL",
          titleH3: "Title_titleH3__sFvZS",
          titleH4: "Title_titleH4__A1zQE",
          titleH5: "Title_titleH5__XSyun",
        };
      },
      51932: function (e) {
        e.exports = {
          textPoppins: "Typography_textPoppins__ZeNgK",
          textCaption: "Typography_textCaption__d8KCo",
          textUnbounded: "Typography_textUnbounded__OErDC",
          textUnbounded1: "Typography_textUnbounded1__2qQXj",
          textUnbounded2: "Typography_textUnbounded2__Snc9o",
          textUnbounded3: "Typography_textUnbounded3__EEcWM",
          textPoppins1: "Typography_textPoppins1__Ag2cG",
          textPoppins2: "Typography_textPoppins2__clPex",
          textPoppins3: "Typography_textPoppins3__n9Z9S",
          textCaption1: "Typography_textCaption1__RlPtf",
          textCaption2: "Typography_textCaption2__L2wKu",
          textCaption3: "Typography_textCaption3__HG__W",
          textCaption4: "Typography_textCaption4___INgH",
        };
      },
      1067: function (e) {
        e.exports = {
          label: "AmountInput_label__9s3k5",
          inputContainer: "AmountInput_inputContainer__47V4K",
          input: "AmountInput_input__SAxOL",
          equal: "AmountInput_equal__QDQcb",
        };
      },
      79455: function (e) {
        e.exports = {
          button: "Dropdown_button__0PBHI",
          arrow: "Dropdown_arrow__Rpaym",
          rounded: "Dropdown_rounded__ime8Q",
          flat: "Dropdown_flat__Vn9pC",
          isOpened: "Dropdown_isOpened__pgUt_",
          selected: "Dropdown_selected___v3_k",
        };
      },
      43644: function (e) {
        e.exports = {
          container: "InputField_container__4qhGG",
          tokenCard: "InputField_tokenCard__PslXK",
          header: "InputField_header__npLVd",
          content: "InputField_content__eW5xi",
        };
      },
      67251: function (e) {
        e.exports = {
          toast: "Toast_toast__lhHaj",
          success: "Toast_success____trj",
          error: "Toast_error__aOUCh",
          iconContainer: "Toast_iconContainer__RctcV",
          content: "Toast_content__n30A8",
          message: "Toast_message__8tsDy",
          description: "Toast_description__Y_LgI",
          actions: "Toast_actions__jXuYk",
          closeIcon: "Toast_closeIcon___nL8M",
        };
      },
      10463: function (e, t) {
        "use strict";
        t.Z = {
          src: "/_next/static/media/logo.2ce64b94.svg",
          height: 19,
          width: 151,
          blurWidth: 0,
          blurHeight: 0,
        };
      },
      75573: function (e, t) {
        "use strict";
        t.Z = {
          src: "/_next/static/media/discord-1.6246673f.svg",
          height: 14,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        };
      },
      36598: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "/_next/static/media/medium.ed2f4f80.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      33448: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "/_next/static/media/tg-1.74019191.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      75911: function (e, t) {
        "use strict";
        t.Z = {
          src: "/_next/static/media/twitter-1.48e759d1.svg",
          height: 14,
          width: 14,
          blurWidth: 0,
          blurHeight: 0,
        };
      },
    },
  ]);
