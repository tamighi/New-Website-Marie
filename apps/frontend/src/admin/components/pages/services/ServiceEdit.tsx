import React from "react";

import { dataProvider } from "admin/api/dataProvider";
import { TextArea } from "admin/components/inputs/TextAreaInput";
import { TextInput } from "admin/components/inputs/TextInput";
import { useGetOne } from "admin/hooks/useData";
import { useDialog, useForm } from "lib";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { CreateServiceDto, isService } from ".";

export const ServiceEdit = () => {
  const { register, handleSubmit } = useForm<CreateServiceDto>();
  const { showDialog } = useDialog();

  const queryClient = useQueryClient();

  const { id } = useParams<"id">() as { id: string };
  const { data } = useGetOne("service", parseInt(id));

  const onSubmit = async (submitData: Partial<CreateServiceDto>) => {
    await dataProvider.update("service", {
      id: parseInt(id),
      data: submitData,
    });
    showDialog?.({ content: "Item updated !" });
    queryClient.invalidateQueries("service");
  };

  const memoizedData = React.useMemo(() => data?.data, [data]);
  if (!isService(memoizedData)) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("name")}
        defaultValue={memoizedData.name}
        autoFocus
      />
      <TextArea
        {...register("description")}
        defaultValue={memoizedData.description}
      />
      <input type="submit" />
    </form>
  );
};
