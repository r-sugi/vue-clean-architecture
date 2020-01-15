type BaseRepository = {
  fetchUser?: (id: number) => Promise<any>;
  saveUser?: (params: any) => void;
  clearUser?: () => void;
  getUser?: () => any;
};

export default BaseRepository;
