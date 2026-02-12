'use client';

import { Question, PersonalityType } from '@/lib/quiz-data';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (personality: PersonalityType) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.personality)}
            className="w-full bg-white/90 backdrop-blur-sm hover:bg-white rounded-2xl p-5 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <span className="flex items-center gap-4">
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {option.icon}
              </span>
              <span className="text-gray-800 font-medium text-lg">
                {option.text}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
