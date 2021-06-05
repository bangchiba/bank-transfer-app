const tidy = (num: number, separator = '.') => {
  let numStr = num.toString();
  numStr += '';
  const x = numStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? `.${x[1]}` : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, `$1${separator}$2`);
  }
  return x1 + x2;
};

export const currency: (value: number, locale?: string) => string = (
  value: number,
  locale = ''
) => {
  switch (locale.toUpperCase()) {
    case 'ID':
      return `Rp ${tidy(Math.trunc(value))}`;

    default:
      return `Rp ${tidy(Math.trunc(value))}`;
  }
};


export const showBankName = (str: string) => {
  if (str.length <= 4) {
    return str.toUpperCase();
  }
  return str[0].toUpperCase() + str.slice(1);
}


