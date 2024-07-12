export type User = {
  id: string;
  name: string;
};

export function getUser(): Promise<User> {
  return Promise.resolve({ id: "1", name: "Amandeep" });
}
