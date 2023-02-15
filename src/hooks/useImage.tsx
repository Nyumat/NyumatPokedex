import { useQuery } from "react-query";
import { singleFetcher } from "../utils/fetchers";

interface Props {
  url: string;
}

const useImage = (props: Props) => {
  const { url } = props;
  const { data, isLoading, error } = useQuery(["image", url], () => {
    return singleFetcher(url);
  });

  return { data, isLoading, error };
};

export default useImage;
