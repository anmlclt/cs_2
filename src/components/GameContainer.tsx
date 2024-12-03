import React from 'react';
import { GameGrid } from './GameGrid';

interface GameContainerProps {
  gameState: {
    gridSize: number;
    mainColor: string;
    differentColor: string;
    differentSquareIndex: number;
  };
  onSquareClick: (index: number) => void;
  highlightedArea: number[];
  wrongSquareIndex: number | null;
  level: number;
}

export const GameContainer: React.FC<GameContainerProps> = ({
  gameState,
  onSquareClick,
  highlightedArea,
  wrongSquareIndex,
  level,
}) => (
  <div className="w-full min-h-screen pt-64 md:pt-16 md:pl-32">
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-[calc(100%-1rem)] md:w-[min(85vh,85vw)] aspect-square max-w-[800px] relative">
        <GameGrid
          gridSize={gameState.gridSize}
          mainColor={gameState.mainColor}
          differentColor={gameState.differentColor}
          differentSquareIndex={gameState.differentSquareIndex}
          onSquareClick={onSquareClick}
          highlightedArea={highlightedArea}
          wrongSquareIndex={wrongSquareIndex}
        />
      </div>
      <div className="mt-16 md:mt-20 h-[100px] w-full max-w-[728px] mx-auto flex items-center justify-center">
        <div id="game-ad-container" className="w-full h-full">
          {/* Ad container - will be populated by ad script */}
        </div>
      </div>
    </div>
  </div>
);