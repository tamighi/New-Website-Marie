import { Card } from "lib";
import { useNavigate } from "react-router-dom";

import { useGetList, useGetSearchParams } from "hooks";

import styles from "./CardLayout.css";
import { ResourceType } from "api/dataProvider";

export type Row<T extends object> = {
  [K in keyof T]: {
    Header: string;
    accessor: K;
    Cell?: (data: T[K]) => JSX.Element;
  };
}[keyof T];

export interface CardLayoutProps<T extends { id: string | number }> {
  resource: ResourceType;
  rows: Row<T>[];
}

export const CardLayout = <T extends { id: string | number }>({
  resource,
  rows,
}: CardLayoutProps<T>) => {
  const params = useGetSearchParams();

  const { data, isLoading, isError } = useGetList(resource, params);

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Fetching ...</div>;
  }

  if (!data?.data || isError) {
    return <div>Error !</div>;
  }

  if (data.count === 0) {
    return <div>No data found ... </div>;
  }

  return (
    <div className={styles.CardGrid}>
      {data.data.map((item: any) => (
        <Card
          key={item.id}
          onClick={() => navigate(`${item.id}`)}
          className={styles.Card}
        >
          {rows.map((row, idx) => {
            return (
              <div key={idx}>
                <h5 className={styles.CardHeader}>{row.Header}</h5>
                <span className={styles.CardContent}>
                  {row.Cell ? (
                    row.Cell(item[row.accessor])
                  ) : (
                    <>{item[row.accessor]}</>
                  )}
                </span>
              </div>
            );
          })}
        </Card>
      ))}
    </div>
  );
};
