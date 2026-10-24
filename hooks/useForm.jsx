"use client";

import { useState } from "react";

const initialState = {
  message: undefined,
  error: undefined,
  pending: false,
};

/**
 * Simplified derivation of the upcoming React 19 RC's
 * useFormState implementation (now called: useActionState).
 */
export default function useForm(serverAction, onSuccess,) {
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({ ...initialState, pending: true });

    const formData = new FormData(e.currentTarget);
    const actionState = await serverAction(formData);

    if (actionState) {
      setFormState({ ...actionState, pending: false });

      if (!actionState?.error) {
        onSuccess();
        setFormState(initialState);
      }
    }
  };

  const resetErrors = () => {
    if (formState.error) {
      setFormState(prev => ({
        ...prev,
        message: undefined,
        error: undefined,
      }));
    }
  };

  return {
    formState,
    handleSubmit,
    resetErrors,
  }
}