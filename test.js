import test from 'bron';
import assert from 'assert';
import { factory, runTasks } from 'release-it/test/util/index.js';

import EnvironmentVariableInjector from './index.js';

const namespace = 'environment-variable-injector';

test('should not throw', async t => {
  const options = { [namespace]: {} };
  const plugin = factory(EnvironmentVariableInjector, { namespace, options });
  await assert.doesNotReject(runTasks(plugin));
});
