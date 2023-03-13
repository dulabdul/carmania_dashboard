import "@pankod/refine-mui";

export interface CustomTheme {
  customFontColor: {
        color: {
          fontPrimary : string,
          fontSecondary : string
        };
    };
    customBgColor : {
      color :{
        bgPrimary : string,
        bgHover : string
      }
    }
}

declare module "@pankod/refine-mui" {
    interface Theme extends import("@pankod/refine-mui").Theme, CustomTheme {}
    interface ThemeOptions
        extends import("@pankod/refine-mui").ThemeOptions,
            CustomTheme {}
}