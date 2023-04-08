import React from "react";
import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Title } from "components/typography/Title";
import { useReviews } from "hooks/useReviews";
import { ReviewList } from "./ReviewList";
import { Button } from "lib";
import { Loader } from "components/utils/Loader";

const reviewPerPage = 10;

// TODO: Loading button / Error management
// TODO: correct way to handle params
// TODO: style pagination
export const GoldenBookPage = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useReviews({
    pagination: { page, perPage: reviewPerPage },
  });

  return (
    <CenteredPage>
      <Title>Livre d'or</Title>
      {isLoading ? (
        <Loader />
      ) : !data ? (
        <div>Error</div>
      ) : data.data.length === 0 ? (
        <p>No reviews</p>
      ) : (
        <>
          <ReviewList reviews={data.data} />
          <Button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Prev
          </Button>
          {page}
          <Button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === Math.ceil(data.count / reviewPerPage)}
          >
            Next
          </Button>
        </>
      )}
    </CenteredPage>
  );
};
