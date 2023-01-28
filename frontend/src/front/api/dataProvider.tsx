const apiUrl = "http://192.168.1.50:8000"

interface GetListParams<T> {
  pagination: { page: number; perPage: number }
  sort: { field: string; order: "ASC" | "DESC" }
  filter: T
}

interface GetOneParams {
  id: number
}

interface GetManyParams {
  ids: number[]
}

interface GetManyReferenceParams<T> {
  pagination: { page: number; perPage: number }
  sort: { field: string; order: "ASC" | "DESC" }
  filter: T
  target: string
  id: number | string
}

interface UpdateParams<T> {
  id: number
  data: T
}

interface UpdateManyParams<T> {
  ids: number[]
  data: T
}

interface CreateParams<T> {
  data: T
}

interface DeleteParams {
  id: number
}

interface DeleteManyParams {
  ids: number[]
}

const httpClient = async (url: string, requestInit?: RequestInit) => {
  return fetch(url, requestInit).then((resp) => {
    resp.ok ? resp.json : null
  })
}

export const dataProvider = {
  getList: async <T,>(resource: string, params: GetListParams<T>) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    }
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`

    return httpClient(url)
  },

  getOne: async (resource: string, params: GetOneParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`
    return httpClient(url)
  },

  getMany: async (resource: string, params: GetManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }

    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`
    return httpClient(url)
  },

  getManyReference: async <T,>(
    resource: string,
    params: GetManyReferenceParams<T>
  ) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    }
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`

    return httpClient(url)
  },

  update: async <T,>(resource: string, params: UpdateParams<T>) => {
    const url = `${apiUrl}/${resource}/${params.id}`
    return httpClient(url, { method: "PUT", body: JSON.stringify(params.data) })
  },

  updateMany: async <T,>(resource: string, params: UpdateManyParams<T>) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`
    return httpClient(url, { method: "PUT", body: JSON.stringify(params.data) })
  },

  create: async <T,>(resource: string, params: CreateParams<T>) => {
    const url = `${apiUrl}/${resource}`
    return httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    })
  },

  delete: (resource: string, params: DeleteParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`
    return httpClient(url, {
      method: "DELETE",
    })
  },

  deleteMany: async (resource: string, params: DeleteManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`
    return httpClient(url, {
      method: "DELETE",
    })
  },
}
