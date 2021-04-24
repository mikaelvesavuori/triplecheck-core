import { filterData } from '../src/frameworks/filterData';

import { providerContracts } from '../__testdata__/providerContracts';
import { consumerTests } from '../__testdata__/consumerTests';

describe('Failure cases', () => {
  test('It should throw an error if no argument is provided', () => {
    expect(() => {
      // @ts-ignore
      filterData();
    }).toThrow();
  });
});

describe('Success cases', () => {
  describe('Provider contracts', () => {
    test('It should filter out the "api-provider" block, when given a service name', () => {
      const filteredData = filterData(providerContracts, 'api-provider');

      expect(filteredData).toMatchObject([
        {
          'delivery-service': {
            '1.0.0': {
              pizza: 'pizza',
              time: 'time',
              totalPrice: 12345
            },
            '1.1.0': {
              homeDelivery: true,
              pizza: 'pizza',
              time: 'time',
              totalPrice: 12345
            }
          }
        }
      ]);
    });

    test('It should filter out a given version from the "api-provider" block, when given a service name and version', () => {
      const filteredData = filterData(providerContracts, 'api-provider', '1.0.0');

      expect(filteredData).toMatchObject([
        {
          'delivery-service': {
            '1.0.0': {
              pizza: 'pizza',
              time: 'time',
              totalPrice: 12345
            },
            '1.1.0': {
              homeDelivery: true,
              pizza: 'pizza',
              time: 'time',
              totalPrice: 12345
            }
          }
        }
      ]);
    });
  });

  describe('Consumer tests', () => {
    test('It should filter out the "api-provider" block, when given a service name', () => {
      const filteredData = filterData(consumerTests, 'api-provider');

      expect(filteredData).toMatchObject([
        {
          'delivery-service': {
            '1.0.0': [
              {
                ShouldTakeOrder: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345
                }
              }
            ],
            '1.1.0': [
              {
                ShouldTakeOrderWithHomeDelivery: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345,
                  homeDelivery: true
                }
              }
            ]
          }
        }
      ]);
    });

    test('It should filter out a given version from the "api-provider" block, when given a service name and version', () => {
      const filteredData = filterData(consumerTests, 'api-provider', '1.0.0');

      expect(filteredData).toMatchObject([
        {
          'delivery-service': {
            '1.0.0': [
              {
                ShouldTakeOrder: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345
                }
              }
            ],
            '1.1.0': [
              {
                ShouldTakeOrderWithHomeDelivery: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345,
                  homeDelivery: true
                }
              }
            ]
          }
        }
      ]);
    });

    test('It should filter out a given test, when given a service name and version and test', () => {
      // Jest keeps mutating the imported test data; using a locally-scoped set of test data so it can work as intended
      const testData = [
        {
          'delivery-service': {
            '1.0.0': [
              {
                ShouldTakeOrder: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345
                }
              }
            ],
            '1.1.0': [
              {
                ShouldTakeOrderWithHomeDelivery: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345,
                  homeDelivery: true
                }
              }
            ]
          }
        },
        {
          'api-provider': {
            '1.0.0': [
              {
                ShouldTakeCustomer: {
                  name: 'name',
                  email: 'email',
                  totalPrice: 12345
                }
              },
              {
                ShouldTakeCustomerWithTestField: {
                  name: 'name',
                  email: 'email',
                  totalPrice: 12345,
                  test: true
                }
              },
              {
                ShouldFail: {
                  name: 'name',
                  email: 'email'
                }
              }
            ]
          }
        }
      ];
      const filteredData = filterData(testData, 'api-provider', '1.0.0', 'ShouldTakeCustomer');

      expect(filteredData).toMatchObject([
        {
          'delivery-service': {
            '1.0.0': [
              {
                ShouldTakeOrder: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345
                }
              }
            ],
            '1.1.0': [
              {
                ShouldTakeOrderWithHomeDelivery: {
                  time: 'time',
                  pizza: 'pizza',
                  totalPrice: 12345,
                  homeDelivery: true
                }
              }
            ]
          }
        },
        {
          'api-provider': {
            '1.0.0': [
              {
                ShouldTakeCustomerWithTestField: {
                  name: 'name',
                  email: 'email',
                  totalPrice: 12345,
                  test: true
                }
              },
              {
                ShouldFail: {
                  name: 'name',
                  email: 'email'
                }
              }
            ]
          }
        }
      ]);
    });
  });
});
