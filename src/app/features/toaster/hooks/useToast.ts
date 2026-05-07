"use client";

// Inspired by react-hot-toast library
import * as React from "react";
import { ACTION_TYPES } from "../helpers/constants";
import {
  addToRemoveQueue,
  listeners,
  reducer,
  subscribe,
  toast,
} from "../helpers/utils/toaster.utils";
import { IToasterState, TToasterAction } from "../types/toaster.type";

let memoryState: IToasterState = { toasts: [] };

export const dispatch = (action: TToasterAction) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

export const dismissToast = (toastId?: string) => {
  if (toastId) {
    addToRemoveQueue(toastId);
  } else {
    memoryState.toasts.forEach((toast) => {
      addToRemoveQueue(toast.id);
    });
  }

  dispatch({ type: ACTION_TYPES.DISMISS_TOAST, toastId });
};

const useToast = () => {
  const [state, setState] = React.useState<IToasterState>(memoryState);

  React.useEffect(() => {
    return subscribe(setState);
  }, []);

  return {
    ...state,
    toast,
    dismiss: dismissToast,
  };
};

export { toast, useToast };
