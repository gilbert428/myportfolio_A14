import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'empty' | 'focused' | 'filled' | 'disabled';
}
