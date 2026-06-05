type Test = {
    message: string;
}

type FrameWindowAction = 'CLOSE' | 'MINIMIZE' | 'MAXIMIZE';

type EventPayLoadMapping = {
    test: Test;
    getStatic: string;
    sendFrameAction: FrameWindowAction;
}

type UnsubscribeFunction = () => void;

interface Window {
    electron: {
        subscribeTest: (callback: (message: Test) => void) => UnsubscribeFunction;
        getStatic: () => Promise<string>;
        sendFrameAction: (payload: FrameWindowAction) => void;
    }
}