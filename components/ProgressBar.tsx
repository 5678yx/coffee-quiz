interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/90 text-sm font-medium">
          问题 {current} / {total}
        </span>
        <span className="text-white/90 text-sm font-medium">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
