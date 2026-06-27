
export const dataLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/prem-080");
  return response.json();
};
