import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { useState as _, useCallback as y } from "react";
function N({ apiUrl: h, initialMessage: a }) {
  const [o, p] = _(
    a ? [{ role: "assistant", content: a }] : []
  ), [n, r] = _(!1), [l, c] = _(null), f = y(
    async (i) => {
      const b = i.trim();
      if (!b || n) return;
      const g = [...o, { role: "user", content: b }];
      p(g), r(!0), c(null);
      try {
        const s = await fetch(h, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: g })
        });
        if (!s.ok)
          throw new Error(`Request failed with status ${s.status}`);
        const d = await s.json();
        p((k) => [...k, { role: "assistant", content: d.reply }]);
      } catch (u) {
        c(u instanceof Error ? u.message : "Something went wrong. Please try again.");
      } finally {
        r(!1);
      }
    },
    [h, n, o]
  );
  return { messages: o, isLoading: n, error: l, sendMessage: f };
}
const v = "_root_k0e57_1", C = "_launcher_k0e57_27", B = "_panel_k0e57_39", w = "_header_k0e57_57", A = "_closeButton_k0e57_66", S = "_messages_k0e57_75", x = "_bubble_k0e57_84", j = "_bubbleUser_k0e57_93", O = "_bubbleAssistant_k0e57_99", $ = "_error_k0e57_104", E = "_form_k0e57_110", L = "_input_k0e57_117", M = "_sendButton_k0e57_127", e = {
  root: v,
  launcher: C,
  panel: B,
  header: w,
  closeButton: A,
  messages: S,
  bubble: x,
  bubbleUser: j,
  bubbleAssistant: O,
  error: $,
  form: E,
  input: L,
  sendButton: M
};
function D({
  apiUrl: h,
  title: a = "Ask me anything",
  initialMessage: o = "Hi! Ask me about my background, experience, or projects.",
  placeholder: p = "Type a message…"
}) {
  const [n, r] = _(!1), [l, c] = _(""), { messages: f, isLoading: i, error: b, sendMessage: g } = N({ apiUrl: h, initialMessage: o }), u = (s) => {
    s.preventDefault();
    const d = l;
    c(""), g(d);
  };
  return /* @__PURE__ */ m("div", { className: e.root, children: [
    n && /* @__PURE__ */ m("div", { className: e.panel, role: "dialog", "aria-label": a, children: [
      /* @__PURE__ */ m("div", { className: e.header, children: [
        /* @__PURE__ */ t("span", { children: a }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: e.closeButton,
            onClick: () => r(!1),
            "aria-label": "Close chat",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ m("div", { className: e.messages, children: [
        f.map((s, d) => /* @__PURE__ */ t(
          "div",
          {
            className: `${e.bubble} ${s.role === "user" ? e.bubbleUser : e.bubbleAssistant}`,
            children: s.content
          },
          d
        )),
        i && /* @__PURE__ */ t("div", { className: `${e.bubble} ${e.bubbleAssistant}`, children: "…" }),
        b && /* @__PURE__ */ t("div", { className: e.error, children: b })
      ] }),
      /* @__PURE__ */ m("form", { className: e.form, onSubmit: u, children: [
        /* @__PURE__ */ t(
          "input",
          {
            className: e.input,
            value: l,
            onChange: (s) => c(s.target.value),
            placeholder: p,
            disabled: i
          }
        ),
        /* @__PURE__ */ t("button", { type: "submit", className: e.sendButton, disabled: i || !l.trim(), children: "Send" })
      ] })
    ] }),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: e.launcher,
        onClick: () => r((s) => !s),
        "aria-label": n ? "Close chat" : "Open chat",
        children: n ? "✕" : "💬"
      }
    )
  ] });
}
export {
  D as Chatbot,
  N as useChat
};
