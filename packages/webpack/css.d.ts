declare module "*.css" {
  const path: string;
  export default path;
}

declare module "*.css?raw" {
  const css: string;
  export default css;
}
