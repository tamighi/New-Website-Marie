import React from "react";

import { FormContent, Loader, MainCard } from "components";
import { Button, Input, useDialog, useForm } from "lib";
import { useMutation } from "react-query";
import { dataProvider } from "services/api";

interface ChangePwdForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfilePage = () => {
  const [error, setError] = React.useState("")
  const { register, reset, handleSubmit } = useForm<ChangePwdForm>();
  const { showDialog } = useDialog();

  const { mutate, isLoading } = useMutation(
    (data: Partial<ChangePwdForm>) =>
      dataProvider.simpleRequest(
        `${process.env.BACKEND_URL}/auth/changePassword`,
        { method: "POST", body: data, json: true }
      ),
    {
      onSuccess: async (data) => {
        reset();
        showDialog?.({ content: "Mot de passe modifié avec succès" });
        setError("");
        const resp = await data.json();
        localStorage.setItem("access_token", resp.access_token as string);
      },
      onError: () => setError("Mot de passe incorrect")
    }
  );

  const onSubmit = (data: Partial<ChangePwdForm>) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("Les mots de passe ne sont pas identiques.")
      return;
    }
    mutate(data);
  };

  return (
    <MainCard>
      <h3>Changement de mot de passe</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContent>
          <Input
            {...register("oldPassword")}
            placeholder="Ancien mot de passe"
            required
            type="password"
          />
          <Input
            {...register("newPassword")}
            placeholder="Nouveau mot de passe"
            required
            type="password"
          />
          <Input
            {...register("confirmPassword")}
            placeholder="Confirmer nouveau mot de passe "
            required
            type="password"
          />
        </FormContent>
        {isLoading && <Loader size="small" />}
        {error !== "" && error}
        <Button type="submit" style={{ marginTop: "10px" }}>
          Envoyer
        </Button>
      </form>
    </MainCard>
  );
};

export default ProfilePage;
