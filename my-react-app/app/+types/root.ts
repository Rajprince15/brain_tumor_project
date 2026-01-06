import type { LinksFunction as RRLinksFunction, MetaFunction as RRMetaFunction } from "react-router";

export namespace Route {
  export type LinksFunction = RRLinksFunction;
  export type MetaFunction = RRMetaFunction;
  export type ErrorBoundaryProps = {
    error: unknown;
  };
}