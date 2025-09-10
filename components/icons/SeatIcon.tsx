import React from 'react';

export const SeatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    <path d="M20 18v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
    <path d="M4 10h16" />
    <path d="M14 14v4" />
    <path d="M10 14v4" />
    <path d="M17 6v4" />
    <path d="M7 6v4" />
  </svg>
);
