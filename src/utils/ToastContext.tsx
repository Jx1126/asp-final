import { useState, createContext, useContext } from 'react';

interface Types {
  showToast: (type: 'success' | 'error' | 'warning', message: string) => void;
  toastProps: { type: 'success' | 'error' | 'warning', message: string } | null;
  deleteToast: () => void;
}

const ToastContext = createContext<Types | undefined>(undefined);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastProps, setToastProps] = useState<{ type: 'success' | 'error' | 'warning', message: string } | null>(null);

  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    setToastProps({ type, message });
  }

  const hideToast = () => {
    setToastProps(null);
  }

  return (
    <ToastContext.Provider value={{ showToast: showToast, toastProps, deleteToast: hideToast }}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const context = useContext(ToastContext);
  if(!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };