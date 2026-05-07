import { Toast } from "../components/Toast";
import ToastAction from "../components/ToastAction";
import { ACTION_TYPES } from "../helpers/constants";

export type TToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export type TToastActionElement = React.ReactElement<typeof ToastAction>;

export type TToasterToast = TToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: TToastActionElement;
};

export type TActionType = typeof ACTION_TYPES;

export type TToasterAction =
  | {
      type: TActionType["ADD_TOAST"];
      toast: TToasterToast;
    }
  | {
      type: TActionType["UPDATE_TOAST"];
      toast: Partial<TToasterToast>;
    }
  | {
      type: TActionType["DISMISS_TOAST"];
      toastId?: TToasterToast["id"];
    }
  | {
      type: TActionType["REMOVE_TOAST"];
      toastId?: TToasterToast["id"];
    };

export interface IToasterState {
  toasts: TToasterToast[];
}

export type TToast = Omit<TToasterToast, "id">;
