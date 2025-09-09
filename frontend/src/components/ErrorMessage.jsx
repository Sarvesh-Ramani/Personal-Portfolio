import React from 'react';
import { Button } from './ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ 
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
  showRetry = true,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 space-y-4 text-center ${className}`}>
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md">{message}</p>
      </div>
      {showRetry && onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm" className="mt-4">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

const ErrorPage = ({ 
  title = "Page Load Error",
  message = "Failed to load page data. Please check your connection and try again.",
  onRetry
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-colors duration-200">
      <ErrorMessage 
        title={title}
        message={message}
        onRetry={onRetry}
      />
    </div>
  );
};

export { ErrorPage };
export default ErrorMessage;