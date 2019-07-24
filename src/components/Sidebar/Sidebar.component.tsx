import React from 'react';
import { Mountain } from '../../types';

interface SidebarProps {
  mountains: Mountain[];
}

export const Sidebar: React.FC<SidebarProps> = () => {
  return <div>This is the sidebar</div>;
};
