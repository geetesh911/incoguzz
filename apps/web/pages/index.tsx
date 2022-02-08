import { Button } from "@incoguzz/ui";
import { useGetUserQuery } from "@incoguzz/graphql";

export default function Web() {
  const { data, error } = useGetUserQuery();
  console.log(data, error);
  return (
    <div>
      <Button />
    </div>
  );
}
