import { dismissToast, dispatch } from "../../hooks/useToast";
import {
  IToasterState,
  TToast,
  TToasterAction,
  TToasterToast,
} from "../../types/toaster.type";
import { ACTION_TYPES, TOAST_LIMIT, TOAST_REMOVE_DELAY } from "../constants";

let count = 0;

export const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
export const listeners = new Set<(state: IToasterState) => void>();

export const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: ACTION_TYPES.REMOVE_TOAST,
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (
  state: IToasterState,
  action: TToasterAction,
): IToasterState => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case ACTION_TYPES.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };
    case ACTION_TYPES.DISMISS_TOAST: {
      const { toastId } = action;

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case ACTION_TYPES.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

export const subscribe = (listener: (state: IToasterState) => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const toast = ({ ...props }: TToast) => {
  const id = genId();

  const update = (props: TToasterToast) =>
    dispatch({
      type: ACTION_TYPES.UPDATE_TOAST,
      toast: { ...props, id },
    });
  const dismiss = () => dismissToast(id);

  dispatch({
    type: ACTION_TYPES.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};
