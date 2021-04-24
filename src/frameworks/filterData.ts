/**
 * @description Takes array of tests or contracts and filters out relevant versions and/or tests.
 * Data is usually all the currently existing data.
 * Used primarily before deleting a set of data.
 * @todo Make this applicable to contracts too
 */
export function filterData(data: any, serviceName: string, version?: string, test?: string) {
  if (!data) throw new Error('Missing data in filterData!');

  return data.filter((service: any) => {
    if (Object.keys(service)[0] === serviceName) {
      if (!test && !version) return;
      else if (!test && version) delete service[serviceName][version];
      else if (test && version) {
        const tests = service[serviceName][version];
        if (!tests || tests.length === 0) return;

        const testNames = tests.map((item: any) => Object.keys(item)[0]);
        const testIndex = testNames.indexOf(test);
        tests.splice(testIndex, 1);
        service[serviceName][version].sort();
      }

      const IS_SERVICE_EMPTY = JSON.stringify(service[Object.keys(service)[0]]) === '{}';
      if (!IS_SERVICE_EMPTY) return service;
    }
    return !(Object.keys(service)[0] === serviceName);
  });
}
