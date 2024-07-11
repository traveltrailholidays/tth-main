'use client';

import React, { FC, useCallback } from 'react';

interface CounterInputProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const CounterInput: FC<CounterInputProps> = ({ title, subtitle, value, onChange}) => {

    const onAdd = useCallback(() => {
        onChange(value+1);
    }, [onChange, value]);

  return (
    <div>CounterInput</div>
  )
}

export default CounterInput;