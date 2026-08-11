export function classifyTransaction(amount: number, isIntl: boolean, isNew: boolean, flagged: boolean): string {
  if (amount > 10000) {
    if (isIntl) {
      if (isNew) {
        if (flagged) {
          return 'high_risk_review';
        } else {
          return 'international_new_customer';
        }
      } else {
        return 'international_review';
      }
    } else {
      if (flagged) {
        return 'domestic_flagged';
      } else {
        return 'domestic_review';
      }
    }
  } else {
    if (isNew && flagged) {
      return 'small_flagged';
    }
    return 'approved';
  }
}
