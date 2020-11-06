import {REGISTERED_MOCKS} from './mock-register';

export const installAPIMocks = mockAdapter => {
    REGISTERED_MOCKS.forEach(mockRequest => mockRequest(mockAdapter));

    mockAdapter.onAny().passThrough();
}