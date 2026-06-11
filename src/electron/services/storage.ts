import Store from "electron-store";
import { storageDefaults } from "../constants/storage.js";

export class StorageService {
  private store: Store<AppStoreSchema>;

  constructor() {
    this.store = new Store<AppStoreSchema>({
      defaults: storageDefaults,
    });
  }

  get<K extends keyof AppStoreSchema>(key: K): AppStoreSchema[K] {
    return this.store.get(key);
  }

  set<K extends keyof AppStoreSchema>(
    key: K,
    value: AppStoreSchema[K]
  ) {
    this.store.set(key, value);
  }
}

export const storageService = new StorageService();