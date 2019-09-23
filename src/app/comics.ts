type Characters = {
  id: string;
  name: string;
  image: string;
  numberOfRoles: string;
  description: string;
};

export interface Comics {
  id: string;
  name: string;
  image: string;
  description: string;
  characters: Characters;
}
