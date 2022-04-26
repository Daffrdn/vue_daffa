import { luasKubus, luasLingkaran, luasPersegi, pembagian, pengurangan, penjumlahan, perkalian, rata_rata, sisabagi, volumeKubus } from '@/utils/operation.js'

describe("Melakukan Penjumlahan", ( ) => {
  test("Penjumlahandua bilangan positif", ( ) => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahandua bilangan negatif", ( ) => {
    expect(penjumlahan(-12, -8)).toBe(-20);
  });
  test("Penjumlahandua bilangan non numerik", ( ) => {
    expect(penjumlahan("1", "0")).toBe("10");
  });
});

describe("Melakukan Pengurangan", ( ) => {
  test("pengurangan dua bilangan positif", ( ) => {
    expect(pengurangan(8, 4)).toBe(4);
  });
  test("pengurangan dua bilangan negatif", ( ) => {
    expect(pengurangan(-12, -8)).toBe(-4);
  });
  test("pengurangan dua bilangan non numerik", ( ) => {
    expect(pengurangan("1", "0")).toBe(1);
  });
});

describe("Melakukan Pembagian", ( ) => {
  test("pembagian dua bilangan positif", ( ) => {
    expect(pembagian(72, 8)).toBe(9);
  });
  test("pembagian dua bilangan negatif", ( ) => {
    expect(pembagian(-20, -4)).toBe(5);
  });
  test("pembagian dua bilangan non numerik", ( ) => {
    expect(pembagian("1", "0")).toBe(Infinity);
  });
});

describe("Melakukan perkalian", ( ) => {
  test("perkalian dua bilangan positif", ( ) => {
    expect(perkalian(9, 9)).toBe(81);
  });
  test("perkalian dua bilangan negatif", ( ) => {
    expect(perkalian(-5, -5)).toBe(25);
  });
  test("perkalian dua bilangan non numerik", ( ) => {
    expect(perkalian("1", "0")).toBe(0);
  });
});

describe("Bilangan Rata-rata", ( ) => {
  test("rata-rata bilangan positif", ( ) => {
    expect(rata_rata(10, 15, 20, 25, 30)).toBe(20);
  });
  test("rata-rata bilangan negatif", ( ) => {
    expect(rata_rata(-10, -15, -20, -25, -30)).toBe(-20);
  });
  test("rata-rata bilangan non numerik", ( ) => {
    expect(rata_rata("1", "0", "1", "0", "1")).toBe(2020.2);
  });
});

describe("Melakukan Sisa Bagi", ( ) => {
  test("Sisa bagi dua bilangan positif", ( ) => {
    expect(sisabagi(9, 2)).toBe(1);
  });
  test("Sisa Bagi dua bilangan negatif", ( ) => {
    expect(sisabagi(-20, -3)).toBe(-2);
  });
  test("Sisa Bagi dua bilangan non numerik", ( ) => {
    expect(sisabagi("1", "0")).toBe(NaN);
  });
});

describe("Menghitung LuasPersegi", ( ) => {
  test("Menghitung LuasPersegi bilangan positif", ( ) => {
    expect(luasPersegi(9)).toBe(81);
  });
  test("Menghitung LuasPersegi bilangan negatif", ( ) => {
    expect(luasPersegi(-5)).toBe(25);
  });
  test("Menghitung LuasPersegi bilangan non numerik", ( ) => {
    expect(luasPersegi("1")).toBe(1);
  });
});

describe("Menghitung Luas Lingkaran", ( ) => {
  test("Menghitung Luas Lingkaran bilangan positif", ( ) => {
    expect(luasLingkaran(10)).toBe(314);
  });
  test("Menghitung Luas Lingkaran bilangan negatif", ( ) => {
    expect(luasLingkaran(-10)).toBe(314);
  });
  test("Menghitung Luas Lingkaran bilangan non numerik", ( ) => {
    expect(luasLingkaran("1")).toBe(3.14);
  });
});

describe("Menghitung Luas Kubuss", ( ) => {
  test("Menghitung Luas Kubuss bilangan positif", ( ) => {
    expect(luasKubus(9)).toBe(486);
  });
  test("Menghitung Luas Kubuss bilangan negatif", ( ) => {
    expect(luasKubus(-5)).toBe(150);
  });
  test("Menghitung Luas Kubuss bilangan non numerik", ( ) => {
    expect(luasKubus("1")).toBe(6);
  });
});

describe("Menghitung Volume Kubuss", ( ) => {
  test("Menghitung Volume Kubuss bilangan positif", ( ) => {
    expect(volumeKubus(9, 9, 9)).toBe(729);
  });
  test("Menghitung Volume Kubuss bilangan negatif", ( ) => {
    expect(volumeKubus(-5, -5, -5)).toBe(-125);
  });
  test("Menghitung Volume Kubuss bilangan non numerik", ( ) => {
    expect(volumeKubus("10","10","10")).toBe(1000);
  });
});