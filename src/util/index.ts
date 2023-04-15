// graphql-faker'ın ürettiği cdn.fakercloud.com adresinin domaini düştüğü için random üretmeyi böyle kullandım
export const createFakePhoto = (employeeNum: number) => {
  return `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${employeeNum}.jpg`;
};
