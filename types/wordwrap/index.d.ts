// Type definitions for wordwrap 1.0.9
// Project: https://github.com/substack/node-wordwrap
// Definitions by: Blake Embrey @blakeembrey, Homa Wong @unional
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare module 'wordwrap' {
  declare function wordwrap (options: wordwrap.Options): wordwrap.Wrap;
  declare function wordwrap (stop: number, options?: wordwrap.Options): wordwrap.Wrap;
  declare function wordwrap (start: number, stop: number, options?: wordwrap.Options): wordwrap.Wrap;

  declare namespace wordwrap {
    export var soft: typeof wordwrap;
    export function hard (options: Options): Wrap;
    export function hard (stop: number, options: Options): Wrap;
    export function hard (start: number, stop: number): Wrap;

    export interface Options {
      start?: number;
      stop?: number;
      mode?: string;
      wrap?: string;
    }

    export interface Wrap {
      (value: string): string;
    }
  }

  export = wordwrap;
}
