"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { TToastActionElement, TToastProps } from "@/components/Toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = TToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: TToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

type TActionType = typeof actionTypes;

type TAction =
  | {
      type: TActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: TActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: TActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: TActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface IState {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const listeners = new Set<(state: IState) => void>();

let memoryState: IState = { toasts: [] };

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };
    case "DISMISS_TOAST": {
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
    case "REMOVE_TOAST":
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

const dispatch = (action: TAction) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

const subscribe = (listener: (state: IState) => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const dismissToast = (toastId?: string) => {
  if (toastId) {
    addToRemoveQueue(toastId);
  } else {
    memoryState.toasts.forEach((toast) => {
      addToRemoveQueue(toast.id);
    });
  }

  dispatch({ type: "DISMISS_TOAST", toastId });
};

type TToast = Omit<ToasterToast, "id">;

const toast = ({ ...props }: TToast) => {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dismissToast(id);

  dispatch({
    type: "ADD_TOAST",
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

const useToast = () => {
  const [state, setState] = React.useState<IState>(memoryState);

  React.useEffect(() => {
    return subscribe(setState);
  }, []);

  return {
    ...state,
    toast,
    dismiss: dismissToast,
  };
};

export { useToast, toast };
