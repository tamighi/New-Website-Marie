import React from "react";

import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Title } from "components/typography/Title";
import { useReviews } from "hooks";
import { Button } from "lib";
import { Loader } from "components/utils/Loader/Loader";
import { EmptyData } from "components/errors/EmptyData";

import ReviewList from "./ReviewList";

const reviewPerPage = 10;

const GoldenBookPage = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, isError } = useReviews({
    pagination: { page, perPage: reviewPerPage },
  });

  return (
    <CenteredPage>
      <Title>Livre d'or</Title>
      {isLoading ? (
        <Loader />
      ) : !data || isError ? (
        <div>Error</div>
      ) : data.data.length === 0 ? (
        <EmptyData message="Aucun avis pour le moment" />
      ) : (
        <>
          <ReviewList reviews={data.data} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "8px",
            }}
          >
            <Button
              onClick={() => setPage((prevPage) => prevPage - 1)}
              disabled={page === 1}
            >
              Prev
            </Button>
            <span>Page {page}</span>
            <Button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={page === Math.ceil(data.count / reviewPerPage)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </CenteredPage>
  );
};

export default GoldenBookPage;
