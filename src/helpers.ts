import { Purchase } from './types';

export const arePurchasesEqual = (p1: Purchase, p2: Purchase) => {
  const p1Entries = Object.entries(p1);
  const p2Entries = Object.entries(p2);

  if (p1Entries.length === p2Entries.length) {
    let equal = true;
    for (let i = 0; i < p1Entries.length; i++) {
      if (p1Entries[i][0] !== 'quantity') {
        if (
          p1Entries[i][0] !== p2Entries[i][0] ||
          p1Entries[i][1] !== p2Entries[i][1]
        ) {
          equal = false;
        }
      }
    }
    return equal;
  } else {
    return false;
  }
};
