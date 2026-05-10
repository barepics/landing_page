declare module '*.css'

// interface Navigator {
//   readonly userAgentData?: NavigatorUAData;
// }

// interface NavigatorUABrandVersion {
//   brand: string;
//   version: string;
// }

// interface UADataValues {
//   architecture?: string;
//   bitness?: string;
//   brands?: NavigatorUABrandVersion[];
//   formFactor?: string;
//   fullVersionList?: NavigatorUABrandVersion[];
//   mobile?: boolean;
//   model?: string;
//   platform?: string;
//   platformVersion?: string;
//   uaFullVersion?: string; // Deprecated in favor of fullVersionList
//   wow64?: boolean;
// }

// interface NavigatorUAData {
//   readonly brands: NavigatorUABrandVersion[];
//   readonly mobile: boolean;
//   readonly platform: string;

//   // Method required to fetch 'architecture' and 'bitness'
//   getHighEntropyValues(hints: string[]): Promise<UADataValues>;

//   toJSON(): Record<string, any>;
// }
