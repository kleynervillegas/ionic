export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
export const REGEX_EMAIL =
  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
export const REGEX_EMPTY = /\S/;
export const REGEX_SYMBOLS_ALLOWED = /[!@&/°;:¬*?^'"${}|[\]\\]/;
export const regexDate = /^([0-2]\d|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
export const regexDateParams =
  /^(\d{4})(\/|-)(0[1-9]|1[0-2])(\/|-)(?:0[0-9]|[12][0-9]|3[01])$/;
export const REGEX_SPACE = /^(?!\s)/;
export const regexSpecialSymbols = /[!@&/,°;:_'"¬*?^${}()|[\]\\]/;
export const REGEX_COMMON_TEXT = /^(?!\s)([.,()'"\-\w\s\d]*)$/;
export const REGEX_ONLY_LETTER = /^(?!\s)([a-zA-ZÀ-ÿ\s]*)$/;
export const REGEX_ALPHANUMERIC = /^(?!\s)([a-zA-Z\d]*)$/;
export const REGEX_ALPHANUMERIC_SPACE = /^(?!\s)([a-zA-ZÀ-ÿ0-9-,. ]*)$/;
export const REGEX_NUMERIC = /^[0-9]*$/;
export const REGEX_NUMERIC_GREATER_THAN_ZERO =
  /([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)/;
export const REGEX_TEXT_HAS_SPACE = /^\s+$/;
export const REGEX_NO_SPECIAL_SYMBOLS = /^[a-zA-ZÀ-ÿ0-9 ]*$/;
export const REGEX_ADDRESS_ROOM = /^(?!\s)([a-zA-ZÀ-ÿ0-9-,-.-/ ]*)$/;
export const REGEX_TWO_DECIMAL = /^\d+(\.\d{0,2})?$/;
