export const penjumlahan = (bilanganSatu, bilanganDua) => {
    return bilanganSatu + bilanganDua;
};

export const pengurangan = (bilanganSatu, bilanganDua) => {
    return bilanganSatu - bilanganDua;
};

export const pembagian = (bilanganSatu, bilanganDua) => {
    return bilanganSatu / bilanganDua;
};

export const perkalian = (bilanganSatu, bilanganDua) => {
    return bilanganSatu * bilanganDua;
};

export const rata_rata = (data1, data2, data3, data4, data5) => {
    return (data1 + data2 + data3 + data4 + data5) / 5;
};

export const sisabagi = (bilanganSatu, bilanganDua) => {
    return bilanganSatu % bilanganDua;
};

export const luasPersegi = (bilanganSatu) => {
    return bilanganSatu * bilanganSatu;
};

export const luasLingkaran = (r, Phi = 3.14) => {
    return Phi * r * r;
};

export const luasKubus = (bilanganDua, bilanganTiga, bilanganSatu = 6) => {
    bilanganTiga = bilanganDua
    return bilanganSatu * (bilanganTiga * bilanganDua);
};

export const volumeKubus = ( bilanganSatu, bilanganDua, bilanganTiga) => {
    return bilanganSatu * bilanganTiga * bilanganDua;
};