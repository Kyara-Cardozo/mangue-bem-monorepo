// import { Mushroom } from "../Model/MushroomData";

// export const getMushroomData = (): Mushroom[] => [
//   {
//     id: 0,
//     image: `/mangue-bem-web/public/assets/logo.png`,
//     scientificName: "a",
//     popularName: "b",
//     observationNumber: 0,
//     iucn: "1",
//   },
//   {
//     id: 1,
//     image: `/mangue-bem-web/public/assets/logo.png`,
//     scientificName: "a",
//     popularName: "",
//     observationNumber: 0,
//     iucn: "",
//   },
//   {
//     id: 2,
//     image: `/src/assets/logo.png`,
//     scientificName: "",
//     popularName: "",
//     observationNumber: 0,
//     iucn: "",
//   },
//   {
//     id: 3,
//     image: `/mangue-bem-web/public/assets/logo.png`,
//     scientificName: "",
//     popularName: "",
//     observationNumber: 0,
//     iucn: "",
//   },
//   {
//     id: 4,
//     image: `/mangue-bem-web/public/assets/logo.png`,
//     scientificName: "",
//     popularName: "",
//     observationNumber: 0,
//     iucn: "",
//   },
// ];
import useGetApi from "./base/useApi";

const useGetMushroomData = () => {
  const [{ data, isLoading, isError }, setUrl] = useGetApi(
    "http://localhost:8080/v1/species",
    {},
  );
  return data;
};

export default useGetMushroomData;
