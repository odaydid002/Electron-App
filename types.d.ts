type Test = {
    message: string;
}

type EventPayLoadMapping = {
    test: Test;
    getStatic: string;
}

type UnsubscribeFunction = () => void;

interface Window {
    electron: {
        subscribeTest: (callback: (message: Test) => void) => UnsubscribeFunction;
        getStatic: () => Promise<string>;
    }
}