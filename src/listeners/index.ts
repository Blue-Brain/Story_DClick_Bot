import listenerStart from './start';
import listenerEstimate from './estimate';

const runListeners = () => {
  listenerStart();
  listenerEstimate();
}

export default runListeners;