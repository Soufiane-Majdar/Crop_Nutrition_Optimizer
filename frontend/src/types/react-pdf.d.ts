declare module '@react-pdf/renderer' {
  import { ComponentType, ReactElement, ReactNode } from 'react';

  export interface DocumentProps {
    children?: ReactNode;
  }

  export interface PageProps {
    size?: string;
    style?: any;
    children?: ReactNode;
  }

  export interface ViewProps {
    style?: any;
    children?: ReactNode;
  }

  export interface TextProps {
    style?: any;
    children?: ReactNode;
  }

  export interface StyleSheet {
    create: (styles: { [key: string]: any }) => { [key: string]: any };
  }

  export interface PDFDownloadLinkProps {
    document: ReactElement;
    fileName?: string;
    className?: string;
    children?: ((props: { loading: boolean }) => ReactNode) | ReactNode;
  }

  export const Document: ComponentType<DocumentProps>;
  export const Page: ComponentType<PageProps>;
  export const View: ComponentType<ViewProps>;
  export const Text: ComponentType<TextProps>;
  export const StyleSheet: StyleSheet;
  export const PDFDownloadLink: ComponentType<PDFDownloadLinkProps>;
} 