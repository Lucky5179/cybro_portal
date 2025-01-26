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
      (e._sentryDebugIds[t] = "dc9a30d6-7e98-4922-adb6-4d381cf0bae0"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-dc9a30d6-7e98-4922-adb6-4d381cf0bae0"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61],
    {
      93287: function (e, t, a) {
        Promise.resolve().then(a.bind(a, 72926)),
          Promise.resolve().then(a.t.bind(a, 73994, 23)),
          Promise.resolve().then(a.t.bind(a, 22286, 23)),
          Promise.resolve().then(a.bind(a, 44061)),
          Promise.resolve().then(a.bind(a, 48107)),
          Promise.resolve().then(a.bind(a, 68067)),
          Promise.resolve().then(a.bind(a, 94960)),
          Promise.resolve().then(a.t.bind(a, 19110, 23)),
          Promise.resolve().then(a.t.bind(a, 8633, 23)),
          Promise.resolve().then(a.bind(a, 75967)),
          Promise.resolve().then(a.bind(a, 67541)),
          Promise.resolve().then(a.bind(a, 9371)),
          Promise.resolve().then(a.t.bind(a, 29110, 23)),
          Promise.resolve().then(a.bind(a, 58174)),
          Promise.resolve().then(a.bind(a, 42307)),
          Promise.resolve().then(a.bind(a, 76933)),
          Promise.resolve().then(a.bind(a, 33797)),
          Promise.resolve().then(a.bind(a, 81724)),
          Promise.resolve().then(a.bind(a, 86661)),
          Promise.resolve().then(a.bind(a, 53268)),
          Promise.resolve().then(a.bind(a, 55895)),
          Promise.resolve().then(a.t.bind(a, 61237, 23)),
          Promise.resolve().then(a.bind(a, 92212)),
          Promise.resolve().then(a.bind(a, 39129));
      },
      20805: function (e, t, a) {
        "use strict";
        a.d(t, {
          p: function () {
            return l;
          },
        });
        var s = a(57651);
        a(75874);
        var n = a(85965),
          i = a(11129);
        let r = (e) => {
            let { message: t, description: a, type: r, actions: l } = e;
            (0, n.Am)(
              (0, s.jsx)(i.FN, {
                message: t,
                description: a,
                type: r,
                actions: l,
              })
            );
          },
          l = () => ({ triggerToast: r });
      },
      75967: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return o;
            },
          });
        var s = a(57651);
        a(78932);
        var n = {
            src: "/_next/static/media/pattern.81c9f8ae.webp",
            height: 446,
            width: 750,
            blurDataURL:
              "data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAFSgmJyYmKRxNoZiZmpigcE2hl5mZmJ9wTqCXmZmXn29MoZeZmZefcABWUDggOAAAAJABAJ0BKggABQACQDgllAAC5a3cxAD+/GIkl+fzAgsRJ3wwuaSfaUGcj6+YrpgEA2HXF3IPkAAA",
            blurWidth: 8,
            blurHeight: 5,
          },
          i = {
            src: "/_next/static/media/dapp-bg.8d06a97a.webp",
            height: 498,
            width: 355,
            blurDataURL:
              "data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAE/ZggABDuf//0cAEO3//4EAAGL//yUAAGP8/4oBh////v/S+//+///6/P/////8AFZQOCBOAAAA8AEAnQEqBgAIAAJAOCWMAnQBH22xbWWAAP7pr0XuTG4hj4fYf4rnbUgmWPf3MSs/U2VrrDT+ugsyIVLCwxXvAgsbSVkd4U0BdLA3hgAA",
            blurWidth: 6,
            blurHeight: 8,
          },
          r = {
            src: "/_next/static/media/girl-dekstop.844fbdd1.webp",
            height: 2181,
            width: 1549,
            blurDataURL:
              "data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAFHZgAACEOn//0YAEu///38AAGX//yQAAGX9/4kAfP///v/P+f/+/v/u9v/////pAFZQOCBMAAAA0AEAnQEqBgAIAAJAOCWMAnQA9EcWJ0AA/uU3o/K02yFfD7D/H9VvE4sn6AeK9revjDM7hIdS35atHhePUfT8IpfTzH5CHZ0PBlwAAA==",
            blurWidth: 6,
            blurHeight: 8,
          },
          l = a(76163);
        function o(e) {
          let { translations: t } = e;
          return (0, s.jsxs)("div", {
            className: "container_main access-container",
            id: "access",
            "data-sentry-component": "Access",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, s.jsxs)("section", {
                className: "access",
                children: [
                  (0, s.jsxs)("h2", {
                    className: "title title--h2 access__title",
                    children: [
                      (0, s.jsx)("div", {
                        className: "access__title--outline",
                        children: "Cybro\xa0dApp ",
                      }),
                      (0, s.jsxs)("div", {
                        className: "access__title--outline",
                        children: [
                          (0, s.jsx)("span", {
                            className: "access__title--accent",
                            children: "is\xa0live",
                          }),
                          " now",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "access__text",
                    children:
                      "Explore our vaults for stable growth options with competitive APYs and Cybro Points. Select the ideal vault for your strategy and boost your portfolio today.",
                  }),
                  (0, s.jsxs)("div", {
                    className: "access__points",
                    children: [
                      (0, s.jsx)("p", {
                        className: "access__point",
                        children: "Reliable risk scoring",
                      }),
                      (0, s.jsx)("p", {
                        className: "access__point",
                        children: "DeFi Vaults and CeFi Strategies",
                      }),
                      (0, s.jsx)("p", {
                        className: "access__point",
                        children: "Transparent fees",
                      }),
                      (0, s.jsxs)("p", {
                        className: "access__point access__point--coming-soon",
                        children: [
                          "AI-copilot for strategy selection and creation",
                          (0, s.jsx)("span", {
                            className: "access__coming-soon",
                            children: "Coming soon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "access__bgContainer",
                    children: [
                      (0, s.jsx)(l.default, {
                        src: n,
                        alt: "access",
                        className: "access__pattern",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "index.tsx",
                      }),
                      (0, s.jsx)(l.default, {
                        src: i,
                        alt: "access",
                        className: "access__girl",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "index.tsx",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "access__btn-container",
                    children: [
                      (0, s.jsx)("a", {
                        href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                        className:
                          "button button--yellow button--arrow access__btn",
                        children: "BUY NOW",
                      }),
                      (0, s.jsx)("p", {
                        className: "access__caption",
                        children:
                          "Join now for exclusive early access to the CYBRO platform among the first explorers",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(l.default, {
                src: r,
                alt: "access",
                className: "access__girl--desktop",
                "data-sentry-element": "Image",
                "data-sentry-source-file": "index.tsx",
              }),
            ],
          });
        }
        a(75874);
      },
      67541: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            Banner: function () {
              return x;
            },
          });
        var s = a(57651);
        a(75874);
        var n = a(76163),
          i = {
            src: "/_next/static/media/banner-tokens.d93b17f0.png",
            height: 101,
            width: 369,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGPMis/JP83IfdL+h9BqYQ7e/COfsy7yCicvfPn4aUh/wdSXjJ3ZSR6/hIT4H702qvxz9+K1ebs6o0tz41uOrF441SKw3BgA89ogBmU5kLsAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 2,
          },
          r = {
            src: "/_next/static/media/banner-kurwa-bobr.9e3fc088.png",
            height: 102,
            width: 109,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA7ElEQVR4nAVAPUrDUBz//d/LS/JaSSUxQawGi9LBD1AXBy8g6B2Kx3B3EDsIbk56AG+ggosuegGL2M06GT9SSF7eh1B5A2prONSYv6v75+p7snt2kWSTGIdFgQd6HK7yENxMKz14Kfi1rn7d7X2LojQ4rmp7SnFvM1CyVZd6Lsfo9R34tMuLgegI8dSNwj3a2ljD28dXmnfoqjHlgYOwf0ogRMN2lpJLWu+vDLQxQ8ZZ2mhlhC+ZL4Rr25plEg318q6TYYDKOOV7npAeg3HO6ukP98k+EwgnBOzH8ez2QpYRI8JoPLZSMJ5EM0f/kiZZYtNiXR4AAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 7,
          },
          l = {
            src: "/_next/static/media/banner-kurwa-bobr-sm.055bffdc.png",
            height: 82,
            width: 66,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAy0lEQVR42hXDvWrCUBgG4FfbkmYR2kCDP6SnOScnOUpSSildu9p2cdDNW3ByFxycHETwCnR0cFFw9wIEV0dvQjDf5/GBB00lTqtR6biZmQlv4drgdbGA5lvAi4HP82HEh7HXtbGf+vdIde0C+AQk507rX9vI0u87uK5DFQ/0kVQ5k5U/G+3fnyKMlmRimfuew3EYsKiVezbwmdVJSUEmkbmJI25oebtElij6eq9TpEISIrjo8JWr5RfGo/NAjVhRajQ9P5VyADsU0L8CkXA/V7+I8Q8AAAAASUVORK5CYII=",
            blurWidth: 6,
            blurHeight: 8,
          },
          o = {
            src: "/_next/static/media/x-close.91b6b97e.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0,
          },
          d = {
            src: "/_next/static/media/arrow.0025876c.svg",
            height: 10,
            width: 12,
            blurWidth: 0,
            blurHeight: 0,
          },
          c = a(50677),
          u = a(59984);
        let p = (e) => {
            let { onClick: t } = e;
            return (0, s.jsx)("button", {
              onClick: t,
              className:
                "w-6 h-6 xl:w-10 xl:h-10 relative bg-black rounded-full  overflow-hidden hover:opacity-85 active:scale-105",
              "data-sentry-component": "BannerCloseButton",
              "data-sentry-source-file": "Banner.tsx",
              children: (0, s.jsx)(n.default, {
                src: o,
                alt: "close",
                className: "pointer-events-none",
                "data-sentry-element": "Image",
                "data-sentry-source-file": "Banner.tsx",
              }),
            });
          },
          m = (e) => {
            let { onClick: t } = e;
            return (0, s.jsxs)(c.default, {
              href: "/en/token",
              onClick: t,
              className:
                "group hover:opacity-85 transition w-[254px] xl:w-[227px] h-7 xl:h-[45px] p-[6.34px] bg-gradient-to-r from-[#f0d025] via-[#fff627] to-[#efcf25] rounded-[5px] xl:rounded-[9.51px] shadow-[0px_0px_50px_0px_rgba(242,214,37,1.00)] justify-center items-center gap-[6.34px] inline-flex",
              "data-sentry-element": "Link",
              "data-sentry-component": "BannerActionButton",
              "data-sentry-source-file": "Banner.tsx",
              children: [
                (0, s.jsx)(n.default, {
                  src: d,
                  alt: "arrow",
                  className:
                    "group-hover:translate-x-0.5 rotate-180 transition",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "Banner.tsx",
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-[#0b0c1b] text-[10px] font-black font-unbounded uppercase leading-3",
                  children: "Shop CYBRO Today",
                }),
                (0, s.jsx)(n.default, {
                  src: d,
                  alt: "arrow",
                  className: "group-hover:-translate-x-0.5 transition",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "Banner.tsx",
                }),
              ],
            });
          },
          x = () => {
            let [e, t] = (0, u.fP)(["getCybroAccept", "cybroCookies"]),
              a = () => t("getCybroAccept", !0, { maxAge: 2592e3, path: "/" });
            return !0 !== e.cybroCookies || !0 === e.getCybroAccept
              ? null
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "hidden xl:flex z-[2147483004] fixed justify-between bottom-0 w-full h-[60px] bg-white/20 backdrop-blur-[50px]",
                      children: [
                        (0, s.jsx)("div", {
                          className: "relative w-[369px]",
                          children: (0, s.jsx)(n.default, {
                            src: i,
                            alt: "banner-tokens",
                            className: "absolute top-[-17px]",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "Banner.tsx",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex gap-[56px] justify-center items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-white text-[20px] xxl:text-[32px] font-semibold font-unbounded uppercase leading-[38.40px]",
                              children: "Get CYBRO Directly",
                            }),
                            (0, s.jsx)(m, {
                              onClick: a,
                              "data-sentry-element": "BannerActionButton",
                              "data-sentry-source-file": "Banner.tsx",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "mr-10 xxl:mr-[92px] relative w-[205px] flex items-center justify-end gap-[56px]",
                          children: [
                            (0, s.jsx)(n.default, {
                              src: r,
                              alt: "banner-kurwa-bobr",
                              className: "absolute left-0 top-[-42px]",
                              "data-sentry-element": "Image",
                              "data-sentry-source-file": "Banner.tsx",
                            }),
                            (0, s.jsx)(p, {
                              onClick: a,
                              "data-sentry-element": "BannerCloseButton",
                              "data-sentry-source-file": "Banner.tsx",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex xl:hidden z-[2147483004] fixed justify-between bottom-0 w-full h-[58px] bg-white/20 backdrop-blur-[50px]",
                      children: [
                        (0, s.jsx)(n.default, {
                          src: l,
                          alt: "banner-kurwa-bobr",
                          className: "absolute left-0 top-[-24px] z-[-1]",
                          "data-sentry-element": "Image",
                          "data-sentry-source-file": "Banner.tsx",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col gap-[3px] justify-center items-center w-full",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-white text-[13px] font-semibold font-unbounded uppercase leading-none",
                              children: "Get CYBRO Directly",
                            }),
                            (0, s.jsx)(m, {
                              onClick: a,
                              "data-sentry-element": "BannerActionButton",
                              "data-sentry-source-file": "Banner.tsx",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "absolute right-3 flex items-center bottom-0 top-0",
                          children: (0, s.jsx)(p, {
                            onClick: a,
                            "data-sentry-element": "BannerCloseButton",
                            "data-sentry-source-file": "Banner.tsx",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
          };
      },
      9371: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            HubBlog: function () {
              return k;
            },
          });
        var s = a(57651),
          n = a(75874),
          i = a(82884),
          r = a(74380),
          l = a(10435),
          o = a(19376),
          d = a(13714),
          c = a(11129),
          u = a(20805);
        let p = () => {
          let { triggerToast: e } = (0, u.p)(),
            t = n.useRef(null),
            { data: a, isLoading: s } = (0, d.rNJ)({
              query: { select: (e) => e.data.data.sitekey },
            }),
            { mutateAsync: i } = (0, d.DXF)();
          return {
            captchaKey: a,
            isLoadingCaptcha: s,
            handleAddWaitList: async (a) => {
              var s;
              let n = await (null == t
                ? void 0
                : null === (s = t.current) || void 0 === s
                ? void 0
                : s.executeAsync());
              if (!n) throw Error("Captcha token failed.");
              return i({ data: { captcha_answer: n, email: a } })
                .then(() => {
                  e({
                    message: "Success",
                    description:
                      "You have subscribed to the updates and announcements",
                  });
                })
                .catch(() => {
                  e({
                    message: "Error",
                    description: "Unexpected error. Contact support",
                    type: c.pC.Error,
                  });
                });
            },
            recaptchaRef: t,
          };
        };
        var m = a(62793),
          x = a(54458),
          y = a(31328);
        let h = y
            .Ry()
            .shape({
              email: y
                .Z_()
                .required("Email is required")
                .email("Enter a valid email address"),
            }),
          f = (e) => {
            let { handleSubmit: t, ...a } = (0, x.cI)({
                mode: "onBlur",
                resolver: (0, m.X)(h),
              }),
              s = t(e);
            return (
              n.useEffect(() => {
                a.reset();
              }, [a.formState.isSubmitted]),
              { ...a, handleSubmit: s }
            );
          };
        var A = a(67340),
          b = a.n(A),
          g = a(99346),
          _ = a(52688),
          j = a.n(_),
          w = a(26131);
        let v = (e) => {
            let { title: t, description: a, href: n } = e;
            return (0, s.jsxs)("a", {
              target: "_blank",
              href: n,
              className:
                "*:cursor-pointer min-w-0 md:min-w-[375px] flex flex-col gap-3 w-full p-2.5 hover:bg-background-chips rounded-[10px]",
              rel: "noreferrer",
              "data-sentry-component": "ArticleCard",
              "data-sentry-source-file": "ArticleCard.tsx",
              children: [
                (0, s.jsx)(c.ZT, {
                  order: 1,
                  variant: "unbounded",
                  "data-sentry-element": "Typography",
                  "data-sentry-source-file": "ArticleCard.tsx",
                  children: t,
                }),
                (0, s.jsx)(c.ZT, {
                  variant: "caption",
                  order: 4,
                  className: "text-white/60",
                  "data-sentry-element": "Typography",
                  "data-sentry-source-file": "ArticleCard.tsx",
                  children: a,
                }),
              ],
            });
          },
          N = () => {
            let { data: e, isLoading: t } = (0, d.FMY)(
                { limit: 3, offset: 0 },
                { query: { select: (e) => e.data.data } }
              ),
              a = !t && !(null == e ? void 0 : e.length);
            return {
              articles: e,
              isLoading: t,
              isNoArticles: a,
              articleSkeletons: Array.from({ length: 3 }).fill(""),
            };
          },
          k = () => {
            let {
                articles: e,
                isLoading: t,
                isNoArticles: a,
                articleSkeletons: n,
              } = N(),
              {
                handleAddWaitList: d,
                isLoadingCaptcha: u,
                captchaKey: m,
                recaptchaRef: x,
              } = p(),
              {
                register: y,
                handleSubmit: h,
                formState: { isValid: A, isSubmitting: _ },
              } = f(async (e) => {
                let { email: t } = e;
                return d(t);
              }),
              k = (0, g.ac)("(max-width: ".concat(j().screens.md, ")"));
            return (0, s.jsxs)("section", {
              id: "blog",
              className:
                "max-w-[1280px] mx-auto mt-[42px] md:mt-[70px] px-6 md:px-0 flex flex-row justify-between gap-x-[73px] gap-y-6 flex-wrap",
              "data-sentry-component": "HubBlog",
              "data-sentry-source-file": "HubBlog.tsx",
              children: [
                (0, s.jsxs)("div", {
                  className: (0, l.Z)(
                    b().blog,
                    "flex-1 relative flex flex-col gap-9 px-[35px] pt-[43px] pb-[35px] max-w-[588px] w-full min-h-[455px] bg-black"
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-2 text-center",
                      children: [
                        (0, s.jsx)(c.Dx, {
                          className: "font-unbounded uppercase",
                          order: k ? 3 : 2,
                          "data-sentry-element": "Title",
                          "data-sentry-source-file": "HubBlog.tsx",
                          children: "Latest Crypto News & Insights",
                        }),
                        (0, s.jsx)(c.ZT, {
                          order: 2,
                          weight: "regular",
                          className: "mt-2 text-white/80",
                          "data-sentry-element": "Typography",
                          "data-sentry-source-file": "HubBlog.tsx",
                          children:
                            "Stay updated with the most important trends and developments in the world of cryptocurrency. From market movements to regulatory changes.",
                        }),
                        (0, s.jsx)(c.ZT, {
                          order: 2,
                          weight: "bold",
                          variant: "unbounded",
                          "data-sentry-element": "Typography",
                          "data-sentry-source-file": "HubBlog.tsx",
                          children:
                            "Explore expert analysis and predictions to make informed investment decisions.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-[15px] text-center",
                      children: [
                        (0, s.jsxs)("form", {
                          onSubmit: h,
                          className:
                            "flex flex-col lg:flex-row gap-y-4 items-centerm rounded-[18px] bg-transparent lg:bg-background-chips p-0 lg:pr-1 lg:pl-[27px] lg:py-1",
                          children: [
                            (0, s.jsx)("input", {
                              className:
                                "flex-1 bg-background-chips lg:bg-transparent outline-none py-[23px] pl-[23px] rounded-[18px] lg:p-0",
                              placeholder: "Your email here",
                              type: "email",
                              ...y("email"),
                            }),
                            (0, s.jsx)("button", {
                              disabled: !A || u || _,
                              type: "submit",
                              className:
                                "button button--yellow min-h-[53px] flex-1 w-full lg:max-w-[173px]",
                              children: "Send",
                            }),
                          ],
                        }),
                        (0, s.jsxs)(c.ZT, {
                          variant: "caption",
                          order: 4,
                          "data-sentry-element": "Typography",
                          "data-sentry-source-file": "HubBlog.tsx",
                          children: [
                            "No spam. ",
                            (0, s.jsx)("span", {
                              className: "text-white/80",
                              children:
                                "Only updates and release announcements.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex-1 flex flex-col gap-6 justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        a &&
                          (0, s.jsx)(c.ZT, {
                            variant: "caption",
                            order: 4,
                            children: "No articles",
                          }),
                        t
                          ? n.map((e, t) =>
                              (0, s.jsx)(
                                i.X,
                                {
                                  classNames: {
                                    base: "w-full h-[130px] dark:bg-background-tableRow rounded-[10px]",
                                  },
                                },
                                t
                              )
                            )
                          : null == e
                          ? void 0
                          : e.map((e) =>
                              (0, s.jsx)(
                                v,
                                {
                                  href: e.link,
                                  title: e.name,
                                  description: e.short_description,
                                },
                                e.name
                              )
                            ),
                      ],
                    }),

                  ],
                }),
                m && (0, s.jsx)(o.Z, { ref: x, size: "invisible", sitekey: m }),
              ],
            });
          };
      },
      58174: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return d;
            },
          });
        var s = a(57651);
        a(39388);
        var n = a(75874),
          i = a(24079),
          r = a(76163),
          l = {
            src: "/_next/static/media/bg-desktop.703c02bc.webp",
            height: 1710,
            width: 1565,
            blurDataURL:
              "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDYAAAABYBXZVpunA60YAgdNACQS8tsE9H7SRERE1NZUBBlrDqLs/LqSHS+tYyfJNHPRq+OEAw1w0QBWUDggXgAAAPABAJ0BKgcACAACQDglsAJ0AN1wljgHAAD+9rDbw5qzQpSJdZxfuWvs0u5n7pB6zc3BxITTFxiuK6hdDdRRw3xsRfbzYDVHwn/ldfmov9m96lLaHbgO7aGIMSvEeAA=",
            blurWidth: 7,
            blurHeight: 8,
          },
          o = {
            src: "/_next/static/media/bg-mobile.f05831c8.webp",
            height: 801,
            width: 1012,
            blurDataURL:
              "data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAAAAAAAAABiQFCItWVfYP+r2////////6C+9/37+/v/oc3//v////+ey//5+/v7AFZQOCBKAAAAsAEAnQEqCAAGAAJAOCWMAAKdWw0E+gD++KlmxNaLm4in0Bwo5ZVfDS1TifN8WGUIwfbrnxb7dZ/RvEzUPUzDLE76c8aS0CytYAA=",
            blurWidth: 8,
            blurHeight: 6,
          };
        function d(e) {
          let { translations: t } = e;
          return (
            (0, n.useEffect)(() => {
              Array.from(document.querySelectorAll(".accordion__item")).forEach(
                (e) => {
                  e.removeEventListener("click", i.WY),
                    e.addEventListener("click", i.WY);
                }
              );
            }),
            (0, s.jsx)("section", {
              className: "faq",
              id: "faq",
              "data-sentry-component": "What",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsxs)("div", {
                className: "container_main faq__container",
                children: [
                  (0, s.jsx)("h2", {
                    className: "title title--h2 faq__title",
                    children: t.header,
                  }),
                  (0, s.jsx)(r.default, {
                    className: "faq__background-mobile",
                    src: o,
                    alt: "bobr",
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "index.tsx",
                  }),
                  (0, s.jsx)("div", {
                    className: "accordion",
                    children: t.accordion.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "accordion__item",
                          children: [
                            (0, s.jsx)("span", {
                              className: "accordion__title",
                              children: e.question,
                            }),
                            (0, s.jsxs)("div", {
                              className: "accordion__content",
                              children: [
                                e.linkType
                                  ? (0, s.jsx)("span", {
                                      children: e.answer.split(
                                        "'".concat(e.linkType, "'")
                                      )[0],
                                    })
                                  : (0, s.jsx)("span", { children: e.answer }),
                                e.link
                                  ? (0, s.jsxs)("a", {
                                      href: e.link,
                                      target: "_blank",
                                      children: ["\xa0", e.link],
                                    })
                                  : null,
                                e.linkType
                                  ? (0, s.jsxs)("span", {
                                      children: [
                                        "\xa0",
                                        e.answer.split(
                                          "'".concat(e.linkType, "'")
                                        )[1],
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        },
                        "faqItem" + t
                      )
                    ),
                  }),
                  (0, s.jsx)(r.default, {
                    className: "faq__background-desktop",
                    src: l,
                    alt: "bobr",
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "index.tsx",
                  }),
                  (0, s.jsx)("a", {
                    href: "https://docs.cybro.io/",
                    className: "faq__more",
                    target: "_blank",
                    children: "More FAQs",
                  }),
                ],
              }),
            })
          );
        }
      },
      42307: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return x;
            },
          });
        var s = a(57651),
          n = a(76163);
        a(47921);
        var i = {
            src: "/_next/static/media/coinpedia.94bd0fb5.svg",
            height: 31,
            width: 133,
            blurWidth: 0,
            blurHeight: 0,
          },
          r = {
            src: "/_next/static/media/ambcrypto.bcf4a41c.png",
            height: 72,
            width: 303,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGO83u1yjoWZkV+16XAgw4cfTlwsjJLf/vw/wsDAsJmJkZmD8Wq3axM7M6NKx+brs+fsf6zNx8H4+dNPhv+M//+/ZmBglAAAJLgZdFSx/wcAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 2,
          },
          l = {
            src: "/_next/static/media/cryptodaily.04c66e65.png",
            height: 38,
            width: 154,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR42mP4v3ah762iSQoMJsIyQZ7eam5ubtpArAPEhkCszvB/y/zU9f41ooou1hre7h42UAkTKDYGANWaFDcBhj4nAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 2,
          },
          o = {
            src: "/_next/static/media/cryptobenelux.a7769c3a.png",
            height: 28,
            width: 255,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAI0lEQVR4nGP8t8jOgSH2IDvD///cDAwMP4FYBIhB4D0Q/wcApS0ISfUtT3MAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 1,
          },
          d = {
            src: "/_next/static/media/bithub.ae982386.png",
            height: 83,
            width: 250,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Afv7/EIEBAP5AAAA0/f2+AfFyd/5FQn2CAcC+/koNjj2AW1tpE0kJBIFbm5JG/f3+QpdXqLsCwkBEgoJA/Dz9v8IAQUKjEX79vT1//9/yPPz9wZUUJr9ur7ABAAAPQYAAPIB1zstVlUtH/sAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 3,
          },
          c = {
            src: "/_next/static/media/btcbazis.5abeb619.svg",
            height: 135,
            width: 459,
            blurWidth: 0,
            blurHeight: 0,
          },
          u = a(75874),
          p = a(2043),
          m = a(42874);
        function x(e) {
          let { translations: t } = e;
          return (
            (0, u.useEffect)(() => {
              new p.Z(".featured__swiper", {
                modules: [m.W_],
                slidesPerView: "auto",
                autoplay: { delay: 3e3 },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                speed: 1e3,
              });
            }),
            (0, s.jsxs)("section", {
              className: "featured",
              "data-sentry-component": "Featured",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, s.jsx)("h6", {
                  className: "title title--h6 featured__title",
                  children: t.header,
                }),
                (0, s.jsx)("div", {
                  className: "container_main featured__container",
                  children: (0, s.jsx)("div", {
                    className: "swiper__container featured__swiper-container",
                    children: (0, s.jsxs)("div", {
                      className: "swiper featured__swiper",
                      children: [
                        (0, s.jsx)("button", {
                          className:
                            "swiper-button-prev swiper__btn featured__swiper-btn",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "swiper-wrapper featured__swiper-list",
                          children: [
                            (0, s.jsx)("li", {
                              className: "swiper-slide feature",
                              children: (0, s.jsx)(n.default, {
                                src: i,
                                alt: "coinpedia",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              className:
                                "swiper-slide feature feature--grey-black",
                              children: (0, s.jsx)(n.default, {
                                src: r,
                                alt: "ambcrypto",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              className:
                                "swiper-slide feature feature--grey-black feature--big",
                              children: (0, s.jsx)(n.default, {
                                src: l,
                                alt: "cryptodaily",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              className:
                                "swiper-slide feature feature--grey-white",
                              children: (0, s.jsx)(n.default, {
                                src: o,
                                alt: "cryptobenelux",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              className:
                                "swiper-slide feature feature--grey-white feature--big",
                              children: (0, s.jsx)(n.default, {
                                src: d,
                                alt: "bithub",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                            (0, s.jsx)("li", {
                              className:
                                "swiper-slide feature feature--grey-black feature--big",
                              children: (0, s.jsx)(n.default, {
                                src: c,
                                alt: "btcbazis",
                                className: "feature__img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "swiper-button-next swiper__btn featured__swiper-btn",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        }
      },
      81724: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return r;
            },
          });
        var s = a(57651);
        a(27967);
        var n = {
            src: "/_next/static/media/holders.3be8248e.png",
            height: 246,
            width: 610,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAa0lEQVR4nA3KXQqCMADA8f/mFq4YMYZEEfWQd+yliwVFFwiko+QH6mRO33/icLyFPJfaWsXeSv514HzaIAg8P8MkfHFNzhmabsfjblbQ837NbM1A9WsRzl+CypLWWlGWGTEmvlVk7CK+kNMC37YitAI95RoAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 3,
          },
          i = a(76163);
        function r(e) {
          let { translations: t } = e;
          return (0, s.jsx)("div", {
            className: "container_main holders-container",
            id: "holders",
            "data-sentry-component": "Holders",
            "data-sentry-source-file": "index.tsx",
            children: (0, s.jsx)("section", {
              className: "holders-section",
              children: (0, s.jsxs)("div", {
                className: "holders",
                children: [
                  (0, s.jsx)("div", {
                    className: "holders__img-box",
                    children: (0, s.jsx)(i.default, {
                      src: n,
                      alt: "holders",
                      className: "holders__img",
                      "data-sentry-element": "Image",
                      "data-sentry-source-file": "index.tsx",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "holders__content",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "holders__title",
                        children: [
                          (0, s.jsx)("span", {
                            className: "holders__title-value",
                            children: "18246",
                          }),
                          (0, s.jsx)("span", {
                            className: "holders__title-label",
                            children: t.label,
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "holders__text",
                        children: t.desc,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        a(75874);
      },
      53268: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return d;
            },
          });
        var s = a(57651),
          n = a(76163);
        a(28910);
        var i = {
            src: "/_next/static/media/yh.3090a4ec.png",
            height: 1106,
            width: 7663,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGN8GSq8mq9xXy+Hph7f/3//GBgYGd8yMDA8B2IuIGYCAMQeCSKZ3wAYAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 1,
          },
          r = a(75874),
          l = a(2043),
          o = a(42874);
        function d() {
          return (
            (0, r.useEffect)(() => {
              new l.Z(".partners__swiper", {
                modules: [o.W_],
                slidesPerView: "auto",
                autoplay: { delay: 3e3 },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                speed: 1e3,
              });
            }),
            (0, s.jsxs)("section", {
              className: "partners",
              "data-sentry-component": "Partners",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, s.jsx)("h6", {
                  className: "title title--h6 partners__title",
                  children: "Partners",
                }),
                (0, s.jsx)("div", {
                  className: "container_main partners__container",
                  children: (0, s.jsx)("div", {
                    className: "swiper__container partners__swiper-container",
                    children: (0, s.jsxs)("div", {
                      className: "swiper partners__swiper",
                      children: [
                        (0, s.jsx)("button", {
                          className:
                            "swiper-button-prev swiper__btn partners__swiper-btn",
                        }),
                        (0, s.jsx)("ul", {
                          className: "swiper-wrapper partners__swiper-list",
                          children: (0, s.jsx)("li", {
                            className: "swiper-slide partner",
                            children: (0, s.jsx)(n.default, {
                              src: i,
                              alt: "yh",
                              className: "partner__img",
                              "data-sentry-element": "Image",
                              "data-sentry-source-file": "index.tsx",
                            }),
                          }),
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "swiper-button-next swiper__btn partners__swiper-btn",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        }
      },
      55895: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return o;
            },
          });
        var s = a(57651);
        a(92177);
        var n = a(75874),
          i = a(2043),
          r = a(42874),
          l = a(10435);
        function o(e) {
          let { translations: t } = e,
            a = [
              { quater: "q2", year: 2024, phaze: "Phase 0.1", list: t.list[0] },
              { quater: "q3", year: 2024, phaze: "Phase 0.2", list: t.list[1] },
              { quater: "q4", year: 2024, phaze: "Phase 0.3", list: t.list[2] },
              {
                quater: "q1",
                year: 2025,
                phaze: "Phase 0.4",
                list: [
                  "AI Broker",
                  "Smart Notifications",
                  "Bitcoin Smart Fund",
                  "CYBRO Academy",
                ],
              },
              {
                quater: "q2",
                year: 2025,
                phaze: "Phase 0.5",
                list: [
                  "CYBRO Mini App",
                  "CYBRO Mobile App",
                  "YCYBRO Secret Feature",
                ],
              },
            ];
          return (
            (0, n.useEffect)(() => {
              new i.Z(".roadmap__swiper", {
                modules: [r.W_],
                slidesPerView: "auto",
                autoplay: { delay: 3e3 },
                navigation: { nextEl: ".swiper-button-next" },
                speed: 1e3,
                initialSlide: 2,
              }).slideTo(4);
            }, []),
            (0, s.jsx)("div", {
              className: "container_main roadmap-container",
              id: "roadmap",
              "data-sentry-component": "Roadmap",
              "data-sentry-source-file": "index.tsx",
              children: (0, s.jsxs)("section", {
                className: "roadmap",
                children: [
                  (0, s.jsx)("h2", {
                    className: "title title--h2 roadmap__title",
                    children: t.header,
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("div", {
                      className: "swiper__container roadmap__swiper-container",
                      children: (0, s.jsxs)("div", {
                        className: "swiper roadmap__swiper",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "swiper-button-next swiper__btn roadmap__swiper-btn",
                          }),
                          (0, s.jsx)("ul", {
                            className: "swiper-wrapper roadmap__swiper-list",
                            children: a.map((e, t) =>
                              (0, s.jsx)(
                                "li",
                                {
                                  className: (0, l.Z)(
                                    "swiper-slide roadmap-card",
                                    3 === t && "active"
                                  ),
                                  children: (0, s.jsxs)("div", {
                                    className: "roadmap-card__wrapper",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "roadmap-card__header",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className: "roadmap-card__period",
                                            children: [
                                              (0, s.jsx)("span", {
                                                className:
                                                  "roadmap-card__period-quater",
                                                children: e.quater,
                                              }),
                                              (0, s.jsx)("span", {
                                                className:
                                                  "roadmap-card__period-month",
                                                children: e.year,
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "roadmap-card__step",
                                            children: e.phaze,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("ul", {
                                        className: "roadmap-card__list",
                                        children: e.list.map((e, a) =>
                                          (0, s.jsx)(
                                            "li",
                                            {
                                              className: "roadmap-card__item",
                                              children: e,
                                            },
                                            "roadmapSubItem" + t + "-" + a
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                },
                                "roadmapItem" + t
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        }
      },
      92212: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return ex;
            },
          });
        var s = a(57651),
          n = a(76163);
        a(99561);
        var i = a(36598),
          r = a(19988),
          l = a(32897),
          o = a(33448),
          d = a(54804),
          c = {
            src: "/_next/static/media/certic2.cfc28b06.svg",
            height: 61,
            width: 146,
            blurWidth: 0,
            blurHeight: 0,
          },
          u = {
            src: "/_next/static/media/certic3.ffe07b59.svg",
            height: 61,
            width: 147,
            blurWidth: 0,
            blurHeight: 0,
          },
          p = {
            src: "/_next/static/media/assure-yellow-banner.e8ddf5e2.svg",
            height: 62,
            width: 147,
            blurWidth: 0,
            blurHeight: 0,
          },
          m = a(43190),
          x = a(24178),
          y = {
            src: "/_next/static/media/defillama.3a2e29ff.webp",
            height: 132,
            width: 118,
            blurDataURL:
              "data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDcAAAABYNtIkqLLhP7zl/49jIXBOpNvVpNGRMSOEienGiB8dESTwCGzpkqfCYA+Qxg5NoD87cFWtl4BAFZQOCBqAAAAEAIAnQEqBwAIAAJAOCWwAnS6AAK6e7duAAD+nB5835BKvMOO2dc6OUfxGrpr9RiHXQoyss5ymgpkCUFEd8wfcyLdBeuL/8Vn/k0MYv39giTb9y+nQEtifCK+hkdvK0tKzbvKPmdcPgAAAA==",
            blurWidth: 7,
            blurHeight: 8,
          };
        a(75874);
        let h = (e) => {
            let { children: t } = e;
            return (0, s.jsx)("div", {
              className:
                "flex w-[335px] min-h-[461px] rounded-[28px] h-fit bg-black px-6 pt-[32px] pb-6",
              "data-sentry-component": "ActionWrapper",
              "data-sentry-source-file": "ActionWrapper.tsx",
              children: t,
            });
          },
          f = (e) => {
            let { firstLine: t, secondLine: a } = e;
            return (0, s.jsxs)("div", {
              className:
                "text-center text-[26px] font-extrabold font-unbounded uppercase text-white",
              "data-sentry-component": "ActionTitle",
              "data-sentry-source-file": "ActionTitle.tsx",
              children: [
                t,
                (0, s.jsx)("br", {}),
                (0, s.jsx)("span", {
                  className: "text-[#fff528]",
                  children: a,
                }),
              ],
            });
          };
        var A = a(89268);
        let b = (e) => {
          let { children: t, className: a } = e;
          return (0, s.jsx)("div", {
            className: (0, A.m6)(
              "text-center text-white/50 text-xs font-normal font-unbounded leading-[18px] whitespace-pre-wrap",
              a
            ),
            "data-sentry-component": "SecondaryText",
            "data-sentry-source-file": "SecondaryText.tsx",
            children: t,
          });
        };
        var g = {
          src: "/_next/static/media/accept.18a5f084.svg",
          height: 16,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        };
        let _ = (e) => {
            let { title: t, description: a } = e;
            return (0, s.jsxs)("div", {
              className: "justify-start items-start gap-2 inline-flex",
              "data-sentry-component": "ActionTarget",
              "data-sentry-source-file": "ActionTarget.tsx",
              children: [
                (0, s.jsx)(n.default, {
                  src: g,
                  alt: "accept",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "ActionTarget.tsx",
                }),
                (0, s.jsx)("div", {
                  className: "grow shrink basis-0",
                  children: (0, s.jsxs)("span", {
                    className:
                      "text-[#fbff3a] text-sm font-bold font-['Unbounded'] leading-[16.80px]",
                    children: [
                      t + " ",
                      (0, s.jsx)("span", {
                        className: "text-white",
                        children: a,
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          j = (e) => {
            let { children: t } = e;
            return (0, s.jsx)("div", {
              className:
                "w-fit px-2 py-1 bg-[#f9e727]/30 rounded-md backdrop-blur-[6px] text-center text-[#fbff3a] text-xs font-bold font-['Unbounded'] leading-[14.40px]",
              "data-sentry-component": "FilledText",
              "data-sentry-source-file": "FilledText.tsx",
              children: t,
            });
          };
        var w = a(10435),
          v = a(50677);
        let N = () =>
          (0, s.jsx)(v.default, {
            href: "/en/token",
            className: "w-full",
            "data-sentry-element": "Link",
            "data-sentry-component": "WhereToBuyButton",
            "data-sentry-source-file": "WhereToBuyButton.tsx",
            children: (0, s.jsx)("button", {
              className: (0, w.Z)(
                "button button--yellow !w-full !h-[53px] !text-sm",
                "button--arrow"
              ),
              children: "Where to buy",
            }),
          });
        var k = a(11129),
          C = a(88634);
        let B = (e) => {
          let { children: t, ...a } = e;
          return (0, s.jsx)(C.O, {
            className: "text-white/50 text-[13px] font-normal font-poppins",
            ...a,
            "data-sentry-element": "Link",
            "data-sentry-component": "ActionLink",
            "data-sentry-source-file": "ActionLink.tsx",
            children: t,
          });
        };
        var T = a(26131);
        let E = () =>
            (0, s.jsx)(h, {
              "data-sentry-element": "ActionWrapper",
              "data-sentry-component": "ActionNotConnected",
              "data-sentry-source-file": "ActionNotConnected.tsx",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, s.jsx)(f, {
                        firstLine: "FIRST PRESALE",
                        secondLine: "COMPLETED",
                        "data-sentry-element": "ActionTitle",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                      }),
                      (0, s.jsx)(b, {
                        "data-sentry-element": "SecondaryText",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                        children:
                          "You can still buy CYBRO tokens and stake them to earn rewards. Take advantage of the opportunity:",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, s.jsx)(_, {
                        title: "Buy CYBRO",
                        description: "on exchanges to join the ecosystem.",
                        "data-sentry-element": "ActionTarget",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                      }),
                      (0, s.jsx)(_, {
                        title: "Connect your wallet",
                        description: "if you’ve already purchased CYBRO.",
                        "data-sentry-element": "ActionTarget",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [
                      (0, s.jsx)(j, {
                        "data-sentry-element": "FilledText",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                        children: "Stake your tokens and enjoy",
                      }),
                      (0, s.jsx)(j, {
                        "data-sentry-element": "FilledText",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                        children: "15% APR rewards for 15 months",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3 items-right",
                    children: [
                      (0, s.jsx)(k.g2, {
                        className:
                          "button--black !h-[53px] !w-full !text-sm button--arrow--white !border-none",
                        label: "Connect wallet",
                        "data-sentry-element": "AppKitConnectButton",
                        "data-sentry-source-file": "ActionNotConnected.tsx",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          R = () =>
            (0, s.jsxs)("div", {
              className: "gap-[7px] inline-flex",
              "data-sentry-component": "AmountRaised",
              "data-sentry-source-file": "AmountRaised.tsx",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "opacity-70 text-center text-white text-sm font-semibold font-poppins leading-[14px]",
                  children: "Total USD raised:",
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-center text-white text-base font-black font-poppins leading-none",
                  children: "$7,000,000",
                }),
              ],
            });
        var U = a(74380);
        let O = [
            { icon: r.default, link: T.K.x, name: "x" },
            { icon: l.default, link: T.K.discord, name: "discord" },
            { icon: o.default, link: T.K.telegram, name: "telegram" },
            { icon: i.default, link: T.K.medium, name: "medium" },
          ],
          I = () =>
            (0, s.jsx)(h, {
              "data-sentry-element": "ActionWrapper",
              "data-sentry-component": "ActionEmptyWallet",
              "data-sentry-source-file": "ActionEmptyWallet.tsx",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4 items-center",
                    children: [
                      (0, s.jsx)(f, {
                        firstLine: "FIRST PRESALE",
                        secondLine: "COMPLETED",
                        "data-sentry-element": "ActionTitle",
                        "data-sentry-source-file": "ActionEmptyWallet.tsx",
                      }),
                      (0, s.jsx)(R, {
                        "data-sentry-element": "AmountRaised",
                        "data-sentry-source-file": "ActionEmptyWallet.tsx",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "text-center text-white text-base font-normal font-unbounded leading-normal",
                        children:
                          "Stay tuned for upcoming opportunities to buy CYBRO",
                      }),
                    ],
                  }),
                  (0, s.jsx)(N, {
                    "data-sentry-element": "WhereToBuyButton",
                    "data-sentry-source-file": "ActionEmptyWallet.tsx",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "p-4 bg-[#11121a] rounded-[18px] flex-col justify-center items-center gap-3.5 inline-flex",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-[195px] text-center text-white text-base font-normal font-poppins leading-[29px]",
                            children: "Subscribe to join our upcoming sales!",
                          }),
                          (0, s.jsx)("div", {
                            className: "inline-flex flex-wrap gap-2 w-full",
                            children: O.map((e) =>
                              (0, s.jsx)(
                                U.A,
                                {
                                  as: "a",
                                  href: e.link,
                                  target: "_blank",
                                  className:
                                    "flex-1 bg-[#1a1b25] rounded-xl h-[60px] w-full",
                                  children: (0, s.jsx)(n.default, {
                                    src: e.icon,
                                    alt: e.name,
                                    width: 34,
                                    height: 34,
                                  }),
                                },
                                e.name
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, s.jsx)(B, {
                        href: T.O.aboutCybro,
                        target: "_blank",
                        "data-sentry-element": "ActionLink",
                        "data-sentry-source-file": "ActionEmptyWallet.tsx",
                        children: "Learn more about CYBRO",
                      }),
                    ],
                  }),
                ],
              }),
            });
        var S = a(3784),
          P = a(4405),
          W = a(55137);
        let D = () =>
          (0, s.jsx)(v.default, {
            href: "https://app.cybro-ai.xyz/token",
            target: "_blank",
            className: "w-full",
            "data-sentry-element": "Link",
            "data-sentry-component": "ClaimButton",
            "data-sentry-source-file": "ClaimButton.tsx",
            children: (0, s.jsx)("button", {
              className: (0, w.Z)(
                "button button--yellow !w-full !h-[53px] !text-sm",
                "button--arrow"
              ),
              children: "Claim",
            }),
          });
        var L = a(44369),
          M = a(40574),
          Y = a(74855),
          Q = a(87818),
          F = a(37875),
          H = a(6182),
          V = a(11128),
          G = a(28573);
        let Z = () => {
            let {
              data: e,
              dataUpdatedAt: t,
              ...a
            } = (0, M.a)({
              queryFn: async () => {
                let e = new Y.r(F.AEF.rpcUrls.default.http[0]);
                if (!e) return z;
                let t = (0, V.b)(G.$.exchange, e),
                  a = await t.getCybroPrice();
                return Q.formatUnits(a);
              },
              staleTime: 3e4,
              refetchInterval: 3e4,
              queryKey: [H.QueryKey.CybroPrice],
              placeholderData: z,
            });
            return { price: null != e ? e : z, ...a };
          },
          z = "0";
        var K = {
            src: "/_next/static/media/cybro-token.96098f32.svg",
            height: 25,
            width: 24,
            blurWidth: 0,
            blurHeight: 0,
          },
          J = a(82884);
        let q = () => {
          let { address: e } = (0, S.Tj)(),
            { balance: t, isLoadingBalance: a } = (0, P.Y)(e),
            { price: i, isLoading: r } = Z(),
            l = new W.O(t.locked).plus(t.cybro).toNumber(),
            o = new W.O(l).multipliedBy(i).toString(),
            d = !r && !a;
          return (0, s.jsxs)("div", {
            className:
              "flex-col justify-start items-start gap-[9px] inline-flex",
            "data-sentry-component": "TotalCybroBalance",
            "data-sentry-source-file": "TotalCybroBalance.tsx",
            children: [
              (0, s.jsx)("div", {
                className:
                  "text-white/70 text-sm font-semibold font-poppins leading-[14px]",
                children: "Total CYBRO balance:",
              }),
              (0, s.jsxs)("div", {
                className: "flex-col justify-center items-start gap-3 flex",
                children: [
                  (0, s.jsxs)("div", {
                    className: "justify-start items-center gap-2 inline-flex",
                    children: [
                      (0, s.jsx)(n.default, {
                        src: K,
                        alt: "cybro",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "TotalCybroBalance.tsx",
                      }),
                      (0, s.jsx)(J.X, {
                        isLoaded: d,
                        className: "rounded-lg",
                        "data-sentry-element": "Skeleton",
                        "data-sentry-source-file": "TotalCybroBalance.tsx",
                        children: (0, s.jsxs)("div", {
                          className:
                            "justify-start items-baseline gap-0.5 flex",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-white text-[28px] font-semibold font-unbounded leading-7",
                              children: (0, L.u)(Math.trunc(l)),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-white/40 text-base font-light font-unbounded leading-normal",
                              children: (0, L.u)(l % 1).replace("0.", "."),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(J.X, {
                    isLoaded: d,
                    className: "rounded-lg",
                    "data-sentry-element": "Skeleton",
                    "data-sentry-source-file": "TotalCybroBalance.tsx",
                    children: (0, s.jsxs)("div", {
                      className:
                        "text-[#b2b2b2] text-base font-light font-unbounded leading-none",
                      children: [
                        "≈ $",
                        (0, L.u)(o, { maximumFractionDigits: 2 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
        var X = {
          src: "/_next/static/media/cybro-point.d4497772.svg",
          height: 24,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        };
        let $ = () => {
            var e;
            let { userProfile: t, isLoading: a } = (0, P.U)(),
              i =
                null !== (e = null == t ? void 0 : t.points) && void 0 !== e
                  ? e
                  : 0;
            return (0, s.jsxs)("div", {
              className:
                "flex-col justify-start items-start gap-[9px] inline-flex",
              "data-sentry-component": "TotalCybroPoints",
              "data-sentry-source-file": "TotalCybroPoints.tsx",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "text-white/70 text-sm font-semibold font-poppins leading-[14px]",
                  children: "Total CYBRO points:",
                }),
                (0, s.jsx)("div", {
                  className: "flex-col justify-center items-start gap-3 flex",
                  children: (0, s.jsxs)("div", {
                    className: "justify-start items-center gap-2 inline-flex",
                    children: [
                      (0, s.jsx)(n.default, {
                        src: X,
                        alt: "cybro-point",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "TotalCybroPoints.tsx",
                      }),
                      (0, s.jsx)(J.X, {
                        isLoaded: !a,
                        className: "rounded-lg",
                        "data-sentry-element": "Skeleton",
                        "data-sentry-source-file": "TotalCybroPoints.tsx",
                        children: (0, s.jsxs)("div", {
                          className:
                            "justify-start items-baseline gap-0.5 flex",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-white text-[28px] font-semibold font-unbounded leading-7",
                              children: (0, L.u)(Math.trunc(i)),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-white/40 text-base font-light font-unbounded leading-normal",
                              children: (0, L.u)(i % 1).replace("0.", "."),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          ee = () =>
            (0, s.jsx)(h, {
              "data-sentry-element": "ActionWrapper",
              "data-sentry-component": "ActionLockedCybro",
              "data-sentry-source-file": "ActionLockedCybro.tsx",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4 items-center",
                    children: [
                      (0, s.jsx)(f, {
                        firstLine: "FIRST PRESALE",
                        secondLine: "COMPLETED",
                        "data-sentry-element": "ActionTitle",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                      }),
                      (0, s.jsx)(R, {
                        "data-sentry-element": "AmountRaised",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-[25px]",
                    children: [
                      (0, s.jsx)(q, {
                        "data-sentry-element": "TotalCybroBalance",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                      }),
                      (0, s.jsx)($, {
                        "data-sentry-element": "TotalCybroPoints",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center w-full",
                    children: [
                      (0, s.jsx)(D, {
                        "data-sentry-element": "ClaimButton",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                      }),
                      (0, s.jsx)(B, {
                        href: T.O.aboutCybro,
                        target: "_blank",
                        "data-sentry-element": "ActionLink",
                        "data-sentry-source-file": "ActionLockedCybro.tsx",
                        children: "Learn more about CYBRO",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          et = () =>
            (0, s.jsx)(v.default, {
              href: "https://app.cybro-ai.xyz/staking",
              target: "_blank",
              className: "w-full",
              "data-sentry-element": "Link",
              "data-sentry-component": "ExploreStakingButton",
              "data-sentry-source-file": "ExploreStakingButton.tsx",
              children: (0, s.jsx)("button", {
                className: (0, w.Z)(
                  "button button--yellow !w-full !h-[53px] !text-sm",
                  "button--arrow"
                ),
                children: "Explore staking",
              }),
            }),
          ea = () =>
            (0, s.jsx)(h, {
              "data-sentry-element": "ActionWrapper",
              "data-sentry-component": "ActionCybro",
              "data-sentry-source-file": "ActionCybro.tsx",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 items-center",
                    children: [
                      (0, s.jsx)(f, {
                        firstLine: "STAKE YOUR",
                        secondLine: "CYBRO",
                        "data-sentry-element": "ActionTitle",
                        "data-sentry-source-file": "ActionCybro.tsx",
                      }),
                      (0, s.jsx)(b, {
                        "data-sentry-element": "SecondaryText",
                        "data-sentry-source-file": "ActionCybro.tsx",
                        children:
                          "You’ve claimed your CYBRO!\nNow make it work for you.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, s.jsx)(_, {
                        title: "Maximize Your Returns:",
                        description:
                          "Lock CYBRO now and watch your rewards grow.",
                        "data-sentry-element": "ActionTarget",
                        "data-sentry-source-file": "ActionCybro.tsx",
                      }),
                      (0, s.jsx)(_, {
                        title: "Secure and Effortless:",
                        description:
                          "No hassle, just consistent staking rewards.",
                        "data-sentry-element": "ActionTarget",
                        "data-sentry-source-file": "ActionCybro.tsx",
                      }),
                      (0, s.jsx)(_, {
                        title: "Act Now:",
                        description:
                          "The earlier you stake, the sooner you start earning.",
                        "data-sentry-element": "ActionTarget",
                        "data-sentry-source-file": "ActionCybro.tsx",
                      }),
                    ],
                  }),
                  (0, s.jsx)(q, {
                    "data-sentry-element": "TotalCybroBalance",
                    "data-sentry-source-file": "ActionCybro.tsx",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center w-full",
                    children: [
                      (0, s.jsx)(et, {
                        "data-sentry-element": "ExploreStakingButton",
                        "data-sentry-source-file": "ActionCybro.tsx",
                      }),
                      (0, s.jsx)(B, {
                        href: T.O.staking,
                        target: "_blank",
                        "data-sentry-element": "ActionLink",
                        "data-sentry-source-file": "ActionCybro.tsx",
                        children: "Learn more about CYBRO Staking",
                      }),
                    ],
                  }),
                ],
              }),
            });
        var es = {
          src: "/_next/static/media/locked-cybro.658f6034.svg",
          height: 25,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        };
        let en = () => {
            let { address: e } = (0, S.Tj)(),
              { balance: t, isLoadingBalance: a } = (0, P.Y)(e),
              i = new W.O(t.locked).toNumber();
            return (0, s.jsxs)("div", {
              className:
                "flex-col justify-start items-start gap-[9px] inline-flex",
              "data-sentry-component": "LockedCybroBalance",
              "data-sentry-source-file": "LockedCybroBalance.tsx",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "text-white/70 text-sm font-semibold font-poppins leading-[14px]",
                  children: "Locked CYBRO balance:",
                }),
                (0, s.jsx)("div", {
                  className: "flex-col justify-center items-start gap-3 flex",
                  children: (0, s.jsxs)("div", {
                    className: "justify-start items-center gap-2 inline-flex",
                    children: [
                      (0, s.jsx)(n.default, {
                        src: es,
                        alt: "locked-cybro",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "LockedCybroBalance.tsx",
                      }),
                      (0, s.jsx)(J.X, {
                        isLoaded: !a,
                        className: "rounded-lg",
                        "data-sentry-element": "Skeleton",
                        "data-sentry-source-file": "LockedCybroBalance.tsx",
                        children: (0, s.jsxs)("div", {
                          className:
                            "justify-start items-baseline gap-0.5 flex",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-white text-[28px] font-semibold font-unbounded leading-7",
                              children: (0, L.u)(Math.trunc(i)),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-white/40 text-base font-light font-unbounded leading-normal",
                              children: (0, L.u)(i % 1).replace("0.", "."),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          ei = () =>
            (0, s.jsx)(h, {
              "data-sentry-element": "ActionWrapper",
              "data-sentry-component": "ActionCompleted",
              "data-sentry-source-file": "ActionCompleted.tsx",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 items-center",
                    children: [
                      (0, s.jsx)(f, {
                        firstLine: "FIRST PRESALE",
                        secondLine: "COMPLETED",
                        "data-sentry-element": "ActionTitle",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                      }),
                      (0, s.jsx)(b, {
                        "data-sentry-element": "SecondaryText",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                        children:
                          "You’ve claimed and staked your CYBRO tokens — great move! But why stop there?",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mx-auto",
                    children: (0, s.jsx)(en, {
                      "data-sentry-element": "LockedCybroBalance",
                      "data-sentry-source-file": "ActionCompleted.tsx",
                    }),
                  }),
                  (0, s.jsx)(_, {
                    title: "Boost Your Rewards:",
                    description:
                      "Buy more CYBRO and stake them to maximize your returns",
                    "data-sentry-element": "ActionTarget",
                    "data-sentry-source-file": "ActionCompleted.tsx",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [
                      (0, s.jsx)(j, {
                        "data-sentry-element": "FilledText",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                        children: "Stake your tokens and enjoy",
                      }),
                      (0, s.jsx)(j, {
                        "data-sentry-element": "FilledText",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                        children: "15% APR rewards for 15 months",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center w-full",
                    children: [
                      (0, s.jsx)(N, {
                        "data-sentry-element": "WhereToBuyButton",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                      }),
                      (0, s.jsx)(B, {
                        href: T.O.aboutCybro,
                        target: "_blank",
                        "data-sentry-element": "ActionLink",
                        "data-sentry-source-file": "ActionCompleted.tsx",
                        children: "Learn more about CYBRO",
                      }),
                    ],
                  }),
                ],
              }),
            });
        var er = a(6177),
          el = JSON.parse(
            '[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_stakeToken","type":"address"},{"internalType":"uint256","name":"_lockTime","type":"uint256"},{"internalType":"uint32","name":"_percent","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"claim","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getRewardOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"percent","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockTime","type":"uint256"},{"internalType":"uint32","name":"_percent","type":"uint32"}],"name":"setLockTimeAndPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minBalance","type":"uint256"}],"name":"setMinBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeToken","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"unlockTimestamp","type":"uint256"},{"internalType":"uint256","name":"yearlyReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"force","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
          );
        let eo = (e, t) => new er.CH(e, el, t),
          ed = async (e) => {
            let { stakingAddress: t } = e,
              a = new Y.r(F.AEF.rpcUrls.default.http[0]);
            if (!a) throw Error("Wallet provider not found");
            let s = eo(t, a),
              n = await s.totalLocked();
            return Q.formatEther(n);
          },
          ec = (e) => {
            var t;
            let { stakingData: a } = e,
              { data: s, isLoading: n } = (0, M.a)({
                queryKey: [H.QueryKey.TotalStaked, a],
                enabled: !!a,
                queryFn: async () => {
                  if ((console.log("getTotalStaked"), console.log(a), !a))
                    return eu;
                  let e = new Y.r(F.AEF.rpcUrls.default.http[0]);
                  if ((console.log("provider", e), !e)) return eu;
                  let t = [];
                  for (let e of a) {
                    let a = await ed({ stakingAddress: e.address });
                    t.push({ amount: a, months: e.months });
                  }
                  return console.log(t), t;
                },
              });
            return {
              totalStaked: null != s ? s : eu,
              isStaked:
                null !==
                  (t =
                    null == s
                      ? void 0
                      : s.some((e) => {
                          let { amount: t } = e;
                          return !new W.O(t).isZero();
                        })) &&
                void 0 !== t &&
                t,
              isLoadingTotalStaked: n || !a,
            };
          },
          eu = [
            { amount: 0, months: 15 },
            { amount: 0, months: 10 },
            { amount: 0, months: 5 },
          ],
          ep = [
            {
              months: 5,
              percent: 10,
              address: "0xC222a3AD92a5A5C36d9128E4359A7Ed07FEa3a0f",
            },
            {
              months: 10,
              percent: 15,
              address: "0xe27C6D3799d37afDAE59627148b521cd99D90003",
            },
            {
              months: 15,
              percent: 20,
              address: "0x3E7f5cf6372B2b1F029c7294190057828f42b75F",
            },
            {
              months: 5,
              percent: 5,
              address: "0xD01D2b926EDB4E9DF43AbC2F97B0655845adA688",
            },
            {
              months: 10,
              percent: 10,
              address: "0x13a2A10C5f800199d2a1B2Db4972eFFDeE3EeaA5",
            },
            {
              months: 15,
              percent: 15,
              address: "0x03B7BEcB964ab0ebad805683d14f338504152707",
            },
          ],
          em = () => {
            let { isConnected: e, status: t, address: a } = (0, S.Tj)(),
              { balance: n, isLoadingBalance: i } = (0, P.Y)(a),
              { isStaked: r, isLoadingTotalStaked: l } = ec({
                stakingData: ep,
              }),
              o = new W.O(n.cybro).plus(n.locked).isZero(),
              d = new W.O(n.cybro).isZero(),
              c = new W.O(n.locked).isZero(),
              u = e && n.isClaimed && r,
              p = e && o && !u,
              m = e && d && !c && !u,
              x = e && !d && !u;
            return i || l || "connecting" === t
              ? (0, s.jsx)(J.X, {
                  className: "rounded-[28px] dark:bg-[#1A1B25]",
                  children: (0, s.jsx)(h, {}),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    !e && (0, s.jsx)(E, {}),
                    p && (0, s.jsx)(I, {}),
                    m && (0, s.jsx)(ee, {}),
                    x && (0, s.jsx)(ea, {}),
                    u && (0, s.jsx)(ei, {}),
                  ],
                });
          };
        function ex(e) {
          let { translations: t } = e;
          return (0, s.jsxs)("section", {
            className: "shop",
            id: "about",
            "data-sentry-component": "Shop",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, s.jsxs)("div", {
                className: "container_main shop__container px-[30px] sm:px-0",
                children: [
                  (0, s.jsxs)("div", {
                    className: "shop__column",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "relative mb-[9px] lg:mb-[13px] px-[14.75px] py-[1.48px] bg-gradient-to-br from-white to-[#6b6c78] rounded-2xl backdrop-blur-[153.41px] justify-center items-center gap-[14.75px] inline-flex",
                        style: {
                          background:
                            "linear-gradient(148deg, rgba(255, 255, 255, 0.10) 0%, rgba(107.50, 108.81, 120.66, 0.07) 100%)",
                        },
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute w-[394px] h-full opacity-25 bg-[#fbff3a] rounded-full blur-[150px]",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute w-[180px] h-[50%] opacity-30 bg-[#fbff3a] rounded-full blur-[68.71px]",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-[#fbff3a] text-[38px] lg:text-[105px] font-semibold font-unbounded uppercase leading-[67px] lg:leading-[126px]",
                            children: "Cybro",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-1.5 flex-col",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "title bg-title-access",
                            children: "Best place to grow",
                          }),
                          (0, s.jsx)("h2", {
                            className: "title bg-title-access",
                            children: "Your crypto assets",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("h1", {
                        className:
                          "mt-[212px] lg:mt-4 shop__desc !text-white/60 font-medium !max-w-[357px] !text-[13px] lg:!text-base",
                        children: [
                          "CYBRO is a multichain earn marketplace that offers",
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-white font-bold",
                            children:
                              "easy, secure access to top Web3 investment options, with AI-powered portfolio management",
                          }),
                          ", intuitive design, and responsive support",
                        ],
                      }),
                      (0, s.jsxs)("ul", {
                        className: "shop__validators shop__validators--desktop",
                        children: [
                          
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shop__join-wrap",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsxs)("span", {
                                className: "shop__join-text shop__join-desktop",
                                children: [
                                  "Join The Community",
                                  (0, s.jsx)("br", {}),
                                  "of ",
                                  (0, s.jsx)("span", {
                                    className: "text-white",
                                    children: "-----",
                                  }),
                                  " CYBRO-Holders",
                                ],
                              }),
                              (0, s.jsxs)("ul", {
                                className: "shop__socials laptop-desktop",
                                children: [
                                  (0, s.jsx)("li", {
                                    className: "shop__social",
                                    children: (0, s.jsx)("a", {
                                      href: "https://x.com/cybro_erc20",
                                      className: "shop__social-link",
                                      target: "_blank",
                                      children: (0, s.jsx)(n.default, {
                                        src: r.default,
                                        alt: "x",
                                        className: "shop__social-img",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx",
                                      }),
                                    }),
                                  }),
                                  (0, s.jsx)("li", {
                                    className: "shop__social",
                                    children: (0, s.jsx)("a", {
                                      href: "https://t.me/cybro_erc20",
                                      className: "shop__social-link",
                                      target: "_blank",
                                      children: (0, s.jsx)(n.default, {
                                        src: o.default,
                                        alt: "telegram",
                                        className: "shop__social-img",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [

                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex justify-center mt-0 lg:mt-[100px] mb-10",
                    id: "form",
                    children: (0, s.jsx)(em, {
                      "data-sentry-element": "Action",
                      "data-sentry-source-file": "index.tsx",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("span", {
                className: "shop__join-text mobile-tablet",
                children: "Verified by Professional Auditors",
              }),
              (0, s.jsxs)("div", {
                className: "shop__validators shop__validators--mobile",
                children: [
                  
                ],
              }),
              (0, s.jsxs)("span", {
                className: "shop__join-text mobile-tablet",
                children: [
                  "Join The Community",
                  (0, s.jsx)("br", {}),
                  "of ",
                  (0, s.jsx)("span", {
                    className: "text-white",
                    children: "18245",
                  }),
                  " CYBRO Holders",
                ],
              }),
              (0, s.jsxs)("ul", {
                className: "shop__socials mobile-tablet",
                children: [
                  (0, s.jsx)("li", {
                    className: "shop__social",
                    children: (0, s.jsx)("a", {
                      href: "https://x.com/cybro_erc20",
                      className: "shop__social-link",
                      target: "_blank",
                      children: (0, s.jsx)(n.default, {
                        src: r.default,
                        alt: "x",
                        className: "shop__social-img",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "index.tsx",
                      }),
                    }),
                  }),
                  
                  (0, s.jsx)("li", {
                    className: "shop__social",
                    children: (0, s.jsx)("a", {
                      href: "https://t.me/cybro_erc20",
                      className: "shop__social-link",
                      target: "_blank",
                      children: (0, s.jsx)(n.default, {
                        src: o.default,
                        alt: "telegram",
                        className: "shop__social-img",
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "index.tsx",
                      }),
                    }),
                  }),
                 
                ],
              }),
              (0, s.jsx)("span", {
                className: "shop__join-text mobile-tablet mt-[30px]",
                children: "We are listed on",
              }),
              (0, s.jsxs)("ul", {
                className: "shop__socials mobile-tablet",
                children: [
                  
                ],
              }),
            ],
          });
        }
      },
      39129: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            WhyUs: function () {
              return l;
            },
          });
        var s = a(57651);
        a(75874), a(50559);
        var n = a(10435),
          i = {
            src: "/_next/static/media/dot-yellow.1da8e8ce.svg",
            height: 60,
            width: 60,
            blurWidth: 0,
            blurHeight: 0,
          },
          r = a(76163);
        let l = () =>
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center mb-[75px] lg:mb-[117px]",
              "data-sentry-component": "WhyUs",
              "data-sentry-source-file": "WhyUs.tsx",
              children: [
                (0, s.jsx)("h2", {
                  className:
                    "text-white text-6xl font-bold font-unbounded uppercase leading-10 mb-[21px]",
                  children: "Why us",
                }),
                (0, s.jsx)("div", {
                  className: "block-why-us",
                  children: (0, s.jsxs)("div", {
                    className:
                      "grid grid-cols-[192px_1fr] gap-[24px_15px] lg:block w-[335px] lg:w-full mx-auto lg:mx-0 pt-[221px] lg:pt-0",
                    children: [
                      (0, s.jsx)(d, {
                        title: "Transparent",
                        subtitle: "ROI calculation",
                        className:
                          "lg:top-[25%] lg:bottom-[25%] lg:my-auto lg:left-0",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                      (0, s.jsx)(d, {
                        title: "Seamless",
                        subtitle: "User experience",
                        className: "lg:right-[65px] lg:bottom-[62px]",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                      (0, s.jsx)(d, {
                        title: "One-Clicks",
                        subtitle: "Simple investing in complex strategies",
                        className: "lg:left-[65px]",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                      (0, s.jsx)(d, {
                        title: "Perfect",
                        subtitle: "Portfolio management",
                        className: "lg:left-[65px] lg:bottom-[62px]",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                      (0, s.jsx)(d, {
                        title: "Secure",
                        subtitle: "Audited vaults and trusted protocols",
                        className: "lg:right-[65px]",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                      (0, s.jsx)(d, {
                        title: "24/7",
                        subtitle: "Support",
                        className:
                          "lg:top-[25%] lg:bottom-[25%] lg:my-auto lg:right-[52px]",
                        "data-sentry-element": "WhyUsPanel",
                        "data-sentry-source-file": "WhyUs.tsx",
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "flex gap-[18px] flex-wrap justify-center",
                  children: [
                    (0, s.jsx)(o, {
                      bg: "tokens",
                      title: "Deposit",
                      subtitle: "From Any token or fiat",
                      className: "order-last lg:order-first",
                      "data-sentry-element": "WhyUsCard",
                      "data-sentry-source-file": "WhyUs.tsx",
                      children:
                        "Easily add funds to your account using any cryptocurrency or traditional currency (fiat) of your choice.",
                    }),
                    (0, s.jsx)(o, {
                      bg: "animal",
                      title: "AI-broker",
                      subtitle: "For building user-based portfolio",
                      className: "order-first lg:order-last",
                      "data-sentry-element": "WhyUsCard",
                      "data-sentry-source-file": "WhyUs.tsx",
                      children:
                        "A smart system that builds a personalized investment portfolio based on your preferences, risk tolerance, and goals.",
                    }),
                  ],
                }),
              ],
            }),
          o = (e) => {
            let { bg: t, children: a, subtitle: i, title: r, className: l } = e;
            return (0, s.jsxs)("div", {
              className: (0, n.Z)(
                "card flex flex-col gap-[23px]",
                "animal" === t ? "card__bg-animal" : "card__bg-tokens",
                l
              ),
              "data-sentry-component": "WhyUsCard",
              "data-sentry-source-file": "WhyUs.tsx",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-[9px] lg:gap-[15px]",
                  children: [
                    (0, s.jsx)("strong", {
                      className:
                        "text-white text-[24px] lg:text-[32px] font-bold font-unbounded uppercase",
                      children: r,
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "w-auto lg:w-64 text-white/60 lg:text-white text-[13px] lg:text-2xl font-normal font-unbounded",
                      children: i,
                    }),
                  ],
                }),
                (0, s.jsx)("span", {
                  className:
                    "hidden lg:block text-white/60 text-base font-normal font-unbounded leading-tight",
                  children: a,
                }),
              ],
            });
          },
          d = (e) => {
            let { className: t, subtitle: a, title: l } = e;
            return (0, s.jsxs)("div", {
              className: (0, n.Z)(
                "h-fit flex flex-col gap-[25px] w-fit pt-0 lg:pt-[45px] relative lg:absolute lg:max-w-[244px] max-w-[192px]",
                t
              ),
              "data-sentry-component": "WhyUsPanel",
              "data-sentry-source-file": "WhyUs.tsx",
              children: [
                (0, s.jsx)(r.default, {
                  src: i,
                  alt: "dot-yellow",
                  className:
                    "size-4 lg:size-auto absolute top-0 lg:left-[25%] lg:right-[25%] mx-0 lg:mx-auto",
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "WhyUs.tsx",
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-[6px]",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "pl-5 lg:pl-0 text-left lg:text-center text-white text-[18px] lg:text-3xl font-bold font-unbounded",
                      children: l,
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "text-left lg:text-center text-white/60 text-[13px] lg:text-base font-normal font-unbounded",
                      children: a,
                    }),
                  ],
                }),
              ],
            });
          };
      },
      11128: function (e, t, a) {
        "use strict";
        a.d(t, {
          b: function () {
            return i;
          },
        });
        var s = a(6177),
          n = JSON.parse(
            '[{"inputs":[{"internalType":"address","name":"_weth","type":"address"},{"internalType":"address","name":"_usdb","type":"address"},{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"address","name":"_oracleCybro","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"USDB","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"buy","outputs":[{"internalType":"uint256","name":"cost","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cybro","outputs":[{"internalType":"contract IERC20Metadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimalsCYBRO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimalsUSDB","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCybroPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"buyOrSell","type":"bool"}],"name":"getPriceWithSpread","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"uint32","name":"_spread","type":"uint32"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxAmountToBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"maxAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IChainlinkOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleCybro","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"sell","outputs":[{"internalType":"uint256","name":"cost","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_spread","type":"uint32"}],"name":"setSpread","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"spread","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spreadPrecision","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"viewBuyByCybro","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"viewBuyByToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"viewSellByCybro","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"usdbOrWeth","type":"bool"}],"name":"viewSellByToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
          );
        let i = (e, t) => new s.CH(e, n, t);
      },
      78932: function () {},
      29110: function () {},
      39388: function () {},
      47921: function () {},
      27967: function () {},
      28910: function () {},
      92177: function () {},
      61237: function () {},
      99561: function () {},
      50559: function () {},
      67340: function (e) {
        e.exports = { blog: "Blog_blog__9koe_" };
      },
      54804: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/certic.5f838385.svg",
            height: 141,
            width: 339,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      43190: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/coingecko.1c2a54a7.svg",
            height: 31,
            width: 31,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      24178: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/coinmarketcap.1df5dd57.svg",
            height: 31,
            width: 30,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      44061: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/scenario-bg-sm-1.3dbba23c.png",
            height: 151,
            width: 126,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3klEQVR42mPg5WX7xsDA8B8J/2PnYf3PzcU6i4GBgeGbkZby/+bShP/zJuT+r8h2+C/DzPefV4DrP4ORIcM3NzeH/2nJSf/zM8L/x4da/fdzUvrPzcD2g0HPhO9beqTz/wRfW7jRMT5G/+dOtf/F0FJi8K0uw/i/nYHmf3dbo/+ZSUr/t60w/X/ppNMvhimthl/Too3BOjQVRf4vna70f3q/8v8oX5lfDAwM8v8ZGMT+CwMdICHECjVa8L+nl9pvBlUFhkl8XIz/2Tm4fsrKsP1i4+L4pSDH+VtDjfcrABiZVl9v3XUKAAAAAElFTkSuQmCC",
            blurWidth: 7,
            blurHeight: 8,
          });
      },
      48107: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/scenario-bg-sm-2.440ddc5c.png",
            height: 152,
            width: 126,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA0ElEQVR42h1Ky2rCQACc3TQxiXVr0rTBPk0pFAo99iIIPhAPCiJ4VsSL+CVePIj4M+JPKRh1EcfVgWGeuM+HWwAnINLAn34t/h5f3j7p5KIlDPaLeZ3TaYmrdYetTpXJzz8LHwlhkA76Zfa6pfNknHA07LPdaBDAASqIUgCU8p3AN5vVmmGFKnjWsFyVBtEjPc9jPswSEHTjL6q4aMZMdidtn3eOf848PNEP4pu6YUFDSIuApOMr2l6O1ywtmxDiBEDMzEObcmd8avyVewi5uQDat0dCt4/OhQAAAABJRU5ErkJggg==",
            blurWidth: 7,
            blurHeight: 8,
          });
      },
      68067: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/scenario-bg-sm-3.48d2fa9f.png",
            height: 151,
            width: 126,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5klEQVR42mMAgm9A/N/Lm/1/agbDf11Dhn8gPj8f0yywZFSk1v/CDPP/03uD/jdUOP5XUVD4D1LAEBjM8K0w0+h/irfX//y4lP/FsVH/0+NN/kspMPxgaGkS/NbTZPzfzdz1v56O5H9LPav/JVnG/wvyOH4xuDhJfSvIk/sfFcEPNkpRluV/frbm/wA/6V8MXMxyXxkYJP67u4r/T0ni++/hJvCfgUESiGV/MWiqavzXUFUCcuT/O9or/A8PM/yvr238X1VJ5TeDgoziZGlJuf+K8vI/2Zjkf2lr6v3y9jT7LSet8BUAC8pXCGsUETsAAAAASUVORK5CYII=",
            blurWidth: 7,
            blurHeight: 8,
          });
      },
      94960: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/scenario-bg-sm-4.0ae36571.png",
            height: 152,
            width: 126,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AQcJDfIlIR0K8fn//h0bGgD/+vf/6enoBunr7ZUBHh0d9xQYHQgZDP4AFhYWAMnb7AAOA/oA6OrmAAEbHiH2Fg8KCXBiU//5/P8Buby+AN7r+QDw7wT5ARAaIfZJNisJODUwAN7f3gAHAgYAoLnJAF5TGvsBAAAT9jc3FAkjHB8A1cvgACUo2gBKTwkADRIQ+wFYWDv1HxnsComP4f9NQvgBMCwf/+fyGAENEPD7AW1tZv/r6OAARkb3AP34KACrrQAAcXjDAEJCDv0BLC1ZjWRi0m1nZyz7oJ0YAaaf6QBcZbkBPDsz+v3XXhhZ0iQvAAAAAElFTkSuQmCC",
            blurWidth: 7,
            blurHeight: 8,
          });
      },
      32897: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/discord-3.b1aacda7.svg",
            height: 26,
            width: 34,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      19988: function (e, t, a) {
        "use strict";
        a.r(t),
          (t.default = {
            src: "/_next/static/media/twitter-3.e075a23f.svg",
            height: 24,
            width: 27,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
    },
    function (e) {
      e.O(
        0,
        [603, 981, 815, 955, 624, 322, 659, 106, 991, 971, 779, 744],
        function () {
          return e((e.s = 93287));
        }
      ),
        (_N_E = e.O());
    },
  ]);
