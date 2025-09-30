import { test, expect } from '@playwright/test';
import { m1, m2 } from './JavaScriptCode/ImportModule.js';

console.log(m1());
console.log(m2());