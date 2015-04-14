define(function (e, t, i) {
    "use strict";

    function a(e, t, i, a) {
        var o = $(t).eq(a),
            r = parseInt(o.val(), 10),
            n = function (t) {
                t = window.event || t;
                var n = Math.max(-1, Math.min(1, t.wheelDelta || -t.detail)),
                    l = parseInt(o.val(), 10),
                    s = 0 > n ? r + l : l - r,
                    d = e[0].scrollWidth - $(i).eq(a).width(),
                    c = s > d ? d : 0 > s ? 0 : s;
                o.val(c);
                var k = o.val();
                $(this).scrollLeft(k), t.preventDefault()
            };
        e.on("mousewheel", n)
    }

    function o() {
        $("<div>", {
            "class": "avril-parent-work",
            html: E
        }).insertBefore($("#editor-holder"));
        $(".working-set-splitview-btn").appendTo($(".AllTabWork")), $(".working-set-option-btn").appendTo($(".AllTabWork")), $("#working-set-list-container").appendTo($(".avril-tabs-work")), a($("#working-set-list-first-pane ul"), $(".avril-custom-val"), $(".open-files-container"), 0), a($("#working-set-list-second-pane ul"), $(".avril-custom-val"), $(".open-files-container"), 1)
    }

    function r() {
        var e = $("#workfile-avril");
        e.hide(), $(".all-workfile").click(function (t) {
            t.stopPropagation(), n(), e.toggle("fast")
        })
    }

    function n() {
        $("#workfile-avril").children().remove();
        var e = ($("<ul>", {
            id: "workSortable",
            "class": "list-group"
        }).appendTo("#workfile-avril"), $(".avril-tabs-work #working-set-list-second-pane"));
        e.length ? ($(".working-set-header-title").eq(0).clone().appendTo("#workSortable"), $(".avril-tabs-work #working-set-list-first-pane ul").children().clone(!0, !0).appendTo("#workSortable"), $(".working-set-header-title").eq(1).clone().appendTo("#workSortable"), $(".avril-tabs-work #working-set-list-second-pane ul").children().clone(!0, !0).appendTo("#workSortable")) : e.length || $(".avril-tabs-work #working-set-list-first-pane ul").children().clone(!0, !0).appendTo("#workSortable"), $("#workfile-avril").click(l)
    }

    function l() {
        $("#workfile-avril").is(":visible") && ($("#workfile-avril").hide(), $("#workfile-avril").children().remove())
    }

    function s() {
        $("#working-set-list-first-pane ul").attr("id", "sortableOneWork"), $("#working-set-list-second-pane ul").attr("id", "sortableTwoWork"), 2 === p.getPaneCount() && ($("#working-set-list-first-pane").addClass("CtmWorkFirstPane"), $("#working-set-list-second-pane").addClass("CtmWorkSecondPane"), $("#first-pane").width() === $("#second-pane").width() ? $(".avril-tabs-work").attr("data-orientation", "HORIZONTAL") : $(".avril-tabs-work").attr("data-orientation", "VERTICAL")), $(".CtmWorkFirstPane").length && $(".CtmWorkSecondPane").length ? "HORIZONTAL" === $(".avril-tabs-work").attr("data-orientation") && $("#editor-holder").hasClass("split-horizontal") ? ($(".CtmWorkFirstPane").css("width", Math.abs($("#first-pane").width() / 2 - 78)), $(".CtmWorkSecondPane").css("width", Math.abs($("#second-pane").width() / 2 - 50))) : ($(".CtmWorkFirstPane").css("width", Math.abs($("#first-pane").width() - 78)), $(".CtmWorkSecondPane").css("width", Math.abs($("#second-pane").width() - 50))) : 1 === p.getPaneCount() && ($("#working-set-list-first-pane").removeClass("CtmWorkFirstPane"), $("#working-set-list-first-pane").css("width", ""), $(".avril-tabs-work").removeAttr("data-orientation"))
    }

    function d() {
        u.toggle(W)
    }

    function c() {
        m.set(M, !m.get(M)), m.save()
    }

    function k() {
        var e = $("#fullScreenSidebar-avril");
        h.isVisible() ? e.html("←").attr("title", "Hide Sidebar").css("color", "#37b1ac") : e.html("→").attr("title", "Show Sidebar"), W.on("panelCollapsed", function () {
            s(), e.html("→").attr("title", "Show Sidebar"), e.css("color") && e.removeAttr("style")
        }), W.on("panelExpanded", function () {
            s(), e.html("←").attr("title", "Hide Sidebar").css("color", "#37b1ac")
        })
    }

    function b() {
        window.setTimeout(function () {
            var e = $(".content .working-file-tabs-container").length,
                t = $("#editor-holder #ext-documents").length,
                i = $(".content .gt-tabs").length,
                a = $("#status-bar .extension-toolbar").length,
                o = "<br> Brackets Working File Tabs",
                r = "<br> Documents Toolbar",
                n = "<br> Brackets File Tabs",
                l = "<br> Extensions Toolbar Reposition",
                s = function () {
                    return !e || t || i || a ? !t || e || i || a ? !i || t || e || a ? !a || e || t || i ? e && t && !i && !a ? [o, r] : e && i && !t && !a ? [o, n] : e && a && !t && !a ? [o, l] : t && i && !e && !a ? [r, n] : t && a && !e && !i ? [r, l] : i && a && !e && !t ? [o, r] : e && t && i && !a ? [o, r, n] : e && t && a && !i ? [o, r, l] : e && i && a && !t ? [o, n, l] : e && t && i && a ? [o, r, n, l] : void 0 : l : n : r : o
                },
                d = s();
            (e || t || i || a) && f.showModalDialog(T, "Tabs - Custom Working", S + "<br>" + d)
        }, 2e3)
    }
    var v = brackets.getModule("utils/AppInit"),
        w = brackets.getModule("utils/ExtensionUtils"),
        u = brackets.getModule("utils/Resizer"),
        h = (brackets.getModule("editor/EditorManager"), brackets.getModule("project/SidebarView")),
        p = brackets.getModule("view/MainViewManager"),
        f = (brackets.getModule("view/WorkspaceManager"), brackets.getModule("project/ProjectManager"), brackets.getModule("widgets/Dialogs")),
        g = brackets.getModule("preferences/PreferencesManager"),
        m = g.getExtensionPrefs("customToolbar"),
        S = "it is possible that a similar extension to this is interfering with the operation <br> Please uninstall the extensions similar to this.",
        T = "fjkgsd.avril",
        M = "red",
        W = $("#sidebar"),
        C = $("#main-toolbar");
    w.loadStyleSheet(i, "style.min.css");
    var P = '<input type="hidden" value="15" class="avril-custom-val">',
        I = '<input type="hidden" value="15" class="avril-custom-val">',
        x = '<div class="disInWork btn-sidebar-bks btn-alt-quiet" id="fullScreenSidebar-avril"></div>',
        A = '<div class="disInWork avril-tabs-work"></div>',
        q = '<div id="workfile-avril"><span></span></div>',
        F = '<div id="anotherPanel" class="disInWork btn-another-panel btn-alt-quiet">⇓</div>',
        y = '<div class="disInWork all-workfile btn-alt-quiet" title="Show worklist">≡</div>',
        R = '<div id="fullmainToolbar-avril" class="disInWork btn-mainToolbar-bks btn-alt-quiet" title="Hide toolBar">»</div>',
        B = P + I + x + A + F + y + R,
        E = '<div class="AllTabWork">' + B + "</div>" + q;
    p.on("currentFileChange", function () {
        s(), l()
    }).on("paneLayoutChange", function (e, t) {
        s(t), l()
    }).on("activePaneChange", s), $("#editor-holder").on("panelResizeUpdate", s), window.onresize = s, m.definePreference(M, "boolean", "true").on("change", function () {
        var e = $(".content"),
            t = m.get(M);
        t ? C.show("fast") : C.hide("fast");
        var i = t ? 30 : 0,
            a = t ? "»" : "«",
            o = t ? "Hide toolBar" : "Show toolBar";
        // e.animate({
        //     right: i
        // }, "fast", function () {
        //     $("#fullmainToolbar-avril").html(a).attr("title", o)
        // })
    });
    var H = function () {
        o(), r(), $("#fullScreenSidebar-avril").click(d), $("#fullmainToolbar-avril").click(c), k()
    };
    v.appReady(H), v.extensionsLoaded(b)
});