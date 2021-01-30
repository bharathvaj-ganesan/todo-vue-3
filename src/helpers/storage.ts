class StorageService {
  private static id = 'todos';

  private static defaultTodos = ['Learn React', 'Learn Redux', 'Learn XState'];

  public getTodos() {
    const localCache = localStorage.getItem(StorageService.id);
    return localCache?.split(',') || StorageService.defaultTodos;
  }

  public updateTodos(data: any) {
    localStorage.setItem(StorageService.id, data)
  }
}

const storageService = new StorageService();
export default storageService;