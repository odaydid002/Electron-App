type EventPayLoadMapping = {
    statistics: Statistics;
    getStaticData: StaticData;
}

interface Window {
    electron: {
        isDev: () => boolean;
    }
}