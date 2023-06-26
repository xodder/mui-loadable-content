"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
function LoadableContent({ state, debug, LoadedContent, LoadedContentProps, LoadingContent, LoadingContentProps, EmptyContent, EmptyContentProps, ErrorContent, ErrorContentProps, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { position: "relative", ...props, children: [(0, jsx_runtime_1.jsx)(material_1.Fade, { in: !state.empty, timeout: 800, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { width: 1, height: 1, children: (0, jsx_runtime_1.jsx)(ConditionalRenderer, { render: !state.empty, children: (0, jsx_runtime_1.jsx)(LoadedContent, { ...LoadedContentProps }) }) }) }), debug && ((0, jsx_runtime_1.jsx)(material_1.Box, { position: state.loading ? 'relative' : 'absolute', top: 0, left: 0, width: 1, height: 1, style: { opacity: 0.8 }, children: (0, jsx_runtime_1.jsx)(LoadingContent, { ...LoadingContentProps }) })), (0, jsx_runtime_1.jsx)(material_1.Fade, { in: state.loading && !debug, timeout: 600, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { position: state.loading && state.empty ? 'relative' : 'absolute', top: 0, left: 0, width: 1, height: 1, children: (0, jsx_runtime_1.jsx)(ConditionalRenderer, { render: state.loading, children: (0, jsx_runtime_1.jsx)(LoadingContent, { ...LoadingContentProps }) }) }) }), EmptyContent && ((0, jsx_runtime_1.jsx)(material_1.Fade, { in: state.empty && !state.loading && !state.error, timeout: 600, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { position: state.empty || state.loading ? 'relative' : 'absolute', top: 0, left: 0, width: 1, height: 1, children: (0, jsx_runtime_1.jsx)(ConditionalRenderer, { render: state.empty || state.loading, children: (0, jsx_runtime_1.jsx)(EmptyContent, { ...EmptyContentProps }) }) }) })), ErrorContent && ((0, jsx_runtime_1.jsx)(material_1.Fade, { in: state.empty && state.error, timeout: 600, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { position: state.error ? 'relative' : 'absolute', top: 0, left: 0, width: 1, height: 1, children: (0, jsx_runtime_1.jsx)(ConditionalRenderer, { render: state.error, children: (0, jsx_runtime_1.jsx)(ErrorContent, { ...ErrorContentProps }) }) }) }))] }));
}
function ConditionalRenderer({ render, children }) {
    if (!render) {
        return null;
    }
    return children;
}
exports.default = LoadableContent;
//# sourceMappingURL=index.js.map