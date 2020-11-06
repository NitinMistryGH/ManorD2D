import {streets as mockStreets} from './streets/mock-streets';

export const REGISTERED_MOCKS =[];

const enabledMocks = {
    streets: {
        getStreets: true
    }
}

const logAxiosMock = (httpCode, response) => {
    return (config => {
        console.log(`[Axios] Mocking response for ${config.url}: ${httpCode}`, response);
        return [200, response];
    })
    
}

if (enabledMocks.streets.getStreets) {
    REGISTERED_MOCKS.push(mockAdapter => mockAdapter
        .onGet(window.CONFIG.streetsEndpoint)
        .reply(async config => logAxiosMock(200, mockStreets)(config))
    ) 
}



