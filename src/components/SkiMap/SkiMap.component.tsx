import React from 'react';
import { Mountain } from '../../types';

interface SkiMapProps {
  mountains: Mountain[];
}

export const SkiMap: React.FC<SkiMapProps> = () => {
  return <div>This is the ski map</div>;
};
