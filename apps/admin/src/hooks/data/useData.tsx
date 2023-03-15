import {
  dataProvider,
  DeleteManyParams,
  DeleteParams,
  UpdateParams,
} from "api/dataProvider";
import { useMutation, useQueryClient } from "react-query";

interface QueryOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}
