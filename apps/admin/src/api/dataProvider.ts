import query_string from "query-string";
import { TypeGuardSource } from "./utils/generic.entity";
import { hasCount, hasDataArray, hasDataObject, httpClient } from "./utils";
import {
  devisDto,
  DevisDto,
  questionDto,
  QuestionDto,
  reviewDto,
  ReviewDto,
  serviceDto,
  ServiceDto,
} from "./types";

const apiUrl = "http://192.168.1.50:8000";

export interface GetListParams {
  range?: string;
  sort?: string;
  filter?: string;
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

type Type = {
  service: ServiceDto;
  question: QuestionDto;
  review: ReviewDto;
  devis: DevisDto;
};

export type ResourceString = "service" | "question" | "review" | "devis";

export type ResourceType<R extends ResourceString> = Type[R];

const typeGuardSource = new TypeGuardSource<ResourceString>({
  "review": reviewDto,
  "question": questionDto,
  "service": serviceDto,
  "devis": devisDto
});

export const dataProvider = {
  getList: async <R extends ResourceString>(
    resource: ResourceString,
    query: GetListParams
  ): Promise<{ count: number; data: ResourceType<R>[] }> => {
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;

    const resp = await httpClient(url);
    if (hasCount(resp) && hasDataArray(resp)) {
      const data = resp.data;
      if (!typeGuardSource.isGenericArray<ResourceType<R>>(data, resource)) {
        throw Error("Unexpected response");
      }
      return { ...resp, data };
    }
    throw Error("Unexpected response");
  },

  getOne: async (resource: string, params: GetOneParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url);
    if (hasDataObject(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  getMany: async (resource: string, params: GetManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    const resp = await httpClient(url);
    if (hasCount(resp) && hasDataArray(resp)) {
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
    if (hasCount(resp) && hasDataArray(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  update: async (resource: string, params: UpdateParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    if (hasDataObject(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
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
    if (hasDataArray(resp)) {
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
    if (hasDataObject(resp)) {
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
