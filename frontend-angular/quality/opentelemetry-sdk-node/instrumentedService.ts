import { NodeSDK } from '@opentelemetry/sdk-node';

const sdk = new NodeSDK({ serviceName: 'fixture-service' });
sdk.start();

function processOrder(id: string): void {
  console.log(`processing order ${id}`);
}

processOrder('123');
sdk.shutdown();
