import { BoxProps } from '@mui/material';
import React from 'react';
type LoadableContentProps = BoxProps & {
    state: {
        empty: boolean;
        loading: boolean;
        error: boolean;
    };
    debug?: boolean;
    LoadedContent: React.ComponentType<any>;
    LoadedContentProps?: Record<string, unknown>;
    LoadingContent: React.ComponentType<any>;
    LoadingContentProps?: Record<string, unknown>;
    EmptyContent?: React.ComponentType<any>;
    EmptyContentProps?: Record<string, unknown>;
    ErrorContent?: React.ComponentType<any>;
    ErrorContentProps?: Record<string, unknown>;
};
declare function LoadableContent({ state, debug, LoadedContent, LoadedContentProps, LoadingContent, LoadingContentProps, EmptyContent, EmptyContentProps, ErrorContent, ErrorContentProps, ...props }: LoadableContentProps): JSX.Element;
export default LoadableContent;
//# sourceMappingURL=index.d.ts.map