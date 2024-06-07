import React, { lazy, Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

const MenuItemCard = lazy(() => import('./MenuItemCard'));

const LazyMenuItemCard = (props) => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <CircularProgress sx={{ color: 'orange' }} />
        </Box>
      }
    >
      <MenuItemCard {...props} />
    </Suspense>
  );
};

export default LazyMenuItemCard;
