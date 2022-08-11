import { fileURLToPath } from 'url';
import {
  defineNuxtModule,
} from '@nuxt/kit';
import { name, version } from '../package.json';

export interface ModuleOptions {
  addPlugin: boolean;
}

const CONFIG_KEY = 'example-module' as const;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: CONFIG_KEY,
  },
  async setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

    // Do nuxt module stuff
  },
});
