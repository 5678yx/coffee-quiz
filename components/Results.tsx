'use client';

import { Personality, PersonalityType } from '@/lib/quiz-data';
import Image from 'next/image';

interface ResultsProps {
  results: Record<PersonalityType, number>;
  personalities: Personality[];
  onRestart: () => void;
}

export default function Results({ results, personalities, onRestart }: ResultsProps) {
  // 按百分比排序
  const sortedPersonalities = [...personalities].sort((a, b) => results[b.id] - results[a.id]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        你的咖啡性格 🎉
      </h2>

      <div className="space-y-6 mb-8">
        {sortedPersonalities.map((personality) => (
          <div
            key={personality.id}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {personality.name}
                  </h3>
                  <span className="text-3xl font-bold text-purple-600">
                    {results[personality.id]}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full transition-all duration-1000"
                    style={{ width: `${results[personality.id]}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-4">
              <p className="text-lg font-semibold text-gray-800 mb-1">
                ☕ {personality.coffee}
              </p>
              <p className="text-gray-600 italic">
                "{personality.slogan}"
              </p>
            </div>

            <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={personality.image}
                alt={personality.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-white text-purple-600 font-bold text-lg py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-xl"
      >
        重新测试 🔄
      </button>
    </div>
  );
}
