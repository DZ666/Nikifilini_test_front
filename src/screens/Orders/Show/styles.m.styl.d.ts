declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    body: string;
    loading: string;
    pagination: string;
    screen: string;
    screenWrapper: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
