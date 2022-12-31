import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.data.message}</i>
        </p>
      </div>
    )
  } else {
    return <>Oops</>
  }
}
