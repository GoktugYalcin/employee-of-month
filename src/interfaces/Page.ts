import Employee from "./Employee";

export default interface pageProps {
  page: string;
  selectedEmployee?: Employee | null;
}
