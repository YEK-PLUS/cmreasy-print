/* eslint-disable @typescript-eslint/no-explicit-any */
import z from 'zod';

export function typeCheck<T>(schema: z.ZodType, value: T): T {
  try {
    const res = schema.parse(value);
    return res;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw error;
    } else {
      throw new Error('Unexpected error');
    }
  }
}

export const _get = (
  obj: any,
  path: string,
  defaultValue: any = undefined,
): any => {
  const travel = (regexp: RegExp): any =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res: any, key: string) =>
          res !== null && res !== undefined ? res[key] : res,
        obj,
      );

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
