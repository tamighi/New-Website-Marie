import React from "react";
import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Title } from "components/typography/Title";
import { useReviews } from "hooks/useReviews";
import { ReviewList } from "./ReviewList";
import { Button } from "lib";

const reviewPerPage = 10;

// TODO: Loading button / Error management
// TODO: correct way to handle params
// TODO: style pagination
export const GoldenBookPage = () => {
  const [page, setPage] = React.useState(1);

  const { data } = useReviews({ pagination: { page, perPage: reviewPerPage } });

  if (!data) {
    return null;
  }

  return (
    <CenteredPage>
      <Title>Livre d'or</Title>
      {data.data.length !== 0 ? (
        <ReviewList reviews={data.data} />
      ) : (
        <p>No reviews</p>
      )}
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
    </CenteredPage>
  );
};
