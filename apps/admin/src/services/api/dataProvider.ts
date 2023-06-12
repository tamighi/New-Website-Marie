import query_string from "query-string";
import { typeRegister, ResourceString, ResourceType } from "types";
import { httpClient } from "../utils";
import { TypeGuard } from "../utils";

const apiUrl = process.env.BACKEND_URL;

export interface GetListParams<T> {
  range?: number[];
  sort?: { [K in keyof T]?: "ASC" | "DESC" };
  filter?: Partial<T>;
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

export interface UpdateParams {
  id: string | number;
  data: object;
}

export interface UpdateManyParams {
  ids: (string | number)[];
  data: object;
}

export interface CreateParams {
  data: object;
}

export interface DeleteParams {
  id: string | number;
}

export interface DeleteManyParams {
  ids: (string | number)[];
}

const tGS = new TypeGuard(typeRegister);

export const dataProvider = {
  getList: async <R extends ResourceString>(
    resource: ResourceString,
    params: GetListParams<ResourceType<R>> = {}
  ) => {
    const { sort, filter, range } = params;

    const query = {
      sort: JSON.stringify(sort),
      range: JSON.stringify(range),
      filter: JSON.stringify(filter),
    };

    console.log(query);

    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    console.log(url);

    const resp = await httpClient(url);

    if (!tGS.hasCount(resp) || !tGS.hasData(resp)) {
      throw Error("Unexpected response");
    }

    const { data, count } = resp;

    if (!tGS.isGenericArray<R>(data, resource)) {
      throw Error("Unexpected response");
    }
    return { data, count };
  },

  getOne: async <R extends ResourceString>(
    resource: ResourceString,
    params: GetOneParams
  ) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url);
    if (!tGS.hasData(resp)) {
      throw Error("Unexpected response object");
    }

    const data = resp.data;

    if (!tGS.isGeneric<R>(data, resource)) {
      throw Error("Unexpected response object");
    }
    return { data };
  },

  getMany: async (resource: string, params: GetManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url);
    if (tGS.hasCount(resp) && tGS.hasData(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  getManyReference: async (
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
    if (tGS.hasCount(resp) && tGS.hasData(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  update: async <R extends ResourceString>(
    resource: ResourceString,
    params: UpdateParams
  ) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });

    if (!tGS.hasData(resp)) {
      throw Error("Unexpected response object");
    }

    const data = resp.data;

    if (!tGS.isGeneric<R>(data, resource)) {
      throw Error("Unexpected response object");
    }

    return { data };
  },

  updateMany: async (resource: string, params: UpdateManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    if (tGS.hasData(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  create: async (resource: string, params: CreateParams) => {
    const url = `${apiUrl}/${resource}`;
    const resp = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    if (tGS.hasData(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
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
