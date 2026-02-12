'use client';

import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import Results from '@/components/Results';
import { questions, personalities, calculateResults, PersonalityType } from '@/lib/quiz-data';

type GameState = 'welcome' | 'quiz' | 'results';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('results');
    }
  };

  const handleRestart = () => {
    setGameState('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {gameState === 'welcome' && (
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                你的咖啡性格是什么? ☕
              </h1>
              <p className="text-xl text-white/90 mb-12 drop-shadow-lg">
                回答6个简单问题,发现最适合你的咖啡!
              </p>
              <button
                onClick={handleStart}
                className="bg-white text-purple-600 font-bold text-2xl md:text-3xl py-6 px-12 md:px-16 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                开始测验 🚀
              </button>
            </div>
          )}

          {gameState === 'quiz' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
              <ProgressBar current={currentQuestion + 1} total={questions.length} />
              <QuizQuestion
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </div>
          )}

          {gameState === 'results' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
              <Results
                results={calculateResults(answers)}
                personalities={personalities}
                onRestart={handleRestart}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
