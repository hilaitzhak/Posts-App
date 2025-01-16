import { Loader2 } from 'lucide-react';
import { LoadingSpinnerProps } from '../interfaces/interace';

function LoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        <p className="text-gray-700 font-medium animate-pulse">{message}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;