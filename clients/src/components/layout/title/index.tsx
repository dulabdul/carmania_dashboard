import React from 'react';
import { useRouterContext, TitleProps } from '@pankod/refine-core';
import { Button } from '@pankod/refine-mui';
import carMania from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button
      fullWidth
      variant='text'
      disableRipple>
      <Link to='/'>
        {collapsed ? (
          <img
            src={carMania}
            alt='CarMania Logo'
            width='28px'
          />
        ) : (
          <img
            src={carMania}
            alt='CarMania Logo'
            width='140px'
          />
        )}
      </Link>
    </Button>
  );
};