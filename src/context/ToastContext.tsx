import { createContext, useContext, useState } from "react";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false })

    //ShowToast
    const showToast = (message: string) => {
        setToast({ message, visible: true });

        setTimeout(() => {
            setToast({ message: "", visible: false });
        }, 2500); 
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Popup */}
            {toast.visible && (
                <div className="fixed top-6 right-6 bg-green-500 text-black px-5 py-3 rounded-lg shadow-lg animate-fadeInUp z-50">
                    {toast.message}
                </div>
            )}
        </ToastContext.Provider>
    )

};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};