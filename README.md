# mui-loadable-content
An in-place component that encapsulates the server-state of an entity. Works well with [react-query](https://tanstack.com/query), infact, it was built to be used seemlessly with it but also generic in the sense that it can be used with any other mechanism.

## Installation
```console
$ pnpm add github:xodder/mui-loadable-content
```

## Usage
```jsx
import LoadableContent from '@xod/loadable-content';

function Example() {
  const { items, isLoading, isError } = useSomeServerState();

  return (
    <LoadableContent
      state={{
        empty: !items?.length,
        loading: isLoading,
        error: isError,
      }}
      LoadedContent={LoadedContent}
      LoadedContentProps={{ items }}
      LoadingContent={LoadingContent}
      EmptyContent={EmptyContent}
      ErrorContent={ErrorContent}
    />
  );
}

function LoadingContent({ items }: LoadedContentProps) {
  return ...;
}

function LoadingContent() {
  return ...;
}

function EmptyContent() {
  return ...;
}

function ErrorContent() {
  return ...;
}

```
