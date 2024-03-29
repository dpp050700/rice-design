export const lightColor = function (p: number, from: string) {
  const i = parseInt;
  const r = Math.round;
  if (
    typeof p !== 'number' ||
    p < 0 ||
    p > 1 ||
    typeof from !== 'string' ||
    (from[0] != 'r' && from[0] != '#')
  )
    return null; // ErrorCheck
  const sbcRip = function sbcRip(d: any) {
    const l = d.length;
    const RGB: Record<any, any> = {};
    if (l > 9) {
      d = d.split(',');
      if (d.length < 3 || d.length > 4) return null; // ErrorCheck
      (RGB[0] = i(d[0].split('(')[1])),
        (RGB[1] = i(d[1])),
        (RGB[2] = i(d[2])),
        (RGB[3] = d[3] ? parseFloat(d[3]) : -1);
    } else {
      if (l == 8 || l == 6 || l < 4) return null; // ErrorCheck
      if (l < 6)
        d =
          '#' +
          d[1] +
          d[1] +
          d[2] +
          d[2] +
          d[3] +
          d[3] +
          (l > 4 ? '' + d[4] + d[4] : '');
      (d = i(d.slice(1), 16)),
        (RGB[0] = (d >> 16) & 255),
        (RGB[1] = (d >> 8) & 255),
        (RGB[2] = d & 255),
        (RGB[3] = -1);
      if (l == 9 || l == 5)
        (RGB[3] = r((RGB[2] / 255) * 10000) / 10000),
          (RGB[2] = RGB[1]),
          (RGB[1] = RGB[0]),
          (RGB[0] = (d >> 24) & 255);
    }
    return RGB;
  };
  const h = from.length > 9;

  const f = sbcRip(from);
  const t = sbcRip('#FFFFFF');
  if (!f || !t) return null; // ErrorCheck
  if (h)
    return (
      'rgb' +
      (f[3] > -1 || t[3] > -1 ? 'a(' : '(') +
      r((t[0] - f[0]) * p + f[0]) +
      ',' +
      r((t[1] - f[1]) * p + f[1]) +
      ',' +
      r((t[2] - f[2]) * p + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ')'
        : ',' +
          (f[3] > -1 && t[3] > -1
            ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000
            : t[3] < 0
            ? f[3]
            : t[3]) +
          ')')
    );
  return (
    '#' +
    (
      0x100000000 +
      r((t[0] - f[0]) * p + f[0]) * 0x1000000 +
      r((t[1] - f[1]) * p + f[1]) * 0x10000 +
      r((t[2] - f[2]) * p + f[2]) * 0x100 +
      (f[3] > -1 && t[3] > -1
        ? r(((t[3] - f[3]) * p + f[3]) * 255)
        : t[3] > -1
        ? r(t[3] * 255)
        : f[3] > -1
        ? r(f[3] * 255)
        : 255)
    )
      .toString(16)
      .slice(1, f[3] > -1 || t[3] > -1 ? undefined : -2)
  );
};
