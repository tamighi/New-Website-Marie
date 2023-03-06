import query_string from "query-string";
import { hasCount, hasDataArray, hasDataObject, httpClient } from "./utils";

const apiUrl = "http://192.168.1.50:8000";

export interface GetListParams<T extends object> {
  pagination: { page: number; perPage: number };
  sort: { field: string; order: "ASC" | "DESC" };
  filter: Partial<T>;
}

export interface GetOneParams {
  id: string | number;
}

export interface GetManyParams {
  ids: (string | number)[];
}

export interface GetManyReferenceParams {
  pagination: { page: number; perPage: number };
  sort: { field: string; order: "ASC" | "DESC" };
  filter: object;
  target: string;
  id: string | number;
}

export interface UpdateParams<T extends object> {
  id: string | number;
  data: T;
}

export interface UpdateManyParams<T extends object> {
  ids: (string | number)[];
  data: T;
}

export interface CreateParams<T extends object> {
  data: T;
}

export interface DeleteParams {
  id: string | number;
}

export interface DeleteManyParams {
  ids: (string | number)[];
}

export const dataProvider = {
  getList: async <T extends object>(
    resource: string,
    params: GetListParams<T>
  ): Promise<{ data: T[]; count: number } | null> => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;

    const resp = await httpClient(url);
    if (hasCount(resp) && hasDataArray<T>(resp)) {
      return resp;
    }
    // throw error
    return null;
  },

  getOne: async <T extends object>(
    resource: string,
    params: GetOneParams
  ): Promise<{ data: T } | null> => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url);
    if (hasDataObject<T>(resp)) {
      return resp;
    }
    // throw error
    return null;
  },

  getMany: async <T extends object>(
    resource: string,
    params: GetManyParams
  ) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url);
    if (hasCount(resp) && hasDataArray<T>(resp)) {
      return resp;
    }
    return null;
  },

  getManyReference: async <T extends object>(
    resource: string,
    params: GetManyReferenceParams
  ) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url);
    if (hasCount(resp) && hasDataArray<T>(resp)) {
      return resp;
    }
    return null;
  },

  update: async <T extends object>(
    resource: string,
    params: UpdateParams<T>
  ): Promise<{ data: T } | null> => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    if (hasDataObject<T>(resp)) {
      return resp;
    }
    return null;
  },

  updateMany: async <T extends object>(
    resource: string,
    params: UpdateManyParams<T>
  ) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    if (hasDataArray(resp)) {
      return resp;
    }
    return null;
  },

  create: async <T extends object>(
    resource: string,
    params: CreateParams<T>
  ) => {
    const url = `${apiUrl}/${resource}`;
    const resp = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    if (hasDataObject(resp)) {
      return resp;
    }
    return null;
  },

  delete: (resource: string, params: DeleteParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: "DELETE",
    });
  },

  deleteMany: async (resource: string, params: DeleteManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    return httpClient(url, {
      method: "DELETE",
    });
  },
};
