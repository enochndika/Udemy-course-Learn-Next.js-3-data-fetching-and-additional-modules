export const Exemple = () => {
  const token = localStorage.getItem("jwt-token");

  return <div>{token}</div>;
};
