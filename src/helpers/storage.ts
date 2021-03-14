class StorageService {
  private static id = 'todos';

  private static defaultTodos = ['Learn React', 'Learn Redux', 'Learn XState'].map(message => ({ done: false, message }));

  public getTodos() {
    const localCache = localStorage.getItem(StorageService.id);
    return (localCache && JSON.parse(localCache)) || StorageService.defaultTodos;
  }

  public updateTodos(data: any) {
    localStorage.setItem(StorageService.id, JSON.stringify(data))
  }
}

const storageService = new StorageService();
export default storageService;