export interface ToastConfig {
  isShown?: boolean;
  severity?: Severity;
  message?: string;
  title?: string;
}
export enum Severity {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
export interface ToastState {
  option: ToastConfig;
  setOption: (option: ToastConfig | Partial<ToastConfig>) => void;
}