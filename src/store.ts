import { observable } from "mobx";
import * as vscode from "vscode";
import { SwingWebView } from "./preview/webview";

export type ScriptType = "text/javascript" | "module";
export type ReadmeBehavior =
  | "none"
  | "inputComment"
  | "previewHeader"
  | "previewFooter";

export interface SwingInput {
  fileName?: string;
  prompt?: string;
  completionMessage?: string;
}

export interface SwingManifest {
  scripts?: string[];
  styles?: string[];
  layout?: string;
  showConsole?: boolean;
  template?: boolean;
  scriptType?: ScriptType;
  readmeBehavior?: ReadmeBehavior;
  tutorial?: string;
  input?: SwingInput;
}

export enum SwingLibraryType {
  script = "scripts",
  style = "styles",
}

export enum SwingFileType {
  config,
  markup,
  script,
  stylesheet,
  manifest,
  readme,
  tour,
}

interface ActiveSwing {
  rootUri: vscode.Uri;
  currentUri: vscode.Uri;

  hasTour: boolean;

  webView: SwingWebView;
  webViewPanel: vscode.WebviewPanel;
  console: vscode.OutputChannel;
  commentController?: vscode.CommentController;
}

export interface Store {
  activeSwing?: ActiveSwing;
}

export const store: Store = observable({});
