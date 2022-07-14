import { createContext, useCallback, useContext, useState } from 'react';

const FeedbackToastContext = createContext(null);
FeedbackToastContext.displayName = 'FeedbackToastContext';

const FeedbackToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState('info');
  const [message, setMessage] = useState('Default message');

  const handleOpenToast = useCallback((type, text) => {
    setOpen(true);
    setVariant(type);
    setMessage(text);
  }, []);

  const handleCloseToast = () => {
    setOpen(false);
  };

  const value = { open, variant, message, handleOpenToast, handleCloseToast };

  return <FeedbackToastContext.Provider value={value}>{children}</FeedbackToastContext.Provider>;
};
export const useFeedbackToast = () => {
  const context = useContext(FeedbackToastContext);
  if (!context) throw new Error(`useFeedbackToast must be used within FeedbackToastProvider`);

  return context;
};

export default FeedbackToastProvider;
