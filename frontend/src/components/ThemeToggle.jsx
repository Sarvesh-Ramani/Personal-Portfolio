import React from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
      ) : (
        <Sun className="h-4 w-4 text-yellow-500" />
      )}
    </Button>
  );
};

export default ThemeToggle;