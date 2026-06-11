type Test = {
    message: string;
}

type FrameWindowAction = 'CLOSE' | 'MINIMIZE' | 'MAXIMIZE' | 'RESTORE';

type Store<K extends keyof AppStoreSchema = keyof AppStoreSchema> = {
    key: K,
    value: AppStoreSchema[K]
}

type EventPayLoadMapping = {
    test: Test;
    getStatic: string;
    sendFrameAction: FrameWindowAction;
    setStorage: boolean;
    getStorage: string | number;
}

type UnsubscribeFunction = () => void;

interface AppStoreSchema {
    theme: Theme
}

interface Window {
    electron: {
        subscribeTest: (callback: (message: Test) => void) => UnsubscribeFunction;
        getStatic: () => Promise<string>;
        sendFrameAction: (payload: FrameWindowAction) => void;
        getStorage: (payload: keyof AppStoreSchema) => Promise<string | number>;
        setStorage: (payload: Store) => Promise<boolean>;
    }
}