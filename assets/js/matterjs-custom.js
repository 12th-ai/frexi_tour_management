var tagsContainer = $(".tags-container");
if (tagsContainer.length) {
    function initSimulation() {
        var e = Matter.Engine,
            t = Matter.Render,
            r = Matter.Events,
            s = Matter.MouseConstraint,
            a = Matter.Mouse,
            n = Matter.World,
            c = Matter.Bodies,
            l = e.create(),
            m = l.world,
            g = document.querySelector(".tags-container"),
            u = g.clientWidth,
            d = g.clientHeight,
            o = t.create({
                element: g,
                engine: l,
                options: {
                    width: u,
                    height: d,
                    pixelRatio: 2,
                    background: "transparent",
                    wireframes: !1,
                },
            }),
            h = c.rectangle(u / 2 + 160, d + 80, u + 320, 160, {
                render: { fillStyle: "#fff" },
                isStatic: !0,
            }),
            S = c.rectangle(-80, d / 2, 160, d, { isStatic: !0 }),
            p = c.rectangle(u + 80, d / 2, 160, 1200, { isStatic: !0 }),
            v = c.rectangle(u / 2 + 160, -80, u + 320, 160, { isStatic: !0 }),
            x = c.rectangle(u / 2 + 150, 200, 164, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_1.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            _ = c.rectangle(u / 2 - 150, 160, 122, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_2.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            f = c.rectangle(u / 2 + 250, 120, 104, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_3.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            y = c.rectangle(u / 2 - 75, 180, 105, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_4.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            w = c.rectangle(u / 2 - 74, 141, 194, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_5.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            M = c.rectangle(u / 2 + 174, 190, 116, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_6.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            b = c.rectangle(u / 2 - 142, 144, 167, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_7.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            E = c.rectangle(u / 2 - 10, 169, 139, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_8.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            L = c.rectangle(u / 2 - 242, 122, 174, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_9.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            k = c.rectangle(u / 2 + 60, 100, 185, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_10.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            B = c.rectangle(u / 2, 127, 170, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_11.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            C = c.rectangle(u / 2 - 59, 168, 60, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_12.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            q = c.rectangle(u / 2 + 110, 159, 110, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_13.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            I = c.rectangle(u / 2 - 110, 196, 101, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_14.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            O = c.rectangle(u / 2 - 10, 129, 101, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_15.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            R = c.rectangle(u / 2 - 80, 170, 101, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_16.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            W = c.rectangle(u / 2 - 110, 196, 101, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_17.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            D = c.rectangle(u / 2 + 90, 164, 101, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_18.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            }),
            H = c.rectangle(u / 2 + 80, 130, 191, 56, {
                chamfer: { radius: 20 },
                render: {
                    sprite: {
                        texture: "./assets/img/shape/elements_1_19.svg",
                        xScale: 1,
                        yScale: 1,
                    },
                },
            });
        n.add(l.world, [
            h,
            S,
            p,
            v,
            x,
            _,
            f,
            y,
            w,
            M,
            b,
            E,
            L,
            k,
            B,
            C,
            q,
            I,
            O,
            R,
            W,
            D,
            H,
        ]);
        var $ = a.create(o.canvas),
            j = s.create(l, {
                mouse: $,
                constraint: { stiffness: 0.2, render: { visible: !1 } },
            });
        n.add(m, j),
            (o.mouse = $),
            $.element.removeEventListener("mousewheel", $.mousewheel),
            $.element.removeEventListener("DOMMouseScroll", $.mousewheel);
        let z = !1;
        document.addEventListener("mousedown", () => (z = !0)),
            document.addEventListener("mousemove", () => (z = !1)),
            r.on(j, "mouseup", function(e) {
                var t = e.source,
                    r = l.world.bodies;
                if (!t.bodyB)
                    for (i = 0; i < r.length; i++) {
                        var s = r[i];
                        if (!0 === z &&
                            Matter.Bounds.contains(s.bounds, t.mouse.position)
                        ) {
                            var a = s.url;
                            null != a && window.open(a, "_blank");
                            break;
                        }
                    }
            }),
            e.run(l),
            t.run(o);
    }
    var containerElement = document.querySelector(".tags-container"),
        observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
                e.isIntersecting && (initSimulation(), t.disconnect());
            });
        }, {});
    observer.observe(containerElement);
}