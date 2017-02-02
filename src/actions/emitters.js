/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

export const emitSelected = (e) => ({
  type: 'EMIT_SELECTED',
  event: e,
});

export const updateListener = (listener) => ({
  type: 'UPDATE_LISTENER',
  listener,
});

export default true;
