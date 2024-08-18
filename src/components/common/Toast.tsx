import { useState } from 'react';
import { useToast } from '../../utils/ToastContext';

interface Props {
  type: 'success' | 'error' | 'warning';
  message: string;
}

const Toast = ({ type, message }: Props) => {

  console.log('Toast rendered', { type, message });

  const [showToast, setShowToast] = useState(true);
  const { deleteToast } = useToast();

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
        );
      case 'error':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
        );
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> </svg>
        );
      default:
        return null;
    }
  }

  const getDesign = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-400 text-green-700 ';
      case 'error':
        return 'bg-red-100 border-red-400 text-red-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-400 text-yellow-700';
      default:
        return '';
    }
  }

  const closeToast = () => {
    setShowToast(false);
    deleteToast();
  }

  if(!showToast) return null;

  return (
    <>
      <div role="alert" className={`alert flex skeleton border rounded-md px-4 py-3 max-w-xl fixed w-full z-[50] ${getDesign()}`}>
        {getIcon()}
        <span>{message}</span>
        <button onClick={closeToast} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current opacity-65 hover:opacity-85 ease-in-out transition-all h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </button>
      </div>
    </>
  )
};

export default Toast;