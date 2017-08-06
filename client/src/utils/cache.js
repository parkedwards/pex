// Utility functions for saving / retrieving state snapshots to LocalStorage
// Potentially use this for accessing authenticated views

// NOTE - there is conditional logic for the 'order-details' key in storage
// that looks for a 'timestamp' key + addresses whether or not we've elapsed that time
// look to refactor so that you don't have 'order-details'-specific cases
// i.e. pass in default arguments for the timestamp logic

const saveState = (toStore, storageKey = 'state') => {
  try {
    const existingState = loadState(storageKey);

    if (existingState && typeof existingState === 'object') {
      const newState = {
        ...existingState,
        ...toStore,
      };
      localStorage.setItem(storageKey, JSON.stringify(newState));
    } else {
      localStorage.setItem(storageKey, JSON.stringify(toStore));
    }
  } catch (err) {
    // Ignore write errors
    console.error('=== error with saveState() ===');
    console.error(err);
    return undefined;
  }
};

const loadState = (storageKey = 'state') => {
  try {
    const serializedState = localStorage.getItem(storageKey);

    if (serializedState === null) {
      return undefined;
    }

    const parsedState = JSON.parse(serializedState);

    if (storageKey === 'order-details') {
      if (new Date().getTime() < parsedState.timestamp) {
        return parsedState.payload;
      }
      localStorage.clear('order-details');
      return undefined;
    }

    return parsedState;
  } catch (err) {
    return undefined;
  }
};

const clearState = (storageKey = 'state') => {
  localStorage.removeItem(storageKey);
};

export default {
  saveState,
  loadState,
  clearState,
};
