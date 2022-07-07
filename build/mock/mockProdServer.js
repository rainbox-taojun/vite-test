import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import systemMock from '../../mock/system';
import userMock from '../../mock/user';
import bigScreenMock from '../../mock/bigscreen'

export function setupProdMockServer() {
  createProdMockServer([...systemMock, ...userMock, ...bigScreenMock]);
}