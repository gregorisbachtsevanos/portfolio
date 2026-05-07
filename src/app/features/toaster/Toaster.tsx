"use client";

import { useToast } from "@/app/features/toaster/hooks/useToast";
import { Toast, ToastProvider } from "@/app/features/toaster/components/Toast";
import { memo } from "react";
import ToastViewport from "./components/ToastViewport";
import ToastTitle from "./components/ToastTitle";
import ToastDescription from "./components/ToastDescription";
import ToastClose from "./components/ToastClose";

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

export default memo(Toaster);
