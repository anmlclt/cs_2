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
  <div className="w-full min-h-screen pt-52 md:pt-16 md:pl-32">
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
      
      {/* Ad Container */}
      <div className="mt-16 h-[100px] w-full max-w-[728px] mx-auto">
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-2705229865080724"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  </div>
);