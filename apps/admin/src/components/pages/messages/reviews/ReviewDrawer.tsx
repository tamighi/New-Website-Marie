import { RightDrawer } from 'components/pages/core';
import { useGetOne } from 'hooks';
import { matchPath, useLocation } from 'react-router-dom';
import { MessageDetails } from '../common/MessageDetails'
import { isReview } from './reviews';

export const ReviewDrawer = () => {
  const { data } = useGetOne("reviews", { id: 1 });

  const location = useLocation();

  const match = matchPath("/reviews/:id", location.pathname);

  if (!data || !isReview(data.data)) {
    return null;
  }
  return (
    <RightDrawer open={!!match}>
      <MessageDetails message={data.data} />
    </RightDrawer>
  );
};
