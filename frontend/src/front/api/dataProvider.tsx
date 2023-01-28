import { fetchUtils } from "react-admin"
import { stringify } from "query-string"

const apiUrl = "http://192.168.1.50:8000"
const httpClient = fetchUtils.fetchJson

interface QueryParams {
  pagination: {
    page: number
    perPage: number
  }
  sort: {
    field: string
    order: string
  }
  filter: object
}

export const dataProvider = {
  getList: async (resource: string, params: QueryParams) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    }
    const url = `${apiUrl}/${resource}?${stringify(query)}`

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data,
      total: json.count,
    }))
  },

  getOne: async (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json.data,
    })),

  getMany: async (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }

    const url = `${apiUrl}/${resource}?${stringify(query)}`

    return httpClient(url).then(({ json }) => ({ data: json.data }))
  },

  getManyReference: async (resource: string, params: any) => {
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
    const url = `${apiUrl}/${resource}?${stringify(query)}`

    return httpClient(url).then(({ headers, json }) => ({
      data: json.data,
      total: json.count,
    }))
  },

  update: async (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data })),

  updateMany: async (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data }))
  },

  create: async (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.data.id },
    })),

  delete: (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json.data })),

  deleteMany: async (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json.data }))
  },
}
